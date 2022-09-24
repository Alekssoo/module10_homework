/*  10.3:Дана строка. Необходимо вывести в консоль перевёрнутый вариант.
 Например, "Hello" -> "olleH".*/

 /*мой разясняющий комментарий последующего кода: сначала строка разбивается на отдельные элементы массива split с 
 пустым разделителем, затем применяется встроенная функция реверса элементов
 массива, и затем элементы массива снова объединяются уже в реверсированном 
 виде с пустым разделителем. */

 
 let string = "Code";

 let stringConvert = string.split("").reverse().join("");
 console.log(string + " in reverse = " + stringConvert);