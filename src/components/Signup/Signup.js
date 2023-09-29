import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { sendEmailVerification } from 'firebase/auth';

const Signup = () => {

    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const [agree, setAgree] = useState(false);
    const handleSignup = async e => {
        e.preventDefault();
        const inputFeildValus = e.target;
        const email = inputFeildValus.email.value;
        const password = inputFeildValus.password.value;
        const succes = await sendEmailVerification(email);
        await createUserWithEmailAndPassword(email, password);
        if (error) {
            console.log(error)
        }
        if (succes) {
            alert('sent email')
        }

    }
    useEffect((() => {
        if (user) {
            navigate('/')
        }
    }), [user, navigate])
    if (loading) {
        return <Loading></Loading>
    }



    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleSignup}>
                <input type="text" className='d-block w-25 mx-auto mt-2' name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" className='d-block w-25 mx-auto mt-2' id="" placeholder='Email Address' required />

                <input type="password" className='d-block w-25 mx-auto mt-2' name="password" id="" placeholder='Password' required />
                <div className='d-flex items-center mx-auto w-25'>


                    <input onClick={() => setAgree(!agree)} type="checkbox" className='text-center ' name="terms" id="terms" />
                    <label className={`ps-2 ${agree ? '' : 'text-danger'} text-center `} htmlFor="terms">Accept Genius Car Terms and Conditions</label>
                </div>
                <input

                    disabled={!agree}
                    className='w-25 mx-auto d-block btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none'>Login</Link> </p>
            {/* <SocialLogin></SocialLogin> */}
        </div>
    );
};

export default Signup;