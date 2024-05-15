import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', { replace: true });
    };

    return (
        <>
            <header>
                <h1>
                    <Link to='/'>Logo</Link>
                </h1>

                {state?.logged ? (
                    <div className='user'>
                        <span className='username'>{state?.name}</span>
                        <button className='btn-logout' onClick={onLogout}>
                            Cerrar sesión
                        </button>
                    </div>
                ) : (
                    <nav>
                        <Link to='/login'>Iniciar sesión</Link>
                        <Link to='/register'>Registrarse</Link>
                        <Link to='/vd'>Videos</Link>
                        <Link to='/post'>Postea</Link>
                        <Link to='/vse'>Vse</Link>
                    </nav>
                )}

                {state?.logged && (
                    <nav>
                        <Link to='/private-video-1'>Video_Privado_1</Link>
                        <Link to='/private-video-2'>Video_Privado_2</Link>
                        <Link to='/private-video-3'>Video_Privado_3</Link>
                    </nav>
                )}
            </header>

            <Outlet />
        </>
    );
};