const fs = require('node:fs');
const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


function readFileFromInput() {
    readline.question('Введите имя файла: ', (filename) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (err) {
                if (err.code === 'ENOENT') {
                  console.log("Ошибка: Такого файла нет.");
                } else {
                  console.log(`Ошибка: ${err.message}`);
                }
                readline.close();
                return;
            }

            if (Buffer.byteLength(data, 'utf8') > 50 * 1024) {
                console.log("Ошибка: Файл больше 50 Кб.")
                readline.close();
                return;
            }

            console.log("Содержимое файла:\n", data);
            readline.close();
        });
    });
}

readFileFromInput();