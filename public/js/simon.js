"use strict";

// variables for my game
var simon = [];
var player = [];
var round = 0;
var turn = 0;

// generate random number for play;
function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pushSimon() {
	var random = generateRandom(1,4);
	simon.push(random);
}

function playSimon(){
	pushSimon();
	simon.forEach(function(simonNumber, index){
		setTimeout(function(){
			lightup(simonNumber);
		}, 1000*(index+1));
	});
}		

$(".pad").click(function(event){
    var userClick = $(this).data("pad");
    player.push(userClick);
    lightup(userClick);

     if (userClick == simon[turn]) {
     	turn++;
     } else { 
     		turn = 0;
     		alert("You entered the wrong sequence");
   }
   	if (turn == simon.length) {
   		turn = 0;
   		player = [];
   		playSimon();
   	};

 }); 

function lightup(padNumber) {
	$("[data-pad='"+ padNumber +"']").animate({
		opacity: 1
	},50).animate({
		opacity: 0.6
	}, 1000)
}

$("#start").click(function(){
	playSimon();
});