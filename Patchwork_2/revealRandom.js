//code executes on page load

$(".block").show();
$("#bottomView").hide();
$("#bottomView").fadeIn(3000);


//random number generator for block fade in
var fadeZ1 = Math.floor((Math.random() * 6000) + 1000);
var fadeZ2 = Math.floor((Math.random() * 6000) + 1000);
var fadeZ3 = Math.floor((Math.random() * 6000) + 1000);
var fadeZ4 = Math.floor((Math.random() * 6000) + 1000);
var fadeZ5 = Math.floor((Math.random() * 6000) + 1000);
var fadeZ6 = Math.floor((Math.random() * 6000) + 1000);
var fadeZ7 = Math.floor((Math.random() * 6000) + 1000);
var fadeZ8 = Math.floor((Math.random() * 6000) + 1000);
var fadeZ9 = Math.floor((Math.random() * 6000) + 1000);
var fadeZ10 = Math.floor((Math.random() * 6000) + 1000);
var fadeZ11 = Math.floor((Math.random() * 6000) + 1000);
var fadeZ12 = Math.floor((Math.random() * 6000) + 1000);


//fade out function, 
$("#a1").fadeOut(fadeZ1);
$("#a2").fadeOut(fadeZ11);
$("#a3").fadeOut(fadeZ8);
$("#a4").fadeOut(fadeZ12);
$("#a5").fadeOut(fadeZ5);

$("#b1").fadeOut(fadeZ5);
$("#b2").fadeOut(fadeZ10);
$("#b3").fadeOut(fadeZ7);
$("#b4").fadeOut(fadeZ2);
$("#b5").fadeOut(fadeZ9);

$("#c1").fadeOut(fadeZ2);
$("#c2").fadeOut(fadeZ4);
$("#c3").fadeOut(fadeZ6);
$("#c4").fadeOut(fadeZ3);
$("#c5").fadeOut(fadeZ1);
