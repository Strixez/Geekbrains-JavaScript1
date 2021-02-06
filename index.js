// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

var i = 0;
while(i<100) {
    if(i==1 ||i==2 || i==3 ||i==5){
        document.write(i +'-Простое число','<br>');
        i++;
    }
    else if(i % 2 ==0 || i % 3 == 0 || i % 4 ==0 || i % 5 ==0 || i % 7==0){
        i++;
    }
    else{
        document.write(i +'-Простое число','<br>');
        i++;
    }
}

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

var basket = [
    {
        product: "phone",
        price: 500
    },
    {
        product: "notebook",
        price: 700
    },
    {
        product: "t-shirt",
        price: 50
    }
];

function countBasketPrice(basket) {
    var BasketPrice = 0;
    for (var prod of basket){
        BasketPrice += prod.price;
    }
    return BasketPrice;
}

console.log("Стоимость корзины: " + countBasketPrice(basket) + " долларов");

// 3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(…){// здесь пусто}

for(i = 0; i<9; i++, document.write(i));

// 4) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx
var arr = [];
var j = 0;
while (j < 20){
    j++;
    arr.push('x');
    console.log(arr);
}