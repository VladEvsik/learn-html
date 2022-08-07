var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
  var nameImg = 'pic';
for (var i = 1; i <= 5; i++){
  nameImg = nameImg + i + '.jpg'
  var newImage = document.createElement('img');
  newImage.setAttribute('src', nameImg);
  thumbBar.appendChild(newImage);

}
/* Wiring up the Darken/Lighten button */
