# Збірка Vite.js + vituum

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    для запуску проекту після npx vite (не знаходить локалхост) - потрібно зробити файл index.html в папці pages яка лежить в src і бути уважним. тут в проекті є дві папки pages - одна в src друга в html

    розібратись що таке site.webmanifest

    при генерації favicon отримуємо декілька файлів в архиві. ці файли треба(бажано) покласти в папку src. а в head для підключення цих іконок треба вказати:
        <link rel="shortcut icon" href="/src/favicon.ico" type="image/x-icon" sizes="32x32">
        <link rel="apple-touch-icon" sizes="180x180" href="/src/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/src/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/src/favicon-16x16.png">
        <link rel="manifest" href="/src/site.webmanifest">
    а ще там є два файли, котрі ні де не прописуються нами, а тільки в файлі site.webmanifest, ці файли треба перенести, так би мовити, "в ручну". для цього в  vite.config.js є строки:
        {
            name: 'copy-static-files',
            writeBundle() {
                copyFileSync('src/android-chrome-192x192.png', 'dist/android-chrome-192x192.png');
                copyFileSync('src/android-chrome-512x512.png', 'dist/android-chrome-512x512.png');
            },
        },
    тут за допомогою функції (плагіна) copyFileSync копіюються потрібні файли з однієї папки в іншу. 
    БЕЗ ЦІХ ДВОХ ФАЙЛІВ ДОДАТОК(ПРОЕКТ) НЕ БУДЕ БІЛДИТИСЬ(ЗБИРАТИСЬ)!!!

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
- Перед встановленням збірки перевірте, чи ви встановили node.js (LTS-версію)
[завантажити nodejs з офіційного сайту](https://nodejs.org/en/download).

- Встановлення залежностей
```
npm install
```

- Запуск збірки/сервера
```
npx vite
```

- Збірка проєкта
```
npx vite build
```

- Перегляд проекту після збірки (білда)
```
npx vite preview
```
