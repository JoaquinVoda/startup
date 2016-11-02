// 4 ->DONE
EventEmitter.call(Movie.prototype);



//   1->DONE -  8->DONE
function Movie(t, y, d) {
	
	this.title = t;
	this.year = y;
	this.duration = d;
	this.cast = new Array();

	this.play = function(){
		this.func('play');
	}

	this.pause = function(){
		console.log("Movie paused");
	}

	this.resume = function(){
		console.log("Movie resumed");
	}

	this.addCast = function(_cast){
		
		if(Array.isArray(_cast)){
			for (var i = 0; i < _cast.length; i++) {
				this.cast[this.cast.length] = _cast[i];
			}
		}
		else{
			this.cast[this.cast.length] = _cast;
		}
	}
}

//3 ->DONE
function EventEmitter(){
	this.listener; 
	this.func;

	this.on = function(ev, fc){
		this.listener = ev;
		this.func = fc;
	}

	this.emit = function(ev){
		if(ev == listener){
			this.func();
		}
	}

	this.off = function(ev, fc){
		this.listener = null;
		this.func = null;
	}
}

// 7 ->DONE
function Actor(_fullname, _age){
	this.full_name = _fullname;
	this.age = _age;
}

// 5-> DONE
function Logger(){

	this.log = function(info){
		console.log(info);
	}
}

//6 ->DONE
var Social = {

	share : function(friendName){
		return "Share " + this.title + " with " + friendName;
	},

	like : function(friendName){
		return friendName + " likes " + this.title;
	}
}

$(document).ready(function(){
	let school_of_rock = new Movie("School of rock", 2003 , 109);
	let enders_game = new Movie("Ender's Game" , 2013 , 114);
	let whiplash = new Movie("Whiplash", 2014 , 107);


	Object.assign(whiplash, Social);
	Object.assign(enders_game, Social);

	let logger = new Logger();
	whiplash.on('play', logger.log);
	whiplash.play();

	console.log(whiplash.share('Joaquin'));
	console.log(enders_game.like('Flor'));

	let actor = new Actor('Jack Black', 48);
	let otherCast = [
		new Actor ('Miranda Cosgrove', 25),
		new Actor ('Mike White', 46),
		new Actor ('Sarah Silverman', 44)
	];

	school_of_rock.addCast(otherCast);
	school_of_rock.addCast(actor);
	console.log(school_of_rock.cast);


})