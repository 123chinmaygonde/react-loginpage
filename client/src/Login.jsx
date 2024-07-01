import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3008/login', { email, password })
            .then((result) => {
                console.log(result);
                if (result.data === "success") {
                    navigate('/home');
                }
            })
            .catch((error) => {
                console.error('There was an error!', error);
            });
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="bg-white p-5 rounded w-50">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
                </form>
                <p className="mt-3">Don't have an account?</p>
                <Link to="/signup" className="btn btn-default border w-100 bg-light text-decoration-none rounded-0">Sign Up</Link>
            </div>
        </div>
    );
}

export default Login;
