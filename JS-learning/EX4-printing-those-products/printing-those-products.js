const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
//                'Underpants:6.99'
//                'Socks:5.99'
//                'T-shirt:14.99'
//                'Trousers:31.99'
//                'Shoes:23.99';
var products = ['Underpants:6.99', 'Socks:5.99', 'T-shirt:14.99', 'Trousers:31.99', 'Shoes:23.99'];
// number 2
for (var i = 0; i < products.length; i++ ){

  var prod = products[i].slice(0, products[i].indexOf(':'));
  var price = products[i].slice(products[i].indexOf(':') + 1);
    
  // number 3
  price = number(price);
  // number 4
  total += price;
  // number 5
  let itemText = prod + "-" + price;

  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}
// number 6

totalBox.textContent = 'Total: $' + total.toFixed(2);
