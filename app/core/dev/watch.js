module.exports=class{
    constructor(){
        this.bs = require("browser-sync").create();
        this.bs.watch('**/*.js').on('change', function(e){
            app.deleteModules()   
            delete require.cache[require.resolve(_path.root+'/server.js')]; 
            console.log('11');
            require(_path.root+'/server');
        });
    }   
}