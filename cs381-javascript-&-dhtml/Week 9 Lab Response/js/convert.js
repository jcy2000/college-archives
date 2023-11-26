window.addEventListener("DOMContentLoaded", domLoaded);
var $ = function(id) {return document.getElementById(id);};

function domLoaded() {
   // TODO: Complete the function

   $("fInput").addEventListener("input", function() {$("cInput").value = "";});
   $("cInput").addEventListener("input", function() {$("fInput").value = "";});

   $("convertButton").addEventListener("click", convert);
   
}

function convert() {
   var degreesF = $("fInput").value
   var degreesC = $("cInput").value;

   if(degreesF != "")
      if(isNaN(parseFloat(degreesF)))
         $("errorMessage").textContent = degreesF + " is not a number";
      else {
         $("cInput").value = convertFtoC(degreesF);
         $("errorMessage").textContent = "";
      }
   else
      if(isNaN(parseFloat(degreesC)))
         $("errorMessage").textContent = degreesC + " is not a number";
      else {
         $("fInput").value = convertCtoF(degreesC);
         $("errorMessage").textContent = "";
      }
}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   var degreesF = parseFloat(degreesCelsius) * (9 / 5) + 32;

   if(degreesF > 50)
      $("weatherImage").setAttribute("src", "images/warm.png");
   else if(degreesF >= 32)
      $("weatherImage").setAttribute("src", "images/cool.png");
   else
      $("weatherImage").setAttribute("src", "images/cold.png");

   return degreesF;
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function

   if(degreesFahrenheit > 50)
      $("weatherImage").setAttribute("src", "images/warm.png");
   else if(degreesFahrenheit >= 32)
      $("weatherImage").setAttribute("src", "images/cool.png");
   else
      $("weatherImage").setAttribute("src", "images/cold.png");

   return (parseFloat(degreesFahrenheit) - 32) * (5 / 9)
}
