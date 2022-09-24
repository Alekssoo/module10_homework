 //10.5
/* Дан произвольный массив. Необходимо вывести количество элементов массива,
 затем перебрать его и вывести в консоль каждый элемент массива.*/

let myArr = ["sam", 2, false];

console.log(myArr.length + " - length of the array\n");

let itemsArr = myArr.map(function(item, index, array) {

  console.log(item + ' - ' + (index + 1) + ' element of array');

});