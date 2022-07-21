const argv = require('yargs')
            .option('b',
                {
                    alias : 'base',
                    type : 'number',
                    demandOption : true,
                    describe : 'Base para la tabla de multiplicar'
                }
            )
            .option('l',
                {
                    alias : 'listar',
                    type : 'boolean',
                    default : false,
                    describe : 'Mostrar en consola'
                }
            )
            .option('r',
                {
                    alias : 'range',
                    type : 'number',
                    demandOption : true,
                    describe : 'Rango o limite para la tabla'
                }
            )
            .check(
                (argv, option)=>{
                    if(isNaN(argv.b)) throw 'La base debe ser un número';
                    return true;
                }
            )
            .argv;

module.exports = argv;