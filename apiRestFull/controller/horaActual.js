import horaMensaje from '../api/horaActual.js'

class controllerHora {

    getMensaje = async (req, res) => {
        try {
            let hora = new horaMensaje()
            let mensaje = await hora.devolverMensaje()
            res.json(mensaje)
        }
        catch (error) {
            console.log(`Aca esta el error `, error)
        }
    }
}

export default controllerHora

/* let test = new controllerHora()
console.log(`aca esta el mensaje final`, await test.getMensaje()) */