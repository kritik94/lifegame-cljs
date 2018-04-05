(ns lifegame-cljs.prod
  (:require
    [lifegame-cljs.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
