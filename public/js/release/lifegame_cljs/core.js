// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('lifegame_cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
lifegame_cljs.core.cell_size = (50);
lifegame_cljs.core.get_default_state = (function lifegame_cljs$core$get_default_state(p1__5566_SHARP_){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((p1__5566_SHARP_ * p1__5566_SHARP_),false));
});
lifegame_cljs.core.game_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$setting);
lifegame_cljs.core.field_size = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((5));
lifegame_cljs.core.history = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
lifegame_cljs.core.config_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(lifegame_cljs.core.get_default_state(cljs.core.deref(lifegame_cljs.core.field_size)));
lifegame_cljs.core.change_state = (function lifegame_cljs$core$change_state(index){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lifegame_cljs.core.config_state,cljs.core.assoc,index,cljs.core.not(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lifegame_cljs.core.config_state),index)));
});
lifegame_cljs.core.get_neighbor_pos = (function lifegame_cljs$core$get_neighbor_pos(index,width){
var x = cljs.core.mod(index,width);
var y = cljs.core.quot(index,width);
var normlz_pos = ((function (x,y){
return (function (p1__5567_SHARP_){
if((p1__5567_SHARP_ < (0))){
return (p1__5567_SHARP_ + width);
} else {
if((p1__5567_SHARP_ > (width - (1)))){
return (p1__5567_SHARP_ - width);
} else {
return p1__5567_SHARP_;

}
}
});})(x,y))
;
var calc_pos = ((function (x,y,normlz_pos){
return (function (p1__5569_SHARP_,p2__5568_SHARP_){
return ((width * p2__5568_SHARP_) + p1__5569_SHARP_);
});})(x,y,normlz_pos))
;
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [calc_pos(normlz_pos((x - (1))),normlz_pos((y - (1)))),calc_pos(normlz_pos(x),normlz_pos((y - (1)))),calc_pos(normlz_pos((x + (1))),normlz_pos((y - (1)))),calc_pos(normlz_pos((x - (1))),normlz_pos(y)),calc_pos(normlz_pos((x + (1))),normlz_pos(y)),calc_pos(normlz_pos((x - (1))),normlz_pos((y + (1)))),calc_pos(normlz_pos(x),normlz_pos((y + (1)))),calc_pos(normlz_pos((x + (1))),normlz_pos((y + (1))))], null);
});
lifegame_cljs.core.calc_field_state = (function lifegame_cljs$core$calc_field_state(width,field_state){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,neighbor_count){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(neighbor_count,(3))){
return true;
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(neighbor_count,(2));
if(and__3911__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(field_state,index);
} else {
return and__3911__auto__;
}
})())){
return true;
} else {
return false;

}
}
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,state){
var neighbor_pos = lifegame_cljs.core.get_neighbor_pos(index,width);
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (neighbor_pos){
return (function (v){
return v;
});})(neighbor_pos))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neighbor_pos){
return (function (p1__5570_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(field_state,p1__5570_SHARP_);
});})(neighbor_pos))
,neighbor_pos)));
}),field_state));
});
lifegame_cljs.core.game_tick = (function lifegame_cljs$core$game_tick(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lifegame_cljs.core.game_state),cljs.core.cst$kw$gaming)){
console.log("tick");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lifegame_cljs.core.history,cljs.core.conj,lifegame_cljs.core.calc_field_state(cljs.core.deref(lifegame_cljs.core.field_size),cljs.core.peek(cljs.core.deref(lifegame_cljs.core.history))));

return setTimeout(lifegame_cljs.core.game_tick,(1000));
} else {
return null;
}
});
lifegame_cljs.core.play_game = (function lifegame_cljs$core$play_game(){
console.log("start game");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lifegame_cljs.core.game_state,(function (){
return cljs.core.cst$kw$gaming;
}));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(lifegame_cljs.core.history)),(0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lifegame_cljs.core.history,cljs.core.conj,cljs.core.deref(lifegame_cljs.core.config_state));
} else {
}

return lifegame_cljs.core.game_tick();
});
lifegame_cljs.core.stop_game = (function lifegame_cljs$core$stop_game(){
console.log("stop");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lifegame_cljs.core.game_state,(function (){
return cljs.core.cst$kw$stop;
}));
});
lifegame_cljs.core.reset_game = (function lifegame_cljs$core$reset_game(){
console.log("reset");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lifegame_cljs.core.game_state,(function (){
return cljs.core.cst$kw$setting;
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lifegame_cljs.core.history,(function (){
return cljs.core.PersistentVector.EMPTY;
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lifegame_cljs.core.config_state,(function (){
return lifegame_cljs.core.get_default_state(cljs.core.deref(lifegame_cljs.core.field_size));
}));
});
lifegame_cljs.core.set_field_size = (function lifegame_cljs$core$set_field_size(size){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lifegame_cljs.core.field_size,(function (){
return size;
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lifegame_cljs.core.config_state,(function (){
return lifegame_cljs.core.get_default_state(size);
}));
});
lifegame_cljs.core.render_field = (function lifegame_cljs$core$render_field(width,field_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_wrap,"wrap",cljs.core.cst$kw$width,(lifegame_cljs.core.cell_size * width),cljs.core.cst$kw$border,"1px solid black"], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,cell_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,lifegame_cljs.core.cell_size,cljs.core.cst$kw$height,lifegame_cljs.core.cell_size,cljs.core.cst$kw$background_DASH_color,(cljs.core.truth_(cell_state)?"white":"black")], null),cljs.core.cst$kw$on_DASH_click,(function (){
return lifegame_cljs.core.change_state(index);
})], null),cell_state], null);
}),field_state)], null);
});
lifegame_cljs.core.home_page = (function lifegame_cljs$core$home_page(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"game of life"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"We have ",cljs.core.count(cljs.core.deref(lifegame_cljs.core.history))," steps"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$min,(3),cljs.core.cst$kw$max,(50),cljs.core.cst$kw$value,cljs.core.deref(lifegame_cljs.core.field_size),cljs.core.cst$kw$on_DASH_change,(function (p1__5571_SHARP_){
return lifegame_cljs.core.set_field_size((p1__5571_SHARP_.target.value | (0)));
}),cljs.core.cst$kw$disabled,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lifegame_cljs.core.game_state),cljs.core.cst$kw$setting)], null)], null),cljs.core.deref(lifegame_cljs.core.field_size)], null),lifegame_cljs.core.render_field(cljs.core.deref(lifegame_cljs.core.field_size),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lifegame_cljs.core.game_state),cljs.core.cst$kw$setting))?cljs.core.deref(lifegame_cljs.core.config_state):cljs.core.peek(cljs.core.deref(lifegame_cljs.core.history)))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return lifegame_cljs.core.reset_game();
})], null),"Reset"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(lifegame_cljs.core.game_state),cljs.core.cst$kw$gaming))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return lifegame_cljs.core.stop_game();
})], null),"Stop"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return lifegame_cljs.core.play_game();
})], null),"Play"], null))], null);
});
lifegame_cljs.core.mount_root = (function lifegame_cljs$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lifegame_cljs.core.home_page], null),document.getElementById("app"));
});
lifegame_cljs.core.init_BANG_ = (function lifegame_cljs$core$init_BANG_(){
return lifegame_cljs.core.mount_root();
});
