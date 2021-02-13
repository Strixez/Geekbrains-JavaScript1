// 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
// 2. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п., причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.
// 3. *Заменить буквы, обозначающие фигуры картинками.
var bukvi = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var numbers = [8, 7, 6, 5, 4, 3, 2, 1];
var table = document.createElement('table');
table.style.border = "5px solid gray";
table.style.width = '700px';
table.style.height = '700px';
var tr, td, i;
for (var i = 0; i < 8; i++) {
    tr = document.createElement("tr");
    tr.classList.add(numbers[i]); // Добавили координаты от 1 до 8
    table.append(tr);
    for (j = 0; j < 8; j++) {
        td = document.createElement("td");
        td.classList.add(bukvi[j]); // Добавили координаты буквы
        td.style.backgroundColor = (i+j)%2 ? "black" : "white";
        tr.append(td);
    }
}


var block = document.getElementById("x");
block.append(table);


var chess = {
    whiteKing: "&#9812",
    whiteQueen: "&#9813;",
    whiteBishop: "&#9815;",
    whiteRook: "&#9814;",
    whiteKnight: "&#9816;",
    whitePawn: "&#9823;",
    blackKing: "&#9818;",
    blackQueen: "&#9819;",
    blackRook: "&#9820;",
    blackKnight: "&#9822;",
    blackPawn: "&#9823;",
    blackBishop: "&#9821;"
}

