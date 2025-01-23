import { TestData } from "../DataTypes";

export const TESTING_DATA = [
    {
        "question": `Какой есть вариант развода с помощью сайта знакомств?`,
        "answers": [
            { 'id': 1, 'text': `Позовут на прогулку, а сами не придут` },
            { 'id': 2, 'text': `Фотография в профиле была фальшивой` },
            { 'id': 3, 'text': `Покупка несуществующих билетов на ложном сайте` },
        ],
        "correct": 3
    },
    {
        "question": `Как определить является ли незнакомый номер вредоносным?`,
        "answers": [
            { 'id': 1, 'text': `Если это служба безопасности банка, то я перезвоню в банк сам(а)` },
            { 'id': 2, 'text': `Ответить и начать вести светскую беседу` },
            { 'id': 3, 'text': `Я знаю эту схему, меня не поймать!` },
        ],
        "correct": 1
    },
    {
        "question": `Увидел пост со сбором на благотворительность`,
        "answers": [
            { 'id': 1, 'text': `Перейду по ссылке и отправлю денег, не задумываясь!` },
            { 'id': 2, 'text': `Проверю документы организации и изучу всю информацию полностью` },
            { 'id': 3, 'text': `Ну это же VK, 100% пост не обман` },
        ],
        "correct": 2
    },
    {
        "question": `Ого, отличная вакансия!`,
        "answers": [
            { 'id': 1, 'text': `Отправлю отклик, не задумываясь! Я так долго искал работу!` },
            { 'id': 2, 'text': `Мало работы и много денег, что тут думать!` },
            { 'id': 3, 'text': `Доскольнально изучу информацию о компании` },
        ],
        "correct": 3
    },
    {
        "question": `Как не поднимая трубку, определить надежность номера?`,
        "answers": [
            { 'id': 1, 'text': `Никак(` },
            { 'id': 2, 'text': `Скачать определитель номера` },
            { 'id': 3, 'text': `Перезвонить на него` },
        ],
        "correct": 2
    },
    {
        "question": `Пришло SMS, где нужно указать данные личного аккаунта`,
        "answers": [
            { 'id': 1, 'text': `У меня 2FA, значит это развод` },
            { 'id': 2, 'text': `Отправлю данные, я не хочу терять аккаунт` },
            { 'id': 3, 'text': `Позвоню на номер, с которого прислали уведомление` },
        ],
        "correct": 1
    },
    {
        "question": `Какая ссылка является не правильной?`,
        "answers": [
            { 'id': 1, 'text': `avito.ru` },
            { 'id': 2, 'text': `auto.ru` },
            { 'id': 3, 'text': `awito.ru` },
        ],
        "correct": 3
    },
] as Array<TestData>