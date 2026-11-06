// =======================================================================
// 1. БАЗА ДАННЫХ СТАТЕЙ (С сохранением вашей тематики и LocalStorage)
// =======================================================================
let initialArticles = JSON.parse(localStorage.getItem('myBlogPosts')) || [
    {
        id: 1,
        title: "Формулы движения, которые управляют GTA и Minecraft",
        date: "25 октября 2026",
        isoDate: "2026-10-25",
        text: `
            <p>Как уравнения кинематики из школьного учебника превращаются в алгоритмы для перемещения игровых персонажей? Разбираем, как с помощью векторов, формул равномерного и равноускоренного движения заставить объект реалистично падать, прыгать и ускоряться в коде.</p>
            <div class="formula">
                <span style="font-style: italic;">S = V<sub>0</sub> &middot; t + <div style="display: inline-block; text-align: center; vertical-align: middle;"><div style="border-bottom: 1px solid; padding: 0 4px;">a &middot; t<sup>2</sup></div><div>2</div></div></span>
            </div>
            <p>В коде игры этот процесс просчитывается каждый кадр (интервал времени dt). Вместо сложных интегралов программисты используют метод Эйлера: каждую итерацию цикла позиция объекта изменяется на величину скорости, а скорость изменяется под действием ускорения свободного падения:</p>
            <div class="formula">
                <span style="font-style: italic;">x = x + v<sub>x</sub> &middot; dt</span>
                <span style="margin: 0 25px;">|</span>
                <span style="font-style: italic;">v<sub>y</sub> = v<sub>y</sub> + g &middot; dt</span>
            </div>
            <p>Именно такое простое дискретное сложение сил моделирует реалистичную физику прыжка и падения блоков в современных 3D-песочницах.</p>
        `,
        tags: "#кинематика #механика #разработка_игр",
        likes: 0,
        isLiked: false
    },
    {
        id: 2,
        title: "Законы Ньютона на языке векторов и кода",
        date: "20 октября 2026",
        isoDate: "2026-10-20",
        text: `
            <p>Каждый раз, когда машина в симуляторе врезается в стену, компьютер просчитывает законы динамики. В этой статье мы переведем три закона Ньютона на язык векторов и напишем простую логику симуляции сил, массы и ускорения для физического движка.</p>
            <ul>
                <li><strong>Первый закон (Инерция):</strong> Объект продолжает двигаться с постоянной скоростью, пока вектор суммы всех сил равен нулю.</li>
                <li><strong>Второй закон (Основное уравнение):</strong> Формулируется как сила равна произведению массы на ускорение: 
                    <div class="formula"><span style="font-family: serif; font-style: italic;">F&#8407; = m &middot; a&#8407;</span></div>
                    Для программиста это означает поиск ускорения через деление силы на массу: 
                    <div class="formula"><span style="font-family: serif; font-style: italic;">a&#8407; = <div style="display: inline-block; text-align: center; vertical-align: middle;"><div style="border-bottom: 1px solid; padding: 0 4px;">F&#8407;</div><div>m</div></div></span></div>
                </li>
                <li><strong>Третий закон (Противодействие):</strong> Силы взаимодействия двух тел равны по модулю и противоположны по направлению: 
                    <div class="formula"><span style="font-family: serif; font-style: italic;">F&#8407;<sub>1</sub> = &minus;F&#8407;<sub>2</sub></span></div>
                </li>
            </ul>
            <p>Если к машине прикладывается сила тяги двигателя, мы делим её на массу авто, получаем вектор ускорения и прибавляем его к текущей скорости.</p>
        `,
        tags: "#динамика #ньютон #алгоритмы",
        likes: 0,
        isLiked: false
    },
    {
        id: 3,
        title: "Реактивное движение: летим в космос на уравнениях Мещерского",
        date: "15 октября 2026",
        isoDate: "2026-10-15",
        text: `
            <p>Закон сохранения импульса объясняет, почему взлетает ракета. Но как закодировать изменение массы топлива каждую миллисекунду? Изучаем уравнения движения тел с переменной массой и строим математическую модель старта ракеты на языке программирования.</p>
            <div class="formula">
                <span style="font-style: italic;">m &middot; <div style="display: inline-block; text-align: center; vertical-align: middle;"><div style="border-bottom: 1px solid;">dv&#8407;</div><div>dt</div></div> = F&#8407; + u&#8407; &middot; <div style="display: inline-block; text-align: center; vertical-align: middle;"><div style="border-bottom: 1px solid;">dm</div><div>dt</div></div></span>
            </div>
            <p>Где <code>u&#8407;</code> — вектор скорости истечения газов, а <code>dm/dt</code> — секундный расход массы.</p>
        `,
        tags: "#импульс #космос #симуляция",
        likes: 0,
        isLiked: false
    },
    {
        id: 4,
        title: "Сила трения и концепция сопротивления среды в коде",
        date: "10 октября 2026",
        isoDate: "2026-10-10",
        text: `
            <p>Почему запущенный в игре мяч останавливается, а не катится бесконечно? Без симуляции сил трения и сопротивления воздуха любой игровой мир превратился бы в идеальный лед.</p>
            <p>Сила трения скольжения описывается классической формулой:</p>
            <div class="formula"><span style="font-style: italic;">F<sub>trenie</sub> = &mu; &middot; N</span></div>
            <p>В коде простейших двухмерных игр сопротивление среды часто моделируют более простым трюком — затуханием скорости (damping). Каждый кадр скорость объекта умножается на коэффициент меньше единицы:</p>
            <div class="formula">
                <span style="font-style: italic;">v<sub>x</sub> = v<sub>x</sub> &middot; 0.98</span>
                <span style="margin: 0 25px;">|</span>
                <span style="font-style: italic;">v<sub>y</sub> = v<sub>y</sub> &middot; 0.98</span>
            </div>
        `,
        tags: "#динамика #физика_игр #механика",
        likes: 0,
        isLiked: false
    },
    {
        id: 5,
        title: "Законы сохранения энергии в программировании коллизий",
        date: "05 октября 2026",
        isoDate: "2026-10-05",
        text: `
            <p>Как просчитать отскок двух бильярдных шаров при столкновении? Ответ кроется в совместном использовании закона сохранения импульса и закона сохранения механической энергии.</p>
            <div class="formula"><span style="font-style: italic;">E<sub>kin1</sub> + E<sub>kin2</sub> = E<sub>kin1</sub>' + E<sub>kin2</sub>'</span></div>
            <p>В коде обработчика столкновений мы раскладываем векторы скоростей шаров на нормальную и тангенциальную составляющие. После этого мы обмениваем нормальные скорости шаров между собой.</p>
        `,
        tags: "#энергия #импульс #коллизии",
        likes: 0,
        isLiked: false
    }
];

const postsContainer = document.getElementById('postsContainer');

// Helper для очистки превью текста в ленте блога от HTML-тегов
function getPlainText(htmlString) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;
    const formulas = tempDiv.querySelectorAll('.formula');
    formulas.forEach(f => f.textContent = " [Формула] ");
    return tempDiv.textContent || tempDiv.innerText || "";
}

// =======================================================================
// 2. ФУНКЦИЯ ДИНАМИЧЕСКОГО РЕНДЕРИНГА СТАТЕЙ
// =======================================================================
function renderArticles(articlesArray) {
    postsContainer.innerHTML = '';
    
    if (articlesArray.length === 0) {
        postsContainer.innerHTML = '<p class="no-results">Ничего не найдено</p>';
        return;
    }
    
    articlesArray.forEach(article => {
        const plainTextSnippet = getPlainText(article.text);
        const likedClass = article.isLiked ? 'liked' : '';
        const likedText = article.isLiked ? '❤ Вы лайкнули' : '❤ Лайк';
        
        const articleHtml = `
            <article data-id="${article.id}">
                <header>
                    <h3>${article.title}</h3>
                    <p>Опубликовано: <time datetime="${article.isoDate}">${article.date}</time></p>
                </header>
                <p class="article-text short">${plainTextSnippet}</p>
                <button class="read-more-btn">Читать далее</button>
                <footer>
                    <p>Теги: ${article.tags}</p>
                    <button class="like-btn ${likedClass}"><span>${likedText}</span> (<span class="like-count">${article.likes || 0}</span>)</button>
                </footer>
            </article>
        `;
        postsContainer.insertAdjacentHTML('beforeend', articleHtml);
    });

    initLikeButtons();
    initReadMoreButtons(); 
}

renderArticles(initialArticles);
// =======================================================================
// 3. РЕАЛИЗАЦИЯ ЖИВОГО ПОИСКА
// =======================================================================
const searchInput = document.getElementById('searchInput');

if (searchInput) {
    searchInput.addEventListener('input', function(event) {
        const searchText = event.target.value.toLowerCase().trim();
        
        const filteredArticles = initialArticles.filter(article => {
            const inTitle = article.title.toLowerCase().includes(searchText);
            const inText = article.text.toLowerCase().includes(searchText);
            const inTags = article.tags.toLowerCase().includes(searchText);
            return inTitle || inText || inTags;
        });
        
        renderArticles(filteredArticles);
    });
}

// =======================================================================
// 4. ЛОГИКА РАБОТЫ МОДАЛЬНОГО ОКНА (ОТКРЫТИЕ СТАТЬИ)
// =======================================================================
const modal = document.getElementById('articleModal');
const modalBody = document.getElementById('modalBody');
const closeModalSpan = document.querySelector('.close-modal');

function initReadMoreButtons() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    
    readMoreButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const articleId = parseInt(btn.closest('article').getAttribute('data-id'));
            const fullArticle = initialArticles.find(item => item.id === articleId);
            
            modalBody.innerHTML = `
                <h3>${fullArticle.title}</h3>
                <p class="modal-date">Опубликовано: ${fullArticle.date}</p>
                ${fullArticle.text.startsWith('<p>') ? fullArticle.text : `<p>${fullArticle.text}</p>`}
                <p class="modal-tags">Теги: ${fullArticle.tags}</p>
            `;
            
            modal.style.display = 'flex';
        });
    });
}

if (closeModalSpan) {
    closeModalSpan.addEventListener('click', function() {
        modal.style.display = 'none';
    });
}

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// =======================================================================
// 5. ОГРАНИЧЕНИЕ ЛАЙКОВ И ИХ СОХРАНЕНИЕ В LOCALSTORAGE
// =======================================================================
function initLikeButtons() {
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const articleId = parseInt(button.closest('article').getAttribute('data-id'));
            const targetArticle = initialArticles.find(item => item.id === articleId);
            
            if (targetArticle.isLiked) return;
            
            targetArticle.likes = (targetArticle.likes || 0) + 1;
            targetArticle.isLiked = true;
            
            localStorage.setItem('myBlogPosts', JSON.stringify(initialArticles));
            
            const countSpan = button.querySelector('.like-count');
            const textSpan = button.querySelector('span');
            countSpan.textContent = targetArticle.likes;
            textSpan.textContent = '❤ Вы лайкнули';
            
            button.classList.add('liked');
        });
    });
}

// =======================================================================
// 6. ПЕРЕКЛЮЧАТЕЛЬ ТЕМ ОФОРМЛЕНИЯ
// =======================================================================
const themeButton = document.getElementById('themeBtn');

if (themeButton) {
    themeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            themeButton.textContent = 'Светлая тема';
        } else {
            themeButton.textContent = 'Темная тема';
        }
    });
}

// =======================================================================
// 7. СБОР ДАННЫХ ИЗ ФОРМЫ, ВАЛИДАЦИЯ И ОБНОВЛЕНИЕ БАЗЫ ДАННЫХ (ПР7)
// =======================================================================
const addForm = document.getElementById('addArticleForm');
const postTitleInput = document.getElementById('postTitle');
const postTextInput = document.getElementById('postText');
const postTagsInput = document.getElementById('postTags');

if (addForm) {
    addForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const titleValue = postTitleInput.value.trim();
        const textValue = postTextInput.value.trim();
        const tagsValue = postTagsInput.value.trim() || "#физика";
        
        // Валидация длин строк (Исправленные скобки из методички)
        if (titleValue.length < 5) {
            alert('Ошибка: Заголовок статьи должен быть не короче 5 символов!');
            return; 
        }
        if (textValue.length < 20) {
            alert('Ошибка: Описание слишком короткое. Расскажите подробнее (минимум 20 символов)!');
            return; 
        }
        
        const today = new Date();
        const formattedDate = today.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
        const isoDate = today.toISOString().split('T')[0]; 
        
        const newArticle = {
            id: Date.now(), 
            title: titleValue,
            date: formattedDate,
            isoDate: isoDate,
            text: textValue.includes('<p>') ? textValue : `<p>${textValue}</p>`, 
            tags: tagsValue,
            likes: 0,
            isLiked: false
        };
        
        initialArticles.unshift(newArticle);
        localStorage.setItem('myBlogPosts', JSON.stringify(initialArticles));
        renderArticles(initialArticles);
        addForm.reset();
    });
}





