// Compiled by ClojureScript 1.10.238 {}
goog.provide('lifegame_cljs.core');
goog.require('cljs.core');
goog.require('reagent.core');
lifegame_cljs.core.cell_size = (50);
lifegame_cljs.core.get_default_state = (function lifegame_cljs$core$get_default_state(p1__29230_SHARP_){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,(p1__29230_SHARP_ * p1__29230_SHARP_),false));
});
lifegame_cljs.core.game_state = reagent.core.atom.call(null,new cljs.core.Keyword(null,"setting","setting",928308078));
lifegame_cljs.core.field_size = reagent.core.atom.call(null,(5));
lifegame_cljs.core.history = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
lifegame_cljs.core.config_state = reagent.core.atom.call(null,lifegame_cljs.core.get_default_state.call(null,cljs.core.deref.call(null,lifegame_cljs.core.field_size)));
lifegame_cljs.core.change_state = (function lifegame_cljs$core$change_state(index){
return cljs.core.swap_BANG_.call(null,lifegame_cljs.core.config_state,cljs.core.assoc,index,cljs.core.not.call(null,cljs.core.nth.call(null,cljs.core.deref.call(null,lifegame_cljs.core.config_state),index)));
});
lifegame_cljs.core.get_neighbor_pos = (function lifegame_cljs$core$get_neighbor_pos(index,width){
var x = cljs.core.mod.call(null,index,width);
var y = cljs.core.quot.call(null,index,width);
var normlz_pos = ((function (x,y){
return (function (p1__29231_SHARP_){
if((p1__29231_SHARP_ < (0))){
return (p1__29231_SHARP_ + width);
} else {
if((p1__29231_SHARP_ > (width - (1)))){
return (p1__29231_SHARP_ - width);
} else {
return p1__29231_SHARP_;

}
}
});})(x,y))
;
var calc_pos = ((function (x,y,normlz_pos){
return (function (p1__29233_SHARP_,p2__29232_SHARP_){
return ((width * p2__29232_SHARP_) + p1__29233_SHARP_);
});})(x,y,normlz_pos))
;
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [calc_pos.call(null,normlz_pos.call(null,(x - (1))),normlz_pos.call(null,(y - (1)))),calc_pos.call(null,normlz_pos.call(null,x),normlz_pos.call(null,(y - (1)))),calc_pos.call(null,normlz_pos.call(null,(x + (1))),normlz_pos.call(null,(y - (1)))),calc_pos.call(null,normlz_pos.call(null,(x - (1))),normlz_pos.call(null,y)),calc_pos.call(null,normlz_pos.call(null,(x + (1))),normlz_pos.call(null,y)),calc_pos.call(null,normlz_pos.call(null,(x - (1))),normlz_pos.call(null,(y + (1)))),calc_pos.call(null,normlz_pos.call(null,x),normlz_pos.call(null,(y + (1)))),calc_pos.call(null,normlz_pos.call(null,(x + (1))),normlz_pos.call(null,(y + (1))))], null);
});
lifegame_cljs.core.calc_field_state = (function lifegame_cljs$core$calc_field_state(width,field_state){
return cljs.core.map_indexed.call(null,(function (index,neighbor_count){
if(cljs.core._EQ_.call(null,neighbor_count,(3))){
return true;
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core._EQ_.call(null,neighbor_count,(2));
if(and__3911__auto__){
return cljs.core.nth.call(null,field_state,index);
} else {
return and__3911__auto__;
}
})())){
return true;
} else {
return false;

}
}
}),cljs.core.map_indexed.call(null,(function (index,state){
var neighbor_pos = lifegame_cljs.core.get_neighbor_pos.call(null,index,width);
return cljs.core.count.call(null,cljs.core.filter.call(null,((function (neighbor_pos){
return (function (v){
return v;
});})(neighbor_pos))
,cljs.core.map.call(null,((function (neighbor_pos){
return (function (p1__29234_SHARP_){
return cljs.core.nth.call(null,field_state,p1__29234_SHARP_);
});})(neighbor_pos))
,neighbor_pos)));
}),field_state));
});
lifegame_cljs.core.game_tick = (function lifegame_cljs$core$game_tick(){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,lifegame_cljs.core.game_state),new cljs.core.Keyword(null,"gaming","gaming",-1681432337))){
console.log("tick");

cljs.core.swap_BANG_.call(null,lifegame_cljs.core.history,cljs.core.conj,lifegame_cljs.core.calc_field_state.call(null,cljs.core.deref.call(null,lifegame_cljs.core.field_size),cljs.core.peek.call(null,cljs.core.deref.call(null,lifegame_cljs.core.history))));

return setTimeout(lifegame_cljs.core.game_tick,(1000));
} else {
return null;
}
});
lifegame_cljs.core.play_game = (function lifegame_cljs$core$play_game(){
console.log("start game");

cljs.core.swap_BANG_.call(null,lifegame_cljs.core.game_state,(function (){
return new cljs.core.Keyword(null,"gaming","gaming",-1681432337);
}));

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,lifegame_cljs.core.history)),(0))){
cljs.core.swap_BANG_.call(null,lifegame_cljs.core.history,cljs.core.conj,cljs.core.deref.call(null,lifegame_cljs.core.config_state));
} else {
}

return lifegame_cljs.core.game_tick.call(null);
});
lifegame_cljs.core.stop_game = (function lifegame_cljs$core$stop_game(){
console.log("stop");

return cljs.core.swap_BANG_.call(null,lifegame_cljs.core.game_state,(function (){
return new cljs.core.Keyword(null,"stop","stop",-2140911342);
}));
});
lifegame_cljs.core.reset_game = (function lifegame_cljs$core$reset_game(){
console.log("reset");

cljs.core.swap_BANG_.call(null,lifegame_cljs.core.game_state,(function (){
return new cljs.core.Keyword(null,"setting","setting",928308078);
}));

cljs.core.swap_BANG_.call(null,lifegame_cljs.core.history,(function (){
return cljs.core.PersistentVector.EMPTY;
}));

return cljs.core.swap_BANG_.call(null,lifegame_cljs.core.config_state,(function (){
return lifegame_cljs.core.get_default_state.call(null,cljs.core.deref.call(null,lifegame_cljs.core.field_size));
}));
});
lifegame_cljs.core.set_field_size = (function lifegame_cljs$core$set_field_size(size){
cljs.core.swap_BANG_.call(null,lifegame_cljs.core.field_size,(function (){
return size;
}));

return cljs.core.swap_BANG_.call(null,lifegame_cljs.core.config_state,(function (){
return lifegame_cljs.core.get_default_state.call(null,size);
}));
});
lifegame_cljs.core.render_field = (function lifegame_cljs$core$render_field(width,field_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"wrap",new cljs.core.Keyword(null,"width","width",-384071477),(lifegame_cljs.core.cell_size * width),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null)], null),cljs.core.map_indexed.call(null,(function (index,cell_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),lifegame_cljs.core.cell_size,new cljs.core.Keyword(null,"height","height",1025178622),lifegame_cljs.core.cell_size,new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(cell_state)?"white":"black")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return lifegame_cljs.core.change_state.call(null,index);
})], null),cell_state], null);
}),field_state)], null);
});
lifegame_cljs.core.home_page = (function lifegame_cljs$core$home_page(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"game of life"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"We have ",cljs.core.count.call(null,cljs.core.deref.call(null,lifegame_cljs.core.history))," steps"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(3),new cljs.core.Keyword(null,"max","max",61366548),(50),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,lifegame_cljs.core.field_size),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__29235_SHARP_){
return lifegame_cljs.core.set_field_size.call(null,(p1__29235_SHARP_.target.value | (0)));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,lifegame_cljs.core.game_state),new cljs.core.Keyword(null,"setting","setting",928308078))], null)], null),cljs.core.deref.call(null,lifegame_cljs.core.field_size)], null),lifegame_cljs.core.render_field.call(null,cljs.core.deref.call(null,lifegame_cljs.core.field_size),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,lifegame_cljs.core.game_state),new cljs.core.Keyword(null,"setting","setting",928308078)))?cljs.core.deref.call(null,lifegame_cljs.core.config_state):cljs.core.peek.call(null,cljs.core.deref.call(null,lifegame_cljs.core.history)))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return lifegame_cljs.core.reset_game.call(null);
})], null),"Reset"], null),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,lifegame_cljs.core.game_state),new cljs.core.Keyword(null,"gaming","gaming",-1681432337)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return lifegame_cljs.core.stop_game.call(null);
})], null),"Stop"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return lifegame_cljs.core.play_game.call(null);
})], null),"Play"], null))], null);
});
lifegame_cljs.core.mount_root = (function lifegame_cljs$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lifegame_cljs.core.home_page], null),document.getElementById("app"));
});
lifegame_cljs.core.init_BANG_ = (function lifegame_cljs$core$init_BANG_(){
return lifegame_cljs.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1522892699508
