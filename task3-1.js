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

console.log("Введите ребро куба(a):");
const a = await readnumber();
let v = Math.pow(a,3);
console.log("Объем куба(v) = " + v);
let s = 6*Math.pow(a,2);
console.log("Площадь поверхности куба(s) = " + s);