const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cors())


// llamos nuestras rutas
app.use('/', require('./routers/router'))

// seteamos el motor de plantillas 
app.set('view engine', 'ejs')

// seteamos la carpeta public para archivos estaticos
app.use(express.static('public'))

// para procesar datos enviados desde forms
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//para poder trabjar con las cookies
app.use(cookieParser)





const PORT = 3001
app.listen(PORT, () => console.log('Port: http://localhost:3001'))