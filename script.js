function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["searchUser"]["search"].value;
    if (x == "" || y == "") {
        alert("Please choose a user");
        return false;
    } else {
      alert('Message Sent');
}
/*function validateForm() {
var y = document.forms["searchUser"]["search"].value;
  if (y == "") {
    alert("Please type in a user name");
    return false;
  }
/*
