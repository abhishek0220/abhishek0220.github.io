$('#nextsec').click(function(){
  $.fn.fullpage.moveSlideRight();
});
$('#prevsec').click(function(){
  $.fn.fullpage.moveSlideLeft();
});
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function showimg(loc){
  var img = document.getElementById(loc);
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 
