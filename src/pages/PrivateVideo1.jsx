import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Iframe from 'react-iframe';

const PrivateVideo1 = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Verificar si el usuario está autenticado
    const logged = true; // Debes obtener el estado de inicio de sesión de tu aplicación

    if (!logged) {
        // Si el usuario no está autenticado, redirigir al login
        navigate('/login', { state: { from: location.pathname } });
        return null; // Opcionalmente, podrías renderizar un mensaje o componente de carga
    }

    return (
        <div>
            <h1>Video Privado 1</h1>
            <Iframe
                title="private-video-1"
                src="https://www.youtube.com/embed/KvHquiT8bPk"
                width="640"
                height="360"
                frameBorder="0"
            />
        </div>
    );
}

export default PrivateVideo1;
