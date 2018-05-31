module.exports = class logFile {
    constructor() {
        if (Fs.existsSync(_config.log.files))
            this.dir = _config.log.files;
    }
    save(str) {
        if(!this.dir)return false;
        let file_name = (new Date).toISOString().slice(0, 10)+'.log'
        Fs.appendFile(this.dir+"/"+file_name,str+"\n",()=>{})
    }
}