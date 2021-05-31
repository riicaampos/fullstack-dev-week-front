import axios from 'axios';

const API_URL = 'http://localhost:8080'

class CategoriaService{

    retrieveAllCategorias(){
        return axios.get(`${API_URL}/categoria/listar`)
    }



}

export default new CategoriaService();