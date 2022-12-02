class numerosRandom {

    constructor() {
        this.resultados = {}
    }

    random = async () => {
        const TOPE_ITERACIONES = 1000
        const TOPE_CLAVES = 20
        try {
            for (let index = 1; index <= TOPE_CLAVES; index++) {
                this.resultados.numero = index
                this.resultados.numero
                let acumulador = 0
                for (let indexOTRO = 1; indexOTRO <= TOPE_ITERACIONES; indexOTRO++) {
                    let valorRandom = Math.floor(Math.random() * TOPE_CLAVES)
                    if (this.resultados.numero == valorRandom)
                        acumulador
                }
                this.resultados.numero = { num: acumulador }

                console.log(this.resultados)
            }
            return this.resultados
        }
        catch (error) {
            console.log(`ACA ESTA EL ERROR, motivo de error:  ${error.message}`)
        }
    }
}

export default numerosRandom



