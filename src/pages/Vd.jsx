import React from 'react'
import Iframe from 'react-iframe'

export const Vd = () => {
    return (

      <Iframe url=" https://www.youtube.com/embed/1XHaJC4w4vc "
      position="relative"
      width="60%"
      id="myId"
      className="myClassname"
      height="360%"
      styles={{height: "360px"}}/>
    )

  }
