## Тестовое задание Облако Group

## Загрузка репозитория
```bash
$ git clone git@github.com:UtopicUnicorn/test-task-CloudGroup.git
```
## Переход в директорю с проектом
```bash
$ cd test-task-CloudGroup
```

## Установка
```bash
$ npm install
```

## Сборка контейнера с базой данных
```bash
$ docker-compose up --build
```

## Изменить данные для TypeOrm для локальной базы данных

## Запуск приложения

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Этапы выполнения тестового задания

### Первый этап
1. Инициализирован проект, подключен модуль Graphql, а также typeOrm с базой данных postgreSQL
2. Создан модуль Category, а также резолвер, модель, сервис и dto
3. Произведена проверка работы на адресе localhost/graphql с запросом query{categories {id, title}}
4. Проект задеплоен на Heroku


### Второй Этап
1. Подключена база данных Heroku postgres
2. Создан модуль Todo, а текже резолвер, модель сервис и dto
3. Произведен новый деплой на Heroku и произведена проерка работы с frontend приложением

### Не реализовано
1. Не реализована мутация с созданием задачи, при получении названия категории и названии задачи. Задача создается по category_id. Последовательное создание реализовано на frontend части. 
