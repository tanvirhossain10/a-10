import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast, { Toaster } from 'react-hot-toast';

const ResetPassword = () => {
    const [resetEmail] = useSendPasswordResetEmail(auth);
    const notify = () => toast('Reset email send');
    const hadnleResetPassword = async e => {
        e.preventDefault();
        const email = e.target.email.value;
        const succes = await resetEmail(email);
        if (succes) {
            notify();
        }
    }



    return (
        <Form onSubmit={hadnleResetPassword}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                Reset password
            </Button>
            <Toaster></Toaster>

        </Form>
    );
};

export default ResetPassword;