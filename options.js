var storage = chrome.storage.local;
var billingCheckbox = document.getElementById("sameBillingAddress");
var checkoutCheckbox = document.getElementById("turnOnCheckout");


function restoreOptions() {

	loadValue("fname");
	loadValue("lname");
	loadValue("address1");
	loadValue("address2");
	loadValue("city");
	loadValue("state");
	loadValue("zip");
	loadValue("cardType");
	loadValue("cardNumber");
	loadValue("expireMonth");
	loadValue("expireYear");
	loadValue("ccv");
	loadValue("phone");
	loadValue("bphone");
	loadValue("email");
	loadValue("password");
	loadValue("bfname");
	loadValue("blname");
	loadValue("baddress1");
	loadValue("baddress2");
	loadValue("bcity");
	loadValue("bstate");
	loadValue("country");
	loadValue("bcountry");
	loadValue("bzip");
	loadValue("size");
	loadValue("size2");
	loadValue("size3");
        loadValue("addSpeed");

	loadState("sameBillingAddress");
        loadState("turnOnCheckout");
        loadState("newUser");

	billingCheckbox.onclick();
        checkoutCheckbox.onclick();
}

function saveOptions() {

        localStorage.fname = document.getElementById("fname").value.trim();
        storage.set({fname:localStorage.fname},function(){})
  
        localStorage.lname = document.getElementById("lname").value.trim();
        storage.set({lname:localStorage.lname},function(){})

        localStorage.address1 = document.getElementById("address1").value.trim();
        storage.set({address1:localStorage.address1},function(){})
	
        localStorage.address2 = document.getElementById("address2").value.trim();
        storage.set({address2:localStorage.address2},function(){})

        localStorage.city = document.getElementById("city").value.trim();
        storage.set({city:localStorage.city},function(){})

        localStorage.state = document.getElementById("state").value.trim();
        storage.set({state:localStorage.state},function(){})
	
        localStorage.zip = document.getElementById("zip").value.trim();
        storage.set({zip:localStorage.zip},function(){})
	
        localStorage.cardType = document.getElementById("cardType").value.trim();
        storage.set({cardType:localStorage.cardType},function(){})
	
        localStorage.cardNumber = document.getElementById("cardNumber").value.trim();
        storage.set({cardNumber:localStorage.cardNumber},function(){})
	
        localStorage.expireMonth = document.getElementById("expireMonth").value.trim();
        storage.set({expireMonth:localStorage.expireMonth},function(){})
	
        localStorage.expireYear = document.getElementById("expireYear").value.trim();
        storage.set({expireYear:localStorage.expireYear},function(){})
	
        localStorage.ccv = document.getElementById("ccv").value.trim();
        storage.set({ccv:localStorage.ccv},function(){})
	
        localStorage.phone = document.getElementById("phone").value.trim();
        storage.set({phone:localStorage.phone},function(){})

        localStorage.bphone = document.getElementById("bphone").value.trim();
        storage.set({bphone:localStorage.bphone},function(){})

        localStorage.email = document.getElementById("email").value.trim();
        storage.set({email:localStorage.email},function(){})

        localStorage.password = document.getElementById("password").value.trim();
        storage.set({password:localStorage.password},function(){})

        localStorage.bfname = document.getElementById("bfname").value.trim();
        storage.set({bfname:localStorage.bfname},function(){})
  
        localStorage.blname = document.getElementById("blname").value.trim();
        storage.set({blname:localStorage.blname},function(){})

        localStorage.baddress1 = document.getElementById("baddress1").value.trim();
        storage.set({baddress1:localStorage.baddress1},function(){})
	
        localStorage.baddress2 = document.getElementById("baddress2").value.trim();
        storage.set({baddress2:localStorage.baddress2},function(){})

        localStorage.bcity = document.getElementById("bcity").value.trim();
        storage.set({bcity:localStorage.bcity},function(){})

        localStorage.bstate = document.getElementById("bstate").value.trim();
        storage.set({bstate:localStorage.bstate},function(){})
	
        localStorage.bzip = document.getElementById("bzip").value.trim();
        storage.set({bzip:localStorage.bzip},function(){})

        localStorage.country = document.getElementById("country").value.trim();
        storage.set({country:localStorage.country},function(){})

        localStorage.bcountry = document.getElementById("bcountry").value.trim();
        storage.set({bcountry:localStorage.bcountry},function(){})

	localStorage.addSpeed = document.getElementById("addSpeed").value.trim();
        storage.set({addSpeed:localStorage.addSpeed},function(){})

        localStorage.size = document.getElementById("size").value.trim();
        storage.set({size:localStorage.size},function(){})

        localStorage.size2 = document.getElementById("size2").value.trim();
        storage.set({size2:localStorage.size2},function(){})

        localStorage.size3 = document.getElementById("size3").value.trim();
        storage.set({size3:localStorage.size3},function(){})

        localStorage.sameBillingAddress = document.getElementById("sameBillingAddress").checked;
        storage.set({sameBillingAddress:localStorage.sameBillingAddress},function(){})
	
        localStorage.turnOnCheckout = document.getElementById("turnOnCheckout").checked;
        storage.set({turnOnCheckout:localStorage.turnOnCheckout},function(){})
		
        localStorage.newUser = document.getElementById("newUser").checked;
        storage.set({newUser:localStorage.newUser},function(){})
	
	alert("Options saved!");
}

function loadValue(id) {

	if(localStorage[id] !== undefined)
		document.getElementById(id).value = localStorage[id];
}

function saveValue(id) {
	localStorage[id] = document.getElementById(id).value.trim();
}

function loadState(id) {

	if(localStorage[id] !== undefined)
		document.getElementById(id).checked = localStorage[id] == "true" ? true : false;
}

function saveState(id) {
	localStorage[id] = document.getElementById(id).checked;
}

billingCheckbox.onclick = function() {
	var billing = document.getElementById("shipping");

	if(billingCheckbox.checked)
		billing.style.display = "none";
	else
		billing.style.display = "table";
};
checkoutCheckbox.onclick = function() {
	var billing = document.getElementById("billing");
	var signin = document.getElementById("signin");
	var shipping = document.getElementById("shipping");
	var paying = document.getElementById("paying");

	if(checkoutCheckbox.checked){
                checkoutCheckbox.value = "true";
		billing.style.display = "table";
		signin.style.display = "table";
		shipping.style.display = "table";
		paying.style.display = "table";
        }
	else{
                checkoutCheckbox.value = "false";              
		billing.style.display = "none";
		signin.style.display = "none";
		shipping.style.display = "none";
		paying.style.display = "none";
        }
};
document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('#save').addEventListener('click', saveOptions);