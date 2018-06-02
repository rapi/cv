module.exports=class{
    constructor(){
        let controllers=require(_path.root+'app/controllers')
        for(let name in controllers)
            try{
                this[name]=new controllers[name]()
            }catch(e){
                _log.error(`Fail init ${name} with return ${JSON.stringify(e)}`)
            }
    }
}