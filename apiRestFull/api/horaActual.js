
import horario from '../model/DAO/horaActual.js'

class apiHoraActual {

    devolverMensaje = async () => {
        const HORARIO_MINIMO_MAÑANA = 6
        const HORARIO_MAX_MAÑANA = 12
        const HORARIO_MINIMO_TARDE = 13
        const HORARIO_MAX_TARDE = 19
        const MENSAJE_MAÑANA = 'Buenos dias!'
        const MENSAJE_TARDE = 'Buenas tardes!'
        const MENSAJE_NOCHE = 'Buenas noches!'
        let mensajeAResponder = 'nada'

        try {
            let guardarHora = await horario.getHoraActual()
            let hora = await guardarHora.getHours()
            console.log(hora)

            if (hora >= HORARIO_MINIMO_MAÑANA && hora <= HORARIO_MAX_MAÑANA) {
                mensajeAResponder = MENSAJE_MAÑANA
            }
            else if (hora >= HORARIO_MINIMO_TARDE && hora <= HORARIO_MAX_TARDE) {
                mensajeAResponder = MENSAJE_TARDE
            }
            else {
                mensajeAResponder = MENSAJE_NOCHE
            }
            return mensajeAResponder
        }
        catch (error) {
            console.log(`Aca esta el error `, error)
        }

    }
}

export default apiHoraActual

let test = new apiHoraActual()
console.log(await test.devolverMensaje())