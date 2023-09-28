import React, { useEffect } from 'react';
import { Button, Form, Nav } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
// import Loading from '../Loading/Loading';
import Home from '../Home/Home';
import Example from '../Example/Example';
import Loading from '../Loading/Loading';
import { onAuthStateChanged, signOut } from 'firebase/auth';


const Login = () => {
    const navigate = useNavigate();
    const [user1] = useAuthState(auth);
    const location = useLocation();
    // const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleLogin = async e => {
        e.preventDefault();
        const inputFeildValue = e.target;
        const email = inputFeildValue.email.value;
        const password = inputFeildValue.password.value;
        await signInWithEmailAndPassword(email, password);

        if (user) {
            // navigate('/blog')
        }





    }
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, navigate])

    if (loading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     if (user) {
    //         navigate("/")
    //     }
    // }, [user, navigate])
    console.log(user1)

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>

            </Form>

            <p>New to in hard fitness? <Link to="/signup" className='text-primary pe-auto text-decoration-none' >Please Signup</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' >Reset Password</button> </p>
            {/* <SocialLogin></SocialLogin> */}
            {/* <ToastContainer /> */}
        </div>
    );
};

export default Login;