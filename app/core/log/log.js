module.exports= class Log{
    constructor(){
        this.in_file=_config.log.in_file
        this.in_db=_config.log.in_db
        this.in_console=_config.log.in_console
        this.file= new (require('./logFile'))()
        this.db= new (require('./logDb'))()
    }
    info(what){
        let str="[Info]";
        str+="["+((new Date).toISOString().slice(0,19))+"]  ";
        str+=what;
        if(this.in_file)this.file.save(str)
        if(this.in_console)console.log(str)
        if(this.in_db)this.db.save(str)
    }    
}