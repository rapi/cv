class configFileStorage {
    constructor() {
        this.configs = {}
        this.fetch()
        // console.log(this.configs)
    }
    fetch() {
        Fs.readdirSync(_path.config).forEach(file => {
            try{
                let full_path=_path.config+file
                file=Path.parse(full_path)
                if(file.ext!='.json')return false;
                this.configs[file.name]=require(full_path)
            }
            catch(e){
                console.log(e)
            }
        })
        return this.configs;
    }
}
module.exports = configFileStorage;