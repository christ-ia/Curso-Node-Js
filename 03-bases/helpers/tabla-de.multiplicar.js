const fs = require('fs');

const tablaDeMultiplicar = async(base, limit, listar)=>{

    try {
        let salida = `        ==========================
        |      tabla del ${base}       |
        ==========================\n\n`; 
    
        for (let i = 1; i <= limit; i++){
            salida += (`     ${base} * ${i} = ${base*i} \n`)
        }
        
        listar&&console.log(salida);
    
        fs.writeFile(`tabla-del-${base}.txt`,salida, (e)=> {if (e) throw e;} );
    
        return `tabla-del-${base}.txt`;
    } catch (error) {
        throw error;
    }

}

module.exports = {
    tablaDeMultiplicar
};


