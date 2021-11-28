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

var galleryIndex = 1;
showGallery(galleryIndex);

function plusGallery(n) {
  showGallery(galleryIndex += n);
}

function showGallery(n) {
  var j;
  var photos = document.querySelectorAll("div.gallery");
  if (n > photos.length) {galleryIndex = 1}
  if (n < 1) {galleryIndex = photos.length}
  for (j = 0; j < photos.length; j++) {
    photos[j].style.display = "none";  
  }
  photos[galleryIndex-1].style.display = "block";  
}