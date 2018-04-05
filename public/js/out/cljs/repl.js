// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30390){
var map__30391 = p__30390;
var map__30391__$1 = ((((!((map__30391 == null)))?(((((map__30391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30391):map__30391);
var m = map__30391__$1;
var n = cljs.core.get.call(null,map__30391__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30391__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30393_30415 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30394_30416 = null;
var count__30395_30417 = (0);
var i__30396_30418 = (0);
while(true){
if((i__30396_30418 < count__30395_30417)){
var f_30419 = cljs.core._nth.call(null,chunk__30394_30416,i__30396_30418);
cljs.core.println.call(null,"  ",f_30419);


var G__30420 = seq__30393_30415;
var G__30421 = chunk__30394_30416;
var G__30422 = count__30395_30417;
var G__30423 = (i__30396_30418 + (1));
seq__30393_30415 = G__30420;
chunk__30394_30416 = G__30421;
count__30395_30417 = G__30422;
i__30396_30418 = G__30423;
continue;
} else {
var temp__5457__auto___30424 = cljs.core.seq.call(null,seq__30393_30415);
if(temp__5457__auto___30424){
var seq__30393_30425__$1 = temp__5457__auto___30424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30393_30425__$1)){
var c__4319__auto___30426 = cljs.core.chunk_first.call(null,seq__30393_30425__$1);
var G__30427 = cljs.core.chunk_rest.call(null,seq__30393_30425__$1);
var G__30428 = c__4319__auto___30426;
var G__30429 = cljs.core.count.call(null,c__4319__auto___30426);
var G__30430 = (0);
seq__30393_30415 = G__30427;
chunk__30394_30416 = G__30428;
count__30395_30417 = G__30429;
i__30396_30418 = G__30430;
continue;
} else {
var f_30431 = cljs.core.first.call(null,seq__30393_30425__$1);
cljs.core.println.call(null,"  ",f_30431);


var G__30432 = cljs.core.next.call(null,seq__30393_30425__$1);
var G__30433 = null;
var G__30434 = (0);
var G__30435 = (0);
seq__30393_30415 = G__30432;
chunk__30394_30416 = G__30433;
count__30395_30417 = G__30434;
i__30396_30418 = G__30435;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30436 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30436);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30436)))?cljs.core.second.call(null,arglists_30436):arglists_30436));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30397_30437 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30398_30438 = null;
var count__30399_30439 = (0);
var i__30400_30440 = (0);
while(true){
if((i__30400_30440 < count__30399_30439)){
var vec__30401_30441 = cljs.core._nth.call(null,chunk__30398_30438,i__30400_30440);
var name_30442 = cljs.core.nth.call(null,vec__30401_30441,(0),null);
var map__30404_30443 = cljs.core.nth.call(null,vec__30401_30441,(1),null);
var map__30404_30444__$1 = ((((!((map__30404_30443 == null)))?(((((map__30404_30443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30404_30443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30404_30443):map__30404_30443);
var doc_30445 = cljs.core.get.call(null,map__30404_30444__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30446 = cljs.core.get.call(null,map__30404_30444__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30442);

cljs.core.println.call(null," ",arglists_30446);

if(cljs.core.truth_(doc_30445)){
cljs.core.println.call(null," ",doc_30445);
} else {
}


var G__30447 = seq__30397_30437;
var G__30448 = chunk__30398_30438;
var G__30449 = count__30399_30439;
var G__30450 = (i__30400_30440 + (1));
seq__30397_30437 = G__30447;
chunk__30398_30438 = G__30448;
count__30399_30439 = G__30449;
i__30400_30440 = G__30450;
continue;
} else {
var temp__5457__auto___30451 = cljs.core.seq.call(null,seq__30397_30437);
if(temp__5457__auto___30451){
var seq__30397_30452__$1 = temp__5457__auto___30451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30397_30452__$1)){
var c__4319__auto___30453 = cljs.core.chunk_first.call(null,seq__30397_30452__$1);
var G__30454 = cljs.core.chunk_rest.call(null,seq__30397_30452__$1);
var G__30455 = c__4319__auto___30453;
var G__30456 = cljs.core.count.call(null,c__4319__auto___30453);
var G__30457 = (0);
seq__30397_30437 = G__30454;
chunk__30398_30438 = G__30455;
count__30399_30439 = G__30456;
i__30400_30440 = G__30457;
continue;
} else {
var vec__30406_30458 = cljs.core.first.call(null,seq__30397_30452__$1);
var name_30459 = cljs.core.nth.call(null,vec__30406_30458,(0),null);
var map__30409_30460 = cljs.core.nth.call(null,vec__30406_30458,(1),null);
var map__30409_30461__$1 = ((((!((map__30409_30460 == null)))?(((((map__30409_30460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30409_30460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30409_30460):map__30409_30460);
var doc_30462 = cljs.core.get.call(null,map__30409_30461__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30463 = cljs.core.get.call(null,map__30409_30461__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30459);

cljs.core.println.call(null," ",arglists_30463);

if(cljs.core.truth_(doc_30462)){
cljs.core.println.call(null," ",doc_30462);
} else {
}


var G__30464 = cljs.core.next.call(null,seq__30397_30452__$1);
var G__30465 = null;
var G__30466 = (0);
var G__30467 = (0);
seq__30397_30437 = G__30464;
chunk__30398_30438 = G__30465;
count__30399_30439 = G__30466;
i__30400_30440 = G__30467;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__30411 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30412 = null;
var count__30413 = (0);
var i__30414 = (0);
while(true){
if((i__30414 < count__30413)){
var role = cljs.core._nth.call(null,chunk__30412,i__30414);
var temp__5457__auto___30468__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30468__$1)){
var spec_30469 = temp__5457__auto___30468__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30469));
} else {
}


var G__30470 = seq__30411;
var G__30471 = chunk__30412;
var G__30472 = count__30413;
var G__30473 = (i__30414 + (1));
seq__30411 = G__30470;
chunk__30412 = G__30471;
count__30413 = G__30472;
i__30414 = G__30473;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__30411);
if(temp__5457__auto____$1){
var seq__30411__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30411__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30411__$1);
var G__30474 = cljs.core.chunk_rest.call(null,seq__30411__$1);
var G__30475 = c__4319__auto__;
var G__30476 = cljs.core.count.call(null,c__4319__auto__);
var G__30477 = (0);
seq__30411 = G__30474;
chunk__30412 = G__30475;
count__30413 = G__30476;
i__30414 = G__30477;
continue;
} else {
var role = cljs.core.first.call(null,seq__30411__$1);
var temp__5457__auto___30478__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30478__$2)){
var spec_30479 = temp__5457__auto___30478__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30479));
} else {
}


var G__30480 = cljs.core.next.call(null,seq__30411__$1);
var G__30481 = null;
var G__30482 = (0);
var G__30483 = (0);
seq__30411 = G__30480;
chunk__30412 = G__30481;
count__30413 = G__30482;
i__30414 = G__30483;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1522854617559
