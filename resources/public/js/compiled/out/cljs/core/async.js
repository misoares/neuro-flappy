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
var G__34492 = arguments.length;
switch (G__34492) {
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
if(typeof cljs.core.async.t_cljs$core$async34493 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34493 = (function (f,blockable,meta34494){
this.f = f;
this.blockable = blockable;
this.meta34494 = meta34494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34495,meta34494__$1){
var self__ = this;
var _34495__$1 = this;
return (new cljs.core.async.t_cljs$core$async34493(self__.f,self__.blockable,meta34494__$1));
});

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34495){
var self__ = this;
var _34495__$1 = this;
return self__.meta34494;
});

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34493.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34494","meta34494",-883342596,null)], null);
});

cljs.core.async.t_cljs$core$async34493.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34493";

cljs.core.async.t_cljs$core$async34493.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async34493");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34493.
 */
cljs.core.async.__GT_t_cljs$core$async34493 = (function cljs$core$async$__GT_t_cljs$core$async34493(f__$1,blockable__$1,meta34494){
return (new cljs.core.async.t_cljs$core$async34493(f__$1,blockable__$1,meta34494));
});

}

return (new cljs.core.async.t_cljs$core$async34493(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34499 = arguments.length;
switch (G__34499) {
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
var G__34502 = arguments.length;
switch (G__34502) {
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
var G__34505 = arguments.length;
switch (G__34505) {
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
var val_34507 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34507);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34507,ret){
return (function (){
return fn1.call(null,val_34507);
});})(val_34507,ret))
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
var G__34509 = arguments.length;
switch (G__34509) {
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
var n__4376__auto___34511 = n;
var x_34512 = (0);
while(true){
if((x_34512 < n__4376__auto___34511)){
(a[x_34512] = (0));

var G__34513 = (x_34512 + (1));
x_34512 = G__34513;
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

var G__34514 = (i + (1));
i = G__34514;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34515 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34515 = (function (flag,meta34516){
this.flag = flag;
this.meta34516 = meta34516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34517,meta34516__$1){
var self__ = this;
var _34517__$1 = this;
return (new cljs.core.async.t_cljs$core$async34515(self__.flag,meta34516__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34515.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34517){
var self__ = this;
var _34517__$1 = this;
return self__.meta34516;
});})(flag))
;

cljs.core.async.t_cljs$core$async34515.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34515.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34515.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34515.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34515.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34516","meta34516",208074872,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34515.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34515";

cljs.core.async.t_cljs$core$async34515.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async34515");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34515.
 */
cljs.core.async.__GT_t_cljs$core$async34515 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34515(flag__$1,meta34516){
return (new cljs.core.async.t_cljs$core$async34515(flag__$1,meta34516));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34515(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34518 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34518 = (function (flag,cb,meta34519){
this.flag = flag;
this.cb = cb;
this.meta34519 = meta34519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34520,meta34519__$1){
var self__ = this;
var _34520__$1 = this;
return (new cljs.core.async.t_cljs$core$async34518(self__.flag,self__.cb,meta34519__$1));
});

cljs.core.async.t_cljs$core$async34518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34520){
var self__ = this;
var _34520__$1 = this;
return self__.meta34519;
});

cljs.core.async.t_cljs$core$async34518.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34518.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34518.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34518.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34519","meta34519",-1354165986,null)], null);
});

cljs.core.async.t_cljs$core$async34518.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34518";

cljs.core.async.t_cljs$core$async34518.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async34518");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34518.
 */
cljs.core.async.__GT_t_cljs$core$async34518 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34518(flag__$1,cb__$1,meta34519){
return (new cljs.core.async.t_cljs$core$async34518(flag__$1,cb__$1,meta34519));
});

}

return (new cljs.core.async.t_cljs$core$async34518(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34521_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34521_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34522_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34522_SHARP_,port], null));
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
var G__34523 = (i + (1));
i = G__34523;
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
var len__4499__auto___34529 = arguments.length;
var i__4500__auto___34530 = (0);
while(true){
if((i__4500__auto___34530 < len__4499__auto___34529)){
args__4502__auto__.push((arguments[i__4500__auto___34530]));

var G__34531 = (i__4500__auto___34530 + (1));
i__4500__auto___34530 = G__34531;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34526){
var map__34527 = p__34526;
var map__34527__$1 = ((((!((map__34527 == null)))?(((((map__34527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34527):map__34527);
var opts = map__34527__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34524){
var G__34525 = cljs.core.first.call(null,seq34524);
var seq34524__$1 = cljs.core.next.call(null,seq34524);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34525,seq34524__$1);
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
var G__34533 = arguments.length;
switch (G__34533) {
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
var c__23955__auto___34579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23955__auto___34579){
return (function (){
var f__23956__auto__ = (function (){var switch__23932__auto__ = ((function (c__23955__auto___34579){
return (function (state_34557){
var state_val_34558 = (state_34557[(1)]);
if((state_val_34558 === (7))){
var inst_34553 = (state_34557[(2)]);
var state_34557__$1 = state_34557;
var statearr_34559_34580 = state_34557__$1;
(statearr_34559_34580[(2)] = inst_34553);

(statearr_34559_34580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (1))){
var state_34557__$1 = state_34557;
var statearr_34560_34581 = state_34557__$1;
(statearr_34560_34581[(2)] = null);

(statearr_34560_34581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (4))){
var inst_34536 = (state_34557[(7)]);
var inst_34536__$1 = (state_34557[(2)]);
var inst_34537 = (inst_34536__$1 == null);
var state_34557__$1 = (function (){var statearr_34561 = state_34557;
(statearr_34561[(7)] = inst_34536__$1);

return statearr_34561;
})();
if(cljs.core.truth_(inst_34537)){
var statearr_34562_34582 = state_34557__$1;
(statearr_34562_34582[(1)] = (5));

} else {
var statearr_34563_34583 = state_34557__$1;
(statearr_34563_34583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (13))){
var state_34557__$1 = state_34557;
var statearr_34564_34584 = state_34557__$1;
(statearr_34564_34584[(2)] = null);

(statearr_34564_34584[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (6))){
var inst_34536 = (state_34557[(7)]);
var state_34557__$1 = state_34557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34557__$1,(11),to,inst_34536);
} else {
if((state_val_34558 === (3))){
var inst_34555 = (state_34557[(2)]);
var state_34557__$1 = state_34557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34557__$1,inst_34555);
} else {
if((state_val_34558 === (12))){
var state_34557__$1 = state_34557;
var statearr_34565_34585 = state_34557__$1;
(statearr_34565_34585[(2)] = null);

(statearr_34565_34585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (2))){
var state_34557__$1 = state_34557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34557__$1,(4),from);
} else {
if((state_val_34558 === (11))){
var inst_34546 = (state_34557[(2)]);
var state_34557__$1 = state_34557;
if(cljs.core.truth_(inst_34546)){
var statearr_34566_34586 = state_34557__$1;
(statearr_34566_34586[(1)] = (12));

} else {
var statearr_34567_34587 = state_34557__$1;
(statearr_34567_34587[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (9))){
var state_34557__$1 = state_34557;
var statearr_34568_34588 = state_34557__$1;
(statearr_34568_34588[(2)] = null);

(statearr_34568_34588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (5))){
var state_34557__$1 = state_34557;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34569_34589 = state_34557__$1;
(statearr_34569_34589[(1)] = (8));

} else {
var statearr_34570_34590 = state_34557__$1;
(statearr_34570_34590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (14))){
var inst_34551 = (state_34557[(2)]);
var state_34557__$1 = state_34557;
var statearr_34571_34591 = state_34557__$1;
(statearr_34571_34591[(2)] = inst_34551);

(statearr_34571_34591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (10))){
var inst_34543 = (state_34557[(2)]);
var state_34557__$1 = state_34557;
var statearr_34572_34592 = state_34557__$1;
(statearr_34572_34592[(2)] = inst_34543);

(statearr_34572_34592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (8))){
var inst_34540 = cljs.core.async.close_BANG_.call(null,to);
var state_34557__$1 = state_34557;
var statearr_34573_34593 = state_34557__$1;
(statearr_34573_34593[(2)] = inst_34540);

(statearr_34573_34593[(1)] = (10));


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
});})(c__23955__auto___34579))
;
return ((function (switch__23932__auto__,c__23955__auto___34579){
return (function() {
var cljs$core$async$state_machine__23933__auto__ = null;
var cljs$core$async$state_machine__23933__auto____0 = (function (){
var statearr_34574 = [null,null,null,null,null,null,null,null];
(statearr_34574[(0)] = cljs$core$async$state_machine__23933__auto__);

(statearr_34574[(1)] = (1));

return statearr_34574;
});
var cljs$core$async$state_machine__23933__auto____1 = (function (state_34557){
while(true){
var ret_value__23934__auto__ = (function (){try{while(true){
var result__23935__auto__ = switch__23932__auto__.call(null,state_34557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23935__auto__;
}
break;
}
}catch (e34575){if((e34575 instanceof Object)){
var ex__23936__auto__ = e34575;
var statearr_34576_34594 = state_34557;
(statearr_34576_34594[(5)] = ex__23936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34595 = state_34557;
state_34557 = G__34595;
continue;
} else {
return ret_value__23934__auto__;
}
break;
}
});
cljs$core$async$state_machine__23933__auto__ = function(state_34557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23933__auto____1.call(this,state_34557);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23933__auto____0;
cljs$core$async$state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23933__auto____1;
return cljs$core$async$state_machine__23933__auto__;
})()
;})(switch__23932__auto__,c__23955__auto___34579))
})();
var state__23957__auto__ = (function (){var statearr_34577 = f__23956__auto__.call(null);
(statearr_34577[(6)] = c__23955__auto___34579);

return statearr_34577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23957__auto__);
});})(c__23955__auto___34579))
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
return (function (p__34596){
var vec__34597 = p__34596;
var v = cljs.core.nth.call(null,vec__34597,(0),null);
var p = cljs.core.nth.call(null,vec__34597,(1),null);
var job = vec__34597;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23955__auto___34768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23955__auto___34768,res,vec__34597,v,p,job,jobs,results){
return (function (){
var f__23956__auto__ = (function (){var switch__23932__auto__ = ((function (c__23955__auto___34768,res,vec__34597,v,p,job,jobs,results){
return (function (state_34604){
var state_val_34605 = (state_34604[(1)]);
if((state_val_34605 === (1))){
var state_34604__$1 = state_34604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34604__$1,(2),res,v);
} else {
if((state_val_34605 === (2))){
var inst_34601 = (state_34604[(2)]);
var inst_34602 = cljs.core.async.close_BANG_.call(null,res);
var state_34604__$1 = (function (){var statearr_34606 = state_34604;
(statearr_34606[(7)] = inst_34601);

return statearr_34606;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34604__$1,inst_34602);
} else {
return null;
}
}
});})(c__23955__auto___34768,res,vec__34597,v,p,job,jobs,results))
;
return ((function (switch__23932__auto__,c__23955__auto___34768,res,vec__34597,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____0 = (function (){
var statearr_34607 = [null,null,null,null,null,null,null,null];
(statearr_34607[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__);

(statearr_34607[(1)] = (1));

return statearr_34607;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____1 = (function (state_34604){
while(true){
var ret_value__23934__auto__ = (function (){try{while(true){
var result__23935__auto__ = switch__23932__auto__.call(null,state_34604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23935__auto__;
}
break;
}
}catch (e34608){if((e34608 instanceof Object)){
var ex__23936__auto__ = e34608;
var statearr_34609_34769 = state_34604;
(statearr_34609_34769[(5)] = ex__23936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34770 = state_34604;
state_34604 = G__34770;
continue;
} else {
return ret_value__23934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__ = function(state_34604){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____1.call(this,state_34604);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__;
})()
;})(switch__23932__auto__,c__23955__auto___34768,res,vec__34597,v,p,job,jobs,results))
})();
var state__23957__auto__ = (function (){var statearr_34610 = f__23956__auto__.call(null);
(statearr_34610[(6)] = c__23955__auto___34768);

return statearr_34610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23957__auto__);
});})(c__23955__auto___34768,res,vec__34597,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34611){
var vec__34612 = p__34611;
var v = cljs.core.nth.call(null,vec__34612,(0),null);
var p = cljs.core.nth.call(null,vec__34612,(1),null);
var job = vec__34612;
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
var n__4376__auto___34771 = n;
var __34772 = (0);
while(true){
if((__34772 < n__4376__auto___34771)){
var G__34615_34773 = type;
var G__34615_34774__$1 = (((G__34615_34773 instanceof cljs.core.Keyword))?G__34615_34773.fqn:null);
switch (G__34615_34774__$1) {
case "compute":
var c__23955__auto___34776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34772,c__23955__auto___34776,G__34615_34773,G__34615_34774__$1,n__4376__auto___34771,jobs,results,process,async){
return (function (){
var f__23956__auto__ = (function (){var switch__23932__auto__ = ((function (__34772,c__23955__auto___34776,G__34615_34773,G__34615_34774__$1,n__4376__auto___34771,jobs,results,process,async){
return (function (state_34628){
var state_val_34629 = (state_34628[(1)]);
if((state_val_34629 === (1))){
var state_34628__$1 = state_34628;
var statearr_34630_34777 = state_34628__$1;
(statearr_34630_34777[(2)] = null);

(statearr_34630_34777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (2))){
var state_34628__$1 = state_34628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34628__$1,(4),jobs);
} else {
if((state_val_34629 === (3))){
var inst_34626 = (state_34628[(2)]);
var state_34628__$1 = state_34628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34628__$1,inst_34626);
} else {
if((state_val_34629 === (4))){
var inst_34618 = (state_34628[(2)]);
var inst_34619 = process.call(null,inst_34618);
var state_34628__$1 = state_34628;
if(cljs.core.truth_(inst_34619)){
var statearr_34631_34778 = state_34628__$1;
(statearr_34631_34778[(1)] = (5));

} else {
var statearr_34632_34779 = state_34628__$1;
(statearr_34632_34779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (5))){
var state_34628__$1 = state_34628;
var statearr_34633_34780 = state_34628__$1;
(statearr_34633_34780[(2)] = null);

(statearr_34633_34780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (6))){
var state_34628__$1 = state_34628;
var statearr_34634_34781 = state_34628__$1;
(statearr_34634_34781[(2)] = null);

(statearr_34634_34781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (7))){
var inst_34624 = (state_34628[(2)]);
var state_34628__$1 = state_34628;
var statearr_34635_34782 = state_34628__$1;
(statearr_34635_34782[(2)] = inst_34624);

(statearr_34635_34782[(1)] = (3));


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
});})(__34772,c__23955__auto___34776,G__34615_34773,G__34615_34774__$1,n__4376__auto___34771,jobs,results,process,async))
;
return ((function (__34772,switch__23932__auto__,c__23955__auto___34776,G__34615_34773,G__34615_34774__$1,n__4376__auto___34771,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____0 = (function (){
var statearr_34636 = [null,null,null,null,null,null,null];
(statearr_34636[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__);

(statearr_34636[(1)] = (1));

return statearr_34636;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____1 = (function (state_34628){
while(true){
var ret_value__23934__auto__ = (function (){try{while(true){
var result__23935__auto__ = switch__23932__auto__.call(null,state_34628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23935__auto__;
}
break;
}
}catch (e34637){if((e34637 instanceof Object)){
var ex__23936__auto__ = e34637;
var statearr_34638_34783 = state_34628;
(statearr_34638_34783[(5)] = ex__23936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34784 = state_34628;
state_34628 = G__34784;
continue;
} else {
return ret_value__23934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__ = function(state_34628){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____1.call(this,state_34628);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__;
})()
;})(__34772,switch__23932__auto__,c__23955__auto___34776,G__34615_34773,G__34615_34774__$1,n__4376__auto___34771,jobs,results,process,async))
})();
var state__23957__auto__ = (function (){var statearr_34639 = f__23956__auto__.call(null);
(statearr_34639[(6)] = c__23955__auto___34776);

return statearr_34639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23957__auto__);
});})(__34772,c__23955__auto___34776,G__34615_34773,G__34615_34774__$1,n__4376__auto___34771,jobs,results,process,async))
);


break;
case "async":
var c__23955__auto___34785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34772,c__23955__auto___34785,G__34615_34773,G__34615_34774__$1,n__4376__auto___34771,jobs,results,process,async){
return (function (){
var f__23956__auto__ = (function (){var switch__23932__auto__ = ((function (__34772,c__23955__auto___34785,G__34615_34773,G__34615_34774__$1,n__4376__auto___34771,jobs,results,process,async){
return (function (state_34652){
var state_val_34653 = (state_34652[(1)]);
if((state_val_34653 === (1))){
var state_34652__$1 = state_34652;
var statearr_34654_34786 = state_34652__$1;
(statearr_34654_34786[(2)] = null);

(statearr_34654_34786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (2))){
var state_34652__$1 = state_34652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34652__$1,(4),jobs);
} else {
if((state_val_34653 === (3))){
var inst_34650 = (state_34652[(2)]);
var state_34652__$1 = state_34652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34652__$1,inst_34650);
} else {
if((state_val_34653 === (4))){
var inst_34642 = (state_34652[(2)]);
var inst_34643 = async.call(null,inst_34642);
var state_34652__$1 = state_34652;
if(cljs.core.truth_(inst_34643)){
var statearr_34655_34787 = state_34652__$1;
(statearr_34655_34787[(1)] = (5));

} else {
var statearr_34656_34788 = state_34652__$1;
(statearr_34656_34788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (5))){
var state_34652__$1 = state_34652;
var statearr_34657_34789 = state_34652__$1;
(statearr_34657_34789[(2)] = null);

(statearr_34657_34789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (6))){
var state_34652__$1 = state_34652;
var statearr_34658_34790 = state_34652__$1;
(statearr_34658_34790[(2)] = null);

(statearr_34658_34790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (7))){
var inst_34648 = (state_34652[(2)]);
var state_34652__$1 = state_34652;
var statearr_34659_34791 = state_34652__$1;
(statearr_34659_34791[(2)] = inst_34648);

(statearr_34659_34791[(1)] = (3));


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
});})(__34772,c__23955__auto___34785,G__34615_34773,G__34615_34774__$1,n__4376__auto___34771,jobs,results,process,async))
;
return ((function (__34772,switch__23932__auto__,c__23955__auto___34785,G__34615_34773,G__34615_34774__$1,n__4376__auto___34771,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____0 = (function (){
var statearr_34660 = [null,null,null,null,null,null,null];
(statearr_34660[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__);

(statearr_34660[(1)] = (1));

return statearr_34660;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____1 = (function (state_34652){
while(true){
var ret_value__23934__auto__ = (function (){try{while(true){
var result__23935__auto__ = switch__23932__auto__.call(null,state_34652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23935__auto__;
}
break;
}
}catch (e34661){if((e34661 instanceof Object)){
var ex__23936__auto__ = e34661;
var statearr_34662_34792 = state_34652;
(statearr_34662_34792[(5)] = ex__23936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34793 = state_34652;
state_34652 = G__34793;
continue;
} else {
return ret_value__23934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__ = function(state_34652){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____1.call(this,state_34652);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__;
})()
;})(__34772,switch__23932__auto__,c__23955__auto___34785,G__34615_34773,G__34615_34774__$1,n__4376__auto___34771,jobs,results,process,async))
})();
var state__23957__auto__ = (function (){var statearr_34663 = f__23956__auto__.call(null);
(statearr_34663[(6)] = c__23955__auto___34785);

return statearr_34663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23957__auto__);
});})(__34772,c__23955__auto___34785,G__34615_34773,G__34615_34774__$1,n__4376__auto___34771,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34615_34774__$1)].join('')));

}

var G__34794 = (__34772 + (1));
__34772 = G__34794;
continue;
} else {
}
break;
}

var c__23955__auto___34795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23955__auto___34795,jobs,results,process,async){
return (function (){
var f__23956__auto__ = (function (){var switch__23932__auto__ = ((function (c__23955__auto___34795,jobs,results,process,async){
return (function (state_34685){
var state_val_34686 = (state_34685[(1)]);
if((state_val_34686 === (1))){
var state_34685__$1 = state_34685;
var statearr_34687_34796 = state_34685__$1;
(statearr_34687_34796[(2)] = null);

(statearr_34687_34796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (2))){
var state_34685__$1 = state_34685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34685__$1,(4),from);
} else {
if((state_val_34686 === (3))){
var inst_34683 = (state_34685[(2)]);
var state_34685__$1 = state_34685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34685__$1,inst_34683);
} else {
if((state_val_34686 === (4))){
var inst_34666 = (state_34685[(7)]);
var inst_34666__$1 = (state_34685[(2)]);
var inst_34667 = (inst_34666__$1 == null);
var state_34685__$1 = (function (){var statearr_34688 = state_34685;
(statearr_34688[(7)] = inst_34666__$1);

return statearr_34688;
})();
if(cljs.core.truth_(inst_34667)){
var statearr_34689_34797 = state_34685__$1;
(statearr_34689_34797[(1)] = (5));

} else {
var statearr_34690_34798 = state_34685__$1;
(statearr_34690_34798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (5))){
var inst_34669 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34685__$1 = state_34685;
var statearr_34691_34799 = state_34685__$1;
(statearr_34691_34799[(2)] = inst_34669);

(statearr_34691_34799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (6))){
var inst_34671 = (state_34685[(8)]);
var inst_34666 = (state_34685[(7)]);
var inst_34671__$1 = cljs.core.async.chan.call(null,(1));
var inst_34672 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34673 = [inst_34666,inst_34671__$1];
var inst_34674 = (new cljs.core.PersistentVector(null,2,(5),inst_34672,inst_34673,null));
var state_34685__$1 = (function (){var statearr_34692 = state_34685;
(statearr_34692[(8)] = inst_34671__$1);

return statearr_34692;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34685__$1,(8),jobs,inst_34674);
} else {
if((state_val_34686 === (7))){
var inst_34681 = (state_34685[(2)]);
var state_34685__$1 = state_34685;
var statearr_34693_34800 = state_34685__$1;
(statearr_34693_34800[(2)] = inst_34681);

(statearr_34693_34800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (8))){
var inst_34671 = (state_34685[(8)]);
var inst_34676 = (state_34685[(2)]);
var state_34685__$1 = (function (){var statearr_34694 = state_34685;
(statearr_34694[(9)] = inst_34676);

return statearr_34694;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34685__$1,(9),results,inst_34671);
} else {
if((state_val_34686 === (9))){
var inst_34678 = (state_34685[(2)]);
var state_34685__$1 = (function (){var statearr_34695 = state_34685;
(statearr_34695[(10)] = inst_34678);

return statearr_34695;
})();
var statearr_34696_34801 = state_34685__$1;
(statearr_34696_34801[(2)] = null);

(statearr_34696_34801[(1)] = (2));


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
});})(c__23955__auto___34795,jobs,results,process,async))
;
return ((function (switch__23932__auto__,c__23955__auto___34795,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____0 = (function (){
var statearr_34697 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34697[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__);

(statearr_34697[(1)] = (1));

return statearr_34697;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____1 = (function (state_34685){
while(true){
var ret_value__23934__auto__ = (function (){try{while(true){
var result__23935__auto__ = switch__23932__auto__.call(null,state_34685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23935__auto__;
}
break;
}
}catch (e34698){if((e34698 instanceof Object)){
var ex__23936__auto__ = e34698;
var statearr_34699_34802 = state_34685;
(statearr_34699_34802[(5)] = ex__23936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34803 = state_34685;
state_34685 = G__34803;
continue;
} else {
return ret_value__23934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__ = function(state_34685){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____1.call(this,state_34685);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__;
})()
;})(switch__23932__auto__,c__23955__auto___34795,jobs,results,process,async))
})();
var state__23957__auto__ = (function (){var statearr_34700 = f__23956__auto__.call(null);
(statearr_34700[(6)] = c__23955__auto___34795);

return statearr_34700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23957__auto__);
});})(c__23955__auto___34795,jobs,results,process,async))
);


var c__23955__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23955__auto__,jobs,results,process,async){
return (function (){
var f__23956__auto__ = (function (){var switch__23932__auto__ = ((function (c__23955__auto__,jobs,results,process,async){
return (function (state_34738){
var state_val_34739 = (state_34738[(1)]);
if((state_val_34739 === (7))){
var inst_34734 = (state_34738[(2)]);
var state_34738__$1 = state_34738;
var statearr_34740_34804 = state_34738__$1;
(statearr_34740_34804[(2)] = inst_34734);

(statearr_34740_34804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (20))){
var state_34738__$1 = state_34738;
var statearr_34741_34805 = state_34738__$1;
(statearr_34741_34805[(2)] = null);

(statearr_34741_34805[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (1))){
var state_34738__$1 = state_34738;
var statearr_34742_34806 = state_34738__$1;
(statearr_34742_34806[(2)] = null);

(statearr_34742_34806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (4))){
var inst_34703 = (state_34738[(7)]);
var inst_34703__$1 = (state_34738[(2)]);
var inst_34704 = (inst_34703__$1 == null);
var state_34738__$1 = (function (){var statearr_34743 = state_34738;
(statearr_34743[(7)] = inst_34703__$1);

return statearr_34743;
})();
if(cljs.core.truth_(inst_34704)){
var statearr_34744_34807 = state_34738__$1;
(statearr_34744_34807[(1)] = (5));

} else {
var statearr_34745_34808 = state_34738__$1;
(statearr_34745_34808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (15))){
var inst_34716 = (state_34738[(8)]);
var state_34738__$1 = state_34738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34738__$1,(18),to,inst_34716);
} else {
if((state_val_34739 === (21))){
var inst_34729 = (state_34738[(2)]);
var state_34738__$1 = state_34738;
var statearr_34746_34809 = state_34738__$1;
(statearr_34746_34809[(2)] = inst_34729);

(statearr_34746_34809[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (13))){
var inst_34731 = (state_34738[(2)]);
var state_34738__$1 = (function (){var statearr_34747 = state_34738;
(statearr_34747[(9)] = inst_34731);

return statearr_34747;
})();
var statearr_34748_34810 = state_34738__$1;
(statearr_34748_34810[(2)] = null);

(statearr_34748_34810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (6))){
var inst_34703 = (state_34738[(7)]);
var state_34738__$1 = state_34738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34738__$1,(11),inst_34703);
} else {
if((state_val_34739 === (17))){
var inst_34724 = (state_34738[(2)]);
var state_34738__$1 = state_34738;
if(cljs.core.truth_(inst_34724)){
var statearr_34749_34811 = state_34738__$1;
(statearr_34749_34811[(1)] = (19));

} else {
var statearr_34750_34812 = state_34738__$1;
(statearr_34750_34812[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (3))){
var inst_34736 = (state_34738[(2)]);
var state_34738__$1 = state_34738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34738__$1,inst_34736);
} else {
if((state_val_34739 === (12))){
var inst_34713 = (state_34738[(10)]);
var state_34738__$1 = state_34738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34738__$1,(14),inst_34713);
} else {
if((state_val_34739 === (2))){
var state_34738__$1 = state_34738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34738__$1,(4),results);
} else {
if((state_val_34739 === (19))){
var state_34738__$1 = state_34738;
var statearr_34751_34813 = state_34738__$1;
(statearr_34751_34813[(2)] = null);

(statearr_34751_34813[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (11))){
var inst_34713 = (state_34738[(2)]);
var state_34738__$1 = (function (){var statearr_34752 = state_34738;
(statearr_34752[(10)] = inst_34713);

return statearr_34752;
})();
var statearr_34753_34814 = state_34738__$1;
(statearr_34753_34814[(2)] = null);

(statearr_34753_34814[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (9))){
var state_34738__$1 = state_34738;
var statearr_34754_34815 = state_34738__$1;
(statearr_34754_34815[(2)] = null);

(statearr_34754_34815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (5))){
var state_34738__$1 = state_34738;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34755_34816 = state_34738__$1;
(statearr_34755_34816[(1)] = (8));

} else {
var statearr_34756_34817 = state_34738__$1;
(statearr_34756_34817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (14))){
var inst_34718 = (state_34738[(11)]);
var inst_34716 = (state_34738[(8)]);
var inst_34716__$1 = (state_34738[(2)]);
var inst_34717 = (inst_34716__$1 == null);
var inst_34718__$1 = cljs.core.not.call(null,inst_34717);
var state_34738__$1 = (function (){var statearr_34757 = state_34738;
(statearr_34757[(11)] = inst_34718__$1);

(statearr_34757[(8)] = inst_34716__$1);

return statearr_34757;
})();
if(inst_34718__$1){
var statearr_34758_34818 = state_34738__$1;
(statearr_34758_34818[(1)] = (15));

} else {
var statearr_34759_34819 = state_34738__$1;
(statearr_34759_34819[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (16))){
var inst_34718 = (state_34738[(11)]);
var state_34738__$1 = state_34738;
var statearr_34760_34820 = state_34738__$1;
(statearr_34760_34820[(2)] = inst_34718);

(statearr_34760_34820[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (10))){
var inst_34710 = (state_34738[(2)]);
var state_34738__$1 = state_34738;
var statearr_34761_34821 = state_34738__$1;
(statearr_34761_34821[(2)] = inst_34710);

(statearr_34761_34821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (18))){
var inst_34721 = (state_34738[(2)]);
var state_34738__$1 = state_34738;
var statearr_34762_34822 = state_34738__$1;
(statearr_34762_34822[(2)] = inst_34721);

(statearr_34762_34822[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (8))){
var inst_34707 = cljs.core.async.close_BANG_.call(null,to);
var state_34738__$1 = state_34738;
var statearr_34763_34823 = state_34738__$1;
(statearr_34763_34823[(2)] = inst_34707);

(statearr_34763_34823[(1)] = (10));


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
});})(c__23955__auto__,jobs,results,process,async))
;
return ((function (switch__23932__auto__,c__23955__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____0 = (function (){
var statearr_34764 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34764[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__);

(statearr_34764[(1)] = (1));

return statearr_34764;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____1 = (function (state_34738){
while(true){
var ret_value__23934__auto__ = (function (){try{while(true){
var result__23935__auto__ = switch__23932__auto__.call(null,state_34738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23935__auto__;
}
break;
}
}catch (e34765){if((e34765 instanceof Object)){
var ex__23936__auto__ = e34765;
var statearr_34766_34824 = state_34738;
(statearr_34766_34824[(5)] = ex__23936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34825 = state_34738;
state_34738 = G__34825;
continue;
} else {
return ret_value__23934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__ = function(state_34738){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____1.call(this,state_34738);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23933__auto__;
})()
;})(switch__23932__auto__,c__23955__auto__,jobs,results,process,async))
})();
var state__23957__auto__ = (function (){var statearr_34767 = f__23956__auto__.call(null);
(statearr_34767[(6)] = c__23955__auto__);

return statearr_34767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23957__auto__);
});})(c__23955__auto__,jobs,results,process,async))
);

return c__23955__auto__;
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
var G__34827 = arguments.length;
switch (G__34827) {
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
var G__34830 = arguments.length;
switch (G__34830) {
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
var G__34833 = arguments.length;
switch (G__34833) {
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
var c__23955__auto___34882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23955__auto___34882,tc,fc){
return (function (){
var f__23956__auto__ = (function (){var switch__23932__auto__ = ((function (c__23955__auto___34882,tc,fc){
return (function (state_34859){
var state_val_34860 = (state_34859[(1)]);
if((state_val_34860 === (7))){
var inst_34855 = (state_34859[(2)]);
var state_34859__$1 = state_34859;
var statearr_34861_34883 = state_34859__$1;
(statearr_34861_34883[(2)] = inst_34855);

(statearr_34861_34883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34860 === (1))){
var state_34859__$1 = state_34859;
var statearr_34862_34884 = state_34859__$1;
(statearr_34862_34884[(2)] = null);

(statearr_34862_34884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34860 === (4))){
var inst_34836 = (state_34859[(7)]);
var inst_34836__$1 = (state_34859[(2)]);
var inst_34837 = (inst_34836__$1 == null);
var state_34859__$1 = (function (){var statearr_34863 = state_34859;
(statearr_34863[(7)] = inst_34836__$1);

return statearr_34863;
})();
if(cljs.core.truth_(inst_34837)){
var statearr_34864_34885 = state_34859__$1;
(statearr_34864_34885[(1)] = (5));

} else {
var statearr_34865_34886 = state_34859__$1;
(statearr_34865_34886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34860 === (13))){
var state_34859__$1 = state_34859;
var statearr_34866_34887 = state_34859__$1;
(statearr_34866_34887[(2)] = null);

(statearr_34866_34887[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34860 === (6))){
var inst_34836 = (state_34859[(7)]);
var inst_34842 = p.call(null,inst_34836);
var state_34859__$1 = state_34859;
if(cljs.core.truth_(inst_34842)){
var statearr_34867_34888 = state_34859__$1;
(statearr_34867_34888[(1)] = (9));

} else {
var statearr_34868_34889 = state_34859__$1;
(statearr_34868_34889[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34860 === (3))){
var inst_34857 = (state_34859[(2)]);
var state_34859__$1 = state_34859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34859__$1,inst_34857);
} else {
if((state_val_34860 === (12))){
var state_34859__$1 = state_34859;
var statearr_34869_34890 = state_34859__$1;
(statearr_34869_34890[(2)] = null);

(statearr_34869_34890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34860 === (2))){
var state_34859__$1 = state_34859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34859__$1,(4),ch);
} else {
if((state_val_34860 === (11))){
var inst_34836 = (state_34859[(7)]);
var inst_34846 = (state_34859[(2)]);
var state_34859__$1 = state_34859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34859__$1,(8),inst_34846,inst_34836);
} else {
if((state_val_34860 === (9))){
var state_34859__$1 = state_34859;
var statearr_34870_34891 = state_34859__$1;
(statearr_34870_34891[(2)] = tc);

(statearr_34870_34891[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34860 === (5))){
var inst_34839 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34840 = cljs.core.async.close_BANG_.call(null,fc);
var state_34859__$1 = (function (){var statearr_34871 = state_34859;
(statearr_34871[(8)] = inst_34839);

return statearr_34871;
})();
var statearr_34872_34892 = state_34859__$1;
(statearr_34872_34892[(2)] = inst_34840);

(statearr_34872_34892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34860 === (14))){
var inst_34853 = (state_34859[(2)]);
var state_34859__$1 = state_34859;
var statearr_34873_34893 = state_34859__$1;
(statearr_34873_34893[(2)] = inst_34853);

(statearr_34873_34893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34860 === (10))){
var state_34859__$1 = state_34859;
var statearr_34874_34894 = state_34859__$1;
(statearr_34874_34894[(2)] = fc);

(statearr_34874_34894[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34860 === (8))){
var inst_34848 = (state_34859[(2)]);
var state_34859__$1 = state_34859;
if(cljs.core.truth_(inst_34848)){
var statearr_34875_34895 = state_34859__$1;
(statearr_34875_34895[(1)] = (12));

} else {
var statearr_34876_34896 = state_34859__$1;
(statearr_34876_34896[(1)] = (13));

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
});})(c__23955__auto___34882,tc,fc))
;
return ((function (switch__23932__auto__,c__23955__auto___34882,tc,fc){
return (function() {
var cljs$core$async$state_machine__23933__auto__ = null;
var cljs$core$async$state_machine__23933__auto____0 = (function (){
var statearr_34877 = [null,null,null,null,null,null,null,null,null];
(statearr_34877[(0)] = cljs$core$async$state_machine__23933__auto__);

(statearr_34877[(1)] = (1));

return statearr_34877;
});
var cljs$core$async$state_machine__23933__auto____1 = (function (state_34859){
while(true){
var ret_value__23934__auto__ = (function (){try{while(true){
var result__23935__auto__ = switch__23932__auto__.call(null,state_34859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23935__auto__;
}
break;
}
}catch (e34878){if((e34878 instanceof Object)){
var ex__23936__auto__ = e34878;
var statearr_34879_34897 = state_34859;
(statearr_34879_34897[(5)] = ex__23936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34898 = state_34859;
state_34859 = G__34898;
continue;
} else {
return ret_value__23934__auto__;
}
break;
}
});
cljs$core$async$state_machine__23933__auto__ = function(state_34859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23933__auto____1.call(this,state_34859);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23933__auto____0;
cljs$core$async$state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23933__auto____1;
return cljs$core$async$state_machine__23933__auto__;
})()
;})(switch__23932__auto__,c__23955__auto___34882,tc,fc))
})();
var state__23957__auto__ = (function (){var statearr_34880 = f__23956__auto__.call(null);
(statearr_34880[(6)] = c__23955__auto___34882);

return statearr_34880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23957__auto__);
});})(c__23955__auto___34882,tc,fc))
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
var c__23955__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23955__auto__){
return (function (){
var f__23956__auto__ = (function (){var switch__23932__auto__ = ((function (c__23955__auto__){
return (function (state_34919){
var state_val_34920 = (state_34919[(1)]);
if((state_val_34920 === (7))){
var inst_34915 = (state_34919[(2)]);
var state_34919__$1 = state_34919;
var statearr_34921_34939 = state_34919__$1;
(statearr_34921_34939[(2)] = inst_34915);

(statearr_34921_34939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (1))){
var inst_34899 = init;
var state_34919__$1 = (function (){var statearr_34922 = state_34919;
(statearr_34922[(7)] = inst_34899);

return statearr_34922;
})();
var statearr_34923_34940 = state_34919__$1;
(statearr_34923_34940[(2)] = null);

(statearr_34923_34940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (4))){
var inst_34902 = (state_34919[(8)]);
var inst_34902__$1 = (state_34919[(2)]);
var inst_34903 = (inst_34902__$1 == null);
var state_34919__$1 = (function (){var statearr_34924 = state_34919;
(statearr_34924[(8)] = inst_34902__$1);

return statearr_34924;
})();
if(cljs.core.truth_(inst_34903)){
var statearr_34925_34941 = state_34919__$1;
(statearr_34925_34941[(1)] = (5));

} else {
var statearr_34926_34942 = state_34919__$1;
(statearr_34926_34942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (6))){
var inst_34899 = (state_34919[(7)]);
var inst_34906 = (state_34919[(9)]);
var inst_34902 = (state_34919[(8)]);
var inst_34906__$1 = f.call(null,inst_34899,inst_34902);
var inst_34907 = cljs.core.reduced_QMARK_.call(null,inst_34906__$1);
var state_34919__$1 = (function (){var statearr_34927 = state_34919;
(statearr_34927[(9)] = inst_34906__$1);

return statearr_34927;
})();
if(inst_34907){
var statearr_34928_34943 = state_34919__$1;
(statearr_34928_34943[(1)] = (8));

} else {
var statearr_34929_34944 = state_34919__$1;
(statearr_34929_34944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (3))){
var inst_34917 = (state_34919[(2)]);
var state_34919__$1 = state_34919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34919__$1,inst_34917);
} else {
if((state_val_34920 === (2))){
var state_34919__$1 = state_34919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34919__$1,(4),ch);
} else {
if((state_val_34920 === (9))){
var inst_34906 = (state_34919[(9)]);
var inst_34899 = inst_34906;
var state_34919__$1 = (function (){var statearr_34930 = state_34919;
(statearr_34930[(7)] = inst_34899);

return statearr_34930;
})();
var statearr_34931_34945 = state_34919__$1;
(statearr_34931_34945[(2)] = null);

(statearr_34931_34945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (5))){
var inst_34899 = (state_34919[(7)]);
var state_34919__$1 = state_34919;
var statearr_34932_34946 = state_34919__$1;
(statearr_34932_34946[(2)] = inst_34899);

(statearr_34932_34946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (10))){
var inst_34913 = (state_34919[(2)]);
var state_34919__$1 = state_34919;
var statearr_34933_34947 = state_34919__$1;
(statearr_34933_34947[(2)] = inst_34913);

(statearr_34933_34947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (8))){
var inst_34906 = (state_34919[(9)]);
var inst_34909 = cljs.core.deref.call(null,inst_34906);
var state_34919__$1 = state_34919;
var statearr_34934_34948 = state_34919__$1;
(statearr_34934_34948[(2)] = inst_34909);

(statearr_34934_34948[(1)] = (10));


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
});})(c__23955__auto__))
;
return ((function (switch__23932__auto__,c__23955__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23933__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23933__auto____0 = (function (){
var statearr_34935 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34935[(0)] = cljs$core$async$reduce_$_state_machine__23933__auto__);

(statearr_34935[(1)] = (1));

return statearr_34935;
});
var cljs$core$async$reduce_$_state_machine__23933__auto____1 = (function (state_34919){
while(true){
var ret_value__23934__auto__ = (function (){try{while(true){
var result__23935__auto__ = switch__23932__auto__.call(null,state_34919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23935__auto__;
}
break;
}
}catch (e34936){if((e34936 instanceof Object)){
var ex__23936__auto__ = e34936;
var statearr_34937_34949 = state_34919;
(statearr_34937_34949[(5)] = ex__23936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34950 = state_34919;
state_34919 = G__34950;
continue;
} else {
return ret_value__23934__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23933__auto__ = function(state_34919){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23933__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23933__auto____1.call(this,state_34919);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23933__auto____0;
cljs$core$async$reduce_$_state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23933__auto____1;
return cljs$core$async$reduce_$_state_machine__23933__auto__;
})()
;})(switch__23932__auto__,c__23955__auto__))
})();
var state__23957__auto__ = (function (){var statearr_34938 = f__23956__auto__.call(null);
(statearr_34938[(6)] = c__23955__auto__);

return statearr_34938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23957__auto__);
});})(c__23955__auto__))
);

return c__23955__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23955__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23955__auto__,f__$1){
return (function (){
var f__23956__auto__ = (function (){var switch__23932__auto__ = ((function (c__23955__auto__,f__$1){
return (function (state_34956){
var state_val_34957 = (state_34956[(1)]);
if((state_val_34957 === (1))){
var inst_34951 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34956__$1 = state_34956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34956__$1,(2),inst_34951);
} else {
if((state_val_34957 === (2))){
var inst_34953 = (state_34956[(2)]);
var inst_34954 = f__$1.call(null,inst_34953);
var state_34956__$1 = state_34956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34956__$1,inst_34954);
} else {
return null;
}
}
});})(c__23955__auto__,f__$1))
;
return ((function (switch__23932__auto__,c__23955__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23933__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23933__auto____0 = (function (){
var statearr_34958 = [null,null,null,null,null,null,null];
(statearr_34958[(0)] = cljs$core$async$transduce_$_state_machine__23933__auto__);

(statearr_34958[(1)] = (1));

return statearr_34958;
});
var cljs$core$async$transduce_$_state_machine__23933__auto____1 = (function (state_34956){
while(true){
var ret_value__23934__auto__ = (function (){try{while(true){
var result__23935__auto__ = switch__23932__auto__.call(null,state_34956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23935__auto__;
}
break;
}
}catch (e34959){if((e34959 instanceof Object)){
var ex__23936__auto__ = e34959;
var statearr_34960_34962 = state_34956;
(statearr_34960_34962[(5)] = ex__23936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34963 = state_34956;
state_34956 = G__34963;
continue;
} else {
return ret_value__23934__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23933__auto__ = function(state_34956){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23933__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23933__auto____1.call(this,state_34956);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23933__auto____0;
cljs$core$async$transduce_$_state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23933__auto____1;
return cljs$core$async$transduce_$_state_machine__23933__auto__;
})()
;})(switch__23932__auto__,c__23955__auto__,f__$1))
})();
var state__23957__auto__ = (function (){var statearr_34961 = f__23956__auto__.call(null);
(statearr_34961[(6)] = c__23955__auto__);

return statearr_34961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23957__auto__);
});})(c__23955__auto__,f__$1))
);

return c__23955__auto__;
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
var G__34965 = arguments.length;
switch (G__34965) {
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
var c__23955__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23955__auto__){
return (function (){
var f__23956__auto__ = (function (){var switch__23932__auto__ = ((function (c__23955__auto__){
return (function (state_34990){
var state_val_34991 = (state_34990[(1)]);
if((state_val_34991 === (7))){
var inst_34972 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_34992_35013 = state_34990__$1;
(statearr_34992_35013[(2)] = inst_34972);

(statearr_34992_35013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (1))){
var inst_34966 = cljs.core.seq.call(null,coll);
var inst_34967 = inst_34966;
var state_34990__$1 = (function (){var statearr_34993 = state_34990;
(statearr_34993[(7)] = inst_34967);

return statearr_34993;
})();
var statearr_34994_35014 = state_34990__$1;
(statearr_34994_35014[(2)] = null);

(statearr_34994_35014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (4))){
var inst_34967 = (state_34990[(7)]);
var inst_34970 = cljs.core.first.call(null,inst_34967);
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34990__$1,(7),ch,inst_34970);
} else {
if((state_val_34991 === (13))){
var inst_34984 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_34995_35015 = state_34990__$1;
(statearr_34995_35015[(2)] = inst_34984);

(statearr_34995_35015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (6))){
var inst_34975 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
if(cljs.core.truth_(inst_34975)){
var statearr_34996_35016 = state_34990__$1;
(statearr_34996_35016[(1)] = (8));

} else {
var statearr_34997_35017 = state_34990__$1;
(statearr_34997_35017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (3))){
var inst_34988 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34990__$1,inst_34988);
} else {
if((state_val_34991 === (12))){
var state_34990__$1 = state_34990;
var statearr_34998_35018 = state_34990__$1;
(statearr_34998_35018[(2)] = null);

(statearr_34998_35018[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (2))){
var inst_34967 = (state_34990[(7)]);
var state_34990__$1 = state_34990;
if(cljs.core.truth_(inst_34967)){
var statearr_34999_35019 = state_34990__$1;
(statearr_34999_35019[(1)] = (4));

} else {
var statearr_35000_35020 = state_34990__$1;
(statearr_35000_35020[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (11))){
var inst_34981 = cljs.core.async.close_BANG_.call(null,ch);
var state_34990__$1 = state_34990;
var statearr_35001_35021 = state_34990__$1;
(statearr_35001_35021[(2)] = inst_34981);

(statearr_35001_35021[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (9))){
var state_34990__$1 = state_34990;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35002_35022 = state_34990__$1;
(statearr_35002_35022[(1)] = (11));

} else {
var statearr_35003_35023 = state_34990__$1;
(statearr_35003_35023[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (5))){
var inst_34967 = (state_34990[(7)]);
var state_34990__$1 = state_34990;
var statearr_35004_35024 = state_34990__$1;
(statearr_35004_35024[(2)] = inst_34967);

(statearr_35004_35024[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (10))){
var inst_34986 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35005_35025 = state_34990__$1;
(statearr_35005_35025[(2)] = inst_34986);

(statearr_35005_35025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (8))){
var inst_34967 = (state_34990[(7)]);
var inst_34977 = cljs.core.next.call(null,inst_34967);
var inst_34967__$1 = inst_34977;
var state_34990__$1 = (function (){var statearr_35006 = state_34990;
(statearr_35006[(7)] = inst_34967__$1);

return statearr_35006;
})();
var statearr_35007_35026 = state_34990__$1;
(statearr_35007_35026[(2)] = null);

(statearr_35007_35026[(1)] = (2));


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
});})(c__23955__auto__))
;
return ((function (switch__23932__auto__,c__23955__auto__){
return (function() {
var cljs$core$async$state_machine__23933__auto__ = null;
var cljs$core$async$state_machine__23933__auto____0 = (function (){
var statearr_35008 = [null,null,null,null,null,null,null,null];
(statearr_35008[(0)] = cljs$core$async$state_machine__23933__auto__);

(statearr_35008[(1)] = (1));

return statearr_35008;
});
var cljs$core$async$state_machine__23933__auto____1 = (function (state_34990){
while(true){
var ret_value__23934__auto__ = (function (){try{while(true){
var result__23935__auto__ = switch__23932__auto__.call(null,state_34990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23935__auto__;
}
break;
}
}catch (e35009){if((e35009 instanceof Object)){
var ex__23936__auto__ = e35009;
var statearr_35010_35027 = state_34990;
(statearr_35010_35027[(5)] = ex__23936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35028 = state_34990;
state_34990 = G__35028;
continue;
} else {
return ret_value__23934__auto__;
}
break;
}
});
cljs$core$async$state_machine__23933__auto__ = function(state_34990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23933__auto____1.call(this,state_34990);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23933__auto____0;
cljs$core$async$state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23933__auto____1;
return cljs$core$async$state_machine__23933__auto__;
})()
;})(switch__23932__auto__,c__23955__auto__))
})();
var state__23957__auto__ = (function (){var statearr_35011 = f__23956__auto__.call(null);
(statearr_35011[(6)] = c__23955__auto__);

return statearr_35011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23957__auto__);
});})(c__23955__auto__))
);

return c__23955__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async35029 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35029 = (function (ch,cs,meta35030){
this.ch = ch;
this.cs = cs;
this.meta35030 = meta35030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35031,meta35030__$1){
var self__ = this;
var _35031__$1 = this;
return (new cljs.core.async.t_cljs$core$async35029(self__.ch,self__.cs,meta35030__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35029.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35031){
var self__ = this;
var _35031__$1 = this;
return self__.meta35030;
});})(cs))
;

cljs.core.async.t_cljs$core$async35029.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35029.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35029.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35029.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35029.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35029.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35029.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35030","meta35030",-2037686981,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35029.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35029";

cljs.core.async.t_cljs$core$async35029.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35029");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35029.
 */
cljs.core.async.__GT_t_cljs$core$async35029 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35029(ch__$1,cs__$1,meta35030){
return (new cljs.core.async.t_cljs$core$async35029(ch__$1,cs__$1,meta35030));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35029(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23955__auto___35251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23955__auto___35251,cs,m,dchan,dctr,done){
return (function (){
var f__23956__auto__ = (function (){var switch__23932__auto__ = ((function (c__23955__auto___35251,cs,m,dchan,dctr,done){
return (function (state_35166){
var state_val_35167 = (state_35166[(1)]);
if((state_val_35167 === (7))){
var inst_35162 = (state_35166[(2)]);
var state_35166__$1 = state_35166;
var statearr_35168_35252 = state_35166__$1;
(statearr_35168_35252[(2)] = inst_35162);

(statearr_35168_35252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (20))){
var inst_35065 = (state_35166[(7)]);
var inst_35077 = cljs.core.first.call(null,inst_35065);
var inst_35078 = cljs.core.nth.call(null,inst_35077,(0),null);
var inst_35079 = cljs.core.nth.call(null,inst_35077,(1),null);
var state_35166__$1 = (function (){var statearr_35169 = state_35166;
(statearr_35169[(8)] = inst_35078);

return statearr_35169;
})();
if(cljs.core.truth_(inst_35079)){
var statearr_35170_35253 = state_35166__$1;
(statearr_35170_35253[(1)] = (22));

} else {
var statearr_35171_35254 = state_35166__$1;
(statearr_35171_35254[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (27))){
var inst_35109 = (state_35166[(9)]);
var inst_35107 = (state_35166[(10)]);
var inst_35034 = (state_35166[(11)]);
var inst_35114 = (state_35166[(12)]);
var inst_35114__$1 = cljs.core._nth.call(null,inst_35107,inst_35109);
var inst_35115 = cljs.core.async.put_BANG_.call(null,inst_35114__$1,inst_35034,done);
var state_35166__$1 = (function (){var statearr_35172 = state_35166;
(statearr_35172[(12)] = inst_35114__$1);

return statearr_35172;
})();
if(cljs.core.truth_(inst_35115)){
var statearr_35173_35255 = state_35166__$1;
(statearr_35173_35255[(1)] = (30));

} else {
var statearr_35174_35256 = state_35166__$1;
(statearr_35174_35256[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (1))){
var state_35166__$1 = state_35166;
var statearr_35175_35257 = state_35166__$1;
(statearr_35175_35257[(2)] = null);

(statearr_35175_35257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (24))){
var inst_35065 = (state_35166[(7)]);
var inst_35084 = (state_35166[(2)]);
var inst_35085 = cljs.core.next.call(null,inst_35065);
var inst_35043 = inst_35085;
var inst_35044 = null;
var inst_35045 = (0);
var inst_35046 = (0);
var state_35166__$1 = (function (){var statearr_35176 = state_35166;
(statearr_35176[(13)] = inst_35044);

(statearr_35176[(14)] = inst_35084);

(statearr_35176[(15)] = inst_35043);

(statearr_35176[(16)] = inst_35046);

(statearr_35176[(17)] = inst_35045);

return statearr_35176;
})();
var statearr_35177_35258 = state_35166__$1;
(statearr_35177_35258[(2)] = null);

(statearr_35177_35258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (39))){
var state_35166__$1 = state_35166;
var statearr_35181_35259 = state_35166__$1;
(statearr_35181_35259[(2)] = null);

(statearr_35181_35259[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (4))){
var inst_35034 = (state_35166[(11)]);
var inst_35034__$1 = (state_35166[(2)]);
var inst_35035 = (inst_35034__$1 == null);
var state_35166__$1 = (function (){var statearr_35182 = state_35166;
(statearr_35182[(11)] = inst_35034__$1);

return statearr_35182;
})();
if(cljs.core.truth_(inst_35035)){
var statearr_35183_35260 = state_35166__$1;
(statearr_35183_35260[(1)] = (5));

} else {
var statearr_35184_35261 = state_35166__$1;
(statearr_35184_35261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (15))){
var inst_35044 = (state_35166[(13)]);
var inst_35043 = (state_35166[(15)]);
var inst_35046 = (state_35166[(16)]);
var inst_35045 = (state_35166[(17)]);
var inst_35061 = (state_35166[(2)]);
var inst_35062 = (inst_35046 + (1));
var tmp35178 = inst_35044;
var tmp35179 = inst_35043;
var tmp35180 = inst_35045;
var inst_35043__$1 = tmp35179;
var inst_35044__$1 = tmp35178;
var inst_35045__$1 = tmp35180;
var inst_35046__$1 = inst_35062;
var state_35166__$1 = (function (){var statearr_35185 = state_35166;
(statearr_35185[(18)] = inst_35061);

(statearr_35185[(13)] = inst_35044__$1);

(statearr_35185[(15)] = inst_35043__$1);

(statearr_35185[(16)] = inst_35046__$1);

(statearr_35185[(17)] = inst_35045__$1);

return statearr_35185;
})();
var statearr_35186_35262 = state_35166__$1;
(statearr_35186_35262[(2)] = null);

(statearr_35186_35262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (21))){
var inst_35088 = (state_35166[(2)]);
var state_35166__$1 = state_35166;
var statearr_35190_35263 = state_35166__$1;
(statearr_35190_35263[(2)] = inst_35088);

(statearr_35190_35263[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (31))){
var inst_35114 = (state_35166[(12)]);
var inst_35118 = done.call(null,null);
var inst_35119 = cljs.core.async.untap_STAR_.call(null,m,inst_35114);
var state_35166__$1 = (function (){var statearr_35191 = state_35166;
(statearr_35191[(19)] = inst_35118);

return statearr_35191;
})();
var statearr_35192_35264 = state_35166__$1;
(statearr_35192_35264[(2)] = inst_35119);

(statearr_35192_35264[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (32))){
var inst_35109 = (state_35166[(9)]);
var inst_35107 = (state_35166[(10)]);
var inst_35108 = (state_35166[(20)]);
var inst_35106 = (state_35166[(21)]);
var inst_35121 = (state_35166[(2)]);
var inst_35122 = (inst_35109 + (1));
var tmp35187 = inst_35107;
var tmp35188 = inst_35108;
var tmp35189 = inst_35106;
var inst_35106__$1 = tmp35189;
var inst_35107__$1 = tmp35187;
var inst_35108__$1 = tmp35188;
var inst_35109__$1 = inst_35122;
var state_35166__$1 = (function (){var statearr_35193 = state_35166;
(statearr_35193[(9)] = inst_35109__$1);

(statearr_35193[(10)] = inst_35107__$1);

(statearr_35193[(20)] = inst_35108__$1);

(statearr_35193[(22)] = inst_35121);

(statearr_35193[(21)] = inst_35106__$1);

return statearr_35193;
})();
var statearr_35194_35265 = state_35166__$1;
(statearr_35194_35265[(2)] = null);

(statearr_35194_35265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (40))){
var inst_35134 = (state_35166[(23)]);
var inst_35138 = done.call(null,null);
var inst_35139 = cljs.core.async.untap_STAR_.call(null,m,inst_35134);
var state_35166__$1 = (function (){var statearr_35195 = state_35166;
(statearr_35195[(24)] = inst_35138);

return statearr_35195;
})();
var statearr_35196_35266 = state_35166__$1;
(statearr_35196_35266[(2)] = inst_35139);

(statearr_35196_35266[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (33))){
var inst_35125 = (state_35166[(25)]);
var inst_35127 = cljs.core.chunked_seq_QMARK_.call(null,inst_35125);
var state_35166__$1 = state_35166;
if(inst_35127){
var statearr_35197_35267 = state_35166__$1;
(statearr_35197_35267[(1)] = (36));

} else {
var statearr_35198_35268 = state_35166__$1;
(statearr_35198_35268[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (13))){
var inst_35055 = (state_35166[(26)]);
var inst_35058 = cljs.core.async.close_BANG_.call(null,inst_35055);
var state_35166__$1 = state_35166;
var statearr_35199_35269 = state_35166__$1;
(statearr_35199_35269[(2)] = inst_35058);

(statearr_35199_35269[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (22))){
var inst_35078 = (state_35166[(8)]);
var inst_35081 = cljs.core.async.close_BANG_.call(null,inst_35078);
var state_35166__$1 = state_35166;
var statearr_35200_35270 = state_35166__$1;
(statearr_35200_35270[(2)] = inst_35081);

(statearr_35200_35270[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (36))){
var inst_35125 = (state_35166[(25)]);
var inst_35129 = cljs.core.chunk_first.call(null,inst_35125);
var inst_35130 = cljs.core.chunk_rest.call(null,inst_35125);
var inst_35131 = cljs.core.count.call(null,inst_35129);
var inst_35106 = inst_35130;
var inst_35107 = inst_35129;
var inst_35108 = inst_35131;
var inst_35109 = (0);
var state_35166__$1 = (function (){var statearr_35201 = state_35166;
(statearr_35201[(9)] = inst_35109);

(statearr_35201[(10)] = inst_35107);

(statearr_35201[(20)] = inst_35108);

(statearr_35201[(21)] = inst_35106);

return statearr_35201;
})();
var statearr_35202_35271 = state_35166__$1;
(statearr_35202_35271[(2)] = null);

(statearr_35202_35271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (41))){
var inst_35125 = (state_35166[(25)]);
var inst_35141 = (state_35166[(2)]);
var inst_35142 = cljs.core.next.call(null,inst_35125);
var inst_35106 = inst_35142;
var inst_35107 = null;
var inst_35108 = (0);
var inst_35109 = (0);
var state_35166__$1 = (function (){var statearr_35203 = state_35166;
(statearr_35203[(9)] = inst_35109);

(statearr_35203[(10)] = inst_35107);

(statearr_35203[(20)] = inst_35108);

(statearr_35203[(21)] = inst_35106);

(statearr_35203[(27)] = inst_35141);

return statearr_35203;
})();
var statearr_35204_35272 = state_35166__$1;
(statearr_35204_35272[(2)] = null);

(statearr_35204_35272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (43))){
var state_35166__$1 = state_35166;
var statearr_35205_35273 = state_35166__$1;
(statearr_35205_35273[(2)] = null);

(statearr_35205_35273[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (29))){
var inst_35150 = (state_35166[(2)]);
var state_35166__$1 = state_35166;
var statearr_35206_35274 = state_35166__$1;
(statearr_35206_35274[(2)] = inst_35150);

(statearr_35206_35274[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (44))){
var inst_35159 = (state_35166[(2)]);
var state_35166__$1 = (function (){var statearr_35207 = state_35166;
(statearr_35207[(28)] = inst_35159);

return statearr_35207;
})();
var statearr_35208_35275 = state_35166__$1;
(statearr_35208_35275[(2)] = null);

(statearr_35208_35275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (6))){
var inst_35098 = (state_35166[(29)]);
var inst_35097 = cljs.core.deref.call(null,cs);
var inst_35098__$1 = cljs.core.keys.call(null,inst_35097);
var inst_35099 = cljs.core.count.call(null,inst_35098__$1);
var inst_35100 = cljs.core.reset_BANG_.call(null,dctr,inst_35099);
var inst_35105 = cljs.core.seq.call(null,inst_35098__$1);
var inst_35106 = inst_35105;
var inst_35107 = null;
var inst_35108 = (0);
var inst_35109 = (0);
var state_35166__$1 = (function (){var statearr_35209 = state_35166;
(statearr_35209[(9)] = inst_35109);

(statearr_35209[(10)] = inst_35107);

(statearr_35209[(20)] = inst_35108);

(statearr_35209[(29)] = inst_35098__$1);

(statearr_35209[(21)] = inst_35106);

(statearr_35209[(30)] = inst_35100);

return statearr_35209;
})();
var statearr_35210_35276 = state_35166__$1;
(statearr_35210_35276[(2)] = null);

(statearr_35210_35276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (28))){
var inst_35106 = (state_35166[(21)]);
var inst_35125 = (state_35166[(25)]);
var inst_35125__$1 = cljs.core.seq.call(null,inst_35106);
var state_35166__$1 = (function (){var statearr_35211 = state_35166;
(statearr_35211[(25)] = inst_35125__$1);

return statearr_35211;
})();
if(inst_35125__$1){
var statearr_35212_35277 = state_35166__$1;
(statearr_35212_35277[(1)] = (33));

} else {
var statearr_35213_35278 = state_35166__$1;
(statearr_35213_35278[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (25))){
var inst_35109 = (state_35166[(9)]);
var inst_35108 = (state_35166[(20)]);
var inst_35111 = (inst_35109 < inst_35108);
var inst_35112 = inst_35111;
var state_35166__$1 = state_35166;
if(cljs.core.truth_(inst_35112)){
var statearr_35214_35279 = state_35166__$1;
(statearr_35214_35279[(1)] = (27));

} else {
var statearr_35215_35280 = state_35166__$1;
(statearr_35215_35280[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (34))){
var state_35166__$1 = state_35166;
var statearr_35216_35281 = state_35166__$1;
(statearr_35216_35281[(2)] = null);

(statearr_35216_35281[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (17))){
var state_35166__$1 = state_35166;
var statearr_35217_35282 = state_35166__$1;
(statearr_35217_35282[(2)] = null);

(statearr_35217_35282[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (3))){
var inst_35164 = (state_35166[(2)]);
var state_35166__$1 = state_35166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35166__$1,inst_35164);
} else {
if((state_val_35167 === (12))){
var inst_35093 = (state_35166[(2)]);
var state_35166__$1 = state_35166;
var statearr_35218_35283 = state_35166__$1;
(statearr_35218_35283[(2)] = inst_35093);

(statearr_35218_35283[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (2))){
var state_35166__$1 = state_35166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35166__$1,(4),ch);
} else {
if((state_val_35167 === (23))){
var state_35166__$1 = state_35166;
var statearr_35219_35284 = state_35166__$1;
(statearr_35219_35284[(2)] = null);

(statearr_35219_35284[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (35))){
var inst_35148 = (state_35166[(2)]);
var state_35166__$1 = state_35166;
var statearr_35220_35285 = state_35166__$1;
(statearr_35220_35285[(2)] = inst_35148);

(statearr_35220_35285[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (19))){
var inst_35065 = (state_35166[(7)]);
var inst_35069 = cljs.core.chunk_first.call(null,inst_35065);
var inst_35070 = cljs.core.chunk_rest.call(null,inst_35065);
var inst_35071 = cljs.core.count.call(null,inst_35069);
var inst_35043 = inst_35070;
var inst_35044 = inst_35069;
var inst_35045 = inst_35071;
var inst_35046 = (0);
var state_35166__$1 = (function (){var statearr_35221 = state_35166;
(statearr_35221[(13)] = inst_35044);

(statearr_35221[(15)] = inst_35043);

(statearr_35221[(16)] = inst_35046);

(statearr_35221[(17)] = inst_35045);

return statearr_35221;
})();
var statearr_35222_35286 = state_35166__$1;
(statearr_35222_35286[(2)] = null);

(statearr_35222_35286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (11))){
var inst_35043 = (state_35166[(15)]);
var inst_35065 = (state_35166[(7)]);
var inst_35065__$1 = cljs.core.seq.call(null,inst_35043);
var state_35166__$1 = (function (){var statearr_35223 = state_35166;
(statearr_35223[(7)] = inst_35065__$1);

return statearr_35223;
})();
if(inst_35065__$1){
var statearr_35224_35287 = state_35166__$1;
(statearr_35224_35287[(1)] = (16));

} else {
var statearr_35225_35288 = state_35166__$1;
(statearr_35225_35288[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (9))){
var inst_35095 = (state_35166[(2)]);
var state_35166__$1 = state_35166;
var statearr_35226_35289 = state_35166__$1;
(statearr_35226_35289[(2)] = inst_35095);

(statearr_35226_35289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (5))){
var inst_35041 = cljs.core.deref.call(null,cs);
var inst_35042 = cljs.core.seq.call(null,inst_35041);
var inst_35043 = inst_35042;
var inst_35044 = null;
var inst_35045 = (0);
var inst_35046 = (0);
var state_35166__$1 = (function (){var statearr_35227 = state_35166;
(statearr_35227[(13)] = inst_35044);

(statearr_35227[(15)] = inst_35043);

(statearr_35227[(16)] = inst_35046);

(statearr_35227[(17)] = inst_35045);

return statearr_35227;
})();
var statearr_35228_35290 = state_35166__$1;
(statearr_35228_35290[(2)] = null);

(statearr_35228_35290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (14))){
var state_35166__$1 = state_35166;
var statearr_35229_35291 = state_35166__$1;
(statearr_35229_35291[(2)] = null);

(statearr_35229_35291[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (45))){
var inst_35156 = (state_35166[(2)]);
var state_35166__$1 = state_35166;
var statearr_35230_35292 = state_35166__$1;
(statearr_35230_35292[(2)] = inst_35156);

(statearr_35230_35292[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (26))){
var inst_35098 = (state_35166[(29)]);
var inst_35152 = (state_35166[(2)]);
var inst_35153 = cljs.core.seq.call(null,inst_35098);
var state_35166__$1 = (function (){var statearr_35231 = state_35166;
(statearr_35231[(31)] = inst_35152);

return statearr_35231;
})();
if(inst_35153){
var statearr_35232_35293 = state_35166__$1;
(statearr_35232_35293[(1)] = (42));

} else {
var statearr_35233_35294 = state_35166__$1;
(statearr_35233_35294[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (16))){
var inst_35065 = (state_35166[(7)]);
var inst_35067 = cljs.core.chunked_seq_QMARK_.call(null,inst_35065);
var state_35166__$1 = state_35166;
if(inst_35067){
var statearr_35234_35295 = state_35166__$1;
(statearr_35234_35295[(1)] = (19));

} else {
var statearr_35235_35296 = state_35166__$1;
(statearr_35235_35296[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (38))){
var inst_35145 = (state_35166[(2)]);
var state_35166__$1 = state_35166;
var statearr_35236_35297 = state_35166__$1;
(statearr_35236_35297[(2)] = inst_35145);

(statearr_35236_35297[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (30))){
var state_35166__$1 = state_35166;
var statearr_35237_35298 = state_35166__$1;
(statearr_35237_35298[(2)] = null);

(statearr_35237_35298[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (10))){
var inst_35044 = (state_35166[(13)]);
var inst_35046 = (state_35166[(16)]);
var inst_35054 = cljs.core._nth.call(null,inst_35044,inst_35046);
var inst_35055 = cljs.core.nth.call(null,inst_35054,(0),null);
var inst_35056 = cljs.core.nth.call(null,inst_35054,(1),null);
var state_35166__$1 = (function (){var statearr_35238 = state_35166;
(statearr_35238[(26)] = inst_35055);

return statearr_35238;
})();
if(cljs.core.truth_(inst_35056)){
var statearr_35239_35299 = state_35166__$1;
(statearr_35239_35299[(1)] = (13));

} else {
var statearr_35240_35300 = state_35166__$1;
(statearr_35240_35300[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (18))){
var inst_35091 = (state_35166[(2)]);
var state_35166__$1 = state_35166;
var statearr_35241_35301 = state_35166__$1;
(statearr_35241_35301[(2)] = inst_35091);

(statearr_35241_35301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (42))){
var state_35166__$1 = state_35166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35166__$1,(45),dchan);
} else {
if((state_val_35167 === (37))){
var inst_35134 = (state_35166[(23)]);
var inst_35034 = (state_35166[(11)]);
var inst_35125 = (state_35166[(25)]);
var inst_35134__$1 = cljs.core.first.call(null,inst_35125);
var inst_35135 = cljs.core.async.put_BANG_.call(null,inst_35134__$1,inst_35034,done);
var state_35166__$1 = (function (){var statearr_35242 = state_35166;
(statearr_35242[(23)] = inst_35134__$1);

return statearr_35242;
})();
if(cljs.core.truth_(inst_35135)){
var statearr_35243_35302 = state_35166__$1;
(statearr_35243_35302[(1)] = (39));

} else {
var statearr_35244_35303 = state_35166__$1;
(statearr_35244_35303[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (8))){
var inst_35046 = (state_35166[(16)]);
var inst_35045 = (state_35166[(17)]);
var inst_35048 = (inst_35046 < inst_35045);
var inst_35049 = inst_35048;
var state_35166__$1 = state_35166;
if(cljs.core.truth_(inst_35049)){
var statearr_35245_35304 = state_35166__$1;
(statearr_35245_35304[(1)] = (10));

} else {
var statearr_35246_35305 = state_35166__$1;
(statearr_35246_35305[(1)] = (11));

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
});})(c__23955__auto___35251,cs,m,dchan,dctr,done))
;
return ((function (switch__23932__auto__,c__23955__auto___35251,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23933__auto__ = null;
var cljs$core$async$mult_$_state_machine__23933__auto____0 = (function (){
var statearr_35247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35247[(0)] = cljs$core$async$mult_$_state_machine__23933__auto__);

(statearr_35247[(1)] = (1));

return statearr_35247;
});
var cljs$core$async$mult_$_state_machine__23933__auto____1 = (function (state_35166){
while(true){
var ret_value__23934__auto__ = (function (){try{while(true){
var result__23935__auto__ = switch__23932__auto__.call(null,state_35166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23935__auto__;
}
break;
}
}catch (e35248){if((e35248 instanceof Object)){
var ex__23936__auto__ = e35248;
var statearr_35249_35306 = state_35166;
(statearr_35249_35306[(5)] = ex__23936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35307 = state_35166;
state_35166 = G__35307;
continue;
} else {
return ret_value__23934__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23933__auto__ = function(state_35166){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23933__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23933__auto____1.call(this,state_35166);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23933__auto____0;
cljs$core$async$mult_$_state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23933__auto____1;
return cljs$core$async$mult_$_state_machine__23933__auto__;
})()
;})(switch__23932__auto__,c__23955__auto___35251,cs,m,dchan,dctr,done))
})();
var state__23957__auto__ = (function (){var statearr_35250 = f__23956__auto__.call(null);
(statearr_35250[(6)] = c__23955__auto___35251);

return statearr_35250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23957__auto__);
});})(c__23955__auto___35251,cs,m,dchan,dctr,done))
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
var G__35309 = arguments.length;
switch (G__35309) {
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
var len__4499__auto___35321 = arguments.length;
var i__4500__auto___35322 = (0);
while(true){
if((i__4500__auto___35322 < len__4499__auto___35321)){
args__4502__auto__.push((arguments[i__4500__auto___35322]));

var G__35323 = (i__4500__auto___35322 + (1));
i__4500__auto___35322 = G__35323;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35315){
var map__35316 = p__35315;
var map__35316__$1 = ((((!((map__35316 == null)))?(((((map__35316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35316):map__35316);
var opts = map__35316__$1;
var statearr_35318_35324 = state;
(statearr_35318_35324[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__35316,map__35316__$1,opts){
return (function (val){
var statearr_35319_35325 = state;
(statearr_35319_35325[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35316,map__35316__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_35320_35326 = state;
(statearr_35320_35326[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35311){
var G__35312 = cljs.core.first.call(null,seq35311);
var seq35311__$1 = cljs.core.next.call(null,seq35311);
var G__35313 = cljs.core.first.call(null,seq35311__$1);
var seq35311__$2 = cljs.core.next.call(null,seq35311__$1);
var G__35314 = cljs.core.first.call(null,seq35311__$2);
var seq35311__$3 = cljs.core.next.call(null,seq35311__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35312,G__35313,G__35314,seq35311__$3);
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
if(typeof cljs.core.async.t_cljs$core$async35327 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35327 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta35328){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta35328 = meta35328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35329,meta35328__$1){
var self__ = this;
var _35329__$1 = this;
return (new cljs.core.async.t_cljs$core$async35327(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta35328__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35327.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35329){
var self__ = this;
var _35329__$1 = this;
return self__.meta35328;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35327.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35327.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35327.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35327.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35327.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35327.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35327.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35327.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async35327.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta35328","meta35328",-377074787,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35327.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35327";

cljs.core.async.t_cljs$core$async35327.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35327");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35327.
 */
cljs.core.async.__GT_t_cljs$core$async35327 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35327(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35328){
return (new cljs.core.async.t_cljs$core$async35327(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35328));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35327(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23955__auto___35491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23955__auto___35491,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23956__auto__ = (function (){var switch__23932__auto__ = ((function (c__23955__auto___35491,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35431){
var state_val_35432 = (state_35431[(1)]);
if((state_val_35432 === (7))){
var inst_35346 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35433_35492 = state_35431__$1;
(statearr_35433_35492[(2)] = inst_35346);

(statearr_35433_35492[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (20))){
var inst_35358 = (state_35431[(7)]);
var state_35431__$1 = state_35431;
var statearr_35434_35493 = state_35431__$1;
(statearr_35434_35493[(2)] = inst_35358);

(statearr_35434_35493[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (27))){
var state_35431__$1 = state_35431;
var statearr_35435_35494 = state_35431__$1;
(statearr_35435_35494[(2)] = null);

(statearr_35435_35494[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (1))){
var inst_35333 = (state_35431[(8)]);
var inst_35333__$1 = calc_state.call(null);
var inst_35335 = (inst_35333__$1 == null);
var inst_35336 = cljs.core.not.call(null,inst_35335);
var state_35431__$1 = (function (){var statearr_35436 = state_35431;
(statearr_35436[(8)] = inst_35333__$1);

return statearr_35436;
})();
if(inst_35336){
var statearr_35437_35495 = state_35431__$1;
(statearr_35437_35495[(1)] = (2));

} else {
var statearr_35438_35496 = state_35431__$1;
(statearr_35438_35496[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (24))){
var inst_35391 = (state_35431[(9)]);
var inst_35382 = (state_35431[(10)]);
var inst_35405 = (state_35431[(11)]);
var inst_35405__$1 = inst_35382.call(null,inst_35391);
var state_35431__$1 = (function (){var statearr_35439 = state_35431;
(statearr_35439[(11)] = inst_35405__$1);

return statearr_35439;
})();
if(cljs.core.truth_(inst_35405__$1)){
var statearr_35440_35497 = state_35431__$1;
(statearr_35440_35497[(1)] = (29));

} else {
var statearr_35441_35498 = state_35431__$1;
(statearr_35441_35498[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (4))){
var inst_35349 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
if(cljs.core.truth_(inst_35349)){
var statearr_35442_35499 = state_35431__$1;
(statearr_35442_35499[(1)] = (8));

} else {
var statearr_35443_35500 = state_35431__$1;
(statearr_35443_35500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (15))){
var inst_35376 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
if(cljs.core.truth_(inst_35376)){
var statearr_35444_35501 = state_35431__$1;
(statearr_35444_35501[(1)] = (19));

} else {
var statearr_35445_35502 = state_35431__$1;
(statearr_35445_35502[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (21))){
var inst_35381 = (state_35431[(12)]);
var inst_35381__$1 = (state_35431[(2)]);
var inst_35382 = cljs.core.get.call(null,inst_35381__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35383 = cljs.core.get.call(null,inst_35381__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35384 = cljs.core.get.call(null,inst_35381__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35431__$1 = (function (){var statearr_35446 = state_35431;
(statearr_35446[(13)] = inst_35383);

(statearr_35446[(12)] = inst_35381__$1);

(statearr_35446[(10)] = inst_35382);

return statearr_35446;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35431__$1,(22),inst_35384);
} else {
if((state_val_35432 === (31))){
var inst_35413 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
if(cljs.core.truth_(inst_35413)){
var statearr_35447_35503 = state_35431__$1;
(statearr_35447_35503[(1)] = (32));

} else {
var statearr_35448_35504 = state_35431__$1;
(statearr_35448_35504[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (32))){
var inst_35390 = (state_35431[(14)]);
var state_35431__$1 = state_35431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35431__$1,(35),out,inst_35390);
} else {
if((state_val_35432 === (33))){
var inst_35381 = (state_35431[(12)]);
var inst_35358 = inst_35381;
var state_35431__$1 = (function (){var statearr_35449 = state_35431;
(statearr_35449[(7)] = inst_35358);

return statearr_35449;
})();
var statearr_35450_35505 = state_35431__$1;
(statearr_35450_35505[(2)] = null);

(statearr_35450_35505[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (13))){
var inst_35358 = (state_35431[(7)]);
var inst_35365 = inst_35358.cljs$lang$protocol_mask$partition0$;
var inst_35366 = (inst_35365 & (64));
var inst_35367 = inst_35358.cljs$core$ISeq$;
var inst_35368 = (cljs.core.PROTOCOL_SENTINEL === inst_35367);
var inst_35369 = ((inst_35366) || (inst_35368));
var state_35431__$1 = state_35431;
if(cljs.core.truth_(inst_35369)){
var statearr_35451_35506 = state_35431__$1;
(statearr_35451_35506[(1)] = (16));

} else {
var statearr_35452_35507 = state_35431__$1;
(statearr_35452_35507[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (22))){
var inst_35391 = (state_35431[(9)]);
var inst_35390 = (state_35431[(14)]);
var inst_35389 = (state_35431[(2)]);
var inst_35390__$1 = cljs.core.nth.call(null,inst_35389,(0),null);
var inst_35391__$1 = cljs.core.nth.call(null,inst_35389,(1),null);
var inst_35392 = (inst_35390__$1 == null);
var inst_35393 = cljs.core._EQ_.call(null,inst_35391__$1,change);
var inst_35394 = ((inst_35392) || (inst_35393));
var state_35431__$1 = (function (){var statearr_35453 = state_35431;
(statearr_35453[(9)] = inst_35391__$1);

(statearr_35453[(14)] = inst_35390__$1);

return statearr_35453;
})();
if(cljs.core.truth_(inst_35394)){
var statearr_35454_35508 = state_35431__$1;
(statearr_35454_35508[(1)] = (23));

} else {
var statearr_35455_35509 = state_35431__$1;
(statearr_35455_35509[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (36))){
var inst_35381 = (state_35431[(12)]);
var inst_35358 = inst_35381;
var state_35431__$1 = (function (){var statearr_35456 = state_35431;
(statearr_35456[(7)] = inst_35358);

return statearr_35456;
})();
var statearr_35457_35510 = state_35431__$1;
(statearr_35457_35510[(2)] = null);

(statearr_35457_35510[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (29))){
var inst_35405 = (state_35431[(11)]);
var state_35431__$1 = state_35431;
var statearr_35458_35511 = state_35431__$1;
(statearr_35458_35511[(2)] = inst_35405);

(statearr_35458_35511[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (6))){
var state_35431__$1 = state_35431;
var statearr_35459_35512 = state_35431__$1;
(statearr_35459_35512[(2)] = false);

(statearr_35459_35512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (28))){
var inst_35401 = (state_35431[(2)]);
var inst_35402 = calc_state.call(null);
var inst_35358 = inst_35402;
var state_35431__$1 = (function (){var statearr_35460 = state_35431;
(statearr_35460[(15)] = inst_35401);

(statearr_35460[(7)] = inst_35358);

return statearr_35460;
})();
var statearr_35461_35513 = state_35431__$1;
(statearr_35461_35513[(2)] = null);

(statearr_35461_35513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (25))){
var inst_35427 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35462_35514 = state_35431__$1;
(statearr_35462_35514[(2)] = inst_35427);

(statearr_35462_35514[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (34))){
var inst_35425 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35463_35515 = state_35431__$1;
(statearr_35463_35515[(2)] = inst_35425);

(statearr_35463_35515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (17))){
var state_35431__$1 = state_35431;
var statearr_35464_35516 = state_35431__$1;
(statearr_35464_35516[(2)] = false);

(statearr_35464_35516[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (3))){
var state_35431__$1 = state_35431;
var statearr_35465_35517 = state_35431__$1;
(statearr_35465_35517[(2)] = false);

(statearr_35465_35517[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (12))){
var inst_35429 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35431__$1,inst_35429);
} else {
if((state_val_35432 === (2))){
var inst_35333 = (state_35431[(8)]);
var inst_35338 = inst_35333.cljs$lang$protocol_mask$partition0$;
var inst_35339 = (inst_35338 & (64));
var inst_35340 = inst_35333.cljs$core$ISeq$;
var inst_35341 = (cljs.core.PROTOCOL_SENTINEL === inst_35340);
var inst_35342 = ((inst_35339) || (inst_35341));
var state_35431__$1 = state_35431;
if(cljs.core.truth_(inst_35342)){
var statearr_35466_35518 = state_35431__$1;
(statearr_35466_35518[(1)] = (5));

} else {
var statearr_35467_35519 = state_35431__$1;
(statearr_35467_35519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (23))){
var inst_35390 = (state_35431[(14)]);
var inst_35396 = (inst_35390 == null);
var state_35431__$1 = state_35431;
if(cljs.core.truth_(inst_35396)){
var statearr_35468_35520 = state_35431__$1;
(statearr_35468_35520[(1)] = (26));

} else {
var statearr_35469_35521 = state_35431__$1;
(statearr_35469_35521[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (35))){
var inst_35416 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
if(cljs.core.truth_(inst_35416)){
var statearr_35470_35522 = state_35431__$1;
(statearr_35470_35522[(1)] = (36));

} else {
var statearr_35471_35523 = state_35431__$1;
(statearr_35471_35523[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (19))){
var inst_35358 = (state_35431[(7)]);
var inst_35378 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35358);
var state_35431__$1 = state_35431;
var statearr_35472_35524 = state_35431__$1;
(statearr_35472_35524[(2)] = inst_35378);

(statearr_35472_35524[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (11))){
var inst_35358 = (state_35431[(7)]);
var inst_35362 = (inst_35358 == null);
var inst_35363 = cljs.core.not.call(null,inst_35362);
var state_35431__$1 = state_35431;
if(inst_35363){
var statearr_35473_35525 = state_35431__$1;
(statearr_35473_35525[(1)] = (13));

} else {
var statearr_35474_35526 = state_35431__$1;
(statearr_35474_35526[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (9))){
var inst_35333 = (state_35431[(8)]);
var state_35431__$1 = state_35431;
var statearr_35475_35527 = state_35431__$1;
(statearr_35475_35527[(2)] = inst_35333);

(statearr_35475_35527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (5))){
var state_35431__$1 = state_35431;
var statearr_35476_35528 = state_35431__$1;
(statearr_35476_35528[(2)] = true);

(statearr_35476_35528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (14))){
var state_35431__$1 = state_35431;
var statearr_35477_35529 = state_35431__$1;
(statearr_35477_35529[(2)] = false);

(statearr_35477_35529[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (26))){
var inst_35391 = (state_35431[(9)]);
var inst_35398 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35391);
var state_35431__$1 = state_35431;
var statearr_35478_35530 = state_35431__$1;
(statearr_35478_35530[(2)] = inst_35398);

(statearr_35478_35530[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (16))){
var state_35431__$1 = state_35431;
var statearr_35479_35531 = state_35431__$1;
(statearr_35479_35531[(2)] = true);

(statearr_35479_35531[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (38))){
var inst_35421 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35480_35532 = state_35431__$1;
(statearr_35480_35532[(2)] = inst_35421);

(statearr_35480_35532[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (30))){
var inst_35383 = (state_35431[(13)]);
var inst_35391 = (state_35431[(9)]);
var inst_35382 = (state_35431[(10)]);
var inst_35408 = cljs.core.empty_QMARK_.call(null,inst_35382);
var inst_35409 = inst_35383.call(null,inst_35391);
var inst_35410 = cljs.core.not.call(null,inst_35409);
var inst_35411 = ((inst_35408) && (inst_35410));
var state_35431__$1 = state_35431;
var statearr_35481_35533 = state_35431__$1;
(statearr_35481_35533[(2)] = inst_35411);

(statearr_35481_35533[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (10))){
var inst_35333 = (state_35431[(8)]);
var inst_35354 = (state_35431[(2)]);
var inst_35355 = cljs.core.get.call(null,inst_35354,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35356 = cljs.core.get.call(null,inst_35354,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35357 = cljs.core.get.call(null,inst_35354,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35358 = inst_35333;
var state_35431__$1 = (function (){var statearr_35482 = state_35431;
(statearr_35482[(16)] = inst_35355);

(statearr_35482[(17)] = inst_35356);

(statearr_35482[(18)] = inst_35357);

(statearr_35482[(7)] = inst_35358);

return statearr_35482;
})();
var statearr_35483_35534 = state_35431__$1;
(statearr_35483_35534[(2)] = null);

(statearr_35483_35534[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (18))){
var inst_35373 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35484_35535 = state_35431__$1;
(statearr_35484_35535[(2)] = inst_35373);

(statearr_35484_35535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (37))){
var state_35431__$1 = state_35431;
var statearr_35485_35536 = state_35431__$1;
(statearr_35485_35536[(2)] = null);

(statearr_35485_35536[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (8))){
var inst_35333 = (state_35431[(8)]);
var inst_35351 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35333);
var state_35431__$1 = state_35431;
var statearr_35486_35537 = state_35431__$1;
(statearr_35486_35537[(2)] = inst_35351);

(statearr_35486_35537[(1)] = (10));


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
});})(c__23955__auto___35491,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23932__auto__,c__23955__auto___35491,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23933__auto__ = null;
var cljs$core$async$mix_$_state_machine__23933__auto____0 = (function (){
var statearr_35487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35487[(0)] = cljs$core$async$mix_$_state_machine__23933__auto__);

(statearr_35487[(1)] = (1));

return statearr_35487;
});
var cljs$core$async$mix_$_state_machine__23933__auto____1 = (function (state_35431){
while(true){
var ret_value__23934__auto__ = (function (){try{while(true){
var result__23935__auto__ = switch__23932__auto__.call(null,state_35431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23935__auto__;
}
break;
}
}catch (e35488){if((e35488 instanceof Object)){
var ex__23936__auto__ = e35488;
var statearr_35489_35538 = state_35431;
(statearr_35489_35538[(5)] = ex__23936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35539 = state_35431;
state_35431 = G__35539;
continue;
} else {
return ret_value__23934__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23933__auto__ = function(state_35431){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23933__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23933__auto____1.call(this,state_35431);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23933__auto____0;
cljs$core$async$mix_$_state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23933__auto____1;
return cljs$core$async$mix_$_state_machine__23933__auto__;
})()
;})(switch__23932__auto__,c__23955__auto___35491,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23957__auto__ = (function (){var statearr_35490 = f__23956__auto__.call(null);
(statearr_35490[(6)] = c__23955__auto___35491);

return statearr_35490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23957__auto__);
});})(c__23955__auto___35491,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__35541 = arguments.length;
switch (G__35541) {
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
var G__35545 = arguments.length;
switch (G__35545) {
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
return (function (p1__35543_SHARP_){
if(cljs.core.truth_(p1__35543_SHARP_.call(null,topic))){
return p1__35543_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35543_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35546 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35546 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35547){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35547 = meta35547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35548,meta35547__$1){
var self__ = this;
var _35548__$1 = this;
return (new cljs.core.async.t_cljs$core$async35546(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35547__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35546.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35548){
var self__ = this;
var _35548__$1 = this;
return self__.meta35547;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35546.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35546.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35546.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35546.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35546.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35546.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35546.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35546.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35547","meta35547",-1484049124,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35546.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35546";

cljs.core.async.t_cljs$core$async35546.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35546");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35546.
 */
cljs.core.async.__GT_t_cljs$core$async35546 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35546(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35547){
return (new cljs.core.async.t_cljs$core$async35546(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35547));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35546(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23955__auto___35666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23955__auto___35666,mults,ensure_mult,p){
return (function (){
var f__23956__auto__ = (function (){var switch__23932__auto__ = ((function (c__23955__auto___35666,mults,ensure_mult,p){
return (function (state_35620){
var state_val_35621 = (state_35620[(1)]);
if((state_val_35621 === (7))){
var inst_35616 = (state_35620[(2)]);
var state_35620__$1 = state_35620;
var statearr_35622_35667 = state_35620__$1;
(statearr_35622_35667[(2)] = inst_35616);

(statearr_35622_35667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (20))){
var state_35620__$1 = state_35620;
var statearr_35623_35668 = state_35620__$1;
(statearr_35623_35668[(2)] = null);

(statearr_35623_35668[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (1))){
var state_35620__$1 = state_35620;
var statearr_35624_35669 = state_35620__$1;
(statearr_35624_35669[(2)] = null);

(statearr_35624_35669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (24))){
var inst_35599 = (state_35620[(7)]);
var inst_35608 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35599);
var state_35620__$1 = state_35620;
var statearr_35625_35670 = state_35620__$1;
(statearr_35625_35670[(2)] = inst_35608);

(statearr_35625_35670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (4))){
var inst_35551 = (state_35620[(8)]);
var inst_35551__$1 = (state_35620[(2)]);
var inst_35552 = (inst_35551__$1 == null);
var state_35620__$1 = (function (){var statearr_35626 = state_35620;
(statearr_35626[(8)] = inst_35551__$1);

return statearr_35626;
})();
if(cljs.core.truth_(inst_35552)){
var statearr_35627_35671 = state_35620__$1;
(statearr_35627_35671[(1)] = (5));

} else {
var statearr_35628_35672 = state_35620__$1;
(statearr_35628_35672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (15))){
var inst_35593 = (state_35620[(2)]);
var state_35620__$1 = state_35620;
var statearr_35629_35673 = state_35620__$1;
(statearr_35629_35673[(2)] = inst_35593);

(statearr_35629_35673[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (21))){
var inst_35613 = (state_35620[(2)]);
var state_35620__$1 = (function (){var statearr_35630 = state_35620;
(statearr_35630[(9)] = inst_35613);

return statearr_35630;
})();
var statearr_35631_35674 = state_35620__$1;
(statearr_35631_35674[(2)] = null);

(statearr_35631_35674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (13))){
var inst_35575 = (state_35620[(10)]);
var inst_35577 = cljs.core.chunked_seq_QMARK_.call(null,inst_35575);
var state_35620__$1 = state_35620;
if(inst_35577){
var statearr_35632_35675 = state_35620__$1;
(statearr_35632_35675[(1)] = (16));

} else {
var statearr_35633_35676 = state_35620__$1;
(statearr_35633_35676[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (22))){
var inst_35605 = (state_35620[(2)]);
var state_35620__$1 = state_35620;
if(cljs.core.truth_(inst_35605)){
var statearr_35634_35677 = state_35620__$1;
(statearr_35634_35677[(1)] = (23));

} else {
var statearr_35635_35678 = state_35620__$1;
(statearr_35635_35678[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (6))){
var inst_35601 = (state_35620[(11)]);
var inst_35599 = (state_35620[(7)]);
var inst_35551 = (state_35620[(8)]);
var inst_35599__$1 = topic_fn.call(null,inst_35551);
var inst_35600 = cljs.core.deref.call(null,mults);
var inst_35601__$1 = cljs.core.get.call(null,inst_35600,inst_35599__$1);
var state_35620__$1 = (function (){var statearr_35636 = state_35620;
(statearr_35636[(11)] = inst_35601__$1);

(statearr_35636[(7)] = inst_35599__$1);

return statearr_35636;
})();
if(cljs.core.truth_(inst_35601__$1)){
var statearr_35637_35679 = state_35620__$1;
(statearr_35637_35679[(1)] = (19));

} else {
var statearr_35638_35680 = state_35620__$1;
(statearr_35638_35680[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (25))){
var inst_35610 = (state_35620[(2)]);
var state_35620__$1 = state_35620;
var statearr_35639_35681 = state_35620__$1;
(statearr_35639_35681[(2)] = inst_35610);

(statearr_35639_35681[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (17))){
var inst_35575 = (state_35620[(10)]);
var inst_35584 = cljs.core.first.call(null,inst_35575);
var inst_35585 = cljs.core.async.muxch_STAR_.call(null,inst_35584);
var inst_35586 = cljs.core.async.close_BANG_.call(null,inst_35585);
var inst_35587 = cljs.core.next.call(null,inst_35575);
var inst_35561 = inst_35587;
var inst_35562 = null;
var inst_35563 = (0);
var inst_35564 = (0);
var state_35620__$1 = (function (){var statearr_35640 = state_35620;
(statearr_35640[(12)] = inst_35586);

(statearr_35640[(13)] = inst_35564);

(statearr_35640[(14)] = inst_35562);

(statearr_35640[(15)] = inst_35563);

(statearr_35640[(16)] = inst_35561);

return statearr_35640;
})();
var statearr_35641_35682 = state_35620__$1;
(statearr_35641_35682[(2)] = null);

(statearr_35641_35682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (3))){
var inst_35618 = (state_35620[(2)]);
var state_35620__$1 = state_35620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35620__$1,inst_35618);
} else {
if((state_val_35621 === (12))){
var inst_35595 = (state_35620[(2)]);
var state_35620__$1 = state_35620;
var statearr_35642_35683 = state_35620__$1;
(statearr_35642_35683[(2)] = inst_35595);

(statearr_35642_35683[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (2))){
var state_35620__$1 = state_35620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35620__$1,(4),ch);
} else {
if((state_val_35621 === (23))){
var state_35620__$1 = state_35620;
var statearr_35643_35684 = state_35620__$1;
(statearr_35643_35684[(2)] = null);

(statearr_35643_35684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (19))){
var inst_35601 = (state_35620[(11)]);
var inst_35551 = (state_35620[(8)]);
var inst_35603 = cljs.core.async.muxch_STAR_.call(null,inst_35601);
var state_35620__$1 = state_35620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35620__$1,(22),inst_35603,inst_35551);
} else {
if((state_val_35621 === (11))){
var inst_35575 = (state_35620[(10)]);
var inst_35561 = (state_35620[(16)]);
var inst_35575__$1 = cljs.core.seq.call(null,inst_35561);
var state_35620__$1 = (function (){var statearr_35644 = state_35620;
(statearr_35644[(10)] = inst_35575__$1);

return statearr_35644;
})();
if(inst_35575__$1){
var statearr_35645_35685 = state_35620__$1;
(statearr_35645_35685[(1)] = (13));

} else {
var statearr_35646_35686 = state_35620__$1;
(statearr_35646_35686[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (9))){
var inst_35597 = (state_35620[(2)]);
var state_35620__$1 = state_35620;
var statearr_35647_35687 = state_35620__$1;
(statearr_35647_35687[(2)] = inst_35597);

(statearr_35647_35687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (5))){
var inst_35558 = cljs.core.deref.call(null,mults);
var inst_35559 = cljs.core.vals.call(null,inst_35558);
var inst_35560 = cljs.core.seq.call(null,inst_35559);
var inst_35561 = inst_35560;
var inst_35562 = null;
var inst_35563 = (0);
var inst_35564 = (0);
var state_35620__$1 = (function (){var statearr_35648 = state_35620;
(statearr_35648[(13)] = inst_35564);

(statearr_35648[(14)] = inst_35562);

(statearr_35648[(15)] = inst_35563);

(statearr_35648[(16)] = inst_35561);

return statearr_35648;
})();
var statearr_35649_35688 = state_35620__$1;
(statearr_35649_35688[(2)] = null);

(statearr_35649_35688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (14))){
var state_35620__$1 = state_35620;
var statearr_35653_35689 = state_35620__$1;
(statearr_35653_35689[(2)] = null);

(statearr_35653_35689[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (16))){
var inst_35575 = (state_35620[(10)]);
var inst_35579 = cljs.core.chunk_first.call(null,inst_35575);
var inst_35580 = cljs.core.chunk_rest.call(null,inst_35575);
var inst_35581 = cljs.core.count.call(null,inst_35579);
var inst_35561 = inst_35580;
var inst_35562 = inst_35579;
var inst_35563 = inst_35581;
var inst_35564 = (0);
var state_35620__$1 = (function (){var statearr_35654 = state_35620;
(statearr_35654[(13)] = inst_35564);

(statearr_35654[(14)] = inst_35562);

(statearr_35654[(15)] = inst_35563);

(statearr_35654[(16)] = inst_35561);

return statearr_35654;
})();
var statearr_35655_35690 = state_35620__$1;
(statearr_35655_35690[(2)] = null);

(statearr_35655_35690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (10))){
var inst_35564 = (state_35620[(13)]);
var inst_35562 = (state_35620[(14)]);
var inst_35563 = (state_35620[(15)]);
var inst_35561 = (state_35620[(16)]);
var inst_35569 = cljs.core._nth.call(null,inst_35562,inst_35564);
var inst_35570 = cljs.core.async.muxch_STAR_.call(null,inst_35569);
var inst_35571 = cljs.core.async.close_BANG_.call(null,inst_35570);
var inst_35572 = (inst_35564 + (1));
var tmp35650 = inst_35562;
var tmp35651 = inst_35563;
var tmp35652 = inst_35561;
var inst_35561__$1 = tmp35652;
var inst_35562__$1 = tmp35650;
var inst_35563__$1 = tmp35651;
var inst_35564__$1 = inst_35572;
var state_35620__$1 = (function (){var statearr_35656 = state_35620;
(statearr_35656[(13)] = inst_35564__$1);

(statearr_35656[(17)] = inst_35571);

(statearr_35656[(14)] = inst_35562__$1);

(statearr_35656[(15)] = inst_35563__$1);

(statearr_35656[(16)] = inst_35561__$1);

return statearr_35656;
})();
var statearr_35657_35691 = state_35620__$1;
(statearr_35657_35691[(2)] = null);

(statearr_35657_35691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (18))){
var inst_35590 = (state_35620[(2)]);
var state_35620__$1 = state_35620;
var statearr_35658_35692 = state_35620__$1;
(statearr_35658_35692[(2)] = inst_35590);

(statearr_35658_35692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35621 === (8))){
var inst_35564 = (state_35620[(13)]);
var inst_35563 = (state_35620[(15)]);
var inst_35566 = (inst_35564 < inst_35563);
var inst_35567 = inst_35566;
var state_35620__$1 = state_35620;
if(cljs.core.truth_(inst_35567)){
var statearr_35659_35693 = state_35620__$1;
(statearr_35659_35693[(1)] = (10));

} else {
var statearr_35660_35694 = state_35620__$1;
(statearr_35660_35694[(1)] = (11));

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
});})(c__23955__auto___35666,mults,ensure_mult,p))
;
return ((function (switch__23932__auto__,c__23955__auto___35666,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23933__auto__ = null;
var cljs$core$async$state_machine__23933__auto____0 = (function (){
var statearr_35661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35661[(0)] = cljs$core$async$state_machine__23933__auto__);

(statearr_35661[(1)] = (1));

return statearr_35661;
});
var cljs$core$async$state_machine__23933__auto____1 = (function (state_35620){
while(true){
var ret_value__23934__auto__ = (function (){try{while(true){
var result__23935__auto__ = switch__23932__auto__.call(null,state_35620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23935__auto__;
}
break;
}
}catch (e35662){if((e35662 instanceof Object)){
var ex__23936__auto__ = e35662;
var statearr_35663_35695 = state_35620;
(statearr_35663_35695[(5)] = ex__23936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35696 = state_35620;
state_35620 = G__35696;
continue;
} else {
return ret_value__23934__auto__;
}
break;
}
});
cljs$core$async$state_machine__23933__auto__ = function(state_35620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23933__auto____1.call(this,state_35620);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23933__auto____0;
cljs$core$async$state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23933__auto____1;
return cljs$core$async$state_machine__23933__auto__;
})()
;})(switch__23932__auto__,c__23955__auto___35666,mults,ensure_mult,p))
})();
var state__23957__auto__ = (function (){var statearr_35664 = f__23956__auto__.call(null);
(statearr_35664[(6)] = c__23955__auto___35666);

return statearr_35664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23957__auto__);
});})(c__23955__auto___35666,mults,ensure_mult,p))
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
var G__35698 = arguments.length;
switch (G__35698) {
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
var G__35701 = arguments.length;
switch (G__35701) {
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
var G__35704 = arguments.length;
switch (G__35704) {
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
var c__23955__auto___35771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23955__auto___35771,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23956__auto__ = (function (){var switch__23932__auto__ = ((function (c__23955__auto___35771,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35743){
var state_val_35744 = (state_35743[(1)]);
if((state_val_35744 === (7))){
var state_35743__$1 = state_35743;
var statearr_35745_35772 = state_35743__$1;
(statearr_35745_35772[(2)] = null);

(statearr_35745_35772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (1))){
var state_35743__$1 = state_35743;
var statearr_35746_35773 = state_35743__$1;
(statearr_35746_35773[(2)] = null);

(statearr_35746_35773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (4))){
var inst_35707 = (state_35743[(7)]);
var inst_35709 = (inst_35707 < cnt);
var state_35743__$1 = state_35743;
if(cljs.core.truth_(inst_35709)){
var statearr_35747_35774 = state_35743__$1;
(statearr_35747_35774[(1)] = (6));

} else {
var statearr_35748_35775 = state_35743__$1;
(statearr_35748_35775[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (15))){
var inst_35739 = (state_35743[(2)]);
var state_35743__$1 = state_35743;
var statearr_35749_35776 = state_35743__$1;
(statearr_35749_35776[(2)] = inst_35739);

(statearr_35749_35776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (13))){
var inst_35732 = cljs.core.async.close_BANG_.call(null,out);
var state_35743__$1 = state_35743;
var statearr_35750_35777 = state_35743__$1;
(statearr_35750_35777[(2)] = inst_35732);

(statearr_35750_35777[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (6))){
var state_35743__$1 = state_35743;
var statearr_35751_35778 = state_35743__$1;
(statearr_35751_35778[(2)] = null);

(statearr_35751_35778[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (3))){
var inst_35741 = (state_35743[(2)]);
var state_35743__$1 = state_35743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35743__$1,inst_35741);
} else {
if((state_val_35744 === (12))){
var inst_35729 = (state_35743[(8)]);
var inst_35729__$1 = (state_35743[(2)]);
var inst_35730 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35729__$1);
var state_35743__$1 = (function (){var statearr_35752 = state_35743;
(statearr_35752[(8)] = inst_35729__$1);

return statearr_35752;
})();
if(cljs.core.truth_(inst_35730)){
var statearr_35753_35779 = state_35743__$1;
(statearr_35753_35779[(1)] = (13));

} else {
var statearr_35754_35780 = state_35743__$1;
(statearr_35754_35780[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (2))){
var inst_35706 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35707 = (0);
var state_35743__$1 = (function (){var statearr_35755 = state_35743;
(statearr_35755[(9)] = inst_35706);

(statearr_35755[(7)] = inst_35707);

return statearr_35755;
})();
var statearr_35756_35781 = state_35743__$1;
(statearr_35756_35781[(2)] = null);

(statearr_35756_35781[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (11))){
var inst_35707 = (state_35743[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35743,(10),Object,null,(9));
var inst_35716 = chs__$1.call(null,inst_35707);
var inst_35717 = done.call(null,inst_35707);
var inst_35718 = cljs.core.async.take_BANG_.call(null,inst_35716,inst_35717);
var state_35743__$1 = state_35743;
var statearr_35757_35782 = state_35743__$1;
(statearr_35757_35782[(2)] = inst_35718);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35743__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (9))){
var inst_35707 = (state_35743[(7)]);
var inst_35720 = (state_35743[(2)]);
var inst_35721 = (inst_35707 + (1));
var inst_35707__$1 = inst_35721;
var state_35743__$1 = (function (){var statearr_35758 = state_35743;
(statearr_35758[(10)] = inst_35720);

(statearr_35758[(7)] = inst_35707__$1);

return statearr_35758;
})();
var statearr_35759_35783 = state_35743__$1;
(statearr_35759_35783[(2)] = null);

(statearr_35759_35783[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (5))){
var inst_35727 = (state_35743[(2)]);
var state_35743__$1 = (function (){var statearr_35760 = state_35743;
(statearr_35760[(11)] = inst_35727);

return statearr_35760;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35743__$1,(12),dchan);
} else {
if((state_val_35744 === (14))){
var inst_35729 = (state_35743[(8)]);
var inst_35734 = cljs.core.apply.call(null,f,inst_35729);
var state_35743__$1 = state_35743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35743__$1,(16),out,inst_35734);
} else {
if((state_val_35744 === (16))){
var inst_35736 = (state_35743[(2)]);
var state_35743__$1 = (function (){var statearr_35761 = state_35743;
(statearr_35761[(12)] = inst_35736);

return statearr_35761;
})();
var statearr_35762_35784 = state_35743__$1;
(statearr_35762_35784[(2)] = null);

(statearr_35762_35784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (10))){
var inst_35711 = (state_35743[(2)]);
var inst_35712 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35743__$1 = (function (){var statearr_35763 = state_35743;
(statearr_35763[(13)] = inst_35711);

return statearr_35763;
})();
var statearr_35764_35785 = state_35743__$1;
(statearr_35764_35785[(2)] = inst_35712);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35743__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (8))){
var inst_35725 = (state_35743[(2)]);
var state_35743__$1 = state_35743;
var statearr_35765_35786 = state_35743__$1;
(statearr_35765_35786[(2)] = inst_35725);

(statearr_35765_35786[(1)] = (5));


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
});})(c__23955__auto___35771,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23932__auto__,c__23955__auto___35771,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23933__auto__ = null;
var cljs$core$async$state_machine__23933__auto____0 = (function (){
var statearr_35766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35766[(0)] = cljs$core$async$state_machine__23933__auto__);

(statearr_35766[(1)] = (1));

return statearr_35766;
});
var cljs$core$async$state_machine__23933__auto____1 = (function (state_35743){
while(true){
var ret_value__23934__auto__ = (function (){try{while(true){
var result__23935__auto__ = switch__23932__auto__.call(null,state_35743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23935__auto__;
}
break;
}
}catch (e35767){if((e35767 instanceof Object)){
var ex__23936__auto__ = e35767;
var statearr_35768_35787 = state_35743;
(statearr_35768_35787[(5)] = ex__23936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35788 = state_35743;
state_35743 = G__35788;
continue;
} else {
return ret_value__23934__auto__;
}
break;
}
});
cljs$core$async$state_machine__23933__auto__ = function(state_35743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23933__auto____1.call(this,state_35743);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23933__auto____0;
cljs$core$async$state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23933__auto____1;
return cljs$core$async$state_machine__23933__auto__;
})()
;})(switch__23932__auto__,c__23955__auto___35771,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23957__auto__ = (function (){var statearr_35769 = f__23956__auto__.call(null);
(statearr_35769[(6)] = c__23955__auto___35771);

return statearr_35769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23957__auto__);
});})(c__23955__auto___35771,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__35791 = arguments.length;
switch (G__35791) {
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
var c__23955__auto___35845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23955__auto___35845,out){
return (function (){
var f__23956__auto__ = (function (){var switch__23932__auto__ = ((function (c__23955__auto___35845,out){
return (function (state_35823){
var state_val_35824 = (state_35823[(1)]);
if((state_val_35824 === (7))){
var inst_35802 = (state_35823[(7)]);
var inst_35803 = (state_35823[(8)]);
var inst_35802__$1 = (state_35823[(2)]);
var inst_35803__$1 = cljs.core.nth.call(null,inst_35802__$1,(0),null);
var inst_35804 = cljs.core.nth.call(null,inst_35802__$1,(1),null);
var inst_35805 = (inst_35803__$1 == null);
var state_35823__$1 = (function (){var statearr_35825 = state_35823;
(statearr_35825[(7)] = inst_35802__$1);

(statearr_35825[(8)] = inst_35803__$1);

(statearr_35825[(9)] = inst_35804);

return statearr_35825;
})();
if(cljs.core.truth_(inst_35805)){
var statearr_35826_35846 = state_35823__$1;
(statearr_35826_35846[(1)] = (8));

} else {
var statearr_35827_35847 = state_35823__$1;
(statearr_35827_35847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35824 === (1))){
var inst_35792 = cljs.core.vec.call(null,chs);
var inst_35793 = inst_35792;
var state_35823__$1 = (function (){var statearr_35828 = state_35823;
(statearr_35828[(10)] = inst_35793);

return statearr_35828;
})();
var statearr_35829_35848 = state_35823__$1;
(statearr_35829_35848[(2)] = null);

(statearr_35829_35848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35824 === (4))){
var inst_35793 = (state_35823[(10)]);
var state_35823__$1 = state_35823;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35823__$1,(7),inst_35793);
} else {
if((state_val_35824 === (6))){
var inst_35819 = (state_35823[(2)]);
var state_35823__$1 = state_35823;
var statearr_35830_35849 = state_35823__$1;
(statearr_35830_35849[(2)] = inst_35819);

(statearr_35830_35849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35824 === (3))){
var inst_35821 = (state_35823[(2)]);
var state_35823__$1 = state_35823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35823__$1,inst_35821);
} else {
if((state_val_35824 === (2))){
var inst_35793 = (state_35823[(10)]);
var inst_35795 = cljs.core.count.call(null,inst_35793);
var inst_35796 = (inst_35795 > (0));
var state_35823__$1 = state_35823;
if(cljs.core.truth_(inst_35796)){
var statearr_35832_35850 = state_35823__$1;
(statearr_35832_35850[(1)] = (4));

} else {
var statearr_35833_35851 = state_35823__$1;
(statearr_35833_35851[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35824 === (11))){
var inst_35793 = (state_35823[(10)]);
var inst_35812 = (state_35823[(2)]);
var tmp35831 = inst_35793;
var inst_35793__$1 = tmp35831;
var state_35823__$1 = (function (){var statearr_35834 = state_35823;
(statearr_35834[(10)] = inst_35793__$1);

(statearr_35834[(11)] = inst_35812);

return statearr_35834;
})();
var statearr_35835_35852 = state_35823__$1;
(statearr_35835_35852[(2)] = null);

(statearr_35835_35852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35824 === (9))){
var inst_35803 = (state_35823[(8)]);
var state_35823__$1 = state_35823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35823__$1,(11),out,inst_35803);
} else {
if((state_val_35824 === (5))){
var inst_35817 = cljs.core.async.close_BANG_.call(null,out);
var state_35823__$1 = state_35823;
var statearr_35836_35853 = state_35823__$1;
(statearr_35836_35853[(2)] = inst_35817);

(statearr_35836_35853[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35824 === (10))){
var inst_35815 = (state_35823[(2)]);
var state_35823__$1 = state_35823;
var statearr_35837_35854 = state_35823__$1;
(statearr_35837_35854[(2)] = inst_35815);

(statearr_35837_35854[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35824 === (8))){
var inst_35802 = (state_35823[(7)]);
var inst_35803 = (state_35823[(8)]);
var inst_35793 = (state_35823[(10)]);
var inst_35804 = (state_35823[(9)]);
var inst_35807 = (function (){var cs = inst_35793;
var vec__35798 = inst_35802;
var v = inst_35803;
var c = inst_35804;
return ((function (cs,vec__35798,v,c,inst_35802,inst_35803,inst_35793,inst_35804,state_val_35824,c__23955__auto___35845,out){
return (function (p1__35789_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35789_SHARP_);
});
;})(cs,vec__35798,v,c,inst_35802,inst_35803,inst_35793,inst_35804,state_val_35824,c__23955__auto___35845,out))
})();
var inst_35808 = cljs.core.filterv.call(null,inst_35807,inst_35793);
var inst_35793__$1 = inst_35808;
var state_35823__$1 = (function (){var statearr_35838 = state_35823;
(statearr_35838[(10)] = inst_35793__$1);

return statearr_35838;
})();
var statearr_35839_35855 = state_35823__$1;
(statearr_35839_35855[(2)] = null);

(statearr_35839_35855[(1)] = (2));


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
});})(c__23955__auto___35845,out))
;
return ((function (switch__23932__auto__,c__23955__auto___35845,out){
return (function() {
var cljs$core$async$state_machine__23933__auto__ = null;
var cljs$core$async$state_machine__23933__auto____0 = (function (){
var statearr_35840 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35840[(0)] = cljs$core$async$state_machine__23933__auto__);

(statearr_35840[(1)] = (1));

return statearr_35840;
});
var cljs$core$async$state_machine__23933__auto____1 = (function (state_35823){
while(true){
var ret_value__23934__auto__ = (function (){try{while(true){
var result__23935__auto__ = switch__23932__auto__.call(null,state_35823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23935__auto__;
}
break;
}
}catch (e35841){if((e35841 instanceof Object)){
var ex__23936__auto__ = e35841;
var statearr_35842_35856 = state_35823;
(statearr_35842_35856[(5)] = ex__23936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35857 = state_35823;
state_35823 = G__35857;
continue;
} else {
return ret_value__23934__auto__;
}
break;
}
});
cljs$core$async$state_machine__23933__auto__ = function(state_35823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23933__auto____1.call(this,state_35823);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23933__auto____0;
cljs$core$async$state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23933__auto____1;
return cljs$core$async$state_machine__23933__auto__;
})()
;})(switch__23932__auto__,c__23955__auto___35845,out))
})();
var state__23957__auto__ = (function (){var statearr_35843 = f__23956__auto__.call(null);
(statearr_35843[(6)] = c__23955__auto___35845);

return statearr_35843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23957__auto__);
});})(c__23955__auto___35845,out))
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
var G__35859 = arguments.length;
switch (G__35859) {
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
var c__23955__auto___35904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23955__auto___35904,out){
return (function (){
var f__23956__auto__ = (function (){var switch__23932__auto__ = ((function (c__23955__auto___35904,out){
return (function (state_35883){
var state_val_35884 = (state_35883[(1)]);
if((state_val_35884 === (7))){
var inst_35865 = (state_35883[(7)]);
var inst_35865__$1 = (state_35883[(2)]);
var inst_35866 = (inst_35865__$1 == null);
var inst_35867 = cljs.core.not.call(null,inst_35866);
var state_35883__$1 = (function (){var statearr_35885 = state_35883;
(statearr_35885[(7)] = inst_35865__$1);

return statearr_35885;
})();
if(inst_35867){
var statearr_35886_35905 = state_35883__$1;
(statearr_35886_35905[(1)] = (8));

} else {
var statearr_35887_35906 = state_35883__$1;
(statearr_35887_35906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (1))){
var inst_35860 = (0);
var state_35883__$1 = (function (){var statearr_35888 = state_35883;
(statearr_35888[(8)] = inst_35860);

return statearr_35888;
})();
var statearr_35889_35907 = state_35883__$1;
(statearr_35889_35907[(2)] = null);

(statearr_35889_35907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (4))){
var state_35883__$1 = state_35883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35883__$1,(7),ch);
} else {
if((state_val_35884 === (6))){
var inst_35878 = (state_35883[(2)]);
var state_35883__$1 = state_35883;
var statearr_35890_35908 = state_35883__$1;
(statearr_35890_35908[(2)] = inst_35878);

(statearr_35890_35908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (3))){
var inst_35880 = (state_35883[(2)]);
var inst_35881 = cljs.core.async.close_BANG_.call(null,out);
var state_35883__$1 = (function (){var statearr_35891 = state_35883;
(statearr_35891[(9)] = inst_35880);

return statearr_35891;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35883__$1,inst_35881);
} else {
if((state_val_35884 === (2))){
var inst_35860 = (state_35883[(8)]);
var inst_35862 = (inst_35860 < n);
var state_35883__$1 = state_35883;
if(cljs.core.truth_(inst_35862)){
var statearr_35892_35909 = state_35883__$1;
(statearr_35892_35909[(1)] = (4));

} else {
var statearr_35893_35910 = state_35883__$1;
(statearr_35893_35910[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (11))){
var inst_35860 = (state_35883[(8)]);
var inst_35870 = (state_35883[(2)]);
var inst_35871 = (inst_35860 + (1));
var inst_35860__$1 = inst_35871;
var state_35883__$1 = (function (){var statearr_35894 = state_35883;
(statearr_35894[(8)] = inst_35860__$1);

(statearr_35894[(10)] = inst_35870);

return statearr_35894;
})();
var statearr_35895_35911 = state_35883__$1;
(statearr_35895_35911[(2)] = null);

(statearr_35895_35911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (9))){
var state_35883__$1 = state_35883;
var statearr_35896_35912 = state_35883__$1;
(statearr_35896_35912[(2)] = null);

(statearr_35896_35912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (5))){
var state_35883__$1 = state_35883;
var statearr_35897_35913 = state_35883__$1;
(statearr_35897_35913[(2)] = null);

(statearr_35897_35913[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (10))){
var inst_35875 = (state_35883[(2)]);
var state_35883__$1 = state_35883;
var statearr_35898_35914 = state_35883__$1;
(statearr_35898_35914[(2)] = inst_35875);

(statearr_35898_35914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35884 === (8))){
var inst_35865 = (state_35883[(7)]);
var state_35883__$1 = state_35883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35883__$1,(11),out,inst_35865);
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
});})(c__23955__auto___35904,out))
;
return ((function (switch__23932__auto__,c__23955__auto___35904,out){
return (function() {
var cljs$core$async$state_machine__23933__auto__ = null;
var cljs$core$async$state_machine__23933__auto____0 = (function (){
var statearr_35899 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35899[(0)] = cljs$core$async$state_machine__23933__auto__);

(statearr_35899[(1)] = (1));

return statearr_35899;
});
var cljs$core$async$state_machine__23933__auto____1 = (function (state_35883){
while(true){
var ret_value__23934__auto__ = (function (){try{while(true){
var result__23935__auto__ = switch__23932__auto__.call(null,state_35883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23935__auto__;
}
break;
}
}catch (e35900){if((e35900 instanceof Object)){
var ex__23936__auto__ = e35900;
var statearr_35901_35915 = state_35883;
(statearr_35901_35915[(5)] = ex__23936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35916 = state_35883;
state_35883 = G__35916;
continue;
} else {
return ret_value__23934__auto__;
}
break;
}
});
cljs$core$async$state_machine__23933__auto__ = function(state_35883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23933__auto____1.call(this,state_35883);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23933__auto____0;
cljs$core$async$state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23933__auto____1;
return cljs$core$async$state_machine__23933__auto__;
})()
;})(switch__23932__auto__,c__23955__auto___35904,out))
})();
var state__23957__auto__ = (function (){var statearr_35902 = f__23956__auto__.call(null);
(statearr_35902[(6)] = c__23955__auto___35904);

return statearr_35902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23957__auto__);
});})(c__23955__auto___35904,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35918 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35918 = (function (f,ch,meta35919){
this.f = f;
this.ch = ch;
this.meta35919 = meta35919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35920,meta35919__$1){
var self__ = this;
var _35920__$1 = this;
return (new cljs.core.async.t_cljs$core$async35918(self__.f,self__.ch,meta35919__$1));
});

cljs.core.async.t_cljs$core$async35918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35920){
var self__ = this;
var _35920__$1 = this;
return self__.meta35919;
});

cljs.core.async.t_cljs$core$async35918.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35918.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35918.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35918.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35918.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35921 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35921 = (function (f,ch,meta35919,_,fn1,meta35922){
this.f = f;
this.ch = ch;
this.meta35919 = meta35919;
this._ = _;
this.fn1 = fn1;
this.meta35922 = meta35922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35923,meta35922__$1){
var self__ = this;
var _35923__$1 = this;
return (new cljs.core.async.t_cljs$core$async35921(self__.f,self__.ch,self__.meta35919,self__._,self__.fn1,meta35922__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35921.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35923){
var self__ = this;
var _35923__$1 = this;
return self__.meta35922;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35921.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35921.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35921.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35921.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35917_SHARP_){
return f1.call(null,(((p1__35917_SHARP_ == null))?null:self__.f.call(null,p1__35917_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35921.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35919","meta35919",-1175639434,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35918","cljs.core.async/t_cljs$core$async35918",-915129169,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35922","meta35922",807382709,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35921.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35921.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35921";

cljs.core.async.t_cljs$core$async35921.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35921");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35921.
 */
cljs.core.async.__GT_t_cljs$core$async35921 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35921(f__$1,ch__$1,meta35919__$1,___$2,fn1__$1,meta35922){
return (new cljs.core.async.t_cljs$core$async35921(f__$1,ch__$1,meta35919__$1,___$2,fn1__$1,meta35922));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35921(self__.f,self__.ch,self__.meta35919,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async35918.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35918.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35919","meta35919",-1175639434,null)], null);
});

cljs.core.async.t_cljs$core$async35918.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35918.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35918";

cljs.core.async.t_cljs$core$async35918.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35918");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35918.
 */
cljs.core.async.__GT_t_cljs$core$async35918 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35918(f__$1,ch__$1,meta35919){
return (new cljs.core.async.t_cljs$core$async35918(f__$1,ch__$1,meta35919));
});

}

return (new cljs.core.async.t_cljs$core$async35918(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35924 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35924 = (function (f,ch,meta35925){
this.f = f;
this.ch = ch;
this.meta35925 = meta35925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35926,meta35925__$1){
var self__ = this;
var _35926__$1 = this;
return (new cljs.core.async.t_cljs$core$async35924(self__.f,self__.ch,meta35925__$1));
});

cljs.core.async.t_cljs$core$async35924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35926){
var self__ = this;
var _35926__$1 = this;
return self__.meta35925;
});

cljs.core.async.t_cljs$core$async35924.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35924.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35924.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35924.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35924.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35924.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35925","meta35925",-2047737017,null)], null);
});

cljs.core.async.t_cljs$core$async35924.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35924";

cljs.core.async.t_cljs$core$async35924.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35924");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35924.
 */
cljs.core.async.__GT_t_cljs$core$async35924 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35924(f__$1,ch__$1,meta35925){
return (new cljs.core.async.t_cljs$core$async35924(f__$1,ch__$1,meta35925));
});

}

return (new cljs.core.async.t_cljs$core$async35924(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35927 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35927 = (function (p,ch,meta35928){
this.p = p;
this.ch = ch;
this.meta35928 = meta35928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35929,meta35928__$1){
var self__ = this;
var _35929__$1 = this;
return (new cljs.core.async.t_cljs$core$async35927(self__.p,self__.ch,meta35928__$1));
});

cljs.core.async.t_cljs$core$async35927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35929){
var self__ = this;
var _35929__$1 = this;
return self__.meta35928;
});

cljs.core.async.t_cljs$core$async35927.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35927.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35927.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35927.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35927.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35927.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35927.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35928","meta35928",-592899820,null)], null);
});

cljs.core.async.t_cljs$core$async35927.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35927";

cljs.core.async.t_cljs$core$async35927.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35927");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35927.
 */
cljs.core.async.__GT_t_cljs$core$async35927 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35927(p__$1,ch__$1,meta35928){
return (new cljs.core.async.t_cljs$core$async35927(p__$1,ch__$1,meta35928));
});

}

return (new cljs.core.async.t_cljs$core$async35927(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35931 = arguments.length;
switch (G__35931) {
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
var c__23955__auto___35971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23955__auto___35971,out){
return (function (){
var f__23956__auto__ = (function (){var switch__23932__auto__ = ((function (c__23955__auto___35971,out){
return (function (state_35952){
var state_val_35953 = (state_35952[(1)]);
if((state_val_35953 === (7))){
var inst_35948 = (state_35952[(2)]);
var state_35952__$1 = state_35952;
var statearr_35954_35972 = state_35952__$1;
(statearr_35954_35972[(2)] = inst_35948);

(statearr_35954_35972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (1))){
var state_35952__$1 = state_35952;
var statearr_35955_35973 = state_35952__$1;
(statearr_35955_35973[(2)] = null);

(statearr_35955_35973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (4))){
var inst_35934 = (state_35952[(7)]);
var inst_35934__$1 = (state_35952[(2)]);
var inst_35935 = (inst_35934__$1 == null);
var state_35952__$1 = (function (){var statearr_35956 = state_35952;
(statearr_35956[(7)] = inst_35934__$1);

return statearr_35956;
})();
if(cljs.core.truth_(inst_35935)){
var statearr_35957_35974 = state_35952__$1;
(statearr_35957_35974[(1)] = (5));

} else {
var statearr_35958_35975 = state_35952__$1;
(statearr_35958_35975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (6))){
var inst_35934 = (state_35952[(7)]);
var inst_35939 = p.call(null,inst_35934);
var state_35952__$1 = state_35952;
if(cljs.core.truth_(inst_35939)){
var statearr_35959_35976 = state_35952__$1;
(statearr_35959_35976[(1)] = (8));

} else {
var statearr_35960_35977 = state_35952__$1;
(statearr_35960_35977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (3))){
var inst_35950 = (state_35952[(2)]);
var state_35952__$1 = state_35952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35952__$1,inst_35950);
} else {
if((state_val_35953 === (2))){
var state_35952__$1 = state_35952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35952__$1,(4),ch);
} else {
if((state_val_35953 === (11))){
var inst_35942 = (state_35952[(2)]);
var state_35952__$1 = state_35952;
var statearr_35961_35978 = state_35952__$1;
(statearr_35961_35978[(2)] = inst_35942);

(statearr_35961_35978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (9))){
var state_35952__$1 = state_35952;
var statearr_35962_35979 = state_35952__$1;
(statearr_35962_35979[(2)] = null);

(statearr_35962_35979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (5))){
var inst_35937 = cljs.core.async.close_BANG_.call(null,out);
var state_35952__$1 = state_35952;
var statearr_35963_35980 = state_35952__$1;
(statearr_35963_35980[(2)] = inst_35937);

(statearr_35963_35980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (10))){
var inst_35945 = (state_35952[(2)]);
var state_35952__$1 = (function (){var statearr_35964 = state_35952;
(statearr_35964[(8)] = inst_35945);

return statearr_35964;
})();
var statearr_35965_35981 = state_35952__$1;
(statearr_35965_35981[(2)] = null);

(statearr_35965_35981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (8))){
var inst_35934 = (state_35952[(7)]);
var state_35952__$1 = state_35952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35952__$1,(11),out,inst_35934);
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
});})(c__23955__auto___35971,out))
;
return ((function (switch__23932__auto__,c__23955__auto___35971,out){
return (function() {
var cljs$core$async$state_machine__23933__auto__ = null;
var cljs$core$async$state_machine__23933__auto____0 = (function (){
var statearr_35966 = [null,null,null,null,null,null,null,null,null];
(statearr_35966[(0)] = cljs$core$async$state_machine__23933__auto__);

(statearr_35966[(1)] = (1));

return statearr_35966;
});
var cljs$core$async$state_machine__23933__auto____1 = (function (state_35952){
while(true){
var ret_value__23934__auto__ = (function (){try{while(true){
var result__23935__auto__ = switch__23932__auto__.call(null,state_35952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23935__auto__;
}
break;
}
}catch (e35967){if((e35967 instanceof Object)){
var ex__23936__auto__ = e35967;
var statearr_35968_35982 = state_35952;
(statearr_35968_35982[(5)] = ex__23936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35983 = state_35952;
state_35952 = G__35983;
continue;
} else {
return ret_value__23934__auto__;
}
break;
}
});
cljs$core$async$state_machine__23933__auto__ = function(state_35952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23933__auto____1.call(this,state_35952);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23933__auto____0;
cljs$core$async$state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23933__auto____1;
return cljs$core$async$state_machine__23933__auto__;
})()
;})(switch__23932__auto__,c__23955__auto___35971,out))
})();
var state__23957__auto__ = (function (){var statearr_35969 = f__23956__auto__.call(null);
(statearr_35969[(6)] = c__23955__auto___35971);

return statearr_35969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23957__auto__);
});})(c__23955__auto___35971,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35985 = arguments.length;
switch (G__35985) {
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
var c__23955__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23955__auto__){
return (function (){
var f__23956__auto__ = (function (){var switch__23932__auto__ = ((function (c__23955__auto__){
return (function (state_36048){
var state_val_36049 = (state_36048[(1)]);
if((state_val_36049 === (7))){
var inst_36044 = (state_36048[(2)]);
var state_36048__$1 = state_36048;
var statearr_36050_36088 = state_36048__$1;
(statearr_36050_36088[(2)] = inst_36044);

(statearr_36050_36088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (20))){
var inst_36014 = (state_36048[(7)]);
var inst_36025 = (state_36048[(2)]);
var inst_36026 = cljs.core.next.call(null,inst_36014);
var inst_36000 = inst_36026;
var inst_36001 = null;
var inst_36002 = (0);
var inst_36003 = (0);
var state_36048__$1 = (function (){var statearr_36051 = state_36048;
(statearr_36051[(8)] = inst_36025);

(statearr_36051[(9)] = inst_36001);

(statearr_36051[(10)] = inst_36002);

(statearr_36051[(11)] = inst_36003);

(statearr_36051[(12)] = inst_36000);

return statearr_36051;
})();
var statearr_36052_36089 = state_36048__$1;
(statearr_36052_36089[(2)] = null);

(statearr_36052_36089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (1))){
var state_36048__$1 = state_36048;
var statearr_36053_36090 = state_36048__$1;
(statearr_36053_36090[(2)] = null);

(statearr_36053_36090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (4))){
var inst_35989 = (state_36048[(13)]);
var inst_35989__$1 = (state_36048[(2)]);
var inst_35990 = (inst_35989__$1 == null);
var state_36048__$1 = (function (){var statearr_36054 = state_36048;
(statearr_36054[(13)] = inst_35989__$1);

return statearr_36054;
})();
if(cljs.core.truth_(inst_35990)){
var statearr_36055_36091 = state_36048__$1;
(statearr_36055_36091[(1)] = (5));

} else {
var statearr_36056_36092 = state_36048__$1;
(statearr_36056_36092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (15))){
var state_36048__$1 = state_36048;
var statearr_36060_36093 = state_36048__$1;
(statearr_36060_36093[(2)] = null);

(statearr_36060_36093[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (21))){
var state_36048__$1 = state_36048;
var statearr_36061_36094 = state_36048__$1;
(statearr_36061_36094[(2)] = null);

(statearr_36061_36094[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (13))){
var inst_36001 = (state_36048[(9)]);
var inst_36002 = (state_36048[(10)]);
var inst_36003 = (state_36048[(11)]);
var inst_36000 = (state_36048[(12)]);
var inst_36010 = (state_36048[(2)]);
var inst_36011 = (inst_36003 + (1));
var tmp36057 = inst_36001;
var tmp36058 = inst_36002;
var tmp36059 = inst_36000;
var inst_36000__$1 = tmp36059;
var inst_36001__$1 = tmp36057;
var inst_36002__$1 = tmp36058;
var inst_36003__$1 = inst_36011;
var state_36048__$1 = (function (){var statearr_36062 = state_36048;
(statearr_36062[(9)] = inst_36001__$1);

(statearr_36062[(10)] = inst_36002__$1);

(statearr_36062[(11)] = inst_36003__$1);

(statearr_36062[(12)] = inst_36000__$1);

(statearr_36062[(14)] = inst_36010);

return statearr_36062;
})();
var statearr_36063_36095 = state_36048__$1;
(statearr_36063_36095[(2)] = null);

(statearr_36063_36095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (22))){
var state_36048__$1 = state_36048;
var statearr_36064_36096 = state_36048__$1;
(statearr_36064_36096[(2)] = null);

(statearr_36064_36096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (6))){
var inst_35989 = (state_36048[(13)]);
var inst_35998 = f.call(null,inst_35989);
var inst_35999 = cljs.core.seq.call(null,inst_35998);
var inst_36000 = inst_35999;
var inst_36001 = null;
var inst_36002 = (0);
var inst_36003 = (0);
var state_36048__$1 = (function (){var statearr_36065 = state_36048;
(statearr_36065[(9)] = inst_36001);

(statearr_36065[(10)] = inst_36002);

(statearr_36065[(11)] = inst_36003);

(statearr_36065[(12)] = inst_36000);

return statearr_36065;
})();
var statearr_36066_36097 = state_36048__$1;
(statearr_36066_36097[(2)] = null);

(statearr_36066_36097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (17))){
var inst_36014 = (state_36048[(7)]);
var inst_36018 = cljs.core.chunk_first.call(null,inst_36014);
var inst_36019 = cljs.core.chunk_rest.call(null,inst_36014);
var inst_36020 = cljs.core.count.call(null,inst_36018);
var inst_36000 = inst_36019;
var inst_36001 = inst_36018;
var inst_36002 = inst_36020;
var inst_36003 = (0);
var state_36048__$1 = (function (){var statearr_36067 = state_36048;
(statearr_36067[(9)] = inst_36001);

(statearr_36067[(10)] = inst_36002);

(statearr_36067[(11)] = inst_36003);

(statearr_36067[(12)] = inst_36000);

return statearr_36067;
})();
var statearr_36068_36098 = state_36048__$1;
(statearr_36068_36098[(2)] = null);

(statearr_36068_36098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (3))){
var inst_36046 = (state_36048[(2)]);
var state_36048__$1 = state_36048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36048__$1,inst_36046);
} else {
if((state_val_36049 === (12))){
var inst_36034 = (state_36048[(2)]);
var state_36048__$1 = state_36048;
var statearr_36069_36099 = state_36048__$1;
(statearr_36069_36099[(2)] = inst_36034);

(statearr_36069_36099[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (2))){
var state_36048__$1 = state_36048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36048__$1,(4),in$);
} else {
if((state_val_36049 === (23))){
var inst_36042 = (state_36048[(2)]);
var state_36048__$1 = state_36048;
var statearr_36070_36100 = state_36048__$1;
(statearr_36070_36100[(2)] = inst_36042);

(statearr_36070_36100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (19))){
var inst_36029 = (state_36048[(2)]);
var state_36048__$1 = state_36048;
var statearr_36071_36101 = state_36048__$1;
(statearr_36071_36101[(2)] = inst_36029);

(statearr_36071_36101[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (11))){
var inst_36014 = (state_36048[(7)]);
var inst_36000 = (state_36048[(12)]);
var inst_36014__$1 = cljs.core.seq.call(null,inst_36000);
var state_36048__$1 = (function (){var statearr_36072 = state_36048;
(statearr_36072[(7)] = inst_36014__$1);

return statearr_36072;
})();
if(inst_36014__$1){
var statearr_36073_36102 = state_36048__$1;
(statearr_36073_36102[(1)] = (14));

} else {
var statearr_36074_36103 = state_36048__$1;
(statearr_36074_36103[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (9))){
var inst_36036 = (state_36048[(2)]);
var inst_36037 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36048__$1 = (function (){var statearr_36075 = state_36048;
(statearr_36075[(15)] = inst_36036);

return statearr_36075;
})();
if(cljs.core.truth_(inst_36037)){
var statearr_36076_36104 = state_36048__$1;
(statearr_36076_36104[(1)] = (21));

} else {
var statearr_36077_36105 = state_36048__$1;
(statearr_36077_36105[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (5))){
var inst_35992 = cljs.core.async.close_BANG_.call(null,out);
var state_36048__$1 = state_36048;
var statearr_36078_36106 = state_36048__$1;
(statearr_36078_36106[(2)] = inst_35992);

(statearr_36078_36106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (14))){
var inst_36014 = (state_36048[(7)]);
var inst_36016 = cljs.core.chunked_seq_QMARK_.call(null,inst_36014);
var state_36048__$1 = state_36048;
if(inst_36016){
var statearr_36079_36107 = state_36048__$1;
(statearr_36079_36107[(1)] = (17));

} else {
var statearr_36080_36108 = state_36048__$1;
(statearr_36080_36108[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (16))){
var inst_36032 = (state_36048[(2)]);
var state_36048__$1 = state_36048;
var statearr_36081_36109 = state_36048__$1;
(statearr_36081_36109[(2)] = inst_36032);

(statearr_36081_36109[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36049 === (10))){
var inst_36001 = (state_36048[(9)]);
var inst_36003 = (state_36048[(11)]);
var inst_36008 = cljs.core._nth.call(null,inst_36001,inst_36003);
var state_36048__$1 = state_36048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36048__$1,(13),out,inst_36008);
} else {
if((state_val_36049 === (18))){
var inst_36014 = (state_36048[(7)]);
var inst_36023 = cljs.core.first.call(null,inst_36014);
var state_36048__$1 = state_36048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36048__$1,(20),out,inst_36023);
} else {
if((state_val_36049 === (8))){
var inst_36002 = (state_36048[(10)]);
var inst_36003 = (state_36048[(11)]);
var inst_36005 = (inst_36003 < inst_36002);
var inst_36006 = inst_36005;
var state_36048__$1 = state_36048;
if(cljs.core.truth_(inst_36006)){
var statearr_36082_36110 = state_36048__$1;
(statearr_36082_36110[(1)] = (10));

} else {
var statearr_36083_36111 = state_36048__$1;
(statearr_36083_36111[(1)] = (11));

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
});})(c__23955__auto__))
;
return ((function (switch__23932__auto__,c__23955__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23933__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23933__auto____0 = (function (){
var statearr_36084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36084[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23933__auto__);

(statearr_36084[(1)] = (1));

return statearr_36084;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23933__auto____1 = (function (state_36048){
while(true){
var ret_value__23934__auto__ = (function (){try{while(true){
var result__23935__auto__ = switch__23932__auto__.call(null,state_36048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23935__auto__;
}
break;
}
}catch (e36085){if((e36085 instanceof Object)){
var ex__23936__auto__ = e36085;
var statearr_36086_36112 = state_36048;
(statearr_36086_36112[(5)] = ex__23936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36113 = state_36048;
state_36048 = G__36113;
continue;
} else {
return ret_value__23934__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23933__auto__ = function(state_36048){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23933__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23933__auto____1.call(this,state_36048);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23933__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23933__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23933__auto__;
})()
;})(switch__23932__auto__,c__23955__auto__))
})();
var state__23957__auto__ = (function (){var statearr_36087 = f__23956__auto__.call(null);
(statearr_36087[(6)] = c__23955__auto__);

return statearr_36087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23957__auto__);
});})(c__23955__auto__))
);

return c__23955__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36115 = arguments.length;
switch (G__36115) {
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
var G__36118 = arguments.length;
switch (G__36118) {
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
var G__36121 = arguments.length;
switch (G__36121) {
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
var c__23955__auto___36168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23955__auto___36168,out){
return (function (){
var f__23956__auto__ = (function (){var switch__23932__auto__ = ((function (c__23955__auto___36168,out){
return (function (state_36145){
var state_val_36146 = (state_36145[(1)]);
if((state_val_36146 === (7))){
var inst_36140 = (state_36145[(2)]);
var state_36145__$1 = state_36145;
var statearr_36147_36169 = state_36145__$1;
(statearr_36147_36169[(2)] = inst_36140);

(statearr_36147_36169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36146 === (1))){
var inst_36122 = null;
var state_36145__$1 = (function (){var statearr_36148 = state_36145;
(statearr_36148[(7)] = inst_36122);

return statearr_36148;
})();
var statearr_36149_36170 = state_36145__$1;
(statearr_36149_36170[(2)] = null);

(statearr_36149_36170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36146 === (4))){
var inst_36125 = (state_36145[(8)]);
var inst_36125__$1 = (state_36145[(2)]);
var inst_36126 = (inst_36125__$1 == null);
var inst_36127 = cljs.core.not.call(null,inst_36126);
var state_36145__$1 = (function (){var statearr_36150 = state_36145;
(statearr_36150[(8)] = inst_36125__$1);

return statearr_36150;
})();
if(inst_36127){
var statearr_36151_36171 = state_36145__$1;
(statearr_36151_36171[(1)] = (5));

} else {
var statearr_36152_36172 = state_36145__$1;
(statearr_36152_36172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36146 === (6))){
var state_36145__$1 = state_36145;
var statearr_36153_36173 = state_36145__$1;
(statearr_36153_36173[(2)] = null);

(statearr_36153_36173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36146 === (3))){
var inst_36142 = (state_36145[(2)]);
var inst_36143 = cljs.core.async.close_BANG_.call(null,out);
var state_36145__$1 = (function (){var statearr_36154 = state_36145;
(statearr_36154[(9)] = inst_36142);

return statearr_36154;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36145__$1,inst_36143);
} else {
if((state_val_36146 === (2))){
var state_36145__$1 = state_36145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36145__$1,(4),ch);
} else {
if((state_val_36146 === (11))){
var inst_36125 = (state_36145[(8)]);
var inst_36134 = (state_36145[(2)]);
var inst_36122 = inst_36125;
var state_36145__$1 = (function (){var statearr_36155 = state_36145;
(statearr_36155[(7)] = inst_36122);

(statearr_36155[(10)] = inst_36134);

return statearr_36155;
})();
var statearr_36156_36174 = state_36145__$1;
(statearr_36156_36174[(2)] = null);

(statearr_36156_36174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36146 === (9))){
var inst_36125 = (state_36145[(8)]);
var state_36145__$1 = state_36145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36145__$1,(11),out,inst_36125);
} else {
if((state_val_36146 === (5))){
var inst_36122 = (state_36145[(7)]);
var inst_36125 = (state_36145[(8)]);
var inst_36129 = cljs.core._EQ_.call(null,inst_36125,inst_36122);
var state_36145__$1 = state_36145;
if(inst_36129){
var statearr_36158_36175 = state_36145__$1;
(statearr_36158_36175[(1)] = (8));

} else {
var statearr_36159_36176 = state_36145__$1;
(statearr_36159_36176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36146 === (10))){
var inst_36137 = (state_36145[(2)]);
var state_36145__$1 = state_36145;
var statearr_36160_36177 = state_36145__$1;
(statearr_36160_36177[(2)] = inst_36137);

(statearr_36160_36177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36146 === (8))){
var inst_36122 = (state_36145[(7)]);
var tmp36157 = inst_36122;
var inst_36122__$1 = tmp36157;
var state_36145__$1 = (function (){var statearr_36161 = state_36145;
(statearr_36161[(7)] = inst_36122__$1);

return statearr_36161;
})();
var statearr_36162_36178 = state_36145__$1;
(statearr_36162_36178[(2)] = null);

(statearr_36162_36178[(1)] = (2));


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
});})(c__23955__auto___36168,out))
;
return ((function (switch__23932__auto__,c__23955__auto___36168,out){
return (function() {
var cljs$core$async$state_machine__23933__auto__ = null;
var cljs$core$async$state_machine__23933__auto____0 = (function (){
var statearr_36163 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36163[(0)] = cljs$core$async$state_machine__23933__auto__);

(statearr_36163[(1)] = (1));

return statearr_36163;
});
var cljs$core$async$state_machine__23933__auto____1 = (function (state_36145){
while(true){
var ret_value__23934__auto__ = (function (){try{while(true){
var result__23935__auto__ = switch__23932__auto__.call(null,state_36145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23935__auto__;
}
break;
}
}catch (e36164){if((e36164 instanceof Object)){
var ex__23936__auto__ = e36164;
var statearr_36165_36179 = state_36145;
(statearr_36165_36179[(5)] = ex__23936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36180 = state_36145;
state_36145 = G__36180;
continue;
} else {
return ret_value__23934__auto__;
}
break;
}
});
cljs$core$async$state_machine__23933__auto__ = function(state_36145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23933__auto____1.call(this,state_36145);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23933__auto____0;
cljs$core$async$state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23933__auto____1;
return cljs$core$async$state_machine__23933__auto__;
})()
;})(switch__23932__auto__,c__23955__auto___36168,out))
})();
var state__23957__auto__ = (function (){var statearr_36166 = f__23956__auto__.call(null);
(statearr_36166[(6)] = c__23955__auto___36168);

return statearr_36166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23957__auto__);
});})(c__23955__auto___36168,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36182 = arguments.length;
switch (G__36182) {
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
var c__23955__auto___36248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23955__auto___36248,out){
return (function (){
var f__23956__auto__ = (function (){var switch__23932__auto__ = ((function (c__23955__auto___36248,out){
return (function (state_36220){
var state_val_36221 = (state_36220[(1)]);
if((state_val_36221 === (7))){
var inst_36216 = (state_36220[(2)]);
var state_36220__$1 = state_36220;
var statearr_36222_36249 = state_36220__$1;
(statearr_36222_36249[(2)] = inst_36216);

(statearr_36222_36249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (1))){
var inst_36183 = (new Array(n));
var inst_36184 = inst_36183;
var inst_36185 = (0);
var state_36220__$1 = (function (){var statearr_36223 = state_36220;
(statearr_36223[(7)] = inst_36185);

(statearr_36223[(8)] = inst_36184);

return statearr_36223;
})();
var statearr_36224_36250 = state_36220__$1;
(statearr_36224_36250[(2)] = null);

(statearr_36224_36250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (4))){
var inst_36188 = (state_36220[(9)]);
var inst_36188__$1 = (state_36220[(2)]);
var inst_36189 = (inst_36188__$1 == null);
var inst_36190 = cljs.core.not.call(null,inst_36189);
var state_36220__$1 = (function (){var statearr_36225 = state_36220;
(statearr_36225[(9)] = inst_36188__$1);

return statearr_36225;
})();
if(inst_36190){
var statearr_36226_36251 = state_36220__$1;
(statearr_36226_36251[(1)] = (5));

} else {
var statearr_36227_36252 = state_36220__$1;
(statearr_36227_36252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (15))){
var inst_36210 = (state_36220[(2)]);
var state_36220__$1 = state_36220;
var statearr_36228_36253 = state_36220__$1;
(statearr_36228_36253[(2)] = inst_36210);

(statearr_36228_36253[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (13))){
var state_36220__$1 = state_36220;
var statearr_36229_36254 = state_36220__$1;
(statearr_36229_36254[(2)] = null);

(statearr_36229_36254[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (6))){
var inst_36185 = (state_36220[(7)]);
var inst_36206 = (inst_36185 > (0));
var state_36220__$1 = state_36220;
if(cljs.core.truth_(inst_36206)){
var statearr_36230_36255 = state_36220__$1;
(statearr_36230_36255[(1)] = (12));

} else {
var statearr_36231_36256 = state_36220__$1;
(statearr_36231_36256[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (3))){
var inst_36218 = (state_36220[(2)]);
var state_36220__$1 = state_36220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36220__$1,inst_36218);
} else {
if((state_val_36221 === (12))){
var inst_36184 = (state_36220[(8)]);
var inst_36208 = cljs.core.vec.call(null,inst_36184);
var state_36220__$1 = state_36220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36220__$1,(15),out,inst_36208);
} else {
if((state_val_36221 === (2))){
var state_36220__$1 = state_36220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36220__$1,(4),ch);
} else {
if((state_val_36221 === (11))){
var inst_36200 = (state_36220[(2)]);
var inst_36201 = (new Array(n));
var inst_36184 = inst_36201;
var inst_36185 = (0);
var state_36220__$1 = (function (){var statearr_36232 = state_36220;
(statearr_36232[(7)] = inst_36185);

(statearr_36232[(8)] = inst_36184);

(statearr_36232[(10)] = inst_36200);

return statearr_36232;
})();
var statearr_36233_36257 = state_36220__$1;
(statearr_36233_36257[(2)] = null);

(statearr_36233_36257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (9))){
var inst_36184 = (state_36220[(8)]);
var inst_36198 = cljs.core.vec.call(null,inst_36184);
var state_36220__$1 = state_36220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36220__$1,(11),out,inst_36198);
} else {
if((state_val_36221 === (5))){
var inst_36185 = (state_36220[(7)]);
var inst_36188 = (state_36220[(9)]);
var inst_36184 = (state_36220[(8)]);
var inst_36193 = (state_36220[(11)]);
var inst_36192 = (inst_36184[inst_36185] = inst_36188);
var inst_36193__$1 = (inst_36185 + (1));
var inst_36194 = (inst_36193__$1 < n);
var state_36220__$1 = (function (){var statearr_36234 = state_36220;
(statearr_36234[(12)] = inst_36192);

(statearr_36234[(11)] = inst_36193__$1);

return statearr_36234;
})();
if(cljs.core.truth_(inst_36194)){
var statearr_36235_36258 = state_36220__$1;
(statearr_36235_36258[(1)] = (8));

} else {
var statearr_36236_36259 = state_36220__$1;
(statearr_36236_36259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (14))){
var inst_36213 = (state_36220[(2)]);
var inst_36214 = cljs.core.async.close_BANG_.call(null,out);
var state_36220__$1 = (function (){var statearr_36238 = state_36220;
(statearr_36238[(13)] = inst_36213);

return statearr_36238;
})();
var statearr_36239_36260 = state_36220__$1;
(statearr_36239_36260[(2)] = inst_36214);

(statearr_36239_36260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (10))){
var inst_36204 = (state_36220[(2)]);
var state_36220__$1 = state_36220;
var statearr_36240_36261 = state_36220__$1;
(statearr_36240_36261[(2)] = inst_36204);

(statearr_36240_36261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (8))){
var inst_36184 = (state_36220[(8)]);
var inst_36193 = (state_36220[(11)]);
var tmp36237 = inst_36184;
var inst_36184__$1 = tmp36237;
var inst_36185 = inst_36193;
var state_36220__$1 = (function (){var statearr_36241 = state_36220;
(statearr_36241[(7)] = inst_36185);

(statearr_36241[(8)] = inst_36184__$1);

return statearr_36241;
})();
var statearr_36242_36262 = state_36220__$1;
(statearr_36242_36262[(2)] = null);

(statearr_36242_36262[(1)] = (2));


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
});})(c__23955__auto___36248,out))
;
return ((function (switch__23932__auto__,c__23955__auto___36248,out){
return (function() {
var cljs$core$async$state_machine__23933__auto__ = null;
var cljs$core$async$state_machine__23933__auto____0 = (function (){
var statearr_36243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36243[(0)] = cljs$core$async$state_machine__23933__auto__);

(statearr_36243[(1)] = (1));

return statearr_36243;
});
var cljs$core$async$state_machine__23933__auto____1 = (function (state_36220){
while(true){
var ret_value__23934__auto__ = (function (){try{while(true){
var result__23935__auto__ = switch__23932__auto__.call(null,state_36220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23935__auto__;
}
break;
}
}catch (e36244){if((e36244 instanceof Object)){
var ex__23936__auto__ = e36244;
var statearr_36245_36263 = state_36220;
(statearr_36245_36263[(5)] = ex__23936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36264 = state_36220;
state_36220 = G__36264;
continue;
} else {
return ret_value__23934__auto__;
}
break;
}
});
cljs$core$async$state_machine__23933__auto__ = function(state_36220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23933__auto____1.call(this,state_36220);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23933__auto____0;
cljs$core$async$state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23933__auto____1;
return cljs$core$async$state_machine__23933__auto__;
})()
;})(switch__23932__auto__,c__23955__auto___36248,out))
})();
var state__23957__auto__ = (function (){var statearr_36246 = f__23956__auto__.call(null);
(statearr_36246[(6)] = c__23955__auto___36248);

return statearr_36246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23957__auto__);
});})(c__23955__auto___36248,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36266 = arguments.length;
switch (G__36266) {
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
var c__23955__auto___36336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23955__auto___36336,out){
return (function (){
var f__23956__auto__ = (function (){var switch__23932__auto__ = ((function (c__23955__auto___36336,out){
return (function (state_36308){
var state_val_36309 = (state_36308[(1)]);
if((state_val_36309 === (7))){
var inst_36304 = (state_36308[(2)]);
var state_36308__$1 = state_36308;
var statearr_36310_36337 = state_36308__$1;
(statearr_36310_36337[(2)] = inst_36304);

(statearr_36310_36337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (1))){
var inst_36267 = [];
var inst_36268 = inst_36267;
var inst_36269 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36308__$1 = (function (){var statearr_36311 = state_36308;
(statearr_36311[(7)] = inst_36268);

(statearr_36311[(8)] = inst_36269);

return statearr_36311;
})();
var statearr_36312_36338 = state_36308__$1;
(statearr_36312_36338[(2)] = null);

(statearr_36312_36338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (4))){
var inst_36272 = (state_36308[(9)]);
var inst_36272__$1 = (state_36308[(2)]);
var inst_36273 = (inst_36272__$1 == null);
var inst_36274 = cljs.core.not.call(null,inst_36273);
var state_36308__$1 = (function (){var statearr_36313 = state_36308;
(statearr_36313[(9)] = inst_36272__$1);

return statearr_36313;
})();
if(inst_36274){
var statearr_36314_36339 = state_36308__$1;
(statearr_36314_36339[(1)] = (5));

} else {
var statearr_36315_36340 = state_36308__$1;
(statearr_36315_36340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (15))){
var inst_36298 = (state_36308[(2)]);
var state_36308__$1 = state_36308;
var statearr_36316_36341 = state_36308__$1;
(statearr_36316_36341[(2)] = inst_36298);

(statearr_36316_36341[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (13))){
var state_36308__$1 = state_36308;
var statearr_36317_36342 = state_36308__$1;
(statearr_36317_36342[(2)] = null);

(statearr_36317_36342[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (6))){
var inst_36268 = (state_36308[(7)]);
var inst_36293 = inst_36268.length;
var inst_36294 = (inst_36293 > (0));
var state_36308__$1 = state_36308;
if(cljs.core.truth_(inst_36294)){
var statearr_36318_36343 = state_36308__$1;
(statearr_36318_36343[(1)] = (12));

} else {
var statearr_36319_36344 = state_36308__$1;
(statearr_36319_36344[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (3))){
var inst_36306 = (state_36308[(2)]);
var state_36308__$1 = state_36308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36308__$1,inst_36306);
} else {
if((state_val_36309 === (12))){
var inst_36268 = (state_36308[(7)]);
var inst_36296 = cljs.core.vec.call(null,inst_36268);
var state_36308__$1 = state_36308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36308__$1,(15),out,inst_36296);
} else {
if((state_val_36309 === (2))){
var state_36308__$1 = state_36308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36308__$1,(4),ch);
} else {
if((state_val_36309 === (11))){
var inst_36276 = (state_36308[(10)]);
var inst_36272 = (state_36308[(9)]);
var inst_36286 = (state_36308[(2)]);
var inst_36287 = [];
var inst_36288 = inst_36287.push(inst_36272);
var inst_36268 = inst_36287;
var inst_36269 = inst_36276;
var state_36308__$1 = (function (){var statearr_36320 = state_36308;
(statearr_36320[(11)] = inst_36286);

(statearr_36320[(7)] = inst_36268);

(statearr_36320[(12)] = inst_36288);

(statearr_36320[(8)] = inst_36269);

return statearr_36320;
})();
var statearr_36321_36345 = state_36308__$1;
(statearr_36321_36345[(2)] = null);

(statearr_36321_36345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (9))){
var inst_36268 = (state_36308[(7)]);
var inst_36284 = cljs.core.vec.call(null,inst_36268);
var state_36308__$1 = state_36308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36308__$1,(11),out,inst_36284);
} else {
if((state_val_36309 === (5))){
var inst_36276 = (state_36308[(10)]);
var inst_36269 = (state_36308[(8)]);
var inst_36272 = (state_36308[(9)]);
var inst_36276__$1 = f.call(null,inst_36272);
var inst_36277 = cljs.core._EQ_.call(null,inst_36276__$1,inst_36269);
var inst_36278 = cljs.core.keyword_identical_QMARK_.call(null,inst_36269,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36279 = ((inst_36277) || (inst_36278));
var state_36308__$1 = (function (){var statearr_36322 = state_36308;
(statearr_36322[(10)] = inst_36276__$1);

return statearr_36322;
})();
if(cljs.core.truth_(inst_36279)){
var statearr_36323_36346 = state_36308__$1;
(statearr_36323_36346[(1)] = (8));

} else {
var statearr_36324_36347 = state_36308__$1;
(statearr_36324_36347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (14))){
var inst_36301 = (state_36308[(2)]);
var inst_36302 = cljs.core.async.close_BANG_.call(null,out);
var state_36308__$1 = (function (){var statearr_36326 = state_36308;
(statearr_36326[(13)] = inst_36301);

return statearr_36326;
})();
var statearr_36327_36348 = state_36308__$1;
(statearr_36327_36348[(2)] = inst_36302);

(statearr_36327_36348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (10))){
var inst_36291 = (state_36308[(2)]);
var state_36308__$1 = state_36308;
var statearr_36328_36349 = state_36308__$1;
(statearr_36328_36349[(2)] = inst_36291);

(statearr_36328_36349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (8))){
var inst_36268 = (state_36308[(7)]);
var inst_36276 = (state_36308[(10)]);
var inst_36272 = (state_36308[(9)]);
var inst_36281 = inst_36268.push(inst_36272);
var tmp36325 = inst_36268;
var inst_36268__$1 = tmp36325;
var inst_36269 = inst_36276;
var state_36308__$1 = (function (){var statearr_36329 = state_36308;
(statearr_36329[(14)] = inst_36281);

(statearr_36329[(7)] = inst_36268__$1);

(statearr_36329[(8)] = inst_36269);

return statearr_36329;
})();
var statearr_36330_36350 = state_36308__$1;
(statearr_36330_36350[(2)] = null);

(statearr_36330_36350[(1)] = (2));


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
});})(c__23955__auto___36336,out))
;
return ((function (switch__23932__auto__,c__23955__auto___36336,out){
return (function() {
var cljs$core$async$state_machine__23933__auto__ = null;
var cljs$core$async$state_machine__23933__auto____0 = (function (){
var statearr_36331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36331[(0)] = cljs$core$async$state_machine__23933__auto__);

(statearr_36331[(1)] = (1));

return statearr_36331;
});
var cljs$core$async$state_machine__23933__auto____1 = (function (state_36308){
while(true){
var ret_value__23934__auto__ = (function (){try{while(true){
var result__23935__auto__ = switch__23932__auto__.call(null,state_36308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23935__auto__;
}
break;
}
}catch (e36332){if((e36332 instanceof Object)){
var ex__23936__auto__ = e36332;
var statearr_36333_36351 = state_36308;
(statearr_36333_36351[(5)] = ex__23936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36352 = state_36308;
state_36308 = G__36352;
continue;
} else {
return ret_value__23934__auto__;
}
break;
}
});
cljs$core$async$state_machine__23933__auto__ = function(state_36308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23933__auto____1.call(this,state_36308);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23933__auto____0;
cljs$core$async$state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23933__auto____1;
return cljs$core$async$state_machine__23933__auto__;
})()
;})(switch__23932__auto__,c__23955__auto___36336,out))
})();
var state__23957__auto__ = (function (){var statearr_36334 = f__23956__auto__.call(null);
(statearr_36334[(6)] = c__23955__auto___36336);

return statearr_36334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23957__auto__);
});})(c__23955__auto___36336,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1555762420768
