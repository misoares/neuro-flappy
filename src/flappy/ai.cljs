(ns flappy.ai)

(def options
  {:network [1 [1] 1]
   :population 50
   :elitism 0.2
   :random-behaviour 0.2
   :mutation-rate 0.1
   :mutation-range 0.5
   :historic 0
   :low-historic false
   :score-sort -1
   :nb-child 1})

(defn activation
  [a]
  (/ 1 (+ 1 (Math/exp (- a)))))

(defn random-clamped
  []
  (- 1 (* 2 (Math/random))))

;; Neuron

;; get weights
(defn neuron-populate
  [nb]
  (take nb (repeatedly #(random-clamped))))

(defn neuron-create
  [nb]
  {:value 0
   :weights (neuron-populate nb)})

(defn neuron-update
  [neuron value]
  {:value value
   :weights (:weights neuron)})
;; Layer

(defn layer-populate
  [nb-neurons nb-inputs]
  (take nb-neurons (repeatedly #(neuron-create nb-inputs))))

(defn layer-create
  [nb-neurons nb-inputs]
  {:neurons (layer-populate nb-neurons nb-inputs)})

;; Neural network
(defn network-perceptron-generation
  [input, hiddens, output]
  (loop [in input
         vals hiddens
         out output
         result []]
    (if (empty? vals)
      (conj result (layer-create out in))
      (recur (first vals) (rest vals) out (conj result (layer-create in (first vals)))))))

;; TODO: get save
(defn get-save
  [network]
  ())

;; TODO: set save
(defn set-save
  [save])

(defn neuron-calculation
  [previous-layer-neurons current-layer-neuron]
  (->> current-layer-neuron
       (:weights)
       (flatten)
       (map * (map :value previous-layer-neurons))
       (reduce +)
       (activation)
       (neuron-update current-layer-neuron)))

(defn compute-per-neuron
  [previous-layer-neurons current-layer-neurons]
  (for [neuron current-layer-neurons]
    (neuron-calculation previous-layer-neurons neuron)))

;; compute
(defn network-compute
  [layers inputs]
  (let [secound-inputs {:neurons (map neuron-update (:neurons (first layers)) inputs)}
        rest-layers (rest layers)]
    (loop [layer rest-layers
           input secound-inputs
           result [secound-inputs]]
      (if (empty? layer)
        result
        (recur (rest layer) (first layer) (conj result (compute-per-neuron (:neurons input) (:neurons (first layer)))))))))

(defn network-outputs
  [layers inputs]
  (map :value (last (network-compute layers inputs))))

;; Genome
(defn genome-create
  [score network]
  {:score score
   :network network})

;; Generation
(defn generation-add-genome
  [generation genome]
  (sort-by :score (conj generation genome)))

(defn generation-breed
  [genome1 genome2 number-children]
  (->> (map apply-mutation (shuffle-weights genome1 genome2))
       (assoc-in genome1 [:network :weights] )))

(defn shuffle-weights
  [genome1 genome2]
  (let [g2-weights (:weights (:network genome2))
        g1-weights (:weights (:network genome1))]
    (take (count g1-weights) (shuffle (concat g1-weights g2-weights)))))

(defn apply-mutation
  [value]
  (if (<= (Math/random) (:mutation-rate options))
    (- (* (Math/random) (:mutation-range options) 2) (:mutation-range  options))
    value))

(defn generation-next
  [genomes]
  (let [networks1 (part1 genomes)
        networks2 (part2 (:network (first genomes)))
        nb-networks (+ (count networks1)(count networks2))]
  (concat networks1 networks2 (part3 genomes nb-networks))))

(defn part1
  [genomes]
  (map :network (take (Math/round (* (:elitism options) (:population options))) genomes)))

(defn part2
  [network]
  (let [result []]
    (repeatedly (* (:random-behaviour options) (:population options))
            #(part2-1 network)
            )
    )
)

(defn part2-1
  [network]
  (concat result (update-in network [:weights] #(mapv random-clamped %))))

(defn part3
  [genomes nb-networks]
  (loop [genome1 (first genomes)
         genome2 (first genomes)
         genome1-tail (rest genomes)
         genome2-tail genomes
         result []]
    (if (nil? genome1)
      (recur (first genomes) (first (rest genome2-tail)) (rest genomes) (rest genome2-tail) (generate-result result genome1 genome2))
      (if (>= (+ (count result) nb-networks) (:population options))
        result
        (recur (first genome1-tail) (first genome2-tail) (rest genome1-tail) genome2-tail  (generate-result result genome1 genome2))
      ))))

(defn generate-result
  [result genome1 genome2]
  (conj result (:network (generation-breed genome1 genome2 (get-nb-child))))
  )

(defn get-nb-child
  []
  (if (> (:nb-child options) 0)
    (:nb-child options)
    1))

;; Generations
(defn generations
  []
  {:generations []
   :current []})

(defn generations-first
  [input hidden output]
  (let [result []]
    (repeatedly (:population options)
                #(concat result (network-perceptron-generation input hidden output))
                )
    )
  )

(defn generations-create-next
  [generations]
  (conj generations (generation-next (last generations)))
  )

(defn generations-add-genome
  [generations genome]
  (conj generations (generation-add-genome (last generations) genome))
  )

;; SELF
(defn self-next-generation
  [generations]
  (get-next-generation generations)
  )

(defn get-next-generation
  [generations]
  (let [[input hidden output] (:network options)]
    (if (empty? generations)
      (generations-first input hidden output)
      (generations-create-next generations))
    )
  )

(defn self-network-score
  [generations network score]
  (generation-add-genome generations (genome-create score network))
  )
