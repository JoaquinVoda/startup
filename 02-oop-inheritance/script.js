function Movie(t, y, d) extend (Movie, EventEmitter) {
	this.title = t;
	this.year = y;
	this.duration = d;

	this.play = function(){
		console.log("Playing movie");
	}

	this.pause = function(){
		console.log("Movie paused");
	}

	this.resume = function(){
		console.log("Movie resumed");
	}
}

function EventEmitter(){

	this.on = function(ev, fc){
		this.event = ev;
		this.function = fc;
	}

	this.emit = function(ev, fc){

	}

	this.off = function(ev, fc){
		this.event = null;
		this.function = null;
	}
}

function Logger(){

	this.log = function(info){
		console.log(info);
	}
}

var social = function(){

	this.share(friendName){
		console.log("Share" + movie.title + "with" + friendName);
	}

	this.like(friendName){
		console.log(friendName + "likes" + movie.title);
	}
}

$(document).ready(function(){
	let school_of_rock = new Movie("School of rock", 2003 , 109);
	let enders_game = new Movie("Ender's Game" , 2013 , 114);
	let whiplash = new Movie("Whiplash", 2014 , 107);

	Object.assign(whiplash, social);
})