/*Por último, declarar una ruta get ‘/operaciones’, que reciba por query-params dos
números y la operación a realizar entre ellos.*/

class operaciones {

    static sum = async (num1, num2) => {
        try {
            return num1 + num2
        }
        catch (error) {
            console.log(`Aca esta el error `, error)
        }

    }

    static restar = async (num1, num2) => {
        try {
            return num1 - num2
        }
        catch (error) {
            console.log(`Aca esta el error `, error)
        }

    }

    static multiplicar = async (num1, num2) => {
        try {
            return num1 * num2
        }
        catch (error) {
            console.log(`Aca esta el error `, error)
        }
    }

    static dividir = async (num1, num2) => {
        if (num2 == 0) throw new Error
        return num1 / num2
    }
}

export default operaciones