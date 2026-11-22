// =======================================================================
// 1. ГЛОБАЛЬНЫЙ МАССИВ И ЗАГРУЗКА СТАТЕЙ ИЗ SQLITE (ПР9, Этап 2)
// =======================================================================
let allArticles = [];
const postsContainer = document.getElementById('postsContainer');

// Асинхронная функция загрузки статей с бэкенда
async function loadArticlesFromServer() {
    try {
        const response = await fetch('/api/posts');
        allArticles = await response.json();
        renderArticles(allArticles);
    } catch (error) {
        console.error('Не удалось загрузить статьи с сервера:', error);
        postsContainer.innerHTML = '<p class="no-results">Ошибка соединения с сервером. Попробуйте позже.</p>';
    }
}

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

    // Проверяем в localStorage только список ID статей, которые текущий браузер уже лайкнул
    const likedIds = JSON.parse(localStorage.getItem('likedPostIds')) || [];

    articlesArray.forEach(article => {
        const plainTextSnippet = getPlainText(article.text);
        const isAlreadyLiked = likedIds.includes(article.id);
        const likedClass = isAlreadyLiked ? 'liked' : '';
        const likedText = isAlreadyLiked ? '❤ Вы лайкнули' : '❤ Лайк';

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

// Запускаем загрузку статей при открытии страницы
loadArticlesFromServer();

// =======================================================================
// 3. РЕАЛИЗАЦИЯ ЖИВОГО ПОИСКА (ПО МАССИВУ allArticles)
// =======================================================================
const searchInput = document.getElementById('searchInput');

if (searchInput) {
    searchInput.addEventListener('input', function(event) {
        const searchText = event.target.value.toLowerCase().trim();

        const filteredArticles = allArticles.filter(article => {
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
            const fullArticle = allArticles.find(item => item.id === articleId);

            if (!fullArticle) return;

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
// 5. ОТПРАВКА ЛАЙКОВ НА СЕРВЕР (PATCH /api/posts/:id/like)
// =======================================================================
function initLikeButtons() {
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(function(button) {
        button.addEventListener('click', async function() {
            const articleId = parseInt(button.closest('article').getAttribute('data-id'));
            const likedIds = JSON.parse(localStorage.getItem('likedPostIds')) || [];

            if (likedIds.includes(articleId)) return;

            try {
                const response = await fetch(`/api/posts/${articleId}/like`, {
                    method: 'PATCH'
                });

                if (response.ok) {
                    const targetArticle = allArticles.find(item => item.id === articleId);
                    if (targetArticle) {
                        targetArticle.likes = (targetArticle.likes || 0) + 1;
                    }

                    likedIds.push(articleId);
                    localStorage.setItem('likedPostIds', JSON.stringify(likedIds));

                    const countSpan = button.querySelector('.like-count');
                    const textSpan = button.querySelector('span');
                    countSpan.textContent = targetArticle ? targetArticle.likes : Number(countSpan.textContent) + 1;
                    textSpan.textContent = '❤ Вы лайкнули';
                    button.classList.add('liked');
                }
            } catch (error) {
                console.error('Ошибка при отправке лайка:', error);
            }
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
// 7. ОТПРАВКА НОВОЙ СТАТЬИ НА СЕРВЕР (ПР9, Этап 3: POST /api/posts)
// =======================================================================
const addForm = document.getElementById('addArticleForm');
const postTitleInput = document.getElementById('postTitle');
const postTextInput = document.getElementById('postText');
const postTagsInput = document.getElementById('postTags');

if (addForm) {
    addForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const titleValue = postTitleInput.value.trim();
        const textValue = postTextInput.value.trim();
        const tagsValue = postTagsInput.value.trim() || "#физика #код";

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
        const isoDate = today.toISOString().split('T');

        const articleData = {
            title: titleValue,
            date: formattedDate,
            isoDate: isoDate,
            text: textValue.includes('<p>') ? textValue : `<p>${textValue}</p>`,
            tags: tagsValue
        };

        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(articleData)
            });

            if (response.ok) {
                const createdArticle = await response.json();
                allArticles.unshift(createdArticle);
                renderArticles(allArticles);
                addForm.reset();
            } else {
                alert('Ошибка при сохранении статьи на сервере.');
            }
        } catch (error) {
            console.error('Сетевая ошибка:', error);
            alert('Не удалось связаться с сервером.');
        }
    });
}

