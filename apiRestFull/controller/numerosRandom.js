import numerosRandom from '../api/random.js'

class controllerRandom {

    sortearNumeros = async (req, res) => {
        res.jons(await numerosRandom.sacarNumerosRandom)

    }

}

export default numerosRandom