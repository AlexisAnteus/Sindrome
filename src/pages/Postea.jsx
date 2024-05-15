import React from 'react'
import Iframe from 'react-iframe'

function Postea() {
  return (
    <Iframe url=" https://www.youtube.com/embed/86pY9ep7tXQ "
    position="relative"
    width="60%"
    id="myId"
    className="myClassname"
    height="360%"
    styles={{height: "360px"}}/>
  )
}

export default Postea

