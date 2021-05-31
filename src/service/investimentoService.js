import axios from 'axios';

const API_URL = 'http://localhost:8080'

class InvestimentoService{

   retrieveAllInvestimentos(){
       return axios.get(`${API_URL}/investimento/listar`)
   }


   saveInvestimento(invest){
     return axios.post(`${API_URL}/investimento/cadastrar`, invest)
   }

   deleteInvestimento(codInvest){
    return axios.delete(`${API_URL}/investimento/deletar/${codInvest}`)
  }

}


export default new InvestimentoService();