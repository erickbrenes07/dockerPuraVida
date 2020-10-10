var Express =require('express');
var app=Express();
app.get('/',function(req,res){
    res.send('Hola Mundo Pura Vida (from Docker!)');
});
app.listen(8080);
