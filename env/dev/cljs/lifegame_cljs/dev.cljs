(ns ^:figwheel-no-load lifegame-cljs.dev
  (:require
    [lifegame-cljs.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
