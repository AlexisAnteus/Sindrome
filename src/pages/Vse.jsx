import React from 'react'
import Iframe from 'react-iframe'

function Vse() {
  return (
    <Iframe url=" https://www.youtube.com/embed/WaQ0aFW8YSI "
    position="relative"
    width="60%"
    id="myId"
    className="myClassname"
    height="360%"
    styles={{height: "360px"}}/>
  )
}

export default Vse

