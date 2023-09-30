import googleIcon from "../../images/carosol/g.png";
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [googleSignin, user, loading, error] = useSignInWithGoogle(auth);
    if (error) {
        console.log(error)
    }
    return (
        <div>

            <button onClick={() => { googleSignin() }} className="w-25 bg-primary text-white border-danger rounded my-3 mx-auto d-block"> <img src={googleIcon} className="w-25 " alt="" /> Google login</button>
        </div >
    );
};

export default SocialLogin;