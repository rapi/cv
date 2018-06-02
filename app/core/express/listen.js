module.exports = class {
    constructor() {
        this.defaultPort = 8080;
        this.initHttp()
    }
    destructor() {
        this.listner.close();
        // module.parent.exports.app.close();
    }
    initHttp() {
        let port = (_config.app.port ? _config.app.port : this.defaultPort);
        this.listner = module.parent.exports.app.listen(port, () => {
            _log.info('Server start listern on ' + port);
        })

}

}