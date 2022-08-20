var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (var i = 1; i <= 5; i++){
  nameImg = 'images/pic' + i + '.jpg';
  const newImage = document.createElement('img');
  newImage.setAttribute('src', nameImg);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => displayedImage.src = e.target.src);
}
/* Wiring up the Darken/Lighten button */
