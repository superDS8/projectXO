/**
 * Файл конфигурации.
 * @type {Object}
 */
Config = {
    DB: {
        host: 'localhost',
        username: 'root',
        password: 'root',
        database: 'xo',
        charset: 'UTF8'
    },
    SocNet: {
        secretKey: 'X0x2PuCZQbC5wwX0lB5R'
    },
    Chat: {
        /**
         * Размер кэша, после заполнения, будет сливаться в БД.
         */
        cacheSize: 1000,
        /**
         * Кол-во сообщений, считающихся последними.
         */
        lastMessagesCount: 5,
        /**
         * Максимальная длина сообщения в чате.
         */
        messageLengthLimit: 128
    },
    Rating: {
        TopLimitSize: 5
    },
    ApiRouterMetric: {
        reportTimeout: 1000 * 60 * 60
    },
    Profiler: {
        reportTimeout: 1000 * 60 * 60
    },
    UrlCache: {
        lifeTime: 1000 * 60 * 30
    }
};