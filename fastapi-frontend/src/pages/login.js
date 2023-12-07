import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useGlobalState } from '../context/GlobalState';
import AuthService from '../services/auth.service';
import { jwtDecode } from "jwt-decode";
import styles from '../styles/home.module.css';
import Link from 'next/link';
//------------------------------------------------------------------------------------------------------------------------------
function LoginPage() {
    const router = useRouter();
    const { state, dispatch } = useGlobalState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
//------------------------------------------------------------------------------------------------------------------------------
    const handleLogin = (e) => {
        e.preventDefault();
        const username = email;
        AuthService
            .login(username, password)
            .then(async (resp) => {
                if(resp != undefined){
                    if (resp.access_token) {
                        //let data = jwtDecode(resp.access_token);
                        let data = resp;
                        // resp.access_token and resp.user_id
                        await dispatch({
                            type: 'SET_USER',
                            payload: data,
                        });
                        console.log('Login success');
                        router.push('/');
                    } else {
                        console.log('Login failed');
                        dispatch({ type: 'LOGOUT_USER' });
                    }
                }
            })
            .catch((error) => {
                // Handle the error here
                console.error('An error occurred:', error);
                // Optionally, dispatch a logout or error action
                dispatch({ type: 'LOGOUT_USER' });
            })
            .finally(() => {
                // Code to run regardless of success or failure
                console.log('Login request completed');
            });
    };
//------------------------------------------------------------------------------------------------------------------------------
    return (
        <div>
            <NavBar />
            <div >
                <h1>Login</h1>
                <div className='flex'>
                    <form
                        onSubmit={handleLogin}
                        
                    >
                        <div >
                            <label htmlFor="email">Email:</label><br></br>
                            <input
                                className='border'
                                type="text"
                                id="email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div >
                            <label htmlFor="pass">Password:</label><br></br>
                            <input
                                className='border'
                                type="password"
                                id="pass"
                                name="password"
                                minLength="8"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='flex'>
                            <input
                                
                                type="submit"
                                value="Sign in"
                            />
                        </div>
                    </form>
                    <Link href="/register" >
                        Register Here
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage