//alert("blue");

$(".block").hide();


var fadeZ1 = Math.floor((Math.random() * 8000) + 1);
var fadeZ2 = Math.floor((Math.random() * 8000) + 1);
var fadeZ3 = Math.floor((Math.random() * 8000) + 1);
var fadeZ4 = Math.floor((Math.random() * 8000) + 1);
var fadeZ5 = Math.floor((Math.random() * 8000) + 1);

$("button").click(function(){

$("#a1").fadeIn(fadeZ1);
$("#a2").fadeIn(fadeZ2);
$("#a3").fadeIn(fadeZ3);
$("#a4").fadeIn(fadeZ4);
$("#a5").fadeIn(fadeZ5);

$("#b1").fadeIn(fadeZ5);
$("#b2").fadeIn(fadeZ4);
$("#b3").fadeIn(fadeZ3);
$("#b4").fadeIn(fadeZ2);
$("#b5").fadeIn(fadeZ1);

$("#c1").fadeIn(fadeZ2);
$("#c2").fadeIn(fadeZ4);
$("#c3").fadeIn(fadeZ5);
$("#c4").fadeIn(fadeZ3);
$("#c5").fadeIn(fadeZ1);

});