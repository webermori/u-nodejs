var app = require('./config/server');
var rotaNoticias = require('./app/routes/noticias')(app);
var rotaHome = require('./app/routes/home')(app);
var rotaInclusaoNoticia = require('./app/routes/formulario_inclusao_noticias')(app);

app.listen(3000, function(){
	console.log("Its Work!");
});