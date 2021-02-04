// 1. Дан код:

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // Даёт 2 т.к. префиксная форма инкремента увеличивает на 1 и возвращает новое значение
d = b++; alert(d);           // 1, постфиксная форма инкремента увеличивает на 1, но возвращает старое значение
c = (2+ ++a); alert(c);      // 5 т.к. ++a = 3 и прибавляем 2
d = (2+ b++); alert(d);      // 4 b++ =2 +2 =4
alert(a);                    // 3 т.к. приняло новое значение
alert(b);                    // 3 т.к. приняло новое значение благодаря инкременту


// 2. Чему будет равен x в примере ниже?

var a = 2;
var x = 1 + (a *= 2); // 2*2+1=5

// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
// Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

var a = 1;
var b = 2;

if (a && b > 0) {
    alert(a - b);
} else if (a && b < 0) {
    alert(a * b);
} else {
    alert(a + b)
}

// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

a = 14

switch (a) {
    case 1:
        document.write(1);
    case 2:
        document.write(2);
    case 3:
        document.write(3);
    case 4:
        document.write(4);
    case 5:
        document.write(5);
    case 6:
        document.write(6);
    case 7:
        document.write(7);
    case 8:
        document.write(8);
    case 9:
        document.write(9);
    case 10:
        document.write(10);
    case 11:
        document.write(11);
    case 12:
        document.write(12);
    case 13:
        document.write(13);
    case 14:
        document.write(14);
    case 15:
        document.write(15);
        break;
}

// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

function slozhenie (a , b){
    c = a + b;
    return c;
}
function delenie (a, b){
    c = a / b;
    return c;
}
function vichitanie (a, b){
    c = a - b;
    return c;
}
function umnozhenie (a, b){
    c = a * b;
    return c;
}

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – 
// значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну
//  из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {
    if (operation = '+') {
        arg1 + arg2 ;
    } else if (operation = '-'){
        arg1 - arg2;
    } else if(operation = '/'){
        arg1 / arg2;
    } else if(operation = '*'){
        arg1 * arg2;
    } else {
        console.log('Операция неверная');
    }
}
mathOperation(vichitanie(3,2), umnozhenie(2,2), '+');
// 7) *Сравнить null и 0. Попробуйте объяснить результат.

var age = null; // null - значение "Ничего" или "Неизвестно"

var number = 0; // 0 - число, а null - 'Незивестная информация'

