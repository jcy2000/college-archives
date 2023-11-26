//constructor function used to create Product objects
function Product(pid, ptype, price, dprice){
	this.pid = pid;
	this.ptype = ptype;
	this.price = price;
	this.dprice = dprice;
}
var product_list = []; //an array used to hold Product objects
var productId, productType, productCost, productPrice, productSalePrice;

/*get product list from the table in the web page and 
save that product list to an array of objects*/
var num = document.getElementsByClassName('list'); //how many products in the product list table?
for (let i=0; i< num.length; i++)
{
    //read product info from each row in the product list table in the web page
	productId = document.getElementById('sid-'+ i).textContent;
	productType = document.getElementById('pid-'+ i).textContent;
	productPrice = parseFloat(document.getElementById('rp-'+ i).textContent);
	productSalePrice = parseFloat(document.getElementById('sp-'+ i).textContent);

	//create new Product object and add it to the array named prodcut_list
	product_list.push(new Product(productId, productType, productPrice, productSalePrice));
	
} 

//step-1: Create a cart array to hold index of selected product
var cart = [];
 
//step-2: apply event delegation to register event handler (addItem) 
//and click event to the product list table
var table = document.getElementsByClassName("table")[0];
table.addEventListener("click", addItem, false);


 
 //addItem  function defines an event handler that adds a product to shopping cart
 //step-3: complete addItem function to add a product to shopping cart
 function addItem(e){  //e represents event object
	var index;

	if(e.target.classList.contains("add-item")) {
		index = e.target.value;
		cart.push(index);
	}

	//updates number of items listed
	document.getElementById("items").textContent = cart.length;

	addNewItemtoCart(product_list[index]);
	updateTotalAmount();


  
 }
 
 //step-4: Complete the definition of a function named updateTotalAmount
 function updateTotalAmount() {
	 var totalAmount = 0;
	 for(let i of cart)
		 totalAmount += product_list[i].dprice;

	document.getElementById("total").textContent = totalAmount.toFixed(2);
 }
 
 
 function addNewItemtoCart(item){
 /* This function creates and adds a new table row to an existing table
 */
	//create a new <tr> element: a table row
	var newTrElement = document.createElement('tr');
	
	// create a <td> element using item.ptype as content
	var newTdElement = createNewTdElement(item.ptype);
	// append it to the new tr element
	newTrElement.appendChild(newTdElement);
	
	// create a <td> element using item.dprice as content
	newTdElement = createNewTdElement(item.dprice);
	// append it to the new tr element
	newTrElement.appendChild(newTdElement);
	
	//append new <tr> element to the shopping cart
	document.getElementById('item-list').appendChild(newTrElement);
 }
 
 function createNewTdElement(cell_content){
 /* This function creates and returns a new table cell using  the following steps:
	1. create a new text node using createTextNode() method
	2. create a new 'td' element using createElement() method
	3. append the newly created text node to the new 'td' element
	4. return the newly created 'td' element
 */
	// create a text node
	var newTextNode = document.createTextNode(cell_content);
	// create a new td element
	var newTdElement = document.createElement('td');
	// append text node to the new td element
	newTdElement.appendChild(newTextNode);
	return newTdElement;
 }
