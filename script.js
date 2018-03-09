

//document.getElementByClassName("alert").addEventListener("click", function(){
//    document.getElementByClassName("bell").alert = "Hello World";
//});
var src = document.getElementById('searchUser');
var msg = document.getElementById('messageUser');
var buttonA = document.querySelector('.btn-a');



  buttonA.addEventListener('click', function() {
    if (src.value == "" || msg.value == "") {
      src.value = "Please select a user and type in message!";
    } else {
      document.getElementById("searchUser").value = "Submitted!";
    }
});

/*function ValidationEvent(){
	if ((document.searchUser.search.value=="") || (document.searchUser.fname.value=="")){
		alert("Search for user or message for user is empty, \n please fill in required fields!")
		return false
	}
	else
		fname.value = "Sumitted";
}
*/
