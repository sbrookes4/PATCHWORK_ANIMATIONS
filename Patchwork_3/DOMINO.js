
/*----------On initial page load----------*/

$(".block").show();


$("#waitText").html("Make Ripple?");


/*----------button click function----------*/



$("button").click(function(){

$("#waitText").html("In: 3");

var time = 3;

setInterval(function(){


time = time - 1;//increment operators for timer

if(time > 0){//text display parameters

$("#waitText").html("In: "+ time);

}if(time === 0){

	$("#waitText").html("GO!!!");

}if(time < 0){

$("#waitText").html("Rippling...");	


}if(time < - 15){

	$("#waitText").html("");	

}


},1000);//interval time 1 second


setInterval(function(){//fadeOut and fadeIn timings



$("#a1").fadeOut(400);
$("#a2").fadeOut(500);
$("#a3").fadeOut(600);
$("#a4").fadeOut(700);
$("#a5").fadeOut(800);
$("#a6").fadeOut(900);
$("#a7").fadeOut(1000);

$("#b1").fadeOut(1100);
$("#b2").fadeOut(1200);
$("#b3").fadeOut(1300);
$("#b4").fadeOut(1400);
$("#b5").fadeOut(1500);
$("#b6").fadeOut(1600);
$("#b7").fadeOut(1700);

$("#c1").fadeOut(1800);
$("#c2").fadeOut(1900);
$("#c3").fadeOut(2000);
$("#c4").fadeOut(2100);
$("#c5").fadeOut(2200);
$("#c6").fadeOut(2300);
$("#c7").fadeOut(2400);

$("#d1").fadeOut(2500);
$("#d2").fadeOut(2600);
$("#d3").fadeOut(2700);
$("#d4").fadeOut(2800);
$("#d5").fadeOut(2900);
$("#d6").fadeOut(3000);
$("#d7").fadeOut(3100);



$("#a1").fadeIn(500);
$("#a2").fadeIn(500);
$("#a3").fadeIn(500);
$("#a4").fadeIn(500);
$("#a5").fadeIn(500);
$("#a6").fadeIn(500);
$("#a7").fadeIn(500);

$("#b1").fadeIn(500);
$("#b2").fadeIn(500);
$("#b3").fadeIn(500);
$("#b4").fadeIn(500);
$("#b5").fadeIn(500);
$("#b6").fadeIn(500);
$("#b7").fadeIn(500);

$("#c1").fadeIn(500);
$("#c2").fadeIn(500);
$("#c3").fadeIn(500);
$("#c4").fadeIn(500);
$("#c5").fadeIn(500);
$("#c6").fadeIn(500);
$("#c7").fadeIn(500);

$("#d1").fadeIn(500);
$("#d2").fadeIn(500);
$("#d3").fadeIn(500);
$("#d4").fadeIn(500);
$("#d5").fadeIn(500);
$("#d6").fadeIn(500);
$("#d7").fadeIn(500);




},3600);


setInterval(function(){//remove displayed data, show alternative display 


$("#hiddenPic").remove();
$("#PicHidey").remove();
$("#puzzle").empty();
$("#puzzle").append('<img style="width:1200px; margin-left:80px; margin-top:30px; " src="http://www.brookesportfolio.com/WEB/SMORELOLZ.jpg"/>');

setInterval(function(){
$("#waitText").html("AwW SnAp!!!");
},2000);



},18000);



});

/*--------------------------------------------*/



$("button").click(function(){//interval for esater egg

$("#easterTextz").html("");
$("#easterTextz2").html("");
var time3 = 18;

setInterval(function(){

time3 = time3 - 1;//incrementers for easter egg text

if(time3 < 12){




$("#easterTextz").html("Easter Egg in... " + time3);
$("#easterTextz2").html("&nbspEaster Egg in... " + time3);
}if(time3 < 1 ){

	$("#easterTextz").html("");
	$("#easterTextz2").html("");
}if(time3 < 0 ){

	setInterval(function(){

	$("#easterTextz").html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspGO GET");
	$("#easterTextz2").html("&nbsp&nbspICE CREAM!!!");
		},1000);
}


},1000);

 });

 