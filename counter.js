var inter=0;

var audio=document.getElementById("pop");

$("#btn1").click(function(){

	//get lower and upper bounds from inputs for random number generation
	var lower=Number($("#lower").val());
	var upper=Number($("#upper").val());
	
	//generate the random number
	var rand_time=lower + Math.floor(Math.random() * (upper-lower)+2);

	//change the caption of button to HIDE
	$("#btn2").innerText=="hide";	
	
	//Start interval
	var inter=setInterval(function() {
			
		rand_time-=1;
		if(rand_time>0){
			$("#counter").text(rand_time);
			$("h2").text("Counting Down !")
		}else{
			clearInterval(inter);
			$("#counter").text("SÜRE DOLDU");
			$("h2").text("")
			audio.play();
		}
	},1000);

});


//CHANGE THE CAPTION OF SHOW-HIDE BUTTON
$("#btn2").click(function(){
	$("h1").toggleClass("hidden");
	if (this.innerText=="hide"){this.innerText="show";}
	else{this.innerText="hide";} 
});




$("#reset-btn").click(function(){
	
});




function restart_timer(){
	var lower=Number($("#lower").val());
	var upper=Number($("#upper").val());
	
	var rand_time=lower + Math.floor(Math.random() * (upper-lower)+1);

	$("#btn2").innerText=="hide";	
	
	var inter=setInterval(function() {
			
		rand_time-=1;
		if(rand_time<1){
			clearInterval(inter);
			$("#counter").text("SÜRE DOLDU");
			$("h2").text("")
			audio.play();
		}else{
			$("#counter").text(rand_time);
			$("h2").text("Counting Down !")
		}
	},1000);
}


