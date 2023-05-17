const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

const puerto = 8080;

//Servidor de contenido estático
app.use(express.static('public'))
app.use(express.static('public/views/partials/css'))
app.use(express.static(__dirname + '/public/views', { 'Content-Type': 'text/javascript' }));


//
app.set('views', path.join(__dirname+'/public/views'))
app.set('view engine', 'hbs')

//Configuracion del directiorio que guardara los archivos parcial hbs
hbs.registerPartials(__dirname + '/public/views/partials');

app.get('/', (req, res) => {
    res.render('disponibilidad') 
})

app.listen(puerto, () => {
    console.log(`Escuchando por el puerto ${puerto}`)
})



