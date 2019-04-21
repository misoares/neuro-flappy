;; (def network (network-perceptron-generation 1 [1] 1))
(def network [{:neurons '({:value 0, :weights (-0.35481928421286213)})} {:neurons '({:value 0, :weights (0.37271652134518973)} {:value 0, :weights (-0.4212436804632169)})}])

(println "BEFORE" network)


;; (println "after" (neuron-calculation (:neurons (get network 0)) (:neurons (get network 1))))


(println "AFTER" (network-outputs network [2 2]))

;; (network-perceptron-generation 1 '(1 2) 1)
;;   (defn test
;;     [input, values, output]
;;     (loop [in input
;;            vals values
;;            out output
;;            result []]
;;       (if (empty? vals)
;;         (conj result [out in])
;;         (recur (first vals) (next vals) out (conj result [in (first vals)]))
;;     )))

;; ;; expected is [[1,1] [1,2] [2,3] [3,4]]
;;   (test 1 [2] 4)
