// Функция: создаёт новый параграфф и добавляет вниз тела HTML
document.addEventListener("DOMContentLoaded", function() {
    function createParagraph() {
        let para = document.createElement('p');
        para.textContent = 'You clicked the button!';
        document.body.appendChild(para);
        }
/*
  1. Получаем ссылки на все кнопки на странице в виде массива.
  2. Перебераем все кнопки и добавляем к ним отслеживатель события нажатия.

  При нажатии любой кнопки, будет выполняться функция createParagraph().
*/
    const buttons = document.querySelectorAll('button');

    for(let i = 0; i < buttons.length ; i++) {
        buttons[i].addEventListener('click', createParagraph);
    }
});