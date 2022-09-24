//10.6
/*Дан массив. Проверить, одинаковые ли элементы в массиве и 
вывести результат true или false в консоль. 
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. 
Проверить, все ли элементы в массиве одинаковые. */


let testArr = [2, 2, 2];

for (let i = 0; i < testArr.length-1; i++) {
    if (testArr[i] === testArr[i+1]) {
      if (i == testArr.length-2) {
      console.log("true");
      } else {
        continue;
      }
    } else {
    console.log("false");
    break;
    }
  }