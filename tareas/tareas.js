const fs = require('fs')

let listadoTareas=[]

const guardarDB = () =>{

    let data = JSON.stringify(listadoTareas)

    fs.writeFile('db/data.json', data, (err)=>{
        if (err) throw new Error('No se pudo guardar', err)
    })

}

const listarDB = () =>{

    try {

      listadoTareas = require('../db/data.json')

    } catch (error) {

        listadoTareas = []
        
    }
    

}

const crear = (descripcion) =>{

    listarDB()

    let tareas = {
        descripcion,
        completado: false
    }

    listadoTareas.push(tareas)

    guardarDB()

    return tareas

}

const getListado = () =>{

    listarDB()
    
    return listadoTareas

}

const actualizar = (descripcion, completado = true) =>{

    listarDB()

    let index = listadoTareas.findIndex(t => t.descripcion === descripcion)

    if(index>=0){
        listadoTareas[index].completado = completado
        guardarDB()
        return true
    }else{
        return false
    }
}

const borrar = (descripcion) =>{

    listarDB()

    let nuevoListado = listadoTareas.filter(t => t.descripcion !== descripcion)

    if (listadoTareas.length === nuevoListado.length){
        return false
    }else{
        listadoTareas = nuevoListado
        guardarDB()
        return true
    }
}

module.exports={
    crear,
    getListado,
    actualizar,
    borrar
}