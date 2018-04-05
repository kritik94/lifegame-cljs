// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.15";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e30678){if((e30678 instanceof Error)){
var e = e30678;
return "Error: Unable to stringify";
} else {
throw e30678;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30681 = arguments.length;
switch (G__30681) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30679_SHARP_){
if(typeof p1__30679_SHARP_ === 'string'){
return p1__30679_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30679_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30684 = arguments.length;
var i__4500__auto___30685 = (0);
while(true){
if((i__4500__auto___30685 < len__4499__auto___30684)){
args__4502__auto__.push((arguments[i__4500__auto___30685]));

var G__30686 = (i__4500__auto___30685 + (1));
i__4500__auto___30685 = G__30686;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30683){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30683));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30688 = arguments.length;
var i__4500__auto___30689 = (0);
while(true){
if((i__4500__auto___30689 < len__4499__auto___30688)){
args__4502__auto__.push((arguments[i__4500__auto___30689]));

var G__30690 = (i__4500__auto___30689 + (1));
i__4500__auto___30689 = G__30690;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30687){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30687));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30691){
var map__30692 = p__30691;
var map__30692__$1 = ((((!((map__30692 == null)))?(((((map__30692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30692):map__30692);
var message = cljs.core.get.call(null,map__30692__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30692__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26509__auto___30771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto___30771,ch){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto___30771,ch){
return (function (state_30743){
var state_val_30744 = (state_30743[(1)]);
if((state_val_30744 === (7))){
var inst_30739 = (state_30743[(2)]);
var state_30743__$1 = state_30743;
var statearr_30745_30772 = state_30743__$1;
(statearr_30745_30772[(2)] = inst_30739);

(statearr_30745_30772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (1))){
var state_30743__$1 = state_30743;
var statearr_30746_30773 = state_30743__$1;
(statearr_30746_30773[(2)] = null);

(statearr_30746_30773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (4))){
var inst_30696 = (state_30743[(7)]);
var inst_30696__$1 = (state_30743[(2)]);
var state_30743__$1 = (function (){var statearr_30747 = state_30743;
(statearr_30747[(7)] = inst_30696__$1);

return statearr_30747;
})();
if(cljs.core.truth_(inst_30696__$1)){
var statearr_30748_30774 = state_30743__$1;
(statearr_30748_30774[(1)] = (5));

} else {
var statearr_30749_30775 = state_30743__$1;
(statearr_30749_30775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (15))){
var inst_30703 = (state_30743[(8)]);
var inst_30718 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30703);
var inst_30719 = cljs.core.first.call(null,inst_30718);
var inst_30720 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30719);
var inst_30721 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30720)].join('');
var inst_30722 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30721);
var state_30743__$1 = state_30743;
var statearr_30750_30776 = state_30743__$1;
(statearr_30750_30776[(2)] = inst_30722);

(statearr_30750_30776[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (13))){
var inst_30727 = (state_30743[(2)]);
var state_30743__$1 = state_30743;
var statearr_30751_30777 = state_30743__$1;
(statearr_30751_30777[(2)] = inst_30727);

(statearr_30751_30777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (6))){
var state_30743__$1 = state_30743;
var statearr_30752_30778 = state_30743__$1;
(statearr_30752_30778[(2)] = null);

(statearr_30752_30778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (17))){
var inst_30725 = (state_30743[(2)]);
var state_30743__$1 = state_30743;
var statearr_30753_30779 = state_30743__$1;
(statearr_30753_30779[(2)] = inst_30725);

(statearr_30753_30779[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (3))){
var inst_30741 = (state_30743[(2)]);
var state_30743__$1 = state_30743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30743__$1,inst_30741);
} else {
if((state_val_30744 === (12))){
var inst_30702 = (state_30743[(9)]);
var inst_30716 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30702,opts);
var state_30743__$1 = state_30743;
if(cljs.core.truth_(inst_30716)){
var statearr_30754_30780 = state_30743__$1;
(statearr_30754_30780[(1)] = (15));

} else {
var statearr_30755_30781 = state_30743__$1;
(statearr_30755_30781[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (2))){
var state_30743__$1 = state_30743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30743__$1,(4),ch);
} else {
if((state_val_30744 === (11))){
var inst_30703 = (state_30743[(8)]);
var inst_30708 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30709 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30703);
var inst_30710 = cljs.core.async.timeout.call(null,(1000));
var inst_30711 = [inst_30709,inst_30710];
var inst_30712 = (new cljs.core.PersistentVector(null,2,(5),inst_30708,inst_30711,null));
var state_30743__$1 = state_30743;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30743__$1,(14),inst_30712);
} else {
if((state_val_30744 === (9))){
var inst_30703 = (state_30743[(8)]);
var inst_30729 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30730 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30703);
var inst_30731 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30730);
var inst_30732 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30731)].join('');
var inst_30733 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30732);
var state_30743__$1 = (function (){var statearr_30756 = state_30743;
(statearr_30756[(10)] = inst_30729);

return statearr_30756;
})();
var statearr_30757_30782 = state_30743__$1;
(statearr_30757_30782[(2)] = inst_30733);

(statearr_30757_30782[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (5))){
var inst_30696 = (state_30743[(7)]);
var inst_30698 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30699 = (new cljs.core.PersistentArrayMap(null,2,inst_30698,null));
var inst_30700 = (new cljs.core.PersistentHashSet(null,inst_30699,null));
var inst_30701 = figwheel.client.focus_msgs.call(null,inst_30700,inst_30696);
var inst_30702 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30701);
var inst_30703 = cljs.core.first.call(null,inst_30701);
var inst_30704 = figwheel.client.autoload_QMARK_.call(null);
var state_30743__$1 = (function (){var statearr_30758 = state_30743;
(statearr_30758[(9)] = inst_30702);

(statearr_30758[(8)] = inst_30703);

return statearr_30758;
})();
if(cljs.core.truth_(inst_30704)){
var statearr_30759_30783 = state_30743__$1;
(statearr_30759_30783[(1)] = (8));

} else {
var statearr_30760_30784 = state_30743__$1;
(statearr_30760_30784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (14))){
var inst_30714 = (state_30743[(2)]);
var state_30743__$1 = state_30743;
var statearr_30761_30785 = state_30743__$1;
(statearr_30761_30785[(2)] = inst_30714);

(statearr_30761_30785[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (16))){
var state_30743__$1 = state_30743;
var statearr_30762_30786 = state_30743__$1;
(statearr_30762_30786[(2)] = null);

(statearr_30762_30786[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (10))){
var inst_30735 = (state_30743[(2)]);
var state_30743__$1 = (function (){var statearr_30763 = state_30743;
(statearr_30763[(11)] = inst_30735);

return statearr_30763;
})();
var statearr_30764_30787 = state_30743__$1;
(statearr_30764_30787[(2)] = null);

(statearr_30764_30787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (8))){
var inst_30702 = (state_30743[(9)]);
var inst_30706 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30702,opts);
var state_30743__$1 = state_30743;
if(cljs.core.truth_(inst_30706)){
var statearr_30765_30788 = state_30743__$1;
(statearr_30765_30788[(1)] = (11));

} else {
var statearr_30766_30789 = state_30743__$1;
(statearr_30766_30789[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26509__auto___30771,ch))
;
return ((function (switch__26419__auto__,c__26509__auto___30771,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26420__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26420__auto____0 = (function (){
var statearr_30767 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30767[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26420__auto__);

(statearr_30767[(1)] = (1));

return statearr_30767;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26420__auto____1 = (function (state_30743){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_30743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e30768){if((e30768 instanceof Object)){
var ex__26423__auto__ = e30768;
var statearr_30769_30790 = state_30743;
(statearr_30769_30790[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30791 = state_30743;
state_30743 = G__30791;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26420__auto__ = function(state_30743){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26420__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26420__auto____1.call(this,state_30743);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26420__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26420__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto___30771,ch))
})();
var state__26511__auto__ = (function (){var statearr_30770 = f__26510__auto__.call(null);
(statearr_30770[(6)] = c__26509__auto___30771);

return statearr_30770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto___30771,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30792_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30792_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30796 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30796){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30794 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30795 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30794,_STAR_print_fn_STAR_30795,sb,base_path_30796){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_30794,_STAR_print_fn_STAR_30795,sb,base_path_30796))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30795;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30794;
}}catch (e30793){if((e30793 instanceof Error)){
var e = e30793;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30796], null));
} else {
var e = e30793;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30796))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30797){
var map__30798 = p__30797;
var map__30798__$1 = ((((!((map__30798 == null)))?(((((map__30798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30798):map__30798);
var opts = map__30798__$1;
var build_id = cljs.core.get.call(null,map__30798__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30798,map__30798__$1,opts,build_id){
return (function (p__30800){
var vec__30801 = p__30800;
var seq__30802 = cljs.core.seq.call(null,vec__30801);
var first__30803 = cljs.core.first.call(null,seq__30802);
var seq__30802__$1 = cljs.core.next.call(null,seq__30802);
var map__30804 = first__30803;
var map__30804__$1 = ((((!((map__30804 == null)))?(((((map__30804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30804):map__30804);
var msg = map__30804__$1;
var msg_name = cljs.core.get.call(null,map__30804__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30802__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30801,seq__30802,first__30803,seq__30802__$1,map__30804,map__30804__$1,msg,msg_name,_,map__30798,map__30798__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30801,seq__30802,first__30803,seq__30802__$1,map__30804,map__30804__$1,msg,msg_name,_,map__30798,map__30798__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30798,map__30798__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30806){
var vec__30807 = p__30806;
var seq__30808 = cljs.core.seq.call(null,vec__30807);
var first__30809 = cljs.core.first.call(null,seq__30808);
var seq__30808__$1 = cljs.core.next.call(null,seq__30808);
var map__30810 = first__30809;
var map__30810__$1 = ((((!((map__30810 == null)))?(((((map__30810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30810):map__30810);
var msg = map__30810__$1;
var msg_name = cljs.core.get.call(null,map__30810__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30808__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30812){
var map__30813 = p__30812;
var map__30813__$1 = ((((!((map__30813 == null)))?(((((map__30813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30813):map__30813);
var on_compile_warning = cljs.core.get.call(null,map__30813__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30813__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30813,map__30813__$1,on_compile_warning,on_compile_fail){
return (function (p__30815){
var vec__30816 = p__30815;
var seq__30817 = cljs.core.seq.call(null,vec__30816);
var first__30818 = cljs.core.first.call(null,seq__30817);
var seq__30817__$1 = cljs.core.next.call(null,seq__30817);
var map__30819 = first__30818;
var map__30819__$1 = ((((!((map__30819 == null)))?(((((map__30819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30819):map__30819);
var msg = map__30819__$1;
var msg_name = cljs.core.get.call(null,map__30819__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30817__$1;
var pred__30821 = cljs.core._EQ_;
var expr__30822 = msg_name;
if(cljs.core.truth_(pred__30821.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30822))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30821.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30822))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30813,map__30813__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26509__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto__,msg_hist,msg_names,msg){
return (function (state_30911){
var state_val_30912 = (state_30911[(1)]);
if((state_val_30912 === (7))){
var inst_30831 = (state_30911[(2)]);
var state_30911__$1 = state_30911;
if(cljs.core.truth_(inst_30831)){
var statearr_30913_30960 = state_30911__$1;
(statearr_30913_30960[(1)] = (8));

} else {
var statearr_30914_30961 = state_30911__$1;
(statearr_30914_30961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (20))){
var inst_30905 = (state_30911[(2)]);
var state_30911__$1 = state_30911;
var statearr_30915_30962 = state_30911__$1;
(statearr_30915_30962[(2)] = inst_30905);

(statearr_30915_30962[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (27))){
var inst_30901 = (state_30911[(2)]);
var state_30911__$1 = state_30911;
var statearr_30916_30963 = state_30911__$1;
(statearr_30916_30963[(2)] = inst_30901);

(statearr_30916_30963[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (1))){
var inst_30824 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30911__$1 = state_30911;
if(cljs.core.truth_(inst_30824)){
var statearr_30917_30964 = state_30911__$1;
(statearr_30917_30964[(1)] = (2));

} else {
var statearr_30918_30965 = state_30911__$1;
(statearr_30918_30965[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (24))){
var inst_30903 = (state_30911[(2)]);
var state_30911__$1 = state_30911;
var statearr_30919_30966 = state_30911__$1;
(statearr_30919_30966[(2)] = inst_30903);

(statearr_30919_30966[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (4))){
var inst_30909 = (state_30911[(2)]);
var state_30911__$1 = state_30911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30911__$1,inst_30909);
} else {
if((state_val_30912 === (15))){
var inst_30907 = (state_30911[(2)]);
var state_30911__$1 = state_30911;
var statearr_30920_30967 = state_30911__$1;
(statearr_30920_30967[(2)] = inst_30907);

(statearr_30920_30967[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (21))){
var inst_30860 = (state_30911[(2)]);
var inst_30861 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30862 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30861);
var state_30911__$1 = (function (){var statearr_30921 = state_30911;
(statearr_30921[(7)] = inst_30860);

return statearr_30921;
})();
var statearr_30922_30968 = state_30911__$1;
(statearr_30922_30968[(2)] = inst_30862);

(statearr_30922_30968[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (31))){
var inst_30890 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30911__$1 = state_30911;
if(cljs.core.truth_(inst_30890)){
var statearr_30923_30969 = state_30911__$1;
(statearr_30923_30969[(1)] = (34));

} else {
var statearr_30924_30970 = state_30911__$1;
(statearr_30924_30970[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (32))){
var inst_30899 = (state_30911[(2)]);
var state_30911__$1 = state_30911;
var statearr_30925_30971 = state_30911__$1;
(statearr_30925_30971[(2)] = inst_30899);

(statearr_30925_30971[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (33))){
var inst_30886 = (state_30911[(2)]);
var inst_30887 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30888 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30887);
var state_30911__$1 = (function (){var statearr_30926 = state_30911;
(statearr_30926[(8)] = inst_30886);

return statearr_30926;
})();
var statearr_30927_30972 = state_30911__$1;
(statearr_30927_30972[(2)] = inst_30888);

(statearr_30927_30972[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (13))){
var inst_30845 = figwheel.client.heads_up.clear.call(null);
var state_30911__$1 = state_30911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30911__$1,(16),inst_30845);
} else {
if((state_val_30912 === (22))){
var inst_30866 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30867 = figwheel.client.heads_up.append_warning_message.call(null,inst_30866);
var state_30911__$1 = state_30911;
var statearr_30928_30973 = state_30911__$1;
(statearr_30928_30973[(2)] = inst_30867);

(statearr_30928_30973[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (36))){
var inst_30897 = (state_30911[(2)]);
var state_30911__$1 = state_30911;
var statearr_30929_30974 = state_30911__$1;
(statearr_30929_30974[(2)] = inst_30897);

(statearr_30929_30974[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (29))){
var inst_30877 = (state_30911[(2)]);
var inst_30878 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30879 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30878);
var state_30911__$1 = (function (){var statearr_30930 = state_30911;
(statearr_30930[(9)] = inst_30877);

return statearr_30930;
})();
var statearr_30931_30975 = state_30911__$1;
(statearr_30931_30975[(2)] = inst_30879);

(statearr_30931_30975[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (6))){
var inst_30826 = (state_30911[(10)]);
var state_30911__$1 = state_30911;
var statearr_30932_30976 = state_30911__$1;
(statearr_30932_30976[(2)] = inst_30826);

(statearr_30932_30976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (28))){
var inst_30873 = (state_30911[(2)]);
var inst_30874 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30875 = figwheel.client.heads_up.display_warning.call(null,inst_30874);
var state_30911__$1 = (function (){var statearr_30933 = state_30911;
(statearr_30933[(11)] = inst_30873);

return statearr_30933;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30911__$1,(29),inst_30875);
} else {
if((state_val_30912 === (25))){
var inst_30871 = figwheel.client.heads_up.clear.call(null);
var state_30911__$1 = state_30911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30911__$1,(28),inst_30871);
} else {
if((state_val_30912 === (34))){
var inst_30892 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30911__$1 = state_30911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30911__$1,(37),inst_30892);
} else {
if((state_val_30912 === (17))){
var inst_30851 = (state_30911[(2)]);
var inst_30852 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30853 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30852);
var state_30911__$1 = (function (){var statearr_30934 = state_30911;
(statearr_30934[(12)] = inst_30851);

return statearr_30934;
})();
var statearr_30935_30977 = state_30911__$1;
(statearr_30935_30977[(2)] = inst_30853);

(statearr_30935_30977[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (3))){
var inst_30843 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30911__$1 = state_30911;
if(cljs.core.truth_(inst_30843)){
var statearr_30936_30978 = state_30911__$1;
(statearr_30936_30978[(1)] = (13));

} else {
var statearr_30937_30979 = state_30911__$1;
(statearr_30937_30979[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (12))){
var inst_30839 = (state_30911[(2)]);
var state_30911__$1 = state_30911;
var statearr_30938_30980 = state_30911__$1;
(statearr_30938_30980[(2)] = inst_30839);

(statearr_30938_30980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (2))){
var inst_30826 = (state_30911[(10)]);
var inst_30826__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30911__$1 = (function (){var statearr_30939 = state_30911;
(statearr_30939[(10)] = inst_30826__$1);

return statearr_30939;
})();
if(cljs.core.truth_(inst_30826__$1)){
var statearr_30940_30981 = state_30911__$1;
(statearr_30940_30981[(1)] = (5));

} else {
var statearr_30941_30982 = state_30911__$1;
(statearr_30941_30982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (23))){
var inst_30869 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30911__$1 = state_30911;
if(cljs.core.truth_(inst_30869)){
var statearr_30942_30983 = state_30911__$1;
(statearr_30942_30983[(1)] = (25));

} else {
var statearr_30943_30984 = state_30911__$1;
(statearr_30943_30984[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (35))){
var state_30911__$1 = state_30911;
var statearr_30944_30985 = state_30911__$1;
(statearr_30944_30985[(2)] = null);

(statearr_30944_30985[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (19))){
var inst_30864 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30911__$1 = state_30911;
if(cljs.core.truth_(inst_30864)){
var statearr_30945_30986 = state_30911__$1;
(statearr_30945_30986[(1)] = (22));

} else {
var statearr_30946_30987 = state_30911__$1;
(statearr_30946_30987[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (11))){
var inst_30835 = (state_30911[(2)]);
var state_30911__$1 = state_30911;
var statearr_30947_30988 = state_30911__$1;
(statearr_30947_30988[(2)] = inst_30835);

(statearr_30947_30988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (9))){
var inst_30837 = figwheel.client.heads_up.clear.call(null);
var state_30911__$1 = state_30911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30911__$1,(12),inst_30837);
} else {
if((state_val_30912 === (5))){
var inst_30828 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30911__$1 = state_30911;
var statearr_30948_30989 = state_30911__$1;
(statearr_30948_30989[(2)] = inst_30828);

(statearr_30948_30989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (14))){
var inst_30855 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30911__$1 = state_30911;
if(cljs.core.truth_(inst_30855)){
var statearr_30949_30990 = state_30911__$1;
(statearr_30949_30990[(1)] = (18));

} else {
var statearr_30950_30991 = state_30911__$1;
(statearr_30950_30991[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (26))){
var inst_30881 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30911__$1 = state_30911;
if(cljs.core.truth_(inst_30881)){
var statearr_30951_30992 = state_30911__$1;
(statearr_30951_30992[(1)] = (30));

} else {
var statearr_30952_30993 = state_30911__$1;
(statearr_30952_30993[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (16))){
var inst_30847 = (state_30911[(2)]);
var inst_30848 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30849 = figwheel.client.heads_up.display_exception.call(null,inst_30848);
var state_30911__$1 = (function (){var statearr_30953 = state_30911;
(statearr_30953[(13)] = inst_30847);

return statearr_30953;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30911__$1,(17),inst_30849);
} else {
if((state_val_30912 === (30))){
var inst_30883 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30884 = figwheel.client.heads_up.display_warning.call(null,inst_30883);
var state_30911__$1 = state_30911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30911__$1,(33),inst_30884);
} else {
if((state_val_30912 === (10))){
var inst_30841 = (state_30911[(2)]);
var state_30911__$1 = state_30911;
var statearr_30954_30994 = state_30911__$1;
(statearr_30954_30994[(2)] = inst_30841);

(statearr_30954_30994[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (18))){
var inst_30857 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30858 = figwheel.client.heads_up.display_exception.call(null,inst_30857);
var state_30911__$1 = state_30911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30911__$1,(21),inst_30858);
} else {
if((state_val_30912 === (37))){
var inst_30894 = (state_30911[(2)]);
var state_30911__$1 = state_30911;
var statearr_30955_30995 = state_30911__$1;
(statearr_30955_30995[(2)] = inst_30894);

(statearr_30955_30995[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30912 === (8))){
var inst_30833 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30911__$1 = state_30911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30911__$1,(11),inst_30833);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26509__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26419__auto__,c__26509__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26420__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26420__auto____0 = (function (){
var statearr_30956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30956[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26420__auto__);

(statearr_30956[(1)] = (1));

return statearr_30956;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26420__auto____1 = (function (state_30911){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_30911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e30957){if((e30957 instanceof Object)){
var ex__26423__auto__ = e30957;
var statearr_30958_30996 = state_30911;
(statearr_30958_30996[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30997 = state_30911;
state_30911 = G__30997;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26420__auto__ = function(state_30911){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26420__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26420__auto____1.call(this,state_30911);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26420__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26420__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto__,msg_hist,msg_names,msg))
})();
var state__26511__auto__ = (function (){var statearr_30959 = f__26510__auto__.call(null);
(statearr_30959[(6)] = c__26509__auto__);

return statearr_30959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto__,msg_hist,msg_names,msg))
);

return c__26509__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26509__auto___31026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto___31026,ch){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto___31026,ch){
return (function (state_31012){
var state_val_31013 = (state_31012[(1)]);
if((state_val_31013 === (1))){
var state_31012__$1 = state_31012;
var statearr_31014_31027 = state_31012__$1;
(statearr_31014_31027[(2)] = null);

(statearr_31014_31027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (2))){
var state_31012__$1 = state_31012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31012__$1,(4),ch);
} else {
if((state_val_31013 === (3))){
var inst_31010 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31012__$1,inst_31010);
} else {
if((state_val_31013 === (4))){
var inst_31000 = (state_31012[(7)]);
var inst_31000__$1 = (state_31012[(2)]);
var state_31012__$1 = (function (){var statearr_31015 = state_31012;
(statearr_31015[(7)] = inst_31000__$1);

return statearr_31015;
})();
if(cljs.core.truth_(inst_31000__$1)){
var statearr_31016_31028 = state_31012__$1;
(statearr_31016_31028[(1)] = (5));

} else {
var statearr_31017_31029 = state_31012__$1;
(statearr_31017_31029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (5))){
var inst_31000 = (state_31012[(7)]);
var inst_31002 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31000);
var state_31012__$1 = state_31012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31012__$1,(8),inst_31002);
} else {
if((state_val_31013 === (6))){
var state_31012__$1 = state_31012;
var statearr_31018_31030 = state_31012__$1;
(statearr_31018_31030[(2)] = null);

(statearr_31018_31030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (7))){
var inst_31008 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
var statearr_31019_31031 = state_31012__$1;
(statearr_31019_31031[(2)] = inst_31008);

(statearr_31019_31031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (8))){
var inst_31004 = (state_31012[(2)]);
var state_31012__$1 = (function (){var statearr_31020 = state_31012;
(statearr_31020[(8)] = inst_31004);

return statearr_31020;
})();
var statearr_31021_31032 = state_31012__$1;
(statearr_31021_31032[(2)] = null);

(statearr_31021_31032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__26509__auto___31026,ch))
;
return ((function (switch__26419__auto__,c__26509__auto___31026,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26420__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26420__auto____0 = (function (){
var statearr_31022 = [null,null,null,null,null,null,null,null,null];
(statearr_31022[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26420__auto__);

(statearr_31022[(1)] = (1));

return statearr_31022;
});
var figwheel$client$heads_up_plugin_$_state_machine__26420__auto____1 = (function (state_31012){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_31012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e31023){if((e31023 instanceof Object)){
var ex__26423__auto__ = e31023;
var statearr_31024_31033 = state_31012;
(statearr_31024_31033[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31034 = state_31012;
state_31012 = G__31034;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26420__auto__ = function(state_31012){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26420__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26420__auto____1.call(this,state_31012);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26420__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26420__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto___31026,ch))
})();
var state__26511__auto__ = (function (){var statearr_31025 = f__26510__auto__.call(null);
(statearr_31025[(6)] = c__26509__auto___31026);

return statearr_31025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto___31026,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26509__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto__){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto__){
return (function (state_31040){
var state_val_31041 = (state_31040[(1)]);
if((state_val_31041 === (1))){
var inst_31035 = cljs.core.async.timeout.call(null,(3000));
var state_31040__$1 = state_31040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31040__$1,(2),inst_31035);
} else {
if((state_val_31041 === (2))){
var inst_31037 = (state_31040[(2)]);
var inst_31038 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31040__$1 = (function (){var statearr_31042 = state_31040;
(statearr_31042[(7)] = inst_31037);

return statearr_31042;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31040__$1,inst_31038);
} else {
return null;
}
}
});})(c__26509__auto__))
;
return ((function (switch__26419__auto__,c__26509__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26420__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26420__auto____0 = (function (){
var statearr_31043 = [null,null,null,null,null,null,null,null];
(statearr_31043[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26420__auto__);

(statearr_31043[(1)] = (1));

return statearr_31043;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26420__auto____1 = (function (state_31040){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_31040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e31044){if((e31044 instanceof Object)){
var ex__26423__auto__ = e31044;
var statearr_31045_31047 = state_31040;
(statearr_31045_31047[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31048 = state_31040;
state_31040 = G__31048;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26420__auto__ = function(state_31040){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26420__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26420__auto____1.call(this,state_31040);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26420__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26420__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto__))
})();
var state__26511__auto__ = (function (){var statearr_31046 = f__26510__auto__.call(null);
(statearr_31046[(6)] = c__26509__auto__);

return statearr_31046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto__))
);

return c__26509__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26509__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31055){
var state_val_31056 = (state_31055[(1)]);
if((state_val_31056 === (1))){
var inst_31049 = cljs.core.async.timeout.call(null,(2000));
var state_31055__$1 = state_31055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31055__$1,(2),inst_31049);
} else {
if((state_val_31056 === (2))){
var inst_31051 = (state_31055[(2)]);
var inst_31052 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31053 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31052);
var state_31055__$1 = (function (){var statearr_31057 = state_31055;
(statearr_31057[(7)] = inst_31051);

return statearr_31057;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31055__$1,inst_31053);
} else {
return null;
}
}
});})(c__26509__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__26419__auto__,c__26509__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26420__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26420__auto____0 = (function (){
var statearr_31058 = [null,null,null,null,null,null,null,null];
(statearr_31058[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26420__auto__);

(statearr_31058[(1)] = (1));

return statearr_31058;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26420__auto____1 = (function (state_31055){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_31055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e31059){if((e31059 instanceof Object)){
var ex__26423__auto__ = e31059;
var statearr_31060_31062 = state_31055;
(statearr_31060_31062[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31063 = state_31055;
state_31055 = G__31063;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26420__auto__ = function(state_31055){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26420__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26420__auto____1.call(this,state_31055);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26420__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26420__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto__,figwheel_version,temp__5457__auto__))
})();
var state__26511__auto__ = (function (){var statearr_31061 = f__26510__auto__.call(null);
(statearr_31061[(6)] = c__26509__auto__);

return statearr_31061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto__,figwheel_version,temp__5457__auto__))
);

return c__26509__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31064){
var map__31065 = p__31064;
var map__31065__$1 = ((((!((map__31065 == null)))?(((((map__31065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31065):map__31065);
var file = cljs.core.get.call(null,map__31065__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31065__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31065__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31067 = "";
var G__31067__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31067),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31067);
var G__31067__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31067__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31067__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31067__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31067__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31068){
var map__31069 = p__31068;
var map__31069__$1 = ((((!((map__31069 == null)))?(((((map__31069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31069):map__31069);
var ed = map__31069__$1;
var formatted_exception = cljs.core.get.call(null,map__31069__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31069__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31069__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31071_31075 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31072_31076 = null;
var count__31073_31077 = (0);
var i__31074_31078 = (0);
while(true){
if((i__31074_31078 < count__31073_31077)){
var msg_31079 = cljs.core._nth.call(null,chunk__31072_31076,i__31074_31078);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31079);


var G__31080 = seq__31071_31075;
var G__31081 = chunk__31072_31076;
var G__31082 = count__31073_31077;
var G__31083 = (i__31074_31078 + (1));
seq__31071_31075 = G__31080;
chunk__31072_31076 = G__31081;
count__31073_31077 = G__31082;
i__31074_31078 = G__31083;
continue;
} else {
var temp__5457__auto___31084 = cljs.core.seq.call(null,seq__31071_31075);
if(temp__5457__auto___31084){
var seq__31071_31085__$1 = temp__5457__auto___31084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31071_31085__$1)){
var c__4319__auto___31086 = cljs.core.chunk_first.call(null,seq__31071_31085__$1);
var G__31087 = cljs.core.chunk_rest.call(null,seq__31071_31085__$1);
var G__31088 = c__4319__auto___31086;
var G__31089 = cljs.core.count.call(null,c__4319__auto___31086);
var G__31090 = (0);
seq__31071_31075 = G__31087;
chunk__31072_31076 = G__31088;
count__31073_31077 = G__31089;
i__31074_31078 = G__31090;
continue;
} else {
var msg_31091 = cljs.core.first.call(null,seq__31071_31085__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31091);


var G__31092 = cljs.core.next.call(null,seq__31071_31085__$1);
var G__31093 = null;
var G__31094 = (0);
var G__31095 = (0);
seq__31071_31075 = G__31092;
chunk__31072_31076 = G__31093;
count__31073_31077 = G__31094;
i__31074_31078 = G__31095;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31096){
var map__31097 = p__31096;
var map__31097__$1 = ((((!((map__31097 == null)))?(((((map__31097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31097):map__31097);
var w = map__31097__$1;
var message = cljs.core.get.call(null,map__31097__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31099 = cljs.core.seq.call(null,plugins);
var chunk__31100 = null;
var count__31101 = (0);
var i__31102 = (0);
while(true){
if((i__31102 < count__31101)){
var vec__31103 = cljs.core._nth.call(null,chunk__31100,i__31102);
var k = cljs.core.nth.call(null,vec__31103,(0),null);
var plugin = cljs.core.nth.call(null,vec__31103,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31109 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31099,chunk__31100,count__31101,i__31102,pl_31109,vec__31103,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31109.call(null,msg_hist);
});})(seq__31099,chunk__31100,count__31101,i__31102,pl_31109,vec__31103,k,plugin))
);
} else {
}


var G__31110 = seq__31099;
var G__31111 = chunk__31100;
var G__31112 = count__31101;
var G__31113 = (i__31102 + (1));
seq__31099 = G__31110;
chunk__31100 = G__31111;
count__31101 = G__31112;
i__31102 = G__31113;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31099);
if(temp__5457__auto__){
var seq__31099__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31099__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31099__$1);
var G__31114 = cljs.core.chunk_rest.call(null,seq__31099__$1);
var G__31115 = c__4319__auto__;
var G__31116 = cljs.core.count.call(null,c__4319__auto__);
var G__31117 = (0);
seq__31099 = G__31114;
chunk__31100 = G__31115;
count__31101 = G__31116;
i__31102 = G__31117;
continue;
} else {
var vec__31106 = cljs.core.first.call(null,seq__31099__$1);
var k = cljs.core.nth.call(null,vec__31106,(0),null);
var plugin = cljs.core.nth.call(null,vec__31106,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31118 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31099,chunk__31100,count__31101,i__31102,pl_31118,vec__31106,k,plugin,seq__31099__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31118.call(null,msg_hist);
});})(seq__31099,chunk__31100,count__31101,i__31102,pl_31118,vec__31106,k,plugin,seq__31099__$1,temp__5457__auto__))
);
} else {
}


var G__31119 = cljs.core.next.call(null,seq__31099__$1);
var G__31120 = null;
var G__31121 = (0);
var G__31122 = (0);
seq__31099 = G__31119;
chunk__31100 = G__31120;
count__31101 = G__31121;
i__31102 = G__31122;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31124 = arguments.length;
switch (G__31124) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31125_31130 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31126_31131 = null;
var count__31127_31132 = (0);
var i__31128_31133 = (0);
while(true){
if((i__31128_31133 < count__31127_31132)){
var msg_31134 = cljs.core._nth.call(null,chunk__31126_31131,i__31128_31133);
figwheel.client.socket.handle_incoming_message.call(null,msg_31134);


var G__31135 = seq__31125_31130;
var G__31136 = chunk__31126_31131;
var G__31137 = count__31127_31132;
var G__31138 = (i__31128_31133 + (1));
seq__31125_31130 = G__31135;
chunk__31126_31131 = G__31136;
count__31127_31132 = G__31137;
i__31128_31133 = G__31138;
continue;
} else {
var temp__5457__auto___31139 = cljs.core.seq.call(null,seq__31125_31130);
if(temp__5457__auto___31139){
var seq__31125_31140__$1 = temp__5457__auto___31139;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31125_31140__$1)){
var c__4319__auto___31141 = cljs.core.chunk_first.call(null,seq__31125_31140__$1);
var G__31142 = cljs.core.chunk_rest.call(null,seq__31125_31140__$1);
var G__31143 = c__4319__auto___31141;
var G__31144 = cljs.core.count.call(null,c__4319__auto___31141);
var G__31145 = (0);
seq__31125_31130 = G__31142;
chunk__31126_31131 = G__31143;
count__31127_31132 = G__31144;
i__31128_31133 = G__31145;
continue;
} else {
var msg_31146 = cljs.core.first.call(null,seq__31125_31140__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31146);


var G__31147 = cljs.core.next.call(null,seq__31125_31140__$1);
var G__31148 = null;
var G__31149 = (0);
var G__31150 = (0);
seq__31125_31130 = G__31147;
chunk__31126_31131 = G__31148;
count__31127_31132 = G__31149;
i__31128_31133 = G__31150;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31155 = arguments.length;
var i__4500__auto___31156 = (0);
while(true){
if((i__4500__auto___31156 < len__4499__auto___31155)){
args__4502__auto__.push((arguments[i__4500__auto___31156]));

var G__31157 = (i__4500__auto___31156 + (1));
i__4500__auto___31156 = G__31157;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31152){
var map__31153 = p__31152;
var map__31153__$1 = ((((!((map__31153 == null)))?(((((map__31153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31153):map__31153);
var opts = map__31153__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31151){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31151));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31158){if((e31158 instanceof Error)){
var e = e31158;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31158;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31159){
var map__31160 = p__31159;
var map__31160__$1 = ((((!((map__31160 == null)))?(((((map__31160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31160):map__31160);
var msg_name = cljs.core.get.call(null,map__31160__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1522854618352
