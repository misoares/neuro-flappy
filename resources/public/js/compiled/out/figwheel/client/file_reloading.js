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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36121_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36121_SHARP_));
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
var seq__36122 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36123 = null;
var count__36124 = (0);
var i__36125 = (0);
while(true){
if((i__36125 < count__36124)){
var n = cljs.core._nth.call(null,chunk__36123,i__36125);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__36126 = seq__36122;
var G__36127 = chunk__36123;
var G__36128 = count__36124;
var G__36129 = (i__36125 + (1));
seq__36122 = G__36126;
chunk__36123 = G__36127;
count__36124 = G__36128;
i__36125 = G__36129;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36122);
if(temp__5457__auto__){
var seq__36122__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36122__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__36122__$1);
var G__36130 = cljs.core.chunk_rest.call(null,seq__36122__$1);
var G__36131 = c__4319__auto__;
var G__36132 = cljs.core.count.call(null,c__4319__auto__);
var G__36133 = (0);
seq__36122 = G__36130;
chunk__36123 = G__36131;
count__36124 = G__36132;
i__36125 = G__36133;
continue;
} else {
var n = cljs.core.first.call(null,seq__36122__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__36134 = cljs.core.next.call(null,seq__36122__$1);
var G__36135 = null;
var G__36136 = (0);
var G__36137 = (0);
seq__36122 = G__36134;
chunk__36123 = G__36135;
count__36124 = G__36136;
i__36125 = G__36137;
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
return cljs.core.some.call(null,(function (p__36138){
var vec__36139 = p__36138;
var _ = cljs.core.nth.call(null,vec__36139,(0),null);
var v = cljs.core.nth.call(null,vec__36139,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__36142){
var vec__36143 = p__36142;
var k = cljs.core.nth.call(null,vec__36143,(0),null);
var v = cljs.core.nth.call(null,vec__36143,(1),null);
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

var seq__36155_36163 = cljs.core.seq.call(null,deps);
var chunk__36156_36164 = null;
var count__36157_36165 = (0);
var i__36158_36166 = (0);
while(true){
if((i__36158_36166 < count__36157_36165)){
var dep_36167 = cljs.core._nth.call(null,chunk__36156_36164,i__36158_36166);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_36167;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36167));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36167,(depth + (1)),state);
} else {
}


var G__36168 = seq__36155_36163;
var G__36169 = chunk__36156_36164;
var G__36170 = count__36157_36165;
var G__36171 = (i__36158_36166 + (1));
seq__36155_36163 = G__36168;
chunk__36156_36164 = G__36169;
count__36157_36165 = G__36170;
i__36158_36166 = G__36171;
continue;
} else {
var temp__5457__auto___36172 = cljs.core.seq.call(null,seq__36155_36163);
if(temp__5457__auto___36172){
var seq__36155_36173__$1 = temp__5457__auto___36172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36155_36173__$1)){
var c__4319__auto___36174 = cljs.core.chunk_first.call(null,seq__36155_36173__$1);
var G__36175 = cljs.core.chunk_rest.call(null,seq__36155_36173__$1);
var G__36176 = c__4319__auto___36174;
var G__36177 = cljs.core.count.call(null,c__4319__auto___36174);
var G__36178 = (0);
seq__36155_36163 = G__36175;
chunk__36156_36164 = G__36176;
count__36157_36165 = G__36177;
i__36158_36166 = G__36178;
continue;
} else {
var dep_36179 = cljs.core.first.call(null,seq__36155_36173__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_36179;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36179));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36179,(depth + (1)),state);
} else {
}


var G__36180 = cljs.core.next.call(null,seq__36155_36173__$1);
var G__36181 = null;
var G__36182 = (0);
var G__36183 = (0);
seq__36155_36163 = G__36180;
chunk__36156_36164 = G__36181;
count__36157_36165 = G__36182;
i__36158_36166 = G__36183;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36159){
var vec__36160 = p__36159;
var seq__36161 = cljs.core.seq.call(null,vec__36160);
var first__36162 = cljs.core.first.call(null,seq__36161);
var seq__36161__$1 = cljs.core.next.call(null,seq__36161);
var x = first__36162;
var xs = seq__36161__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36160,seq__36161,first__36162,seq__36161__$1,x,xs,get_deps__$1){
return (function (p1__36146_SHARP_){
return clojure.set.difference.call(null,p1__36146_SHARP_,x);
});})(vec__36160,seq__36161,first__36162,seq__36161__$1,x,xs,get_deps__$1))
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
var seq__36184 = cljs.core.seq.call(null,provides);
var chunk__36185 = null;
var count__36186 = (0);
var i__36187 = (0);
while(true){
if((i__36187 < count__36186)){
var prov = cljs.core._nth.call(null,chunk__36185,i__36187);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36188_36196 = cljs.core.seq.call(null,requires);
var chunk__36189_36197 = null;
var count__36190_36198 = (0);
var i__36191_36199 = (0);
while(true){
if((i__36191_36199 < count__36190_36198)){
var req_36200 = cljs.core._nth.call(null,chunk__36189_36197,i__36191_36199);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36200,prov);


var G__36201 = seq__36188_36196;
var G__36202 = chunk__36189_36197;
var G__36203 = count__36190_36198;
var G__36204 = (i__36191_36199 + (1));
seq__36188_36196 = G__36201;
chunk__36189_36197 = G__36202;
count__36190_36198 = G__36203;
i__36191_36199 = G__36204;
continue;
} else {
var temp__5457__auto___36205 = cljs.core.seq.call(null,seq__36188_36196);
if(temp__5457__auto___36205){
var seq__36188_36206__$1 = temp__5457__auto___36205;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36188_36206__$1)){
var c__4319__auto___36207 = cljs.core.chunk_first.call(null,seq__36188_36206__$1);
var G__36208 = cljs.core.chunk_rest.call(null,seq__36188_36206__$1);
var G__36209 = c__4319__auto___36207;
var G__36210 = cljs.core.count.call(null,c__4319__auto___36207);
var G__36211 = (0);
seq__36188_36196 = G__36208;
chunk__36189_36197 = G__36209;
count__36190_36198 = G__36210;
i__36191_36199 = G__36211;
continue;
} else {
var req_36212 = cljs.core.first.call(null,seq__36188_36206__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36212,prov);


var G__36213 = cljs.core.next.call(null,seq__36188_36206__$1);
var G__36214 = null;
var G__36215 = (0);
var G__36216 = (0);
seq__36188_36196 = G__36213;
chunk__36189_36197 = G__36214;
count__36190_36198 = G__36215;
i__36191_36199 = G__36216;
continue;
}
} else {
}
}
break;
}


var G__36217 = seq__36184;
var G__36218 = chunk__36185;
var G__36219 = count__36186;
var G__36220 = (i__36187 + (1));
seq__36184 = G__36217;
chunk__36185 = G__36218;
count__36186 = G__36219;
i__36187 = G__36220;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36184);
if(temp__5457__auto__){
var seq__36184__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36184__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__36184__$1);
var G__36221 = cljs.core.chunk_rest.call(null,seq__36184__$1);
var G__36222 = c__4319__auto__;
var G__36223 = cljs.core.count.call(null,c__4319__auto__);
var G__36224 = (0);
seq__36184 = G__36221;
chunk__36185 = G__36222;
count__36186 = G__36223;
i__36187 = G__36224;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36184__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36192_36225 = cljs.core.seq.call(null,requires);
var chunk__36193_36226 = null;
var count__36194_36227 = (0);
var i__36195_36228 = (0);
while(true){
if((i__36195_36228 < count__36194_36227)){
var req_36229 = cljs.core._nth.call(null,chunk__36193_36226,i__36195_36228);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36229,prov);


var G__36230 = seq__36192_36225;
var G__36231 = chunk__36193_36226;
var G__36232 = count__36194_36227;
var G__36233 = (i__36195_36228 + (1));
seq__36192_36225 = G__36230;
chunk__36193_36226 = G__36231;
count__36194_36227 = G__36232;
i__36195_36228 = G__36233;
continue;
} else {
var temp__5457__auto___36234__$1 = cljs.core.seq.call(null,seq__36192_36225);
if(temp__5457__auto___36234__$1){
var seq__36192_36235__$1 = temp__5457__auto___36234__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36192_36235__$1)){
var c__4319__auto___36236 = cljs.core.chunk_first.call(null,seq__36192_36235__$1);
var G__36237 = cljs.core.chunk_rest.call(null,seq__36192_36235__$1);
var G__36238 = c__4319__auto___36236;
var G__36239 = cljs.core.count.call(null,c__4319__auto___36236);
var G__36240 = (0);
seq__36192_36225 = G__36237;
chunk__36193_36226 = G__36238;
count__36194_36227 = G__36239;
i__36195_36228 = G__36240;
continue;
} else {
var req_36241 = cljs.core.first.call(null,seq__36192_36235__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36241,prov);


var G__36242 = cljs.core.next.call(null,seq__36192_36235__$1);
var G__36243 = null;
var G__36244 = (0);
var G__36245 = (0);
seq__36192_36225 = G__36242;
chunk__36193_36226 = G__36243;
count__36194_36227 = G__36244;
i__36195_36228 = G__36245;
continue;
}
} else {
}
}
break;
}


var G__36246 = cljs.core.next.call(null,seq__36184__$1);
var G__36247 = null;
var G__36248 = (0);
var G__36249 = (0);
seq__36184 = G__36246;
chunk__36185 = G__36247;
count__36186 = G__36248;
i__36187 = G__36249;
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
var seq__36250_36254 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36251_36255 = null;
var count__36252_36256 = (0);
var i__36253_36257 = (0);
while(true){
if((i__36253_36257 < count__36252_36256)){
var ns_36258 = cljs.core._nth.call(null,chunk__36251_36255,i__36253_36257);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36258);


var G__36259 = seq__36250_36254;
var G__36260 = chunk__36251_36255;
var G__36261 = count__36252_36256;
var G__36262 = (i__36253_36257 + (1));
seq__36250_36254 = G__36259;
chunk__36251_36255 = G__36260;
count__36252_36256 = G__36261;
i__36253_36257 = G__36262;
continue;
} else {
var temp__5457__auto___36263 = cljs.core.seq.call(null,seq__36250_36254);
if(temp__5457__auto___36263){
var seq__36250_36264__$1 = temp__5457__auto___36263;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36250_36264__$1)){
var c__4319__auto___36265 = cljs.core.chunk_first.call(null,seq__36250_36264__$1);
var G__36266 = cljs.core.chunk_rest.call(null,seq__36250_36264__$1);
var G__36267 = c__4319__auto___36265;
var G__36268 = cljs.core.count.call(null,c__4319__auto___36265);
var G__36269 = (0);
seq__36250_36254 = G__36266;
chunk__36251_36255 = G__36267;
count__36252_36256 = G__36268;
i__36253_36257 = G__36269;
continue;
} else {
var ns_36270 = cljs.core.first.call(null,seq__36250_36264__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36270);


var G__36271 = cljs.core.next.call(null,seq__36250_36264__$1);
var G__36272 = null;
var G__36273 = (0);
var G__36274 = (0);
seq__36250_36254 = G__36271;
chunk__36251_36255 = G__36272;
count__36252_36256 = G__36273;
i__36253_36257 = G__36274;
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
var G__36275__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36275 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36276__i = 0, G__36276__a = new Array(arguments.length -  0);
while (G__36276__i < G__36276__a.length) {G__36276__a[G__36276__i] = arguments[G__36276__i + 0]; ++G__36276__i;}
  args = new cljs.core.IndexedSeq(G__36276__a,0,null);
} 
return G__36275__delegate.call(this,args);};
G__36275.cljs$lang$maxFixedArity = 0;
G__36275.cljs$lang$applyTo = (function (arglist__36277){
var args = cljs.core.seq(arglist__36277);
return G__36275__delegate(args);
});
G__36275.cljs$core$IFn$_invoke$arity$variadic = G__36275__delegate;
return G__36275;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__36278_SHARP_,p2__36279_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36278_SHARP_)].join('')),p2__36279_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__36280_SHARP_,p2__36281_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36280_SHARP_)].join(''),p2__36281_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36282 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36282.addCallback(((function (G__36282){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36282))
);

G__36282.addErrback(((function (G__36282){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36282))
);

return G__36282;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36283){if((e36283 instanceof Error)){
var e = e36283;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36283;

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
}catch (e36284){if((e36284 instanceof Error)){
var e = e36284;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36284;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36285 = cljs.core._EQ_;
var expr__36286 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36285.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36286))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__36285.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36286))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__36285.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36286))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__36285,expr__36286){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36285,expr__36286))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36288,callback){
var map__36289 = p__36288;
var map__36289__$1 = ((((!((map__36289 == null)))?(((((map__36289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36289):map__36289);
var file_msg = map__36289__$1;
var request_url = cljs.core.get.call(null,map__36289__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__36289,map__36289__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36289,map__36289__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__35371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35371__auto__){
return (function (){
var f__35372__auto__ = (function (){var switch__35348__auto__ = ((function (c__35371__auto__){
return (function (state_36327){
var state_val_36328 = (state_36327[(1)]);
if((state_val_36328 === (7))){
var inst_36323 = (state_36327[(2)]);
var state_36327__$1 = state_36327;
var statearr_36329_36355 = state_36327__$1;
(statearr_36329_36355[(2)] = inst_36323);

(statearr_36329_36355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (1))){
var state_36327__$1 = state_36327;
var statearr_36330_36356 = state_36327__$1;
(statearr_36330_36356[(2)] = null);

(statearr_36330_36356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (4))){
var inst_36293 = (state_36327[(7)]);
var inst_36293__$1 = (state_36327[(2)]);
var state_36327__$1 = (function (){var statearr_36331 = state_36327;
(statearr_36331[(7)] = inst_36293__$1);

return statearr_36331;
})();
if(cljs.core.truth_(inst_36293__$1)){
var statearr_36332_36357 = state_36327__$1;
(statearr_36332_36357[(1)] = (5));

} else {
var statearr_36333_36358 = state_36327__$1;
(statearr_36333_36358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (15))){
var inst_36306 = (state_36327[(8)]);
var inst_36308 = (state_36327[(9)]);
var inst_36310 = inst_36308.call(null,inst_36306);
var state_36327__$1 = state_36327;
var statearr_36334_36359 = state_36327__$1;
(statearr_36334_36359[(2)] = inst_36310);

(statearr_36334_36359[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (13))){
var inst_36317 = (state_36327[(2)]);
var state_36327__$1 = state_36327;
var statearr_36335_36360 = state_36327__$1;
(statearr_36335_36360[(2)] = inst_36317);

(statearr_36335_36360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (6))){
var state_36327__$1 = state_36327;
var statearr_36336_36361 = state_36327__$1;
(statearr_36336_36361[(2)] = null);

(statearr_36336_36361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (17))){
var inst_36314 = (state_36327[(2)]);
var state_36327__$1 = state_36327;
var statearr_36337_36362 = state_36327__$1;
(statearr_36337_36362[(2)] = inst_36314);

(statearr_36337_36362[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (3))){
var inst_36325 = (state_36327[(2)]);
var state_36327__$1 = state_36327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36327__$1,inst_36325);
} else {
if((state_val_36328 === (12))){
var state_36327__$1 = state_36327;
var statearr_36338_36363 = state_36327__$1;
(statearr_36338_36363[(2)] = null);

(statearr_36338_36363[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (2))){
var state_36327__$1 = state_36327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36327__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36328 === (11))){
var inst_36298 = (state_36327[(10)]);
var inst_36304 = figwheel.client.file_reloading.blocking_load.call(null,inst_36298);
var state_36327__$1 = state_36327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36327__$1,(14),inst_36304);
} else {
if((state_val_36328 === (9))){
var inst_36298 = (state_36327[(10)]);
var state_36327__$1 = state_36327;
if(cljs.core.truth_(inst_36298)){
var statearr_36339_36364 = state_36327__$1;
(statearr_36339_36364[(1)] = (11));

} else {
var statearr_36340_36365 = state_36327__$1;
(statearr_36340_36365[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (5))){
var inst_36293 = (state_36327[(7)]);
var inst_36299 = (state_36327[(11)]);
var inst_36298 = cljs.core.nth.call(null,inst_36293,(0),null);
var inst_36299__$1 = cljs.core.nth.call(null,inst_36293,(1),null);
var state_36327__$1 = (function (){var statearr_36341 = state_36327;
(statearr_36341[(10)] = inst_36298);

(statearr_36341[(11)] = inst_36299__$1);

return statearr_36341;
})();
if(cljs.core.truth_(inst_36299__$1)){
var statearr_36342_36366 = state_36327__$1;
(statearr_36342_36366[(1)] = (8));

} else {
var statearr_36343_36367 = state_36327__$1;
(statearr_36343_36367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (14))){
var inst_36298 = (state_36327[(10)]);
var inst_36308 = (state_36327[(9)]);
var inst_36306 = (state_36327[(2)]);
var inst_36307 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36308__$1 = cljs.core.get.call(null,inst_36307,inst_36298);
var state_36327__$1 = (function (){var statearr_36344 = state_36327;
(statearr_36344[(8)] = inst_36306);

(statearr_36344[(9)] = inst_36308__$1);

return statearr_36344;
})();
if(cljs.core.truth_(inst_36308__$1)){
var statearr_36345_36368 = state_36327__$1;
(statearr_36345_36368[(1)] = (15));

} else {
var statearr_36346_36369 = state_36327__$1;
(statearr_36346_36369[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (16))){
var inst_36306 = (state_36327[(8)]);
var inst_36312 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36306);
var state_36327__$1 = state_36327;
var statearr_36347_36370 = state_36327__$1;
(statearr_36347_36370[(2)] = inst_36312);

(statearr_36347_36370[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (10))){
var inst_36319 = (state_36327[(2)]);
var state_36327__$1 = (function (){var statearr_36348 = state_36327;
(statearr_36348[(12)] = inst_36319);

return statearr_36348;
})();
var statearr_36349_36371 = state_36327__$1;
(statearr_36349_36371[(2)] = null);

(statearr_36349_36371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (8))){
var inst_36299 = (state_36327[(11)]);
var inst_36301 = eval(inst_36299);
var state_36327__$1 = state_36327;
var statearr_36350_36372 = state_36327__$1;
(statearr_36350_36372[(2)] = inst_36301);

(statearr_36350_36372[(1)] = (10));


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
});})(c__35371__auto__))
;
return ((function (switch__35348__auto__,c__35371__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__35349__auto__ = null;
var figwheel$client$file_reloading$state_machine__35349__auto____0 = (function (){
var statearr_36351 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36351[(0)] = figwheel$client$file_reloading$state_machine__35349__auto__);

(statearr_36351[(1)] = (1));

return statearr_36351;
});
var figwheel$client$file_reloading$state_machine__35349__auto____1 = (function (state_36327){
while(true){
var ret_value__35350__auto__ = (function (){try{while(true){
var result__35351__auto__ = switch__35348__auto__.call(null,state_36327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35351__auto__;
}
break;
}
}catch (e36352){if((e36352 instanceof Object)){
var ex__35352__auto__ = e36352;
var statearr_36353_36373 = state_36327;
(statearr_36353_36373[(5)] = ex__35352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36374 = state_36327;
state_36327 = G__36374;
continue;
} else {
return ret_value__35350__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__35349__auto__ = function(state_36327){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__35349__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__35349__auto____1.call(this,state_36327);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__35349__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__35349__auto____0;
figwheel$client$file_reloading$state_machine__35349__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__35349__auto____1;
return figwheel$client$file_reloading$state_machine__35349__auto__;
})()
;})(switch__35348__auto__,c__35371__auto__))
})();
var state__35373__auto__ = (function (){var statearr_36354 = f__35372__auto__.call(null);
(statearr_36354[(6)] = c__35371__auto__);

return statearr_36354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35373__auto__);
});})(c__35371__auto__))
);

return c__35371__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__36376 = arguments.length;
switch (G__36376) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36378,callback){
var map__36379 = p__36378;
var map__36379__$1 = ((((!((map__36379 == null)))?(((((map__36379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36379):map__36379);
var file_msg = map__36379__$1;
var namespace = cljs.core.get.call(null,map__36379__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36379,map__36379__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36379,map__36379__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36381){
var map__36382 = p__36381;
var map__36382__$1 = ((((!((map__36382 == null)))?(((((map__36382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36382):map__36382);
var file_msg = map__36382__$1;
var namespace = cljs.core.get.call(null,map__36382__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36384){
var map__36385 = p__36384;
var map__36385__$1 = ((((!((map__36385 == null)))?(((((map__36385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36385):map__36385);
var file_msg = map__36385__$1;
var namespace = cljs.core.get.call(null,map__36385__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36387,callback){
var map__36388 = p__36387;
var map__36388__$1 = ((((!((map__36388 == null)))?(((((map__36388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36388):map__36388);
var file_msg = map__36388__$1;
var request_url = cljs.core.get.call(null,map__36388__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36388__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__35371__auto___36438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35371__auto___36438,out){
return (function (){
var f__35372__auto__ = (function (){var switch__35348__auto__ = ((function (c__35371__auto___36438,out){
return (function (state_36423){
var state_val_36424 = (state_36423[(1)]);
if((state_val_36424 === (1))){
var inst_36397 = cljs.core.seq.call(null,files);
var inst_36398 = cljs.core.first.call(null,inst_36397);
var inst_36399 = cljs.core.next.call(null,inst_36397);
var inst_36400 = files;
var state_36423__$1 = (function (){var statearr_36425 = state_36423;
(statearr_36425[(7)] = inst_36399);

(statearr_36425[(8)] = inst_36398);

(statearr_36425[(9)] = inst_36400);

return statearr_36425;
})();
var statearr_36426_36439 = state_36423__$1;
(statearr_36426_36439[(2)] = null);

(statearr_36426_36439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (2))){
var inst_36400 = (state_36423[(9)]);
var inst_36406 = (state_36423[(10)]);
var inst_36405 = cljs.core.seq.call(null,inst_36400);
var inst_36406__$1 = cljs.core.first.call(null,inst_36405);
var inst_36407 = cljs.core.next.call(null,inst_36405);
var inst_36408 = (inst_36406__$1 == null);
var inst_36409 = cljs.core.not.call(null,inst_36408);
var state_36423__$1 = (function (){var statearr_36427 = state_36423;
(statearr_36427[(11)] = inst_36407);

(statearr_36427[(10)] = inst_36406__$1);

return statearr_36427;
})();
if(inst_36409){
var statearr_36428_36440 = state_36423__$1;
(statearr_36428_36440[(1)] = (4));

} else {
var statearr_36429_36441 = state_36423__$1;
(statearr_36429_36441[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (3))){
var inst_36421 = (state_36423[(2)]);
var state_36423__$1 = state_36423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36423__$1,inst_36421);
} else {
if((state_val_36424 === (4))){
var inst_36406 = (state_36423[(10)]);
var inst_36411 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36406);
var state_36423__$1 = state_36423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36423__$1,(7),inst_36411);
} else {
if((state_val_36424 === (5))){
var inst_36417 = cljs.core.async.close_BANG_.call(null,out);
var state_36423__$1 = state_36423;
var statearr_36430_36442 = state_36423__$1;
(statearr_36430_36442[(2)] = inst_36417);

(statearr_36430_36442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (6))){
var inst_36419 = (state_36423[(2)]);
var state_36423__$1 = state_36423;
var statearr_36431_36443 = state_36423__$1;
(statearr_36431_36443[(2)] = inst_36419);

(statearr_36431_36443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (7))){
var inst_36407 = (state_36423[(11)]);
var inst_36413 = (state_36423[(2)]);
var inst_36414 = cljs.core.async.put_BANG_.call(null,out,inst_36413);
var inst_36400 = inst_36407;
var state_36423__$1 = (function (){var statearr_36432 = state_36423;
(statearr_36432[(9)] = inst_36400);

(statearr_36432[(12)] = inst_36414);

return statearr_36432;
})();
var statearr_36433_36444 = state_36423__$1;
(statearr_36433_36444[(2)] = null);

(statearr_36433_36444[(1)] = (2));


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
});})(c__35371__auto___36438,out))
;
return ((function (switch__35348__auto__,c__35371__auto___36438,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35349__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35349__auto____0 = (function (){
var statearr_36434 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36434[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35349__auto__);

(statearr_36434[(1)] = (1));

return statearr_36434;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35349__auto____1 = (function (state_36423){
while(true){
var ret_value__35350__auto__ = (function (){try{while(true){
var result__35351__auto__ = switch__35348__auto__.call(null,state_36423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35351__auto__;
}
break;
}
}catch (e36435){if((e36435 instanceof Object)){
var ex__35352__auto__ = e36435;
var statearr_36436_36445 = state_36423;
(statearr_36436_36445[(5)] = ex__35352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36446 = state_36423;
state_36423 = G__36446;
continue;
} else {
return ret_value__35350__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35349__auto__ = function(state_36423){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35349__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35349__auto____1.call(this,state_36423);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35349__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35349__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35349__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35349__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35349__auto__;
})()
;})(switch__35348__auto__,c__35371__auto___36438,out))
})();
var state__35373__auto__ = (function (){var statearr_36437 = f__35372__auto__.call(null);
(statearr_36437[(6)] = c__35371__auto___36438);

return statearr_36437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35373__auto__);
});})(c__35371__auto___36438,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36447,opts){
var map__36448 = p__36447;
var map__36448__$1 = ((((!((map__36448 == null)))?(((((map__36448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36448):map__36448);
var eval_body = cljs.core.get.call(null,map__36448__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36448__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e36450){var e = e36450;
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
return (function (p1__36451_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36451_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36452){
var vec__36453 = p__36452;
var k = cljs.core.nth.call(null,vec__36453,(0),null);
var v = cljs.core.nth.call(null,vec__36453,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36456){
var vec__36457 = p__36456;
var k = cljs.core.nth.call(null,vec__36457,(0),null);
var v = cljs.core.nth.call(null,vec__36457,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36463,p__36464){
var map__36465 = p__36463;
var map__36465__$1 = ((((!((map__36465 == null)))?(((((map__36465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36465):map__36465);
var opts = map__36465__$1;
var before_jsload = cljs.core.get.call(null,map__36465__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36465__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36465__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36466 = p__36464;
var map__36466__$1 = ((((!((map__36466 == null)))?(((((map__36466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36466):map__36466);
var msg = map__36466__$1;
var files = cljs.core.get.call(null,map__36466__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36466__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36466__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__35371__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35371__auto__,map__36465,map__36465__$1,opts,before_jsload,on_jsload,reload_dependents,map__36466,map__36466__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__35372__auto__ = (function (){var switch__35348__auto__ = ((function (c__35371__auto__,map__36465,map__36465__$1,opts,before_jsload,on_jsload,reload_dependents,map__36466,map__36466__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36620){
var state_val_36621 = (state_36620[(1)]);
if((state_val_36621 === (7))){
var inst_36480 = (state_36620[(7)]);
var inst_36481 = (state_36620[(8)]);
var inst_36482 = (state_36620[(9)]);
var inst_36483 = (state_36620[(10)]);
var inst_36488 = cljs.core._nth.call(null,inst_36481,inst_36483);
var inst_36489 = figwheel.client.file_reloading.eval_body.call(null,inst_36488,opts);
var inst_36490 = (inst_36483 + (1));
var tmp36622 = inst_36480;
var tmp36623 = inst_36481;
var tmp36624 = inst_36482;
var inst_36480__$1 = tmp36622;
var inst_36481__$1 = tmp36623;
var inst_36482__$1 = tmp36624;
var inst_36483__$1 = inst_36490;
var state_36620__$1 = (function (){var statearr_36625 = state_36620;
(statearr_36625[(11)] = inst_36489);

(statearr_36625[(7)] = inst_36480__$1);

(statearr_36625[(8)] = inst_36481__$1);

(statearr_36625[(9)] = inst_36482__$1);

(statearr_36625[(10)] = inst_36483__$1);

return statearr_36625;
})();
var statearr_36626_36709 = state_36620__$1;
(statearr_36626_36709[(2)] = null);

(statearr_36626_36709[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (20))){
var inst_36523 = (state_36620[(12)]);
var inst_36531 = figwheel.client.file_reloading.sort_files.call(null,inst_36523);
var state_36620__$1 = state_36620;
var statearr_36627_36710 = state_36620__$1;
(statearr_36627_36710[(2)] = inst_36531);

(statearr_36627_36710[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (27))){
var state_36620__$1 = state_36620;
var statearr_36628_36711 = state_36620__$1;
(statearr_36628_36711[(2)] = null);

(statearr_36628_36711[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (1))){
var inst_36472 = (state_36620[(13)]);
var inst_36469 = before_jsload.call(null,files);
var inst_36470 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36471 = (function (){return ((function (inst_36472,inst_36469,inst_36470,state_val_36621,c__35371__auto__,map__36465,map__36465__$1,opts,before_jsload,on_jsload,reload_dependents,map__36466,map__36466__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36460_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36460_SHARP_);
});
;})(inst_36472,inst_36469,inst_36470,state_val_36621,c__35371__auto__,map__36465,map__36465__$1,opts,before_jsload,on_jsload,reload_dependents,map__36466,map__36466__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36472__$1 = cljs.core.filter.call(null,inst_36471,files);
var inst_36473 = cljs.core.not_empty.call(null,inst_36472__$1);
var state_36620__$1 = (function (){var statearr_36629 = state_36620;
(statearr_36629[(14)] = inst_36470);

(statearr_36629[(15)] = inst_36469);

(statearr_36629[(13)] = inst_36472__$1);

return statearr_36629;
})();
if(cljs.core.truth_(inst_36473)){
var statearr_36630_36712 = state_36620__$1;
(statearr_36630_36712[(1)] = (2));

} else {
var statearr_36631_36713 = state_36620__$1;
(statearr_36631_36713[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (24))){
var state_36620__$1 = state_36620;
var statearr_36632_36714 = state_36620__$1;
(statearr_36632_36714[(2)] = null);

(statearr_36632_36714[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (39))){
var inst_36573 = (state_36620[(16)]);
var state_36620__$1 = state_36620;
var statearr_36633_36715 = state_36620__$1;
(statearr_36633_36715[(2)] = inst_36573);

(statearr_36633_36715[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (46))){
var inst_36615 = (state_36620[(2)]);
var state_36620__$1 = state_36620;
var statearr_36634_36716 = state_36620__$1;
(statearr_36634_36716[(2)] = inst_36615);

(statearr_36634_36716[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (4))){
var inst_36517 = (state_36620[(2)]);
var inst_36518 = cljs.core.List.EMPTY;
var inst_36519 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36518);
var inst_36520 = (function (){return ((function (inst_36517,inst_36518,inst_36519,state_val_36621,c__35371__auto__,map__36465,map__36465__$1,opts,before_jsload,on_jsload,reload_dependents,map__36466,map__36466__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36461_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36461_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36461_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36461_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_36517,inst_36518,inst_36519,state_val_36621,c__35371__auto__,map__36465,map__36465__$1,opts,before_jsload,on_jsload,reload_dependents,map__36466,map__36466__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36521 = cljs.core.filter.call(null,inst_36520,files);
var inst_36522 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36523 = cljs.core.concat.call(null,inst_36521,inst_36522);
var state_36620__$1 = (function (){var statearr_36635 = state_36620;
(statearr_36635[(12)] = inst_36523);

(statearr_36635[(17)] = inst_36519);

(statearr_36635[(18)] = inst_36517);

return statearr_36635;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36636_36717 = state_36620__$1;
(statearr_36636_36717[(1)] = (16));

} else {
var statearr_36637_36718 = state_36620__$1;
(statearr_36637_36718[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (15))){
var inst_36507 = (state_36620[(2)]);
var state_36620__$1 = state_36620;
var statearr_36638_36719 = state_36620__$1;
(statearr_36638_36719[(2)] = inst_36507);

(statearr_36638_36719[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (21))){
var inst_36533 = (state_36620[(19)]);
var inst_36533__$1 = (state_36620[(2)]);
var inst_36534 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36533__$1);
var state_36620__$1 = (function (){var statearr_36639 = state_36620;
(statearr_36639[(19)] = inst_36533__$1);

return statearr_36639;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36620__$1,(22),inst_36534);
} else {
if((state_val_36621 === (31))){
var inst_36618 = (state_36620[(2)]);
var state_36620__$1 = state_36620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36620__$1,inst_36618);
} else {
if((state_val_36621 === (32))){
var inst_36573 = (state_36620[(16)]);
var inst_36578 = inst_36573.cljs$lang$protocol_mask$partition0$;
var inst_36579 = (inst_36578 & (64));
var inst_36580 = inst_36573.cljs$core$ISeq$;
var inst_36581 = (cljs.core.PROTOCOL_SENTINEL === inst_36580);
var inst_36582 = ((inst_36579) || (inst_36581));
var state_36620__$1 = state_36620;
if(cljs.core.truth_(inst_36582)){
var statearr_36640_36720 = state_36620__$1;
(statearr_36640_36720[(1)] = (35));

} else {
var statearr_36641_36721 = state_36620__$1;
(statearr_36641_36721[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (40))){
var inst_36595 = (state_36620[(20)]);
var inst_36594 = (state_36620[(2)]);
var inst_36595__$1 = cljs.core.get.call(null,inst_36594,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36596 = cljs.core.get.call(null,inst_36594,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36597 = cljs.core.not_empty.call(null,inst_36595__$1);
var state_36620__$1 = (function (){var statearr_36642 = state_36620;
(statearr_36642[(20)] = inst_36595__$1);

(statearr_36642[(21)] = inst_36596);

return statearr_36642;
})();
if(cljs.core.truth_(inst_36597)){
var statearr_36643_36722 = state_36620__$1;
(statearr_36643_36722[(1)] = (41));

} else {
var statearr_36644_36723 = state_36620__$1;
(statearr_36644_36723[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (33))){
var state_36620__$1 = state_36620;
var statearr_36645_36724 = state_36620__$1;
(statearr_36645_36724[(2)] = false);

(statearr_36645_36724[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (13))){
var inst_36493 = (state_36620[(22)]);
var inst_36497 = cljs.core.chunk_first.call(null,inst_36493);
var inst_36498 = cljs.core.chunk_rest.call(null,inst_36493);
var inst_36499 = cljs.core.count.call(null,inst_36497);
var inst_36480 = inst_36498;
var inst_36481 = inst_36497;
var inst_36482 = inst_36499;
var inst_36483 = (0);
var state_36620__$1 = (function (){var statearr_36646 = state_36620;
(statearr_36646[(7)] = inst_36480);

(statearr_36646[(8)] = inst_36481);

(statearr_36646[(9)] = inst_36482);

(statearr_36646[(10)] = inst_36483);

return statearr_36646;
})();
var statearr_36647_36725 = state_36620__$1;
(statearr_36647_36725[(2)] = null);

(statearr_36647_36725[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (22))){
var inst_36533 = (state_36620[(19)]);
var inst_36537 = (state_36620[(23)]);
var inst_36536 = (state_36620[(24)]);
var inst_36541 = (state_36620[(25)]);
var inst_36536__$1 = (state_36620[(2)]);
var inst_36537__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36536__$1);
var inst_36538 = (function (){var all_files = inst_36533;
var res_SINGLEQUOTE_ = inst_36536__$1;
var res = inst_36537__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36533,inst_36537,inst_36536,inst_36541,inst_36536__$1,inst_36537__$1,state_val_36621,c__35371__auto__,map__36465,map__36465__$1,opts,before_jsload,on_jsload,reload_dependents,map__36466,map__36466__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36462_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36462_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36533,inst_36537,inst_36536,inst_36541,inst_36536__$1,inst_36537__$1,state_val_36621,c__35371__auto__,map__36465,map__36465__$1,opts,before_jsload,on_jsload,reload_dependents,map__36466,map__36466__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36539 = cljs.core.filter.call(null,inst_36538,inst_36536__$1);
var inst_36540 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36541__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36540);
var inst_36542 = cljs.core.not_empty.call(null,inst_36541__$1);
var state_36620__$1 = (function (){var statearr_36648 = state_36620;
(statearr_36648[(26)] = inst_36539);

(statearr_36648[(23)] = inst_36537__$1);

(statearr_36648[(24)] = inst_36536__$1);

(statearr_36648[(25)] = inst_36541__$1);

return statearr_36648;
})();
if(cljs.core.truth_(inst_36542)){
var statearr_36649_36726 = state_36620__$1;
(statearr_36649_36726[(1)] = (23));

} else {
var statearr_36650_36727 = state_36620__$1;
(statearr_36650_36727[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (36))){
var state_36620__$1 = state_36620;
var statearr_36651_36728 = state_36620__$1;
(statearr_36651_36728[(2)] = false);

(statearr_36651_36728[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (41))){
var inst_36595 = (state_36620[(20)]);
var inst_36599 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36600 = cljs.core.map.call(null,inst_36599,inst_36595);
var inst_36601 = cljs.core.pr_str.call(null,inst_36600);
var inst_36602 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36601)].join('');
var inst_36603 = figwheel.client.utils.log.call(null,inst_36602);
var state_36620__$1 = state_36620;
var statearr_36652_36729 = state_36620__$1;
(statearr_36652_36729[(2)] = inst_36603);

(statearr_36652_36729[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (43))){
var inst_36596 = (state_36620[(21)]);
var inst_36606 = (state_36620[(2)]);
var inst_36607 = cljs.core.not_empty.call(null,inst_36596);
var state_36620__$1 = (function (){var statearr_36653 = state_36620;
(statearr_36653[(27)] = inst_36606);

return statearr_36653;
})();
if(cljs.core.truth_(inst_36607)){
var statearr_36654_36730 = state_36620__$1;
(statearr_36654_36730[(1)] = (44));

} else {
var statearr_36655_36731 = state_36620__$1;
(statearr_36655_36731[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (29))){
var inst_36533 = (state_36620[(19)]);
var inst_36539 = (state_36620[(26)]);
var inst_36573 = (state_36620[(16)]);
var inst_36537 = (state_36620[(23)]);
var inst_36536 = (state_36620[(24)]);
var inst_36541 = (state_36620[(25)]);
var inst_36569 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36572 = (function (){var all_files = inst_36533;
var res_SINGLEQUOTE_ = inst_36536;
var res = inst_36537;
var files_not_loaded = inst_36539;
var dependencies_that_loaded = inst_36541;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36533,inst_36539,inst_36573,inst_36537,inst_36536,inst_36541,inst_36569,state_val_36621,c__35371__auto__,map__36465,map__36465__$1,opts,before_jsload,on_jsload,reload_dependents,map__36466,map__36466__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36571){
var map__36656 = p__36571;
var map__36656__$1 = ((((!((map__36656 == null)))?(((((map__36656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36656):map__36656);
var namespace = cljs.core.get.call(null,map__36656__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36533,inst_36539,inst_36573,inst_36537,inst_36536,inst_36541,inst_36569,state_val_36621,c__35371__auto__,map__36465,map__36465__$1,opts,before_jsload,on_jsload,reload_dependents,map__36466,map__36466__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36573__$1 = cljs.core.group_by.call(null,inst_36572,inst_36539);
var inst_36575 = (inst_36573__$1 == null);
var inst_36576 = cljs.core.not.call(null,inst_36575);
var state_36620__$1 = (function (){var statearr_36658 = state_36620;
(statearr_36658[(16)] = inst_36573__$1);

(statearr_36658[(28)] = inst_36569);

return statearr_36658;
})();
if(inst_36576){
var statearr_36659_36732 = state_36620__$1;
(statearr_36659_36732[(1)] = (32));

} else {
var statearr_36660_36733 = state_36620__$1;
(statearr_36660_36733[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (44))){
var inst_36596 = (state_36620[(21)]);
var inst_36609 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36596);
var inst_36610 = cljs.core.pr_str.call(null,inst_36609);
var inst_36611 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36610)].join('');
var inst_36612 = figwheel.client.utils.log.call(null,inst_36611);
var state_36620__$1 = state_36620;
var statearr_36661_36734 = state_36620__$1;
(statearr_36661_36734[(2)] = inst_36612);

(statearr_36661_36734[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (6))){
var inst_36514 = (state_36620[(2)]);
var state_36620__$1 = state_36620;
var statearr_36662_36735 = state_36620__$1;
(statearr_36662_36735[(2)] = inst_36514);

(statearr_36662_36735[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (28))){
var inst_36539 = (state_36620[(26)]);
var inst_36566 = (state_36620[(2)]);
var inst_36567 = cljs.core.not_empty.call(null,inst_36539);
var state_36620__$1 = (function (){var statearr_36663 = state_36620;
(statearr_36663[(29)] = inst_36566);

return statearr_36663;
})();
if(cljs.core.truth_(inst_36567)){
var statearr_36664_36736 = state_36620__$1;
(statearr_36664_36736[(1)] = (29));

} else {
var statearr_36665_36737 = state_36620__$1;
(statearr_36665_36737[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (25))){
var inst_36537 = (state_36620[(23)]);
var inst_36553 = (state_36620[(2)]);
var inst_36554 = cljs.core.not_empty.call(null,inst_36537);
var state_36620__$1 = (function (){var statearr_36666 = state_36620;
(statearr_36666[(30)] = inst_36553);

return statearr_36666;
})();
if(cljs.core.truth_(inst_36554)){
var statearr_36667_36738 = state_36620__$1;
(statearr_36667_36738[(1)] = (26));

} else {
var statearr_36668_36739 = state_36620__$1;
(statearr_36668_36739[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (34))){
var inst_36589 = (state_36620[(2)]);
var state_36620__$1 = state_36620;
if(cljs.core.truth_(inst_36589)){
var statearr_36669_36740 = state_36620__$1;
(statearr_36669_36740[(1)] = (38));

} else {
var statearr_36670_36741 = state_36620__$1;
(statearr_36670_36741[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (17))){
var state_36620__$1 = state_36620;
var statearr_36671_36742 = state_36620__$1;
(statearr_36671_36742[(2)] = recompile_dependents);

(statearr_36671_36742[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (3))){
var state_36620__$1 = state_36620;
var statearr_36672_36743 = state_36620__$1;
(statearr_36672_36743[(2)] = null);

(statearr_36672_36743[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (12))){
var inst_36510 = (state_36620[(2)]);
var state_36620__$1 = state_36620;
var statearr_36673_36744 = state_36620__$1;
(statearr_36673_36744[(2)] = inst_36510);

(statearr_36673_36744[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (2))){
var inst_36472 = (state_36620[(13)]);
var inst_36479 = cljs.core.seq.call(null,inst_36472);
var inst_36480 = inst_36479;
var inst_36481 = null;
var inst_36482 = (0);
var inst_36483 = (0);
var state_36620__$1 = (function (){var statearr_36674 = state_36620;
(statearr_36674[(7)] = inst_36480);

(statearr_36674[(8)] = inst_36481);

(statearr_36674[(9)] = inst_36482);

(statearr_36674[(10)] = inst_36483);

return statearr_36674;
})();
var statearr_36675_36745 = state_36620__$1;
(statearr_36675_36745[(2)] = null);

(statearr_36675_36745[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (23))){
var inst_36533 = (state_36620[(19)]);
var inst_36539 = (state_36620[(26)]);
var inst_36537 = (state_36620[(23)]);
var inst_36536 = (state_36620[(24)]);
var inst_36541 = (state_36620[(25)]);
var inst_36544 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36546 = (function (){var all_files = inst_36533;
var res_SINGLEQUOTE_ = inst_36536;
var res = inst_36537;
var files_not_loaded = inst_36539;
var dependencies_that_loaded = inst_36541;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36533,inst_36539,inst_36537,inst_36536,inst_36541,inst_36544,state_val_36621,c__35371__auto__,map__36465,map__36465__$1,opts,before_jsload,on_jsload,reload_dependents,map__36466,map__36466__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36545){
var map__36676 = p__36545;
var map__36676__$1 = ((((!((map__36676 == null)))?(((((map__36676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36676):map__36676);
var request_url = cljs.core.get.call(null,map__36676__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36533,inst_36539,inst_36537,inst_36536,inst_36541,inst_36544,state_val_36621,c__35371__auto__,map__36465,map__36465__$1,opts,before_jsload,on_jsload,reload_dependents,map__36466,map__36466__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36547 = cljs.core.reverse.call(null,inst_36541);
var inst_36548 = cljs.core.map.call(null,inst_36546,inst_36547);
var inst_36549 = cljs.core.pr_str.call(null,inst_36548);
var inst_36550 = figwheel.client.utils.log.call(null,inst_36549);
var state_36620__$1 = (function (){var statearr_36678 = state_36620;
(statearr_36678[(31)] = inst_36544);

return statearr_36678;
})();
var statearr_36679_36746 = state_36620__$1;
(statearr_36679_36746[(2)] = inst_36550);

(statearr_36679_36746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (35))){
var state_36620__$1 = state_36620;
var statearr_36680_36747 = state_36620__$1;
(statearr_36680_36747[(2)] = true);

(statearr_36680_36747[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (19))){
var inst_36523 = (state_36620[(12)]);
var inst_36529 = figwheel.client.file_reloading.expand_files.call(null,inst_36523);
var state_36620__$1 = state_36620;
var statearr_36681_36748 = state_36620__$1;
(statearr_36681_36748[(2)] = inst_36529);

(statearr_36681_36748[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (11))){
var state_36620__$1 = state_36620;
var statearr_36682_36749 = state_36620__$1;
(statearr_36682_36749[(2)] = null);

(statearr_36682_36749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (9))){
var inst_36512 = (state_36620[(2)]);
var state_36620__$1 = state_36620;
var statearr_36683_36750 = state_36620__$1;
(statearr_36683_36750[(2)] = inst_36512);

(statearr_36683_36750[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (5))){
var inst_36482 = (state_36620[(9)]);
var inst_36483 = (state_36620[(10)]);
var inst_36485 = (inst_36483 < inst_36482);
var inst_36486 = inst_36485;
var state_36620__$1 = state_36620;
if(cljs.core.truth_(inst_36486)){
var statearr_36684_36751 = state_36620__$1;
(statearr_36684_36751[(1)] = (7));

} else {
var statearr_36685_36752 = state_36620__$1;
(statearr_36685_36752[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (14))){
var inst_36493 = (state_36620[(22)]);
var inst_36502 = cljs.core.first.call(null,inst_36493);
var inst_36503 = figwheel.client.file_reloading.eval_body.call(null,inst_36502,opts);
var inst_36504 = cljs.core.next.call(null,inst_36493);
var inst_36480 = inst_36504;
var inst_36481 = null;
var inst_36482 = (0);
var inst_36483 = (0);
var state_36620__$1 = (function (){var statearr_36686 = state_36620;
(statearr_36686[(7)] = inst_36480);

(statearr_36686[(8)] = inst_36481);

(statearr_36686[(32)] = inst_36503);

(statearr_36686[(9)] = inst_36482);

(statearr_36686[(10)] = inst_36483);

return statearr_36686;
})();
var statearr_36687_36753 = state_36620__$1;
(statearr_36687_36753[(2)] = null);

(statearr_36687_36753[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (45))){
var state_36620__$1 = state_36620;
var statearr_36688_36754 = state_36620__$1;
(statearr_36688_36754[(2)] = null);

(statearr_36688_36754[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (26))){
var inst_36533 = (state_36620[(19)]);
var inst_36539 = (state_36620[(26)]);
var inst_36537 = (state_36620[(23)]);
var inst_36536 = (state_36620[(24)]);
var inst_36541 = (state_36620[(25)]);
var inst_36556 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36558 = (function (){var all_files = inst_36533;
var res_SINGLEQUOTE_ = inst_36536;
var res = inst_36537;
var files_not_loaded = inst_36539;
var dependencies_that_loaded = inst_36541;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36533,inst_36539,inst_36537,inst_36536,inst_36541,inst_36556,state_val_36621,c__35371__auto__,map__36465,map__36465__$1,opts,before_jsload,on_jsload,reload_dependents,map__36466,map__36466__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36557){
var map__36689 = p__36557;
var map__36689__$1 = ((((!((map__36689 == null)))?(((((map__36689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36689):map__36689);
var namespace = cljs.core.get.call(null,map__36689__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36689__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36533,inst_36539,inst_36537,inst_36536,inst_36541,inst_36556,state_val_36621,c__35371__auto__,map__36465,map__36465__$1,opts,before_jsload,on_jsload,reload_dependents,map__36466,map__36466__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36559 = cljs.core.map.call(null,inst_36558,inst_36537);
var inst_36560 = cljs.core.pr_str.call(null,inst_36559);
var inst_36561 = figwheel.client.utils.log.call(null,inst_36560);
var inst_36562 = (function (){var all_files = inst_36533;
var res_SINGLEQUOTE_ = inst_36536;
var res = inst_36537;
var files_not_loaded = inst_36539;
var dependencies_that_loaded = inst_36541;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36533,inst_36539,inst_36537,inst_36536,inst_36541,inst_36556,inst_36558,inst_36559,inst_36560,inst_36561,state_val_36621,c__35371__auto__,map__36465,map__36465__$1,opts,before_jsload,on_jsload,reload_dependents,map__36466,map__36466__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36533,inst_36539,inst_36537,inst_36536,inst_36541,inst_36556,inst_36558,inst_36559,inst_36560,inst_36561,state_val_36621,c__35371__auto__,map__36465,map__36465__$1,opts,before_jsload,on_jsload,reload_dependents,map__36466,map__36466__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36563 = setTimeout(inst_36562,(10));
var state_36620__$1 = (function (){var statearr_36691 = state_36620;
(statearr_36691[(33)] = inst_36561);

(statearr_36691[(34)] = inst_36556);

return statearr_36691;
})();
var statearr_36692_36755 = state_36620__$1;
(statearr_36692_36755[(2)] = inst_36563);

(statearr_36692_36755[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (16))){
var state_36620__$1 = state_36620;
var statearr_36693_36756 = state_36620__$1;
(statearr_36693_36756[(2)] = reload_dependents);

(statearr_36693_36756[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (38))){
var inst_36573 = (state_36620[(16)]);
var inst_36591 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36573);
var state_36620__$1 = state_36620;
var statearr_36694_36757 = state_36620__$1;
(statearr_36694_36757[(2)] = inst_36591);

(statearr_36694_36757[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (30))){
var state_36620__$1 = state_36620;
var statearr_36695_36758 = state_36620__$1;
(statearr_36695_36758[(2)] = null);

(statearr_36695_36758[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (10))){
var inst_36493 = (state_36620[(22)]);
var inst_36495 = cljs.core.chunked_seq_QMARK_.call(null,inst_36493);
var state_36620__$1 = state_36620;
if(inst_36495){
var statearr_36696_36759 = state_36620__$1;
(statearr_36696_36759[(1)] = (13));

} else {
var statearr_36697_36760 = state_36620__$1;
(statearr_36697_36760[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (18))){
var inst_36527 = (state_36620[(2)]);
var state_36620__$1 = state_36620;
if(cljs.core.truth_(inst_36527)){
var statearr_36698_36761 = state_36620__$1;
(statearr_36698_36761[(1)] = (19));

} else {
var statearr_36699_36762 = state_36620__$1;
(statearr_36699_36762[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (42))){
var state_36620__$1 = state_36620;
var statearr_36700_36763 = state_36620__$1;
(statearr_36700_36763[(2)] = null);

(statearr_36700_36763[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (37))){
var inst_36586 = (state_36620[(2)]);
var state_36620__$1 = state_36620;
var statearr_36701_36764 = state_36620__$1;
(statearr_36701_36764[(2)] = inst_36586);

(statearr_36701_36764[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (8))){
var inst_36480 = (state_36620[(7)]);
var inst_36493 = (state_36620[(22)]);
var inst_36493__$1 = cljs.core.seq.call(null,inst_36480);
var state_36620__$1 = (function (){var statearr_36702 = state_36620;
(statearr_36702[(22)] = inst_36493__$1);

return statearr_36702;
})();
if(inst_36493__$1){
var statearr_36703_36765 = state_36620__$1;
(statearr_36703_36765[(1)] = (10));

} else {
var statearr_36704_36766 = state_36620__$1;
(statearr_36704_36766[(1)] = (11));

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
});})(c__35371__auto__,map__36465,map__36465__$1,opts,before_jsload,on_jsload,reload_dependents,map__36466,map__36466__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__35348__auto__,c__35371__auto__,map__36465,map__36465__$1,opts,before_jsload,on_jsload,reload_dependents,map__36466,map__36466__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35349__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35349__auto____0 = (function (){
var statearr_36705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36705[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__35349__auto__);

(statearr_36705[(1)] = (1));

return statearr_36705;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35349__auto____1 = (function (state_36620){
while(true){
var ret_value__35350__auto__ = (function (){try{while(true){
var result__35351__auto__ = switch__35348__auto__.call(null,state_36620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35351__auto__;
}
break;
}
}catch (e36706){if((e36706 instanceof Object)){
var ex__35352__auto__ = e36706;
var statearr_36707_36767 = state_36620;
(statearr_36707_36767[(5)] = ex__35352__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36768 = state_36620;
state_36620 = G__36768;
continue;
} else {
return ret_value__35350__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__35349__auto__ = function(state_36620){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35349__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35349__auto____1.call(this,state_36620);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__35349__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35349__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__35349__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35349__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35349__auto__;
})()
;})(switch__35348__auto__,c__35371__auto__,map__36465,map__36465__$1,opts,before_jsload,on_jsload,reload_dependents,map__36466,map__36466__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__35373__auto__ = (function (){var statearr_36708 = f__35372__auto__.call(null);
(statearr_36708[(6)] = c__35371__auto__);

return statearr_36708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35373__auto__);
});})(c__35371__auto__,map__36465,map__36465__$1,opts,before_jsload,on_jsload,reload_dependents,map__36466,map__36466__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__35371__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36771,link){
var map__36772 = p__36771;
var map__36772__$1 = ((((!((map__36772 == null)))?(((((map__36772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36772):map__36772);
var file = cljs.core.get.call(null,map__36772__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__36772,map__36772__$1,file){
return (function (p1__36769_SHARP_,p2__36770_SHARP_){
if(cljs.core._EQ_.call(null,p1__36769_SHARP_,p2__36770_SHARP_)){
return p1__36769_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__36772,map__36772__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36775){
var map__36776 = p__36775;
var map__36776__$1 = ((((!((map__36776 == null)))?(((((map__36776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36776):map__36776);
var match_length = cljs.core.get.call(null,map__36776__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36776__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36774_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36774_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36778_SHARP_,p2__36779_SHARP_){
return cljs.core.assoc.call(null,p1__36778_SHARP_,cljs.core.get.call(null,p2__36779_SHARP_,key),p2__36779_SHARP_);
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
var loaded_f_datas_36780 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36780);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36780);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36781,p__36782){
var map__36783 = p__36781;
var map__36783__$1 = ((((!((map__36783 == null)))?(((((map__36783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36783):map__36783);
var on_cssload = cljs.core.get.call(null,map__36783__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36784 = p__36782;
var map__36784__$1 = ((((!((map__36784 == null)))?(((((map__36784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36784):map__36784);
var files_msg = map__36784__$1;
var files = cljs.core.get.call(null,map__36784__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1555762784284
