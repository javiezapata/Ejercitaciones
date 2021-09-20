const fs = require('fs');
let archivoTareas = {
   
    leerJSON: function () {
        let archivo = require('./tareas.json');
        return archivo;
    },
    
    escribirJSON : function (tarea) {
        const tareas=JSON.stringify(tarea,null,4)
        fs.writeFile=('./tareas.json',tareas)    
        fs.writeFileSync=('./tareas.json',tareas)  
        console.log(tareas)
        console.log("guardado")
    
    },

    guardarTarea : function (asignacion){
        let archivo=this.leerJSON();
        archivo.push(asignacion)
    //    console.log(archivo)
        this.escribirJSON(archivo)
    },

    leerPorEstado : function (status) {
        let data=this.leerJSON();
        let self=this;
        let filtrados = data.filter(filtrado=> filtrado.estado ==status);
    return filtrados;
    }
}

module.exports = archivoTareas;