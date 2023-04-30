import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {

    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        
        console.log(name, email, password, confirm)

        setError('');

        if(password !== confirm){
            setError('Your password did not match')
            return
        }
        else if(password.length < 6){
            setError('Your password must be atleast 6 character longer')
            return
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => {
            console.log(error);
            setError(error.message)
        })

    }

    return (
        <div className='form-containers'>
            <h2 className='form-title'>Sign Up</h2>

            <form onSubmit={handleSignUp} >
            <div className="form-control">
                   <label htmlFor="">Full Name</label> 
                   <input type="name" name="name" id="" placeholder='Your Name' required />                   
                </div>

                <div className="form-control">
                   <label htmlFor="">Email</label> 
                   <input type="email" name="email" id="" placeholder='Your Email' required />                   
                </div>

                <div className="form-control">
                   <label htmlFor="">Password</label> 
                   <input type="password" name="password" id="" placeholder='Your Password' required />                   
                </div>

                <div className="form-control">
                   <label htmlFor="">Confirm Password</label> 
                   <input type="password" name="confirm" id="" placeholder='Your Password' required />                   
                </div>

                <input className='login-btn' type="submit" value="Sign Up" />

                <p><small> Already have an account ? <span className='redirect'><Link to="/login">Login</Link></span></small></p>
                <p><small className='error-msg'>{error}</small></p>

                <div className='or'>
                    <hr />
                    <p>Or</p>
                    <hr />
                </div>

            </form>
        </div>
    );
};

export default SignUp;