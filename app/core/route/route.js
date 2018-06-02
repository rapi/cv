module.exports = class {
    constructor() {
        for (let path in _config.route.get) {
            _express.app.get(path, (req, res) => {
                try {
                    res.send(_controllers[_config.route.get[path][0]][_config.route.get[path][1]](req,res) + '')
                } catch (e) {
                    res.send('Bad request'+e)
                    _log.error(e)
                }
            });
        }

    }
}