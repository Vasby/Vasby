var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll("div.wedo");
  if (n > slides.length) {slideIndex = 1}  
  if (n < 1) {slideIndex = slides.length} 
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

var galleryIndex = 0;
showGallery();

function showGallery() {
  var j;
  var photos = document.querySelectorAll("div.gallery");
  for (j = 0; j < photos.length; j++) {
    photos[j].style.display = "none";  
  }
  galleryIndex++;
  if (galleryIndex > photos.length) {galleryIndex = 1}    
  photos[galleryIndex-1].style.display = "block";  
  setTimeout(showGallery, 5000); // Change image every 2 seconds
}