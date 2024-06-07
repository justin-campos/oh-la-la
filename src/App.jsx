import './index.css';
import './register.css';
import Register from './componets/Register';
import Home from './componets/Home';
import Singer from './componets/Singer';
import Clowns from './componets/Clowns';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Presenter from './componets/Presenter';
import Dj from './componets/Dj';
import Salones from './componets/Salones';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/salones' element={<Salones />}></Route>
          <Route path='/cantante' element={<Singer />}></Route>
          <Route path='/payaso' element={<Clowns />}></Route>
          <Route path='/presentador' element={<Presenter />}></Route>
          <Route path='/djs' element={<Dj />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

