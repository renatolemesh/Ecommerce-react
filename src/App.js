import { ToastContainer } from 'react-bootstrap';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "font-awesome/css/font-awesome.css";
import { RouteApp } from './Route/Index';
import CarrinhoContextProvider from './hooks/CarrinhoContext';

function App() {
  return (
    <>
    <CarrinhoContextProvider>
      <ToastContainer />
      <RouteApp />
    </CarrinhoContextProvider>
    
    </>
    
    // <div className="App">
    //   <p>Importando Componentes</p>
    //   <hr></hr>
    //   <ComponenteNome />
    //   <hr />
    //   <ComponenteResumoSobreVoce>
    //     <h1>Aqui vai um resumo</h1>
    //   </ComponenteResumoSobreVoce>
    //   <hr />
    //   <ComponenteCompetencia nome="Teste" descricao="descricao">
    //   </ComponenteCompetencia>
    // </div>

    
  );
}

export default App;
