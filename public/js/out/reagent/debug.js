// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__24497__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24497 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24498__i = 0, G__24498__a = new Array(arguments.length -  0);
while (G__24498__i < G__24498__a.length) {G__24498__a[G__24498__i] = arguments[G__24498__i + 0]; ++G__24498__i;}
  args = new cljs.core.IndexedSeq(G__24498__a,0,null);
} 
return G__24497__delegate.call(this,args);};
G__24497.cljs$lang$maxFixedArity = 0;
G__24497.cljs$lang$applyTo = (function (arglist__24499){
var args = cljs.core.seq(arglist__24499);
return G__24497__delegate(args);
});
G__24497.cljs$core$IFn$_invoke$arity$variadic = G__24497__delegate;
return G__24497;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__24500__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24500 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24501__i = 0, G__24501__a = new Array(arguments.length -  0);
while (G__24501__i < G__24501__a.length) {G__24501__a[G__24501__i] = arguments[G__24501__i + 0]; ++G__24501__i;}
  args = new cljs.core.IndexedSeq(G__24501__a,0,null);
} 
return G__24500__delegate.call(this,args);};
G__24500.cljs$lang$maxFixedArity = 0;
G__24500.cljs$lang$applyTo = (function (arglist__24502){
var args = cljs.core.seq(arglist__24502);
return G__24500__delegate(args);
});
G__24500.cljs$core$IFn$_invoke$arity$variadic = G__24500__delegate;
return G__24500;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1522854609221
