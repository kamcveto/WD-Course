// Задача: помислете и посочете какво ще се изпише в конзолата, а след това стартирайте скрипта и сравнете вашите отговори:
var a = 1, b = 1;
console.log( a++ + ++a); // 3 = console - 4
console.log( ++b + b++); // 3 = console - 4
console.log( a + b); // 6 = console -6


var x = 1, y  = 1;
console.log( x++ == ++x); // f = console - f
console.log( ++y == y++); // f = console - t
console.log(x == y) // t = console - t
