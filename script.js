/* =======================================================================
   1. ГЛОБАЛЬНЫЙ СБРОС И БАЗОВЫЕ НАСТРОЙКИ
   =======================================================================*/
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    background-color: #f4f4f9;
    color: #333333;
    transition: background-color 0.3s ease, color 0.3s ease;
}

/* =======================================================================
   2. ГЛАВНАЯ ШАПКА САЙТА (HEADER) И НАВИГАЦИЯ (NAV)
   =======================================================================*/
body > header {
    background-color: #2c3e50;
    color: #ffffff;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

body > header h1 {
    font-size: 1.8rem;
    letter-spacing: 1px;
}

nav ul {
    list-style: none;
    display: flex; 
    gap: 25px;
    align-items: center;
}

nav ul li a {
    color: #ffffff;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: #1abc9c;
}

.theme-btn {
    background-color: #1abc9c;
    color: white;
    border: none;
    padding: 6px 14px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    font-family: inherit;
    transition: background-color 0.3s ease;
}

.theme-btn:hover {
    background-color: #16a085;
}

/* =======================================================================
   3. ОСНОВНОЙ КОНТЕНТ (MAIN) И ДВУХКОЛОНОЧНАЯ СЕТКА (FLEXBOX)
   ===================================================================== */
main {
    max-width: 1150px;   
    margin: 40px auto;   
    padding: 0 20px;     
    display: flex;
    gap: 30px;           
    align-items: flex-start; 
}

main section {
    flex: 7; 
}

section h2 {
    font-size: 1.8rem;
    color: #2c3e50;
    margin-bottom: 25px;
}

/* Карточка отдельной статьи */
article {
    background-color: #ffffff;
    padding: 30px;
    margin-bottom: 35px; 
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

/* Шапка внутри статьи */
article header {
    background: transparent !important; 
    padding: 0 !important;
    margin-bottom: 15px !important;
    display: block !important; 
    text-align: left !important;
}

article header h3 {
    font-size: 1.5rem !important;
    color: #2c3e50 !important; 
    display: block !important;
}

article header p {
    font-size: 0.9rem !important;
    color: #7f8c8d !important; 
}

/* Сворачивание текста статей в ленте */
.article-text.short {
    display: -webkit-box;
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Кнопка Читать далее */
.read-more-btn {
    background: none;
    border: none;
    color: #2c3e50;
    font-weight: bold;
    cursor: pointer;
    padding: 0;
    margin-bottom: 20px;
    text-decoration: underline;
    font-family: inherit;
}

.read-more-btn:hover {
    color: #1abc9c;
}

/* Подвал статьи с тегами и лайками */
article footer {
    border-top: 1px dashed #e2e8f0; 
    padding-top: 15px;
    font-size: 0.9rem;
    color: #1abc9c;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Кнопка лайка */
.like-btn {
    background-color: #f0f0f0;
    color: #333;
    border: 1px solid #ccc;
    padding: 5px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-family: inherit;
    font-weight: bold;
    transition: all 0.2s ease;
}

.like-btn:hover {
    background-color: #e0e0e0;
}

/* Кнопка лайка после нажатия */
.like-btn.liked {
    background-color: #e74c3c !important;
    border-color: #e74c3c !important;
    color: white !important;
    cursor: default;
}

/* --- ПРАВАЯ КОЛОНКА: БОКОВАЯ ПАНЕЛЬ (SIDEBAR) --- */
main aside {
    flex: 3; 
    background-color: #eef2f3;
    padding: 25px;
    border-radius: 8px;
    border-left: 6px solid #2c3e50; 
}

aside h3 {
    color: #2c3e50 !important; 
    margin-bottom: 12px;
}

aside h3:not(:first-child) {
    margin-top: 25px; 
}

aside p {
    font-size: 0.95rem;
    color: #4a5568;
}

/* =====================================================================
   4. ПОДВАЛ САЙТА (FOOTER)
   ===================================================================== */
body > footer {
    background-color: #34495e;
    color: #ffffff;
    text-align: center;
    padding: 25px;
    margin-top: 60px;
    font-size: 0.9rem;
}

body > footer p {
    margin-bottom: 5px;
}

body > footer a {
    color: #1abc9c;
    text-decoration: none;
}

body > footer a:hover {
    text-decoration: underline; 
}

/* =======================================================================
   5. СТИЛИ ДЛЯ ЖИВОГО ПОИСКА
   =======================================================================*/
.search-container { 
    margin-bottom: 25px; 
}

#searchInput {
    width: 100%;
    padding: 12px 15px;
    font-size: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    outline: none;
    font-family: inherit;
    transition: all 0.3s ease;
}

#searchInput:focus {
    border-color: #1abc9c;
    box-shadow: 0 0 5px rgba(26, 188, 156, 0.2);
}

.no-results {
    color: #7f8c8d;
    font-style: italic;
    text-align: center;
    margin-top: 20px;
}
/* =======================================================================
   6. СТИЛИ ИНТЕРАКТИВНОЙ ФОРМЫ ДОБАВЛЕНИЯ СТАТЕЙ (ПР7)
   =======================================================================*/
.article-form {
    background-color: #ffffff;
    padding: 25px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    margin-bottom: 35px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
}

.article-form h3 {
    margin-bottom: 15px;
    color: #2c3e50;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    font-weight: 600;
    margin-bottom: 5px;
    font-size: 0.95rem;
    color: #333333;
}

.form-group input, 
.form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    font-family: inherit;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s;
}

.form-group input:focus, 
.form-group textarea:focus {
    border-color: #1abc9c;
}

.submit-btn {
    background-color: #2c3e50;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    font-size: 1rem;
    width: 100%;
    transition: background 0.2s;
}

.submit-btn:hover { 
    background-color: #34495e; 
}

/* =======================================================================
   7. СТИЛИ МОДАЛЬНОГО ОКНА (ВСПЛЫВАЮЩЕЕ ОКНО СТАТЬИ)
   =======================================================================*/
.modal {
    display: none; 
    position: fixed;
    z-index: 1000; 
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    backdrop-filter: blur(4px); 
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.modal-content {
    background-color: #ffffff;
    padding: 35px;
    border-radius: 12px;
    max-width: 700px;
    width: 90%;
    max-height: 85vh;
    overflow-y: auto; 
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    animation: slideDown 0.3s ease;
}

.close-modal {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 2rem;
    font-weight: bold;
    color: #7f8c8d;
    cursor: pointer;
    transition: color 0.2s;
}

.close-modal:hover {
    color: #e74c3c;
}

@keyframes slideDown {
    from { transform: translateY(-50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

/* Оформление красивой верстки контента внутри модалки */
#modalBody h3 {
    font-size: 1.8rem;
    color: #2c3e50;
    margin-bottom: 10px;
    padding-right: 25px;
}

#modalBody .modal-date {
    font-size: 0.9rem;
    color: #7f8c8d;
    margin-bottom: 20px;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 10px;
}

#modalBody p {
    color: #333333;
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 16px;
    text-align: justify;
}

#modalBody .formula {
    background-color: #f7f9fa;
    border-left: 4px solid #1abc9c;
    padding: 12px;
    margin: 15px 0;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    text-align: center;
    color: #2c3e50;
}

#modalBody ul {
    margin-bottom: 20px;
    padding-left: 20px;
}

#modalBody ul li {
    font-size: 1.05rem;
    margin-bottom: 8px;
    color: #4a5568;
}

#modalBody .modal-tags {
    color: #1abc9c;
    font-weight: bold;
    margin-top: 25px;
    border-top: 1px dashed #e2e8f0;
    padding-top: 15px;
}

/* =======================================================================
   8. СТИЛИ ДЛЯ ТЕМНОЙ ТЕМЫ (ВКЛЮЧАЯ ФОРМУ ИЗ ПР7)
   =======================================================================*/
body.dark-theme {
    background-color: #1a1a2e; 
    color: #e2e8f0;
}

body.dark-theme header {
    background-color: #111122; 
}

body.dark-theme article {
    background-color: #222538; 
    border-color: #2d324d;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

body.dark-theme article header h3,
body.dark-theme section h2,
body.dark-theme aside h3 {
    color: #ffffff !important; 
}

body.dark-theme article header p {
    color: #cbd5e1 !important; 
}

body.dark-theme aside {
    background-color: #222538; 
    border-left-color: #1abc9c;
}

body.dark-theme aside p,
body.dark-theme article p {
    color: #cbd5e1; 
}

body.dark-theme .read-more-btn {
    color: #ffffff;
}
body.dark-theme .read-more-btn:hover {
    color: #1abc9c;
}

body.dark-theme .like-btn {
    background-color: #2d324d;
    color: #fff;
    border-color: #454d74;
}

body.dark-theme #searchInput {
    background-color: #222538;
    color: white;
    border-color: #2d324d;
}

/* Темная тема для новой формы публикации */
body.dark-theme .article-form {
    background-color: #222538;
    border-color: #2d324d;
}

body.dark-theme .article-form h3 {
    color: #ffffff;
}

body.dark-theme .form-group label {
    color: #cbd5e1;
}

body.dark-theme .form-group input, 
body.dark-theme .form-group textarea {
    background-color: #1a1a2e;
    color: white;
    border-color: #2d324d;
}

body.dark-theme .form-group input:focus, 
body.dark-theme .form-group textarea:focus {
    border-color: #1abc9c;
}

body.dark-theme .submit-btn { 
    background-color: #1abc9c; 
}

body.dark-theme .submit-btn:hover { 
    background-color: #16a085; 
}

/* Модальное окно в темной теме */
body.dark-theme .modal-content {
    background-color: #222538;
    color: #e2e8f0;
    border: 1px solid #2d324d;
}
body.dark-theme #modalBody h3 {
    color: #ffffff;
}
body.dark-theme #modalBody p,
body.dark-theme #modalBody ul li {
    color: #cbd5e1;
}
body.dark-theme #modalBody .formula {
    background-color: #1b1d2a;
    color: #1abc9c;
}

/* =============================================================
   9. АДАПТИВНОСТЬ ДЛЯ МОБИЛЬНЫХ УСТРОЙСТВ
   =============================================================*/
@media (max-width: 768px) {
    body > header {
        flex-direction: column;
        text-align: center;
        padding: 20px;
        gap: 15px;
    }
    
    nav ul {
        justify-content: center;
        gap: 15px;
        flex-wrap: wrap; 
    }
    
    main {
        flex-direction: column; 
        gap: 20px;
        margin: 20px auto;
        padding: 0 10px;
    }
    
    main section, 
    main aside {
        flex: none;
        width: 100%;
    }
    
    article {
        padding: 20px;
    }
}





