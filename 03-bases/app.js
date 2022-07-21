
const {tablaDeMultiplicar} = require('./helpers/tabla-de.multiplicar.js')
const argv = require('./config/argv.js')

tablaDeMultiplicar(argv.b, argv.r, argv.l)
    .then( fileNname => console.log(fileNname, "creado") )
    .catch (err => console.log(err))