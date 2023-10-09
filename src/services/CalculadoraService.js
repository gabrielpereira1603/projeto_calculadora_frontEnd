import instanciaAxios from "../config/AxiosConfig"

class CalculadoraService {

    somar(n1, n2) {
        return instanciaAxios.get(`somar/${n1}/${n2}`)
    }

    subtrair(n1, n2) {
        return instanciaAxios.get(`subtrair/${n1}/${n2}`)
    }

    multiplicar(n1, n2) {
        return instanciaAxios.get(`multiplicar/${n1}/${n2}`)
    }

    dividir(n1, n2) {
        return instanciaAxios.get(`dividir/${n1}/${n2}`)
    }

    potencia(base, expoente) {
        return instanciaAxios.get(`potencia/${base}/${expoente}`)
    }
}

export default CalculadoraService
