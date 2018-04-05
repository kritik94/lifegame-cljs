(ns lifegame-cljs.core
    (:require
      [reagent.core :as r]))

(def cell-size 50)
(def get-default-state #(vec (repeat (* % %) false)))

(def game-state (r/atom :setting))
(def field-size (r/atom 5))
(def history (r/atom []))
(def config-state (r/atom (get-default-state @field-size)))


;; -------------------------
;; Views
(defn change-state [index]
  (swap! config-state assoc index (not (nth @config-state index))))

(defn get-neighbor-pos [index width]
  (let [x (mod index width)
        y (quot index width)
        normlz-pos #(cond
                      (< % 0) (+ % width)
                      (> % (dec width)) (- % width)
                      :else %)
        calc-pos #(+ (* width %2) %1)]
    [(calc-pos (normlz-pos (dec x)) (normlz-pos (dec y)))
     (calc-pos (normlz-pos      x)  (normlz-pos (dec y)))
     (calc-pos (normlz-pos (inc x)) (normlz-pos (dec y)))
     (calc-pos (normlz-pos (dec x)) (normlz-pos      y))
     (calc-pos (normlz-pos (inc x)) (normlz-pos      y))
     (calc-pos (normlz-pos (dec x)) (normlz-pos (inc y)))
     (calc-pos (normlz-pos      x)  (normlz-pos (inc y)))
     (calc-pos (normlz-pos (inc x)) (normlz-pos (inc y)))]))

(defn calc-field-state [width field-state]
  (->> field-state
    (map-indexed
      (fn [index state]
          (let [neighbor-pos (get-neighbor-pos index width)]
            (->> neighbor-pos
              (map #(nth field-state %))
              (filter (fn [v] v))
              count))))
    (map-indexed
      (fn [index neighbor-count]
        (cond
          (= neighbor-count 3) true
          (and (= neighbor-count 2) (nth field-state index)) true
          :else false)))))

(defn game-tick []
  (if (= @game-state :gaming)
    (do
      (js/console.log "tick")
      (swap! history conj (calc-field-state @field-size (peek @history)))
      (js/setTimeout game-tick 1000))))


(defn play-game []
  (js/console.log "start game")
  (swap! game-state (fn [] :gaming))
  (if (= (count @history) 0)
    (swap! history conj @config-state))
  (game-tick))

(defn stop-game []
  (js/console.log "stop")
  (swap! game-state (fn [] :stop)))

(defn reset-game []
  (js/console.log "reset")
  (swap! game-state (fn [] :setting))
  (swap! history (fn [] []))
  (swap! config-state #(get-default-state @field-size)))

(defn set-field-size [size]
  (swap! field-size (fn [] size))
  (swap! config-state #(get-default-state size)))

(defn render-field [width field-state]
  [:div {:style {:display "flex"
                 :flex-wrap "wrap"
                 :width (* cell-size width)
                 :border "1px solid black"}}
   (map-indexed
     (fn [index cell-state] [:div {:style {:width cell-size
                                     :height cell-size
                                     :background-color (if cell-state "white" "black")}
                             :on-click #(change-state index)}
                            cell-state])
     field-state)])


(defn home-page []
  [:div [:h2 "game of life"]
        [:p "We have " (count @history) " steps"]
        [:label
          [:input {:type "range" :min 3 :max 50 :value @field-size
                   :on-change #(set-field-size (int (.. % -target -value)))
                    :disabled (not= @game-state :setting)}]
          @field-size]
        (render-field @field-size (if (= @game-state :setting)
                                     @config-state
                                     (peek @history)))
        [:button {:on-click #(reset-game)} "Reset"]
        (if (= @game-state :gaming)
          [:button {:on-click #(stop-game)} "Stop"]
          [:button {:on-click #(play-game)} "Play"])])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
