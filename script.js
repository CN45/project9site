

//document.getElementByClassName("alert").addEventListener("click", function(){
//    document.getElementByClassName("bell").alert = "Hello World";
//});


function ValidationEvent(){
	if ((document.searchUser.search.value=="") || (document.userForm.fname.value=="")){
		alert("Search for user or message for user is empty, \n please fill in required fields!")
		return false
	}
	else
		return true
}
