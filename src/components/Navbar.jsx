import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
    const [isLogin, setIsLogin] = useState(false);
    const [authUser, setAuthUser] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        axios.get('http://localhost:8000/profile', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            }
        })
        .then(res => {
            setIsLogin(true);
            setAuthUser(res.data.data);
            if(location.pathname === '/login') {
                navigate('/profile');
            }
        })
        .catch(err => {
            setIsLogin(false);
            if (err.response.status === 401 && location.pathname !== '/login') {
                navigate('/login?message=' + encodeURIComponent('Anda belum login!'));
            }
        });
    }, [navigate, location.pathname]);

    return (
        <div className="bg-blue-600 py-2">
            <div className="flex justify-between items-center px-4">
                <div className="flex items-center space-x-2">
                    <Link
                        className="text-sm font-semibold uppercase text-white"
                        to="/"
                    >
                        INVENTARIS APP
                    </Link>
                    {isLogin && authUser['role'] === 'admin' && (
                        <>
                            <Link to="/stuff"><small className="text-white">Stuff</small></Link>
                            <Link to="/inbound"><small className="text-white">Inbound</small></Link>
                            <Link to="/lending"><small className="text-white">Lending</small></Link>
                            <Link to="/user"><small className="text-white">User</small></Link>
                        </>
                    )}
                    {isLogin && authUser['role'] !== 'admin' && (
                        <Link to="/lending"><small className="text-white">Lending</small></Link>
                    )}
                </div>
                <div className="flex items-center space-x-2">
                    {isLogin && (
                        <Link to="/profile"><small className="text-white">Profile</small></Link>
                    )}
                    <Link to="/login"><small className="text-white">Login</small></Link>
                </div>
            </div>
        </div>
    );
}
