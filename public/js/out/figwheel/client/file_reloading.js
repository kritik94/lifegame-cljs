// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28927_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28927_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28928 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28929 = null;
var count__28930 = (0);
var i__28931 = (0);
while(true){
if((i__28931 < count__28930)){
var n = cljs.core._nth.call(null,chunk__28929,i__28931);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28932 = seq__28928;
var G__28933 = chunk__28929;
var G__28934 = count__28930;
var G__28935 = (i__28931 + (1));
seq__28928 = G__28932;
chunk__28929 = G__28933;
count__28930 = G__28934;
i__28931 = G__28935;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28928);
if(temp__5457__auto__){
var seq__28928__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28928__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28928__$1);
var G__28936 = cljs.core.chunk_rest.call(null,seq__28928__$1);
var G__28937 = c__4319__auto__;
var G__28938 = cljs.core.count.call(null,c__4319__auto__);
var G__28939 = (0);
seq__28928 = G__28936;
chunk__28929 = G__28937;
count__28930 = G__28938;
i__28931 = G__28939;
continue;
} else {
var n = cljs.core.first.call(null,seq__28928__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28940 = cljs.core.next.call(null,seq__28928__$1);
var G__28941 = null;
var G__28942 = (0);
var G__28943 = (0);
seq__28928 = G__28940;
chunk__28929 = G__28941;
count__28930 = G__28942;
i__28931 = G__28943;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28944){
var vec__28945 = p__28944;
var _ = cljs.core.nth.call(null,vec__28945,(0),null);
var v = cljs.core.nth.call(null,vec__28945,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__28948){
var vec__28949 = p__28948;
var k = cljs.core.nth.call(null,vec__28949,(0),null);
var v = cljs.core.nth.call(null,vec__28949,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28961_28969 = cljs.core.seq.call(null,deps);
var chunk__28962_28970 = null;
var count__28963_28971 = (0);
var i__28964_28972 = (0);
while(true){
if((i__28964_28972 < count__28963_28971)){
var dep_28973 = cljs.core._nth.call(null,chunk__28962_28970,i__28964_28972);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_28973;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28973));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28973,(depth + (1)),state);
} else {
}


var G__28974 = seq__28961_28969;
var G__28975 = chunk__28962_28970;
var G__28976 = count__28963_28971;
var G__28977 = (i__28964_28972 + (1));
seq__28961_28969 = G__28974;
chunk__28962_28970 = G__28975;
count__28963_28971 = G__28976;
i__28964_28972 = G__28977;
continue;
} else {
var temp__5457__auto___28978 = cljs.core.seq.call(null,seq__28961_28969);
if(temp__5457__auto___28978){
var seq__28961_28979__$1 = temp__5457__auto___28978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28961_28979__$1)){
var c__4319__auto___28980 = cljs.core.chunk_first.call(null,seq__28961_28979__$1);
var G__28981 = cljs.core.chunk_rest.call(null,seq__28961_28979__$1);
var G__28982 = c__4319__auto___28980;
var G__28983 = cljs.core.count.call(null,c__4319__auto___28980);
var G__28984 = (0);
seq__28961_28969 = G__28981;
chunk__28962_28970 = G__28982;
count__28963_28971 = G__28983;
i__28964_28972 = G__28984;
continue;
} else {
var dep_28985 = cljs.core.first.call(null,seq__28961_28979__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_28985;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28985));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28985,(depth + (1)),state);
} else {
}


var G__28986 = cljs.core.next.call(null,seq__28961_28979__$1);
var G__28987 = null;
var G__28988 = (0);
var G__28989 = (0);
seq__28961_28969 = G__28986;
chunk__28962_28970 = G__28987;
count__28963_28971 = G__28988;
i__28964_28972 = G__28989;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28965){
var vec__28966 = p__28965;
var seq__28967 = cljs.core.seq.call(null,vec__28966);
var first__28968 = cljs.core.first.call(null,seq__28967);
var seq__28967__$1 = cljs.core.next.call(null,seq__28967);
var x = first__28968;
var xs = seq__28967__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28966,seq__28967,first__28968,seq__28967__$1,x,xs,get_deps__$1){
return (function (p1__28952_SHARP_){
return clojure.set.difference.call(null,p1__28952_SHARP_,x);
});})(vec__28966,seq__28967,first__28968,seq__28967__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28990 = cljs.core.seq.call(null,provides);
var chunk__28991 = null;
var count__28992 = (0);
var i__28993 = (0);
while(true){
if((i__28993 < count__28992)){
var prov = cljs.core._nth.call(null,chunk__28991,i__28993);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28994_29002 = cljs.core.seq.call(null,requires);
var chunk__28995_29003 = null;
var count__28996_29004 = (0);
var i__28997_29005 = (0);
while(true){
if((i__28997_29005 < count__28996_29004)){
var req_29006 = cljs.core._nth.call(null,chunk__28995_29003,i__28997_29005);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29006,prov);


var G__29007 = seq__28994_29002;
var G__29008 = chunk__28995_29003;
var G__29009 = count__28996_29004;
var G__29010 = (i__28997_29005 + (1));
seq__28994_29002 = G__29007;
chunk__28995_29003 = G__29008;
count__28996_29004 = G__29009;
i__28997_29005 = G__29010;
continue;
} else {
var temp__5457__auto___29011 = cljs.core.seq.call(null,seq__28994_29002);
if(temp__5457__auto___29011){
var seq__28994_29012__$1 = temp__5457__auto___29011;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28994_29012__$1)){
var c__4319__auto___29013 = cljs.core.chunk_first.call(null,seq__28994_29012__$1);
var G__29014 = cljs.core.chunk_rest.call(null,seq__28994_29012__$1);
var G__29015 = c__4319__auto___29013;
var G__29016 = cljs.core.count.call(null,c__4319__auto___29013);
var G__29017 = (0);
seq__28994_29002 = G__29014;
chunk__28995_29003 = G__29015;
count__28996_29004 = G__29016;
i__28997_29005 = G__29017;
continue;
} else {
var req_29018 = cljs.core.first.call(null,seq__28994_29012__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29018,prov);


var G__29019 = cljs.core.next.call(null,seq__28994_29012__$1);
var G__29020 = null;
var G__29021 = (0);
var G__29022 = (0);
seq__28994_29002 = G__29019;
chunk__28995_29003 = G__29020;
count__28996_29004 = G__29021;
i__28997_29005 = G__29022;
continue;
}
} else {
}
}
break;
}


var G__29023 = seq__28990;
var G__29024 = chunk__28991;
var G__29025 = count__28992;
var G__29026 = (i__28993 + (1));
seq__28990 = G__29023;
chunk__28991 = G__29024;
count__28992 = G__29025;
i__28993 = G__29026;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28990);
if(temp__5457__auto__){
var seq__28990__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28990__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28990__$1);
var G__29027 = cljs.core.chunk_rest.call(null,seq__28990__$1);
var G__29028 = c__4319__auto__;
var G__29029 = cljs.core.count.call(null,c__4319__auto__);
var G__29030 = (0);
seq__28990 = G__29027;
chunk__28991 = G__29028;
count__28992 = G__29029;
i__28993 = G__29030;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28990__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28998_29031 = cljs.core.seq.call(null,requires);
var chunk__28999_29032 = null;
var count__29000_29033 = (0);
var i__29001_29034 = (0);
while(true){
if((i__29001_29034 < count__29000_29033)){
var req_29035 = cljs.core._nth.call(null,chunk__28999_29032,i__29001_29034);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29035,prov);


var G__29036 = seq__28998_29031;
var G__29037 = chunk__28999_29032;
var G__29038 = count__29000_29033;
var G__29039 = (i__29001_29034 + (1));
seq__28998_29031 = G__29036;
chunk__28999_29032 = G__29037;
count__29000_29033 = G__29038;
i__29001_29034 = G__29039;
continue;
} else {
var temp__5457__auto___29040__$1 = cljs.core.seq.call(null,seq__28998_29031);
if(temp__5457__auto___29040__$1){
var seq__28998_29041__$1 = temp__5457__auto___29040__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28998_29041__$1)){
var c__4319__auto___29042 = cljs.core.chunk_first.call(null,seq__28998_29041__$1);
var G__29043 = cljs.core.chunk_rest.call(null,seq__28998_29041__$1);
var G__29044 = c__4319__auto___29042;
var G__29045 = cljs.core.count.call(null,c__4319__auto___29042);
var G__29046 = (0);
seq__28998_29031 = G__29043;
chunk__28999_29032 = G__29044;
count__29000_29033 = G__29045;
i__29001_29034 = G__29046;
continue;
} else {
var req_29047 = cljs.core.first.call(null,seq__28998_29041__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29047,prov);


var G__29048 = cljs.core.next.call(null,seq__28998_29041__$1);
var G__29049 = null;
var G__29050 = (0);
var G__29051 = (0);
seq__28998_29031 = G__29048;
chunk__28999_29032 = G__29049;
count__29000_29033 = G__29050;
i__29001_29034 = G__29051;
continue;
}
} else {
}
}
break;
}


var G__29052 = cljs.core.next.call(null,seq__28990__$1);
var G__29053 = null;
var G__29054 = (0);
var G__29055 = (0);
seq__28990 = G__29052;
chunk__28991 = G__29053;
count__28992 = G__29054;
i__28993 = G__29055;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29056_29060 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29057_29061 = null;
var count__29058_29062 = (0);
var i__29059_29063 = (0);
while(true){
if((i__29059_29063 < count__29058_29062)){
var ns_29064 = cljs.core._nth.call(null,chunk__29057_29061,i__29059_29063);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29064);


var G__29065 = seq__29056_29060;
var G__29066 = chunk__29057_29061;
var G__29067 = count__29058_29062;
var G__29068 = (i__29059_29063 + (1));
seq__29056_29060 = G__29065;
chunk__29057_29061 = G__29066;
count__29058_29062 = G__29067;
i__29059_29063 = G__29068;
continue;
} else {
var temp__5457__auto___29069 = cljs.core.seq.call(null,seq__29056_29060);
if(temp__5457__auto___29069){
var seq__29056_29070__$1 = temp__5457__auto___29069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29056_29070__$1)){
var c__4319__auto___29071 = cljs.core.chunk_first.call(null,seq__29056_29070__$1);
var G__29072 = cljs.core.chunk_rest.call(null,seq__29056_29070__$1);
var G__29073 = c__4319__auto___29071;
var G__29074 = cljs.core.count.call(null,c__4319__auto___29071);
var G__29075 = (0);
seq__29056_29060 = G__29072;
chunk__29057_29061 = G__29073;
count__29058_29062 = G__29074;
i__29059_29063 = G__29075;
continue;
} else {
var ns_29076 = cljs.core.first.call(null,seq__29056_29070__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29076);


var G__29077 = cljs.core.next.call(null,seq__29056_29070__$1);
var G__29078 = null;
var G__29079 = (0);
var G__29080 = (0);
seq__29056_29060 = G__29077;
chunk__29057_29061 = G__29078;
count__29058_29062 = G__29079;
i__29059_29063 = G__29080;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29081__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29081 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29082__i = 0, G__29082__a = new Array(arguments.length -  0);
while (G__29082__i < G__29082__a.length) {G__29082__a[G__29082__i] = arguments[G__29082__i + 0]; ++G__29082__i;}
  args = new cljs.core.IndexedSeq(G__29082__a,0,null);
} 
return G__29081__delegate.call(this,args);};
G__29081.cljs$lang$maxFixedArity = 0;
G__29081.cljs$lang$applyTo = (function (arglist__29083){
var args = cljs.core.seq(arglist__29083);
return G__29081__delegate(args);
});
G__29081.cljs$core$IFn$_invoke$arity$variadic = G__29081__delegate;
return G__29081;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__29084_SHARP_,p2__29085_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29084_SHARP_)].join('')),p2__29085_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__29086_SHARP_,p2__29087_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29086_SHARP_)].join(''),p2__29087_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29088 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29088.addCallback(((function (G__29088){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29088))
);

G__29088.addErrback(((function (G__29088){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29088))
);

return G__29088;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29089){if((e29089 instanceof Error)){
var e = e29089;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29089;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29090){if((e29090 instanceof Error)){
var e = e29090;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29090;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29091 = cljs.core._EQ_;
var expr__29092 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29091.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29092))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29091.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29092))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29091.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29092))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29091,expr__29092){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29091,expr__29092))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29094,callback){
var map__29095 = p__29094;
var map__29095__$1 = ((((!((map__29095 == null)))?(((((map__29095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29095):map__29095);
var file_msg = map__29095__$1;
var request_url = cljs.core.get.call(null,map__29095__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29095,map__29095__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29095,map__29095__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26509__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto__){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto__){
return (function (state_29133){
var state_val_29134 = (state_29133[(1)]);
if((state_val_29134 === (7))){
var inst_29129 = (state_29133[(2)]);
var state_29133__$1 = state_29133;
var statearr_29135_29161 = state_29133__$1;
(statearr_29135_29161[(2)] = inst_29129);

(statearr_29135_29161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (1))){
var state_29133__$1 = state_29133;
var statearr_29136_29162 = state_29133__$1;
(statearr_29136_29162[(2)] = null);

(statearr_29136_29162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (4))){
var inst_29099 = (state_29133[(7)]);
var inst_29099__$1 = (state_29133[(2)]);
var state_29133__$1 = (function (){var statearr_29137 = state_29133;
(statearr_29137[(7)] = inst_29099__$1);

return statearr_29137;
})();
if(cljs.core.truth_(inst_29099__$1)){
var statearr_29138_29163 = state_29133__$1;
(statearr_29138_29163[(1)] = (5));

} else {
var statearr_29139_29164 = state_29133__$1;
(statearr_29139_29164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (15))){
var inst_29112 = (state_29133[(8)]);
var inst_29114 = (state_29133[(9)]);
var inst_29116 = inst_29114.call(null,inst_29112);
var state_29133__$1 = state_29133;
var statearr_29140_29165 = state_29133__$1;
(statearr_29140_29165[(2)] = inst_29116);

(statearr_29140_29165[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (13))){
var inst_29123 = (state_29133[(2)]);
var state_29133__$1 = state_29133;
var statearr_29141_29166 = state_29133__$1;
(statearr_29141_29166[(2)] = inst_29123);

(statearr_29141_29166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (6))){
var state_29133__$1 = state_29133;
var statearr_29142_29167 = state_29133__$1;
(statearr_29142_29167[(2)] = null);

(statearr_29142_29167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (17))){
var inst_29120 = (state_29133[(2)]);
var state_29133__$1 = state_29133;
var statearr_29143_29168 = state_29133__$1;
(statearr_29143_29168[(2)] = inst_29120);

(statearr_29143_29168[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (3))){
var inst_29131 = (state_29133[(2)]);
var state_29133__$1 = state_29133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29133__$1,inst_29131);
} else {
if((state_val_29134 === (12))){
var state_29133__$1 = state_29133;
var statearr_29144_29169 = state_29133__$1;
(statearr_29144_29169[(2)] = null);

(statearr_29144_29169[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (2))){
var state_29133__$1 = state_29133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29133__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29134 === (11))){
var inst_29104 = (state_29133[(10)]);
var inst_29110 = figwheel.client.file_reloading.blocking_load.call(null,inst_29104);
var state_29133__$1 = state_29133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29133__$1,(14),inst_29110);
} else {
if((state_val_29134 === (9))){
var inst_29104 = (state_29133[(10)]);
var state_29133__$1 = state_29133;
if(cljs.core.truth_(inst_29104)){
var statearr_29145_29170 = state_29133__$1;
(statearr_29145_29170[(1)] = (11));

} else {
var statearr_29146_29171 = state_29133__$1;
(statearr_29146_29171[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (5))){
var inst_29105 = (state_29133[(11)]);
var inst_29099 = (state_29133[(7)]);
var inst_29104 = cljs.core.nth.call(null,inst_29099,(0),null);
var inst_29105__$1 = cljs.core.nth.call(null,inst_29099,(1),null);
var state_29133__$1 = (function (){var statearr_29147 = state_29133;
(statearr_29147[(11)] = inst_29105__$1);

(statearr_29147[(10)] = inst_29104);

return statearr_29147;
})();
if(cljs.core.truth_(inst_29105__$1)){
var statearr_29148_29172 = state_29133__$1;
(statearr_29148_29172[(1)] = (8));

} else {
var statearr_29149_29173 = state_29133__$1;
(statearr_29149_29173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (14))){
var inst_29114 = (state_29133[(9)]);
var inst_29104 = (state_29133[(10)]);
var inst_29112 = (state_29133[(2)]);
var inst_29113 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29114__$1 = cljs.core.get.call(null,inst_29113,inst_29104);
var state_29133__$1 = (function (){var statearr_29150 = state_29133;
(statearr_29150[(8)] = inst_29112);

(statearr_29150[(9)] = inst_29114__$1);

return statearr_29150;
})();
if(cljs.core.truth_(inst_29114__$1)){
var statearr_29151_29174 = state_29133__$1;
(statearr_29151_29174[(1)] = (15));

} else {
var statearr_29152_29175 = state_29133__$1;
(statearr_29152_29175[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (16))){
var inst_29112 = (state_29133[(8)]);
var inst_29118 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29112);
var state_29133__$1 = state_29133;
var statearr_29153_29176 = state_29133__$1;
(statearr_29153_29176[(2)] = inst_29118);

(statearr_29153_29176[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (10))){
var inst_29125 = (state_29133[(2)]);
var state_29133__$1 = (function (){var statearr_29154 = state_29133;
(statearr_29154[(12)] = inst_29125);

return statearr_29154;
})();
var statearr_29155_29177 = state_29133__$1;
(statearr_29155_29177[(2)] = null);

(statearr_29155_29177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29134 === (8))){
var inst_29105 = (state_29133[(11)]);
var inst_29107 = eval(inst_29105);
var state_29133__$1 = state_29133;
var statearr_29156_29178 = state_29133__$1;
(statearr_29156_29178[(2)] = inst_29107);

(statearr_29156_29178[(1)] = (10));


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
});})(c__26509__auto__))
;
return ((function (switch__26419__auto__,c__26509__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26420__auto__ = null;
var figwheel$client$file_reloading$state_machine__26420__auto____0 = (function (){
var statearr_29157 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29157[(0)] = figwheel$client$file_reloading$state_machine__26420__auto__);

(statearr_29157[(1)] = (1));

return statearr_29157;
});
var figwheel$client$file_reloading$state_machine__26420__auto____1 = (function (state_29133){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_29133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e29158){if((e29158 instanceof Object)){
var ex__26423__auto__ = e29158;
var statearr_29159_29179 = state_29133;
(statearr_29159_29179[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29180 = state_29133;
state_29133 = G__29180;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26420__auto__ = function(state_29133){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26420__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26420__auto____1.call(this,state_29133);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26420__auto____0;
figwheel$client$file_reloading$state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26420__auto____1;
return figwheel$client$file_reloading$state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto__))
})();
var state__26511__auto__ = (function (){var statearr_29160 = f__26510__auto__.call(null);
(statearr_29160[(6)] = c__26509__auto__);

return statearr_29160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto__))
);

return c__26509__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29182 = arguments.length;
switch (G__29182) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29184,callback){
var map__29185 = p__29184;
var map__29185__$1 = ((((!((map__29185 == null)))?(((((map__29185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29185):map__29185);
var file_msg = map__29185__$1;
var namespace = cljs.core.get.call(null,map__29185__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29185,map__29185__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29185,map__29185__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29187){
var map__29188 = p__29187;
var map__29188__$1 = ((((!((map__29188 == null)))?(((((map__29188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29188):map__29188);
var file_msg = map__29188__$1;
var namespace = cljs.core.get.call(null,map__29188__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29190){
var map__29191 = p__29190;
var map__29191__$1 = ((((!((map__29191 == null)))?(((((map__29191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29191):map__29191);
var file_msg = map__29191__$1;
var namespace = cljs.core.get.call(null,map__29191__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29193,callback){
var map__29194 = p__29193;
var map__29194__$1 = ((((!((map__29194 == null)))?(((((map__29194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29194):map__29194);
var file_msg = map__29194__$1;
var request_url = cljs.core.get.call(null,map__29194__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29194__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26509__auto___29244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto___29244,out){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto___29244,out){
return (function (state_29229){
var state_val_29230 = (state_29229[(1)]);
if((state_val_29230 === (1))){
var inst_29203 = cljs.core.seq.call(null,files);
var inst_29204 = cljs.core.first.call(null,inst_29203);
var inst_29205 = cljs.core.next.call(null,inst_29203);
var inst_29206 = files;
var state_29229__$1 = (function (){var statearr_29231 = state_29229;
(statearr_29231[(7)] = inst_29206);

(statearr_29231[(8)] = inst_29205);

(statearr_29231[(9)] = inst_29204);

return statearr_29231;
})();
var statearr_29232_29245 = state_29229__$1;
(statearr_29232_29245[(2)] = null);

(statearr_29232_29245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29230 === (2))){
var inst_29206 = (state_29229[(7)]);
var inst_29212 = (state_29229[(10)]);
var inst_29211 = cljs.core.seq.call(null,inst_29206);
var inst_29212__$1 = cljs.core.first.call(null,inst_29211);
var inst_29213 = cljs.core.next.call(null,inst_29211);
var inst_29214 = (inst_29212__$1 == null);
var inst_29215 = cljs.core.not.call(null,inst_29214);
var state_29229__$1 = (function (){var statearr_29233 = state_29229;
(statearr_29233[(11)] = inst_29213);

(statearr_29233[(10)] = inst_29212__$1);

return statearr_29233;
})();
if(inst_29215){
var statearr_29234_29246 = state_29229__$1;
(statearr_29234_29246[(1)] = (4));

} else {
var statearr_29235_29247 = state_29229__$1;
(statearr_29235_29247[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29230 === (3))){
var inst_29227 = (state_29229[(2)]);
var state_29229__$1 = state_29229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29229__$1,inst_29227);
} else {
if((state_val_29230 === (4))){
var inst_29212 = (state_29229[(10)]);
var inst_29217 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29212);
var state_29229__$1 = state_29229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29229__$1,(7),inst_29217);
} else {
if((state_val_29230 === (5))){
var inst_29223 = cljs.core.async.close_BANG_.call(null,out);
var state_29229__$1 = state_29229;
var statearr_29236_29248 = state_29229__$1;
(statearr_29236_29248[(2)] = inst_29223);

(statearr_29236_29248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29230 === (6))){
var inst_29225 = (state_29229[(2)]);
var state_29229__$1 = state_29229;
var statearr_29237_29249 = state_29229__$1;
(statearr_29237_29249[(2)] = inst_29225);

(statearr_29237_29249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29230 === (7))){
var inst_29213 = (state_29229[(11)]);
var inst_29219 = (state_29229[(2)]);
var inst_29220 = cljs.core.async.put_BANG_.call(null,out,inst_29219);
var inst_29206 = inst_29213;
var state_29229__$1 = (function (){var statearr_29238 = state_29229;
(statearr_29238[(7)] = inst_29206);

(statearr_29238[(12)] = inst_29220);

return statearr_29238;
})();
var statearr_29239_29250 = state_29229__$1;
(statearr_29239_29250[(2)] = null);

(statearr_29239_29250[(1)] = (2));


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
});})(c__26509__auto___29244,out))
;
return ((function (switch__26419__auto__,c__26509__auto___29244,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26420__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26420__auto____0 = (function (){
var statearr_29240 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29240[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26420__auto__);

(statearr_29240[(1)] = (1));

return statearr_29240;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26420__auto____1 = (function (state_29229){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_29229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e29241){if((e29241 instanceof Object)){
var ex__26423__auto__ = e29241;
var statearr_29242_29251 = state_29229;
(statearr_29242_29251[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29252 = state_29229;
state_29229 = G__29252;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26420__auto__ = function(state_29229){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26420__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26420__auto____1.call(this,state_29229);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26420__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26420__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto___29244,out))
})();
var state__26511__auto__ = (function (){var statearr_29243 = f__26510__auto__.call(null);
(statearr_29243[(6)] = c__26509__auto___29244);

return statearr_29243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto___29244,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29253,opts){
var map__29254 = p__29253;
var map__29254__$1 = ((((!((map__29254 == null)))?(((((map__29254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29254):map__29254);
var eval_body = cljs.core.get.call(null,map__29254__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29254__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29256){var e = e29256;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__29257_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29257_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29258){
var vec__29259 = p__29258;
var k = cljs.core.nth.call(null,vec__29259,(0),null);
var v = cljs.core.nth.call(null,vec__29259,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29262){
var vec__29263 = p__29262;
var k = cljs.core.nth.call(null,vec__29263,(0),null);
var v = cljs.core.nth.call(null,vec__29263,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29269,p__29270){
var map__29271 = p__29269;
var map__29271__$1 = ((((!((map__29271 == null)))?(((((map__29271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29271):map__29271);
var opts = map__29271__$1;
var before_jsload = cljs.core.get.call(null,map__29271__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29271__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29271__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29272 = p__29270;
var map__29272__$1 = ((((!((map__29272 == null)))?(((((map__29272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29272):map__29272);
var msg = map__29272__$1;
var files = cljs.core.get.call(null,map__29272__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29272__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29272__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26509__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto__,map__29271,map__29271__$1,opts,before_jsload,on_jsload,reload_dependents,map__29272,map__29272__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto__,map__29271,map__29271__$1,opts,before_jsload,on_jsload,reload_dependents,map__29272,map__29272__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29426){
var state_val_29427 = (state_29426[(1)]);
if((state_val_29427 === (7))){
var inst_29287 = (state_29426[(7)]);
var inst_29289 = (state_29426[(8)]);
var inst_29286 = (state_29426[(9)]);
var inst_29288 = (state_29426[(10)]);
var inst_29294 = cljs.core._nth.call(null,inst_29287,inst_29289);
var inst_29295 = figwheel.client.file_reloading.eval_body.call(null,inst_29294,opts);
var inst_29296 = (inst_29289 + (1));
var tmp29428 = inst_29287;
var tmp29429 = inst_29286;
var tmp29430 = inst_29288;
var inst_29286__$1 = tmp29429;
var inst_29287__$1 = tmp29428;
var inst_29288__$1 = tmp29430;
var inst_29289__$1 = inst_29296;
var state_29426__$1 = (function (){var statearr_29431 = state_29426;
(statearr_29431[(11)] = inst_29295);

(statearr_29431[(7)] = inst_29287__$1);

(statearr_29431[(8)] = inst_29289__$1);

(statearr_29431[(9)] = inst_29286__$1);

(statearr_29431[(10)] = inst_29288__$1);

return statearr_29431;
})();
var statearr_29432_29515 = state_29426__$1;
(statearr_29432_29515[(2)] = null);

(statearr_29432_29515[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (20))){
var inst_29329 = (state_29426[(12)]);
var inst_29337 = figwheel.client.file_reloading.sort_files.call(null,inst_29329);
var state_29426__$1 = state_29426;
var statearr_29433_29516 = state_29426__$1;
(statearr_29433_29516[(2)] = inst_29337);

(statearr_29433_29516[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (27))){
var state_29426__$1 = state_29426;
var statearr_29434_29517 = state_29426__$1;
(statearr_29434_29517[(2)] = null);

(statearr_29434_29517[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (1))){
var inst_29278 = (state_29426[(13)]);
var inst_29275 = before_jsload.call(null,files);
var inst_29276 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29277 = (function (){return ((function (inst_29278,inst_29275,inst_29276,state_val_29427,c__26509__auto__,map__29271,map__29271__$1,opts,before_jsload,on_jsload,reload_dependents,map__29272,map__29272__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29266_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29266_SHARP_);
});
;})(inst_29278,inst_29275,inst_29276,state_val_29427,c__26509__auto__,map__29271,map__29271__$1,opts,before_jsload,on_jsload,reload_dependents,map__29272,map__29272__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29278__$1 = cljs.core.filter.call(null,inst_29277,files);
var inst_29279 = cljs.core.not_empty.call(null,inst_29278__$1);
var state_29426__$1 = (function (){var statearr_29435 = state_29426;
(statearr_29435[(14)] = inst_29275);

(statearr_29435[(13)] = inst_29278__$1);

(statearr_29435[(15)] = inst_29276);

return statearr_29435;
})();
if(cljs.core.truth_(inst_29279)){
var statearr_29436_29518 = state_29426__$1;
(statearr_29436_29518[(1)] = (2));

} else {
var statearr_29437_29519 = state_29426__$1;
(statearr_29437_29519[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (24))){
var state_29426__$1 = state_29426;
var statearr_29438_29520 = state_29426__$1;
(statearr_29438_29520[(2)] = null);

(statearr_29438_29520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (39))){
var inst_29379 = (state_29426[(16)]);
var state_29426__$1 = state_29426;
var statearr_29439_29521 = state_29426__$1;
(statearr_29439_29521[(2)] = inst_29379);

(statearr_29439_29521[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (46))){
var inst_29421 = (state_29426[(2)]);
var state_29426__$1 = state_29426;
var statearr_29440_29522 = state_29426__$1;
(statearr_29440_29522[(2)] = inst_29421);

(statearr_29440_29522[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (4))){
var inst_29323 = (state_29426[(2)]);
var inst_29324 = cljs.core.List.EMPTY;
var inst_29325 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29324);
var inst_29326 = (function (){return ((function (inst_29323,inst_29324,inst_29325,state_val_29427,c__26509__auto__,map__29271,map__29271__$1,opts,before_jsload,on_jsload,reload_dependents,map__29272,map__29272__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29267_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29267_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29267_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29267_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_29323,inst_29324,inst_29325,state_val_29427,c__26509__auto__,map__29271,map__29271__$1,opts,before_jsload,on_jsload,reload_dependents,map__29272,map__29272__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29327 = cljs.core.filter.call(null,inst_29326,files);
var inst_29328 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29329 = cljs.core.concat.call(null,inst_29327,inst_29328);
var state_29426__$1 = (function (){var statearr_29441 = state_29426;
(statearr_29441[(17)] = inst_29325);

(statearr_29441[(18)] = inst_29323);

(statearr_29441[(12)] = inst_29329);

return statearr_29441;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29442_29523 = state_29426__$1;
(statearr_29442_29523[(1)] = (16));

} else {
var statearr_29443_29524 = state_29426__$1;
(statearr_29443_29524[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (15))){
var inst_29313 = (state_29426[(2)]);
var state_29426__$1 = state_29426;
var statearr_29444_29525 = state_29426__$1;
(statearr_29444_29525[(2)] = inst_29313);

(statearr_29444_29525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (21))){
var inst_29339 = (state_29426[(19)]);
var inst_29339__$1 = (state_29426[(2)]);
var inst_29340 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29339__$1);
var state_29426__$1 = (function (){var statearr_29445 = state_29426;
(statearr_29445[(19)] = inst_29339__$1);

return statearr_29445;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29426__$1,(22),inst_29340);
} else {
if((state_val_29427 === (31))){
var inst_29424 = (state_29426[(2)]);
var state_29426__$1 = state_29426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29426__$1,inst_29424);
} else {
if((state_val_29427 === (32))){
var inst_29379 = (state_29426[(16)]);
var inst_29384 = inst_29379.cljs$lang$protocol_mask$partition0$;
var inst_29385 = (inst_29384 & (64));
var inst_29386 = inst_29379.cljs$core$ISeq$;
var inst_29387 = (cljs.core.PROTOCOL_SENTINEL === inst_29386);
var inst_29388 = ((inst_29385) || (inst_29387));
var state_29426__$1 = state_29426;
if(cljs.core.truth_(inst_29388)){
var statearr_29446_29526 = state_29426__$1;
(statearr_29446_29526[(1)] = (35));

} else {
var statearr_29447_29527 = state_29426__$1;
(statearr_29447_29527[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (40))){
var inst_29401 = (state_29426[(20)]);
var inst_29400 = (state_29426[(2)]);
var inst_29401__$1 = cljs.core.get.call(null,inst_29400,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29402 = cljs.core.get.call(null,inst_29400,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29403 = cljs.core.not_empty.call(null,inst_29401__$1);
var state_29426__$1 = (function (){var statearr_29448 = state_29426;
(statearr_29448[(20)] = inst_29401__$1);

(statearr_29448[(21)] = inst_29402);

return statearr_29448;
})();
if(cljs.core.truth_(inst_29403)){
var statearr_29449_29528 = state_29426__$1;
(statearr_29449_29528[(1)] = (41));

} else {
var statearr_29450_29529 = state_29426__$1;
(statearr_29450_29529[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (33))){
var state_29426__$1 = state_29426;
var statearr_29451_29530 = state_29426__$1;
(statearr_29451_29530[(2)] = false);

(statearr_29451_29530[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (13))){
var inst_29299 = (state_29426[(22)]);
var inst_29303 = cljs.core.chunk_first.call(null,inst_29299);
var inst_29304 = cljs.core.chunk_rest.call(null,inst_29299);
var inst_29305 = cljs.core.count.call(null,inst_29303);
var inst_29286 = inst_29304;
var inst_29287 = inst_29303;
var inst_29288 = inst_29305;
var inst_29289 = (0);
var state_29426__$1 = (function (){var statearr_29452 = state_29426;
(statearr_29452[(7)] = inst_29287);

(statearr_29452[(8)] = inst_29289);

(statearr_29452[(9)] = inst_29286);

(statearr_29452[(10)] = inst_29288);

return statearr_29452;
})();
var statearr_29453_29531 = state_29426__$1;
(statearr_29453_29531[(2)] = null);

(statearr_29453_29531[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (22))){
var inst_29339 = (state_29426[(19)]);
var inst_29347 = (state_29426[(23)]);
var inst_29343 = (state_29426[(24)]);
var inst_29342 = (state_29426[(25)]);
var inst_29342__$1 = (state_29426[(2)]);
var inst_29343__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29342__$1);
var inst_29344 = (function (){var all_files = inst_29339;
var res_SINGLEQUOTE_ = inst_29342__$1;
var res = inst_29343__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29339,inst_29347,inst_29343,inst_29342,inst_29342__$1,inst_29343__$1,state_val_29427,c__26509__auto__,map__29271,map__29271__$1,opts,before_jsload,on_jsload,reload_dependents,map__29272,map__29272__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29268_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29268_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29339,inst_29347,inst_29343,inst_29342,inst_29342__$1,inst_29343__$1,state_val_29427,c__26509__auto__,map__29271,map__29271__$1,opts,before_jsload,on_jsload,reload_dependents,map__29272,map__29272__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29345 = cljs.core.filter.call(null,inst_29344,inst_29342__$1);
var inst_29346 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29347__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29346);
var inst_29348 = cljs.core.not_empty.call(null,inst_29347__$1);
var state_29426__$1 = (function (){var statearr_29454 = state_29426;
(statearr_29454[(23)] = inst_29347__$1);

(statearr_29454[(24)] = inst_29343__$1);

(statearr_29454[(26)] = inst_29345);

(statearr_29454[(25)] = inst_29342__$1);

return statearr_29454;
})();
if(cljs.core.truth_(inst_29348)){
var statearr_29455_29532 = state_29426__$1;
(statearr_29455_29532[(1)] = (23));

} else {
var statearr_29456_29533 = state_29426__$1;
(statearr_29456_29533[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (36))){
var state_29426__$1 = state_29426;
var statearr_29457_29534 = state_29426__$1;
(statearr_29457_29534[(2)] = false);

(statearr_29457_29534[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (41))){
var inst_29401 = (state_29426[(20)]);
var inst_29405 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29406 = cljs.core.map.call(null,inst_29405,inst_29401);
var inst_29407 = cljs.core.pr_str.call(null,inst_29406);
var inst_29408 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29407)].join('');
var inst_29409 = figwheel.client.utils.log.call(null,inst_29408);
var state_29426__$1 = state_29426;
var statearr_29458_29535 = state_29426__$1;
(statearr_29458_29535[(2)] = inst_29409);

(statearr_29458_29535[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (43))){
var inst_29402 = (state_29426[(21)]);
var inst_29412 = (state_29426[(2)]);
var inst_29413 = cljs.core.not_empty.call(null,inst_29402);
var state_29426__$1 = (function (){var statearr_29459 = state_29426;
(statearr_29459[(27)] = inst_29412);

return statearr_29459;
})();
if(cljs.core.truth_(inst_29413)){
var statearr_29460_29536 = state_29426__$1;
(statearr_29460_29536[(1)] = (44));

} else {
var statearr_29461_29537 = state_29426__$1;
(statearr_29461_29537[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (29))){
var inst_29379 = (state_29426[(16)]);
var inst_29339 = (state_29426[(19)]);
var inst_29347 = (state_29426[(23)]);
var inst_29343 = (state_29426[(24)]);
var inst_29345 = (state_29426[(26)]);
var inst_29342 = (state_29426[(25)]);
var inst_29375 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29378 = (function (){var all_files = inst_29339;
var res_SINGLEQUOTE_ = inst_29342;
var res = inst_29343;
var files_not_loaded = inst_29345;
var dependencies_that_loaded = inst_29347;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29379,inst_29339,inst_29347,inst_29343,inst_29345,inst_29342,inst_29375,state_val_29427,c__26509__auto__,map__29271,map__29271__$1,opts,before_jsload,on_jsload,reload_dependents,map__29272,map__29272__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29377){
var map__29462 = p__29377;
var map__29462__$1 = ((((!((map__29462 == null)))?(((((map__29462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29462):map__29462);
var namespace = cljs.core.get.call(null,map__29462__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29379,inst_29339,inst_29347,inst_29343,inst_29345,inst_29342,inst_29375,state_val_29427,c__26509__auto__,map__29271,map__29271__$1,opts,before_jsload,on_jsload,reload_dependents,map__29272,map__29272__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29379__$1 = cljs.core.group_by.call(null,inst_29378,inst_29345);
var inst_29381 = (inst_29379__$1 == null);
var inst_29382 = cljs.core.not.call(null,inst_29381);
var state_29426__$1 = (function (){var statearr_29464 = state_29426;
(statearr_29464[(28)] = inst_29375);

(statearr_29464[(16)] = inst_29379__$1);

return statearr_29464;
})();
if(inst_29382){
var statearr_29465_29538 = state_29426__$1;
(statearr_29465_29538[(1)] = (32));

} else {
var statearr_29466_29539 = state_29426__$1;
(statearr_29466_29539[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (44))){
var inst_29402 = (state_29426[(21)]);
var inst_29415 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29402);
var inst_29416 = cljs.core.pr_str.call(null,inst_29415);
var inst_29417 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29416)].join('');
var inst_29418 = figwheel.client.utils.log.call(null,inst_29417);
var state_29426__$1 = state_29426;
var statearr_29467_29540 = state_29426__$1;
(statearr_29467_29540[(2)] = inst_29418);

(statearr_29467_29540[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (6))){
var inst_29320 = (state_29426[(2)]);
var state_29426__$1 = state_29426;
var statearr_29468_29541 = state_29426__$1;
(statearr_29468_29541[(2)] = inst_29320);

(statearr_29468_29541[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (28))){
var inst_29345 = (state_29426[(26)]);
var inst_29372 = (state_29426[(2)]);
var inst_29373 = cljs.core.not_empty.call(null,inst_29345);
var state_29426__$1 = (function (){var statearr_29469 = state_29426;
(statearr_29469[(29)] = inst_29372);

return statearr_29469;
})();
if(cljs.core.truth_(inst_29373)){
var statearr_29470_29542 = state_29426__$1;
(statearr_29470_29542[(1)] = (29));

} else {
var statearr_29471_29543 = state_29426__$1;
(statearr_29471_29543[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (25))){
var inst_29343 = (state_29426[(24)]);
var inst_29359 = (state_29426[(2)]);
var inst_29360 = cljs.core.not_empty.call(null,inst_29343);
var state_29426__$1 = (function (){var statearr_29472 = state_29426;
(statearr_29472[(30)] = inst_29359);

return statearr_29472;
})();
if(cljs.core.truth_(inst_29360)){
var statearr_29473_29544 = state_29426__$1;
(statearr_29473_29544[(1)] = (26));

} else {
var statearr_29474_29545 = state_29426__$1;
(statearr_29474_29545[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (34))){
var inst_29395 = (state_29426[(2)]);
var state_29426__$1 = state_29426;
if(cljs.core.truth_(inst_29395)){
var statearr_29475_29546 = state_29426__$1;
(statearr_29475_29546[(1)] = (38));

} else {
var statearr_29476_29547 = state_29426__$1;
(statearr_29476_29547[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (17))){
var state_29426__$1 = state_29426;
var statearr_29477_29548 = state_29426__$1;
(statearr_29477_29548[(2)] = recompile_dependents);

(statearr_29477_29548[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (3))){
var state_29426__$1 = state_29426;
var statearr_29478_29549 = state_29426__$1;
(statearr_29478_29549[(2)] = null);

(statearr_29478_29549[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (12))){
var inst_29316 = (state_29426[(2)]);
var state_29426__$1 = state_29426;
var statearr_29479_29550 = state_29426__$1;
(statearr_29479_29550[(2)] = inst_29316);

(statearr_29479_29550[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (2))){
var inst_29278 = (state_29426[(13)]);
var inst_29285 = cljs.core.seq.call(null,inst_29278);
var inst_29286 = inst_29285;
var inst_29287 = null;
var inst_29288 = (0);
var inst_29289 = (0);
var state_29426__$1 = (function (){var statearr_29480 = state_29426;
(statearr_29480[(7)] = inst_29287);

(statearr_29480[(8)] = inst_29289);

(statearr_29480[(9)] = inst_29286);

(statearr_29480[(10)] = inst_29288);

return statearr_29480;
})();
var statearr_29481_29551 = state_29426__$1;
(statearr_29481_29551[(2)] = null);

(statearr_29481_29551[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (23))){
var inst_29339 = (state_29426[(19)]);
var inst_29347 = (state_29426[(23)]);
var inst_29343 = (state_29426[(24)]);
var inst_29345 = (state_29426[(26)]);
var inst_29342 = (state_29426[(25)]);
var inst_29350 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29352 = (function (){var all_files = inst_29339;
var res_SINGLEQUOTE_ = inst_29342;
var res = inst_29343;
var files_not_loaded = inst_29345;
var dependencies_that_loaded = inst_29347;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29339,inst_29347,inst_29343,inst_29345,inst_29342,inst_29350,state_val_29427,c__26509__auto__,map__29271,map__29271__$1,opts,before_jsload,on_jsload,reload_dependents,map__29272,map__29272__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29351){
var map__29482 = p__29351;
var map__29482__$1 = ((((!((map__29482 == null)))?(((((map__29482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29482):map__29482);
var request_url = cljs.core.get.call(null,map__29482__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29339,inst_29347,inst_29343,inst_29345,inst_29342,inst_29350,state_val_29427,c__26509__auto__,map__29271,map__29271__$1,opts,before_jsload,on_jsload,reload_dependents,map__29272,map__29272__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29353 = cljs.core.reverse.call(null,inst_29347);
var inst_29354 = cljs.core.map.call(null,inst_29352,inst_29353);
var inst_29355 = cljs.core.pr_str.call(null,inst_29354);
var inst_29356 = figwheel.client.utils.log.call(null,inst_29355);
var state_29426__$1 = (function (){var statearr_29484 = state_29426;
(statearr_29484[(31)] = inst_29350);

return statearr_29484;
})();
var statearr_29485_29552 = state_29426__$1;
(statearr_29485_29552[(2)] = inst_29356);

(statearr_29485_29552[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (35))){
var state_29426__$1 = state_29426;
var statearr_29486_29553 = state_29426__$1;
(statearr_29486_29553[(2)] = true);

(statearr_29486_29553[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (19))){
var inst_29329 = (state_29426[(12)]);
var inst_29335 = figwheel.client.file_reloading.expand_files.call(null,inst_29329);
var state_29426__$1 = state_29426;
var statearr_29487_29554 = state_29426__$1;
(statearr_29487_29554[(2)] = inst_29335);

(statearr_29487_29554[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (11))){
var state_29426__$1 = state_29426;
var statearr_29488_29555 = state_29426__$1;
(statearr_29488_29555[(2)] = null);

(statearr_29488_29555[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (9))){
var inst_29318 = (state_29426[(2)]);
var state_29426__$1 = state_29426;
var statearr_29489_29556 = state_29426__$1;
(statearr_29489_29556[(2)] = inst_29318);

(statearr_29489_29556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (5))){
var inst_29289 = (state_29426[(8)]);
var inst_29288 = (state_29426[(10)]);
var inst_29291 = (inst_29289 < inst_29288);
var inst_29292 = inst_29291;
var state_29426__$1 = state_29426;
if(cljs.core.truth_(inst_29292)){
var statearr_29490_29557 = state_29426__$1;
(statearr_29490_29557[(1)] = (7));

} else {
var statearr_29491_29558 = state_29426__$1;
(statearr_29491_29558[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (14))){
var inst_29299 = (state_29426[(22)]);
var inst_29308 = cljs.core.first.call(null,inst_29299);
var inst_29309 = figwheel.client.file_reloading.eval_body.call(null,inst_29308,opts);
var inst_29310 = cljs.core.next.call(null,inst_29299);
var inst_29286 = inst_29310;
var inst_29287 = null;
var inst_29288 = (0);
var inst_29289 = (0);
var state_29426__$1 = (function (){var statearr_29492 = state_29426;
(statearr_29492[(7)] = inst_29287);

(statearr_29492[(8)] = inst_29289);

(statearr_29492[(32)] = inst_29309);

(statearr_29492[(9)] = inst_29286);

(statearr_29492[(10)] = inst_29288);

return statearr_29492;
})();
var statearr_29493_29559 = state_29426__$1;
(statearr_29493_29559[(2)] = null);

(statearr_29493_29559[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (45))){
var state_29426__$1 = state_29426;
var statearr_29494_29560 = state_29426__$1;
(statearr_29494_29560[(2)] = null);

(statearr_29494_29560[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (26))){
var inst_29339 = (state_29426[(19)]);
var inst_29347 = (state_29426[(23)]);
var inst_29343 = (state_29426[(24)]);
var inst_29345 = (state_29426[(26)]);
var inst_29342 = (state_29426[(25)]);
var inst_29362 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29364 = (function (){var all_files = inst_29339;
var res_SINGLEQUOTE_ = inst_29342;
var res = inst_29343;
var files_not_loaded = inst_29345;
var dependencies_that_loaded = inst_29347;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29339,inst_29347,inst_29343,inst_29345,inst_29342,inst_29362,state_val_29427,c__26509__auto__,map__29271,map__29271__$1,opts,before_jsload,on_jsload,reload_dependents,map__29272,map__29272__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29363){
var map__29495 = p__29363;
var map__29495__$1 = ((((!((map__29495 == null)))?(((((map__29495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29495):map__29495);
var namespace = cljs.core.get.call(null,map__29495__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29495__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29339,inst_29347,inst_29343,inst_29345,inst_29342,inst_29362,state_val_29427,c__26509__auto__,map__29271,map__29271__$1,opts,before_jsload,on_jsload,reload_dependents,map__29272,map__29272__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29365 = cljs.core.map.call(null,inst_29364,inst_29343);
var inst_29366 = cljs.core.pr_str.call(null,inst_29365);
var inst_29367 = figwheel.client.utils.log.call(null,inst_29366);
var inst_29368 = (function (){var all_files = inst_29339;
var res_SINGLEQUOTE_ = inst_29342;
var res = inst_29343;
var files_not_loaded = inst_29345;
var dependencies_that_loaded = inst_29347;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29339,inst_29347,inst_29343,inst_29345,inst_29342,inst_29362,inst_29364,inst_29365,inst_29366,inst_29367,state_val_29427,c__26509__auto__,map__29271,map__29271__$1,opts,before_jsload,on_jsload,reload_dependents,map__29272,map__29272__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29339,inst_29347,inst_29343,inst_29345,inst_29342,inst_29362,inst_29364,inst_29365,inst_29366,inst_29367,state_val_29427,c__26509__auto__,map__29271,map__29271__$1,opts,before_jsload,on_jsload,reload_dependents,map__29272,map__29272__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29369 = setTimeout(inst_29368,(10));
var state_29426__$1 = (function (){var statearr_29497 = state_29426;
(statearr_29497[(33)] = inst_29362);

(statearr_29497[(34)] = inst_29367);

return statearr_29497;
})();
var statearr_29498_29561 = state_29426__$1;
(statearr_29498_29561[(2)] = inst_29369);

(statearr_29498_29561[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (16))){
var state_29426__$1 = state_29426;
var statearr_29499_29562 = state_29426__$1;
(statearr_29499_29562[(2)] = reload_dependents);

(statearr_29499_29562[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (38))){
var inst_29379 = (state_29426[(16)]);
var inst_29397 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29379);
var state_29426__$1 = state_29426;
var statearr_29500_29563 = state_29426__$1;
(statearr_29500_29563[(2)] = inst_29397);

(statearr_29500_29563[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (30))){
var state_29426__$1 = state_29426;
var statearr_29501_29564 = state_29426__$1;
(statearr_29501_29564[(2)] = null);

(statearr_29501_29564[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (10))){
var inst_29299 = (state_29426[(22)]);
var inst_29301 = cljs.core.chunked_seq_QMARK_.call(null,inst_29299);
var state_29426__$1 = state_29426;
if(inst_29301){
var statearr_29502_29565 = state_29426__$1;
(statearr_29502_29565[(1)] = (13));

} else {
var statearr_29503_29566 = state_29426__$1;
(statearr_29503_29566[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (18))){
var inst_29333 = (state_29426[(2)]);
var state_29426__$1 = state_29426;
if(cljs.core.truth_(inst_29333)){
var statearr_29504_29567 = state_29426__$1;
(statearr_29504_29567[(1)] = (19));

} else {
var statearr_29505_29568 = state_29426__$1;
(statearr_29505_29568[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (42))){
var state_29426__$1 = state_29426;
var statearr_29506_29569 = state_29426__$1;
(statearr_29506_29569[(2)] = null);

(statearr_29506_29569[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (37))){
var inst_29392 = (state_29426[(2)]);
var state_29426__$1 = state_29426;
var statearr_29507_29570 = state_29426__$1;
(statearr_29507_29570[(2)] = inst_29392);

(statearr_29507_29570[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (8))){
var inst_29299 = (state_29426[(22)]);
var inst_29286 = (state_29426[(9)]);
var inst_29299__$1 = cljs.core.seq.call(null,inst_29286);
var state_29426__$1 = (function (){var statearr_29508 = state_29426;
(statearr_29508[(22)] = inst_29299__$1);

return statearr_29508;
})();
if(inst_29299__$1){
var statearr_29509_29571 = state_29426__$1;
(statearr_29509_29571[(1)] = (10));

} else {
var statearr_29510_29572 = state_29426__$1;
(statearr_29510_29572[(1)] = (11));

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
});})(c__26509__auto__,map__29271,map__29271__$1,opts,before_jsload,on_jsload,reload_dependents,map__29272,map__29272__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26419__auto__,c__26509__auto__,map__29271,map__29271__$1,opts,before_jsload,on_jsload,reload_dependents,map__29272,map__29272__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26420__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26420__auto____0 = (function (){
var statearr_29511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29511[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26420__auto__);

(statearr_29511[(1)] = (1));

return statearr_29511;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26420__auto____1 = (function (state_29426){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_29426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e29512){if((e29512 instanceof Object)){
var ex__26423__auto__ = e29512;
var statearr_29513_29573 = state_29426;
(statearr_29513_29573[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29574 = state_29426;
state_29426 = G__29574;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26420__auto__ = function(state_29426){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26420__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26420__auto____1.call(this,state_29426);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26420__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26420__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto__,map__29271,map__29271__$1,opts,before_jsload,on_jsload,reload_dependents,map__29272,map__29272__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26511__auto__ = (function (){var statearr_29514 = f__26510__auto__.call(null);
(statearr_29514[(6)] = c__26509__auto__);

return statearr_29514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto__,map__29271,map__29271__$1,opts,before_jsload,on_jsload,reload_dependents,map__29272,map__29272__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26509__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29577,link){
var map__29578 = p__29577;
var map__29578__$1 = ((((!((map__29578 == null)))?(((((map__29578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29578):map__29578);
var file = cljs.core.get.call(null,map__29578__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__29578,map__29578__$1,file){
return (function (p1__29575_SHARP_,p2__29576_SHARP_){
if(cljs.core._EQ_.call(null,p1__29575_SHARP_,p2__29576_SHARP_)){
return p1__29575_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__29578,map__29578__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29581){
var map__29582 = p__29581;
var map__29582__$1 = ((((!((map__29582 == null)))?(((((map__29582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29582):map__29582);
var match_length = cljs.core.get.call(null,map__29582__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29582__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29580_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29580_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29584_SHARP_,p2__29585_SHARP_){
return cljs.core.assoc.call(null,p1__29584_SHARP_,cljs.core.get.call(null,p2__29585_SHARP_,key),p2__29585_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29586 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29586);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29586);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29587,p__29588){
var map__29589 = p__29587;
var map__29589__$1 = ((((!((map__29589 == null)))?(((((map__29589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29589):map__29589);
var on_cssload = cljs.core.get.call(null,map__29589__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29590 = p__29588;
var map__29590__$1 = ((((!((map__29590 == null)))?(((((map__29590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29590):map__29590);
var files_msg = map__29590__$1;
var files = cljs.core.get.call(null,map__29590__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1522854615890
