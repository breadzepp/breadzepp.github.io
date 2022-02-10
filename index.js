(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.StartButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgnBdIAAgFIAHAAQALAAAFgHQADgFAAgPIAAiNIgWAAQgNAAgFACQgIACgFAIQgFAHgBANIgFAAIACgsICXAAIACAsIgFAAQgCgMgCgFQgFgHgHgEQgHgEgLAAIgaAAIAACNQAAARADAEQAFAGALAAIAHAAIAAAFg");
	this.shape.setTransform(123.825,20.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAqBdIg9hXIgLAAIgEAAIgFAAIAAA2QAAARAEAFQAGAGAKAAIAHAAIAAAFIhPAAIAAgFIAHAAQALAAAGgIQACgEAAgQIAAh3QAAgRgDgFQgGgGgKAAIgHAAIAAgFIBEAAQAcAAAOAFQAOAEAJAMQALALgBAQQABARgMANQgLAMgXAFIAmA1QANASAKAGQAJAGAPACIAAAFgAgnhPIAABNIAFABIADAAQAaAAANgMQANgLABgSQAAgSgLgKQgLgLgRAAQgIAAgOACg");
	this.shape_1.setTransform(107.9,20.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAaBfIAAgFQAKgBAEgDQAFgDAAgFQgBgGgFgNIgLgaIhHAAIgMAdQgGALABAFQgBAEAEAEQAFADANABIAAAFIg6AAIAAgFQALgCAEgEQAGgGAJgUIBCiYIADAAIBACZQAJATAGAGQAGAFAMABIAAAFgAgnAXIA/AAIgfhKg");
	this.shape_2.setTransform(88.05,19.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgnBdIAAgFIAHAAQALAAAFgHQADgFAAgPIAAiNIgWAAQgNAAgFACQgIACgFAIQgFAHgBANIgFAAIACgsICXAAIACAsIgFAAQgCgMgCgFQgFgHgHgEQgHgEgLAAIgaAAIAACNQAAARADAEQAFAGALAAIAHAAIAAAFg");
	this.shape_3.setTransform(71.775,20.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLBgIgRgFQgOgFgEAAQgCAAgDADQgCACgBAGIgEAAIAAhAIAEAAQAEAUAGAKQAGAKAMAHQAMAGAOAAQARAAAKgJQAKgJAAgMQAAgHgDgHQgEgHgIgGIgcgRQgYgNgKgIQgKgHgFgKQgFgKgBgLQAAgUAQgOQAPgPAYAAQAOAAAQAHQAHAEAEAAQAEAAACgCQACgCABgHIAGAAIAABAIgGAAQgCgSgHgLQgGgLgMgHQgMgGgLAAQgOAAgJAJQgKAIAAALQAAAJAGAHQAJAKAfARQAaAOAJAHQAKAHAEAKQAGAKgBALQAAAWgQAPQgQAPgZAAIgPgBg");
	this.shape_4.setTransform(55.5,20.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AuDjHIcHAAIAAGPI8HAAg");
	this.shape_5.setTransform(90,20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AuDDIIAAmPIcHAAIAAGPg");
	this.shape_6.setTransform(90,20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CC6600").ss(5,1,1).p("AuDjHIcHAAIAAGPI8HAAg");
	this.shape_7.setTransform(90,20);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(5,1,1).p("AuDjHIcHAAIAAGPI8HAAg");
	this.shape_8.setTransform(90,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape_8},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,185,45);


(lib.SlideButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhOBdIAAgFIAGAAQAHAAAGgDQAEgDACgEQACgEAAgOIAAh3QgBgSgEgEQgEgGgMAAIgGAAIAAgFICNAAIADApIgGAAQgDgPgDgFQgDgGgIgCQgFgDgOAAIgyAAIAABKIApAAQAPAAAFgFQAIgGAAgQIAGAAIAAA/IgGAAQgCgNgBgEQgDgFgFgDQgGgCgLAAIgpAAIAAA9QAAAMACADQABACACACQADACAIAAIAfAAQAPAAAHgDQAHgCAHgGQAIgJAJgRIAFAAIgQAvg");
	this.shape.setTransform(120.95,20.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhcBdIAAgFIAHAAQALAAAFgIQADgEAAgQIAAh3QAAgRgEgFQgFgGgKAAIgHAAIAAgFIBLAAQApAAAVAKQAWAJANAWQANAWAAAdQAAAmgXAaQgbAdg1AAgAgohNIAACcQASAEAMAAQAeAAAVgWQAVgWAAgnQAAglgVgWQgVgWggAAQgMAAgQAEg");
	this.shape_1.setTransform(102.075,20.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgnBdIAAgFIAHAAQALAAAFgHQAEgEAAgRIAAh3QAAgOgCgEQgBgEgFgCQgGgEgGAAIgHAAIAAgFIBPAAIAAAFIgHAAQgLAAgGAHQgDAEAAARIAAB3QAAAOACAFQABADAFACQAFAEAHAAIAHAAIAAAFg");
	this.shape_2.setTransform(87.625,20.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhPBdIAAgFIAHAAQAMAAAFgIQADgEAAgQIAAh3QAAgRgEgFQgFgGgLAAIgHAAIAAgFIBTAAIAAAFQgNAAgGADQgGADgDAEQgCAFAAAQIAAB0QAAALACAEQACADAEACQADABARAAIANAAQAWAAAIgDQAJgDAHgIQAHgIAHgSIAFABIgQAzg");
	this.shape_3.setTransform(74.425,20.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLBgIgSgFQgNgFgDAAQgEAAgCADQgBACgBAGIgGAAIAAhAIAGAAQADAUAGAKQAGAKANAHQAMAGAOAAQAQAAALgJQAKgJAAgMQAAgHgFgHQgDgHgIgGIgcgRQgYgNgKgIQgKgHgGgKQgEgKAAgLQAAgUAPgOQAPgPAYAAQAOAAAQAHQAHAEAEAAQADAAADgCQACgCACgHIAEAAIAABAIgEAAQgDgSgGgLQgHgLgLgHQgNgGgLAAQgOAAgKAJQgJAIAAALQAAAJAGAHQAJAKAeARQAaAOAKAHQAKAHAFAKQAEAKABALQAAAWgQAPQgRAPgaAAIgOgBg");
	this.shape_4.setTransform(58.25,20.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AuDjHIcHAAIAAGPI8HAAg");
	this.shape_5.setTransform(90,20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AuDDIIAAmPIcHAAIAAGPg");
	this.shape_6.setTransform(90,20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(5,1,1).p("AuDjHIcHAAIAAGPI8HAAg");
	this.shape_7.setTransform(90,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,185,45);


(lib.Sand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("Eg6SAH0IAAsGQCGhVAKgIQAOAAEig2IE7g8IJNDNIHHgkQHMgnAggVQAggTFXgiQCrgRClgNIIsBtIKZgNIGgiMIMtA/IFGATIGtAAIGzgfIHaBfIDYA2IB5AAIAAMfg");
	this.shape.setTransform(373.075,49.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sand, new cjs.Rectangle(0,-0.1,746.2,100.1), null);


(lib.Rock = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// harvestable_resources_rock_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A6A495").s().p("AgjAFIAAgFIgOADQgXgWALgcIALAeQANACAGAKQAHAKAAANIBKgKIAPAQQgFAQgSAFIgOABQgLACgJAAQgoAAgDgrg");
	this.shape.setTransform(7.7104,54.3858);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C5AD81").s().p("Ag6AFIgBgBIAAgEQAzAKAxgWQADgDAHgBIAKAYQgcAJgbAAQggAAgggMg");
	this.shape_1.setTransform(20.95,21.0101);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#989176").s().p("Ag1BHIgFgDQAVgnAhhFIAXheQgLA2AFA4QAIBRAjBJIADAFQg+gTgygtg");
	this.shape_2.setTransform(31.85,39.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A9A89E").s().p("Ag5ALIBygoIABADIhKA4g");
	this.shape_3.setTransform(47.225,31.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#807D71").s().p("AgtB5QgTiMgHgFQgFgEgIgDIBLg5QAJAAAGgLQAHgLAAgRIAwAJQAUAWAEAeIgBADIgZBLIhRB0g");
	this.shape_4.setTransform(54.025,37.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A79674").s().p("AgkBKQgCgQgBhiQAWggALgiIAFAFIAfgSIgEAnIAOgDQgVARgCAbQAAAfAWAUQAKAIhFBgIgCAEQgLgQgDgeg");
	this.shape_5.setTransform(26.6685,34);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EDE6D8").s().p("AiLCdQgPhPAjhHQAlhLBIgnQBMgpBKgcIAFAFIgSAGQg5AkgoAzQgWAngmgEQgbgDgJAUQgTAQgQAXQguBLAOBYg");
	this.shape_6.setTransform(14.4477,24.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C7BCB1").s().p("AhXAzIgDgCIAWgZIAAgTQABgJAIgEQAmgcAogPIAfARQAdANAMAdIg0gcIgyAVIgGABQgVAIgKAVQgPAVgSAAIgGgBg");
	this.shape_7.setTransform(37.85,5.1843);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#92846B").s().p("Ag+ArIgFAAIgVgfIACgFIA3g9QAXgYAdgHIAGgBIA+AwIAAAGIhhBJIAIANIAAAhQgTgmgrgGg");
	this.shape_8.setTransform(39.55,18.9917);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B7AA8E").s().p("AgnBdIgghtIAAgPIAIALQBKgiAphJIADgEQABBjACAQQADAeALAPQhIBhgXAGg");
	this.shape_9.setTransform(17.1875,43.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#665F4A").s().p("AhTCQQAcgbAbgiQAbgiAIgqQgGAkAZAZIABABQBGg2hBhTIABgDQAKgkADgjQADgagCgaQAIAPAIARQAjBRgWBUQgCA6goApIADAOQALAmgcAcIgbAMIgPABQgogIgVgrg");
	this.shape_10.setTransform(59.2402,37.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8B8875").s().p("AggAyQgHgKgNgCIAAAAIA4gqIARhFIAgBtIgEAcIhLAKQAAgNgGgLg");
	this.shape_11.setTransform(7.9,48.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#91847B").s().p("AglBWIALgPIgKgZQAUg6AFg8IgLAAIAPgFIAKgBIAJgMIABATIgWAaIADACQAVAEARgZIgKAYIAQAVIgfBGIgnAog");
	this.shape_12.setTransform(29.725,14.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E4D9C5").s().p("AiCDDIgFhNQgNhZAuhJQAQgZATgQIAlA1IAhgvIAAgGIABABQA8AVA8gSIgKAPQgLAigWAfIgDAEQgpBJhKAiIgIgLIgBgOQgWBDgzBJIAAABgAAEhGIgqB3QAKgXAJgRQATgnAFgoIAAgDgAADhaIAaguQAng0A5gkIADgBIALAAQgFA8gUA7QgGABgEADQgiAQgjAAQgQAAgQgEg");
	this.shape_13.setTransform(14.5968,30.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5D5139").s().p("AgtDrQhRgMhQgJIANgCQATgEAFgRIgPgPIAEgcIAQAnQAYgGBIhhIACgEQBFhggJgHQAJgLgDARQgfBEgVAnQgfBJhGAiIgBABQA/AWBVgGIBHg5IgEgFIAJABQBFAbAkg/IAGABIAYAHIBSh1QgJAqgbAjQgbAhgdAcIigBLQgeAPggAAIgSgBgAjVAJIABAOIAAAPIgRBEIg5ArQAzhJAWhDgABJiQIBihLIgHAjIhSA0gACrjeIAAgCIgCgKIBlgBIABAAIgFACIgKAEQgaAKgbAAQgQAAgQgDg");
	this.shape_14.setTransform(31.275,37.6105);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#271E0F").s().p("AihBqICghLQAUAqAoAJIAPgCQgtAVgqgaIgEgDQgrAng5AAQgVAAgXgFgAB4ADIgEgOQApgpABg6QANA/ghA1IAAACQAJAvgtAOQAcgcgKgmg");
	this.shape_15.setTransform(50.9717,49.1354);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6D645B").s().p("AAfDBQgihJgIhSQgEg3ALg2IgZBdQADgQgLAKQgVgUAAgfQACgaAVgSIgOAEIAEgoIggASIAngoIAFgBIgCAFIAVAfIAFAAQAqAGATAmIAAAHQgPgXgbgNIgDgBIAEALQgdCLA6CEgAjAhpIABAAQgGAngUApQgIARgKAVgAC6g1QgIgigJggQgHgagdABIAIgiIAAgEQArAJAqgPIAKgFQgWAwgEA0IAAADQABARgIALQgGALgKAAg");
	this.shape_16.setTransform(34.3,33.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#756F59").s().p("Aj4B9IABgBQBGgjAfhIIAFADQAyAtA/ATIhIA4IgkABQg/AAgxgQgADUgDQgagZAHgkIAZhMQBABUhFA2g");
	this.shape_17.setTransform(40.6773,44.9905);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#908E81").s().p("Ag1ClQg7iEAfiLIgEgKIACABQAcAMAPAYIAAgHIgBgiIBRg0QAdgCAHAaQAJAhAIAhIhyApIAoATQAIADAFAEQAHAFATCMIgHgBQgZAsgpAAQgRAAgVgIg");
	this.shape_18.setTransform(43.6303,36.4237);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#746957").s().p("ABiBVIgwgJIAAgDQADgzAXgvIAFgCQAIACAJgBQAMAAAJgHQABAAABAAQAAAAABAAQAAAAABABQAAABAAAAQAMATABAaQACAbgDAZQgDAkgKAkQgEgfgUgWgAgsgoIgIgsQgPgfgZgJIgCABQgSANgYgFIA0gWIAzAdIAYAlIAJACQAsANAkAdIhlABg");
	this.shape_19.setTransform(50.3068,16.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#474136").s().p("AgMgIIAAgDIAWANIADAKg");
	this.shape_20.setTransform(47.1,13.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CEBEAF").s().p("AAigaIAFACIAIArIAAADIgjgaIgGAAQgeAHgWAYQAfgnAxgOg");
	this.shape_21.setTransform(41.075,10.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C8C0AB").s().p("Ai5A7QAJgTAaADQAnAEAXgnIgaAuIAAALIgiAvgABHgbIgPgVIAKgYQAKgVAVgIIAFgBQAZAFARgNIACgBQAZAJAPAfIgFgCQgyAOgfAoIg3A9IgFABg");
	this.shape_22.setTransform(26.375,15.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#979681").s().p("AA+A/IgBAAQgkgdgrgNIgKgCIgYgkQgMgdgdgOIgGgDIBLAUQBZAYAjBMQgJAHgMAAIgEAAIgNgBg");
	this.shape_23.setTransform(52.225,7.7313);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.7,61.2);


(lib.Mountain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACDE6IiDDiIiBjiIiDDiIi3k8IG5r7IG5L7IAFAAIi3E8g");
	this.shape.setTransform(-7.85,-200.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663333").s().p("EgisAeEMAisg8HMAitA8HgAEGr+IC3k8IgFAAIm5r8Im5L8IC3E8ICDjiICBDiICDjig");
	this.shape_1.setTransform(-7.95,-69.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230,-262.3,444.2,384.70000000000005);


(lib.JumpButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhGBdIAAgFIAHAAQAMAAAFgIQADgEAAgQIAAh3QAAgRgEgFQgFgGgLAAIgHAAIAAgFIBEAAQAYAAAPAGQAOAFAKAMQAKAMAAARQAAAWgPAPQgPANgcAAIgNgBIgRgDIAAA2QAAARAEAFQAFAGAKAAIAHAAIAAAFgAgRhOIAABNIANABIAJABQAOAAAKgKQAKgLAAgSQAAgMgEgKQgFgKgJgFQgJgGgMAAQgGAAgLADg");
	this.shape.setTransform(117.675,20.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AApBdIAAgFIAGAAQAMAAAFgHQADgFAAgPIAAh7IhHCbIgEAAIhIibIAAB7QAAARAEAEQAFAGALAAIAGAAIAAAFIhAAAIAAgFIAGAAQAMAAAFgHQADgFAAgPIAAh5QAAgMgDgFQgBgEgGgDQgFgDgLAAIAAgFIA0AAIBDCQIBCiQIA0AAIAAAFIgGAAQgMAAgFAIQgDAEAAAPIAAB5QAAARAEAEQAFAGALAAIAGAAIAAAFg");
	this.shape_1.setTransform(97.625,20.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgsBVQgQgLgGgSQgFgMAAgiIAAhHQAAgRgEgFQgFgGgLAAIgHAAIAAgFIBQAAIAAAFIgHAAQgLAAgFAHQgEAFAAAQIAABPQAAAMACAOQACANAGAIQAFAIAKAFQAJAFAOAAQASAAAOgIQAOgIAGgMQAFgNAAgdIAAhKQAAgSgEgEQgFgGgLAAIgHAAIAAgFIBCAAIAAAFIgHAAQgLAAgGAJQgDAFAAAPIAABKQAAAcgFAQQgGAPgQALQgQALgcAAQgdAAgQgKg");
	this.shape_2.setTransform(75.075,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgrBZQgHgHAAgIQAAgHAEgDQAEgEAGAAQAFAAADADQADACAGANQADAHAFAAQAEAAADgEQADgFAAgLIAAh+QAAgOgBgEQgCgEgEgCQgHgEgGAAIgGAAIAAgFIBOAAIAAAFIgHAAQgLAAgGAHQgCAEAAARIAABaQAAAVgFANQgFANgLAJQgLAKgPAAQgNAAgIgGg");
	this.shape_3.setTransform(59.8,20.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AuDjHIcHAAIAAGPI8HAAg");
	this.shape_4.setTransform(90,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AuDDIIAAmPIcHAAIAAGPg");
	this.shape_5.setTransform(90,20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(5,1,1).p("AuDjHIcHAAIAAGPI8HAAg");
	this.shape_6.setTransform(90,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,185,45);


(lib.CharMainBody = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AkllXIJLAAQAyAAAAAyIAAJLQAAAygyAAIpLAAQgyAAAAgyIAApLQAAgyAyAAgAESigQAAAcgUAUQgUAUgbAAQgcAAgUgUQgUgUAAgcQAAgcAUgUQAUgUAcAAQAbAAAUAUQAUAUAAAcg");
	this.shape.setTransform(34.35,34.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvAwQgUgUAAgcQAAgbAUgUQAUgUAbAAQAcAAAUAUQAUAUAAAbQAAAcgUAUQgUAUgcAAQgbAAgUgUg");
	this.shape_1.setTransform(55,18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000CC").s().p("AkkFXQgzAAAAgxIAApKQAAgzAzAAIJKAAQAxAAAAAzIAAJKQAAAxgxAAgACfjQQgVAUABAcQgBAcAVAVQATATAcABQAdgBATgTQAVgVAAgcQAAgcgVgUQgTgTgdAAQgcAAgTATg");
	this.shape_2.setTransform(34.35,34.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,73.7,73.7);


(lib.CharLegTop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAiZIAAEz");
	this.shape.setTransform(0,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.6,5,35.7);


(lib.CharLegBottom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAiZIAAEz");
	this.shape.setTransform(0,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.6,5,35.7);


(lib.CharArm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Ah+iKIAAEVID9AA");
	this.shape.setTransform(12.675,13.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,30.4,32.9);


(lib.BirdWing = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9900CC").s().p("AiQDDIEhmFIAAGFg");
	this.shape.setTransform(14.5,19.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BirdWing, new cjs.Rectangle(0,0,29,39.1), null);


(lib.BirdMainBody = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1,3,true).p("AAaAAQAAALgIAIQgHAHgLAAQgKAAgIgHQgHgIAAgLQAAgKAHgIQAIgHAKAAQALAAAHAHQAIAIAAAKg");
	this.shape.setTransform(22.6,7.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRASQgIgHAAgLQAAgKAIgIQAHgHAKAAQALAAAIAHQAHAIAAAKQAAALgHAHQgIAIgLAAQgKAAgHgIg");
	this.shape_1.setTransform(22.6,7.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660099").s().p("AnBBkIDIjHIK7AAIAADHgAjxgrQgIAIAAALQAAALAIAHQAHAHALAAQALAAAIgHQAHgHAAgLQAAgLgHgIQgIgHgLAAQgLAAgHAHg");
	this.shape_2.setTransform(45,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BirdMainBody, new cjs.Rectangle(0,0,90,20), null);


(lib.Mountainrange = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Mountain("synched",0);
	this.instance.setTransform(929.25,275.35,0.5206,0.5206,0,0,0,-7.8,-69.9);

	this.instance_1 = new lib.Mountain("synched",0);
	this.instance_1.setTransform(827.2,253.45,0.5206,0.5206,0,0,0,-7.8,-69.9);

	this.instance_2 = new lib.Mountain("synched",0);
	this.instance_2.setTransform(731.35,266.55,0.5206,0.5206,0,0,0,-7.8,-69.9);

	this.instance_3 = new lib.Mountain("synched",0);
	this.instance_3.setTransform(426.15,253.45,0.5206,0.5206,0,0,0,-7.8,-69.9);

	this.instance_4 = new lib.Mountain("synched",0);
	this.instance_4.setTransform(226.6,196.4,1.02,1.02,0,0,0,-7.9,-69.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mountainrange, new cjs.Rectangle(0,0,1044.8,392.5), null);


(lib.Foreground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Sand();
	this.instance.setTransform(1113.6,55.2,1,1,0,0,0,371.2,49.9);

	this.instance_1 = new lib.Sand();
	this.instance_1.setTransform(371.2,55.2,1,1,0,0,0,371.2,49.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Foreground, new cjs.Rectangle(0,5.2,1488.6,100.1), null);


(lib.CharSliding = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("slidewav");
	}
	this.frame_74 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(72).call(this.frame_74).wait(1));

	// Arm
	this.instance = new lib.CharArm("synched",0);
	this.instance.setTransform(21.05,25.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:45,x:21.1,y:25.55},21,cjs.Ease.quadOut).wait(27).to({startPosition:0},0).to({rotation:0,x:21.05,y:25.35},26).wait(1));

	// Main_Body
	this.main_body = new lib.CharMainBody("synched",0);
	this.main_body.name = "main_body";

	this.timeline.addTween(cjs.Tween.get(this.main_body).wait(75));

	// Left_Leg_Top_copy
	this.instance_1 = new lib.CharLegTop("synched",0);
	this.instance_1.setTransform(33.85,68.85,1,1,-35.4954);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-0.1,regY:0.1,rotation:-65.4948,y:68.95},20).to({regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-79.6344,x:33.75,y:68.9},31).to({regX:0,scaleX:1,scaleY:1,rotation:-35.4954,x:33.85,y:68.85},23).wait(1));

	// Left_Leg_Bottom_copy
	this.instance_2 = new lib.CharLegBottom("synched",0);
	this.instance_2.setTransform(51.6,93.8,1,1,39.4653);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.9999,scaleY:0.9999,rotation:62.3021,x:56.3,y:89.3},9).to({scaleX:1,scaleY:1,rotation:90.2133,x:61.5,y:81.5},11).to({regX:0.1,regY:0.1,rotation:52.7353,x:63.65,y:74.55},31).to({scaleX:0.9999,scaleY:0.9999,rotation:45.8112,x:58,y:87.3},12).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:39.4653,x:51.6,y:93.8},11).wait(1));

	// Right_Leg_Top
	this.instance_3 = new lib.CharLegTop("synched",0);
	this.instance_3.setTransform(33.85,68.85,1,1,-35.4954);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-0.1,regY:0.1,rotation:-65.4948,y:68.95},20).wait(31).to({startPosition:0},0).to({regX:0,regY:0,rotation:-35.4954,y:68.85},23).wait(1));

	// Right_Leg_Bottom
	this.instance_4 = new lib.CharLegBottom("synched",0);
	this.instance_4.setTransform(51.6,93.8,1,1,39.4653);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.9999,scaleY:0.9999,rotation:62.3021,x:56.3,y:89.3},9).to({scaleX:1,scaleY:1,rotation:90.2133,x:61.5,y:81.5},11).wait(31).to({startPosition:0},0).to({rotation:39.4653,x:51.6,y:93.8},23).wait(1));

	// Audio
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC6600").ss(5,1,1).p("Aldj5IK7AAIAAHzIq7AAg");
	this.shape.setTransform(-127.925,40.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AldD6IAAnzIK7AAIAAHzg");
	this.shape_1.setTransform(-127.925,40.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(73));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.4,-2.5,236.60000000000002,122.4);


(lib.CharRunning = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_12 = function() {
		playSound("footstep_2wav");
	}
	this.frame_55 = function() {
		playSound("footstep_2_shortwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(43).call(this.frame_55).wait(20));

	// Arm
	this.instance = new lib.CharArm("synched",0);
	this.instance.setTransform(22.4,25.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:12.7,regY:13.9,rotation:5.2591,x:33.8,y:40.3},0).wait(1).to({rotation:10.5432,x:32.35,y:41.25},0).wait(1).to({rotation:15.6571,x:30.9,y:42.15},0).wait(1).to({rotation:20.4336,x:29.45,y:42.75},0).wait(1).to({rotation:24.7616,x:28.15,y:43.2},0).wait(1).to({rotation:28.5905,x:26.9,y:43.6},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:31.9161,x:25.85,y:43.8},0).wait(1).to({rotation:34.7634,x:24.9,y:43.95},0).wait(1).to({rotation:37.1713,x:24.1,y:44.05},0).wait(1).to({rotation:39.1835,x:23.45},0).wait(1).to({rotation:40.8425,x:22.9,y:44.1},0).wait(1).to({regX:0,regY:0,rotation:42.1878,x:22.4,y:25.3},0).wait(1).to({regX:12.7,regY:13.9,rotation:43.2285,x:22.1,y:44.15},0).wait(1).to({rotation:44.0273,x:21.85,y:44.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:44.6103,x:21.65,y:44.15},0).wait(1).to({regX:0,regY:0,rotation:45,x:22.35,y:25.35},0).wait(1).to({regX:12.7,regY:13.9,rotation:44.8009,x:21.55,y:44.1},0).wait(1).to({rotation:44.4533,x:21.65},0).wait(1).to({rotation:43.9485,x:21.85},0).wait(1).to({rotation:43.2775,x:22.05},0).wait(1).to({rotation:42.431,x:22.3},0).wait(1).to({rotation:41.3995,x:22.7,y:44.15},0).wait(1).to({rotation:40.1737,x:23.1,y:44.1},0).wait(1).to({rotation:38.7447,x:23.55},0).wait(1).to({rotation:37.1045,x:24.1,y:44.05},0).wait(1).to({rotation:35.2465,x:24.7,y:44},0).wait(1).to({rotation:33.1663,x:25.4,y:43.9},0).wait(1).to({rotation:30.8621,x:26.1,y:43.75},0).wait(1).to({rotation:28.3365,x:26.95,y:43.6},0).wait(1).to({rotation:25.5968,x:27.8,y:43.35},0).wait(1).to({rotation:22.6563,x:28.7,y:43.05},0).wait(1).to({rotation:19.5348,x:29.65,y:42.65},0).wait(1).to({rotation:16.2595,x:30.65,y:42.2},0).wait(1).to({rotation:12.864,x:31.65,y:41.7},0).wait(1).to({rotation:9.3876,x:32.65,y:41.05},0).wait(1).to({rotation:5.8734,x:33.6,y:40.45},0).wait(1).to({rotation:2.3663,x:34.5,y:39.7},0).wait(1).to({rotation:-1.09,x:35.3,y:38.95},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-4.4553,x:36.1,y:38.15},0).wait(1).to({scaleX:1,scaleY:1,rotation:-7.6943,x:36.8,y:37.35},0).wait(1).to({rotation:-10.7783,x:37.45,y:36.6},0).wait(1).to({rotation:-13.6854,x:38,y:35.8},0).wait(1).to({rotation:-16.4001,x:38.45,y:35.05},0).wait(1).to({rotation:-18.9127,x:38.85,y:34.35},0).wait(1).to({rotation:-21.2189,x:39.25,y:33.65},0).wait(1).to({rotation:-23.318,x:39.5,y:33},0).wait(1).to({rotation:-25.2126,x:39.75,y:32.5},0).wait(1).to({rotation:-26.9076,x:39.95,y:31.95},0).wait(1).to({regX:0.1,regY:0,rotation:-28.4094,x:22.45,y:25.3},0).wait(1).to({regX:12.7,regY:13.9,rotation:-29.7345,x:40.25,y:31.1},0).wait(1).to({rotation:-30.8807,x:40.35,y:30.8},0).wait(1).to({rotation:-31.8563,x:40.4,y:30.45},0).wait(1).to({rotation:-32.6696,x:40.45,y:30.2},0).wait(1).to({rotation:-33.3289,x:40.5,y:29.95},0).wait(1).to({rotation:-33.8422,x:40.55,y:29.85},0).wait(1).to({rotation:-34.2173,y:29.7},0).wait(1).to({regX:0.1,regY:0,rotation:-34.4614,x:22.35,y:25.35},0).to({rotation:1.2853,y:25.3},17,cjs.Ease.quadIn).wait(1));

	// Main_Body
	this.main_body = new lib.CharMainBody("synched",0);
	this.main_body.name = "main_body";
	this.main_body.setTransform(-0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.main_body).wait(75));

	// Left_Leg_Top_Tween_copy
	this.instance_1 = new lib.CharLegTop("synched",0);
	this.instance_1.setTransform(33.95,68.85,1,1,-37.7365);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-82.7362},12).to({regX:-0.1,rotation:-52.737,y:68.9},10).to({scaleX:0.9999,scaleY:0.9999,rotation:-50.5225},7).to({rotation:-30.0221,y:68.85},7).to({regY:0.1,rotation:33.1677,x:33.9,y:68.95},10).to({regX:-0.2,rotation:41.6503,x:33.85,y:68.85},10).to({rotation:15.2044,x:33.8,y:68.9},5).to({rotation:-14.7935},5).to({regX:-0.3,rotation:-37.0357,x:33.7,y:68.95},8).wait(1));

	// Left_Leg_Bottom_Tween_copy
	this.instance_2 = new lib.CharLegBottom("synched",0);
	this.instance_2.setTransform(52.65,93.1,1,1,39.1938);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-0.1,regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:26.8403,x:60.45,y:84.8},6).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:14.4877,x:64.6,y:73.15},6).to({regX:-0.1,regY:0.1,rotation:-21.9714,x:58.95,y:88.3},10).to({rotation:2.4987,y:88.25},4).to({regY:0.2,scaleX:0.9999,scaleY:0.9999,rotation:13.0194,x:57.4,y:88.75},3).to({regX:-0.2,rotation:43.0181,x:49.1,y:95.45},7).to({regY:0.4,scaleX:0.9998,scaleY:0.9998,rotation:52.723,x:36,y:99.85},4).to({regY:0.2,scaleX:0.9999,scaleY:0.9999,rotation:43.0181,x:17.3,y:94.5},6).to({x:13.1,y:91.9},10).to({rotation:49.5155,x:26.2,y:98.3},5).to({x:41.35,y:98.4},5).to({regX:-0.1,rotation:39.7796,x:52,y:93.2},8).wait(1));

	// Right_Leg_Top_Tween
	this.instance_3 = new lib.CharLegTop("synched",0);
	this.instance_3.setTransform(33.95,68.85,0.9999,0.9999,-37.2522,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:0.1,rotation:33.1677,x:33.9,y:68.95},10).to({regX:-0.2,rotation:41.6503,x:33.85,y:68.85},10).to({rotation:15.2041,x:33.8,y:68.9},5).to({rotation:-14.7944},5).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-37.7365,x:33.95,y:68.85},8).to({rotation:-82.7362},12).to({regX:-0.1,rotation:-52.737,y:68.9},10).to({scaleX:0.9999,scaleY:0.9999,rotation:-50.5225},7).to({rotation:-36.9607,y:68.85},7).wait(1));

	// Right_Leg_Bottom_Tween
	this.instance_4 = new lib.CharLegBottom("synched",0);
	this.instance_4.setTransform(52.15,93.15,0.9999,0.9999,38.9824,0,0,-0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-0.2,regY:0.4,scaleX:0.9998,scaleY:0.9998,rotation:52.723,x:37.9,y:99.7},4).to({regY:0.5,rotation:47.8713,x:26.85,y:99},3).to({regY:0.2,scaleX:0.9999,scaleY:0.9999,rotation:43.0181,x:17.3,y:94.5},3).to({x:13.1,y:91.9},10).to({rotation:49.5154,x:25.45,y:98.45},5).to({x:41.35,y:98.4},5).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:39.1938,x:52.65,y:93.1},8).to({regX:-0.1,regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:26.8403,x:60.45,y:84.8},6).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:14.4877,x:64.6,y:73.15},6).to({regX:-0.1,regY:0.1,rotation:-21.9714,x:58.95,y:88.3},10).to({rotation:2.4987,y:88.25},4).to({regY:0.2,scaleX:0.9999,scaleY:0.9999,rotation:13.0194,x:57.4,y:88.75},3).to({regX:-0.2,rotation:39.8219,x:51.9,y:93.3},7).wait(1));

	// Footstep_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC6600").ss(5,1,1,3,true).p("Aldj5IK7AAIAAHzIq7AAg");
	this.shape.setTransform(-130,38.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AldD6IAAnzIK7AAIAAHzg");
	this.shape_1.setTransform(-130,38.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},12).to({state:[{t:this.shape_1},{t:this.shape}]},43).to({state:[{t:this.shape_1},{t:this.shape}]},19).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.5,-2.5,240.5,124.3);


(lib.CharJumping = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		playSound("jumpwav");
	}
	this.frame_74 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(73).call(this.frame_74).wait(1));

	// Arm
	this.instance = new lib.CharArm("synched",0);
	this.instance.setTransform(22.8,25.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:45,x:22.7,y:25.25},36,cjs.Ease.quadOut).to({rotation:0,x:22.8,y:25.35},38,cjs.Ease.quadIn).wait(1));

	// Main_Body
	this.main_body = new lib.CharMainBody("synched",0);
	this.main_body.name = "main_body";

	this.timeline.addTween(cjs.Tween.get(this.main_body).wait(75));

	// Left_Leg
	this.ikNode_26 = new lib.CharLegTop("synched",0);
	this.ikNode_26.name = "ikNode_26";
	this.ikNode_26.setTransform(33.8,67.15,0.9944,0.9944,-37.8587,0,0,-1.2,0.5);

	this.ikNode_27 = new lib.CharLegBottom("synched",0);
	this.ikNode_27.name = "ikNode_27";
	this.ikNode_27.setTransform(52.45,91.45,0.9942,0.9942,39.5193,0,0,-0.2,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:39.5193,x:52.45,y:91.45,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9944,scaleY:0.9944,rotation:-37.8587,y:67.15,x:33.8,regY:0.5}}]}).to({state:[{t:this.ikNode_27,p:{scaleX:0.9941,scaleY:0.9941,rotation:41.6046,x:50.95,y:94.55,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-34.7417,y:69,x:33.8,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:43.6828,x:49.6,y:95.65,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-31.6057,y:69.15,x:33.85,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:45.7611,x:48.05,y:96.6,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-28.4686,y:69.2,x:33.85,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9941,scaleY:0.9941,rotation:47.8392,x:46.55,y:97.55,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-25.3322,y:69.3,x:33.8,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:49.9179,x:45,y:98.35,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-22.1956,y:69.45,x:33.85,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9941,scaleY:0.9941,rotation:51.9956,x:43.55,y:99.1,regX:-0.1,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-19.0592,y:69.55,x:33.75,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9941,scaleY:0.9941,rotation:54.0737,x:41.85,y:99.75,regX:-0.1,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-15.922,y:69.7,x:33.8,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9941,scaleY:0.9941,rotation:56.1514,x:40.2,y:100.25,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-12.786,y:69.75,x:33.8,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:58.2293,x:38.5,y:100.7,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-9.65,y:69.85,x:33.85,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:60.3061,x:36.85,y:101.05,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-6.5128,y:70,x:33.8,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9941,scaleY:0.9941,rotation:62.3848,x:35.1,y:101.1,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-3.3784,y:69.95,x:33.8,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:64.463,x:33.4,y:101,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-0.2444,y:69.95,x:33.8,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:66.541,x:31.65,y:100.85,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:2.887,y:69.9,x:33.7,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:68.6199,x:30.15,y:100.65,regX:-0.2,regY:1.8}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:6.0227,y:69.85,x:33.7,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:70.6971,x:28.35,y:100.35,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:9.1572,y:69.85,x:33.7,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:72.7757,x:26.7,y:100,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:12.2913,y:69.75,x:33.75,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:74.8533,x:25.05,y:99.55,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:15.4262,y:69.75,x:33.6,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:76.9306,x:23.4,y:99,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:18.5612,y:69.65,x:33.6,regY:0.4}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:79.0095,x:21.9,y:98.45,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:21.6989,y:69.6,x:33.75,regY:0.4}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:81.0884,x:20.4,y:97.85,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:24.835,y:69.75,x:33.75,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:83.1675,x:18.9,y:97.1,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:27.9714,y:69.75,x:33.75,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:85.2458,x:17.45,y:96.3,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:31.1085,y:69.9,x:33.9,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9941,scaleY:0.9941,rotation:87.3239,x:16,y:95.5,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:34.2461,y:69.9,x:33.85,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:89.402,x:14.7,y:94.5,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:37.3823,y:69.95,x:34,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:91.4723,x:13.35,y:93.55,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:40.5195,y:69.9,x:33.9,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:93.5453,x:12,y:92.5,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:43.6563,y:69.95,x:33.9,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:95.6188,x:10.75,y:91.4,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:46.7922,y:69.9,x:33.85,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:97.6932,x:9.75,y:90.2,regX:-0.2,regY:1.8}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:49.9285,y:69.95,x:33.7,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9941,scaleY:0.9941,rotation:99.7719,x:8.75,y:88.8,regX:-0.2,regY:1.8}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:53.064,y:69.85,x:33.95,regY:0.4}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:101.8506,x:7.65,y:87.3,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:56.1992,y:69.75,x:33.9,regY:0.4}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:103.9292,x:6.8,y:85.75,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:59.3336,y:69.8,x:33.95,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:106.0087,x:6.1,y:84.1,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:62.4703,y:69.85,x:33.95,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:108.0876,x:5.25,y:82.55,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:65.6065,y:69.8,x:33.8,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:110.1669,x:4.55,y:81,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:68.7425,y:70,x:33.7,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:112.2462,x:3.95,y:79.4,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:71.8787,y:69.95,x:33.55,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9941,scaleY:0.9941,rotation:114.3251,x:3.5,y:77.75,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:75.0145,y:70.05,x:33.4,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:112.3555,x:3.85,y:79.45,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:72.0461,y:70.05,x:33.5,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9941,scaleY:0.9941,rotation:110.3867,x:4.45,y:81,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:69.0751,y:70.1,x:33.45,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:108.4172,x:5.05,y:82.45,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:66.1055,y:70.1,x:33.5,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:106.4482,x:5.7,y:84.05,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:63.1373,y:70.1,x:33.55,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:104.4788,x:6.45,y:85.5,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:60.1678,y:70.05,x:33.55,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:102.51,x:7.4,y:86.95,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:57.1982,y:70,x:33.65,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:100.5418,x:8.3,y:88.5,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:54.2282,y:70.35,x:33.65,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:98.5736,x:9.4,y:90,regX:-0.2,regY:1.8}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:51.2611,y:70.55,x:33.65,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:96.6066,x:10.3,y:91.45,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:48.2915,y:70.8,x:33.75,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:94.6386,x:11.45,y:92.95,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:45.3227,y:71,x:33.75,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9941,scaleY:0.9941,rotation:92.6735,x:12.65,y:93.45,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:42.3516,y:70.4,x:33.75,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:90.7088,x:13.85,y:93.9,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:39.3809,y:69.8,x:33.85,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:88.7485,x:15.15,y:94.3,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:36.4107,y:69.15,x:33.95,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:86.7832,x:16.45,y:94.65,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:33.4394,y:68.55,x:33.95,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:84.8142,x:17.85,y:95.75,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:30.4705,y:68.9,x:33.9,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:82.846,x:19.35,y:96.9,regX:-0.2,regY:1.8}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:27.501,y:69.25,x:33.9,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:80.8763,x:20.65,y:98,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:24.5308,y:69.6,x:33.9,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:78.9069,x:22.1,y:98.95,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:21.5619,y:69.8,x:34,regY:0.4}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:76.9379,x:23.6,y:99.9,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:18.5918,y:70.2,x:33.85,regY:0.4}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:74.9698,x:25.15,y:100.05,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:15.6227,y:70,x:33.9,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:73.0007,x:26.75,y:100.2,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:12.6527,y:69.75,x:33.9,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9941,scaleY:0.9941,rotation:71.0319,x:28.3,y:100.2,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:9.6831,y:69.4,x:33.85,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:69.064,x:30.1,y:100.15,regX:-0.2,regY:1.8}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:6.7137,y:69.05,x:33.85,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9941,scaleY:0.9941,rotation:67.0943,x:31.5,y:100.1,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:3.7432,y:68.75,x:33.8,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:65.1271,x:33.2,y:100.25,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:0.7755,y:69,x:33.9,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9941,scaleY:0.9941,rotation:63.1581,x:34.7,y:100.4,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-2.1855,y:69.15,x:33.8,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9941,scaleY:0.9941,rotation:61.1891,x:36.4,y:100.5,regX:-0.1,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-5.1542,y:69.25,x:33.8,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:59.2207,x:37.95,y:100.4,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-8.1209,y:69.4,x:33.75,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:57.2531,x:39.45,y:100.25,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-11.0883,y:69.65,x:33.8,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:55.2835,x:41.05,y:99.9,regX:-0.1,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-14.0588,y:69.5,x:33.7,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:53.3151,x:42.65,y:99.3,regX:-0.1,regY:1.8}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-17.027,y:69.4,x:33.7,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:51.3469,x:44.05,y:98.7,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-19.9981,y:69.25,x:33.7,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9941,scaleY:0.9941,rotation:49.3776,x:45.5,y:98.05,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-22.9666,y:69.05,x:33.65,regY:0.4}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9941,scaleY:0.9941,rotation:47.4091,x:47,y:97.25,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-25.9374,y:69.05,x:33.75,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9941,scaleY:0.9941,rotation:45.439,x:48.45,y:96.4,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-28.9069,y:69.1,x:33.7,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:43.472,x:49.85,y:95.35,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-31.8758,y:68.95,x:33.7,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9942,scaleY:0.9942,rotation:41.5019,x:51.1,y:94.4,regX:-0.2,regY:1.9}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-34.8459,y:68.8,x:33.65,regY:0.5}}]},1).to({state:[{t:this.ikNode_27,p:{scaleX:0.9941,scaleY:0.9941,rotation:39.5339,x:52.5,y:93.3,regX:-0.2,regY:1.8}},{t:this.ikNode_26,p:{scaleX:0.9943,scaleY:0.9943,rotation:-37.8161,y:68.7,x:33.65,regY:0.5}}]},1).wait(1));

	// Right_Leg
	this.ikNode_26_1 = new lib.CharLegTop("synched",0);
	this.ikNode_26_1.name = "ikNode_26_1";
	this.ikNode_26_1.setTransform(32.95,67.5,0.9953,0.9953,-37.8644,0,0,-1.4,0.1);

	this.ikNode_27_1 = new lib.CharLegBottom("synched",0);
	this.ikNode_27_1.name = "ikNode_27_1";
	this.ikNode_27_1.setTransform(52.15,91.85,0.995,0.995,39.5243,0,0,-0.1,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:39.5243,x:52.15,y:91.85,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.4,rotation:-37.8644,x:32.95,y:67.5,scaleX:0.9953,scaleY:0.9953}}]}).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:40.6028,x:52.85,y:93.15,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-39.2578,x:33.75,y:69.05,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:41.6802,x:53.5,y:92.85,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.6,rotation:-40.6385,x:33.65,y:69.25,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:42.7582,x:54,y:92.6,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-42.019,x:33.7,y:69.35,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:43.8355,x:54.65,y:92.15,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.6,rotation:-43.3991,x:33.65,y:69.55,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:44.9136,x:55.15,y:91.9,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-44.7795,x:33.7,y:69.6,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:45.9911,x:55.75,y:91.45,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.6,rotation:-46.1598,x:33.55,y:69.85,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:47.0677,x:56.25,y:91.05,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-47.5407,x:33.6,y:69.95,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:48.1462,x:56.75,y:90.65,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-48.9213,x:33.65,y:70.15,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:49.2239,x:57.35,y:90.1,regY:1.6}},{t:this.ikNode_26_1,p:{regX:-1.4,rotation:-50.3017,x:33.7,y:70.25,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:50.3007,x:57.85,y:89.65,regY:1.6}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-51.6826,x:33.6,y:70.45,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:51.3789,x:58.2,y:89.05,regY:1.6}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-53.0625,x:33.65,y:70.45,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:52.4579,x:58.6,y:88.5,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.4,rotation:-54.4443,x:33.75,y:70.3,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:53.5357,x:59.05,y:87.8,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-55.8251,x:33.7,y:70.3,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:54.6137,x:59.4,y:87.2,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-57.2058,x:33.75,y:70.25,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:55.6911,x:59.85,y:86.45,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-58.5878,x:33.7,y:70.2,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:56.7693,x:60.3,y:85.7,regY:1.6}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-59.9676,x:33.8,y:70.15,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:57.8467,x:60.55,y:85.1,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-61.3492,x:33.8,y:70.05,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:58.9249,x:60.95,y:84.4,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.6,rotation:-62.7302,x:33.8,y:70.05,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:60.0023,x:61.35,y:83.7,regY:1.6}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-64.1118,x:33.85,y:70.05,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:61.0804,x:61.6,y:83.1,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-65.4927,x:33.9,y:70.1,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:62.1569,x:61.95,y:82.4,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-66.8752,x:33.85,y:70.2,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:63.2369,x:62.25,y:81.7,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-68.2558,x:33.85,y:70.3,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:64.3133,x:62.45,y:81,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-69.638,x:33.9,y:70.3,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:65.3927,x:62.75,y:80.3,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-71.0189,x:33.85,y:70.4,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:66.47,x:62.9,y:79.75,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-72.3998,x:33.8,y:70.35,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:67.547,x:63.05,y:79.15,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.6,rotation:-73.7812,x:33.7,y:70.6,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:68.6261,x:63.15,y:78.6,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.6,rotation:-75.1614,x:33.7,y:70.55,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:69.7035,x:63.3,y:78,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-76.5418,x:33.65,y:70.5,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:70.7812,x:63.5,y:77.1,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.4,rotation:-77.9227,x:33.65,y:70.25,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:71.8582,x:63.75,y:76.25,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.4,rotation:-79.3027,x:33.75,y:70.05,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:72.9359,x:63.9,y:75.35,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.4,rotation:-80.6837,x:33.75,y:69.95,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:74.0153,x:64.1,y:74.4,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-82.0642,x:33.8,y:69.95,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:75.0914,x:64.2,y:73.75,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-83.4432,x:33.8,y:69.9,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:76.1669,x:64.3,y:73.05,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-84.8235,x:33.75,y:69.9,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:77.2425,x:64.45,y:72.3,regY:1.6}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-86.2024,x:33.75,y:69.9,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:78.3211,x:64.4,y:71.65,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-87.5819,x:33.75,y:69.9,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:77.3012,x:64.4,y:72.4,regY:1.6}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-86.2728,x:33.7,y:70,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:76.283,x:64.2,y:73.15,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-84.9653,x:33.7,y:70.05,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:75.2622,x:64.05,y:73.95,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-83.6571,x:33.7,y:70.15,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:74.243,x:63.95,y:74.7,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-82.3481,x:33.7,y:70.25,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:73.2225,x:63.85,y:75.45,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.4,rotation:-81.0395,x:33.75,y:70.25,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:72.2006,x:63.65,y:76.2,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.4,rotation:-79.7315,x:33.7,y:70.25,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:71.1799,x:63.6,y:77.15,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.4,rotation:-78.421,x:33.65,y:70.45,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:70.1583,x:63.5,y:78.05,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-77.1103,x:33.75,y:70.7,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:69.1388,x:63.35,y:79,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.4,rotation:-75.7991,x:33.8,y:70.8,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:68.1168,x:63.2,y:79.95,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.6,rotation:-74.4897,x:33.75,y:71.25,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:67.0968,x:63,y:79.95,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.6,rotation:-73.1783,x:33.8,y:70.6,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:66.0759,x:62.8,y:80,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-71.8703,x:33.8,y:69.95,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:65.0534,x:62.5,y:80,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-70.5611,x:33.8,y:69.3,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:64.0334,x:62.4,y:80,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-69.2501,x:33.75,y:68.75,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:63.0121,x:62.15,y:81,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-67.9409,x:33.8,y:69.05,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:61.991,x:61.85,y:82.1,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-66.6308,x:33.8,y:69.35,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:60.9703,x:61.6,y:83,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-65.3217,x:33.85,y:69.7,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:59.9495,x:61.4,y:84,regY:1.6}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-64.0105,x:33.8,y:70.1,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:58.9276,x:61.05,y:85,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.6,rotation:-62.7003,x:33.8,y:70.55,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:57.9072,x:60.7,y:85.35,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-61.3905,x:33.9,y:70.1,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:56.8856,x:60.35,y:85.65,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-60.08,x:33.9,y:69.85,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:55.8639,x:60.05,y:85.95,regY:1.6}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-58.7702,x:33.95,y:69.5,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:54.8438,x:59.55,y:86.3,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-57.4595,x:33.9,y:69.15,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:53.8225,x:59.15,y:86.6,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-56.1491,x:33.95,y:68.85,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:52.8008,x:58.7,y:87.25,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.4,rotation:-54.8389,x:33.95,y:68.9,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:51.7797,x:58.25,y:88.05,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-53.5294,x:33.9,y:69.05,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:50.7583,x:57.85,y:88.65,regY:1.6}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-52.2207,x:33.9,y:69.2,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:49.7375,x:57.45,y:89.3,regY:1.6}},{t:this.ikNode_26_1,p:{regX:-1.4,rotation:-50.9102,x:33.85,y:69.25,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:48.7163,x:56.9,y:90.1,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.4,rotation:-49.6008,x:33.95,y:69.3,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.995,scaleY:0.995,rotation:47.6957,x:56.4,y:90.5,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-48.2902,x:33.8,y:69.25,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:46.6754,x:55.9,y:90.85,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-46.9819,x:33.85,y:69.15,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:45.6549,x:55.45,y:91.25,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-45.6709,x:33.8,y:69.05,scaleX:0.9953,scaleY:0.9953}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:44.6347,x:54.95,y:91.65,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-44.3621,x:33.85,y:68.9,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:43.6149,x:54.45,y:92,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-43.0523,x:33.8,y:68.8,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:42.5941,x:53.95,y:92.35,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-41.7427,x:33.85,y:68.7,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:41.5738,x:53.45,y:92.7,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.6,rotation:-40.4327,x:33.7,y:68.75,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:40.553,x:52.85,y:93,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.5,rotation:-39.1242,x:33.85,y:68.5,scaleX:0.9952,scaleY:0.9952}}]},1).to({state:[{t:this.ikNode_27_1,p:{scaleX:0.9949,scaleY:0.9949,rotation:39.5332,x:52.3,y:93.4,regY:1.7}},{t:this.ikNode_26_1,p:{regX:-1.6,rotation:-37.8157,x:33.65,y:68.5,scaleX:0.9953,scaleY:0.9953}}]},1).wait(1));

	// Sound
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC6600").ss(5,1,1,3,true).p("Aldj5IK7AAIAAHzIq7AAg");
	this.shape.setTransform(-129.5,37.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AldD6IAAnzIK7AAIAAHzg");
	this.shape_1.setTransform(-129.5,37.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(74));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167,-2.5,238.2,121.9);


(lib.Bird = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Wing
	this.instance = new lib.BirdWing();
	this.instance.setTransform(33.75,11.65,1,1.0667,0,0,0,14.5,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:14.4,regY:38.9,scaleY:0.6351,skewX:110.1167,x:33.65,y:11.5},28,cjs.Ease.quadInOut).to({regX:14.5,regY:39,scaleY:1.0667,skewX:0,x:33.75,y:11.65},30,cjs.Ease.quadInOut).wait(2));

	// Main_Body
	this.instance_1 = new lib.BirdMainBody();
	this.instance_1.setTransform(25,10,1,1,0,0,0,45,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-29.9,97.4,49.9);


(lib.Mountainranges = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Mountainrange();
	this.instance.setTransform(1567.2,196.2,1,1,0,0,0,522.4,196.2);

	this.instance_1 = new lib.Mountainrange();
	this.instance_1.setTransform(522.4,196.2,1,1,0,0,0,522.4,196.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mountainranges, new cjs.Rectangle(0,0,2089.6,392.5), null);


(lib.ForegroundLoop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Foreground
	this.instance = new lib.Foreground();
	this.instance.setTransform(730.75,263,1,1,0,0,0,744.2,52.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-8.8},199).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-753,215.6,2228.1,100.1);


(lib.BackgroundLoop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Background
	this.instance = new lib.Mountainranges();
	this.instance.setTransform(1013.3,92.75,1,1,0,0,0,1044.8,196.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-30.5},2999).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1075.3,-103.4,3133.3999999999996,392.4);


// stage content:
(lib._62FinalProjectMilestone4MichaelBetancourt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		// Debug
		var show_collision = false;
		
		
		
		// Globals
		var _this = this;
		var game_started = false;
		var game_ended = false;
		var collision_display = null;
		var game_loop_listener = null;
		var spawn_enemy = 300;
		var ticks_since_last_enemy = spawn_enemy;
		
		
		/*
		Set up initial screen
		*/
		function initialize() {
			_this.game_over_text.visible = false;
			_this.char_run.gotoAndStop(0);
			_this.char_jump.gotoAndStop(0);
			_this.char_slide.gotoAndStop(0);
			_this.foreground.gotoAndStop(0);
			_this.background.gotoAndStop(0);
		
			_this.char_run.visible = true;
			_this.slide_button.visible = false;
			_this.jump_button.visible = false;
			_this.char_jump.visible = false;
			_this.char_slide.visible = false;
		}
		initialize();
		
		
		/*
		Start game loop and remove start button
		*/
		function start_game() {
			if (show_collision && collision_display == null) {
				collision_display = new createjs.Shape();
				_this.addChild(collision_display);
			}
			
			game_started = true;
			game_ended = false;
			_this.foreground.gotoAndPlay(0);
			_this.background.gotoAndPlay(0);
			_this.start_button.visible = false;
			_this.jump_button.visible = true;
			_this.slide_button.visible = true;
			reset_character();
			game_loop_listener = createjs.Ticker.on("tick", game_loop);
		}
		
		
		/*
		Reset character back to running
		*/
		reset_character = function() {
			running = true;
			jumping = false;
			sliding = false;
			_this.char_run.gotoAndPlay(0);
			_this.char_jump.visible = false;
			_this.char_slide.visible = false;
			_this.char_run.visible = true;
		}
		
		/*
		Jump action
		*/
		function jump() {
			if (game_started && !game_ended && running) {
				jumping = true;
				running = false;
				var char_jump = _this.char_jump;
				_this.char_run.stop()
				_this.char_run.visible = false;
				_this.char_slide.visible = false;
				char_jump.visible = true;
				char_jump.gotoAndPlay(0);
				createjs.Tween.get(char_jump).to({
						x: char_jump.x,
						y: char_jump.main_body.nominalBounds.height,
					}, 625, createjs.Ease.quadOut)
					.to({
						x: char_jump.x,
						y: char_jump.y,
					}, 625, createjs.Ease.quadIn)
					.call(function() {reset_character();});
			}
		}
		
		/*
		slide action
		*/
		function slide(){
			if (game_started && !game_ended && running) {
				sliding = true;
				running = false;
				var char_slide = _this.char_slide;
				_this.char_run.stop()
				_this.char_run.visible = false;
				_this.char_jump.visible = false;
				char_slide.visible = true;
				char_slide.gotoAndPlay(0);
				createjs.Tween.get(char_slide).to({
						x: char_slide.x,
						y: char_slide.y + char_slide.main_body.nominalBounds.height/3,
					}, 300)
					.wait(475)
					.to({
						x: char_slide.x,
						y: char_slide.y,
					}, 400)
					.call(function() {reset_character();});
			}
		}
		
		/*
		Key board actions
		*/
		function key_press_handler(e) {
			e = !e ? window.event : e;
		
			switch (e.key) {
				case " ":
					if (!game_started && !game_ended) {
						start_game()
					}
					else {
						jump();
					}
					break;
				case "c":
				case "C":
					slide();
					break;
			}
		}
		
		/*
		Assign jump to button
		*/
		_this.jump_button.on('click', jump);
		
		/*
		Assign slide to button
		*/
		_this.slide_button.on('click', slide);
		
		/*
		Capture keyboard presses
		*/
		document.onkeydown = key_press_handler;
		
		/*
		Assign start game button
		*/
		_this.start_button.on('click', start_game);
		
		// remove debug
		_this.stage.on("stagemousedown", function(evt) {
			console.log("stage clicked: " + evt.stageX + ", " + evt.stageY);
			var points = _this.globalToLocal(evt.stageX, evt.stageY);
			console.log(_this.stage.getObjectsUnderPoint(points.x, points.y));
		})
		
		
		function game_loop(e) {
			collision_detect();
			create_enemy();
		}
		
		function create_collision_box() {
			// Create hit box depending on current action
			var char_main_body;
			var gap = 2;
			if (running) {
				char_main_body = _this.char_run.main_body;
			}
			else if (sliding) {
				char_main_body = _this.char_slide.main_body;
			}
			else if (jumping) {
				char_main_body = _this.char_jump.main_body;
				gap = 4;
			}
			else {
				console.log("Error: Character movement unknown")
			}
			
			// Get main body points
			var char_main_body_point = char_main_body.parent.localToLocal(char_main_body.x, char_main_body.y, _this.parent);
			var scale = 0.9;
			
			var char_main_body_width = char_main_body.nominalBounds.width*_this.char_run.scaleX*scale;
			var char_main_body_height = char_main_body.nominalBounds.height*_this.char_run.scaleY*scale;
		
			// Create 4 collision points to check
			var collision_points = [
				new createjs.Point(char_main_body_point.x + gap, char_main_body_point.y + gap),
				new createjs.Point(char_main_body_point.x + char_main_body_width - gap, char_main_body_point.y + gap),
				new createjs.Point(char_main_body_point.x + gap, char_main_body_point.y + char_main_body_height - gap),
				new createjs.Point(char_main_body_point.x + char_main_body_width - gap,
								   char_main_body_point.y + char_main_body_height - gap)
			];
			
			// Show the collision box for debugging
			if (collision_display != null) {
				collision_display.graphics.clear();
			}
			if (show_collision) {
				collision_display.graphics.beginStroke("red");
				collision_display.graphics.moveTo(collision_points[0].x, collision_points[0].y)
					.lineTo(collision_points[1].x, collision_points[1].y)
					.lineTo(collision_points[3].x, collision_points[3].y)
					.lineTo(collision_points[2].x, collision_points[2].y)
					.lineTo(collision_points[0].x, collision_points[0].y);
			}
			
			return collision_points
		}
		
		// Detect when there is a collision with an enemy
		function collision_detect() {
			var points = create_collision_box();
		
			for (var i = 0; i < points.length; i++) {
				var objects = _this.stage.getObjectsUnderPoint(points[i].x, points[i].y);
		
				if (objects.filter((object) => object.parent.name == "enemy").length > 0) {
					game_over();
					return;
				}
				if (objects.filter((object) => object.parent.parent.name == "enemy").length > 0) {
					game_over();
					return;
				}
			}
		}
		
		// Handle the game over state
		function game_over() {
			game_ended = true;
			createjs.Tween.removeAllTweens();
			_this.char_run.stop();
			_this.char_jump.stop();
			_this.char_slide.stop();
			_this.foreground.stop();
			_this.background.stop();
			_this.jump_button.visible = false;
			_this.slide_button.visible = false;
			createjs.Ticker.off("tick", game_loop_listener);
			_this.game_over_text.visible = true;
		}
		
		// Enemy time and type randomizer
		function create_enemy() {
			ticks_since_last_enemy += 1;
			if (ticks_since_last_enemy > spawn_enemy) {
				ticks_since_last_enemy = 0;
				spawn_enemy = random(60, 300);
				var enemy = random(1, 2);
				switch(enemy) {
					case 1:
						create_rolling_rock();
						break;
					case 2:
						create_bird();
						break;
				}
				
			}
		}
		
		// Creates rolling rock obstacles
		function create_rolling_rock() {
			var rock = new lib.Rock();
			rock.x = lib.properties["width"] + rock.nominalBounds.width;
			rock.y = _this.jump_button.y - rock.nominalBounds.height/2 - 40;
			rock.regX = rock.nominalBounds.width/2;
			rock.regY = rock.nominalBounds.height/2; 
			rock.name = "enemy";
			_this.stage.addChild(rock);
			createjs.Tween.get(rock).to({
					x: lib.properties["width"]/2,
					y: rock.y + 20,
					rotation: -240,
					rotationDir: 0
				}, 1250)
				.to({
					x: 0 - rock.nominalBounds.width*2,
					y: rock.y - 20,
					rotation: -600,
					rotationDir: 0
				}, 1250)
				.call(function() {remove_child(rock);});
		}
		
		// Creates flying bird obstacles
		function create_bird() {
			var bird = new lib.Bird();
			var char_main_body_point = _this.char_run.main_body.localToLocal(
				_this.char_run.main_body.x, _this.char_run.main_body.y, _this.parent);
			bird.x = lib.properties["width"] + bird.nominalBounds.width;
			bird.y = char_main_body_point.y - 10;
			bird.name = "enemy";
			_this.stage.addChild(bird);
			createjs.Tween.get(bird).to({
					x: lib.properties["width"]/2,
					y: bird.y
				}, 1250)
				.to({
					x: 0 - bird.nominalBounds.width*2,
					y: bird.y,
				}, 1250)
				.call(function() {remove_child(bird);});
		}
		
		function remove_child(child) {
			_this.removeChild(child);
		}
		
		function random(min, max) {
			return Math.floor(Math.random()*(max-min+1)+min);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Enemies
	this.instance = new lib.Bird();
	this.instance.setTransform(555,320.1,1,1,0,0,0,-20,-29.9);

	this.instance_1 = new lib.Rock("synched",0);
	this.instance_1.setTransform(690.05,345.9,1,1,0,0,0,33.9,30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Controls
	this.game_over_text = new cjs.Text("GAME OVER", "48px 'Times New Roman'", "#FF0000");
	this.game_over_text.name = "game_over_text";
	this.game_over_text.textAlign = "center";
	this.game_over_text.lineHeight = 55;
	this.game_over_text.lineWidth = 293;
	this.game_over_text.parent = this;
	this.game_over_text.setTransform(360,48.05);
	this.game_over_text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.start_button = new lib.StartButton();
	this.start_button.name = "start_button";
	this.start_button.setTransform(270,130);
	new cjs.ButtonHelper(this.start_button, 0, 1, 2);

	this.slide_button = new lib.SlideButton();
	this.slide_button.name = "slide_button";
	this.slide_button.setTransform(8.25,250);
	new cjs.ButtonHelper(this.slide_button, 0, 1, 2);

	this.jump_button = new lib.JumpButton();
	this.jump_button.name = "jump_button";
	this.jump_button.setTransform(620,270,1,1,0,0,0,90,20);
	new cjs.ButtonHelper(this.jump_button, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.jump_button},{t:this.slide_button},{t:this.start_button},{t:this.game_over_text}]}).wait(1));

	// Character_slide
	this.char_slide = new lib.CharSliding();
	this.char_slide.name = "char_slide";
	this.char_slide.setTransform(51.05,165.6,0.6186,0.6189,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.char_slide).wait(1));

	// Character_Jump
	this.char_jump = new lib.CharJumping();
	this.char_jump.name = "char_jump";
	this.char_jump.setTransform(51.05,165.65,0.6186,0.6275,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.char_jump).wait(1));

	// Character_run
	this.char_run = new lib.CharRunning();
	this.char_run.name = "char_run";
	this.char_run.setTransform(-100.6,147.25,0.6186,0.6186,0,0,0,-245.6,-29.7);

	this.timeline.addTween(cjs.Tween.get(this.char_run).wait(1));

	// Foreground
	this.foreground = new lib.ForegroundLoop();
	this.foreground.name = "foreground";
	this.foreground.setTransform(734.35,259.9,1,1,0,0,0,730.8,265.6);

	this.timeline.addTween(cjs.Tween.get(this.foreground).wait(1));

	// Background
	this.background = new lib.BackgroundLoop();
	this.background.name = "background";
	this.background.setTransform(1016.65,113.8,1,1,0,0,0,1013.3,92.8);

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1));

	// Sky
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#37DDCA","#3B6DF3"],[0,0.69],0,360,0,-360).s().p("Eg4PAYOMAAAgwbMBwfAAAMAAAAwbg");
	this.shape.setTransform(360,155);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// stageBackground
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("Eg5zgY/MBznAAAMAAAAx/MhznAAAg");
	this.shape_1.setTransform(360,150);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Eg5zAZAMAAAgx/MBznAAAMAAAAx/g");
	this.shape_2.setTransform(360,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(307.8,67.6,1753.7,308.9);
// library properties:
lib.properties = {
	id: '6C2511ED50D475488C1893ACC4A52F10',
	width: 720,
	height: 300,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/footstep_2wav.mp3", id:"footstep_2wav"},
		{src:"sounds/footstep_2_shortwav.mp3", id:"footstep_2_shortwav"},
		{src:"sounds/jumpwav.mp3", id:"jumpwav"},
		{src:"sounds/slidewav.mp3", id:"slidewav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6C2511ED50D475488C1893ACC4A52F10'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;