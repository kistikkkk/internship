console.log("Числа x и y задаются случайно");
let x = Math.floor(Math.random() * 101);
console.log("x = " + x);
let y = Math.floor(Math.random() * 101);
console.log("y = " + y);
let answer = (Math.abs(x) - Math.abs(y))/(1 + Math.abs(x*y));
console.log("Ответ: " + answer);