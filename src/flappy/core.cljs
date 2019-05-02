(ns flappy.core
  (:require
   [cljsjs.react]
   [cljsjs.react.dom]
   [sablono.core :as sab :include-macros true]
   [cljs.core.async :refer [<! chan sliding-buffer put! close! timeout]]
   [flappy.ai :as ai])
  (:require-macros
   [cljs.core.async.macros :refer [go-loop go]]))

(enable-console-print!)

(defn floor [x] (.floor js/Math x))

(defn translate [start-pos vel time]
  (floor (+ start-pos (* time vel))))

(defn px [n] (str n "px"))

(def horiz-vel -0.19)
(def gravity 0.05)
(def jump-vel 21)
(def start-y 212)
(def bottom-y 561)
(def flappy-x 212)
(def flappy-width 57)
(def flappy-height 41)
(def pillar-spacing 350)
(def pillar-gap 158) ;; 158
(def pillar-width 86)
(def bird {:alive 1 :pos-y start-y :jump 0})

(def starting-state {:timer-running false
                     :jump-count 0
                     :initial-vel 0
                     :start-time 0
                     :flappy-start-time 0
                     :birds (conj (repeat (:population ai/options) bird))
                     :pillar-list
                     [{:start-time 0
                       :pos-x 900
                       :cur-x 900
                       :gap-top 20}]})

(def starting-ai-state
  {:generation-nb 0
   :generation (ai/self-next-generation [])})

(defonce flap-state (atom starting-state))

(defonce ai-state (atom starting-ai-state))

;; AI integration

(defn position-to-next-pipe
  [{[{:keys [cur-x pos-x gap-top]}] :pillar-list :as st}]
  (-> (first (filter #(> (+ (:cur-x %) pillar-width) flappy-x) (:pillar-list st)))
      (:gap-top)
      (/ bottom-y)))

(defn generate-input
  [{:keys [pillar-list birds] :as st}]
  {:next-pipe (position-to-next-pipe st)
   :bird-position (map #(/ (:pos-y %) bottom-y) (filter #(= (:alive %) 1) birds))})

(defn to-jump-or-not-to-jump
  [{:keys [birds] :as st} outputs]
  (for [alive-bird (filter #(= (:alive %) 1) birds)
        output outputs]
    (if (> output 0.5)
      (assoc alive-bird :jump 1)
      (assoc alive-bird :jump 0))))

(defn generate-outputs
  [st]
  (for [network (:generation starting-ai-state)
        generated-input (generate-input st)
        input (:bird-position generated-input)]
    (ai/network-outputs network [input (:next-pipe generated-input)])))

(defn behaviour
  [st]
  (println (count (to-jump-or-not-to-jump st (generate-outputs st))))
  st)

(defn reset-state [_ cur-time]
  (-> starting-state
      (update-in [:pillar-list] (fn [pls] (map #(assoc % :start-time cur-time) pls)))
      (assoc
       :start-time cur-time
       :flappy-start-time cur-time
       :timer-running true)))

(defn curr-pillar-pos [cur-time {:keys [pos-x start-time]}]
  (translate pos-x horiz-vel (- cur-time start-time)))

;; Collision detection
(defn in-pillar? [{:keys [cur-x]}]
  (and (>= (+ flappy-x flappy-width)
           cur-x)
       (< flappy-x (+ cur-x pillar-width))))

(defn multi-in-pillar-gap? [flappy-y {:keys [gap-top]}]
  (and (< gap-top flappy-y)
       (> (+ gap-top pillar-gap)
          (+ flappy-y flappy-height))))

(defn multi-bottom-collision? [flappy-y]
  (>= flappy-y (- bottom-y flappy-height)))

(defn multi-collision? [{:keys [pillar-list] :as st}]
  (assoc st :birds
         (for [bird (:birds st)]
           (if (some #(or (and (in-pillar? %)
                               (not (multi-in-pillar-gap? (:pos-y bird) %)))
                          (multi-bottom-collision? (:pos-y bird))) pillar-list)
             (update-in bird [:alive] (constantly 0))
             bird))))

;; Bird movement
(defn multi-sine-wave [bird-y st]
  (+ bird-y (* 20 (.sin js/Math (/ (:time-delta st) 300)))))

(defn update-birds [{:keys [time-delta initial-vel birds jump-count] :as st}]
  (assoc st
         :birds
         (for [bird birds]
           (if (pos? (:jump bird))
             (let [cur-vel (- initial-vel (* time-delta gravity))
                   new-y   (+ (:pos-y bird) cur-vel)
                   new-y   (if (> new-y (- bottom-y flappy-height))
                             (- bottom-y flappy-height)
                             new-y)]
               (update-in bird [:pos-y] (constantly new-y)))
             (update-in bird [:pos-y] #(multi-sine-wave % st))))))

(defn score [{:keys [cur-time start-time] :as st}]
  (let [score (- (.abs js/Math (floor (/ (- (* (- cur-time start-time) horiz-vel) 544)
                                         pillar-spacing)))
                 4)]
    (assoc st :score (if (neg? score) 0 score))))

(defn game-over?
  [{:keys [birds] :as st}]
  (if (every? #(= (:alive %) 0) birds)
    (assoc st :timer-running false)
    st))

(defn jump [{:keys [cur-time jump-count] :as state}]
  (-> state
      (assoc
       :jump-count (inc jump-count)
       :flappy-start-time cur-time
       :initial-vel jump-vel)))

;; derivatives
(defn border [{:keys [cur-time] :as state}]
  (-> state
      (assoc :border-pos (mod (translate 0 horiz-vel cur-time) 23))))

;; pillars
(defn pillar-offset [{:keys [gap-top] :as p}]
  (assoc p
         :upper-height gap-top
         :lower-height (- bottom-y gap-top pillar-gap)))

(defn pillar-offsets [state]
  (update-in state [:pillar-list]
             (fn [pillar-list]
               (map pillar-offset pillar-list))))

(defn pillar [{:keys [cur-x pos-x upper-height lower-height]}]
  [:div.pillars
   [:div.pillar.pillar-upper {:style {:left (px cur-x)
                                      :height upper-height}}]
   [:div.pillar.pillar-lower {:style {:left (px cur-x)
                                      :height lower-height}}]])

(defn new-pillar [cur-time pos-x]
  {:start-time cur-time
   :pos-x      pos-x
   :cur-x      pos-x
   :gap-top    (+ 60 (rand-int (- bottom-y 120 pillar-gap)))})

(defn update-pillars [{:keys [pillar-list cur-time] :as st}]
  (let [pillars-with-pos (map #(assoc % :cur-x (curr-pillar-pos cur-time %)) pillar-list)
        pillars-in-world (sort-by
                          :cur-x
                          (filter #(> (:cur-x %) (- pillar-width)) pillars-with-pos))]
    (assoc st
           :pillar-list
           (if (< (count pillars-in-world) 3)
             (conj pillars-in-world
                   (new-pillar
                    cur-time
                    (+ pillar-spacing
                       (:cur-x (last pillars-in-world)))))
             pillars-in-world))))

;; core
(defn time-update [timestamp state]
  (-> state
      (assoc
       :cur-time timestamp
       :time-delta (- timestamp (:flappy-start-time state)))
      update-birds
      update-pillars
      behaviour
      multi-collision?
      game-over?
      score))

(defn world [state]
  (-> state
      border
      pillar-offsets))

(defn time-loop [time]
  (let [new-state (swap! flap-state (partial time-update time))]
    (when (:timer-running new-state)
      (go
        (<! (timeout 30))
        (.requestAnimationFrame js/window time-loop)))))

(defn start-game []
  (.requestAnimationFrame
   js/window
   (fn [time]
     (reset! flap-state (reset-state @flap-state time))
     (println "Next generation" flap-state)
     (time-loop time))))

(defn main-template [{:keys [score cur-time jump-count
                             timer-running border-pos
                             birds pillar-list]}]
  (sab/html [:div.board {:onMouseDown (fn [e]
                                        (swap! flap-state jump)
                                        (.preventDefault e))}
             [:h1.score score]
             (if-not timer-running
               [:a.start-button {:onClick #(start-game)}
                (if (< 1 jump-count) "RESTART" "START")]
               [:span])
             [:div (map pillar pillar-list)]
             ;; draw birds
             (for [bird birds]
               [:div.flappy {:style {:top (px (:pos-y bird))}}])
             [:div.scrolling-border {:style {:background-position-x (px border-pos)}}]]))

(let [node (.getElementById js/document "board-area")]
  (defn renderer [full-state]
    (.render js/ReactDOM (main-template full-state) node)))

(add-watch flap-state :renderer (fn [_ _ _ n]
                                  (renderer (world n))))

(reset! flap-state @flap-state)
