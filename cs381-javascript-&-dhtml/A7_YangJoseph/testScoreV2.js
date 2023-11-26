		// define a function so that in js code, $ can be used to replace document.getElementById
		var $ = function(id) { return document.getElementById(id); };
		
        var numInputs = 1; //default setting, showing one test score input box
		
		//define setupInputBox function to add more test score inputs boxes 
		var setupInputBox = function(){

			$('testInputs').innerHTML = "";
			$('scoreTotal').value = "";
			$('scoreAvg').value = "";
			$('scoreFinal').value = "";
			
			numInputs = $('numscores').value;			
			numInputs = parseInt(numInputs);  // convert inputs into integer numerical value
//step-1.1: Add a condition in if() statement
//if user input for number of test scores is valid and in the range 1 to 5			
			if (numInputs >= 1 && numInputs <= 5)
			{   
				for (var i=0; i< numInputs; i++)
				{				
//Step-1.2.1: create new <label>, <input>, and <br> elements (use createElement() method to create each element)
					var labelNode = document.createElement("label");
					var inputNode = document.createElement("input");
					var brNode = document.createElement("br");
//Step-1.2.2: create text content node for each new <label> element  ( use createTextNode() method )
					var textNode = document.createTextNode("Test-" + (i + 1));
					labelNode.appendChild(textNode);
//Step-1.3.1: add for attribute to each new <label> element  ( use setAttribute() method)
					labelNode.setAttribute("for", "score" + (i + 1));
//Step-1.3.2: add id, type, and value attributes to new <input> elements ( use setAttribute() method)
					inputNode.setAttribute("id", "score" + (i + 1));
					inputNode.setAttribute("type", "number");
					inputNode.setAttribute("value", "");
//Step-1.4: append each new <label>, <input>, and <br> elements to the <div> element with id=”testInputs”.
					$("testInputs").appendChild(labelNode);
					$("testInputs").appendChild(inputNode);
					$("testInputs").appendChild(brNode);
				}
			}
		}
		//whenever user changes selection on number of test scores to consider, setupInputBox function will be executed again
		$('numscores').oninput = setupInputBox;  
		
		//define processEntries function to get user inputted test scores, do input validation, and caculate total and average points and 
		//determine the final letter grade.  Display all results on web page.
		var processEntries = function() {
		    $('scoreTotal').value = "";
			$('scoreAvg').value = "";
			$('scoreFinal').value = "";
			
			var score = [];  //define an array to hold test scores
			
			var message ="";  //define a variable for containing and displaying error message
			
			var totalscore = 0, avgScore, finalScore;
			
			var isValid = true;
			for (var i=0; i< numInputs; i++)
			{
				$("score" + (i+1)).className = "";
//step 2.1: add js code to read in each user inputted test score(s) from input test score boxes on the web page.
				var inputNode = $("score" + (i + 1));
//step 2.2: add js code to validate each test score to make sure all inputted test scores are numerical values
//between 0 and 150 (i.e., no less than 0 and no greater than 150 points).
//if a test score is invalid, generate error message, and add that error messge to message string.
//if a test score is valid, add that test score to the score array.
				if(inputNode.value < 0 || inputNode.value > 150) {
					message += inputNode.id + " score input is invalid. Should be a number between 0 and 150.\n";
					inputNode.classList.add("error");
					isValid = false;
				}
				else {
					score.push(parseInt(inputNode.value));
				}
		    }
			console.log(score); //print out score array in console
			console.log(message); //print out message string in console
//step2.3: add js so that when all inputted test scores are valid, compute total points, average points (with zero decimal place), and 
//final letter grade, and display them in the input boxes in the <div> element with id=’result’ on the web page.
			for(var i = 0; i < score.length; i++)
				totalscore += score[i];
			
			avgScore = (totalscore / numInputs);

			if(avgScore >= 120)
				finalScore = "A";
			else if(avgScore >= 100)
				finalScore = "B";
			else if(avgScore >= 80)
				finalScore = "C";
			else if(avgScore >= 60)
				finalScore = "D";
			else
				finalScore = "F";

			$("scoreTotal").value = totalscore.toFixed(1);
			$("scoreAvg").value = avgScore.toFixed(1);
			$("scoreFinal").value = finalScore;
//If not all inputted test scores are valid, then create an alert box to display an error message 	
			if (!isValid)
				alert(message)
	        
        };  //end of processEntries function
		
		//each time when calculate button is clicked, inputted test scores will be evaluated and 
		$("calculate").onclick = function (){ 
		                       if (numInputs > 0 && numInputs <6) 
								   processEntries();
						};
		$("numscores").focus();