// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26569 = arguments.length;
switch (G__26569) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async26570 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26570 = (function (f,blockable,meta26571){
this.f = f;
this.blockable = blockable;
this.meta26571 = meta26571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26572,meta26571__$1){
var self__ = this;
var _26572__$1 = this;
return (new cljs.core.async.t_cljs$core$async26570(self__.f,self__.blockable,meta26571__$1));
});

cljs.core.async.t_cljs$core$async26570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26572){
var self__ = this;
var _26572__$1 = this;
return self__.meta26571;
});

cljs.core.async.t_cljs$core$async26570.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26570.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26570.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26570.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26571","meta26571",-197481522,null)], null);
});

cljs.core.async.t_cljs$core$async26570.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26570";

cljs.core.async.t_cljs$core$async26570.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26570");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26570.
 */
cljs.core.async.__GT_t_cljs$core$async26570 = (function cljs$core$async$__GT_t_cljs$core$async26570(f__$1,blockable__$1,meta26571){
return (new cljs.core.async.t_cljs$core$async26570(f__$1,blockable__$1,meta26571));
});

}

return (new cljs.core.async.t_cljs$core$async26570(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__26576 = arguments.length;
switch (G__26576) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__26579 = arguments.length;
switch (G__26579) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__26582 = arguments.length;
switch (G__26582) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26584 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26584);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26584,ret){
return (function (){
return fn1.call(null,val_26584);
});})(val_26584,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__26586 = arguments.length;
switch (G__26586) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___26588 = n;
var x_26589 = (0);
while(true){
if((x_26589 < n__4376__auto___26588)){
(a[x_26589] = (0));

var G__26590 = (x_26589 + (1));
x_26589 = G__26590;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26591 = (i + (1));
i = G__26591;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26592 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26592 = (function (flag,meta26593){
this.flag = flag;
this.meta26593 = meta26593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26594,meta26593__$1){
var self__ = this;
var _26594__$1 = this;
return (new cljs.core.async.t_cljs$core$async26592(self__.flag,meta26593__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26592.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26594){
var self__ = this;
var _26594__$1 = this;
return self__.meta26593;
});})(flag))
;

cljs.core.async.t_cljs$core$async26592.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26592.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26592.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26592.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26592.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26593","meta26593",-1570090042,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26592.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26592.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26592";

cljs.core.async.t_cljs$core$async26592.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26592");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26592.
 */
cljs.core.async.__GT_t_cljs$core$async26592 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26592(flag__$1,meta26593){
return (new cljs.core.async.t_cljs$core$async26592(flag__$1,meta26593));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26592(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26595 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26595 = (function (flag,cb,meta26596){
this.flag = flag;
this.cb = cb;
this.meta26596 = meta26596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26597,meta26596__$1){
var self__ = this;
var _26597__$1 = this;
return (new cljs.core.async.t_cljs$core$async26595(self__.flag,self__.cb,meta26596__$1));
});

cljs.core.async.t_cljs$core$async26595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26597){
var self__ = this;
var _26597__$1 = this;
return self__.meta26596;
});

cljs.core.async.t_cljs$core$async26595.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26595.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26595.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26595.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26596","meta26596",1692531014,null)], null);
});

cljs.core.async.t_cljs$core$async26595.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26595";

cljs.core.async.t_cljs$core$async26595.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26595");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26595.
 */
cljs.core.async.__GT_t_cljs$core$async26595 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26595(flag__$1,cb__$1,meta26596){
return (new cljs.core.async.t_cljs$core$async26595(flag__$1,cb__$1,meta26596));
});

}

return (new cljs.core.async.t_cljs$core$async26595(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26598_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26598_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26599_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26599_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26600 = (i + (1));
i = G__26600;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26606 = arguments.length;
var i__4500__auto___26607 = (0);
while(true){
if((i__4500__auto___26607 < len__4499__auto___26606)){
args__4502__auto__.push((arguments[i__4500__auto___26607]));

var G__26608 = (i__4500__auto___26607 + (1));
i__4500__auto___26607 = G__26608;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26603){
var map__26604 = p__26603;
var map__26604__$1 = ((((!((map__26604 == null)))?(((((map__26604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26604):map__26604);
var opts = map__26604__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26601){
var G__26602 = cljs.core.first.call(null,seq26601);
var seq26601__$1 = cljs.core.next.call(null,seq26601);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26602,seq26601__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__26610 = arguments.length;
switch (G__26610) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26509__auto___26656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto___26656){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto___26656){
return (function (state_26634){
var state_val_26635 = (state_26634[(1)]);
if((state_val_26635 === (7))){
var inst_26630 = (state_26634[(2)]);
var state_26634__$1 = state_26634;
var statearr_26636_26657 = state_26634__$1;
(statearr_26636_26657[(2)] = inst_26630);

(statearr_26636_26657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26635 === (1))){
var state_26634__$1 = state_26634;
var statearr_26637_26658 = state_26634__$1;
(statearr_26637_26658[(2)] = null);

(statearr_26637_26658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26635 === (4))){
var inst_26613 = (state_26634[(7)]);
var inst_26613__$1 = (state_26634[(2)]);
var inst_26614 = (inst_26613__$1 == null);
var state_26634__$1 = (function (){var statearr_26638 = state_26634;
(statearr_26638[(7)] = inst_26613__$1);

return statearr_26638;
})();
if(cljs.core.truth_(inst_26614)){
var statearr_26639_26659 = state_26634__$1;
(statearr_26639_26659[(1)] = (5));

} else {
var statearr_26640_26660 = state_26634__$1;
(statearr_26640_26660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26635 === (13))){
var state_26634__$1 = state_26634;
var statearr_26641_26661 = state_26634__$1;
(statearr_26641_26661[(2)] = null);

(statearr_26641_26661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26635 === (6))){
var inst_26613 = (state_26634[(7)]);
var state_26634__$1 = state_26634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26634__$1,(11),to,inst_26613);
} else {
if((state_val_26635 === (3))){
var inst_26632 = (state_26634[(2)]);
var state_26634__$1 = state_26634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26634__$1,inst_26632);
} else {
if((state_val_26635 === (12))){
var state_26634__$1 = state_26634;
var statearr_26642_26662 = state_26634__$1;
(statearr_26642_26662[(2)] = null);

(statearr_26642_26662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26635 === (2))){
var state_26634__$1 = state_26634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26634__$1,(4),from);
} else {
if((state_val_26635 === (11))){
var inst_26623 = (state_26634[(2)]);
var state_26634__$1 = state_26634;
if(cljs.core.truth_(inst_26623)){
var statearr_26643_26663 = state_26634__$1;
(statearr_26643_26663[(1)] = (12));

} else {
var statearr_26644_26664 = state_26634__$1;
(statearr_26644_26664[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26635 === (9))){
var state_26634__$1 = state_26634;
var statearr_26645_26665 = state_26634__$1;
(statearr_26645_26665[(2)] = null);

(statearr_26645_26665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26635 === (5))){
var state_26634__$1 = state_26634;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26646_26666 = state_26634__$1;
(statearr_26646_26666[(1)] = (8));

} else {
var statearr_26647_26667 = state_26634__$1;
(statearr_26647_26667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26635 === (14))){
var inst_26628 = (state_26634[(2)]);
var state_26634__$1 = state_26634;
var statearr_26648_26668 = state_26634__$1;
(statearr_26648_26668[(2)] = inst_26628);

(statearr_26648_26668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26635 === (10))){
var inst_26620 = (state_26634[(2)]);
var state_26634__$1 = state_26634;
var statearr_26649_26669 = state_26634__$1;
(statearr_26649_26669[(2)] = inst_26620);

(statearr_26649_26669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26635 === (8))){
var inst_26617 = cljs.core.async.close_BANG_.call(null,to);
var state_26634__$1 = state_26634;
var statearr_26650_26670 = state_26634__$1;
(statearr_26650_26670[(2)] = inst_26617);

(statearr_26650_26670[(1)] = (10));


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
});})(c__26509__auto___26656))
;
return ((function (switch__26419__auto__,c__26509__auto___26656){
return (function() {
var cljs$core$async$state_machine__26420__auto__ = null;
var cljs$core$async$state_machine__26420__auto____0 = (function (){
var statearr_26651 = [null,null,null,null,null,null,null,null];
(statearr_26651[(0)] = cljs$core$async$state_machine__26420__auto__);

(statearr_26651[(1)] = (1));

return statearr_26651;
});
var cljs$core$async$state_machine__26420__auto____1 = (function (state_26634){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_26634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e26652){if((e26652 instanceof Object)){
var ex__26423__auto__ = e26652;
var statearr_26653_26671 = state_26634;
(statearr_26653_26671[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26672 = state_26634;
state_26634 = G__26672;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
cljs$core$async$state_machine__26420__auto__ = function(state_26634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26420__auto____1.call(this,state_26634);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26420__auto____0;
cljs$core$async$state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26420__auto____1;
return cljs$core$async$state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto___26656))
})();
var state__26511__auto__ = (function (){var statearr_26654 = f__26510__auto__.call(null);
(statearr_26654[(6)] = c__26509__auto___26656);

return statearr_26654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto___26656))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26673){
var vec__26674 = p__26673;
var v = cljs.core.nth.call(null,vec__26674,(0),null);
var p = cljs.core.nth.call(null,vec__26674,(1),null);
var job = vec__26674;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26509__auto___26845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto___26845,res,vec__26674,v,p,job,jobs,results){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto___26845,res,vec__26674,v,p,job,jobs,results){
return (function (state_26681){
var state_val_26682 = (state_26681[(1)]);
if((state_val_26682 === (1))){
var state_26681__$1 = state_26681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26681__$1,(2),res,v);
} else {
if((state_val_26682 === (2))){
var inst_26678 = (state_26681[(2)]);
var inst_26679 = cljs.core.async.close_BANG_.call(null,res);
var state_26681__$1 = (function (){var statearr_26683 = state_26681;
(statearr_26683[(7)] = inst_26678);

return statearr_26683;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26681__$1,inst_26679);
} else {
return null;
}
}
});})(c__26509__auto___26845,res,vec__26674,v,p,job,jobs,results))
;
return ((function (switch__26419__auto__,c__26509__auto___26845,res,vec__26674,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____0 = (function (){
var statearr_26684 = [null,null,null,null,null,null,null,null];
(statearr_26684[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__);

(statearr_26684[(1)] = (1));

return statearr_26684;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____1 = (function (state_26681){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_26681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e26685){if((e26685 instanceof Object)){
var ex__26423__auto__ = e26685;
var statearr_26686_26846 = state_26681;
(statearr_26686_26846[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26847 = state_26681;
state_26681 = G__26847;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__ = function(state_26681){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____1.call(this,state_26681);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto___26845,res,vec__26674,v,p,job,jobs,results))
})();
var state__26511__auto__ = (function (){var statearr_26687 = f__26510__auto__.call(null);
(statearr_26687[(6)] = c__26509__auto___26845);

return statearr_26687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto___26845,res,vec__26674,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26688){
var vec__26689 = p__26688;
var v = cljs.core.nth.call(null,vec__26689,(0),null);
var p = cljs.core.nth.call(null,vec__26689,(1),null);
var job = vec__26689;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___26848 = n;
var __26849 = (0);
while(true){
if((__26849 < n__4376__auto___26848)){
var G__26692_26850 = type;
var G__26692_26851__$1 = (((G__26692_26850 instanceof cljs.core.Keyword))?G__26692_26850.fqn:null);
switch (G__26692_26851__$1) {
case "compute":
var c__26509__auto___26853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26849,c__26509__auto___26853,G__26692_26850,G__26692_26851__$1,n__4376__auto___26848,jobs,results,process,async){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (__26849,c__26509__auto___26853,G__26692_26850,G__26692_26851__$1,n__4376__auto___26848,jobs,results,process,async){
return (function (state_26705){
var state_val_26706 = (state_26705[(1)]);
if((state_val_26706 === (1))){
var state_26705__$1 = state_26705;
var statearr_26707_26854 = state_26705__$1;
(statearr_26707_26854[(2)] = null);

(statearr_26707_26854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26706 === (2))){
var state_26705__$1 = state_26705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26705__$1,(4),jobs);
} else {
if((state_val_26706 === (3))){
var inst_26703 = (state_26705[(2)]);
var state_26705__$1 = state_26705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26705__$1,inst_26703);
} else {
if((state_val_26706 === (4))){
var inst_26695 = (state_26705[(2)]);
var inst_26696 = process.call(null,inst_26695);
var state_26705__$1 = state_26705;
if(cljs.core.truth_(inst_26696)){
var statearr_26708_26855 = state_26705__$1;
(statearr_26708_26855[(1)] = (5));

} else {
var statearr_26709_26856 = state_26705__$1;
(statearr_26709_26856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26706 === (5))){
var state_26705__$1 = state_26705;
var statearr_26710_26857 = state_26705__$1;
(statearr_26710_26857[(2)] = null);

(statearr_26710_26857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26706 === (6))){
var state_26705__$1 = state_26705;
var statearr_26711_26858 = state_26705__$1;
(statearr_26711_26858[(2)] = null);

(statearr_26711_26858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26706 === (7))){
var inst_26701 = (state_26705[(2)]);
var state_26705__$1 = state_26705;
var statearr_26712_26859 = state_26705__$1;
(statearr_26712_26859[(2)] = inst_26701);

(statearr_26712_26859[(1)] = (3));


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
});})(__26849,c__26509__auto___26853,G__26692_26850,G__26692_26851__$1,n__4376__auto___26848,jobs,results,process,async))
;
return ((function (__26849,switch__26419__auto__,c__26509__auto___26853,G__26692_26850,G__26692_26851__$1,n__4376__auto___26848,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____0 = (function (){
var statearr_26713 = [null,null,null,null,null,null,null];
(statearr_26713[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__);

(statearr_26713[(1)] = (1));

return statearr_26713;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____1 = (function (state_26705){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_26705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e26714){if((e26714 instanceof Object)){
var ex__26423__auto__ = e26714;
var statearr_26715_26860 = state_26705;
(statearr_26715_26860[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26861 = state_26705;
state_26705 = G__26861;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__ = function(state_26705){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____1.call(this,state_26705);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__;
})()
;})(__26849,switch__26419__auto__,c__26509__auto___26853,G__26692_26850,G__26692_26851__$1,n__4376__auto___26848,jobs,results,process,async))
})();
var state__26511__auto__ = (function (){var statearr_26716 = f__26510__auto__.call(null);
(statearr_26716[(6)] = c__26509__auto___26853);

return statearr_26716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(__26849,c__26509__auto___26853,G__26692_26850,G__26692_26851__$1,n__4376__auto___26848,jobs,results,process,async))
);


break;
case "async":
var c__26509__auto___26862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26849,c__26509__auto___26862,G__26692_26850,G__26692_26851__$1,n__4376__auto___26848,jobs,results,process,async){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (__26849,c__26509__auto___26862,G__26692_26850,G__26692_26851__$1,n__4376__auto___26848,jobs,results,process,async){
return (function (state_26729){
var state_val_26730 = (state_26729[(1)]);
if((state_val_26730 === (1))){
var state_26729__$1 = state_26729;
var statearr_26731_26863 = state_26729__$1;
(statearr_26731_26863[(2)] = null);

(statearr_26731_26863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (2))){
var state_26729__$1 = state_26729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26729__$1,(4),jobs);
} else {
if((state_val_26730 === (3))){
var inst_26727 = (state_26729[(2)]);
var state_26729__$1 = state_26729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26729__$1,inst_26727);
} else {
if((state_val_26730 === (4))){
var inst_26719 = (state_26729[(2)]);
var inst_26720 = async.call(null,inst_26719);
var state_26729__$1 = state_26729;
if(cljs.core.truth_(inst_26720)){
var statearr_26732_26864 = state_26729__$1;
(statearr_26732_26864[(1)] = (5));

} else {
var statearr_26733_26865 = state_26729__$1;
(statearr_26733_26865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (5))){
var state_26729__$1 = state_26729;
var statearr_26734_26866 = state_26729__$1;
(statearr_26734_26866[(2)] = null);

(statearr_26734_26866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (6))){
var state_26729__$1 = state_26729;
var statearr_26735_26867 = state_26729__$1;
(statearr_26735_26867[(2)] = null);

(statearr_26735_26867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26730 === (7))){
var inst_26725 = (state_26729[(2)]);
var state_26729__$1 = state_26729;
var statearr_26736_26868 = state_26729__$1;
(statearr_26736_26868[(2)] = inst_26725);

(statearr_26736_26868[(1)] = (3));


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
});})(__26849,c__26509__auto___26862,G__26692_26850,G__26692_26851__$1,n__4376__auto___26848,jobs,results,process,async))
;
return ((function (__26849,switch__26419__auto__,c__26509__auto___26862,G__26692_26850,G__26692_26851__$1,n__4376__auto___26848,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____0 = (function (){
var statearr_26737 = [null,null,null,null,null,null,null];
(statearr_26737[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__);

(statearr_26737[(1)] = (1));

return statearr_26737;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____1 = (function (state_26729){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_26729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e26738){if((e26738 instanceof Object)){
var ex__26423__auto__ = e26738;
var statearr_26739_26869 = state_26729;
(statearr_26739_26869[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26870 = state_26729;
state_26729 = G__26870;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__ = function(state_26729){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____1.call(this,state_26729);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__;
})()
;})(__26849,switch__26419__auto__,c__26509__auto___26862,G__26692_26850,G__26692_26851__$1,n__4376__auto___26848,jobs,results,process,async))
})();
var state__26511__auto__ = (function (){var statearr_26740 = f__26510__auto__.call(null);
(statearr_26740[(6)] = c__26509__auto___26862);

return statearr_26740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(__26849,c__26509__auto___26862,G__26692_26850,G__26692_26851__$1,n__4376__auto___26848,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26692_26851__$1)].join('')));

}

var G__26871 = (__26849 + (1));
__26849 = G__26871;
continue;
} else {
}
break;
}

var c__26509__auto___26872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto___26872,jobs,results,process,async){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto___26872,jobs,results,process,async){
return (function (state_26762){
var state_val_26763 = (state_26762[(1)]);
if((state_val_26763 === (1))){
var state_26762__$1 = state_26762;
var statearr_26764_26873 = state_26762__$1;
(statearr_26764_26873[(2)] = null);

(statearr_26764_26873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26763 === (2))){
var state_26762__$1 = state_26762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26762__$1,(4),from);
} else {
if((state_val_26763 === (3))){
var inst_26760 = (state_26762[(2)]);
var state_26762__$1 = state_26762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26762__$1,inst_26760);
} else {
if((state_val_26763 === (4))){
var inst_26743 = (state_26762[(7)]);
var inst_26743__$1 = (state_26762[(2)]);
var inst_26744 = (inst_26743__$1 == null);
var state_26762__$1 = (function (){var statearr_26765 = state_26762;
(statearr_26765[(7)] = inst_26743__$1);

return statearr_26765;
})();
if(cljs.core.truth_(inst_26744)){
var statearr_26766_26874 = state_26762__$1;
(statearr_26766_26874[(1)] = (5));

} else {
var statearr_26767_26875 = state_26762__$1;
(statearr_26767_26875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26763 === (5))){
var inst_26746 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26762__$1 = state_26762;
var statearr_26768_26876 = state_26762__$1;
(statearr_26768_26876[(2)] = inst_26746);

(statearr_26768_26876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26763 === (6))){
var inst_26743 = (state_26762[(7)]);
var inst_26748 = (state_26762[(8)]);
var inst_26748__$1 = cljs.core.async.chan.call(null,(1));
var inst_26749 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26750 = [inst_26743,inst_26748__$1];
var inst_26751 = (new cljs.core.PersistentVector(null,2,(5),inst_26749,inst_26750,null));
var state_26762__$1 = (function (){var statearr_26769 = state_26762;
(statearr_26769[(8)] = inst_26748__$1);

return statearr_26769;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26762__$1,(8),jobs,inst_26751);
} else {
if((state_val_26763 === (7))){
var inst_26758 = (state_26762[(2)]);
var state_26762__$1 = state_26762;
var statearr_26770_26877 = state_26762__$1;
(statearr_26770_26877[(2)] = inst_26758);

(statearr_26770_26877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26763 === (8))){
var inst_26748 = (state_26762[(8)]);
var inst_26753 = (state_26762[(2)]);
var state_26762__$1 = (function (){var statearr_26771 = state_26762;
(statearr_26771[(9)] = inst_26753);

return statearr_26771;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26762__$1,(9),results,inst_26748);
} else {
if((state_val_26763 === (9))){
var inst_26755 = (state_26762[(2)]);
var state_26762__$1 = (function (){var statearr_26772 = state_26762;
(statearr_26772[(10)] = inst_26755);

return statearr_26772;
})();
var statearr_26773_26878 = state_26762__$1;
(statearr_26773_26878[(2)] = null);

(statearr_26773_26878[(1)] = (2));


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
});})(c__26509__auto___26872,jobs,results,process,async))
;
return ((function (switch__26419__auto__,c__26509__auto___26872,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____0 = (function (){
var statearr_26774 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26774[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__);

(statearr_26774[(1)] = (1));

return statearr_26774;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____1 = (function (state_26762){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_26762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e26775){if((e26775 instanceof Object)){
var ex__26423__auto__ = e26775;
var statearr_26776_26879 = state_26762;
(statearr_26776_26879[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26880 = state_26762;
state_26762 = G__26880;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__ = function(state_26762){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____1.call(this,state_26762);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto___26872,jobs,results,process,async))
})();
var state__26511__auto__ = (function (){var statearr_26777 = f__26510__auto__.call(null);
(statearr_26777[(6)] = c__26509__auto___26872);

return statearr_26777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto___26872,jobs,results,process,async))
);


var c__26509__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto__,jobs,results,process,async){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto__,jobs,results,process,async){
return (function (state_26815){
var state_val_26816 = (state_26815[(1)]);
if((state_val_26816 === (7))){
var inst_26811 = (state_26815[(2)]);
var state_26815__$1 = state_26815;
var statearr_26817_26881 = state_26815__$1;
(statearr_26817_26881[(2)] = inst_26811);

(statearr_26817_26881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (20))){
var state_26815__$1 = state_26815;
var statearr_26818_26882 = state_26815__$1;
(statearr_26818_26882[(2)] = null);

(statearr_26818_26882[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (1))){
var state_26815__$1 = state_26815;
var statearr_26819_26883 = state_26815__$1;
(statearr_26819_26883[(2)] = null);

(statearr_26819_26883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (4))){
var inst_26780 = (state_26815[(7)]);
var inst_26780__$1 = (state_26815[(2)]);
var inst_26781 = (inst_26780__$1 == null);
var state_26815__$1 = (function (){var statearr_26820 = state_26815;
(statearr_26820[(7)] = inst_26780__$1);

return statearr_26820;
})();
if(cljs.core.truth_(inst_26781)){
var statearr_26821_26884 = state_26815__$1;
(statearr_26821_26884[(1)] = (5));

} else {
var statearr_26822_26885 = state_26815__$1;
(statearr_26822_26885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (15))){
var inst_26793 = (state_26815[(8)]);
var state_26815__$1 = state_26815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26815__$1,(18),to,inst_26793);
} else {
if((state_val_26816 === (21))){
var inst_26806 = (state_26815[(2)]);
var state_26815__$1 = state_26815;
var statearr_26823_26886 = state_26815__$1;
(statearr_26823_26886[(2)] = inst_26806);

(statearr_26823_26886[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (13))){
var inst_26808 = (state_26815[(2)]);
var state_26815__$1 = (function (){var statearr_26824 = state_26815;
(statearr_26824[(9)] = inst_26808);

return statearr_26824;
})();
var statearr_26825_26887 = state_26815__$1;
(statearr_26825_26887[(2)] = null);

(statearr_26825_26887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (6))){
var inst_26780 = (state_26815[(7)]);
var state_26815__$1 = state_26815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26815__$1,(11),inst_26780);
} else {
if((state_val_26816 === (17))){
var inst_26801 = (state_26815[(2)]);
var state_26815__$1 = state_26815;
if(cljs.core.truth_(inst_26801)){
var statearr_26826_26888 = state_26815__$1;
(statearr_26826_26888[(1)] = (19));

} else {
var statearr_26827_26889 = state_26815__$1;
(statearr_26827_26889[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (3))){
var inst_26813 = (state_26815[(2)]);
var state_26815__$1 = state_26815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26815__$1,inst_26813);
} else {
if((state_val_26816 === (12))){
var inst_26790 = (state_26815[(10)]);
var state_26815__$1 = state_26815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26815__$1,(14),inst_26790);
} else {
if((state_val_26816 === (2))){
var state_26815__$1 = state_26815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26815__$1,(4),results);
} else {
if((state_val_26816 === (19))){
var state_26815__$1 = state_26815;
var statearr_26828_26890 = state_26815__$1;
(statearr_26828_26890[(2)] = null);

(statearr_26828_26890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (11))){
var inst_26790 = (state_26815[(2)]);
var state_26815__$1 = (function (){var statearr_26829 = state_26815;
(statearr_26829[(10)] = inst_26790);

return statearr_26829;
})();
var statearr_26830_26891 = state_26815__$1;
(statearr_26830_26891[(2)] = null);

(statearr_26830_26891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (9))){
var state_26815__$1 = state_26815;
var statearr_26831_26892 = state_26815__$1;
(statearr_26831_26892[(2)] = null);

(statearr_26831_26892[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (5))){
var state_26815__$1 = state_26815;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26832_26893 = state_26815__$1;
(statearr_26832_26893[(1)] = (8));

} else {
var statearr_26833_26894 = state_26815__$1;
(statearr_26833_26894[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (14))){
var inst_26795 = (state_26815[(11)]);
var inst_26793 = (state_26815[(8)]);
var inst_26793__$1 = (state_26815[(2)]);
var inst_26794 = (inst_26793__$1 == null);
var inst_26795__$1 = cljs.core.not.call(null,inst_26794);
var state_26815__$1 = (function (){var statearr_26834 = state_26815;
(statearr_26834[(11)] = inst_26795__$1);

(statearr_26834[(8)] = inst_26793__$1);

return statearr_26834;
})();
if(inst_26795__$1){
var statearr_26835_26895 = state_26815__$1;
(statearr_26835_26895[(1)] = (15));

} else {
var statearr_26836_26896 = state_26815__$1;
(statearr_26836_26896[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (16))){
var inst_26795 = (state_26815[(11)]);
var state_26815__$1 = state_26815;
var statearr_26837_26897 = state_26815__$1;
(statearr_26837_26897[(2)] = inst_26795);

(statearr_26837_26897[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (10))){
var inst_26787 = (state_26815[(2)]);
var state_26815__$1 = state_26815;
var statearr_26838_26898 = state_26815__$1;
(statearr_26838_26898[(2)] = inst_26787);

(statearr_26838_26898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (18))){
var inst_26798 = (state_26815[(2)]);
var state_26815__$1 = state_26815;
var statearr_26839_26899 = state_26815__$1;
(statearr_26839_26899[(2)] = inst_26798);

(statearr_26839_26899[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26816 === (8))){
var inst_26784 = cljs.core.async.close_BANG_.call(null,to);
var state_26815__$1 = state_26815;
var statearr_26840_26900 = state_26815__$1;
(statearr_26840_26900[(2)] = inst_26784);

(statearr_26840_26900[(1)] = (10));


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
});})(c__26509__auto__,jobs,results,process,async))
;
return ((function (switch__26419__auto__,c__26509__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____0 = (function (){
var statearr_26841 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26841[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__);

(statearr_26841[(1)] = (1));

return statearr_26841;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____1 = (function (state_26815){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_26815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e26842){if((e26842 instanceof Object)){
var ex__26423__auto__ = e26842;
var statearr_26843_26901 = state_26815;
(statearr_26843_26901[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26902 = state_26815;
state_26815 = G__26902;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__ = function(state_26815){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____1.call(this,state_26815);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26420__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto__,jobs,results,process,async))
})();
var state__26511__auto__ = (function (){var statearr_26844 = f__26510__auto__.call(null);
(statearr_26844[(6)] = c__26509__auto__);

return statearr_26844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto__,jobs,results,process,async))
);

return c__26509__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__26904 = arguments.length;
switch (G__26904) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__26907 = arguments.length;
switch (G__26907) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__26910 = arguments.length;
switch (G__26910) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26509__auto___26959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto___26959,tc,fc){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto___26959,tc,fc){
return (function (state_26936){
var state_val_26937 = (state_26936[(1)]);
if((state_val_26937 === (7))){
var inst_26932 = (state_26936[(2)]);
var state_26936__$1 = state_26936;
var statearr_26938_26960 = state_26936__$1;
(statearr_26938_26960[(2)] = inst_26932);

(statearr_26938_26960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26937 === (1))){
var state_26936__$1 = state_26936;
var statearr_26939_26961 = state_26936__$1;
(statearr_26939_26961[(2)] = null);

(statearr_26939_26961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26937 === (4))){
var inst_26913 = (state_26936[(7)]);
var inst_26913__$1 = (state_26936[(2)]);
var inst_26914 = (inst_26913__$1 == null);
var state_26936__$1 = (function (){var statearr_26940 = state_26936;
(statearr_26940[(7)] = inst_26913__$1);

return statearr_26940;
})();
if(cljs.core.truth_(inst_26914)){
var statearr_26941_26962 = state_26936__$1;
(statearr_26941_26962[(1)] = (5));

} else {
var statearr_26942_26963 = state_26936__$1;
(statearr_26942_26963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26937 === (13))){
var state_26936__$1 = state_26936;
var statearr_26943_26964 = state_26936__$1;
(statearr_26943_26964[(2)] = null);

(statearr_26943_26964[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26937 === (6))){
var inst_26913 = (state_26936[(7)]);
var inst_26919 = p.call(null,inst_26913);
var state_26936__$1 = state_26936;
if(cljs.core.truth_(inst_26919)){
var statearr_26944_26965 = state_26936__$1;
(statearr_26944_26965[(1)] = (9));

} else {
var statearr_26945_26966 = state_26936__$1;
(statearr_26945_26966[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26937 === (3))){
var inst_26934 = (state_26936[(2)]);
var state_26936__$1 = state_26936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26936__$1,inst_26934);
} else {
if((state_val_26937 === (12))){
var state_26936__$1 = state_26936;
var statearr_26946_26967 = state_26936__$1;
(statearr_26946_26967[(2)] = null);

(statearr_26946_26967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26937 === (2))){
var state_26936__$1 = state_26936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26936__$1,(4),ch);
} else {
if((state_val_26937 === (11))){
var inst_26913 = (state_26936[(7)]);
var inst_26923 = (state_26936[(2)]);
var state_26936__$1 = state_26936;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26936__$1,(8),inst_26923,inst_26913);
} else {
if((state_val_26937 === (9))){
var state_26936__$1 = state_26936;
var statearr_26947_26968 = state_26936__$1;
(statearr_26947_26968[(2)] = tc);

(statearr_26947_26968[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26937 === (5))){
var inst_26916 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26917 = cljs.core.async.close_BANG_.call(null,fc);
var state_26936__$1 = (function (){var statearr_26948 = state_26936;
(statearr_26948[(8)] = inst_26916);

return statearr_26948;
})();
var statearr_26949_26969 = state_26936__$1;
(statearr_26949_26969[(2)] = inst_26917);

(statearr_26949_26969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26937 === (14))){
var inst_26930 = (state_26936[(2)]);
var state_26936__$1 = state_26936;
var statearr_26950_26970 = state_26936__$1;
(statearr_26950_26970[(2)] = inst_26930);

(statearr_26950_26970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26937 === (10))){
var state_26936__$1 = state_26936;
var statearr_26951_26971 = state_26936__$1;
(statearr_26951_26971[(2)] = fc);

(statearr_26951_26971[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26937 === (8))){
var inst_26925 = (state_26936[(2)]);
var state_26936__$1 = state_26936;
if(cljs.core.truth_(inst_26925)){
var statearr_26952_26972 = state_26936__$1;
(statearr_26952_26972[(1)] = (12));

} else {
var statearr_26953_26973 = state_26936__$1;
(statearr_26953_26973[(1)] = (13));

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
});})(c__26509__auto___26959,tc,fc))
;
return ((function (switch__26419__auto__,c__26509__auto___26959,tc,fc){
return (function() {
var cljs$core$async$state_machine__26420__auto__ = null;
var cljs$core$async$state_machine__26420__auto____0 = (function (){
var statearr_26954 = [null,null,null,null,null,null,null,null,null];
(statearr_26954[(0)] = cljs$core$async$state_machine__26420__auto__);

(statearr_26954[(1)] = (1));

return statearr_26954;
});
var cljs$core$async$state_machine__26420__auto____1 = (function (state_26936){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_26936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e26955){if((e26955 instanceof Object)){
var ex__26423__auto__ = e26955;
var statearr_26956_26974 = state_26936;
(statearr_26956_26974[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26975 = state_26936;
state_26936 = G__26975;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
cljs$core$async$state_machine__26420__auto__ = function(state_26936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26420__auto____1.call(this,state_26936);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26420__auto____0;
cljs$core$async$state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26420__auto____1;
return cljs$core$async$state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto___26959,tc,fc))
})();
var state__26511__auto__ = (function (){var statearr_26957 = f__26510__auto__.call(null);
(statearr_26957[(6)] = c__26509__auto___26959);

return statearr_26957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto___26959,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26509__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto__){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto__){
return (function (state_26996){
var state_val_26997 = (state_26996[(1)]);
if((state_val_26997 === (7))){
var inst_26992 = (state_26996[(2)]);
var state_26996__$1 = state_26996;
var statearr_26998_27016 = state_26996__$1;
(statearr_26998_27016[(2)] = inst_26992);

(statearr_26998_27016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (1))){
var inst_26976 = init;
var state_26996__$1 = (function (){var statearr_26999 = state_26996;
(statearr_26999[(7)] = inst_26976);

return statearr_26999;
})();
var statearr_27000_27017 = state_26996__$1;
(statearr_27000_27017[(2)] = null);

(statearr_27000_27017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (4))){
var inst_26979 = (state_26996[(8)]);
var inst_26979__$1 = (state_26996[(2)]);
var inst_26980 = (inst_26979__$1 == null);
var state_26996__$1 = (function (){var statearr_27001 = state_26996;
(statearr_27001[(8)] = inst_26979__$1);

return statearr_27001;
})();
if(cljs.core.truth_(inst_26980)){
var statearr_27002_27018 = state_26996__$1;
(statearr_27002_27018[(1)] = (5));

} else {
var statearr_27003_27019 = state_26996__$1;
(statearr_27003_27019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (6))){
var inst_26976 = (state_26996[(7)]);
var inst_26979 = (state_26996[(8)]);
var inst_26983 = (state_26996[(9)]);
var inst_26983__$1 = f.call(null,inst_26976,inst_26979);
var inst_26984 = cljs.core.reduced_QMARK_.call(null,inst_26983__$1);
var state_26996__$1 = (function (){var statearr_27004 = state_26996;
(statearr_27004[(9)] = inst_26983__$1);

return statearr_27004;
})();
if(inst_26984){
var statearr_27005_27020 = state_26996__$1;
(statearr_27005_27020[(1)] = (8));

} else {
var statearr_27006_27021 = state_26996__$1;
(statearr_27006_27021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (3))){
var inst_26994 = (state_26996[(2)]);
var state_26996__$1 = state_26996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26996__$1,inst_26994);
} else {
if((state_val_26997 === (2))){
var state_26996__$1 = state_26996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26996__$1,(4),ch);
} else {
if((state_val_26997 === (9))){
var inst_26983 = (state_26996[(9)]);
var inst_26976 = inst_26983;
var state_26996__$1 = (function (){var statearr_27007 = state_26996;
(statearr_27007[(7)] = inst_26976);

return statearr_27007;
})();
var statearr_27008_27022 = state_26996__$1;
(statearr_27008_27022[(2)] = null);

(statearr_27008_27022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (5))){
var inst_26976 = (state_26996[(7)]);
var state_26996__$1 = state_26996;
var statearr_27009_27023 = state_26996__$1;
(statearr_27009_27023[(2)] = inst_26976);

(statearr_27009_27023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (10))){
var inst_26990 = (state_26996[(2)]);
var state_26996__$1 = state_26996;
var statearr_27010_27024 = state_26996__$1;
(statearr_27010_27024[(2)] = inst_26990);

(statearr_27010_27024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26997 === (8))){
var inst_26983 = (state_26996[(9)]);
var inst_26986 = cljs.core.deref.call(null,inst_26983);
var state_26996__$1 = state_26996;
var statearr_27011_27025 = state_26996__$1;
(statearr_27011_27025[(2)] = inst_26986);

(statearr_27011_27025[(1)] = (10));


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
});})(c__26509__auto__))
;
return ((function (switch__26419__auto__,c__26509__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26420__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26420__auto____0 = (function (){
var statearr_27012 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27012[(0)] = cljs$core$async$reduce_$_state_machine__26420__auto__);

(statearr_27012[(1)] = (1));

return statearr_27012;
});
var cljs$core$async$reduce_$_state_machine__26420__auto____1 = (function (state_26996){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_26996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e27013){if((e27013 instanceof Object)){
var ex__26423__auto__ = e27013;
var statearr_27014_27026 = state_26996;
(statearr_27014_27026[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27027 = state_26996;
state_26996 = G__27027;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26420__auto__ = function(state_26996){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26420__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26420__auto____1.call(this,state_26996);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26420__auto____0;
cljs$core$async$reduce_$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26420__auto____1;
return cljs$core$async$reduce_$_state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto__))
})();
var state__26511__auto__ = (function (){var statearr_27015 = f__26510__auto__.call(null);
(statearr_27015[(6)] = c__26509__auto__);

return statearr_27015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto__))
);

return c__26509__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26509__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto__,f__$1){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto__,f__$1){
return (function (state_27033){
var state_val_27034 = (state_27033[(1)]);
if((state_val_27034 === (1))){
var inst_27028 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27033__$1 = state_27033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27033__$1,(2),inst_27028);
} else {
if((state_val_27034 === (2))){
var inst_27030 = (state_27033[(2)]);
var inst_27031 = f__$1.call(null,inst_27030);
var state_27033__$1 = state_27033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27033__$1,inst_27031);
} else {
return null;
}
}
});})(c__26509__auto__,f__$1))
;
return ((function (switch__26419__auto__,c__26509__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26420__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26420__auto____0 = (function (){
var statearr_27035 = [null,null,null,null,null,null,null];
(statearr_27035[(0)] = cljs$core$async$transduce_$_state_machine__26420__auto__);

(statearr_27035[(1)] = (1));

return statearr_27035;
});
var cljs$core$async$transduce_$_state_machine__26420__auto____1 = (function (state_27033){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_27033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e27036){if((e27036 instanceof Object)){
var ex__26423__auto__ = e27036;
var statearr_27037_27039 = state_27033;
(statearr_27037_27039[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27040 = state_27033;
state_27033 = G__27040;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26420__auto__ = function(state_27033){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26420__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26420__auto____1.call(this,state_27033);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26420__auto____0;
cljs$core$async$transduce_$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26420__auto____1;
return cljs$core$async$transduce_$_state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto__,f__$1))
})();
var state__26511__auto__ = (function (){var statearr_27038 = f__26510__auto__.call(null);
(statearr_27038[(6)] = c__26509__auto__);

return statearr_27038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto__,f__$1))
);

return c__26509__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27042 = arguments.length;
switch (G__27042) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26509__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto__){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto__){
return (function (state_27067){
var state_val_27068 = (state_27067[(1)]);
if((state_val_27068 === (7))){
var inst_27049 = (state_27067[(2)]);
var state_27067__$1 = state_27067;
var statearr_27069_27090 = state_27067__$1;
(statearr_27069_27090[(2)] = inst_27049);

(statearr_27069_27090[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (1))){
var inst_27043 = cljs.core.seq.call(null,coll);
var inst_27044 = inst_27043;
var state_27067__$1 = (function (){var statearr_27070 = state_27067;
(statearr_27070[(7)] = inst_27044);

return statearr_27070;
})();
var statearr_27071_27091 = state_27067__$1;
(statearr_27071_27091[(2)] = null);

(statearr_27071_27091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (4))){
var inst_27044 = (state_27067[(7)]);
var inst_27047 = cljs.core.first.call(null,inst_27044);
var state_27067__$1 = state_27067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27067__$1,(7),ch,inst_27047);
} else {
if((state_val_27068 === (13))){
var inst_27061 = (state_27067[(2)]);
var state_27067__$1 = state_27067;
var statearr_27072_27092 = state_27067__$1;
(statearr_27072_27092[(2)] = inst_27061);

(statearr_27072_27092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (6))){
var inst_27052 = (state_27067[(2)]);
var state_27067__$1 = state_27067;
if(cljs.core.truth_(inst_27052)){
var statearr_27073_27093 = state_27067__$1;
(statearr_27073_27093[(1)] = (8));

} else {
var statearr_27074_27094 = state_27067__$1;
(statearr_27074_27094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (3))){
var inst_27065 = (state_27067[(2)]);
var state_27067__$1 = state_27067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27067__$1,inst_27065);
} else {
if((state_val_27068 === (12))){
var state_27067__$1 = state_27067;
var statearr_27075_27095 = state_27067__$1;
(statearr_27075_27095[(2)] = null);

(statearr_27075_27095[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (2))){
var inst_27044 = (state_27067[(7)]);
var state_27067__$1 = state_27067;
if(cljs.core.truth_(inst_27044)){
var statearr_27076_27096 = state_27067__$1;
(statearr_27076_27096[(1)] = (4));

} else {
var statearr_27077_27097 = state_27067__$1;
(statearr_27077_27097[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (11))){
var inst_27058 = cljs.core.async.close_BANG_.call(null,ch);
var state_27067__$1 = state_27067;
var statearr_27078_27098 = state_27067__$1;
(statearr_27078_27098[(2)] = inst_27058);

(statearr_27078_27098[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (9))){
var state_27067__$1 = state_27067;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27079_27099 = state_27067__$1;
(statearr_27079_27099[(1)] = (11));

} else {
var statearr_27080_27100 = state_27067__$1;
(statearr_27080_27100[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (5))){
var inst_27044 = (state_27067[(7)]);
var state_27067__$1 = state_27067;
var statearr_27081_27101 = state_27067__$1;
(statearr_27081_27101[(2)] = inst_27044);

(statearr_27081_27101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (10))){
var inst_27063 = (state_27067[(2)]);
var state_27067__$1 = state_27067;
var statearr_27082_27102 = state_27067__$1;
(statearr_27082_27102[(2)] = inst_27063);

(statearr_27082_27102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (8))){
var inst_27044 = (state_27067[(7)]);
var inst_27054 = cljs.core.next.call(null,inst_27044);
var inst_27044__$1 = inst_27054;
var state_27067__$1 = (function (){var statearr_27083 = state_27067;
(statearr_27083[(7)] = inst_27044__$1);

return statearr_27083;
})();
var statearr_27084_27103 = state_27067__$1;
(statearr_27084_27103[(2)] = null);

(statearr_27084_27103[(1)] = (2));


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
});})(c__26509__auto__))
;
return ((function (switch__26419__auto__,c__26509__auto__){
return (function() {
var cljs$core$async$state_machine__26420__auto__ = null;
var cljs$core$async$state_machine__26420__auto____0 = (function (){
var statearr_27085 = [null,null,null,null,null,null,null,null];
(statearr_27085[(0)] = cljs$core$async$state_machine__26420__auto__);

(statearr_27085[(1)] = (1));

return statearr_27085;
});
var cljs$core$async$state_machine__26420__auto____1 = (function (state_27067){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_27067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e27086){if((e27086 instanceof Object)){
var ex__26423__auto__ = e27086;
var statearr_27087_27104 = state_27067;
(statearr_27087_27104[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27105 = state_27067;
state_27067 = G__27105;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
cljs$core$async$state_machine__26420__auto__ = function(state_27067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26420__auto____1.call(this,state_27067);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26420__auto____0;
cljs$core$async$state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26420__auto____1;
return cljs$core$async$state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto__))
})();
var state__26511__auto__ = (function (){var statearr_27088 = f__26510__auto__.call(null);
(statearr_27088[(6)] = c__26509__auto__);

return statearr_27088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto__))
);

return c__26509__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27106 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27106 = (function (ch,cs,meta27107){
this.ch = ch;
this.cs = cs;
this.meta27107 = meta27107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27108,meta27107__$1){
var self__ = this;
var _27108__$1 = this;
return (new cljs.core.async.t_cljs$core$async27106(self__.ch,self__.cs,meta27107__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27106.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27108){
var self__ = this;
var _27108__$1 = this;
return self__.meta27107;
});})(cs))
;

cljs.core.async.t_cljs$core$async27106.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27106.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27106.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27106.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27106.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27106.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27106.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27107","meta27107",-899211922,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27106.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27106";

cljs.core.async.t_cljs$core$async27106.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27106");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27106.
 */
cljs.core.async.__GT_t_cljs$core$async27106 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27106(ch__$1,cs__$1,meta27107){
return (new cljs.core.async.t_cljs$core$async27106(ch__$1,cs__$1,meta27107));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27106(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26509__auto___27328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto___27328,cs,m,dchan,dctr,done){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto___27328,cs,m,dchan,dctr,done){
return (function (state_27243){
var state_val_27244 = (state_27243[(1)]);
if((state_val_27244 === (7))){
var inst_27239 = (state_27243[(2)]);
var state_27243__$1 = state_27243;
var statearr_27245_27329 = state_27243__$1;
(statearr_27245_27329[(2)] = inst_27239);

(statearr_27245_27329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (20))){
var inst_27142 = (state_27243[(7)]);
var inst_27154 = cljs.core.first.call(null,inst_27142);
var inst_27155 = cljs.core.nth.call(null,inst_27154,(0),null);
var inst_27156 = cljs.core.nth.call(null,inst_27154,(1),null);
var state_27243__$1 = (function (){var statearr_27246 = state_27243;
(statearr_27246[(8)] = inst_27155);

return statearr_27246;
})();
if(cljs.core.truth_(inst_27156)){
var statearr_27247_27330 = state_27243__$1;
(statearr_27247_27330[(1)] = (22));

} else {
var statearr_27248_27331 = state_27243__$1;
(statearr_27248_27331[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (27))){
var inst_27191 = (state_27243[(9)]);
var inst_27184 = (state_27243[(10)]);
var inst_27111 = (state_27243[(11)]);
var inst_27186 = (state_27243[(12)]);
var inst_27191__$1 = cljs.core._nth.call(null,inst_27184,inst_27186);
var inst_27192 = cljs.core.async.put_BANG_.call(null,inst_27191__$1,inst_27111,done);
var state_27243__$1 = (function (){var statearr_27249 = state_27243;
(statearr_27249[(9)] = inst_27191__$1);

return statearr_27249;
})();
if(cljs.core.truth_(inst_27192)){
var statearr_27250_27332 = state_27243__$1;
(statearr_27250_27332[(1)] = (30));

} else {
var statearr_27251_27333 = state_27243__$1;
(statearr_27251_27333[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (1))){
var state_27243__$1 = state_27243;
var statearr_27252_27334 = state_27243__$1;
(statearr_27252_27334[(2)] = null);

(statearr_27252_27334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (24))){
var inst_27142 = (state_27243[(7)]);
var inst_27161 = (state_27243[(2)]);
var inst_27162 = cljs.core.next.call(null,inst_27142);
var inst_27120 = inst_27162;
var inst_27121 = null;
var inst_27122 = (0);
var inst_27123 = (0);
var state_27243__$1 = (function (){var statearr_27253 = state_27243;
(statearr_27253[(13)] = inst_27121);

(statearr_27253[(14)] = inst_27120);

(statearr_27253[(15)] = inst_27123);

(statearr_27253[(16)] = inst_27122);

(statearr_27253[(17)] = inst_27161);

return statearr_27253;
})();
var statearr_27254_27335 = state_27243__$1;
(statearr_27254_27335[(2)] = null);

(statearr_27254_27335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (39))){
var state_27243__$1 = state_27243;
var statearr_27258_27336 = state_27243__$1;
(statearr_27258_27336[(2)] = null);

(statearr_27258_27336[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (4))){
var inst_27111 = (state_27243[(11)]);
var inst_27111__$1 = (state_27243[(2)]);
var inst_27112 = (inst_27111__$1 == null);
var state_27243__$1 = (function (){var statearr_27259 = state_27243;
(statearr_27259[(11)] = inst_27111__$1);

return statearr_27259;
})();
if(cljs.core.truth_(inst_27112)){
var statearr_27260_27337 = state_27243__$1;
(statearr_27260_27337[(1)] = (5));

} else {
var statearr_27261_27338 = state_27243__$1;
(statearr_27261_27338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (15))){
var inst_27121 = (state_27243[(13)]);
var inst_27120 = (state_27243[(14)]);
var inst_27123 = (state_27243[(15)]);
var inst_27122 = (state_27243[(16)]);
var inst_27138 = (state_27243[(2)]);
var inst_27139 = (inst_27123 + (1));
var tmp27255 = inst_27121;
var tmp27256 = inst_27120;
var tmp27257 = inst_27122;
var inst_27120__$1 = tmp27256;
var inst_27121__$1 = tmp27255;
var inst_27122__$1 = tmp27257;
var inst_27123__$1 = inst_27139;
var state_27243__$1 = (function (){var statearr_27262 = state_27243;
(statearr_27262[(13)] = inst_27121__$1);

(statearr_27262[(14)] = inst_27120__$1);

(statearr_27262[(15)] = inst_27123__$1);

(statearr_27262[(16)] = inst_27122__$1);

(statearr_27262[(18)] = inst_27138);

return statearr_27262;
})();
var statearr_27263_27339 = state_27243__$1;
(statearr_27263_27339[(2)] = null);

(statearr_27263_27339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (21))){
var inst_27165 = (state_27243[(2)]);
var state_27243__$1 = state_27243;
var statearr_27267_27340 = state_27243__$1;
(statearr_27267_27340[(2)] = inst_27165);

(statearr_27267_27340[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (31))){
var inst_27191 = (state_27243[(9)]);
var inst_27195 = done.call(null,null);
var inst_27196 = cljs.core.async.untap_STAR_.call(null,m,inst_27191);
var state_27243__$1 = (function (){var statearr_27268 = state_27243;
(statearr_27268[(19)] = inst_27195);

return statearr_27268;
})();
var statearr_27269_27341 = state_27243__$1;
(statearr_27269_27341[(2)] = inst_27196);

(statearr_27269_27341[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (32))){
var inst_27185 = (state_27243[(20)]);
var inst_27184 = (state_27243[(10)]);
var inst_27186 = (state_27243[(12)]);
var inst_27183 = (state_27243[(21)]);
var inst_27198 = (state_27243[(2)]);
var inst_27199 = (inst_27186 + (1));
var tmp27264 = inst_27185;
var tmp27265 = inst_27184;
var tmp27266 = inst_27183;
var inst_27183__$1 = tmp27266;
var inst_27184__$1 = tmp27265;
var inst_27185__$1 = tmp27264;
var inst_27186__$1 = inst_27199;
var state_27243__$1 = (function (){var statearr_27270 = state_27243;
(statearr_27270[(20)] = inst_27185__$1);

(statearr_27270[(10)] = inst_27184__$1);

(statearr_27270[(22)] = inst_27198);

(statearr_27270[(12)] = inst_27186__$1);

(statearr_27270[(21)] = inst_27183__$1);

return statearr_27270;
})();
var statearr_27271_27342 = state_27243__$1;
(statearr_27271_27342[(2)] = null);

(statearr_27271_27342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (40))){
var inst_27211 = (state_27243[(23)]);
var inst_27215 = done.call(null,null);
var inst_27216 = cljs.core.async.untap_STAR_.call(null,m,inst_27211);
var state_27243__$1 = (function (){var statearr_27272 = state_27243;
(statearr_27272[(24)] = inst_27215);

return statearr_27272;
})();
var statearr_27273_27343 = state_27243__$1;
(statearr_27273_27343[(2)] = inst_27216);

(statearr_27273_27343[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (33))){
var inst_27202 = (state_27243[(25)]);
var inst_27204 = cljs.core.chunked_seq_QMARK_.call(null,inst_27202);
var state_27243__$1 = state_27243;
if(inst_27204){
var statearr_27274_27344 = state_27243__$1;
(statearr_27274_27344[(1)] = (36));

} else {
var statearr_27275_27345 = state_27243__$1;
(statearr_27275_27345[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (13))){
var inst_27132 = (state_27243[(26)]);
var inst_27135 = cljs.core.async.close_BANG_.call(null,inst_27132);
var state_27243__$1 = state_27243;
var statearr_27276_27346 = state_27243__$1;
(statearr_27276_27346[(2)] = inst_27135);

(statearr_27276_27346[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (22))){
var inst_27155 = (state_27243[(8)]);
var inst_27158 = cljs.core.async.close_BANG_.call(null,inst_27155);
var state_27243__$1 = state_27243;
var statearr_27277_27347 = state_27243__$1;
(statearr_27277_27347[(2)] = inst_27158);

(statearr_27277_27347[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (36))){
var inst_27202 = (state_27243[(25)]);
var inst_27206 = cljs.core.chunk_first.call(null,inst_27202);
var inst_27207 = cljs.core.chunk_rest.call(null,inst_27202);
var inst_27208 = cljs.core.count.call(null,inst_27206);
var inst_27183 = inst_27207;
var inst_27184 = inst_27206;
var inst_27185 = inst_27208;
var inst_27186 = (0);
var state_27243__$1 = (function (){var statearr_27278 = state_27243;
(statearr_27278[(20)] = inst_27185);

(statearr_27278[(10)] = inst_27184);

(statearr_27278[(12)] = inst_27186);

(statearr_27278[(21)] = inst_27183);

return statearr_27278;
})();
var statearr_27279_27348 = state_27243__$1;
(statearr_27279_27348[(2)] = null);

(statearr_27279_27348[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (41))){
var inst_27202 = (state_27243[(25)]);
var inst_27218 = (state_27243[(2)]);
var inst_27219 = cljs.core.next.call(null,inst_27202);
var inst_27183 = inst_27219;
var inst_27184 = null;
var inst_27185 = (0);
var inst_27186 = (0);
var state_27243__$1 = (function (){var statearr_27280 = state_27243;
(statearr_27280[(27)] = inst_27218);

(statearr_27280[(20)] = inst_27185);

(statearr_27280[(10)] = inst_27184);

(statearr_27280[(12)] = inst_27186);

(statearr_27280[(21)] = inst_27183);

return statearr_27280;
})();
var statearr_27281_27349 = state_27243__$1;
(statearr_27281_27349[(2)] = null);

(statearr_27281_27349[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (43))){
var state_27243__$1 = state_27243;
var statearr_27282_27350 = state_27243__$1;
(statearr_27282_27350[(2)] = null);

(statearr_27282_27350[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (29))){
var inst_27227 = (state_27243[(2)]);
var state_27243__$1 = state_27243;
var statearr_27283_27351 = state_27243__$1;
(statearr_27283_27351[(2)] = inst_27227);

(statearr_27283_27351[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (44))){
var inst_27236 = (state_27243[(2)]);
var state_27243__$1 = (function (){var statearr_27284 = state_27243;
(statearr_27284[(28)] = inst_27236);

return statearr_27284;
})();
var statearr_27285_27352 = state_27243__$1;
(statearr_27285_27352[(2)] = null);

(statearr_27285_27352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (6))){
var inst_27175 = (state_27243[(29)]);
var inst_27174 = cljs.core.deref.call(null,cs);
var inst_27175__$1 = cljs.core.keys.call(null,inst_27174);
var inst_27176 = cljs.core.count.call(null,inst_27175__$1);
var inst_27177 = cljs.core.reset_BANG_.call(null,dctr,inst_27176);
var inst_27182 = cljs.core.seq.call(null,inst_27175__$1);
var inst_27183 = inst_27182;
var inst_27184 = null;
var inst_27185 = (0);
var inst_27186 = (0);
var state_27243__$1 = (function (){var statearr_27286 = state_27243;
(statearr_27286[(29)] = inst_27175__$1);

(statearr_27286[(20)] = inst_27185);

(statearr_27286[(10)] = inst_27184);

(statearr_27286[(30)] = inst_27177);

(statearr_27286[(12)] = inst_27186);

(statearr_27286[(21)] = inst_27183);

return statearr_27286;
})();
var statearr_27287_27353 = state_27243__$1;
(statearr_27287_27353[(2)] = null);

(statearr_27287_27353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (28))){
var inst_27202 = (state_27243[(25)]);
var inst_27183 = (state_27243[(21)]);
var inst_27202__$1 = cljs.core.seq.call(null,inst_27183);
var state_27243__$1 = (function (){var statearr_27288 = state_27243;
(statearr_27288[(25)] = inst_27202__$1);

return statearr_27288;
})();
if(inst_27202__$1){
var statearr_27289_27354 = state_27243__$1;
(statearr_27289_27354[(1)] = (33));

} else {
var statearr_27290_27355 = state_27243__$1;
(statearr_27290_27355[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (25))){
var inst_27185 = (state_27243[(20)]);
var inst_27186 = (state_27243[(12)]);
var inst_27188 = (inst_27186 < inst_27185);
var inst_27189 = inst_27188;
var state_27243__$1 = state_27243;
if(cljs.core.truth_(inst_27189)){
var statearr_27291_27356 = state_27243__$1;
(statearr_27291_27356[(1)] = (27));

} else {
var statearr_27292_27357 = state_27243__$1;
(statearr_27292_27357[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (34))){
var state_27243__$1 = state_27243;
var statearr_27293_27358 = state_27243__$1;
(statearr_27293_27358[(2)] = null);

(statearr_27293_27358[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (17))){
var state_27243__$1 = state_27243;
var statearr_27294_27359 = state_27243__$1;
(statearr_27294_27359[(2)] = null);

(statearr_27294_27359[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (3))){
var inst_27241 = (state_27243[(2)]);
var state_27243__$1 = state_27243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27243__$1,inst_27241);
} else {
if((state_val_27244 === (12))){
var inst_27170 = (state_27243[(2)]);
var state_27243__$1 = state_27243;
var statearr_27295_27360 = state_27243__$1;
(statearr_27295_27360[(2)] = inst_27170);

(statearr_27295_27360[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (2))){
var state_27243__$1 = state_27243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27243__$1,(4),ch);
} else {
if((state_val_27244 === (23))){
var state_27243__$1 = state_27243;
var statearr_27296_27361 = state_27243__$1;
(statearr_27296_27361[(2)] = null);

(statearr_27296_27361[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (35))){
var inst_27225 = (state_27243[(2)]);
var state_27243__$1 = state_27243;
var statearr_27297_27362 = state_27243__$1;
(statearr_27297_27362[(2)] = inst_27225);

(statearr_27297_27362[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (19))){
var inst_27142 = (state_27243[(7)]);
var inst_27146 = cljs.core.chunk_first.call(null,inst_27142);
var inst_27147 = cljs.core.chunk_rest.call(null,inst_27142);
var inst_27148 = cljs.core.count.call(null,inst_27146);
var inst_27120 = inst_27147;
var inst_27121 = inst_27146;
var inst_27122 = inst_27148;
var inst_27123 = (0);
var state_27243__$1 = (function (){var statearr_27298 = state_27243;
(statearr_27298[(13)] = inst_27121);

(statearr_27298[(14)] = inst_27120);

(statearr_27298[(15)] = inst_27123);

(statearr_27298[(16)] = inst_27122);

return statearr_27298;
})();
var statearr_27299_27363 = state_27243__$1;
(statearr_27299_27363[(2)] = null);

(statearr_27299_27363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (11))){
var inst_27142 = (state_27243[(7)]);
var inst_27120 = (state_27243[(14)]);
var inst_27142__$1 = cljs.core.seq.call(null,inst_27120);
var state_27243__$1 = (function (){var statearr_27300 = state_27243;
(statearr_27300[(7)] = inst_27142__$1);

return statearr_27300;
})();
if(inst_27142__$1){
var statearr_27301_27364 = state_27243__$1;
(statearr_27301_27364[(1)] = (16));

} else {
var statearr_27302_27365 = state_27243__$1;
(statearr_27302_27365[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (9))){
var inst_27172 = (state_27243[(2)]);
var state_27243__$1 = state_27243;
var statearr_27303_27366 = state_27243__$1;
(statearr_27303_27366[(2)] = inst_27172);

(statearr_27303_27366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (5))){
var inst_27118 = cljs.core.deref.call(null,cs);
var inst_27119 = cljs.core.seq.call(null,inst_27118);
var inst_27120 = inst_27119;
var inst_27121 = null;
var inst_27122 = (0);
var inst_27123 = (0);
var state_27243__$1 = (function (){var statearr_27304 = state_27243;
(statearr_27304[(13)] = inst_27121);

(statearr_27304[(14)] = inst_27120);

(statearr_27304[(15)] = inst_27123);

(statearr_27304[(16)] = inst_27122);

return statearr_27304;
})();
var statearr_27305_27367 = state_27243__$1;
(statearr_27305_27367[(2)] = null);

(statearr_27305_27367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (14))){
var state_27243__$1 = state_27243;
var statearr_27306_27368 = state_27243__$1;
(statearr_27306_27368[(2)] = null);

(statearr_27306_27368[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (45))){
var inst_27233 = (state_27243[(2)]);
var state_27243__$1 = state_27243;
var statearr_27307_27369 = state_27243__$1;
(statearr_27307_27369[(2)] = inst_27233);

(statearr_27307_27369[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (26))){
var inst_27175 = (state_27243[(29)]);
var inst_27229 = (state_27243[(2)]);
var inst_27230 = cljs.core.seq.call(null,inst_27175);
var state_27243__$1 = (function (){var statearr_27308 = state_27243;
(statearr_27308[(31)] = inst_27229);

return statearr_27308;
})();
if(inst_27230){
var statearr_27309_27370 = state_27243__$1;
(statearr_27309_27370[(1)] = (42));

} else {
var statearr_27310_27371 = state_27243__$1;
(statearr_27310_27371[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (16))){
var inst_27142 = (state_27243[(7)]);
var inst_27144 = cljs.core.chunked_seq_QMARK_.call(null,inst_27142);
var state_27243__$1 = state_27243;
if(inst_27144){
var statearr_27311_27372 = state_27243__$1;
(statearr_27311_27372[(1)] = (19));

} else {
var statearr_27312_27373 = state_27243__$1;
(statearr_27312_27373[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (38))){
var inst_27222 = (state_27243[(2)]);
var state_27243__$1 = state_27243;
var statearr_27313_27374 = state_27243__$1;
(statearr_27313_27374[(2)] = inst_27222);

(statearr_27313_27374[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (30))){
var state_27243__$1 = state_27243;
var statearr_27314_27375 = state_27243__$1;
(statearr_27314_27375[(2)] = null);

(statearr_27314_27375[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (10))){
var inst_27121 = (state_27243[(13)]);
var inst_27123 = (state_27243[(15)]);
var inst_27131 = cljs.core._nth.call(null,inst_27121,inst_27123);
var inst_27132 = cljs.core.nth.call(null,inst_27131,(0),null);
var inst_27133 = cljs.core.nth.call(null,inst_27131,(1),null);
var state_27243__$1 = (function (){var statearr_27315 = state_27243;
(statearr_27315[(26)] = inst_27132);

return statearr_27315;
})();
if(cljs.core.truth_(inst_27133)){
var statearr_27316_27376 = state_27243__$1;
(statearr_27316_27376[(1)] = (13));

} else {
var statearr_27317_27377 = state_27243__$1;
(statearr_27317_27377[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (18))){
var inst_27168 = (state_27243[(2)]);
var state_27243__$1 = state_27243;
var statearr_27318_27378 = state_27243__$1;
(statearr_27318_27378[(2)] = inst_27168);

(statearr_27318_27378[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (42))){
var state_27243__$1 = state_27243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27243__$1,(45),dchan);
} else {
if((state_val_27244 === (37))){
var inst_27202 = (state_27243[(25)]);
var inst_27211 = (state_27243[(23)]);
var inst_27111 = (state_27243[(11)]);
var inst_27211__$1 = cljs.core.first.call(null,inst_27202);
var inst_27212 = cljs.core.async.put_BANG_.call(null,inst_27211__$1,inst_27111,done);
var state_27243__$1 = (function (){var statearr_27319 = state_27243;
(statearr_27319[(23)] = inst_27211__$1);

return statearr_27319;
})();
if(cljs.core.truth_(inst_27212)){
var statearr_27320_27379 = state_27243__$1;
(statearr_27320_27379[(1)] = (39));

} else {
var statearr_27321_27380 = state_27243__$1;
(statearr_27321_27380[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27244 === (8))){
var inst_27123 = (state_27243[(15)]);
var inst_27122 = (state_27243[(16)]);
var inst_27125 = (inst_27123 < inst_27122);
var inst_27126 = inst_27125;
var state_27243__$1 = state_27243;
if(cljs.core.truth_(inst_27126)){
var statearr_27322_27381 = state_27243__$1;
(statearr_27322_27381[(1)] = (10));

} else {
var statearr_27323_27382 = state_27243__$1;
(statearr_27323_27382[(1)] = (11));

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
});})(c__26509__auto___27328,cs,m,dchan,dctr,done))
;
return ((function (switch__26419__auto__,c__26509__auto___27328,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26420__auto__ = null;
var cljs$core$async$mult_$_state_machine__26420__auto____0 = (function (){
var statearr_27324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27324[(0)] = cljs$core$async$mult_$_state_machine__26420__auto__);

(statearr_27324[(1)] = (1));

return statearr_27324;
});
var cljs$core$async$mult_$_state_machine__26420__auto____1 = (function (state_27243){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_27243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e27325){if((e27325 instanceof Object)){
var ex__26423__auto__ = e27325;
var statearr_27326_27383 = state_27243;
(statearr_27326_27383[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27384 = state_27243;
state_27243 = G__27384;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26420__auto__ = function(state_27243){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26420__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26420__auto____1.call(this,state_27243);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26420__auto____0;
cljs$core$async$mult_$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26420__auto____1;
return cljs$core$async$mult_$_state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto___27328,cs,m,dchan,dctr,done))
})();
var state__26511__auto__ = (function (){var statearr_27327 = f__26510__auto__.call(null);
(statearr_27327[(6)] = c__26509__auto___27328);

return statearr_27327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto___27328,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27386 = arguments.length;
switch (G__27386) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27398 = arguments.length;
var i__4500__auto___27399 = (0);
while(true){
if((i__4500__auto___27399 < len__4499__auto___27398)){
args__4502__auto__.push((arguments[i__4500__auto___27399]));

var G__27400 = (i__4500__auto___27399 + (1));
i__4500__auto___27399 = G__27400;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27392){
var map__27393 = p__27392;
var map__27393__$1 = ((((!((map__27393 == null)))?(((((map__27393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27393):map__27393);
var opts = map__27393__$1;
var statearr_27395_27401 = state;
(statearr_27395_27401[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__27393,map__27393__$1,opts){
return (function (val){
var statearr_27396_27402 = state;
(statearr_27396_27402[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27393,map__27393__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_27397_27403 = state;
(statearr_27397_27403[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27388){
var G__27389 = cljs.core.first.call(null,seq27388);
var seq27388__$1 = cljs.core.next.call(null,seq27388);
var G__27390 = cljs.core.first.call(null,seq27388__$1);
var seq27388__$2 = cljs.core.next.call(null,seq27388__$1);
var G__27391 = cljs.core.first.call(null,seq27388__$2);
var seq27388__$3 = cljs.core.next.call(null,seq27388__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27389,G__27390,G__27391,seq27388__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27404 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27404 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27405){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27405 = meta27405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27406,meta27405__$1){
var self__ = this;
var _27406__$1 = this;
return (new cljs.core.async.t_cljs$core$async27404(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27405__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27404.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27406){
var self__ = this;
var _27406__$1 = this;
return self__.meta27405;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27404.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27404.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27404.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27404.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27404.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27404.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27404.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27404.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27404.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta27405","meta27405",-478933377,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27404.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27404";

cljs.core.async.t_cljs$core$async27404.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27404");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27404.
 */
cljs.core.async.__GT_t_cljs$core$async27404 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27404(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27405){
return (new cljs.core.async.t_cljs$core$async27404(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27405));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27404(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26509__auto___27568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto___27568,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto___27568,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27508){
var state_val_27509 = (state_27508[(1)]);
if((state_val_27509 === (7))){
var inst_27423 = (state_27508[(2)]);
var state_27508__$1 = state_27508;
var statearr_27510_27569 = state_27508__$1;
(statearr_27510_27569[(2)] = inst_27423);

(statearr_27510_27569[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (20))){
var inst_27435 = (state_27508[(7)]);
var state_27508__$1 = state_27508;
var statearr_27511_27570 = state_27508__$1;
(statearr_27511_27570[(2)] = inst_27435);

(statearr_27511_27570[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (27))){
var state_27508__$1 = state_27508;
var statearr_27512_27571 = state_27508__$1;
(statearr_27512_27571[(2)] = null);

(statearr_27512_27571[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (1))){
var inst_27410 = (state_27508[(8)]);
var inst_27410__$1 = calc_state.call(null);
var inst_27412 = (inst_27410__$1 == null);
var inst_27413 = cljs.core.not.call(null,inst_27412);
var state_27508__$1 = (function (){var statearr_27513 = state_27508;
(statearr_27513[(8)] = inst_27410__$1);

return statearr_27513;
})();
if(inst_27413){
var statearr_27514_27572 = state_27508__$1;
(statearr_27514_27572[(1)] = (2));

} else {
var statearr_27515_27573 = state_27508__$1;
(statearr_27515_27573[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (24))){
var inst_27482 = (state_27508[(9)]);
var inst_27459 = (state_27508[(10)]);
var inst_27468 = (state_27508[(11)]);
var inst_27482__$1 = inst_27459.call(null,inst_27468);
var state_27508__$1 = (function (){var statearr_27516 = state_27508;
(statearr_27516[(9)] = inst_27482__$1);

return statearr_27516;
})();
if(cljs.core.truth_(inst_27482__$1)){
var statearr_27517_27574 = state_27508__$1;
(statearr_27517_27574[(1)] = (29));

} else {
var statearr_27518_27575 = state_27508__$1;
(statearr_27518_27575[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (4))){
var inst_27426 = (state_27508[(2)]);
var state_27508__$1 = state_27508;
if(cljs.core.truth_(inst_27426)){
var statearr_27519_27576 = state_27508__$1;
(statearr_27519_27576[(1)] = (8));

} else {
var statearr_27520_27577 = state_27508__$1;
(statearr_27520_27577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (15))){
var inst_27453 = (state_27508[(2)]);
var state_27508__$1 = state_27508;
if(cljs.core.truth_(inst_27453)){
var statearr_27521_27578 = state_27508__$1;
(statearr_27521_27578[(1)] = (19));

} else {
var statearr_27522_27579 = state_27508__$1;
(statearr_27522_27579[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (21))){
var inst_27458 = (state_27508[(12)]);
var inst_27458__$1 = (state_27508[(2)]);
var inst_27459 = cljs.core.get.call(null,inst_27458__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27460 = cljs.core.get.call(null,inst_27458__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27461 = cljs.core.get.call(null,inst_27458__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27508__$1 = (function (){var statearr_27523 = state_27508;
(statearr_27523[(10)] = inst_27459);

(statearr_27523[(12)] = inst_27458__$1);

(statearr_27523[(13)] = inst_27460);

return statearr_27523;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27508__$1,(22),inst_27461);
} else {
if((state_val_27509 === (31))){
var inst_27490 = (state_27508[(2)]);
var state_27508__$1 = state_27508;
if(cljs.core.truth_(inst_27490)){
var statearr_27524_27580 = state_27508__$1;
(statearr_27524_27580[(1)] = (32));

} else {
var statearr_27525_27581 = state_27508__$1;
(statearr_27525_27581[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (32))){
var inst_27467 = (state_27508[(14)]);
var state_27508__$1 = state_27508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27508__$1,(35),out,inst_27467);
} else {
if((state_val_27509 === (33))){
var inst_27458 = (state_27508[(12)]);
var inst_27435 = inst_27458;
var state_27508__$1 = (function (){var statearr_27526 = state_27508;
(statearr_27526[(7)] = inst_27435);

return statearr_27526;
})();
var statearr_27527_27582 = state_27508__$1;
(statearr_27527_27582[(2)] = null);

(statearr_27527_27582[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (13))){
var inst_27435 = (state_27508[(7)]);
var inst_27442 = inst_27435.cljs$lang$protocol_mask$partition0$;
var inst_27443 = (inst_27442 & (64));
var inst_27444 = inst_27435.cljs$core$ISeq$;
var inst_27445 = (cljs.core.PROTOCOL_SENTINEL === inst_27444);
var inst_27446 = ((inst_27443) || (inst_27445));
var state_27508__$1 = state_27508;
if(cljs.core.truth_(inst_27446)){
var statearr_27528_27583 = state_27508__$1;
(statearr_27528_27583[(1)] = (16));

} else {
var statearr_27529_27584 = state_27508__$1;
(statearr_27529_27584[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (22))){
var inst_27468 = (state_27508[(11)]);
var inst_27467 = (state_27508[(14)]);
var inst_27466 = (state_27508[(2)]);
var inst_27467__$1 = cljs.core.nth.call(null,inst_27466,(0),null);
var inst_27468__$1 = cljs.core.nth.call(null,inst_27466,(1),null);
var inst_27469 = (inst_27467__$1 == null);
var inst_27470 = cljs.core._EQ_.call(null,inst_27468__$1,change);
var inst_27471 = ((inst_27469) || (inst_27470));
var state_27508__$1 = (function (){var statearr_27530 = state_27508;
(statearr_27530[(11)] = inst_27468__$1);

(statearr_27530[(14)] = inst_27467__$1);

return statearr_27530;
})();
if(cljs.core.truth_(inst_27471)){
var statearr_27531_27585 = state_27508__$1;
(statearr_27531_27585[(1)] = (23));

} else {
var statearr_27532_27586 = state_27508__$1;
(statearr_27532_27586[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (36))){
var inst_27458 = (state_27508[(12)]);
var inst_27435 = inst_27458;
var state_27508__$1 = (function (){var statearr_27533 = state_27508;
(statearr_27533[(7)] = inst_27435);

return statearr_27533;
})();
var statearr_27534_27587 = state_27508__$1;
(statearr_27534_27587[(2)] = null);

(statearr_27534_27587[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (29))){
var inst_27482 = (state_27508[(9)]);
var state_27508__$1 = state_27508;
var statearr_27535_27588 = state_27508__$1;
(statearr_27535_27588[(2)] = inst_27482);

(statearr_27535_27588[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (6))){
var state_27508__$1 = state_27508;
var statearr_27536_27589 = state_27508__$1;
(statearr_27536_27589[(2)] = false);

(statearr_27536_27589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (28))){
var inst_27478 = (state_27508[(2)]);
var inst_27479 = calc_state.call(null);
var inst_27435 = inst_27479;
var state_27508__$1 = (function (){var statearr_27537 = state_27508;
(statearr_27537[(7)] = inst_27435);

(statearr_27537[(15)] = inst_27478);

return statearr_27537;
})();
var statearr_27538_27590 = state_27508__$1;
(statearr_27538_27590[(2)] = null);

(statearr_27538_27590[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (25))){
var inst_27504 = (state_27508[(2)]);
var state_27508__$1 = state_27508;
var statearr_27539_27591 = state_27508__$1;
(statearr_27539_27591[(2)] = inst_27504);

(statearr_27539_27591[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (34))){
var inst_27502 = (state_27508[(2)]);
var state_27508__$1 = state_27508;
var statearr_27540_27592 = state_27508__$1;
(statearr_27540_27592[(2)] = inst_27502);

(statearr_27540_27592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (17))){
var state_27508__$1 = state_27508;
var statearr_27541_27593 = state_27508__$1;
(statearr_27541_27593[(2)] = false);

(statearr_27541_27593[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (3))){
var state_27508__$1 = state_27508;
var statearr_27542_27594 = state_27508__$1;
(statearr_27542_27594[(2)] = false);

(statearr_27542_27594[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (12))){
var inst_27506 = (state_27508[(2)]);
var state_27508__$1 = state_27508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27508__$1,inst_27506);
} else {
if((state_val_27509 === (2))){
var inst_27410 = (state_27508[(8)]);
var inst_27415 = inst_27410.cljs$lang$protocol_mask$partition0$;
var inst_27416 = (inst_27415 & (64));
var inst_27417 = inst_27410.cljs$core$ISeq$;
var inst_27418 = (cljs.core.PROTOCOL_SENTINEL === inst_27417);
var inst_27419 = ((inst_27416) || (inst_27418));
var state_27508__$1 = state_27508;
if(cljs.core.truth_(inst_27419)){
var statearr_27543_27595 = state_27508__$1;
(statearr_27543_27595[(1)] = (5));

} else {
var statearr_27544_27596 = state_27508__$1;
(statearr_27544_27596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (23))){
var inst_27467 = (state_27508[(14)]);
var inst_27473 = (inst_27467 == null);
var state_27508__$1 = state_27508;
if(cljs.core.truth_(inst_27473)){
var statearr_27545_27597 = state_27508__$1;
(statearr_27545_27597[(1)] = (26));

} else {
var statearr_27546_27598 = state_27508__$1;
(statearr_27546_27598[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (35))){
var inst_27493 = (state_27508[(2)]);
var state_27508__$1 = state_27508;
if(cljs.core.truth_(inst_27493)){
var statearr_27547_27599 = state_27508__$1;
(statearr_27547_27599[(1)] = (36));

} else {
var statearr_27548_27600 = state_27508__$1;
(statearr_27548_27600[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (19))){
var inst_27435 = (state_27508[(7)]);
var inst_27455 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27435);
var state_27508__$1 = state_27508;
var statearr_27549_27601 = state_27508__$1;
(statearr_27549_27601[(2)] = inst_27455);

(statearr_27549_27601[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (11))){
var inst_27435 = (state_27508[(7)]);
var inst_27439 = (inst_27435 == null);
var inst_27440 = cljs.core.not.call(null,inst_27439);
var state_27508__$1 = state_27508;
if(inst_27440){
var statearr_27550_27602 = state_27508__$1;
(statearr_27550_27602[(1)] = (13));

} else {
var statearr_27551_27603 = state_27508__$1;
(statearr_27551_27603[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (9))){
var inst_27410 = (state_27508[(8)]);
var state_27508__$1 = state_27508;
var statearr_27552_27604 = state_27508__$1;
(statearr_27552_27604[(2)] = inst_27410);

(statearr_27552_27604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (5))){
var state_27508__$1 = state_27508;
var statearr_27553_27605 = state_27508__$1;
(statearr_27553_27605[(2)] = true);

(statearr_27553_27605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (14))){
var state_27508__$1 = state_27508;
var statearr_27554_27606 = state_27508__$1;
(statearr_27554_27606[(2)] = false);

(statearr_27554_27606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (26))){
var inst_27468 = (state_27508[(11)]);
var inst_27475 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27468);
var state_27508__$1 = state_27508;
var statearr_27555_27607 = state_27508__$1;
(statearr_27555_27607[(2)] = inst_27475);

(statearr_27555_27607[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (16))){
var state_27508__$1 = state_27508;
var statearr_27556_27608 = state_27508__$1;
(statearr_27556_27608[(2)] = true);

(statearr_27556_27608[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (38))){
var inst_27498 = (state_27508[(2)]);
var state_27508__$1 = state_27508;
var statearr_27557_27609 = state_27508__$1;
(statearr_27557_27609[(2)] = inst_27498);

(statearr_27557_27609[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (30))){
var inst_27459 = (state_27508[(10)]);
var inst_27468 = (state_27508[(11)]);
var inst_27460 = (state_27508[(13)]);
var inst_27485 = cljs.core.empty_QMARK_.call(null,inst_27459);
var inst_27486 = inst_27460.call(null,inst_27468);
var inst_27487 = cljs.core.not.call(null,inst_27486);
var inst_27488 = ((inst_27485) && (inst_27487));
var state_27508__$1 = state_27508;
var statearr_27558_27610 = state_27508__$1;
(statearr_27558_27610[(2)] = inst_27488);

(statearr_27558_27610[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (10))){
var inst_27410 = (state_27508[(8)]);
var inst_27431 = (state_27508[(2)]);
var inst_27432 = cljs.core.get.call(null,inst_27431,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27433 = cljs.core.get.call(null,inst_27431,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27434 = cljs.core.get.call(null,inst_27431,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27435 = inst_27410;
var state_27508__$1 = (function (){var statearr_27559 = state_27508;
(statearr_27559[(16)] = inst_27433);

(statearr_27559[(17)] = inst_27432);

(statearr_27559[(18)] = inst_27434);

(statearr_27559[(7)] = inst_27435);

return statearr_27559;
})();
var statearr_27560_27611 = state_27508__$1;
(statearr_27560_27611[(2)] = null);

(statearr_27560_27611[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (18))){
var inst_27450 = (state_27508[(2)]);
var state_27508__$1 = state_27508;
var statearr_27561_27612 = state_27508__$1;
(statearr_27561_27612[(2)] = inst_27450);

(statearr_27561_27612[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (37))){
var state_27508__$1 = state_27508;
var statearr_27562_27613 = state_27508__$1;
(statearr_27562_27613[(2)] = null);

(statearr_27562_27613[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27509 === (8))){
var inst_27410 = (state_27508[(8)]);
var inst_27428 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27410);
var state_27508__$1 = state_27508;
var statearr_27563_27614 = state_27508__$1;
(statearr_27563_27614[(2)] = inst_27428);

(statearr_27563_27614[(1)] = (10));


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
});})(c__26509__auto___27568,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26419__auto__,c__26509__auto___27568,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26420__auto__ = null;
var cljs$core$async$mix_$_state_machine__26420__auto____0 = (function (){
var statearr_27564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27564[(0)] = cljs$core$async$mix_$_state_machine__26420__auto__);

(statearr_27564[(1)] = (1));

return statearr_27564;
});
var cljs$core$async$mix_$_state_machine__26420__auto____1 = (function (state_27508){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_27508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e27565){if((e27565 instanceof Object)){
var ex__26423__auto__ = e27565;
var statearr_27566_27615 = state_27508;
(statearr_27566_27615[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27616 = state_27508;
state_27508 = G__27616;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26420__auto__ = function(state_27508){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26420__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26420__auto____1.call(this,state_27508);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26420__auto____0;
cljs$core$async$mix_$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26420__auto____1;
return cljs$core$async$mix_$_state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto___27568,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26511__auto__ = (function (){var statearr_27567 = f__26510__auto__.call(null);
(statearr_27567[(6)] = c__26509__auto___27568);

return statearr_27567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto___27568,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27618 = arguments.length;
switch (G__27618) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__27622 = arguments.length;
switch (G__27622) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__27620_SHARP_){
if(cljs.core.truth_(p1__27620_SHARP_.call(null,topic))){
return p1__27620_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27620_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27623 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27623 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27624){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27624 = meta27624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27625,meta27624__$1){
var self__ = this;
var _27625__$1 = this;
return (new cljs.core.async.t_cljs$core$async27623(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27624__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27623.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27625){
var self__ = this;
var _27625__$1 = this;
return self__.meta27624;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27623.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27623.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27623.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27623.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27623.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27623.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27623.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27623.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27624","meta27624",-1315395998,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27623.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27623.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27623";

cljs.core.async.t_cljs$core$async27623.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27623");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27623.
 */
cljs.core.async.__GT_t_cljs$core$async27623 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27623(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27624){
return (new cljs.core.async.t_cljs$core$async27623(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27624));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27623(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26509__auto___27743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto___27743,mults,ensure_mult,p){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto___27743,mults,ensure_mult,p){
return (function (state_27697){
var state_val_27698 = (state_27697[(1)]);
if((state_val_27698 === (7))){
var inst_27693 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27699_27744 = state_27697__$1;
(statearr_27699_27744[(2)] = inst_27693);

(statearr_27699_27744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (20))){
var state_27697__$1 = state_27697;
var statearr_27700_27745 = state_27697__$1;
(statearr_27700_27745[(2)] = null);

(statearr_27700_27745[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (1))){
var state_27697__$1 = state_27697;
var statearr_27701_27746 = state_27697__$1;
(statearr_27701_27746[(2)] = null);

(statearr_27701_27746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (24))){
var inst_27676 = (state_27697[(7)]);
var inst_27685 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27676);
var state_27697__$1 = state_27697;
var statearr_27702_27747 = state_27697__$1;
(statearr_27702_27747[(2)] = inst_27685);

(statearr_27702_27747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (4))){
var inst_27628 = (state_27697[(8)]);
var inst_27628__$1 = (state_27697[(2)]);
var inst_27629 = (inst_27628__$1 == null);
var state_27697__$1 = (function (){var statearr_27703 = state_27697;
(statearr_27703[(8)] = inst_27628__$1);

return statearr_27703;
})();
if(cljs.core.truth_(inst_27629)){
var statearr_27704_27748 = state_27697__$1;
(statearr_27704_27748[(1)] = (5));

} else {
var statearr_27705_27749 = state_27697__$1;
(statearr_27705_27749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (15))){
var inst_27670 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27706_27750 = state_27697__$1;
(statearr_27706_27750[(2)] = inst_27670);

(statearr_27706_27750[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (21))){
var inst_27690 = (state_27697[(2)]);
var state_27697__$1 = (function (){var statearr_27707 = state_27697;
(statearr_27707[(9)] = inst_27690);

return statearr_27707;
})();
var statearr_27708_27751 = state_27697__$1;
(statearr_27708_27751[(2)] = null);

(statearr_27708_27751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (13))){
var inst_27652 = (state_27697[(10)]);
var inst_27654 = cljs.core.chunked_seq_QMARK_.call(null,inst_27652);
var state_27697__$1 = state_27697;
if(inst_27654){
var statearr_27709_27752 = state_27697__$1;
(statearr_27709_27752[(1)] = (16));

} else {
var statearr_27710_27753 = state_27697__$1;
(statearr_27710_27753[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (22))){
var inst_27682 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
if(cljs.core.truth_(inst_27682)){
var statearr_27711_27754 = state_27697__$1;
(statearr_27711_27754[(1)] = (23));

} else {
var statearr_27712_27755 = state_27697__$1;
(statearr_27712_27755[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (6))){
var inst_27628 = (state_27697[(8)]);
var inst_27676 = (state_27697[(7)]);
var inst_27678 = (state_27697[(11)]);
var inst_27676__$1 = topic_fn.call(null,inst_27628);
var inst_27677 = cljs.core.deref.call(null,mults);
var inst_27678__$1 = cljs.core.get.call(null,inst_27677,inst_27676__$1);
var state_27697__$1 = (function (){var statearr_27713 = state_27697;
(statearr_27713[(7)] = inst_27676__$1);

(statearr_27713[(11)] = inst_27678__$1);

return statearr_27713;
})();
if(cljs.core.truth_(inst_27678__$1)){
var statearr_27714_27756 = state_27697__$1;
(statearr_27714_27756[(1)] = (19));

} else {
var statearr_27715_27757 = state_27697__$1;
(statearr_27715_27757[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (25))){
var inst_27687 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27716_27758 = state_27697__$1;
(statearr_27716_27758[(2)] = inst_27687);

(statearr_27716_27758[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (17))){
var inst_27652 = (state_27697[(10)]);
var inst_27661 = cljs.core.first.call(null,inst_27652);
var inst_27662 = cljs.core.async.muxch_STAR_.call(null,inst_27661);
var inst_27663 = cljs.core.async.close_BANG_.call(null,inst_27662);
var inst_27664 = cljs.core.next.call(null,inst_27652);
var inst_27638 = inst_27664;
var inst_27639 = null;
var inst_27640 = (0);
var inst_27641 = (0);
var state_27697__$1 = (function (){var statearr_27717 = state_27697;
(statearr_27717[(12)] = inst_27663);

(statearr_27717[(13)] = inst_27639);

(statearr_27717[(14)] = inst_27640);

(statearr_27717[(15)] = inst_27641);

(statearr_27717[(16)] = inst_27638);

return statearr_27717;
})();
var statearr_27718_27759 = state_27697__$1;
(statearr_27718_27759[(2)] = null);

(statearr_27718_27759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (3))){
var inst_27695 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27697__$1,inst_27695);
} else {
if((state_val_27698 === (12))){
var inst_27672 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27719_27760 = state_27697__$1;
(statearr_27719_27760[(2)] = inst_27672);

(statearr_27719_27760[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (2))){
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27697__$1,(4),ch);
} else {
if((state_val_27698 === (23))){
var state_27697__$1 = state_27697;
var statearr_27720_27761 = state_27697__$1;
(statearr_27720_27761[(2)] = null);

(statearr_27720_27761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (19))){
var inst_27628 = (state_27697[(8)]);
var inst_27678 = (state_27697[(11)]);
var inst_27680 = cljs.core.async.muxch_STAR_.call(null,inst_27678);
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27697__$1,(22),inst_27680,inst_27628);
} else {
if((state_val_27698 === (11))){
var inst_27652 = (state_27697[(10)]);
var inst_27638 = (state_27697[(16)]);
var inst_27652__$1 = cljs.core.seq.call(null,inst_27638);
var state_27697__$1 = (function (){var statearr_27721 = state_27697;
(statearr_27721[(10)] = inst_27652__$1);

return statearr_27721;
})();
if(inst_27652__$1){
var statearr_27722_27762 = state_27697__$1;
(statearr_27722_27762[(1)] = (13));

} else {
var statearr_27723_27763 = state_27697__$1;
(statearr_27723_27763[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (9))){
var inst_27674 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27724_27764 = state_27697__$1;
(statearr_27724_27764[(2)] = inst_27674);

(statearr_27724_27764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (5))){
var inst_27635 = cljs.core.deref.call(null,mults);
var inst_27636 = cljs.core.vals.call(null,inst_27635);
var inst_27637 = cljs.core.seq.call(null,inst_27636);
var inst_27638 = inst_27637;
var inst_27639 = null;
var inst_27640 = (0);
var inst_27641 = (0);
var state_27697__$1 = (function (){var statearr_27725 = state_27697;
(statearr_27725[(13)] = inst_27639);

(statearr_27725[(14)] = inst_27640);

(statearr_27725[(15)] = inst_27641);

(statearr_27725[(16)] = inst_27638);

return statearr_27725;
})();
var statearr_27726_27765 = state_27697__$1;
(statearr_27726_27765[(2)] = null);

(statearr_27726_27765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (14))){
var state_27697__$1 = state_27697;
var statearr_27730_27766 = state_27697__$1;
(statearr_27730_27766[(2)] = null);

(statearr_27730_27766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (16))){
var inst_27652 = (state_27697[(10)]);
var inst_27656 = cljs.core.chunk_first.call(null,inst_27652);
var inst_27657 = cljs.core.chunk_rest.call(null,inst_27652);
var inst_27658 = cljs.core.count.call(null,inst_27656);
var inst_27638 = inst_27657;
var inst_27639 = inst_27656;
var inst_27640 = inst_27658;
var inst_27641 = (0);
var state_27697__$1 = (function (){var statearr_27731 = state_27697;
(statearr_27731[(13)] = inst_27639);

(statearr_27731[(14)] = inst_27640);

(statearr_27731[(15)] = inst_27641);

(statearr_27731[(16)] = inst_27638);

return statearr_27731;
})();
var statearr_27732_27767 = state_27697__$1;
(statearr_27732_27767[(2)] = null);

(statearr_27732_27767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (10))){
var inst_27639 = (state_27697[(13)]);
var inst_27640 = (state_27697[(14)]);
var inst_27641 = (state_27697[(15)]);
var inst_27638 = (state_27697[(16)]);
var inst_27646 = cljs.core._nth.call(null,inst_27639,inst_27641);
var inst_27647 = cljs.core.async.muxch_STAR_.call(null,inst_27646);
var inst_27648 = cljs.core.async.close_BANG_.call(null,inst_27647);
var inst_27649 = (inst_27641 + (1));
var tmp27727 = inst_27639;
var tmp27728 = inst_27640;
var tmp27729 = inst_27638;
var inst_27638__$1 = tmp27729;
var inst_27639__$1 = tmp27727;
var inst_27640__$1 = tmp27728;
var inst_27641__$1 = inst_27649;
var state_27697__$1 = (function (){var statearr_27733 = state_27697;
(statearr_27733[(17)] = inst_27648);

(statearr_27733[(13)] = inst_27639__$1);

(statearr_27733[(14)] = inst_27640__$1);

(statearr_27733[(15)] = inst_27641__$1);

(statearr_27733[(16)] = inst_27638__$1);

return statearr_27733;
})();
var statearr_27734_27768 = state_27697__$1;
(statearr_27734_27768[(2)] = null);

(statearr_27734_27768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (18))){
var inst_27667 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27735_27769 = state_27697__$1;
(statearr_27735_27769[(2)] = inst_27667);

(statearr_27735_27769[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (8))){
var inst_27640 = (state_27697[(14)]);
var inst_27641 = (state_27697[(15)]);
var inst_27643 = (inst_27641 < inst_27640);
var inst_27644 = inst_27643;
var state_27697__$1 = state_27697;
if(cljs.core.truth_(inst_27644)){
var statearr_27736_27770 = state_27697__$1;
(statearr_27736_27770[(1)] = (10));

} else {
var statearr_27737_27771 = state_27697__$1;
(statearr_27737_27771[(1)] = (11));

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
});})(c__26509__auto___27743,mults,ensure_mult,p))
;
return ((function (switch__26419__auto__,c__26509__auto___27743,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26420__auto__ = null;
var cljs$core$async$state_machine__26420__auto____0 = (function (){
var statearr_27738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27738[(0)] = cljs$core$async$state_machine__26420__auto__);

(statearr_27738[(1)] = (1));

return statearr_27738;
});
var cljs$core$async$state_machine__26420__auto____1 = (function (state_27697){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_27697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e27739){if((e27739 instanceof Object)){
var ex__26423__auto__ = e27739;
var statearr_27740_27772 = state_27697;
(statearr_27740_27772[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27773 = state_27697;
state_27697 = G__27773;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
cljs$core$async$state_machine__26420__auto__ = function(state_27697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26420__auto____1.call(this,state_27697);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26420__auto____0;
cljs$core$async$state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26420__auto____1;
return cljs$core$async$state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto___27743,mults,ensure_mult,p))
})();
var state__26511__auto__ = (function (){var statearr_27741 = f__26510__auto__.call(null);
(statearr_27741[(6)] = c__26509__auto___27743);

return statearr_27741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto___27743,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__27775 = arguments.length;
switch (G__27775) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__27778 = arguments.length;
switch (G__27778) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__27781 = arguments.length;
switch (G__27781) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26509__auto___27848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto___27848,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto___27848,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27820){
var state_val_27821 = (state_27820[(1)]);
if((state_val_27821 === (7))){
var state_27820__$1 = state_27820;
var statearr_27822_27849 = state_27820__$1;
(statearr_27822_27849[(2)] = null);

(statearr_27822_27849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (1))){
var state_27820__$1 = state_27820;
var statearr_27823_27850 = state_27820__$1;
(statearr_27823_27850[(2)] = null);

(statearr_27823_27850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (4))){
var inst_27784 = (state_27820[(7)]);
var inst_27786 = (inst_27784 < cnt);
var state_27820__$1 = state_27820;
if(cljs.core.truth_(inst_27786)){
var statearr_27824_27851 = state_27820__$1;
(statearr_27824_27851[(1)] = (6));

} else {
var statearr_27825_27852 = state_27820__$1;
(statearr_27825_27852[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (15))){
var inst_27816 = (state_27820[(2)]);
var state_27820__$1 = state_27820;
var statearr_27826_27853 = state_27820__$1;
(statearr_27826_27853[(2)] = inst_27816);

(statearr_27826_27853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (13))){
var inst_27809 = cljs.core.async.close_BANG_.call(null,out);
var state_27820__$1 = state_27820;
var statearr_27827_27854 = state_27820__$1;
(statearr_27827_27854[(2)] = inst_27809);

(statearr_27827_27854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (6))){
var state_27820__$1 = state_27820;
var statearr_27828_27855 = state_27820__$1;
(statearr_27828_27855[(2)] = null);

(statearr_27828_27855[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (3))){
var inst_27818 = (state_27820[(2)]);
var state_27820__$1 = state_27820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27820__$1,inst_27818);
} else {
if((state_val_27821 === (12))){
var inst_27806 = (state_27820[(8)]);
var inst_27806__$1 = (state_27820[(2)]);
var inst_27807 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27806__$1);
var state_27820__$1 = (function (){var statearr_27829 = state_27820;
(statearr_27829[(8)] = inst_27806__$1);

return statearr_27829;
})();
if(cljs.core.truth_(inst_27807)){
var statearr_27830_27856 = state_27820__$1;
(statearr_27830_27856[(1)] = (13));

} else {
var statearr_27831_27857 = state_27820__$1;
(statearr_27831_27857[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (2))){
var inst_27783 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27784 = (0);
var state_27820__$1 = (function (){var statearr_27832 = state_27820;
(statearr_27832[(7)] = inst_27784);

(statearr_27832[(9)] = inst_27783);

return statearr_27832;
})();
var statearr_27833_27858 = state_27820__$1;
(statearr_27833_27858[(2)] = null);

(statearr_27833_27858[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (11))){
var inst_27784 = (state_27820[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27820,(10),Object,null,(9));
var inst_27793 = chs__$1.call(null,inst_27784);
var inst_27794 = done.call(null,inst_27784);
var inst_27795 = cljs.core.async.take_BANG_.call(null,inst_27793,inst_27794);
var state_27820__$1 = state_27820;
var statearr_27834_27859 = state_27820__$1;
(statearr_27834_27859[(2)] = inst_27795);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27820__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (9))){
var inst_27784 = (state_27820[(7)]);
var inst_27797 = (state_27820[(2)]);
var inst_27798 = (inst_27784 + (1));
var inst_27784__$1 = inst_27798;
var state_27820__$1 = (function (){var statearr_27835 = state_27820;
(statearr_27835[(10)] = inst_27797);

(statearr_27835[(7)] = inst_27784__$1);

return statearr_27835;
})();
var statearr_27836_27860 = state_27820__$1;
(statearr_27836_27860[(2)] = null);

(statearr_27836_27860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (5))){
var inst_27804 = (state_27820[(2)]);
var state_27820__$1 = (function (){var statearr_27837 = state_27820;
(statearr_27837[(11)] = inst_27804);

return statearr_27837;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27820__$1,(12),dchan);
} else {
if((state_val_27821 === (14))){
var inst_27806 = (state_27820[(8)]);
var inst_27811 = cljs.core.apply.call(null,f,inst_27806);
var state_27820__$1 = state_27820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27820__$1,(16),out,inst_27811);
} else {
if((state_val_27821 === (16))){
var inst_27813 = (state_27820[(2)]);
var state_27820__$1 = (function (){var statearr_27838 = state_27820;
(statearr_27838[(12)] = inst_27813);

return statearr_27838;
})();
var statearr_27839_27861 = state_27820__$1;
(statearr_27839_27861[(2)] = null);

(statearr_27839_27861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (10))){
var inst_27788 = (state_27820[(2)]);
var inst_27789 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27820__$1 = (function (){var statearr_27840 = state_27820;
(statearr_27840[(13)] = inst_27788);

return statearr_27840;
})();
var statearr_27841_27862 = state_27820__$1;
(statearr_27841_27862[(2)] = inst_27789);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27820__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (8))){
var inst_27802 = (state_27820[(2)]);
var state_27820__$1 = state_27820;
var statearr_27842_27863 = state_27820__$1;
(statearr_27842_27863[(2)] = inst_27802);

(statearr_27842_27863[(1)] = (5));


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
});})(c__26509__auto___27848,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26419__auto__,c__26509__auto___27848,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26420__auto__ = null;
var cljs$core$async$state_machine__26420__auto____0 = (function (){
var statearr_27843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27843[(0)] = cljs$core$async$state_machine__26420__auto__);

(statearr_27843[(1)] = (1));

return statearr_27843;
});
var cljs$core$async$state_machine__26420__auto____1 = (function (state_27820){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_27820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e27844){if((e27844 instanceof Object)){
var ex__26423__auto__ = e27844;
var statearr_27845_27864 = state_27820;
(statearr_27845_27864[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27865 = state_27820;
state_27820 = G__27865;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
cljs$core$async$state_machine__26420__auto__ = function(state_27820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26420__auto____1.call(this,state_27820);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26420__auto____0;
cljs$core$async$state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26420__auto____1;
return cljs$core$async$state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto___27848,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26511__auto__ = (function (){var statearr_27846 = f__26510__auto__.call(null);
(statearr_27846[(6)] = c__26509__auto___27848);

return statearr_27846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto___27848,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__27868 = arguments.length;
switch (G__27868) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26509__auto___27922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto___27922,out){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto___27922,out){
return (function (state_27900){
var state_val_27901 = (state_27900[(1)]);
if((state_val_27901 === (7))){
var inst_27879 = (state_27900[(7)]);
var inst_27880 = (state_27900[(8)]);
var inst_27879__$1 = (state_27900[(2)]);
var inst_27880__$1 = cljs.core.nth.call(null,inst_27879__$1,(0),null);
var inst_27881 = cljs.core.nth.call(null,inst_27879__$1,(1),null);
var inst_27882 = (inst_27880__$1 == null);
var state_27900__$1 = (function (){var statearr_27902 = state_27900;
(statearr_27902[(7)] = inst_27879__$1);

(statearr_27902[(9)] = inst_27881);

(statearr_27902[(8)] = inst_27880__$1);

return statearr_27902;
})();
if(cljs.core.truth_(inst_27882)){
var statearr_27903_27923 = state_27900__$1;
(statearr_27903_27923[(1)] = (8));

} else {
var statearr_27904_27924 = state_27900__$1;
(statearr_27904_27924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (1))){
var inst_27869 = cljs.core.vec.call(null,chs);
var inst_27870 = inst_27869;
var state_27900__$1 = (function (){var statearr_27905 = state_27900;
(statearr_27905[(10)] = inst_27870);

return statearr_27905;
})();
var statearr_27906_27925 = state_27900__$1;
(statearr_27906_27925[(2)] = null);

(statearr_27906_27925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (4))){
var inst_27870 = (state_27900[(10)]);
var state_27900__$1 = state_27900;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27900__$1,(7),inst_27870);
} else {
if((state_val_27901 === (6))){
var inst_27896 = (state_27900[(2)]);
var state_27900__$1 = state_27900;
var statearr_27907_27926 = state_27900__$1;
(statearr_27907_27926[(2)] = inst_27896);

(statearr_27907_27926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (3))){
var inst_27898 = (state_27900[(2)]);
var state_27900__$1 = state_27900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27900__$1,inst_27898);
} else {
if((state_val_27901 === (2))){
var inst_27870 = (state_27900[(10)]);
var inst_27872 = cljs.core.count.call(null,inst_27870);
var inst_27873 = (inst_27872 > (0));
var state_27900__$1 = state_27900;
if(cljs.core.truth_(inst_27873)){
var statearr_27909_27927 = state_27900__$1;
(statearr_27909_27927[(1)] = (4));

} else {
var statearr_27910_27928 = state_27900__$1;
(statearr_27910_27928[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (11))){
var inst_27870 = (state_27900[(10)]);
var inst_27889 = (state_27900[(2)]);
var tmp27908 = inst_27870;
var inst_27870__$1 = tmp27908;
var state_27900__$1 = (function (){var statearr_27911 = state_27900;
(statearr_27911[(11)] = inst_27889);

(statearr_27911[(10)] = inst_27870__$1);

return statearr_27911;
})();
var statearr_27912_27929 = state_27900__$1;
(statearr_27912_27929[(2)] = null);

(statearr_27912_27929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (9))){
var inst_27880 = (state_27900[(8)]);
var state_27900__$1 = state_27900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27900__$1,(11),out,inst_27880);
} else {
if((state_val_27901 === (5))){
var inst_27894 = cljs.core.async.close_BANG_.call(null,out);
var state_27900__$1 = state_27900;
var statearr_27913_27930 = state_27900__$1;
(statearr_27913_27930[(2)] = inst_27894);

(statearr_27913_27930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (10))){
var inst_27892 = (state_27900[(2)]);
var state_27900__$1 = state_27900;
var statearr_27914_27931 = state_27900__$1;
(statearr_27914_27931[(2)] = inst_27892);

(statearr_27914_27931[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27901 === (8))){
var inst_27879 = (state_27900[(7)]);
var inst_27881 = (state_27900[(9)]);
var inst_27870 = (state_27900[(10)]);
var inst_27880 = (state_27900[(8)]);
var inst_27884 = (function (){var cs = inst_27870;
var vec__27875 = inst_27879;
var v = inst_27880;
var c = inst_27881;
return ((function (cs,vec__27875,v,c,inst_27879,inst_27881,inst_27870,inst_27880,state_val_27901,c__26509__auto___27922,out){
return (function (p1__27866_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27866_SHARP_);
});
;})(cs,vec__27875,v,c,inst_27879,inst_27881,inst_27870,inst_27880,state_val_27901,c__26509__auto___27922,out))
})();
var inst_27885 = cljs.core.filterv.call(null,inst_27884,inst_27870);
var inst_27870__$1 = inst_27885;
var state_27900__$1 = (function (){var statearr_27915 = state_27900;
(statearr_27915[(10)] = inst_27870__$1);

return statearr_27915;
})();
var statearr_27916_27932 = state_27900__$1;
(statearr_27916_27932[(2)] = null);

(statearr_27916_27932[(1)] = (2));


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
});})(c__26509__auto___27922,out))
;
return ((function (switch__26419__auto__,c__26509__auto___27922,out){
return (function() {
var cljs$core$async$state_machine__26420__auto__ = null;
var cljs$core$async$state_machine__26420__auto____0 = (function (){
var statearr_27917 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27917[(0)] = cljs$core$async$state_machine__26420__auto__);

(statearr_27917[(1)] = (1));

return statearr_27917;
});
var cljs$core$async$state_machine__26420__auto____1 = (function (state_27900){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_27900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e27918){if((e27918 instanceof Object)){
var ex__26423__auto__ = e27918;
var statearr_27919_27933 = state_27900;
(statearr_27919_27933[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27934 = state_27900;
state_27900 = G__27934;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
cljs$core$async$state_machine__26420__auto__ = function(state_27900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26420__auto____1.call(this,state_27900);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26420__auto____0;
cljs$core$async$state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26420__auto____1;
return cljs$core$async$state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto___27922,out))
})();
var state__26511__auto__ = (function (){var statearr_27920 = f__26510__auto__.call(null);
(statearr_27920[(6)] = c__26509__auto___27922);

return statearr_27920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto___27922,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__27936 = arguments.length;
switch (G__27936) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26509__auto___27981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto___27981,out){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto___27981,out){
return (function (state_27960){
var state_val_27961 = (state_27960[(1)]);
if((state_val_27961 === (7))){
var inst_27942 = (state_27960[(7)]);
var inst_27942__$1 = (state_27960[(2)]);
var inst_27943 = (inst_27942__$1 == null);
var inst_27944 = cljs.core.not.call(null,inst_27943);
var state_27960__$1 = (function (){var statearr_27962 = state_27960;
(statearr_27962[(7)] = inst_27942__$1);

return statearr_27962;
})();
if(inst_27944){
var statearr_27963_27982 = state_27960__$1;
(statearr_27963_27982[(1)] = (8));

} else {
var statearr_27964_27983 = state_27960__$1;
(statearr_27964_27983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (1))){
var inst_27937 = (0);
var state_27960__$1 = (function (){var statearr_27965 = state_27960;
(statearr_27965[(8)] = inst_27937);

return statearr_27965;
})();
var statearr_27966_27984 = state_27960__$1;
(statearr_27966_27984[(2)] = null);

(statearr_27966_27984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (4))){
var state_27960__$1 = state_27960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27960__$1,(7),ch);
} else {
if((state_val_27961 === (6))){
var inst_27955 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_27967_27985 = state_27960__$1;
(statearr_27967_27985[(2)] = inst_27955);

(statearr_27967_27985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (3))){
var inst_27957 = (state_27960[(2)]);
var inst_27958 = cljs.core.async.close_BANG_.call(null,out);
var state_27960__$1 = (function (){var statearr_27968 = state_27960;
(statearr_27968[(9)] = inst_27957);

return statearr_27968;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27960__$1,inst_27958);
} else {
if((state_val_27961 === (2))){
var inst_27937 = (state_27960[(8)]);
var inst_27939 = (inst_27937 < n);
var state_27960__$1 = state_27960;
if(cljs.core.truth_(inst_27939)){
var statearr_27969_27986 = state_27960__$1;
(statearr_27969_27986[(1)] = (4));

} else {
var statearr_27970_27987 = state_27960__$1;
(statearr_27970_27987[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (11))){
var inst_27937 = (state_27960[(8)]);
var inst_27947 = (state_27960[(2)]);
var inst_27948 = (inst_27937 + (1));
var inst_27937__$1 = inst_27948;
var state_27960__$1 = (function (){var statearr_27971 = state_27960;
(statearr_27971[(8)] = inst_27937__$1);

(statearr_27971[(10)] = inst_27947);

return statearr_27971;
})();
var statearr_27972_27988 = state_27960__$1;
(statearr_27972_27988[(2)] = null);

(statearr_27972_27988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (9))){
var state_27960__$1 = state_27960;
var statearr_27973_27989 = state_27960__$1;
(statearr_27973_27989[(2)] = null);

(statearr_27973_27989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (5))){
var state_27960__$1 = state_27960;
var statearr_27974_27990 = state_27960__$1;
(statearr_27974_27990[(2)] = null);

(statearr_27974_27990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (10))){
var inst_27952 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_27975_27991 = state_27960__$1;
(statearr_27975_27991[(2)] = inst_27952);

(statearr_27975_27991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (8))){
var inst_27942 = (state_27960[(7)]);
var state_27960__$1 = state_27960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27960__$1,(11),out,inst_27942);
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
});})(c__26509__auto___27981,out))
;
return ((function (switch__26419__auto__,c__26509__auto___27981,out){
return (function() {
var cljs$core$async$state_machine__26420__auto__ = null;
var cljs$core$async$state_machine__26420__auto____0 = (function (){
var statearr_27976 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27976[(0)] = cljs$core$async$state_machine__26420__auto__);

(statearr_27976[(1)] = (1));

return statearr_27976;
});
var cljs$core$async$state_machine__26420__auto____1 = (function (state_27960){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_27960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e27977){if((e27977 instanceof Object)){
var ex__26423__auto__ = e27977;
var statearr_27978_27992 = state_27960;
(statearr_27978_27992[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27993 = state_27960;
state_27960 = G__27993;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
cljs$core$async$state_machine__26420__auto__ = function(state_27960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26420__auto____1.call(this,state_27960);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26420__auto____0;
cljs$core$async$state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26420__auto____1;
return cljs$core$async$state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto___27981,out))
})();
var state__26511__auto__ = (function (){var statearr_27979 = f__26510__auto__.call(null);
(statearr_27979[(6)] = c__26509__auto___27981);

return statearr_27979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto___27981,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27995 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27995 = (function (f,ch,meta27996){
this.f = f;
this.ch = ch;
this.meta27996 = meta27996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27997,meta27996__$1){
var self__ = this;
var _27997__$1 = this;
return (new cljs.core.async.t_cljs$core$async27995(self__.f,self__.ch,meta27996__$1));
});

cljs.core.async.t_cljs$core$async27995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27997){
var self__ = this;
var _27997__$1 = this;
return self__.meta27996;
});

cljs.core.async.t_cljs$core$async27995.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27995.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27995.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27995.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27995.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27998 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27998 = (function (f,ch,meta27996,_,fn1,meta27999){
this.f = f;
this.ch = ch;
this.meta27996 = meta27996;
this._ = _;
this.fn1 = fn1;
this.meta27999 = meta27999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28000,meta27999__$1){
var self__ = this;
var _28000__$1 = this;
return (new cljs.core.async.t_cljs$core$async27998(self__.f,self__.ch,self__.meta27996,self__._,self__.fn1,meta27999__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27998.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28000){
var self__ = this;
var _28000__$1 = this;
return self__.meta27999;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27998.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27998.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27998.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27998.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27994_SHARP_){
return f1.call(null,(((p1__27994_SHARP_ == null))?null:self__.f.call(null,p1__27994_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27998.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27996","meta27996",-664636684,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27995","cljs.core.async/t_cljs$core$async27995",-1272761173,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27999","meta27999",833967561,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27998.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27998";

cljs.core.async.t_cljs$core$async27998.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27998");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27998.
 */
cljs.core.async.__GT_t_cljs$core$async27998 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27998(f__$1,ch__$1,meta27996__$1,___$2,fn1__$1,meta27999){
return (new cljs.core.async.t_cljs$core$async27998(f__$1,ch__$1,meta27996__$1,___$2,fn1__$1,meta27999));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27998(self__.f,self__.ch,self__.meta27996,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27995.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27995.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27996","meta27996",-664636684,null)], null);
});

cljs.core.async.t_cljs$core$async27995.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27995";

cljs.core.async.t_cljs$core$async27995.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27995");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27995.
 */
cljs.core.async.__GT_t_cljs$core$async27995 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27995(f__$1,ch__$1,meta27996){
return (new cljs.core.async.t_cljs$core$async27995(f__$1,ch__$1,meta27996));
});

}

return (new cljs.core.async.t_cljs$core$async27995(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28001 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28001 = (function (f,ch,meta28002){
this.f = f;
this.ch = ch;
this.meta28002 = meta28002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28003,meta28002__$1){
var self__ = this;
var _28003__$1 = this;
return (new cljs.core.async.t_cljs$core$async28001(self__.f,self__.ch,meta28002__$1));
});

cljs.core.async.t_cljs$core$async28001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28003){
var self__ = this;
var _28003__$1 = this;
return self__.meta28002;
});

cljs.core.async.t_cljs$core$async28001.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28001.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28001.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28001.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28001.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28001.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28002","meta28002",-1765801905,null)], null);
});

cljs.core.async.t_cljs$core$async28001.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28001";

cljs.core.async.t_cljs$core$async28001.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28001");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28001.
 */
cljs.core.async.__GT_t_cljs$core$async28001 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28001(f__$1,ch__$1,meta28002){
return (new cljs.core.async.t_cljs$core$async28001(f__$1,ch__$1,meta28002));
});

}

return (new cljs.core.async.t_cljs$core$async28001(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28004 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28004 = (function (p,ch,meta28005){
this.p = p;
this.ch = ch;
this.meta28005 = meta28005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28006,meta28005__$1){
var self__ = this;
var _28006__$1 = this;
return (new cljs.core.async.t_cljs$core$async28004(self__.p,self__.ch,meta28005__$1));
});

cljs.core.async.t_cljs$core$async28004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28006){
var self__ = this;
var _28006__$1 = this;
return self__.meta28005;
});

cljs.core.async.t_cljs$core$async28004.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28004.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28004.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28004.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28004.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28004.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28004.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28004.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28005","meta28005",-1339173475,null)], null);
});

cljs.core.async.t_cljs$core$async28004.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28004.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28004";

cljs.core.async.t_cljs$core$async28004.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28004");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28004.
 */
cljs.core.async.__GT_t_cljs$core$async28004 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28004(p__$1,ch__$1,meta28005){
return (new cljs.core.async.t_cljs$core$async28004(p__$1,ch__$1,meta28005));
});

}

return (new cljs.core.async.t_cljs$core$async28004(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28008 = arguments.length;
switch (G__28008) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26509__auto___28048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto___28048,out){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto___28048,out){
return (function (state_28029){
var state_val_28030 = (state_28029[(1)]);
if((state_val_28030 === (7))){
var inst_28025 = (state_28029[(2)]);
var state_28029__$1 = state_28029;
var statearr_28031_28049 = state_28029__$1;
(statearr_28031_28049[(2)] = inst_28025);

(statearr_28031_28049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28030 === (1))){
var state_28029__$1 = state_28029;
var statearr_28032_28050 = state_28029__$1;
(statearr_28032_28050[(2)] = null);

(statearr_28032_28050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28030 === (4))){
var inst_28011 = (state_28029[(7)]);
var inst_28011__$1 = (state_28029[(2)]);
var inst_28012 = (inst_28011__$1 == null);
var state_28029__$1 = (function (){var statearr_28033 = state_28029;
(statearr_28033[(7)] = inst_28011__$1);

return statearr_28033;
})();
if(cljs.core.truth_(inst_28012)){
var statearr_28034_28051 = state_28029__$1;
(statearr_28034_28051[(1)] = (5));

} else {
var statearr_28035_28052 = state_28029__$1;
(statearr_28035_28052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28030 === (6))){
var inst_28011 = (state_28029[(7)]);
var inst_28016 = p.call(null,inst_28011);
var state_28029__$1 = state_28029;
if(cljs.core.truth_(inst_28016)){
var statearr_28036_28053 = state_28029__$1;
(statearr_28036_28053[(1)] = (8));

} else {
var statearr_28037_28054 = state_28029__$1;
(statearr_28037_28054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28030 === (3))){
var inst_28027 = (state_28029[(2)]);
var state_28029__$1 = state_28029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28029__$1,inst_28027);
} else {
if((state_val_28030 === (2))){
var state_28029__$1 = state_28029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28029__$1,(4),ch);
} else {
if((state_val_28030 === (11))){
var inst_28019 = (state_28029[(2)]);
var state_28029__$1 = state_28029;
var statearr_28038_28055 = state_28029__$1;
(statearr_28038_28055[(2)] = inst_28019);

(statearr_28038_28055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28030 === (9))){
var state_28029__$1 = state_28029;
var statearr_28039_28056 = state_28029__$1;
(statearr_28039_28056[(2)] = null);

(statearr_28039_28056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28030 === (5))){
var inst_28014 = cljs.core.async.close_BANG_.call(null,out);
var state_28029__$1 = state_28029;
var statearr_28040_28057 = state_28029__$1;
(statearr_28040_28057[(2)] = inst_28014);

(statearr_28040_28057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28030 === (10))){
var inst_28022 = (state_28029[(2)]);
var state_28029__$1 = (function (){var statearr_28041 = state_28029;
(statearr_28041[(8)] = inst_28022);

return statearr_28041;
})();
var statearr_28042_28058 = state_28029__$1;
(statearr_28042_28058[(2)] = null);

(statearr_28042_28058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28030 === (8))){
var inst_28011 = (state_28029[(7)]);
var state_28029__$1 = state_28029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28029__$1,(11),out,inst_28011);
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
});})(c__26509__auto___28048,out))
;
return ((function (switch__26419__auto__,c__26509__auto___28048,out){
return (function() {
var cljs$core$async$state_machine__26420__auto__ = null;
var cljs$core$async$state_machine__26420__auto____0 = (function (){
var statearr_28043 = [null,null,null,null,null,null,null,null,null];
(statearr_28043[(0)] = cljs$core$async$state_machine__26420__auto__);

(statearr_28043[(1)] = (1));

return statearr_28043;
});
var cljs$core$async$state_machine__26420__auto____1 = (function (state_28029){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_28029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e28044){if((e28044 instanceof Object)){
var ex__26423__auto__ = e28044;
var statearr_28045_28059 = state_28029;
(statearr_28045_28059[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28060 = state_28029;
state_28029 = G__28060;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
cljs$core$async$state_machine__26420__auto__ = function(state_28029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26420__auto____1.call(this,state_28029);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26420__auto____0;
cljs$core$async$state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26420__auto____1;
return cljs$core$async$state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto___28048,out))
})();
var state__26511__auto__ = (function (){var statearr_28046 = f__26510__auto__.call(null);
(statearr_28046[(6)] = c__26509__auto___28048);

return statearr_28046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto___28048,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28062 = arguments.length;
switch (G__28062) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26509__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto__){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto__){
return (function (state_28125){
var state_val_28126 = (state_28125[(1)]);
if((state_val_28126 === (7))){
var inst_28121 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
var statearr_28127_28165 = state_28125__$1;
(statearr_28127_28165[(2)] = inst_28121);

(statearr_28127_28165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (20))){
var inst_28091 = (state_28125[(7)]);
var inst_28102 = (state_28125[(2)]);
var inst_28103 = cljs.core.next.call(null,inst_28091);
var inst_28077 = inst_28103;
var inst_28078 = null;
var inst_28079 = (0);
var inst_28080 = (0);
var state_28125__$1 = (function (){var statearr_28128 = state_28125;
(statearr_28128[(8)] = inst_28102);

(statearr_28128[(9)] = inst_28080);

(statearr_28128[(10)] = inst_28079);

(statearr_28128[(11)] = inst_28077);

(statearr_28128[(12)] = inst_28078);

return statearr_28128;
})();
var statearr_28129_28166 = state_28125__$1;
(statearr_28129_28166[(2)] = null);

(statearr_28129_28166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (1))){
var state_28125__$1 = state_28125;
var statearr_28130_28167 = state_28125__$1;
(statearr_28130_28167[(2)] = null);

(statearr_28130_28167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (4))){
var inst_28066 = (state_28125[(13)]);
var inst_28066__$1 = (state_28125[(2)]);
var inst_28067 = (inst_28066__$1 == null);
var state_28125__$1 = (function (){var statearr_28131 = state_28125;
(statearr_28131[(13)] = inst_28066__$1);

return statearr_28131;
})();
if(cljs.core.truth_(inst_28067)){
var statearr_28132_28168 = state_28125__$1;
(statearr_28132_28168[(1)] = (5));

} else {
var statearr_28133_28169 = state_28125__$1;
(statearr_28133_28169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (15))){
var state_28125__$1 = state_28125;
var statearr_28137_28170 = state_28125__$1;
(statearr_28137_28170[(2)] = null);

(statearr_28137_28170[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (21))){
var state_28125__$1 = state_28125;
var statearr_28138_28171 = state_28125__$1;
(statearr_28138_28171[(2)] = null);

(statearr_28138_28171[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (13))){
var inst_28080 = (state_28125[(9)]);
var inst_28079 = (state_28125[(10)]);
var inst_28077 = (state_28125[(11)]);
var inst_28078 = (state_28125[(12)]);
var inst_28087 = (state_28125[(2)]);
var inst_28088 = (inst_28080 + (1));
var tmp28134 = inst_28079;
var tmp28135 = inst_28077;
var tmp28136 = inst_28078;
var inst_28077__$1 = tmp28135;
var inst_28078__$1 = tmp28136;
var inst_28079__$1 = tmp28134;
var inst_28080__$1 = inst_28088;
var state_28125__$1 = (function (){var statearr_28139 = state_28125;
(statearr_28139[(9)] = inst_28080__$1);

(statearr_28139[(10)] = inst_28079__$1);

(statearr_28139[(14)] = inst_28087);

(statearr_28139[(11)] = inst_28077__$1);

(statearr_28139[(12)] = inst_28078__$1);

return statearr_28139;
})();
var statearr_28140_28172 = state_28125__$1;
(statearr_28140_28172[(2)] = null);

(statearr_28140_28172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (22))){
var state_28125__$1 = state_28125;
var statearr_28141_28173 = state_28125__$1;
(statearr_28141_28173[(2)] = null);

(statearr_28141_28173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (6))){
var inst_28066 = (state_28125[(13)]);
var inst_28075 = f.call(null,inst_28066);
var inst_28076 = cljs.core.seq.call(null,inst_28075);
var inst_28077 = inst_28076;
var inst_28078 = null;
var inst_28079 = (0);
var inst_28080 = (0);
var state_28125__$1 = (function (){var statearr_28142 = state_28125;
(statearr_28142[(9)] = inst_28080);

(statearr_28142[(10)] = inst_28079);

(statearr_28142[(11)] = inst_28077);

(statearr_28142[(12)] = inst_28078);

return statearr_28142;
})();
var statearr_28143_28174 = state_28125__$1;
(statearr_28143_28174[(2)] = null);

(statearr_28143_28174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (17))){
var inst_28091 = (state_28125[(7)]);
var inst_28095 = cljs.core.chunk_first.call(null,inst_28091);
var inst_28096 = cljs.core.chunk_rest.call(null,inst_28091);
var inst_28097 = cljs.core.count.call(null,inst_28095);
var inst_28077 = inst_28096;
var inst_28078 = inst_28095;
var inst_28079 = inst_28097;
var inst_28080 = (0);
var state_28125__$1 = (function (){var statearr_28144 = state_28125;
(statearr_28144[(9)] = inst_28080);

(statearr_28144[(10)] = inst_28079);

(statearr_28144[(11)] = inst_28077);

(statearr_28144[(12)] = inst_28078);

return statearr_28144;
})();
var statearr_28145_28175 = state_28125__$1;
(statearr_28145_28175[(2)] = null);

(statearr_28145_28175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (3))){
var inst_28123 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28125__$1,inst_28123);
} else {
if((state_val_28126 === (12))){
var inst_28111 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
var statearr_28146_28176 = state_28125__$1;
(statearr_28146_28176[(2)] = inst_28111);

(statearr_28146_28176[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (2))){
var state_28125__$1 = state_28125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28125__$1,(4),in$);
} else {
if((state_val_28126 === (23))){
var inst_28119 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
var statearr_28147_28177 = state_28125__$1;
(statearr_28147_28177[(2)] = inst_28119);

(statearr_28147_28177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (19))){
var inst_28106 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
var statearr_28148_28178 = state_28125__$1;
(statearr_28148_28178[(2)] = inst_28106);

(statearr_28148_28178[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (11))){
var inst_28091 = (state_28125[(7)]);
var inst_28077 = (state_28125[(11)]);
var inst_28091__$1 = cljs.core.seq.call(null,inst_28077);
var state_28125__$1 = (function (){var statearr_28149 = state_28125;
(statearr_28149[(7)] = inst_28091__$1);

return statearr_28149;
})();
if(inst_28091__$1){
var statearr_28150_28179 = state_28125__$1;
(statearr_28150_28179[(1)] = (14));

} else {
var statearr_28151_28180 = state_28125__$1;
(statearr_28151_28180[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (9))){
var inst_28113 = (state_28125[(2)]);
var inst_28114 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28125__$1 = (function (){var statearr_28152 = state_28125;
(statearr_28152[(15)] = inst_28113);

return statearr_28152;
})();
if(cljs.core.truth_(inst_28114)){
var statearr_28153_28181 = state_28125__$1;
(statearr_28153_28181[(1)] = (21));

} else {
var statearr_28154_28182 = state_28125__$1;
(statearr_28154_28182[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (5))){
var inst_28069 = cljs.core.async.close_BANG_.call(null,out);
var state_28125__$1 = state_28125;
var statearr_28155_28183 = state_28125__$1;
(statearr_28155_28183[(2)] = inst_28069);

(statearr_28155_28183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (14))){
var inst_28091 = (state_28125[(7)]);
var inst_28093 = cljs.core.chunked_seq_QMARK_.call(null,inst_28091);
var state_28125__$1 = state_28125;
if(inst_28093){
var statearr_28156_28184 = state_28125__$1;
(statearr_28156_28184[(1)] = (17));

} else {
var statearr_28157_28185 = state_28125__$1;
(statearr_28157_28185[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (16))){
var inst_28109 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
var statearr_28158_28186 = state_28125__$1;
(statearr_28158_28186[(2)] = inst_28109);

(statearr_28158_28186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (10))){
var inst_28080 = (state_28125[(9)]);
var inst_28078 = (state_28125[(12)]);
var inst_28085 = cljs.core._nth.call(null,inst_28078,inst_28080);
var state_28125__$1 = state_28125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28125__$1,(13),out,inst_28085);
} else {
if((state_val_28126 === (18))){
var inst_28091 = (state_28125[(7)]);
var inst_28100 = cljs.core.first.call(null,inst_28091);
var state_28125__$1 = state_28125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28125__$1,(20),out,inst_28100);
} else {
if((state_val_28126 === (8))){
var inst_28080 = (state_28125[(9)]);
var inst_28079 = (state_28125[(10)]);
var inst_28082 = (inst_28080 < inst_28079);
var inst_28083 = inst_28082;
var state_28125__$1 = state_28125;
if(cljs.core.truth_(inst_28083)){
var statearr_28159_28187 = state_28125__$1;
(statearr_28159_28187[(1)] = (10));

} else {
var statearr_28160_28188 = state_28125__$1;
(statearr_28160_28188[(1)] = (11));

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
});})(c__26509__auto__))
;
return ((function (switch__26419__auto__,c__26509__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26420__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26420__auto____0 = (function (){
var statearr_28161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28161[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26420__auto__);

(statearr_28161[(1)] = (1));

return statearr_28161;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26420__auto____1 = (function (state_28125){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_28125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e28162){if((e28162 instanceof Object)){
var ex__26423__auto__ = e28162;
var statearr_28163_28189 = state_28125;
(statearr_28163_28189[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28190 = state_28125;
state_28125 = G__28190;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26420__auto__ = function(state_28125){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26420__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26420__auto____1.call(this,state_28125);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26420__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26420__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto__))
})();
var state__26511__auto__ = (function (){var statearr_28164 = f__26510__auto__.call(null);
(statearr_28164[(6)] = c__26509__auto__);

return statearr_28164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto__))
);

return c__26509__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28192 = arguments.length;
switch (G__28192) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28195 = arguments.length;
switch (G__28195) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28198 = arguments.length;
switch (G__28198) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26509__auto___28245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto___28245,out){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto___28245,out){
return (function (state_28222){
var state_val_28223 = (state_28222[(1)]);
if((state_val_28223 === (7))){
var inst_28217 = (state_28222[(2)]);
var state_28222__$1 = state_28222;
var statearr_28224_28246 = state_28222__$1;
(statearr_28224_28246[(2)] = inst_28217);

(statearr_28224_28246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (1))){
var inst_28199 = null;
var state_28222__$1 = (function (){var statearr_28225 = state_28222;
(statearr_28225[(7)] = inst_28199);

return statearr_28225;
})();
var statearr_28226_28247 = state_28222__$1;
(statearr_28226_28247[(2)] = null);

(statearr_28226_28247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (4))){
var inst_28202 = (state_28222[(8)]);
var inst_28202__$1 = (state_28222[(2)]);
var inst_28203 = (inst_28202__$1 == null);
var inst_28204 = cljs.core.not.call(null,inst_28203);
var state_28222__$1 = (function (){var statearr_28227 = state_28222;
(statearr_28227[(8)] = inst_28202__$1);

return statearr_28227;
})();
if(inst_28204){
var statearr_28228_28248 = state_28222__$1;
(statearr_28228_28248[(1)] = (5));

} else {
var statearr_28229_28249 = state_28222__$1;
(statearr_28229_28249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (6))){
var state_28222__$1 = state_28222;
var statearr_28230_28250 = state_28222__$1;
(statearr_28230_28250[(2)] = null);

(statearr_28230_28250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (3))){
var inst_28219 = (state_28222[(2)]);
var inst_28220 = cljs.core.async.close_BANG_.call(null,out);
var state_28222__$1 = (function (){var statearr_28231 = state_28222;
(statearr_28231[(9)] = inst_28219);

return statearr_28231;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28222__$1,inst_28220);
} else {
if((state_val_28223 === (2))){
var state_28222__$1 = state_28222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28222__$1,(4),ch);
} else {
if((state_val_28223 === (11))){
var inst_28202 = (state_28222[(8)]);
var inst_28211 = (state_28222[(2)]);
var inst_28199 = inst_28202;
var state_28222__$1 = (function (){var statearr_28232 = state_28222;
(statearr_28232[(7)] = inst_28199);

(statearr_28232[(10)] = inst_28211);

return statearr_28232;
})();
var statearr_28233_28251 = state_28222__$1;
(statearr_28233_28251[(2)] = null);

(statearr_28233_28251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (9))){
var inst_28202 = (state_28222[(8)]);
var state_28222__$1 = state_28222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28222__$1,(11),out,inst_28202);
} else {
if((state_val_28223 === (5))){
var inst_28199 = (state_28222[(7)]);
var inst_28202 = (state_28222[(8)]);
var inst_28206 = cljs.core._EQ_.call(null,inst_28202,inst_28199);
var state_28222__$1 = state_28222;
if(inst_28206){
var statearr_28235_28252 = state_28222__$1;
(statearr_28235_28252[(1)] = (8));

} else {
var statearr_28236_28253 = state_28222__$1;
(statearr_28236_28253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (10))){
var inst_28214 = (state_28222[(2)]);
var state_28222__$1 = state_28222;
var statearr_28237_28254 = state_28222__$1;
(statearr_28237_28254[(2)] = inst_28214);

(statearr_28237_28254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (8))){
var inst_28199 = (state_28222[(7)]);
var tmp28234 = inst_28199;
var inst_28199__$1 = tmp28234;
var state_28222__$1 = (function (){var statearr_28238 = state_28222;
(statearr_28238[(7)] = inst_28199__$1);

return statearr_28238;
})();
var statearr_28239_28255 = state_28222__$1;
(statearr_28239_28255[(2)] = null);

(statearr_28239_28255[(1)] = (2));


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
});})(c__26509__auto___28245,out))
;
return ((function (switch__26419__auto__,c__26509__auto___28245,out){
return (function() {
var cljs$core$async$state_machine__26420__auto__ = null;
var cljs$core$async$state_machine__26420__auto____0 = (function (){
var statearr_28240 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28240[(0)] = cljs$core$async$state_machine__26420__auto__);

(statearr_28240[(1)] = (1));

return statearr_28240;
});
var cljs$core$async$state_machine__26420__auto____1 = (function (state_28222){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_28222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e28241){if((e28241 instanceof Object)){
var ex__26423__auto__ = e28241;
var statearr_28242_28256 = state_28222;
(statearr_28242_28256[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28257 = state_28222;
state_28222 = G__28257;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
cljs$core$async$state_machine__26420__auto__ = function(state_28222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26420__auto____1.call(this,state_28222);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26420__auto____0;
cljs$core$async$state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26420__auto____1;
return cljs$core$async$state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto___28245,out))
})();
var state__26511__auto__ = (function (){var statearr_28243 = f__26510__auto__.call(null);
(statearr_28243[(6)] = c__26509__auto___28245);

return statearr_28243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto___28245,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28259 = arguments.length;
switch (G__28259) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26509__auto___28325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto___28325,out){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto___28325,out){
return (function (state_28297){
var state_val_28298 = (state_28297[(1)]);
if((state_val_28298 === (7))){
var inst_28293 = (state_28297[(2)]);
var state_28297__$1 = state_28297;
var statearr_28299_28326 = state_28297__$1;
(statearr_28299_28326[(2)] = inst_28293);

(statearr_28299_28326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28298 === (1))){
var inst_28260 = (new Array(n));
var inst_28261 = inst_28260;
var inst_28262 = (0);
var state_28297__$1 = (function (){var statearr_28300 = state_28297;
(statearr_28300[(7)] = inst_28261);

(statearr_28300[(8)] = inst_28262);

return statearr_28300;
})();
var statearr_28301_28327 = state_28297__$1;
(statearr_28301_28327[(2)] = null);

(statearr_28301_28327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28298 === (4))){
var inst_28265 = (state_28297[(9)]);
var inst_28265__$1 = (state_28297[(2)]);
var inst_28266 = (inst_28265__$1 == null);
var inst_28267 = cljs.core.not.call(null,inst_28266);
var state_28297__$1 = (function (){var statearr_28302 = state_28297;
(statearr_28302[(9)] = inst_28265__$1);

return statearr_28302;
})();
if(inst_28267){
var statearr_28303_28328 = state_28297__$1;
(statearr_28303_28328[(1)] = (5));

} else {
var statearr_28304_28329 = state_28297__$1;
(statearr_28304_28329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28298 === (15))){
var inst_28287 = (state_28297[(2)]);
var state_28297__$1 = state_28297;
var statearr_28305_28330 = state_28297__$1;
(statearr_28305_28330[(2)] = inst_28287);

(statearr_28305_28330[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28298 === (13))){
var state_28297__$1 = state_28297;
var statearr_28306_28331 = state_28297__$1;
(statearr_28306_28331[(2)] = null);

(statearr_28306_28331[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28298 === (6))){
var inst_28262 = (state_28297[(8)]);
var inst_28283 = (inst_28262 > (0));
var state_28297__$1 = state_28297;
if(cljs.core.truth_(inst_28283)){
var statearr_28307_28332 = state_28297__$1;
(statearr_28307_28332[(1)] = (12));

} else {
var statearr_28308_28333 = state_28297__$1;
(statearr_28308_28333[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28298 === (3))){
var inst_28295 = (state_28297[(2)]);
var state_28297__$1 = state_28297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28297__$1,inst_28295);
} else {
if((state_val_28298 === (12))){
var inst_28261 = (state_28297[(7)]);
var inst_28285 = cljs.core.vec.call(null,inst_28261);
var state_28297__$1 = state_28297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28297__$1,(15),out,inst_28285);
} else {
if((state_val_28298 === (2))){
var state_28297__$1 = state_28297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28297__$1,(4),ch);
} else {
if((state_val_28298 === (11))){
var inst_28277 = (state_28297[(2)]);
var inst_28278 = (new Array(n));
var inst_28261 = inst_28278;
var inst_28262 = (0);
var state_28297__$1 = (function (){var statearr_28309 = state_28297;
(statearr_28309[(7)] = inst_28261);

(statearr_28309[(8)] = inst_28262);

(statearr_28309[(10)] = inst_28277);

return statearr_28309;
})();
var statearr_28310_28334 = state_28297__$1;
(statearr_28310_28334[(2)] = null);

(statearr_28310_28334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28298 === (9))){
var inst_28261 = (state_28297[(7)]);
var inst_28275 = cljs.core.vec.call(null,inst_28261);
var state_28297__$1 = state_28297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28297__$1,(11),out,inst_28275);
} else {
if((state_val_28298 === (5))){
var inst_28261 = (state_28297[(7)]);
var inst_28270 = (state_28297[(11)]);
var inst_28265 = (state_28297[(9)]);
var inst_28262 = (state_28297[(8)]);
var inst_28269 = (inst_28261[inst_28262] = inst_28265);
var inst_28270__$1 = (inst_28262 + (1));
var inst_28271 = (inst_28270__$1 < n);
var state_28297__$1 = (function (){var statearr_28311 = state_28297;
(statearr_28311[(12)] = inst_28269);

(statearr_28311[(11)] = inst_28270__$1);

return statearr_28311;
})();
if(cljs.core.truth_(inst_28271)){
var statearr_28312_28335 = state_28297__$1;
(statearr_28312_28335[(1)] = (8));

} else {
var statearr_28313_28336 = state_28297__$1;
(statearr_28313_28336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28298 === (14))){
var inst_28290 = (state_28297[(2)]);
var inst_28291 = cljs.core.async.close_BANG_.call(null,out);
var state_28297__$1 = (function (){var statearr_28315 = state_28297;
(statearr_28315[(13)] = inst_28290);

return statearr_28315;
})();
var statearr_28316_28337 = state_28297__$1;
(statearr_28316_28337[(2)] = inst_28291);

(statearr_28316_28337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28298 === (10))){
var inst_28281 = (state_28297[(2)]);
var state_28297__$1 = state_28297;
var statearr_28317_28338 = state_28297__$1;
(statearr_28317_28338[(2)] = inst_28281);

(statearr_28317_28338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28298 === (8))){
var inst_28261 = (state_28297[(7)]);
var inst_28270 = (state_28297[(11)]);
var tmp28314 = inst_28261;
var inst_28261__$1 = tmp28314;
var inst_28262 = inst_28270;
var state_28297__$1 = (function (){var statearr_28318 = state_28297;
(statearr_28318[(7)] = inst_28261__$1);

(statearr_28318[(8)] = inst_28262);

return statearr_28318;
})();
var statearr_28319_28339 = state_28297__$1;
(statearr_28319_28339[(2)] = null);

(statearr_28319_28339[(1)] = (2));


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
});})(c__26509__auto___28325,out))
;
return ((function (switch__26419__auto__,c__26509__auto___28325,out){
return (function() {
var cljs$core$async$state_machine__26420__auto__ = null;
var cljs$core$async$state_machine__26420__auto____0 = (function (){
var statearr_28320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28320[(0)] = cljs$core$async$state_machine__26420__auto__);

(statearr_28320[(1)] = (1));

return statearr_28320;
});
var cljs$core$async$state_machine__26420__auto____1 = (function (state_28297){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_28297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e28321){if((e28321 instanceof Object)){
var ex__26423__auto__ = e28321;
var statearr_28322_28340 = state_28297;
(statearr_28322_28340[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28341 = state_28297;
state_28297 = G__28341;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
cljs$core$async$state_machine__26420__auto__ = function(state_28297){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26420__auto____1.call(this,state_28297);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26420__auto____0;
cljs$core$async$state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26420__auto____1;
return cljs$core$async$state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto___28325,out))
})();
var state__26511__auto__ = (function (){var statearr_28323 = f__26510__auto__.call(null);
(statearr_28323[(6)] = c__26509__auto___28325);

return statearr_28323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto___28325,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28343 = arguments.length;
switch (G__28343) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26509__auto___28413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26509__auto___28413,out){
return (function (){
var f__26510__auto__ = (function (){var switch__26419__auto__ = ((function (c__26509__auto___28413,out){
return (function (state_28385){
var state_val_28386 = (state_28385[(1)]);
if((state_val_28386 === (7))){
var inst_28381 = (state_28385[(2)]);
var state_28385__$1 = state_28385;
var statearr_28387_28414 = state_28385__$1;
(statearr_28387_28414[(2)] = inst_28381);

(statearr_28387_28414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (1))){
var inst_28344 = [];
var inst_28345 = inst_28344;
var inst_28346 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28385__$1 = (function (){var statearr_28388 = state_28385;
(statearr_28388[(7)] = inst_28345);

(statearr_28388[(8)] = inst_28346);

return statearr_28388;
})();
var statearr_28389_28415 = state_28385__$1;
(statearr_28389_28415[(2)] = null);

(statearr_28389_28415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (4))){
var inst_28349 = (state_28385[(9)]);
var inst_28349__$1 = (state_28385[(2)]);
var inst_28350 = (inst_28349__$1 == null);
var inst_28351 = cljs.core.not.call(null,inst_28350);
var state_28385__$1 = (function (){var statearr_28390 = state_28385;
(statearr_28390[(9)] = inst_28349__$1);

return statearr_28390;
})();
if(inst_28351){
var statearr_28391_28416 = state_28385__$1;
(statearr_28391_28416[(1)] = (5));

} else {
var statearr_28392_28417 = state_28385__$1;
(statearr_28392_28417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (15))){
var inst_28375 = (state_28385[(2)]);
var state_28385__$1 = state_28385;
var statearr_28393_28418 = state_28385__$1;
(statearr_28393_28418[(2)] = inst_28375);

(statearr_28393_28418[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (13))){
var state_28385__$1 = state_28385;
var statearr_28394_28419 = state_28385__$1;
(statearr_28394_28419[(2)] = null);

(statearr_28394_28419[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (6))){
var inst_28345 = (state_28385[(7)]);
var inst_28370 = inst_28345.length;
var inst_28371 = (inst_28370 > (0));
var state_28385__$1 = state_28385;
if(cljs.core.truth_(inst_28371)){
var statearr_28395_28420 = state_28385__$1;
(statearr_28395_28420[(1)] = (12));

} else {
var statearr_28396_28421 = state_28385__$1;
(statearr_28396_28421[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (3))){
var inst_28383 = (state_28385[(2)]);
var state_28385__$1 = state_28385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28385__$1,inst_28383);
} else {
if((state_val_28386 === (12))){
var inst_28345 = (state_28385[(7)]);
var inst_28373 = cljs.core.vec.call(null,inst_28345);
var state_28385__$1 = state_28385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28385__$1,(15),out,inst_28373);
} else {
if((state_val_28386 === (2))){
var state_28385__$1 = state_28385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28385__$1,(4),ch);
} else {
if((state_val_28386 === (11))){
var inst_28353 = (state_28385[(10)]);
var inst_28349 = (state_28385[(9)]);
var inst_28363 = (state_28385[(2)]);
var inst_28364 = [];
var inst_28365 = inst_28364.push(inst_28349);
var inst_28345 = inst_28364;
var inst_28346 = inst_28353;
var state_28385__$1 = (function (){var statearr_28397 = state_28385;
(statearr_28397[(7)] = inst_28345);

(statearr_28397[(11)] = inst_28363);

(statearr_28397[(12)] = inst_28365);

(statearr_28397[(8)] = inst_28346);

return statearr_28397;
})();
var statearr_28398_28422 = state_28385__$1;
(statearr_28398_28422[(2)] = null);

(statearr_28398_28422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (9))){
var inst_28345 = (state_28385[(7)]);
var inst_28361 = cljs.core.vec.call(null,inst_28345);
var state_28385__$1 = state_28385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28385__$1,(11),out,inst_28361);
} else {
if((state_val_28386 === (5))){
var inst_28353 = (state_28385[(10)]);
var inst_28346 = (state_28385[(8)]);
var inst_28349 = (state_28385[(9)]);
var inst_28353__$1 = f.call(null,inst_28349);
var inst_28354 = cljs.core._EQ_.call(null,inst_28353__$1,inst_28346);
var inst_28355 = cljs.core.keyword_identical_QMARK_.call(null,inst_28346,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28356 = ((inst_28354) || (inst_28355));
var state_28385__$1 = (function (){var statearr_28399 = state_28385;
(statearr_28399[(10)] = inst_28353__$1);

return statearr_28399;
})();
if(cljs.core.truth_(inst_28356)){
var statearr_28400_28423 = state_28385__$1;
(statearr_28400_28423[(1)] = (8));

} else {
var statearr_28401_28424 = state_28385__$1;
(statearr_28401_28424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (14))){
var inst_28378 = (state_28385[(2)]);
var inst_28379 = cljs.core.async.close_BANG_.call(null,out);
var state_28385__$1 = (function (){var statearr_28403 = state_28385;
(statearr_28403[(13)] = inst_28378);

return statearr_28403;
})();
var statearr_28404_28425 = state_28385__$1;
(statearr_28404_28425[(2)] = inst_28379);

(statearr_28404_28425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (10))){
var inst_28368 = (state_28385[(2)]);
var state_28385__$1 = state_28385;
var statearr_28405_28426 = state_28385__$1;
(statearr_28405_28426[(2)] = inst_28368);

(statearr_28405_28426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28386 === (8))){
var inst_28345 = (state_28385[(7)]);
var inst_28353 = (state_28385[(10)]);
var inst_28349 = (state_28385[(9)]);
var inst_28358 = inst_28345.push(inst_28349);
var tmp28402 = inst_28345;
var inst_28345__$1 = tmp28402;
var inst_28346 = inst_28353;
var state_28385__$1 = (function (){var statearr_28406 = state_28385;
(statearr_28406[(7)] = inst_28345__$1);

(statearr_28406[(8)] = inst_28346);

(statearr_28406[(14)] = inst_28358);

return statearr_28406;
})();
var statearr_28407_28427 = state_28385__$1;
(statearr_28407_28427[(2)] = null);

(statearr_28407_28427[(1)] = (2));


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
});})(c__26509__auto___28413,out))
;
return ((function (switch__26419__auto__,c__26509__auto___28413,out){
return (function() {
var cljs$core$async$state_machine__26420__auto__ = null;
var cljs$core$async$state_machine__26420__auto____0 = (function (){
var statearr_28408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28408[(0)] = cljs$core$async$state_machine__26420__auto__);

(statearr_28408[(1)] = (1));

return statearr_28408;
});
var cljs$core$async$state_machine__26420__auto____1 = (function (state_28385){
while(true){
var ret_value__26421__auto__ = (function (){try{while(true){
var result__26422__auto__ = switch__26419__auto__.call(null,state_28385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26422__auto__;
}
break;
}
}catch (e28409){if((e28409 instanceof Object)){
var ex__26423__auto__ = e28409;
var statearr_28410_28428 = state_28385;
(statearr_28410_28428[(5)] = ex__26423__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28429 = state_28385;
state_28385 = G__28429;
continue;
} else {
return ret_value__26421__auto__;
}
break;
}
});
cljs$core$async$state_machine__26420__auto__ = function(state_28385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26420__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26420__auto____1.call(this,state_28385);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26420__auto____0;
cljs$core$async$state_machine__26420__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26420__auto____1;
return cljs$core$async$state_machine__26420__auto__;
})()
;})(switch__26419__auto__,c__26509__auto___28413,out))
})();
var state__26511__auto__ = (function (){var statearr_28411 = f__26510__auto__.call(null);
(statearr_28411[(6)] = c__26509__auto___28413);

return statearr_28411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26511__auto__);
});})(c__26509__auto___28413,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1522854613967
