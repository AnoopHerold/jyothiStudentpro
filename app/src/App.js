// import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar'
import Login from './component/login'
import Reg from './component/register';
// import Err from './component/error';
import Hom from './component/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
    <Navbar />
    
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Hom />}></Route>
        <Route path="/register" element={<Reg />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/*" element={<Err />}></Route> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;