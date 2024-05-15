import React from 'react';
import { useNavigate } from 'react-router-dom';
import Iframe from 'react-iframe';

const PrivateVideo3 = () => {
    const navigate = useNavigate();

        const logged = true; 

    if (!logged) {
        
        navigate('/login');
        return null; 
    }

  return (
    <div>
        <h1>Video Privado 3</h1>
        <Iframe 
            title='private-video-3'
            url=" https://www.youtube.com/embed/ocxLE_llcMM "
            width="640"
            height="360"
            frameBorder="0"
        />
    </div>
  )
}

export default PrivateVideo3
