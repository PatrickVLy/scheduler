

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

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
var hoursInput = [nineAMInput, tenAMInput, elevenAMInput, twelvePMInput, onePMInput, twoPMInput, threePMInput, fourPMInput, fivePMInput, sixPMInput, sevenPMInput, eightPMInput, ninePMInput]
var storedInput = [stored9PM, stored10AM, stored11AM, stored12PM, stored1PM, stored2PM, stored3PM, stored4PM, stored5PM, stored6PM, stored7PM, stored8PM, stored9PM]
var inputValue = [input9AM, input10AM, input11AM, input12PM, input1PM, input2PM, input3PM, input4PM, input5PM, input6PM, input7PM, input8PM, input9PM]

function store9AM(){
    var input9AM = document.getElementById("9").value;
    localStorage.setItem("9", input9AM);
    nineAMInput.setAttribute("placeholder",stored9AM);
   }

   function store10AM(){
    var input10AM = document.getElementById("10").value;
    localStorage.setItem("10", input10AM);
    tenAMInput.setAttribute("placeholder",stored10AM);
   }

   function store11AM(){
    var input11AM = document.getElementById("11").value;
    localStorage.setItem("11", input11AM);
    elevenAMInput.setAttribute("placeholder",stored11AM);
   }

   function store12PM(){
    var input12PM = document.getElementById("12").value;
    localStorage.setItem("12", input12PM);
    twelvePMInput.setAttribute("placeholder",stored12PM);
   }

   function store1PM(){
    var input1PM = document.getElementById("13").value;
    localStorage.setItem("13", input1PM);
    onePMInput.setAttribute("placeholder",stored1PM);
   }

   function store2PM(){
    var input2PM = document.getElementById("14").value;
    localStorage.setItem("14", input2PM);
    twoPMInput.setAttribute("placeholder",stored2PM);
   }
   
   function store3PM(){
    var input3PM = document.getElementById("15").value;
    localStorage.setItem("15", input3PM);
    threePMInput.setAttribute("placeholder",stored3PM);
   }

   function store4PM(){
    var input4PM = document.getElementById("16").value;
    localStorage.setItem("16", input4PM);
    fourPMInput.setAttribute("placeholder",stored4PM);
   }

   function store5PM(){
    var input5PM = document.getElementById("17").value;
    localStorage.setItem("17", input5PM);
    fivePMInput.setAttribute("placeholder",stored5PM);
   }

   function store6PM(){
    var input6PM = document.getElementById("18").value;
    localStorage.setItem("18", input6PM);
    sixPMInput.setAttribute("placeholder",stored6PM);
   }

   function store7PM(){
    var input7PM = document.getElementById("19").value;
    localStorage.setItem("19", input7PM);
    sevenPMInput.setAttribute("placeholder",stored7PM);
   }

   function store8PM(){
    var input8PM = document.getElementById("20").value;
    localStorage.setItem("20", input8PM);
    eightPMInput.setAttribute("placeholder",stored8PM);
   }

   function store9PM(){
    var input9PM = document.getElementById("21").value;
    localStorage.setItem("21", input9PM);
    ninePMInput.setAttribute("placeholder",stored9PM);
   }

   function changeBGcolor() {
    for (var i = 0; i<hours.length; i++){
        if (hours[i]==currentHour){
            hoursInput[i].setAttribute("class", "form-control col-8 present");
        }
    
        else if (hours[i]>=currentHour){
            hoursInput[i].setAttribute("class", "form-control col-8 future");
        }
    else if (hours[i]<=currentHour){
        hoursInput[i].setAttribute("class", "form-control col-8 past");
    }
    
        }