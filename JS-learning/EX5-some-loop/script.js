// Launch countdown
var output = document.querySelector('.output');
output.innerHTML = '';

for (var i = 10; i >= 0; i--) {
if (i < 1) {
var para = document.createElement('p');
para.textContent = "ПУСК!!!";
output.appendChild(para);
}
else {
var para = document.createElement('p');
para.textContent = i;
output.appendChild(para);
}
}

// Filling in a guest list
/*var people = ['Крис', 'Анна', 'Колин', 'Терри', 'Фил', 'Лола', 'Сём', 'Кай', 'Брюс'];

var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');
admitted.textContent = 'Пригласить: ';
refused.textContent = 'Не приглашать(!): '

for (var i = 0; i < people.length; i++){
if (people[i] === "Фил" || people[i] === "Лола") {
refused.textContent += people[i] + ', ';
}
else{
admitted.textContent += people[i] + ', ';
}
}
refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';*/
