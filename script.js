



var src = document.querySelector('.src-user');
var msg = document.querySelector('.message-user');
var buttonA = document.querySelector('.btn-bar');



buttonA.addEventListener('click', function() {
  if (src.value.length > 0 || msg.value.length > 0) {
    src.value = "Submitted";
  } else {
    src.value = "Please enter a name";
}
});
