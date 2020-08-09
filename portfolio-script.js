
$(document).ready(function(){

carouselImageClickListener();

});

function carouselImageClickListener(){
$("#code-quiz").on('click', function(){
console.log("code quiz clicked");
});
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $(".vc");
var modalImg = document.getElementById("img01");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

var vid = $("video");
vid.autoplay = true;
