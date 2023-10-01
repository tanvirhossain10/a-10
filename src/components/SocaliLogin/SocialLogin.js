import googleIcon from "../../images/carosol/g.png";
import React, { useEffect } from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

const SocialLogin = () => {
    const location = useLocation();
    const data = location.state;
    const { name, img, body, id } = data || {};
    // const [user] = useAuthState(auth)
    const navigate = useNavigate()

    let from = location?.state?.from?.pathname || "/";
    const [googleSignin, user1, loading, error] = useSignInWithGoogle(auth);
    const handleGoogleSignIn = async e => {
        const success = await googleSignin();
        if (success) {
            navigate(from, { replace: true });
        }

    }
    useEffect(() => {
        if (user1?.email) {


        }

    }, [user1, navigate])
    if (error) {
        console.log(error)
    }

    if (loading) {
        return <Loading></Loading>
    }




    return (
        <div>

            <button onClick={handleGoogleSignIn} className="w-25 bg-primary text-white border-danger rounded my-3 mx-auto d-block"> <img src={googleIcon} className="w-25 " alt="" /> Google login</button>
        </div >
    );
};

export default SocialLogin;