// $ function is used to replace document.getElementById() in this document for convience
var $ = function(id) { return document.getElementById(id); };

// determine if a number is prime
var isPrime = function(num) {//step 1.1 add a parameter in function header to accept 
                            // a number passed in
//step 1.2 add a for or while loop to check whether that number is prime or not
// if that number can be divisible by any integer between 2 and (number itself - 1)
// then that number is not a prime, return false
	for(let i = 2; i < num; i++)
		if(num % i == 0)
			return false;

//step 1.3: after loop, return true, indicates that number is a prime
	return true;
}

// get all prime numbers
var getPrimes = function (num){ //step 2.1 add a parameter in function header
	
	
	
	var primes = "";
	var count = 0;
	//step2.2: add a for or while loop
	// inside the loop, call isPrime() function
	// inside the loop, add prime number to primes string and update the count
	for(let i = 2; i < num; i++)
		if(isPrime(i)) {
			primes += i + " ";
			count++;
		}

	//step 2.3: return an array that holds both primes string and count
	return [primes, count];
}

var processEntries = function() {
  //get values from page
    var input = $("number").value;
	input = Number(input);
    inputInteger = parseInt(input);
	$("primes").value = "";
	
	// add data validation here, to make sure the input is a number greater than 1  
	if ( isNaN(input) || input!== inputInteger || inputInteger <= 1){
	//step 3.1: add js code to display a message says: "Please enter an integer number greater than 1." 
	//besides the input entry box
		$("number").nextElementSibling.textContent += "Please enter an integer number greater than 1.";

		
		$("count").value = "";
		$("primes").value ="";
		$("primes").style = "background-color: #808080";
		$("count").style = "background-color: #808080";
	}
	else {
	//step 3.2: add js code to remove error message if having one
	$("number").nextElementSibling.textContent = "";

	$("primes").style = "background-color: #ccffff";
	$("count").style = "background-color:#ccffff";
	
	//step 3.3: add js code to call getPrimes() function to display number of primes found in the range
    // in the input box with id = "count"
	let primes = getPrimes(input);
	$("count").value = primes[1];
	
	//step 3.4: add js code to call getPrimes() function to display the list of primes found in the textarea
	// with id = "primes"
	$("primes").value = primes[0];
	
	}
}
	$("calculate").onclick = processEntries;
	$("number").focus();
