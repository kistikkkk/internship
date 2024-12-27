async function readline() {
    return new Promise((resolve) => {
        process.stdin.once('data', (data) => {
            resolve(data.toString().trim());
        });
    });
}

async function square(number) {
    return new Promise((resolve, reject) => {
        const num = parseFloat(number);

        if (isNaN(num)) {
            reject(new Error("Аргумент не является числом"));
            return square();
        }
    
        if (num < 0) {
            reject(new Error("Нельзя вычислить квадратный корень из отрицательного числа"));
            return square();
        }
        const result = Math.sqrt(num);
        resolve(result);
      });
}

async function main() {
    try {
        const number = await readline();
        const result = await square(number);
        console.log(`Квадратный корень из ${number} равен ${result}`);
    } catch (error) {
        console.log(`Произошла ошибка: ${error.message}`);
        return;
    }
}

console.log("Введите число: ");
main();