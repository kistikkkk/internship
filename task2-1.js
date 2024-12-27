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

console.log("Введите x:");
const x = await readnumber();
console.log("Введите y:");
const y = await readnumber();
let answer = (Math.abs(x) - Math.abs(y))/(1 + Math.abs(x*y));
console.log("Ответ: " + answer);