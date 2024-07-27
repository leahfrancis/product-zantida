
import './App.css';
import Login from './login';
import Signup from './signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
