//function calling
myFunction();

function DaySelector(text){
	var e = document.getElementById("text-holder").innerHTML=text;
	
}
function crnt(){
	var cdate= new Date();
	var time=document.getElementById("time");
	time.innerHTML=cdate;
}
setInterval(crnt,1000);

document.addEventListener('DOMContentLoaded',function() {
	var sunday =document.getElementById('sunday');
	sunday.addEventListener('click',function() {
		DaySelector('<h3>SUNDAY</h3><b>Mess Menu: Aalu Puri , Dahi Taahri/Chatni , Special</b><br />');
	
	});

});
document.addEventListener('DOMContentLoaded',function() {
	var monday =document.getElementById('monday');
	monday.addEventListener('click',function() {
		DaySelector('<h3>MONDAY</h3><b>Mess Menu: Paaw Bhaji , Arhar Daal/Aalu Matar , Mix Daal Chawal</b><br />');
	
	});

});

document.addEventListener('DOMContentLoaded',function() {
	var tu =document.getElementById('tuesday');
	tuesday.addEventListener('click',function() {
		DaySelector('<h3>TUESDAY</h3><b>Mess Menu: Bread Butter , Kari/Jeera Aalu , Rajma/Raita</b><br />');
	
	});

});
document.addEventListener('DOMContentLoaded',function() {
	var wednesday =document.getElementById('wednesday');
	wednesday.addEventListener('click',function() {
		DaySelector('<h3>WEDNESSDAY</h3><b>Mess Menu: Chole Kulche , Arhar Daal/Aalu Bandgobhi , Special</b><br />');
	
	});

});
document.addEventListener('DOMContentLoaded',function() {
	var thursday =document.getElementById('thursday');
	thursday.addEventListener('click',function() {
		DaySelector('<h3>THURSDAY</h3><b>Mess Menu: Sabji Puri, Mix Daal/Aalu Matar , Chana Daal/Mix Veg</b><br />');
	
	});

});
document.addEventListener('DOMContentLoaded',function() {
	var friday =document.getElementById('friday');
	friday.addEventListener('click',function() {
		DaySelector('<h3>FRIDAY</h3><b>Mess Menu: Halwa Chana , Rajma , Daal Makhni/Aalu Shimla</b><br />');
	
	});

});
document.addEventListener('DOMContentLoaded',function() {
	var saturday =document.getElementById('saturday');
	saturday.addEventListener('click',function() {
		DaySelector('<h3>SATURDAY</h3><b>Mess Menu: Sandwich , Chole , Kari/Masoor Daal</b><br />');
	
	});

});

function myFunction(text){
		var d = new Date();
var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()]; 

var a = n;
document.write("<h3>TODAY ("+a+")</h3>");
switch(a){
	case "Sunday":
		document.write('<b>Mess Menu:</b> <b>Aalu Puri</b> , <b>Dahi Taahri/Chatni</b> , <b>Special</b><br /><br/><br/>');
		break;
	case "Monday":
		document.write('<b>Mess Menu: Paaw Bhaaji , Arhar Daal/Aalu Matar , Mix Daal Chawal</b><br />');
		break;
	case "Tuesday":
		document.write('<b>Mess Menu: Bread Butter , Kari/Jeera Aalu , Rajma/Raita</b><br />');
		break;
	case "Wednesday":
		document.write('<b>Mess Menu: Chole Kulche , Arhar Daal/Aalu Bandgobhi , Special</b ><br />');
		break;		
	case "Thursday":
		document.write('<b>Mess Menu: Sabji Puri, Mix Daal/Aalu Matar , Chana Daal/Mix Veg</b><br />');
		break;
	case "Friday":
		document.write('<b>Mess Menu: Halwa Chana, Rajma, Daal Makhni/Aalu Shimla</b><br />');
		break;
	case "Saturday":
		document.write('<b>Mess Menu: Sandwich, Chole , Kari/Masoor Daal</b><br />');
		break;
	default :
		document.write('ERROR !!!');
	}		
}