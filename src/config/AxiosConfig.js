import axios from "axios"

const instanciaAxios = axios.create({
    baseURL: "http://localhost:8080/calculadora/"
})

export default instanciaAxios