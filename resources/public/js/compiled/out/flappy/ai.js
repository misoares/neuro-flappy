// Compiled by ClojureScript 1.10.238 {}
goog.provide('flappy.ai');
goog.require('cljs.core');
flappy.ai.options = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mutation-range","mutation-range",-1498722652),new cljs.core.Keyword(null,"score-sort","score-sort",1122590532),new cljs.core.Keyword(null,"mutation-rate","mutation-rate",-1615898651),new cljs.core.Keyword(null,"elitism","elitism",-650754994),new cljs.core.Keyword(null,"low-historic","low-historic",876541486),new cljs.core.Keyword(null,"historic","historic",1547189230),new cljs.core.Keyword(null,"random-behaviour","random-behaviour",-994099057),new cljs.core.Keyword(null,"population","population",-1209901867),new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"nb-child","nb-child",729259007)],[0.5,(-1),0.1,0.2,false,(0),0.2,(50),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),(1)], null),(1)]);
flappy.ai.activation = (function flappy$ai$activation(a){
return ((1) / ((1) + Math.exp((- a))));
});
flappy.ai.random_clamped = (function flappy$ai$random_clamped(){
return ((1) - ((2) * Math.random()));
});
flappy.ai.neuron_populate = (function flappy$ai$neuron_populate(nb){
return cljs.core.take.call(null,nb,cljs.core.repeatedly.call(null,(function (){
return flappy.ai.random_clamped.call(null);
})));
});
flappy.ai.neuron_create = (function flappy$ai$neuron_create(nb){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"weights","weights",-1097626197),flappy.ai.neuron_populate.call(null,nb)], null);
});
flappy.ai.neuron_update = (function flappy$ai$neuron_update(neuron,value){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"weights","weights",-1097626197),new cljs.core.Keyword(null,"weights","weights",-1097626197).cljs$core$IFn$_invoke$arity$1(neuron)], null);
});
flappy.ai.layer_populate = (function flappy$ai$layer_populate(nb_neurons,nb_inputs){
return cljs.core.take.call(null,nb_neurons,cljs.core.repeatedly.call(null,(function (){
return flappy.ai.neuron_create.call(null,nb_inputs);
})));
});
flappy.ai.layer_create = (function flappy$ai$layer_create(nb_neurons,nb_inputs){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"neurons","neurons",-2094703958),flappy.ai.layer_populate.call(null,nb_neurons,nb_inputs)], null);
});
flappy.ai.network_perceptron_generation = (function flappy$ai$network_perceptron_generation(input,hiddens,output){
var in$ = input;
var vals = hiddens;
var out = output;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,vals)){
return cljs.core.conj.call(null,result,flappy.ai.layer_create.call(null,out,in$));
} else {
var G__47462 = cljs.core.first.call(null,vals);
var G__47463 = cljs.core.rest.call(null,vals);
var G__47464 = out;
var G__47465 = cljs.core.conj.call(null,result,flappy.ai.layer_create.call(null,in$,cljs.core.first.call(null,vals)));
in$ = G__47462;
vals = G__47463;
out = G__47464;
result = G__47465;
continue;
}
break;
}
});
flappy.ai.get_save = (function flappy$ai$get_save(network){
return cljs.core.List.EMPTY;
});
flappy.ai.set_save = (function flappy$ai$set_save(save){
return null;
});
flappy.ai.neuron_calculation = (function flappy$ai$neuron_calculation(previous_layer_neurons,current_layer_neuron){
return flappy.ai.neuron_update.call(null,current_layer_neuron,flappy.ai.activation.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),previous_layer_neurons),cljs.core.flatten.call(null,new cljs.core.Keyword(null,"weights","weights",-1097626197).cljs$core$IFn$_invoke$arity$1(current_layer_neuron))))));
});
flappy.ai.compute_per_neuron = (function flappy$ai$compute_per_neuron(previous_layer_neurons,current_layer_neurons){
var iter__4292__auto__ = (function flappy$ai$compute_per_neuron_$_iter__47466(s__47467){
return (new cljs.core.LazySeq(null,(function (){
var s__47467__$1 = s__47467;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__47467__$1);
if(temp__5457__auto__){
var s__47467__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47467__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__47467__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__47469 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__47468 = (0);
while(true){
if((i__47468 < size__4291__auto__)){
var neuron = cljs.core._nth.call(null,c__4290__auto__,i__47468);
cljs.core.chunk_append.call(null,b__47469,flappy.ai.neuron_calculation.call(null,previous_layer_neurons,neuron));

var G__47470 = (i__47468 + (1));
i__47468 = G__47470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47469),flappy$ai$compute_per_neuron_$_iter__47466.call(null,cljs.core.chunk_rest.call(null,s__47467__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47469),null);
}
} else {
var neuron = cljs.core.first.call(null,s__47467__$2);
return cljs.core.cons.call(null,flappy.ai.neuron_calculation.call(null,previous_layer_neurons,neuron),flappy$ai$compute_per_neuron_$_iter__47466.call(null,cljs.core.rest.call(null,s__47467__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,current_layer_neurons);
});
flappy.ai.network_compute = (function flappy$ai$network_compute(layers,inputs){
var secound_inputs = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"neurons","neurons",-2094703958),cljs.core.map.call(null,flappy.ai.neuron_update,new cljs.core.Keyword(null,"neurons","neurons",-2094703958).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,layers)),inputs)], null);
var rest_layers = cljs.core.rest.call(null,layers);
var layer = rest_layers;
var input = secound_inputs;
var result = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [secound_inputs], null);
while(true){
if(cljs.core.empty_QMARK_.call(null,layer)){
return result;
} else {
var G__47471 = cljs.core.rest.call(null,layer);
var G__47472 = cljs.core.first.call(null,layer);
var G__47473 = cljs.core.conj.call(null,result,flappy.ai.compute_per_neuron.call(null,new cljs.core.Keyword(null,"neurons","neurons",-2094703958).cljs$core$IFn$_invoke$arity$1(input),new cljs.core.Keyword(null,"neurons","neurons",-2094703958).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,layer))));
layer = G__47471;
input = G__47472;
result = G__47473;
continue;
}
break;
}
});
flappy.ai.network_outputs = (function flappy$ai$network_outputs(layers,inputs){
return cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.last.call(null,flappy.ai.network_compute.call(null,layers,inputs)));
});
flappy.ai.genome_create = (function flappy$ai$genome_create(score,network){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"score","score",-1963588780),score,new cljs.core.Keyword(null,"network","network",2050004697),network], null);
});
flappy.ai.generation_add_genome = (function flappy$ai$generation_add_genome(generation,genome){
return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.conj.call(null,generation,genome));
});
flappy.ai.generation_breed = (function flappy$ai$generation_breed(genome1,genome2,number_children){
return cljs.core.update_in.call(null,genome1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"weights","weights",-1097626197)], null),cljs.core.map.call(null,flappy.ai.apply_mutation,flappy.ai.shuffle_weights.call(null,genome1,genome2)));
});
flappy.ai.shuffle_weights = (function flappy$ai$shuffle_weights(genome1,genome2){
var g2_weights = new cljs.core.Keyword(null,"weights","weights",-1097626197).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(genome2));
var g1_weights = new cljs.core.Keyword(null,"weights","weights",-1097626197).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(genome1));
return cljs.core.take.call(null,cljs.core.count.call(null,g1_weights),cljs.core.shuffle.call(null,cljs.core.concat.call(null,g1_weights,g2_weights)));
});
flappy.ai.apply_mutation = (function flappy$ai$apply_mutation(value){
if((Math.random() <= new cljs.core.Keyword(null,"mutation-rate","mutation-rate",-1615898651).cljs$core$IFn$_invoke$arity$1(flappy.ai.options))){
return (((Math.random() * new cljs.core.Keyword(null,"mutation-range","mutation-range",-1498722652).cljs$core$IFn$_invoke$arity$1(flappy.ai.options)) * (2)) - new cljs.core.Keyword(null,"mutation-range","mutation-range",-1498722652).cljs$core$IFn$_invoke$arity$1(flappy.ai.options));
} else {
return value;
}
});
flappy.ai.generation_next = (function flappy$ai$generation_next(genomes){
return cljs.core.conj.call(null,flappy.ai.part1.call(null,genomes),flappy.ai.part2.call(null,cljs.core.first.call(null,genomes)),flappy.ai.part3.call(null,genomes));
});
flappy.ai.part1 = (function flappy$ai$part1(genomes){
return cljs.core.map.call(null,new cljs.core.Keyword(null,"network","network",2050004697),cljs.core.take.call(null,Math.round((new cljs.core.Keyword(null,"elitism","elitism",-650754994).cljs$core$IFn$_invoke$arity$1(flappy.ai.options) * new cljs.core.Keyword(null,"population","population",-1209901867).cljs$core$IFn$_invoke$arity$1(flappy.ai.options))),genomes));
});
flappy.ai.part2 = (function flappy$ai$part2(network){
return cljs.core.update_in.call(null,network,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weights","weights",-1097626197)], null),(function (p1__47474_SHARP_){
return cljs.core.mapv.call(null,flappy.ai.random_clamped,p1__47474_SHARP_);
}));
});
flappy.ai.part3 = (function flappy$ai$part3(genomes){
var genome1 = cljs.core.first.call(null,genomes);
var genome2 = cljs.core.first.call(null,genomes);
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,genome1)){
var G__47475 = genomes;
var G__47476 = cljs.core.rest.call(null,genome2);
var G__47477 = flappy.ai.generate_result.call(null,result,genome1,genome2);
genome1 = G__47475;
genome2 = G__47476;
result = G__47477;
continue;
} else {
if((cljs.core.count.call(null,result) >= new cljs.core.Keyword(null,"population","population",-1209901867).cljs$core$IFn$_invoke$arity$1(flappy.ai.options))){
return result;
} else {
var G__47478 = cljs.core.rest.call(null,genomes);
var G__47479 = genome2;
var G__47480 = flappy.ai.generate_result.call(null,result,genome1,genome2);
genome1 = G__47478;
genome2 = G__47479;
result = G__47480;
continue;
}
}
break;
}
});
flappy.ai.generate_result = (function flappy$ai$generate_result(result,genome1,genome2){
return cljs.core.conj.call(null,result,cljs.core.map.call(null,new cljs.core.Keyword(null,"network","network",2050004697),flappy.ai.generation_breed.call(null,genome1,genome2,flappy.ai.get_nb_child.call(null))));
});
flappy.ai.get_nb_child = (function flappy$ai$get_nb_child(){
if((new cljs.core.Keyword(null,"nb-child","nb-child",729259007).cljs$core$IFn$_invoke$arity$1(flappy.ai.options) > (0))){
return new cljs.core.Keyword(null,"nb-child","nb-child",729259007).cljs$core$IFn$_invoke$arity$1(flappy.ai.options);
} else {
return (1);
}
});

//# sourceMappingURL=ai.js.map?rel=1555791540241
