# Under Construction Page

Страница "Under Construction" для sapport.online

## Установка

```bash
npm install
```

## Запуск локально

```bash
npm start
```

Сервер запустится на порту 3000 (или на порту, указанном в переменной окружения PORT).

## Деплой на Render.com

1. Подключите репозиторий к Render.com
2. Выберите тип сервиса: **Web Service**
3. Настройки:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: Node
4. Укажите домен: sapport.online

## Структура проекта

```
underConstrPage/
├── index.html          # Основная HTML страница
├── server.js           # Express сервер для статических файлов
├── package.json        # Зависимости проекта
├── images/            # Папка с изображениями
│   └── logo-sapport.png
└── README.md          # Документация
```

