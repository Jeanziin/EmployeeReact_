import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EmpLista from './EmpLista';
import EmpCriar from './EmpCriar';
import EmpDetalhes from './EmpDetalhes';
import EmpEditar from './EmpEditar';

function App() {
  return (
    <div className="App">
    <h1>React JS</h1>
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<EmpLista/>}></Route>
    <Route path='/employee/criar' element={<EmpCriar/>}></Route>
    <Route path='/employee/detalhes/:empid' element={<EmpDetalhes/>}></Route>
    <Route path='/employee/editar/:empid' element={<EmpEditar/>}></Route>
  </Routes>
  </BrowserRouter>
    </div>
  );
  
}

export default App;
