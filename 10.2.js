/* 10.2: Дана переменная x, которая может принимать любое значение. 
Написать программу, которая в зависимости от типа данных x выводит в консоль 
сообщение вида: «x — число».
Опишите три случая: когда х = числу, строке или логическому типу. 
В других случаях выводите сообщение: «Тип x не определён».

Примечание: в этом задании использовать promt не нужно.*/


let x = "hey"; 

switch (typeof x) {
  case ("number"):
      console.log(x + ' - Number');
      break;
  case ("string"):
      console.log(x + ' - String');
      break;
  case ("boolean"):
      console.log(x + ' - Boolean');
      break;
  default:
      console.log('Type of ' + x + " is not defigned");
} 
