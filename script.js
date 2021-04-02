

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
var currentHour=moment().format('H')
var nineAM = 9; 
var tenAM = 10; 
var elevenAM = 11;  
var twelvePM = 12;
var onePM = 13; 
var twoPM = 14; 
var threePM = 15; 
var fourPM = 16; 
var fivePM = 17; 
var sixPM = 18; 
var sevenPM = 19; 
var eightPM = 20;
var ninePM = 21; 


var nineAMInput = document.getElementById("9"); 
var tenAMInput = document.getElementById("10"); 
var elevenAMInput = document.getElementById("11");  
var twelvePMInput = document.getElementById("12"); 
var onePMInput = document.getElementById("13");  
var twoPMInput = document.getElementById("14"); 
var threePMInput = document.getElementById("15"); 
var fourPMInput = document.getElementById("16");  
var fivePMInput = document.getElementById("17"); 
var sixPMInput = document.getElementById("18"); 
var sevenPMInput = document.getElementById("19"); 
var eightPMInput = document.getElementById("20"); 
var ninePMInput = document.getElementById("21");  

var stored9AM = localStorage.getItem("9");
var stored10AM = localStorage.getItem("10");
var stored11AM = localStorage.getItem("11");
var stored12PM = localStorage.getItem("12");
var stored1PM = localStorage.getItem("13");
var stored2PM = localStorage.getItem("14");
var stored3PM = localStorage.getItem("15");
var stored4PM = localStorage.getItem("16");
var stored5PM = localStorage.getItem("17");
var stored6PM = localStorage.getItem("18");
var stored7PM = localStorage.getItem("19");
var stored8PM = localStorage.getItem("20");
var stored9PM = localStorage.getItem("21");

var input9AM= document.getElementById("9").value;
var input10AM= document.getElementById("10").value;
var input11AM= document.getElementById("11").value;
var input12PM= document.getElementById("12").value;
var input1PM= document.getElementById("13").value;
var input2PM= document.getElementById("14").value;
var input3PM= document.getElementById("15").value;
var input4PM= document.getElementById("16").value;
var input5PM= document.getElementById("17").value;
var input6PM= document.getElementById("18").value;
var input7PM= document.getElementById("19").value;
var input8PM= document.getElementById("20").value;
var input9PM= document.getElementById("21").value;

