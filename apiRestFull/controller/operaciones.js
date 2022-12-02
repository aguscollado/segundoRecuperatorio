import OperacionesApi from '../api/operaciones.js'

class controllerOperaciones {

    constructor() {
        this.operacionExitosa = {
            num1: x,
            num2: x,
            operacion: x,
            resultado: x,
        }

        this.errorDeIngreso = {
            error: {
                num1: { valor: x, tipo: y },
                num2: { valor: x, tipo: y },
                operacion: { valor: x, tipo: y }
            }
        }
    }

    calcular = async (req, res) => {
        const operacion = req.query.operacion
        const datoNumero1 = req.query.num1
        const datoNumero2 = req.query.num2
        const num1 = parseInt(datoNumero1)
        const num2 = parseInt(datoNumero2)

        const SUMA = 'SUMA'
        const RESTA = 'RESTA'
        const MULTI = 'MULTI'
        const DIV = 'DIV'
        let ObjeADevolver = {}

        try {

            if ((numero1 != undefined && numero2 != undefined && operacion != undefined) &&
                (operacion == SUMA || operacion == RESTA || operacion == MULTI || operacion == DIV) &&
                (typeof numero1 === "number" && typeof numero2 === "number")) {

                let total = 0

                if (operacion == SUMA) {
                    total = OperacionesApi.sum(num1, num2)
                }
                if (operacion == RESTA) {
                    total = OperacionesApi.restar(num1, num2)
                }
                if (operacion == MULTI) {
                    total = OperacionesApi.multiplicar(num1, num2)
                }
                else {
                    total = OperacionesApi.dividir(num1, num2)
                }

                this.operacionExitosa.num1 = numero1
                this.operacionExitosa.num2 = numero2
                this.operacionExitosa.operacion = operacion
                this.operacionExitosa.resultado = total

                ObjeADevolver = this.operacionExitosa

            }
            else {
                this.errorDeIngreso.error.numero1.valor = numero1
                this.errorDeIngreso.error.numero1.tipo = typeof numero1
                this.errorDeIngreso.error.numero2.valor = numero2
                this.errorDeIngreso.error.numero1.tipo = typeof numero2
                this.errorDeIngreso.error.operacion.valor = operacion
                this.errorDeIngreso.error.operacion = num2 = typeof operacion

                ObjeADevolver = this.errorDeIngreso
            }
            res.json(letObjeADevolver)
        }
        catch (error) {
            console.log(`Aca esta el error `, error)
        }
    }
}

export default controllerOperaciones