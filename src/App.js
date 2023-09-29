import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ReqiureAuth from './components/RequireAuth/ReqiureAuth';
import CheckOut from './components/CheckOut/CheckOut';
import NotFound from './components/NofFound/NotFound';
import BuyingForm from './components/BuyifngForm/BuyingForm';
import ResetPassword from './components/ResetPassword/ResetPassword';

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/resetpass' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='/checkout' element={<ReqiureAuth>
          <CheckOut></CheckOut>
        </ReqiureAuth>}></Route>
        <Route path='/checkout/:id' element={<ReqiureAuth><BuyingForm></BuyingForm></ReqiureAuth>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
