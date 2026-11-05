// =======================================================================
// 1. БАЗА ДАННЫХ СТАТЕЙ С ЧИСТЫМ HTML-ОФОРМЛЕНИЕМ ФОРМУЛ И 0 ЛАЙКОВ
// =======================================================================
const initialArticles = [
    {
        id: 1,
        title: "Формулы движения, которые управляют GTA и Minecraft",
        date: "25 октября 2026",
        isoDate: "2026-10-25",
        text: `
            <p>Как уравнения кинематики из школьного учебника превращаются в алгоритмы для перемещения игровых персонажей? Разбираем, как с помощью векторов, формул равномерного и равноускоренного движения заставить объект реалистично падать, прыгать и ускоряться в коде.</p>
            <p>В основе любой игровой симуляции лежит базовая формула пути из кинематики:</p>
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
            <p>Если к машине прикладывается сила тяги двигателя, мы делим её на массу авто, получаем вектор ускорения и прибавляем его к текущей скорости. Третий закон обрабатывает коллизии: при ударе об стену стена возвращает машине импульс силы, направленный в противоположную сторону, что приводит к мгновенной остановке или отскоку.</p>
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
            <p>Классическая формула Ньютона не работает, так как масса системы уменьшается по мере сгорания топлива. На помощь приходит фундаментальное уравнение Мещерского:</p>
            <div class="formula">
                <span style="font-style: italic;">m &middot; <div style="display: inline-block; text-align: center; vertical-align: middle;"><div style="border-bottom: 1px solid;">dv&#8407;</div><div>dt</div></div> = F&#8407; + u&#8407; &middot; <div style="display: inline-block; text-align: center; vertical-align: middle;"><div style="border-bottom: 1px solid;">dm</div><div>dt</div></div></span>
            </div>
            <p>Где <code>u&#8407;</code> — вектор скорости истечения газов, а <code>dm/dt</code> — секундный расход массы. В коде симулятора мы создаем цикл, где на каждом шаге масса ракеты уменьшается на фиксированное значение сгоревшего керосина. Это позволяет построить реалистичный график изменения ускорения: чем легче становится ракета, тем быстрее она набирает скорость, стремясь к первой космической.</p>
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
            <div class="formula"><span style="font-style: italic;">F<sub>trenie}</sub> = &mu; &middot; N</span></div>
            <p>В коде простейших двухмерных игр сопротивление среды часто моделируют более простым трюком — затуханием скорости (damping). Каждый кадр скорость объекта умножается на коэффициент меньше единицы:</p>
            <div class="formula">
                <span style="font-style: italic;">v<sub>x</sub> = v<sub>x</sub> &middot; 0.98</span>
                <span style="margin: 0 25px;">|</span>
                <span style="font-style: italic;">v<sub>y</sub> = v<sub>y</sub> &middot; 0.98</span>
            </div>
            <p>Это имитирует вязкое трение воздуха, создавая приятное и интуитивно понятное замедление для игрока.</p>
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
            <p>При абсолютно упругом ударе полная кинетическая энергия системы сохраняется:</p>
            <div class="formula"><span style="font-style: italic;">E<sub>kin1</sub> + E<sub>kin2</sub> = E<sub>kin1</sub>' + E<sub>kin2</sub>'</span></div>
            <p>Или в развернутом виде через массы и квадраты скоростей шаров:</p>
            <div class="formula">
                <span style="font-style: italic;">
                <div style="display: inline-block; text-align: center; vertical-align: middle;"><div style="border-bottom: 1px solid;">m<sub>1</sub> &middot; v<sub>1</sub><sup>2</sup></div><div>2</div></div> + 
                <div style="display: inline-block; text-align: center; vertical-align: middle;"><div style="border-bottom: 1px solid;">m<sub>2</sub> &middot; v<sub>2</sub><sup>2</sup></div><div>2</div></div> = 
                <div style="display: inline-block; text-align: center; vertical-align: middle;"><div style="border-bottom: 1px solid;">m<sub>1</sub> &middot; (v<sub>1</sub>')<sup>2</sup></div><div>2</div></div> + 
                <div style="display: inline-block; text-align: center; vertical-align: middle;"><div style="border-bottom: 1px solid;">m<sub>2</sub> &middot; (v<sub>2</sub>')<sup>2</sup></div><div>2</div></div>
                </span>
            </div>
            <p>В коде обработчика столкновений мы раскладываем векторы скоростей шаров на нормальную (вдоль линии удара) и тангенциальную составляющие. После этого мы обмениваем нормальные скорости шаров между собой. Это мгновенно дает физически точный и красивый отскок шаров на экране компьютера.</p>
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
    
    // Заменяем блоки формул аккуратной текстовой заглушкой для ленты анонсов
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
                    <button class="like-btn ${likedClass}"><span>${likedText}</span> (<span class="like-count">${article.likes}</span>)</button>
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
                ${fullArticle.text}
                <p class="modal-tags">Теги: ${fullArticle.tags}</p>
            `;
            
            modal.style.display = 'flex';
        });
    });
}

closeModalSpan.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// =======================================================================
// 5. ОГРАНИЧЕНИЕ ЛАЙКОВ (Только 1 лайк от пользователя)
// =======================================================================
function initLikeButtons() {
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const articleId = parseInt(button.closest('article').getAttribute('data-id'));
            const targetArticle = initialArticles.find(item => item.id === articleId);
            
            if (targetArticle.isLiked) return;
            
            targetArticle.likes++;
            targetArticle.isLiked = true;
            
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

themeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        themeButton.textContent = 'Светлая тема';
    } else {
        themeButton.textContent = 'Темная тема';
    }
});



