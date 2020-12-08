const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marcar como completado o pendiente'
}

const argv = require('yargs')
                .command('crear', 'Agregar tarea a la lista', {
                    descripcion
                })  
                .command('actualizar', 'Actualizar a completado, la tarea', {
                    descripcion,
                    completado
                })
                .command('borrar', 'Borrar tarea de la lista', {
                    descripcion
                })
                .help()
                .argv

module.exports = {
    argv
}                
