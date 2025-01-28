import { serve } from "bun";

const port = parseInt(process.env.PORT) || 3000;

serve({
  fetch(req) {
    // Простое обслуживание статических файлов
    const filePath = './public/index.html'; // Объявление filePath
    console.log(filePath); // Вывод filePath в консоль
    try {
        return new Response(Bun.file(filePath));
    } catch (err) {
        console.error("Ошибка при обслуживании файла:", err);
        return new Response("Файл не найден", { status: 404 });
    }
  },
  port,
});

console.log(`Сервер запущен на порту ${port}`);