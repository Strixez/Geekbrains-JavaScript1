// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: 
// {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать 
// соответствующее сообщение с помощью console.log и вернуть пустой объект.

var digit = {
    number: +prompt('Введите значение от 0 до 999: '),
    units: 0,
    tens: 0,
    hundreds: 0,
};

if (digit.number <= 9) {
    digit.units = digit.number;
} else if (digit.number <= 999) {
    digit.units = Math.floor(digit.number % 10);
    digit.tens = Math.floor(digit.number / 10 % 10);
    digit.hundreds = Math.floor(digit.number / 100 % 10);
} else {
    digit.number = 0;
    console.log('Вы ввели число за диапазоном 0 - 999');
}
console.log(digit);

// 2. Для игры, реализованной на уроке, добавить возможность вывода хода номер n (номер задается пользователем)



// 3. *На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»

var questionList = [
    'Столица США',
    'Самая большая автокомпания по капитализации',
    'Год основания Москвы',];

var gain = [80000, 500000, 1000000];

var answers = [['A: Лос-Анджелес B: Нью-Йорк C: Вашингтон D: Калифорния'], ['A: Tesla B: Volkswagen C: Mercedes-Benz  D: Rolls-Royse'], ['A: 1145 B: 1132 C: 1147 D: 1152']];

var correct = ['C', 'A', 'C'];

var a = 0;
var b = 1;
for (var i = 0; i < 10; i++) {
    var answer = prompt('Вопрос ' + b + ': ' + questionList[i] + '\r\n' + 'Варианты ответа: \r\n' + answers[0] + '\r\n' + 'Ваш ответ?');
    if (answer.toUpperCase() == correct[0]) {
        alert('Поздравляю вы выиграли ' + gain[a] + ' рублей');
        a++;
        b++;
        answers.shift(0);
        correct.shift(0);
    } else if (gain[a] >= 100000) {
        alert('Ответ неверный. Вы выиграли 0 рублей');
        break;
    } else if (gain[a] >= 10000) {
        alert('Ответ неверный. Вы выиграли 0 рублей');
        break;
    } else {
        alert('Ответ неверный');
        break;
    }
}