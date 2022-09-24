//10.8:

/* Создайте произвольный массив Map. Получите его ключи и выведите 
в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.*/

let newMap = new Map(
  [

    ["tree", "green"],
  
    ["autumn", 9],
  
    [57,   true], 

    [false, "street" ]
  
  ]
);

for (let item of newMap.keys()) {
  console.log(`Ключ — ${item}, значение — ${newMap.get(item)}`);
}