// Compiled by ClojureScript 1.10.238 {}
goog.provide('flappy.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
flappy.core.floor = (function flappy$core$floor(x){
return Math.floor(x);
});
flappy.core.translate = (function flappy$core$translate(start_pos,vel,time){
return flappy.core.floor.call(null,(start_pos + (time * vel)));
});
flappy.core.horiz_vel = -0.19;
flappy.core.gravity = 0.05;
flappy.core.jump_vel = (21);
flappy.core.start_y = (312);
flappy.core.bottom_y = (561);
flappy.core.flappy_x = (212);
flappy.core.flappy_width = (57);
flappy.core.flappy_height = (41);
flappy.core.pillar_spacing = (324);
flappy.core.pillar_gap = (198);
flappy.core.pillar_width = (86);
flappy.core.starting_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"timer-running","timer-running",1190718961),false,new cljs.core.Keyword(null,"jump-count","jump-count",-1095229696),(0),new cljs.core.Keyword(null,"initial-vel","initial-vel",428539882),(0),new cljs.core.Keyword(null,"start-time","start-time",814801386),(0),new cljs.core.Keyword(null,"flappy-start-time","flappy-start-time",275858209),(0),new cljs.core.Keyword(null,"flappy-y","flappy-y",1774246547),flappy.core.start_y,new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start-time","start-time",814801386),(0),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),(900),new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266),(900),new cljs.core.Keyword(null,"gap-top","gap-top",246258531),(200)], null)], null)], null);
flappy.core.reset_state = (function flappy$core$reset_state(_,cur_time){
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,flappy.core.starting_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743)], null),(function (pls){
return cljs.core.map.call(null,(function (p1__36580_SHARP_){
return cljs.core.assoc.call(null,p1__36580_SHARP_,new cljs.core.Keyword(null,"start-time","start-time",814801386),cur_time);
}),pls);
})),new cljs.core.Keyword(null,"start-time","start-time",814801386),cur_time,new cljs.core.Keyword(null,"flappy-start-time","flappy-start-time",275858209),cur_time,new cljs.core.Keyword(null,"timer-running","timer-running",1190718961),true);
});
if(typeof flappy.core.flap_state !== 'undefined'){
} else {
flappy.core.flap_state = cljs.core.atom.call(null,flappy.core.starting_state);
}
flappy.core.curr_pillar_pos = (function flappy$core$curr_pillar_pos(cur_time,p__36581){
var map__36582 = p__36581;
var map__36582__$1 = ((((!((map__36582 == null)))?(((((map__36582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36582):map__36582);
var pos_x = cljs.core.get.call(null,map__36582__$1,new cljs.core.Keyword(null,"pos-x","pos-x",398349422));
var start_time = cljs.core.get.call(null,map__36582__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386));
return flappy.core.translate.call(null,pos_x,flappy.core.horiz_vel,(cur_time - start_time));
});
flappy.core.in_pillar_QMARK_ = (function flappy$core$in_pillar_QMARK_(p__36584){
var map__36585 = p__36584;
var map__36585__$1 = ((((!((map__36585 == null)))?(((((map__36585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36585):map__36585);
var cur_x = cljs.core.get.call(null,map__36585__$1,new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266));
return ((((flappy.core.flappy_x + flappy.core.flappy_width) >= cur_x)) && ((flappy.core.flappy_x < (cur_x + flappy.core.pillar_width))));
});
flappy.core.in_pillar_gap_QMARK_ = (function flappy$core$in_pillar_gap_QMARK_(p__36587,p__36588){
var map__36589 = p__36587;
var map__36589__$1 = ((((!((map__36589 == null)))?(((((map__36589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36589):map__36589);
var flappy_y = cljs.core.get.call(null,map__36589__$1,new cljs.core.Keyword(null,"flappy-y","flappy-y",1774246547));
var map__36590 = p__36588;
var map__36590__$1 = ((((!((map__36590 == null)))?(((((map__36590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36590):map__36590);
var gap_top = cljs.core.get.call(null,map__36590__$1,new cljs.core.Keyword(null,"gap-top","gap-top",246258531));
return (((gap_top < flappy_y)) && (((gap_top + flappy.core.pillar_gap) > (flappy_y + flappy.core.flappy_height))));
});
flappy.core.bottom_collision_QMARK_ = (function flappy$core$bottom_collision_QMARK_(p__36593){
var map__36594 = p__36593;
var map__36594__$1 = ((((!((map__36594 == null)))?(((((map__36594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36594):map__36594);
var flappy_y = cljs.core.get.call(null,map__36594__$1,new cljs.core.Keyword(null,"flappy-y","flappy-y",1774246547));
return (flappy_y >= (flappy.core.bottom_y - flappy.core.flappy_height));
});
flappy.core.collision_QMARK_ = (function flappy$core$collision_QMARK_(p__36597){
var map__36598 = p__36597;
var map__36598__$1 = ((((!((map__36598 == null)))?(((((map__36598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36598):map__36598);
var st = map__36598__$1;
var pillar_list = cljs.core.get.call(null,map__36598__$1,new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743));
if(cljs.core.truth_(cljs.core.some.call(null,((function (map__36598,map__36598__$1,st,pillar_list){
return (function (p1__36596_SHARP_){
var or__3922__auto__ = (function (){var and__3911__auto__ = flappy.core.in_pillar_QMARK_.call(null,p1__36596_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,flappy.core.in_pilla.call(null,flappy.core.mer_gap_QMARK_,st,p1__36596_SHARP_));
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return flappy.core.bottom_collision_QMARK_.call(null,st);
}
});})(map__36598,map__36598__$1,st,pillar_list))
,pillar_list))){
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"timer-running","timer-running",1190718961),false);
} else {
return st;
}
});
flappy.core.new_pillar = (function flappy$core$new_pillar(cur_time,pos_x){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start-time","start-time",814801386),cur_time,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),pos_x,new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266),pos_x,new cljs.core.Keyword(null,"gap-top","gap-top",246258531),((60) + cljs.core.rand_int.call(null,((flappy.core.bottom_y - (120)) - flappy.core.pillar_gap)))], null);
});
flappy.core.update_pillars = (function flappy$core$update_pillars(p__36602){
var map__36603 = p__36602;
var map__36603__$1 = ((((!((map__36603 == null)))?(((((map__36603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36603):map__36603);
var st = map__36603__$1;
var pillar_list = cljs.core.get.call(null,map__36603__$1,new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743));
var cur_time = cljs.core.get.call(null,map__36603__$1,new cljs.core.Keyword(null,"cur-time","cur-time",518931125));
var pillars_with_pos = cljs.core.map.call(null,((function (map__36603,map__36603__$1,st,pillar_list,cur_time){
return (function (p1__36600_SHARP_){
return cljs.core.assoc.call(null,p1__36600_SHARP_,new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266),flappy.core.curr_pillar_pos.call(null,cur_time,p1__36600_SHARP_));
});})(map__36603,map__36603__$1,st,pillar_list,cur_time))
,pillar_list);
var pillars_in_world = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266),cljs.core.filter.call(null,((function (pillars_with_pos,map__36603,map__36603__$1,st,pillar_list,cur_time){
return (function (p1__36601_SHARP_){
return (new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266).cljs$core$IFn$_invoke$arity$1(p1__36601_SHARP_) > (- flappy.core.pillar_width));
});})(pillars_with_pos,map__36603,map__36603__$1,st,pillar_list,cur_time))
,pillars_with_pos));
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743),(((cljs.core.count.call(null,pillars_in_world) < (3)))?cljs.core.conj.call(null,pillars_in_world,flappy.core.new_pillar.call(null,cur_time,(flappy.core.pillar_spacing + new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,pillars_in_world))))):pillars_in_world));
});
flappy.core.sine_wave = (function flappy$core$sine_wave(st){
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"flappy-y","flappy-y",1774246547),(flappy.core.start_y + ((30) * Math.sin((new cljs.core.Keyword(null,"time-delta","time-delta",-1937570875).cljs$core$IFn$_invoke$arity$1(st) / (300))))));
});
flappy.core.update_flappy = (function flappy$core$update_flappy(p__36605){
var map__36606 = p__36605;
var map__36606__$1 = ((((!((map__36606 == null)))?(((((map__36606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36606):map__36606);
var st = map__36606__$1;
var time_delta = cljs.core.get.call(null,map__36606__$1,new cljs.core.Keyword(null,"time-delta","time-delta",-1937570875));
var initial_vel = cljs.core.get.call(null,map__36606__$1,new cljs.core.Keyword(null,"initial-vel","initial-vel",428539882));
var flappy_y = cljs.core.get.call(null,map__36606__$1,new cljs.core.Keyword(null,"flappy-y","flappy-y",1774246547));
var jump_count = cljs.core.get.call(null,map__36606__$1,new cljs.core.Keyword(null,"jump-count","jump-count",-1095229696));
if((jump_count > (0))){
var cur_vel = (initial_vel - (time_delta * flappy.core.gravity));
var new_y = (flappy_y - cur_vel);
var new_y__$1 = (((new_y > (flappy.core.bottom_y - flappy.core.flappy_height)))?(flappy.core.bottom_y - flappy.core.flappy_height):new_y);
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"flappy-y","flappy-y",1774246547),new_y__$1);
} else {
return flappy.core.sine_wave.call(null,st);
}
});
flappy.core.score = (function flappy$core$score(p__36608){
var map__36609 = p__36608;
var map__36609__$1 = ((((!((map__36609 == null)))?(((((map__36609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36609):map__36609);
var st = map__36609__$1;
var cur_time = cljs.core.get.call(null,map__36609__$1,new cljs.core.Keyword(null,"cur-time","cur-time",518931125));
var start_time = cljs.core.get.call(null,map__36609__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386));
var score = (Math.abs(flappy.core.floor.call(null,((((cur_time - start_time) * flappy.core.horiz_vel) - (544)) / flappy.core.pillar_spacing))) - (4));
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"score","score",-1963588780),(((score < (0)))?(0):score));
});
flappy.core.time_update = (function flappy$core$time_update(timestamp,state){
return flappy.core.score.call(null,flappy.core.collision_QMARK_.call(null,flappy.core.update_pillars.call(null,flappy.core.update_flappy.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"cur-time","cur-time",518931125),timestamp,new cljs.core.Keyword(null,"time-delta","time-delta",-1937570875),(timestamp - new cljs.core.Keyword(null,"flappy-start-time","flappy-start-time",275858209).cljs$core$IFn$_invoke$arity$1(state)))))));
});
flappy.core.jump = (function flappy$core$jump(p__36611){
var map__36612 = p__36611;
var map__36612__$1 = ((((!((map__36612 == null)))?(((((map__36612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36612):map__36612);
var state = map__36612__$1;
var cur_time = cljs.core.get.call(null,map__36612__$1,new cljs.core.Keyword(null,"cur-time","cur-time",518931125));
var jump_count = cljs.core.get.call(null,map__36612__$1,new cljs.core.Keyword(null,"jump-count","jump-count",-1095229696));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"jump-count","jump-count",-1095229696),(jump_count + (1)),new cljs.core.Keyword(null,"flappy-start-time","flappy-start-time",275858209),cur_time,new cljs.core.Keyword(null,"initial-vel","initial-vel",428539882),flappy.core.jump_vel);
});
flappy.core.border = (function flappy$core$border(p__36614){
var map__36615 = p__36614;
var map__36615__$1 = ((((!((map__36615 == null)))?(((((map__36615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36615):map__36615);
var state = map__36615__$1;
var cur_time = cljs.core.get.call(null,map__36615__$1,new cljs.core.Keyword(null,"cur-time","cur-time",518931125));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"border-pos","border-pos",-56607875),cljs.core.mod.call(null,flappy.core.translate.call(null,(0),flappy.core.horiz_vel,cur_time),(23)));
});
flappy.core.pillar_offset = (function flappy$core$pillar_offset(p__36617){
var map__36618 = p__36617;
var map__36618__$1 = ((((!((map__36618 == null)))?(((((map__36618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36618):map__36618);
var p = map__36618__$1;
var gap_top = cljs.core.get.call(null,map__36618__$1,new cljs.core.Keyword(null,"gap-top","gap-top",246258531));
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"upper-height","upper-height",1141538372),gap_top,new cljs.core.Keyword(null,"lower-height","lower-height",-846579583),((flappy.core.bottom_y - gap_top) - flappy.core.pillar_gap));
});
flappy.core.pillar_offsets = (function flappy$core$pillar_offsets(state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743)], null),(function (pillar_list){
return cljs.core.map.call(null,flappy.core.pillar_offset,pillar_list);
}));
});
flappy.core.world = (function flappy$core$world(state){
return flappy.core.pillar_offsets.call(null,flappy.core.border.call(null,state));
});
flappy.core.px = (function flappy$core$px(n){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"px"].join('');
});
flappy.core.pillar = (function flappy$core$pillar(p__36620){
var map__36621 = p__36620;
var map__36621__$1 = ((((!((map__36621 == null)))?(((((map__36621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36621):map__36621);
var cur_x = cljs.core.get.call(null,map__36621__$1,new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266));
var pos_x = cljs.core.get.call(null,map__36621__$1,new cljs.core.Keyword(null,"pos-x","pos-x",398349422));
var upper_height = cljs.core.get.call(null,map__36621__$1,new cljs.core.Keyword(null,"upper-height","upper-height",1141538372));
var lower_height = cljs.core.get.call(null,map__36621__$1,new cljs.core.Keyword(null,"lower-height","lower-height",-846579583));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pillars","div.pillars",-1469617576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pillar.pillar-upper","div.pillar.pillar-upper",596294660),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),flappy.core.px.call(null,cur_x),new cljs.core.Keyword(null,"height","height",1025178622),upper_height], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pillar.pillar-lower","div.pillar.pillar-lower",-1227306575),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),flappy.core.px.call(null,cur_x),new cljs.core.Keyword(null,"height","height",1025178622),lower_height], null)], null)], null)], null);
});
flappy.core.time_loop = (function flappy$core$time_loop(time){
var new_state = cljs.core.swap_BANG_.call(null,flappy.core.flap_state,cljs.core.partial.call(null,flappy.core.time_update,time));
if(cljs.core.truth_(new cljs.core.Keyword(null,"timer-running","timer-running",1190718961).cljs$core$IFn$_invoke$arity$1(new_state))){
var c__23955__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23955__auto__,new_state){
return (function (){
var f__23956__auto__ = (function (){var switch__23932__auto__ = ((function (c__23955__auto__,new_state){
return (function (state_36628){
var state_val_36629 = (state_36628[(1)]);
if((state_val_36629 === (1))){
var inst_36623 = cljs.core.async.timeout.call(null,(30));
var state_36628__$1 = state_36628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36628__$1,(2),inst_36623);
} else {
if((state_val_36629 === (2))){
var inst_36625 = (state_36628[(2)]);
var inst_36626 = window.requestAnimationFrame(flappy.core.time_loop);
var state_36628__$1 = (function (){var statearr_36630 = state_36628;
(statearr_36630[(7)] = inst_36625);

return statearr_36630;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36628__$1,inst_36626);
} else {
return null;
}
}
});})(c__23955__auto__,new_state))
;
return ((function (switch__23932__auto__,c__23955__auto__,new_state){
return (function() {
var flappy$core$time_loop_$_state_machine__23933__auto__ = null;
var flappy$core$time_loop_$_state_machine__23933__auto____0 = (function (){
var statearr_36631 = [null,null,null,null,null,null,null,null];
(statearr_36631[(0)] = flappy$core$time_loop_$_state_machine__23933__auto__);

(statearr_36631[(1)] = (1));

return statearr_36631;
});
var flappy$core$time_loop_$_state_machine__23933__auto____1 = (function (state_36628){
while(true){
var ret_value__23934__auto__ = (function (){try{while(true){
var result__23935__auto__ = switch__23932__auto__.call(null,state_36628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23935__auto__;
}
break;
}
}catch (e36632){if((e36632 instanceof Object)){
var ex__23936__auto__ = e36632;
var statearr_36633_36635 = state_36628;
(statearr_36633_36635[(5)] = ex__23936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36636 = state_36628;
state_36628 = G__36636;
continue;
} else {
return ret_value__23934__auto__;
}
break;
}
});
flappy$core$time_loop_$_state_machine__23933__auto__ = function(state_36628){
switch(arguments.length){
case 0:
return flappy$core$time_loop_$_state_machine__23933__auto____0.call(this);
case 1:
return flappy$core$time_loop_$_state_machine__23933__auto____1.call(this,state_36628);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
flappy$core$time_loop_$_state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$0 = flappy$core$time_loop_$_state_machine__23933__auto____0;
flappy$core$time_loop_$_state_machine__23933__auto__.cljs$core$IFn$_invoke$arity$1 = flappy$core$time_loop_$_state_machine__23933__auto____1;
return flappy$core$time_loop_$_state_machine__23933__auto__;
})()
;})(switch__23932__auto__,c__23955__auto__,new_state))
})();
var state__23957__auto__ = (function (){var statearr_36634 = f__23956__auto__.call(null);
(statearr_36634[(6)] = c__23955__auto__);

return statearr_36634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23957__auto__);
});})(c__23955__auto__,new_state))
);

return c__23955__auto__;
} else {
return null;
}
});
flappy.core.start_game = (function flappy$core$start_game(){
return window.requestAnimationFrame((function (time){
cljs.core.reset_BANG_.call(null,flappy.core.flap_state,flappy.core.reset_state.call(null,cljs.core.deref.call(null,flappy.core.flap_state),time));

return flappy.core.time_loop.call(null,time);
}));
});
flappy.core.main_template = (function flappy$core$main_template(p__36637){
var map__36638 = p__36637;
var map__36638__$1 = ((((!((map__36638 == null)))?(((((map__36638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36638):map__36638);
var score = cljs.core.get.call(null,map__36638__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var cur_time = cljs.core.get.call(null,map__36638__$1,new cljs.core.Keyword(null,"cur-time","cur-time",518931125));
var jump_count = cljs.core.get.call(null,map__36638__$1,new cljs.core.Keyword(null,"jump-count","jump-count",-1095229696));
var timer_running = cljs.core.get.call(null,map__36638__$1,new cljs.core.Keyword(null,"timer-running","timer-running",1190718961));
var border_pos = cljs.core.get.call(null,map__36638__$1,new cljs.core.Keyword(null,"border-pos","border-pos",-56607875));
var flappy_y = cljs.core.get.call(null,map__36638__$1,new cljs.core.Keyword(null,"flappy-y","flappy-y",1774246547));
var pillar_list = cljs.core.get.call(null,map__36638__$1,new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743));
return sablono.core.create_element.call(null,"div",({"onMouseDown": ((function (map__36638,map__36638__$1,score,cur_time,jump_count,timer_running,border_pos,flappy_y,pillar_list){
return (function (e){
cljs.core.swap_BANG_.call(null,flappy.core.flap_state,flappy.core.jump);

return e.preventDefault();
});})(map__36638,map__36638__$1,score,cur_time,jump_count,timer_running,border_pos,flappy_y,pillar_list))
, "className": "board"}),(function (){var attrs36640 = score;
return cljs.core.apply.call(null,sablono.core.create_element,"h1",((cljs.core.map_QMARK_.call(null,attrs36640))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["score"], null)], null),attrs36640)):({"className": "score"})),((cljs.core.map_QMARK_.call(null,attrs36640))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36640)], null)));
})(),((cljs.core.not.call(null,timer_running))?sablono.core.create_element.call(null,"a",({"onClick": ((function (map__36638,map__36638__$1,score,cur_time,jump_count,timer_running,border_pos,flappy_y,pillar_list){
return (function (){
return flappy.core.start_game.call(null);
});})(map__36638,map__36638__$1,score,cur_time,jump_count,timer_running,border_pos,flappy_y,pillar_list))
, "className": "start-button"}),((((1) < jump_count))?"RESTART":"START")):sablono.core.create_element.call(null,"span",null)),(function (){var attrs36643 = cljs.core.map.call(null,flappy.core.pillar,pillar_list);
return cljs.core.apply.call(null,sablono.core.create_element,"div",((cljs.core.map_QMARK_.call(null,attrs36643))?sablono.interpreter.attributes.call(null,attrs36643):null),((cljs.core.map_QMARK_.call(null,attrs36643))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36643)], null)));
})(),sablono.core.create_element.call(null,"div",({"style": ({"top": flappy.core.px.call(null,flappy_y)}), "className": "flappy"})),sablono.core.create_element.call(null,"div",({"style": ({"backgroundPositionX": flappy.core.px.call(null,border_pos)}), "className": "scrolling-border"})));
});
var node_36644 = document.getElementById("board-area");
flappy.core.renderer = ((function (node_36644){
return (function flappy$core$renderer(full_state){
return ReactDOM.render(flappy.core.main_template.call(null,full_state),node_36644);
});})(node_36644))
;
cljs.core.add_watch.call(null,flappy.core.flap_state,new cljs.core.Keyword(null,"renderer","renderer",336841071),(function (_,___$1,___$2,n){
return flappy.core.renderer.call(null,flappy.core.world.call(null,n));
}));
cljs.core.reset_BANG_.call(null,flappy.core.flap_state,cljs.core.deref.call(null,flappy.core.flap_state));
cljs.core.println.call(null,flappy.core.flap_state);

//# sourceMappingURL=core.js.map?rel=1555762421599
