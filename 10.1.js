/* 10.1: Напишите программу, которая работала бы следующим образом:
 в prompt вводится значение. С помощью унарного плюса (арифметический оператор)
  необходимо преобразовать его в число, затем проверить с помощью typeof, 
  принадлежит ли оно к множеству Number.

Если это число, то вывести в консоль чётное оно или нечётное.

Если передано не число, выведите: «Упс, кажется, вы ошиблись».

*NaN, хоть и относится к типу Number, числом не является.
 Добавьте отдельную проверку для этого значения.*/


let variable = prompt("Enter value: ");
let variableTest = +variable

if (typeof (variableTest) == "number" && !isNaN(variableTest)) {
    if (variableTest % 2 == 0 && variableTest != 0) {
        console.log(variable + ' is a even Number');
    } else {console.log(variable + ' is a odd Number');} 
} else {
  console.log('Oops, you made a mistake');
}
