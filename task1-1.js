async function readline() {
    return new Promise((resolve) => {
        process.stdin.once('data', (data) => {
            resolve(data.toString().trim());
        });
    });
}

async function readnumber() {
    const line = await readline();
    const number = parseFloat(line);
    if (isNaN(number)) {
        console.log("Введено некорректное сообщение! Введите число: ");
        return await readnumber();
    }
    return number;
}

console.log("Введите a:");
const a = await readnumber();
console.log("Введите b:");
const b = await readnumber();
let sum = a + b;
let diff = a - b;
let prod = a*b;
console.log("Сумма чисел = " + sum);
console.log("Разность чисел = " + diff);
console.log("Произведение чисел = " + prod);