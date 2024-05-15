import React from 'react'
import Iframe from 'react-iframe'
import { useNavigate } from 'react-router-dom'; 

const PrivateVideo2 = () => {
    const navigate = useNavigate();

    const logged = true; 
    
    if (!logged) {
        
        navigate('/login');
        return null; 
    }

  return (
    <div>
        <h1>Video Privado 2</h1>
        <Iframe 
        title='private-video-2'
        url=" https://www.youtube.com/embed/72eHSn9zeT0 "
        width="640"
        height="360"
        frameBorder="0"
        />
    </div>
  )
}

export default PrivateVideo2
