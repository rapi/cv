class Config{
    constructor(){
        this.storageSource='File'
        this.load()
    }
    //Set config from files
    fromFiles(){
        this.storageSource='File'
    }
    load(){
        this.storage= new (require('./config'+this.storageSource+'Storage'))();
        let all=this.storage.fetch();
        for(let name in all)
            this[name]=all[name]
    }
}
module.exports = Config;