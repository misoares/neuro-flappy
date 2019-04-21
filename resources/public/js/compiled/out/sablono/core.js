// Compiled by ClojureScript 1.10.238 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('react');
sablono.core.global$module$react = goog.global.React;
/**
 * The React.js create element function.
 */
sablono.core.create_element = sablono.core.global$module$react.createElement;
/**
 * The React.js Fragment.
 */
sablono.core.fragment = sablono.core.global$module$react.Fragment;
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__36404__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__36401 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__36402 = cljs.core.seq.call(null,vec__36401);
var first__36403 = cljs.core.first.call(null,seq__36402);
var seq__36402__$1 = cljs.core.next.call(null,seq__36402);
var tag = first__36403;
var body = seq__36402__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__36404 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36405__i = 0, G__36405__a = new Array(arguments.length -  0);
while (G__36405__i < G__36405__a.length) {G__36405__a[G__36405__i] = arguments[G__36405__i + 0]; ++G__36405__i;}
  args = new cljs.core.IndexedSeq(G__36405__a,0,null);
} 
return G__36404__delegate.call(this,args);};
G__36404.cljs$lang$maxFixedArity = 0;
G__36404.cljs$lang$applyTo = (function (arglist__36406){
var args = cljs.core.seq(arglist__36406);
return G__36404__delegate(args);
});
G__36404.cljs$core$IFn$_invoke$arity$variadic = G__36404__delegate;
return G__36404;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4292__auto__ = (function sablono$core$update_arglists_$_iter__36407(s__36408){
return (new cljs.core.LazySeq(null,(function (){
var s__36408__$1 = s__36408;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__36408__$1);
if(temp__5457__auto__){
var s__36408__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36408__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__36408__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__36410 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__36409 = (0);
while(true){
if((i__36409 < size__4291__auto__)){
var args = cljs.core._nth.call(null,c__4290__auto__,i__36409);
cljs.core.chunk_append.call(null,b__36410,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__36411 = (i__36409 + (1));
i__36409 = G__36411;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36410),sablono$core$update_arglists_$_iter__36407.call(null,cljs.core.chunk_rest.call(null,s__36408__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36410),null);
}
} else {
var args = cljs.core.first.call(null,s__36408__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__36407.call(null,cljs.core.rest.call(null,s__36408__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36417 = arguments.length;
var i__4500__auto___36418 = (0);
while(true){
if((i__4500__auto___36418 < len__4499__auto___36417)){
args__4502__auto__.push((arguments[i__4500__auto___36418]));

var G__36419 = (i__4500__auto___36418 + (1));
i__4500__auto___36418 = G__36419;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4292__auto__ = (function sablono$core$iter__36413(s__36414){
return (new cljs.core.LazySeq(null,(function (){
var s__36414__$1 = s__36414;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__36414__$1);
if(temp__5457__auto__){
var s__36414__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36414__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__36414__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__36416 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__36415 = (0);
while(true){
if((i__36415 < size__4291__auto__)){
var style = cljs.core._nth.call(null,c__4290__auto__,i__36415);
cljs.core.chunk_append.call(null,b__36416,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__36420 = (i__36415 + (1));
i__36415 = G__36420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36416),sablono$core$iter__36413.call(null,cljs.core.chunk_rest.call(null,s__36414__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36416),null);
}
} else {
var style = cljs.core.first.call(null,s__36414__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__36413.call(null,cljs.core.rest.call(null,s__36414__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq36412){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36412));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to36421 = (function sablono$core$link_to36421(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36424 = arguments.length;
var i__4500__auto___36425 = (0);
while(true){
if((i__4500__auto___36425 < len__4499__auto___36424)){
args__4502__auto__.push((arguments[i__4500__auto___36425]));

var G__36426 = (i__4500__auto___36425 + (1));
i__4500__auto___36425 = G__36426;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to36421.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.link_to36421.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to36421.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to36421.cljs$lang$applyTo = (function (seq36422){
var G__36423 = cljs.core.first.call(null,seq36422);
var seq36422__$1 = cljs.core.next.call(null,seq36422);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36423,seq36422__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to36421);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to36427 = (function sablono$core$mail_to36427(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36434 = arguments.length;
var i__4500__auto___36435 = (0);
while(true){
if((i__4500__auto___36435 < len__4499__auto___36434)){
args__4502__auto__.push((arguments[i__4500__auto___36435]));

var G__36436 = (i__4500__auto___36435 + (1));
i__4500__auto___36435 = G__36436;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to36427.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.mail_to36427.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__36430){
var vec__36431 = p__36430;
var content = cljs.core.nth.call(null,vec__36431,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3922__auto__ = content;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to36427.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to36427.cljs$lang$applyTo = (function (seq36428){
var G__36429 = cljs.core.first.call(null,seq36428);
var seq36428__$1 = cljs.core.next.call(null,seq36428);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36429,seq36428__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to36427);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list36437 = (function sablono$core$unordered_list36437(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4292__auto__ = (function sablono$core$unordered_list36437_$_iter__36438(s__36439){
return (new cljs.core.LazySeq(null,(function (){
var s__36439__$1 = s__36439;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__36439__$1);
if(temp__5457__auto__){
var s__36439__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36439__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__36439__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__36441 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__36440 = (0);
while(true){
if((i__36440 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__36440);
cljs.core.chunk_append.call(null,b__36441,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__36442 = (i__36440 + (1));
i__36440 = G__36442;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36441),sablono$core$unordered_list36437_$_iter__36438.call(null,cljs.core.chunk_rest.call(null,s__36439__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36441),null);
}
} else {
var x = cljs.core.first.call(null,s__36439__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list36437_$_iter__36438.call(null,cljs.core.rest.call(null,s__36439__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list36437);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list36443 = (function sablono$core$ordered_list36443(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4292__auto__ = (function sablono$core$ordered_list36443_$_iter__36444(s__36445){
return (new cljs.core.LazySeq(null,(function (){
var s__36445__$1 = s__36445;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__36445__$1);
if(temp__5457__auto__){
var s__36445__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36445__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__36445__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__36447 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__36446 = (0);
while(true){
if((i__36446 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__36446);
cljs.core.chunk_append.call(null,b__36447,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__36448 = (i__36446 + (1));
i__36446 = G__36448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36447),sablono$core$ordered_list36443_$_iter__36444.call(null,cljs.core.chunk_rest.call(null,s__36445__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36447),null);
}
} else {
var x = cljs.core.first.call(null,s__36445__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list36443_$_iter__36444.call(null,cljs.core.rest.call(null,s__36445__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list36443);
/**
 * Create an image element.
 */
sablono.core.image36449 = (function sablono$core$image36449(var_args){
var G__36451 = arguments.length;
switch (G__36451) {
case 1:
return sablono.core.image36449.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image36449.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image36449.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image36449.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image36449.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image36449);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__36453_SHARP_,p2__36454_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36453_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__36454_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__36455_SHARP_,p2__36456_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36455_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__36456_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__36458 = arguments.length;
switch (G__36458) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = value;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field36460 = (function sablono$core$color_field36460(var_args){
var G__36462 = arguments.length;
switch (G__36462) {
case 1:
return sablono.core.color_field36460.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field36460.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field36460.cljs$core$IFn$_invoke$arity$1 = (function (name__34086__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__34086__auto__);
});

sablono.core.color_field36460.cljs$core$IFn$_invoke$arity$2 = (function (name__34086__auto__,value__34087__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__34086__auto__,value__34087__auto__);
});

sablono.core.color_field36460.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field36460);

/**
 * Creates a date input field.
 */
sablono.core.date_field36463 = (function sablono$core$date_field36463(var_args){
var G__36465 = arguments.length;
switch (G__36465) {
case 1:
return sablono.core.date_field36463.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field36463.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field36463.cljs$core$IFn$_invoke$arity$1 = (function (name__34086__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__34086__auto__);
});

sablono.core.date_field36463.cljs$core$IFn$_invoke$arity$2 = (function (name__34086__auto__,value__34087__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__34086__auto__,value__34087__auto__);
});

sablono.core.date_field36463.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field36463);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field36466 = (function sablono$core$datetime_field36466(var_args){
var G__36468 = arguments.length;
switch (G__36468) {
case 1:
return sablono.core.datetime_field36466.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field36466.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field36466.cljs$core$IFn$_invoke$arity$1 = (function (name__34086__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__34086__auto__);
});

sablono.core.datetime_field36466.cljs$core$IFn$_invoke$arity$2 = (function (name__34086__auto__,value__34087__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__34086__auto__,value__34087__auto__);
});

sablono.core.datetime_field36466.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field36466);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field36469 = (function sablono$core$datetime_local_field36469(var_args){
var G__36471 = arguments.length;
switch (G__36471) {
case 1:
return sablono.core.datetime_local_field36469.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field36469.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field36469.cljs$core$IFn$_invoke$arity$1 = (function (name__34086__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__34086__auto__);
});

sablono.core.datetime_local_field36469.cljs$core$IFn$_invoke$arity$2 = (function (name__34086__auto__,value__34087__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__34086__auto__,value__34087__auto__);
});

sablono.core.datetime_local_field36469.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field36469);

/**
 * Creates a email input field.
 */
sablono.core.email_field36472 = (function sablono$core$email_field36472(var_args){
var G__36474 = arguments.length;
switch (G__36474) {
case 1:
return sablono.core.email_field36472.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field36472.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field36472.cljs$core$IFn$_invoke$arity$1 = (function (name__34086__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__34086__auto__);
});

sablono.core.email_field36472.cljs$core$IFn$_invoke$arity$2 = (function (name__34086__auto__,value__34087__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__34086__auto__,value__34087__auto__);
});

sablono.core.email_field36472.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field36472);

/**
 * Creates a file input field.
 */
sablono.core.file_field36475 = (function sablono$core$file_field36475(var_args){
var G__36477 = arguments.length;
switch (G__36477) {
case 1:
return sablono.core.file_field36475.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field36475.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field36475.cljs$core$IFn$_invoke$arity$1 = (function (name__34086__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__34086__auto__);
});

sablono.core.file_field36475.cljs$core$IFn$_invoke$arity$2 = (function (name__34086__auto__,value__34087__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__34086__auto__,value__34087__auto__);
});

sablono.core.file_field36475.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field36475);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field36478 = (function sablono$core$hidden_field36478(var_args){
var G__36480 = arguments.length;
switch (G__36480) {
case 1:
return sablono.core.hidden_field36478.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field36478.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field36478.cljs$core$IFn$_invoke$arity$1 = (function (name__34086__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__34086__auto__);
});

sablono.core.hidden_field36478.cljs$core$IFn$_invoke$arity$2 = (function (name__34086__auto__,value__34087__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__34086__auto__,value__34087__auto__);
});

sablono.core.hidden_field36478.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field36478);

/**
 * Creates a month input field.
 */
sablono.core.month_field36481 = (function sablono$core$month_field36481(var_args){
var G__36483 = arguments.length;
switch (G__36483) {
case 1:
return sablono.core.month_field36481.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field36481.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field36481.cljs$core$IFn$_invoke$arity$1 = (function (name__34086__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__34086__auto__);
});

sablono.core.month_field36481.cljs$core$IFn$_invoke$arity$2 = (function (name__34086__auto__,value__34087__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__34086__auto__,value__34087__auto__);
});

sablono.core.month_field36481.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field36481);

/**
 * Creates a number input field.
 */
sablono.core.number_field36484 = (function sablono$core$number_field36484(var_args){
var G__36486 = arguments.length;
switch (G__36486) {
case 1:
return sablono.core.number_field36484.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field36484.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field36484.cljs$core$IFn$_invoke$arity$1 = (function (name__34086__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__34086__auto__);
});

sablono.core.number_field36484.cljs$core$IFn$_invoke$arity$2 = (function (name__34086__auto__,value__34087__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__34086__auto__,value__34087__auto__);
});

sablono.core.number_field36484.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field36484);

/**
 * Creates a password input field.
 */
sablono.core.password_field36487 = (function sablono$core$password_field36487(var_args){
var G__36489 = arguments.length;
switch (G__36489) {
case 1:
return sablono.core.password_field36487.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field36487.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field36487.cljs$core$IFn$_invoke$arity$1 = (function (name__34086__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__34086__auto__);
});

sablono.core.password_field36487.cljs$core$IFn$_invoke$arity$2 = (function (name__34086__auto__,value__34087__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__34086__auto__,value__34087__auto__);
});

sablono.core.password_field36487.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field36487);

/**
 * Creates a range input field.
 */
sablono.core.range_field36490 = (function sablono$core$range_field36490(var_args){
var G__36492 = arguments.length;
switch (G__36492) {
case 1:
return sablono.core.range_field36490.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field36490.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field36490.cljs$core$IFn$_invoke$arity$1 = (function (name__34086__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__34086__auto__);
});

sablono.core.range_field36490.cljs$core$IFn$_invoke$arity$2 = (function (name__34086__auto__,value__34087__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__34086__auto__,value__34087__auto__);
});

sablono.core.range_field36490.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field36490);

/**
 * Creates a search input field.
 */
sablono.core.search_field36493 = (function sablono$core$search_field36493(var_args){
var G__36495 = arguments.length;
switch (G__36495) {
case 1:
return sablono.core.search_field36493.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field36493.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field36493.cljs$core$IFn$_invoke$arity$1 = (function (name__34086__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__34086__auto__);
});

sablono.core.search_field36493.cljs$core$IFn$_invoke$arity$2 = (function (name__34086__auto__,value__34087__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__34086__auto__,value__34087__auto__);
});

sablono.core.search_field36493.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field36493);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field36496 = (function sablono$core$tel_field36496(var_args){
var G__36498 = arguments.length;
switch (G__36498) {
case 1:
return sablono.core.tel_field36496.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field36496.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field36496.cljs$core$IFn$_invoke$arity$1 = (function (name__34086__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__34086__auto__);
});

sablono.core.tel_field36496.cljs$core$IFn$_invoke$arity$2 = (function (name__34086__auto__,value__34087__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__34086__auto__,value__34087__auto__);
});

sablono.core.tel_field36496.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field36496);

/**
 * Creates a text input field.
 */
sablono.core.text_field36499 = (function sablono$core$text_field36499(var_args){
var G__36501 = arguments.length;
switch (G__36501) {
case 1:
return sablono.core.text_field36499.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field36499.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field36499.cljs$core$IFn$_invoke$arity$1 = (function (name__34086__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__34086__auto__);
});

sablono.core.text_field36499.cljs$core$IFn$_invoke$arity$2 = (function (name__34086__auto__,value__34087__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__34086__auto__,value__34087__auto__);
});

sablono.core.text_field36499.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field36499);

/**
 * Creates a time input field.
 */
sablono.core.time_field36502 = (function sablono$core$time_field36502(var_args){
var G__36504 = arguments.length;
switch (G__36504) {
case 1:
return sablono.core.time_field36502.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field36502.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field36502.cljs$core$IFn$_invoke$arity$1 = (function (name__34086__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__34086__auto__);
});

sablono.core.time_field36502.cljs$core$IFn$_invoke$arity$2 = (function (name__34086__auto__,value__34087__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__34086__auto__,value__34087__auto__);
});

sablono.core.time_field36502.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field36502);

/**
 * Creates a url input field.
 */
sablono.core.url_field36505 = (function sablono$core$url_field36505(var_args){
var G__36507 = arguments.length;
switch (G__36507) {
case 1:
return sablono.core.url_field36505.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field36505.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field36505.cljs$core$IFn$_invoke$arity$1 = (function (name__34086__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__34086__auto__);
});

sablono.core.url_field36505.cljs$core$IFn$_invoke$arity$2 = (function (name__34086__auto__,value__34087__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__34086__auto__,value__34087__auto__);
});

sablono.core.url_field36505.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field36505);

/**
 * Creates a week input field.
 */
sablono.core.week_field36508 = (function sablono$core$week_field36508(var_args){
var G__36510 = arguments.length;
switch (G__36510) {
case 1:
return sablono.core.week_field36508.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field36508.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field36508.cljs$core$IFn$_invoke$arity$1 = (function (name__34086__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__34086__auto__);
});

sablono.core.week_field36508.cljs$core$IFn$_invoke$arity$2 = (function (name__34086__auto__,value__34087__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__34086__auto__,value__34087__auto__);
});

sablono.core.week_field36508.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field36508);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box36528 = (function sablono$core$check_box36528(var_args){
var G__36530 = arguments.length;
switch (G__36530) {
case 1:
return sablono.core.check_box36528.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box36528.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box36528.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box36528.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box36528.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box36528.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box36528.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box36528);
/**
 * Creates a radio button.
 */
sablono.core.radio_button36532 = (function sablono$core$radio_button36532(var_args){
var G__36534 = arguments.length;
switch (G__36534) {
case 1:
return sablono.core.radio_button36532.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button36532.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button36532.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button36532.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button36532.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button36532.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button36532.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button36532);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options36536 = (function sablono$core$select_options36536(coll){
var iter__4292__auto__ = (function sablono$core$select_options36536_$_iter__36537(s__36538){
return (new cljs.core.LazySeq(null,(function (){
var s__36538__$1 = s__36538;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__36538__$1);
if(temp__5457__auto__){
var s__36538__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36538__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__36538__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__36540 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__36539 = (0);
while(true){
if((i__36539 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__36539);
cljs.core.chunk_append.call(null,b__36540,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36541 = x;
var text = cljs.core.nth.call(null,vec__36541,(0),null);
var val = cljs.core.nth.call(null,vec__36541,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__36541,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options36536.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__36547 = (i__36539 + (1));
i__36539 = G__36547;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36540),sablono$core$select_options36536_$_iter__36537.call(null,cljs.core.chunk_rest.call(null,s__36538__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36540),null);
}
} else {
var x = cljs.core.first.call(null,s__36538__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36544 = x;
var text = cljs.core.nth.call(null,vec__36544,(0),null);
var val = cljs.core.nth.call(null,vec__36544,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__36544,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options36536.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options36536_$_iter__36537.call(null,cljs.core.rest.call(null,s__36538__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options36536);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down36548 = (function sablono$core$drop_down36548(var_args){
var G__36550 = arguments.length;
switch (G__36550) {
case 2:
return sablono.core.drop_down36548.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down36548.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down36548.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down36548.call(null,name,options,null);
});

sablono.core.drop_down36548.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down36548.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down36548);
/**
 * Creates a text area element.
 */
sablono.core.text_area36552 = (function sablono$core$text_area36552(var_args){
var G__36554 = arguments.length;
switch (G__36554) {
case 1:
return sablono.core.text_area36552.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area36552.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area36552.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area36552.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = value;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area36552.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area36552);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label36556 = (function sablono$core$label36556(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label36556);
/**
 * Creates a submit button.
 */
sablono.core.submit_button36557 = (function sablono$core$submit_button36557(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button36557);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button36558 = (function sablono$core$reset_button36558(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button36558);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to36559 = (function sablono$core$form_to36559(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36566 = arguments.length;
var i__4500__auto___36567 = (0);
while(true){
if((i__4500__auto___36567 < len__4499__auto___36566)){
args__4502__auto__.push((arguments[i__4500__auto___36567]));

var G__36568 = (i__4500__auto___36567 + (1));
i__4500__auto___36567 = G__36568;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to36559.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.form_to36559.cljs$core$IFn$_invoke$arity$variadic = (function (p__36562,body){
var vec__36563 = p__36562;
var method = cljs.core.nth.call(null,vec__36563,(0),null);
var action = cljs.core.nth.call(null,vec__36563,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to36559.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to36559.cljs$lang$applyTo = (function (seq36560){
var G__36561 = cljs.core.first.call(null,seq36560);
var seq36560__$1 = cljs.core.next.call(null,seq36560);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36561,seq36560__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to36559);

//# sourceMappingURL=core.js.map?rel=1555762421390
