import express from 'express'
import HoraActual from '../controller/horaActual.js'
import Operacion from '../controller/operaciones.js'
import random from '../controller/numerosRandom.js'

export class RouterClientes {
    constructor() {
        this.router = express.Router()
        this.mensajeSegunHorario = new HoraActual()
        this.lasOperaciones = new Operacion()
        this.randomObjeto = new random()
    }

    start() {
        /* GET un mensaje segun el horario */
        this.router.get('/mensaje', this.mensajeSegunHorario.getMensaje)

        /* GET el resultado segun la operacion ingresada */
        this.router.get('/operaciones', this.lasOperaciones.calcular)

        /* GET devuelve un objeto random */
        this.router.get('/random', randomObjeto.sortearNumeros)

        return this.router
    }
}
