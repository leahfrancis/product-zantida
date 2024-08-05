import React, { useState } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');  // Reset error message

        try {
            const response = await axios.post('http://www.storezan.com/webapi/token', 
                new URLSearchParams({
                    grant_type: 'password',
                    username: email,
                    password: password,
                }), 
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );

            const data = response.data;
            console.log('Login successful:', data);

            // Save the access token in localStorage or state
            localStorage.setItem('access_token', data.access_token);

            // Navigate to the dashboard
            navigate('/dashboard');

        } catch (err) {
            console.error('Login failed:', err);
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className='signup-container'>
            <form className='signup-form' onSubmit={handleSubmit}>
                <h2>Login</h2>

                <label htmlFor="email" className="heading">
                    Email:
                </label><br />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
                <label htmlFor="password" className="heading">
                    Password:
                </label><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
                <br /><br />
                <button className='login' type='submit'>Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <p>Not Registered? <Link to="/">SignUp</Link></p>
            </form>
        </div>
    );
};

export default Login;
