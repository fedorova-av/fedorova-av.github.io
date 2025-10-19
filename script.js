// Плавная прокрутка к секциям с учетом фиксированной навигации
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80, // Высота навигации
            behavior: 'smooth'
        });
    });
});

// Система перевода
const translations = {
    en: {
        // Навигация
        'nav.about': 'About',
        'nav.work': 'Work',
        'nav.contact': 'Contact',
        'nav.achievements': 'Achievements',
        
        // Герой
        'hero.title': "Hi, I'm Alexandra",
        'hero.subtitle': 'I humanize data',
        
        // Обо мне
        'about.title': 'About Me',
        'about.role': 'Data Scientist',
        'about.locationLabel': 'Location',
        'about.location': 'Saint-Petersburg, Russia',
        'about.englishLabel': 'English Level',
        'about.englishLevel': 'Advanced (C1)',
        'about.education': 'Education',
        'about.university':'HSE University',
        'about.masters': "Master's degree in Machine Learning and Data Analysis",
        'about.bachelors': "Bachelor's degree in Management",
        'about.skills': 'Technical Skills',
        
        // Проекты
        'work.title': 'My Projects',
        'work.project1.title': 'Demand prediction',
        'work.project1.subtitle': 'Time series',
        'work.project1.description': 'Developed a new system, which combines two approaches (ABC-XYZ-analysis and AI), to predict product demand using historical sales data, reducing inventory costs by and improving stock availability. The improvement of accuracy in demand prediction consists approximately 40%',
        
        // Контакты
        'contact.title': 'Work With Me',
        'contact.subtitle': 'Get in touch through any of the platforms below',

        // Experience section
        'experience.title': 'Work Experience',
        'experience.job1.date': 'October 2024 - June 2025',
        'experience.job1.position': 'Purchasing Department Manager',
        'experience.job1.company': 'Drogerie Retail LLC',
        'experience.job1.point1': 'Participation in a working group on the implementation of artificial intelligence in the work of the procurement department',
        
        
        // Achievements section
        'achievements.title': 'Achievements',
        'achievements.courses': 'Courses & Certifications',
        'achievements.awards': 'Awards & Honors',
        'achievements.publications': 'Publications',
        'achievements.readPaper': 'Read paper →',
        
        // Courses
        'achievements.course1.title': 'Deep Learning Engineer:NLP',
        'achievements.course1.meta': 'KARPOV.COURSES · 2024',
        'achievements.course1.description': 'Text processing and feature extraction using modern neural networks. Applied tasks: classification, regression, named entity recognition, text generation, seq2seq',
        
        'achievements.course2.title': 'Data processing and analysis',
        'achievements.course2.meta': 'HSE · 2022-2024',
        'achievements.course2.description': 'Completed a minor in analytics, learning modern methods and tools for solving practical data challenges across various domains—from customer and UX-analytics to digital social and humanitarian sciences.',
        
        // Awards
        'achievements.award1.title': 'This section will be filled in the future',

        // Publications
        'achievements.publication1.title': 'This section will be filled in the future',
    },

    ru: {
        // Навигация
        'nav.about': 'Обо мне',
        'nav.work': 'Проекты',
        'nav.contact': 'Контакты',
        'nav.achievements': 'Достижения',
        
        // Герой
        'hero.title': 'Привет, я Александра',
        'hero.subtitle': 'Я оживляю данные',
        
        // Обо мне
        'about.title': 'Обо мне',
        'about.role': 'Data Scientist',
        'about.locationLabel': 'Местоположение',
        'about.location': 'Санкт-Петербург, Россия',
        'about.englishLabel': 'Уровень английского',
        'about.englishLevel': 'Продвинутый (C1)',
        'about.education': 'Образование',
        'about.university':'Высшая Школа Экономики',
        'about.masters': 'Магистратура по машинному обучению и анализу данных',
        'about.bachelors': 'Бакалавриат по менеджменту',
        'about.skills': 'Технические навыки',
        
        // Проекты
        'work.title': 'Мои проекты',
        'work.project1.title': 'Прогнозирование спроса',
        'work.project1.subtitle': 'Временные ряды',
        'work.project1.description': 'Разработала новую систему, сочетающую два подхода (ABC-XYZ-анализ и ИИ), для прогнозирования спроса на продукцию с использованием исторических данных о продажах, что позволило снизить затраты на запасы и улучшить их доступность. Улучшение точности прогнозирования спроса составило примерно 40%',
        
        // Контакты
        'contact.title': 'Сотрудничество',
        'contact.subtitle': 'Свяжитесь со мной через любую из платформ ниже',


        // Experience section
        'experience.title': 'Опыт работы',
        'experience.job1.date': 'Октябрь 2024 - Июнь 2025',
        'experience.job1.position': 'Менеджер отдела снабжения',
        'experience.job1.company': 'ООО "Дрогери ритейл" (Улыбка радуги)',
        'experience.job1.point1': 'Участие в рабочей группе по внедрению искусственного интеллекта в работу отдела снабжения',
        
        // Achievements section
        'achievements.title': 'Достижения',
        'achievements.courses': 'Курсы и Сертификаты',
        'achievements.awards': 'Награды и Достижения',
        'achievements.publications': 'Публикации',
        'achievements.readPaper': 'Читать статью →',
        
        // Courses
        'achievements.course1.title':'Инженер глубинного обучения:NLP',
        'achievements.course1.meta': 'KARPOV.COURSES · 2024',
        'achievements.course1.description': 'Обработка текста и извлечение признаков с использованием современных нейронных сетей. Прикладные задачи: классификация, регрессия, распознавание именованных сущностей, генерация текста, seq2seq.',
        'achievements.course2.title':'Обработка и анализ данных',
        'achievements.course2.meta': 'ВШЭ · 2022-2024',
        'achievements.course2.description': 'Были изучены современные методы и инструменты для решения практических задач по работе с данными в различных областях — от клиентской и UX-аналитики до цифровых социальных и гуманитарных наук.',
        
        // Awards
        'achievements.award1.title': 'Когда-то эта часть будет заполнена',
        
        // Publications
        'achievements.publication1.title': 'Когда-то эта часть будет заполнена',

    }
}

// Функция для перевода страницы
function translatePage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    localStorage.setItem('preferred-language', lang);
    
    document.documentElement.lang = lang;
}

// Обработчики событий для кнопок переключения языка
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        translatePage(lang);
    });
});

// Инициализация языка при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferred-language');
    const browserLang = navigator.language.startsWith('ru') ? 'ru' : 'en';
    const defaultLang = savedLang || browserLang;
    
    translatePage(defaultLang);
});
