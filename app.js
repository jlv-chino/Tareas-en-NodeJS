const argv = require('./config/yargs').argv
const colors = require('colors')
const tareas = require('./tareas/tareas')

let comando = argv._[0]

switch(comando){

    case 'crear':
      let crearTarea = tareas.crear(argv.descripcion)
      console.log(crearTarea);
    break

    case 'listar':
        let listado = tareas.getListado()

        for (let t of listado){
            console.log('********Tareas********'.green);
            console.log(t.descripcion);
            console.log('Estado: ', t.completado);
            console.log('**********************'.green);
        }
    break

    case 'actualizar':
        let actualizado = tareas.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);
    break

    case 'borrar':
        let borrado = tareas.borrar(argv.descripcion)
        console.log(borrado);
    break    

    default:
        console.log('Comando no reconocido');

}