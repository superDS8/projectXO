/* Подключаем загрузчик */

require('./system/loader.js');

/*  WebSocketServer */
webSocketServer = new WebSocketServer();
webSocketServer.setup({
    port: 80,
    reloadClientCodeEveryRequest: true,
    clientCodePath: '../client/'
});

/* ApiPort */
apiRouter = new ApiRouter();
apiRouter.setup({
    map: {
        SAPIUser: SAPIUser
    }
});
apiRouter.sendData = webSocketServer.sendData;
webSocketServer.onConnect = apiRouter.onConnect;
webSocketServer.onDisconnect = apiRouter.onDisconnect;
webSocketServer.onData = apiRouter.onData;

webSocketServer.run();