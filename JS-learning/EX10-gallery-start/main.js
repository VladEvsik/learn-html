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

btn.addEventListener('click', () => {
  var btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'light';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'dark';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
})
/* Wiring up the Darken/Lighten button */
