var inter=0;
var rand_time;

var audio=document.getElementById("pop");

$("#btn1").click(function(){

	//get lower and upper bounds from inputs for random number generation
	var lower=Number($("#lower").val());
	var upper=Number($("#upper").val());
	
	//generate the random number
	rand_time=lower + Math.floor(Math.random() * (upper-lower)+2);

	//change the caption of button to HIDE
	$("#btn2").innerText="hide";	

	//disable start button
	$("#btn1").attr("disabled",true);

	//Start interval
	inter=setInterval(function() {
			
		rand_time-=1;
		if(rand_time>0){
			$("#counter").text(rand_time);
			$("h2").text("Counting Down !");
		}else{
			clearInterval(inter);
			$("#counter").text("0");
			$("h2").text("TIME IS UP !!!")
			audio.play();
			$("#btn1").attr("disabled",false);
		}
	},1000);

});


//CHANGE THE CAPTION OF SHOW-HIDE BUTTON
$("#btn2").click(function(){
	$("h1").toggleClass("no-show");
	if (this.innerText=="hide"){this.innerText="show";}
	else{this.innerText="hide";} 
});

//RESET TIMER
$("#reset-btn").click(function(){
	clearInterval(inter);
	$("#counter").text("0");
	$("h2").text("")
	//rand_time-=rand_time;
	//console.log("reset button clicked");
	$("#btn1").attr("disabled",false);
});
