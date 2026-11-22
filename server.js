const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

// Подключение к базе данных SQLite (blog.db)
const db = new sqlite3.Database('./blog.db', (err) => {
    if (err) {
        console.error('Ошибка подключения к базе данных:', err.message);
    } else {
        console.log('Успешное подключение к базе данных SQLite (blog.db).');
    }
});

// Создание таблицы posts и начальное наполнение
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        date TEXT NOT NULL,
        isoDate TEXT NOT NULL,
        text TEXT NOT NULL,
        tags TEXT DEFAULT '#физика #код',
        likes INTEGER DEFAULT 0
    )`);

    db.get('SELECT COUNT(*) AS count FROM posts', (err, row) => {
        if (err) {
            return console.error(err.message);
        }

        if (row.count === 0) {
            const insert = 'INSERT INTO posts (title, date, isoDate, text, tags) VALUES (?, ?, ?, ?, ?)';

            const starterPosts = [
                [
                    "Формулы движения, которые управляют GTA и Minecraft",
                    "25 октября 2026",
                    "2026-10-25",
                    `<p>Как уравнения кинематики из школьного учебника превращаются в алгоритмы для перемещения игровых персонажей? Разбираем, как с помощью векторов, формул равномерного и равноускоренного движения заставить объект реалистично падать, прыгать и ускоряться в коде.</p>
                    <div class="formula"><span style="font-style: italic;">S = V<sub>0</sub> &middot; t + <div style="display: inline-block; text-align: center; vertical-align: middle;"><div style="border-bottom: 1px solid; padding: 0 4px;">a &middot; t<sup>2</sup></div><div>2</div></div></span></div>
                    <p>В коде игры этот процесс просчитывается каждый кадр (интервал времени dt). Вместо сложных интегралов программисты используют метод Эйлера: каждую итерацию цикла позиция объекта изменяется на величину скорости, а скорость изменяется под действием ускорения свободного падения:</p>
                    <div class="formula"><span style="font-style: italic;">x = x + v<sub>x</sub> &middot; dt</span><span style="margin: 0 25px;">|</span><span style="font-style: italic;">v<sub>y</sub> = v<sub>y</sub> + g &middot; dt</span></div>
                    <p>Именно такое простое дискретное сложение сил моделирует реалистичную физику прыжка и падения блоков в современных 3D-песочницах.</p>`,
                    "#кинематика #механика #разработка_игр"
                ],
                [
                    "Законы Ньютона на языке векторов и кода",
                    "20 октября 2026",
                    "2026-10-20",
                    `<p>Каждый раз, когда машина в симуляторе врезается в стену, компьютер просчитывает законы динамики. В этой статье мы переведем три закона Ньютона на язык векторов и напишем простую логику симуляции сил, массы и ускорения для физического движка.</p>
                    <ul>
                        <li><strong>Первый закон (Инерция):</strong> Объект продолжает двигаться с постоянной скоростью, пока вектор суммы всех сил равен нулю.</li>
                        <li><strong>Второй закон (Основное уравнение):</strong> Формулируется как сила равна произведению массы на ускорение: <div class="formula"><span style="font-family: serif; font-style: italic;">F&#8407; = m &middot; a&#8407;</span></div> Для программиста это означает поиск ускорения через деление силы на массу: <div class="formula"><span style="font-family: serif; font-style: italic;">a&#8407; = <div style="display: inline-block; text-align: center; vertical-align: middle;"><div style="border-bottom: 1px solid; padding: 0 4px;">F&#8407;</div><div>m</div></div></span></div></li>
                        <li><strong>Третий закон (Противодействие):</strong> Силы взаимодействия двух тел равны по модулю и противоположны по направлению: <div class="formula"><span style="font-family: serif; font-style: italic;">F&#8407;<sub>1</sub> = &minus;F&#8407;<sub>2</sub></span></div></li>
                    </ul>
                    <p>Если к машине прикладывается сила тяги двигателя, мы делим её на массу авто, получаем вектор ускорения и прибавляем его к текущей скорости.</p>`,
                    "#динамика #ньютон #алгоритмы"
                ],
                [
                    "Реактивное движение: летим в космос на уравнениях Мещерского",
                    "15 октября 2026",
                    "2026-10-15",
                    `<p>Закон сохранения импульса объясняет, почему взлетает ракета. Но как закодировать изменение массы топлива каждую миллисекунду? Изучаем уравнения движения тел с переменной массой и строим математическую модель старта ракеты на языке программирования.</p>
                    <div class="formula"><span style="font-style: italic;">m &middot; <div style="display: inline-block; text-align: center; vertical-align: middle;"><div style="border-bottom: 1px solid;">dv&#8407;</div><div>dt</div></div> = F&#8407; + u&#8407; &middot; <div style="display: inline-block; text-align: center; vertical-align: middle;"><div style="border-bottom: 1px solid;">dm</div><div>dt</div></div></span></div>
                    <p>Где <code>u&#8407;</code> — вектор скорости истечения газов, а <code>dm/dt</code> — секундный расход массы.</p>`,
                    "#импульс #космос #симуляция"
                ],
                [
                    "Сила трения и концепция сопротивления среды в коде",
                    "10 октября 2026",
                    "2026-10-10",
                    `<p>Почему запущенный в игре мяч останавливается, а не катится бесконечно? Без симуляции сил трения и сопротивления воздуха любой игровой мир превратился бы в идеальный лед.</p>
                    <p>Сила трения скольжения описывается классической формулой:</p>
                    <div class="formula"><span style="font-style: italic;">F<sub>trenie</sub> = &mu; &middot; N</span></div>
                    <p>В коде простейших двухмерных игр сопротивление среды часто моделируют более простым трюком — затуханием скорости (damping). Каждый кадр скорость объекта умножается на коэффициент меньше единицы:</p>
                    <div class="formula"><span style="font-style: italic;">v<sub>x</sub> = v<sub>x</sub> &middot; 0.98</span><span style="margin: 0 25px;">|</span><span style="font-style: italic;">v<sub>y</sub> = v<sub>y</sub> &middot; 0.98</span></div>`,
                    "#динамика #физика_игр #механика"
                ],
                [
                    "Законы сохранения энергии в программировании коллизий",
                    "05 октября 2026",
                    "2026-10-05",
                    `<p>Как просчитать отскок двух бильярдных шаров при столкновении? Ответ кроется в совместном использовании закона сохранения импульса и закона сохранения механической энергии.</p>
                    <div class="formula"><span style="font-style: italic;">E<sub>kin1</sub> + E<sub>kin2</sub> = E<sub>kin1</sub>' + E<sub>kin2</sub>'</span></div>
                    <p>В коде обработчика столкновений мы раскладываем векторы скоростей шаров на нормальную и тангенциальную составляющие. После этого мы обмениваем нормальные скорости шаров между собой.</p>`,
                    "#энергия #импульс #коллизии"
                ]
            ];

            starterPosts.forEach(post => db.run(insert, post));
            console.log('Стартовые статьи успешно добавлены в базу данных.');
        }
    });
});
// Задание 3.1: Получение всех статей (свежие сверху)
app.get('/api/posts', (req, res) => {
    const sql = 'SELECT * FROM posts ORDER BY id DESC';
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Получение одной статьи по ID
app.get('/api/posts/:id', (req, res) => {
    const sql = 'SELECT * FROM posts WHERE id = ?';
    db.get(sql, [req.params.id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ error: 'Статья не найдена' });
        }
        res.json(row);
    });
});

// Задание 3.2: Безопасное добавление статьи
app.post('/api/posts', (req, res) => {
    const { title, date, isoDate, text, tags } = req.body;

    if (!title || !text) {
        return res.status(400).json({ error: 'Заголовок и текст статьи обязательны!' });
    }

    const today = new Date();
    const finalDate = date || today.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
    const finalIsoDate = isoDate || today.toISOString().split('T');
    const finalTags = tags || '#физика #код';

    const sql = 'INSERT INTO posts (title, date, isoDate, text, tags) VALUES (?, ?, ?, ?, ?)';
    const params = [title, finalDate, finalIsoDate, text, finalTags];

    db.run(sql, params, function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({
            id: this.lastID,
            title,
            date: finalDate,
            isoDate: finalIsoDate,
            text,
            tags: finalTags,
            likes: 0
        });
    });
});

// Задание 3.3: Счетчик лайков (PATCH /api/posts/:id/like)
app.patch('/api/posts/:id/like', (req, res) => {
    const postId = req.params.id;
    const sql = 'UPDATE posts SET likes = likes + 1 WHERE id = ?';

    db.run(sql, [postId], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Лайк засчитан', changes: this.changes });
    });
});

// Удаление статьи по ID (DELETE)
app.delete('/api/posts/:id', (req, res) => {
    const sql = 'DELETE FROM posts WHERE id = ?';
    db.run(sql, [req.params.id], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Статья для удаления не найдена' });
        }
        res.json({ message: 'Статья успешно удалена', deletedId: Number(req.params.id) });
    });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}`);
});
