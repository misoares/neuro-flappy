// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37452){
var map__37453 = p__37452;
var map__37453__$1 = ((((!((map__37453 == null)))?(((((map__37453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37453):map__37453);
var m = map__37453__$1;
var n = cljs.core.get.call(null,map__37453__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37453__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37455_37477 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37456_37478 = null;
var count__37457_37479 = (0);
var i__37458_37480 = (0);
while(true){
if((i__37458_37480 < count__37457_37479)){
var f_37481 = cljs.core._nth.call(null,chunk__37456_37478,i__37458_37480);
cljs.core.println.call(null,"  ",f_37481);


var G__37482 = seq__37455_37477;
var G__37483 = chunk__37456_37478;
var G__37484 = count__37457_37479;
var G__37485 = (i__37458_37480 + (1));
seq__37455_37477 = G__37482;
chunk__37456_37478 = G__37483;
count__37457_37479 = G__37484;
i__37458_37480 = G__37485;
continue;
} else {
var temp__5457__auto___37486 = cljs.core.seq.call(null,seq__37455_37477);
if(temp__5457__auto___37486){
var seq__37455_37487__$1 = temp__5457__auto___37486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37455_37487__$1)){
var c__4319__auto___37488 = cljs.core.chunk_first.call(null,seq__37455_37487__$1);
var G__37489 = cljs.core.chunk_rest.call(null,seq__37455_37487__$1);
var G__37490 = c__4319__auto___37488;
var G__37491 = cljs.core.count.call(null,c__4319__auto___37488);
var G__37492 = (0);
seq__37455_37477 = G__37489;
chunk__37456_37478 = G__37490;
count__37457_37479 = G__37491;
i__37458_37480 = G__37492;
continue;
} else {
var f_37493 = cljs.core.first.call(null,seq__37455_37487__$1);
cljs.core.println.call(null,"  ",f_37493);


var G__37494 = cljs.core.next.call(null,seq__37455_37487__$1);
var G__37495 = null;
var G__37496 = (0);
var G__37497 = (0);
seq__37455_37477 = G__37494;
chunk__37456_37478 = G__37495;
count__37457_37479 = G__37496;
i__37458_37480 = G__37497;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37498 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37498);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37498)))?cljs.core.second.call(null,arglists_37498):arglists_37498));
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
var seq__37459_37499 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37460_37500 = null;
var count__37461_37501 = (0);
var i__37462_37502 = (0);
while(true){
if((i__37462_37502 < count__37461_37501)){
var vec__37463_37503 = cljs.core._nth.call(null,chunk__37460_37500,i__37462_37502);
var name_37504 = cljs.core.nth.call(null,vec__37463_37503,(0),null);
var map__37466_37505 = cljs.core.nth.call(null,vec__37463_37503,(1),null);
var map__37466_37506__$1 = ((((!((map__37466_37505 == null)))?(((((map__37466_37505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37466_37505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37466_37505):map__37466_37505);
var doc_37507 = cljs.core.get.call(null,map__37466_37506__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37508 = cljs.core.get.call(null,map__37466_37506__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37504);

cljs.core.println.call(null," ",arglists_37508);

if(cljs.core.truth_(doc_37507)){
cljs.core.println.call(null," ",doc_37507);
} else {
}


var G__37509 = seq__37459_37499;
var G__37510 = chunk__37460_37500;
var G__37511 = count__37461_37501;
var G__37512 = (i__37462_37502 + (1));
seq__37459_37499 = G__37509;
chunk__37460_37500 = G__37510;
count__37461_37501 = G__37511;
i__37462_37502 = G__37512;
continue;
} else {
var temp__5457__auto___37513 = cljs.core.seq.call(null,seq__37459_37499);
if(temp__5457__auto___37513){
var seq__37459_37514__$1 = temp__5457__auto___37513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37459_37514__$1)){
var c__4319__auto___37515 = cljs.core.chunk_first.call(null,seq__37459_37514__$1);
var G__37516 = cljs.core.chunk_rest.call(null,seq__37459_37514__$1);
var G__37517 = c__4319__auto___37515;
var G__37518 = cljs.core.count.call(null,c__4319__auto___37515);
var G__37519 = (0);
seq__37459_37499 = G__37516;
chunk__37460_37500 = G__37517;
count__37461_37501 = G__37518;
i__37462_37502 = G__37519;
continue;
} else {
var vec__37468_37520 = cljs.core.first.call(null,seq__37459_37514__$1);
var name_37521 = cljs.core.nth.call(null,vec__37468_37520,(0),null);
var map__37471_37522 = cljs.core.nth.call(null,vec__37468_37520,(1),null);
var map__37471_37523__$1 = ((((!((map__37471_37522 == null)))?(((((map__37471_37522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37471_37522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37471_37522):map__37471_37522);
var doc_37524 = cljs.core.get.call(null,map__37471_37523__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37525 = cljs.core.get.call(null,map__37471_37523__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37521);

cljs.core.println.call(null," ",arglists_37525);

if(cljs.core.truth_(doc_37524)){
cljs.core.println.call(null," ",doc_37524);
} else {
}


var G__37526 = cljs.core.next.call(null,seq__37459_37514__$1);
var G__37527 = null;
var G__37528 = (0);
var G__37529 = (0);
seq__37459_37499 = G__37526;
chunk__37460_37500 = G__37527;
count__37461_37501 = G__37528;
i__37462_37502 = G__37529;
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

var seq__37473 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37474 = null;
var count__37475 = (0);
var i__37476 = (0);
while(true){
if((i__37476 < count__37475)){
var role = cljs.core._nth.call(null,chunk__37474,i__37476);
var temp__5457__auto___37530__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___37530__$1)){
var spec_37531 = temp__5457__auto___37530__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37531));
} else {
}


var G__37532 = seq__37473;
var G__37533 = chunk__37474;
var G__37534 = count__37475;
var G__37535 = (i__37476 + (1));
seq__37473 = G__37532;
chunk__37474 = G__37533;
count__37475 = G__37534;
i__37476 = G__37535;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__37473);
if(temp__5457__auto____$1){
var seq__37473__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37473__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__37473__$1);
var G__37536 = cljs.core.chunk_rest.call(null,seq__37473__$1);
var G__37537 = c__4319__auto__;
var G__37538 = cljs.core.count.call(null,c__4319__auto__);
var G__37539 = (0);
seq__37473 = G__37536;
chunk__37474 = G__37537;
count__37475 = G__37538;
i__37476 = G__37539;
continue;
} else {
var role = cljs.core.first.call(null,seq__37473__$1);
var temp__5457__auto___37540__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___37540__$2)){
var spec_37541 = temp__5457__auto___37540__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37541));
} else {
}


var G__37542 = cljs.core.next.call(null,seq__37473__$1);
var G__37543 = null;
var G__37544 = (0);
var G__37545 = (0);
seq__37473 = G__37542;
chunk__37474 = G__37543;
count__37475 = G__37544;
i__37476 = G__37545;
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

//# sourceMappingURL=repl.js.map?rel=1555762423721
