var $ = function(id) { return document.getElementById(id); };

var processEntries = function() {
	var isValid = true;
	// get values for user entries   
    var email = $("email_address").value;
    var phone = $("phone").value;
    var country = $("country").value;
    var terms = $("terms").checked;
	var mailchecked = $("mail").checked;

	// check user entries for validity
    if (email === "") {
        $("email_address").nextElementSibling.textContent = "This field is required.";
		isValid = false;
    }
	else {
		$("email_address").nextElementSibling.textContent = "";	
	}
	if (phone === "") {
        $("phone").nextElementSibling.textContent = "This field is required.";
		isValid = false;
    }
	else {
		$("phone").nextElementSibling.textContent = "";
	}
    if (country === "no-option") {
        $("country").nextElementSibling.textContent = "Please select a country.";
		isValid = false;
    }
	else {
		$("country").nextElementSibling.textContent = "";	
	}
	if (terms === false) {
        $("terms").nextElementSibling.textContent = "This box must be checked.";
		isValid = false;
    }
	else {
		$("terms").nextElementSibling.textContent = "";
        $("terms").value = "yes";		
	}
    if(isValid)
	{
		$("registration_form").submit();
	}
};

function radioChanged() 
{

if ($('mail').checked)  			// Is mail button checked?
	hide ='';
else 
	hide='hide';                

$('label').className = hide;     // Text input visibility
$('mailingAddress').className = hide; 

}

var resetForm = function() {
    $("registration_form").reset();
	$('label').className = 'hide';  // Hide label for that mailing address textarea
    $('mailingAddress').className = 'hide';  // Hide mailing address textarea
	$("email_address").nextElementSibling.textContent = "*";
	$("phone").nextElementSibling.textContent = "*";	
	$("country").nextElementSibling.textContent = "*";	
	$("terms").nextElementSibling.textContent = "*";
    $("email_address").focus();
	
	//step 4: add js code to clean up local storage as well.
	localStorage.clear();
	
};

$("register").onclick = processEntries;
$("reset_form").onclick = resetForm;    
$("email_address").focus();

var options = document.getElementsByName('contact');		// Get the radio buttons
for (var i = 0; i < options.length; i++) { 			// Loop through radios
	if (options[i].addEventListener)    				// Add event listener
		options[i].addEventListener('click', radioChanged); // If event listener supported
	else                                      			// Otherwise
		options[i].attachEvent('onclick', radioChanged);    // IE fallback: onclick
}

/*
for(var option of options) {  			// Loop through radios
	if(option.addEventListener)    				// Add event listener        
		option.addEventListener('click', radioChanged); // If event listener supported                               
	else                                      			// Otherwise
		option.attachEvent('onclick', radioChanged);    // IE fallback: onclick
}
*/
 
//step 1: define function writeToStorage()
function writeToStorage() {
	localStorage.setItem("emailAddress", $("email_address").value);
	localStorage.setItem("phone", $("phone").value);
	localStorage.setItem("country", $("country").value);
	localStorage.setItem("comments", $("comments").value);
	localStorage.setItem("mailingAddress", $("mailingAddress").value);

	if($("mail").checked)
		localStorage.setItem("contact", $("mail").value);
	else if($("email").checked)
		localStorage.setItem("contact", $("email").value);
	else if($("phone2").checked)
		localStorage.setItem("contact", $("phone2").value);
	else
		localStorage.setItem("contact", $("none").value);
}

//step 2: define function retrieveData()
function retrieveData() {
	$("email_address").value = localStorage.getItem("emailAddress");
	$("phone").value = localStorage.getItem("phone");
	$("country").value = localStorage.getItem("country");
	$("comments").value = localStorage.getItem("comments");
	$("mailingAddress").value = localStorage.getItem("mailingAddress");

	let contact = localStorage.getItem("contact")
	if(contact == "mail")
		$("mail").value = contact;
	else if($("email").checked)
		$("email").value = contact;
	else if($("phone2").checked)
		$("phone2").value = contact;
	else
		$("none").value = contact;
}

//step 3: add js code to check whether the web page is loaded to browser window for the first time
//If yes, then call writeToStorage function to save data into the local storage. 
//If no, then call retrieveData function to retrieve data from the local storage.
var firstTime = localStorage.getItem("first-time");
if(!firstTime) {
	localStorage.setItem("first-time", false);
	writeToStorage();
}
else
	retrieveData();

//step 5: add js code here to apply event delegation approach by adding “change” event and event handler to the <form> element
document.getElementsByTagName("form")[0].addEventListener("change", writeToStorage);

//call radioChanged() function
radioChanged();
