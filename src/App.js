import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Router, Routes, useNavigate, useParams } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ReqiureAuth from './components/RequireAuth/ReqiureAuth';
import CheckOut from './components/CheckOut/CheckOut';
import NotFound from './components/NofFound/NotFound';
import BuyingForm from './components/BuyifngForm/BuyingForm';
import ResetPassword from './components/ResetPassword/ResetPassword';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import { useEffect } from 'react';
import Blog from './Blog/Blog';

function App() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate()
  // const { checkoutId } = useParams();

  useEffect((() => {

    if (user?.email) {
      // navigate('/')
    }
  }), [user])

  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<ReqiureAuth><Blog></Blog></ReqiureAuth>}></Route>
        {/* {!user && <Route path='/login' element={<Login></Login>}></Route>} */}
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        {
          <Route path='/resetpass' element={<ResetPassword></ResetPassword>}></Route>
        }

        <Route path='/checkout/:id' element={
          <CheckOut></CheckOut>
        }></Route>
        {/* <Route path='/checkout/:id/buy' element={<BuyingForm></BuyingForm>}></Route> */}
        <Route path='/checkout/:id/buy' element={<ReqiureAuth><BuyingForm></BuyingForm></ReqiureAuth>}></Route>
        <Route path='not' element={<ReqiureAuth>
          <NotFound></NotFound>
        </ReqiureAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
