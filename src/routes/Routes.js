import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CaddastrarInvestimento from '../pages/CadastrarInvestimento';
import ListarInvestimentos from '../pages/ListarInvestimetos';


export default function Routes(){

     return(
      <BrowserRouter>
       <Switch>
           <Route exact path="/" component={ListarInvestimentos}></Route>
           <Route exact path="cadastrar-investimentos" component={CaddastrarInvestimento}></Route>
       </Switch>
      </BrowserRouter>

     );

}