import React, { useState } from "react";
import { useEffect  } from "react";
import './UseState_useEffect.css'

function UseState_useEffect(props) {
  const [para, setPara] = useState("")
  const [like, setLike] = useState(0)

  const updatePara = () => {
    setPara (para => para === ""?props.para: "")
  }

  const updateLike = () => {
    setLike (like => like + 1)
  }

  useEffect(() => {
    alert("Content Button Clicked...")
  }, [para])


  return (
    <div className="container">
      <p><h1>{para}</h1></p>
      <button className="button" onClick={updatePara}>Content</button>
      <h3>{like}</h3>
      <button className="button" onClick={updateLike}>Like</button>
    </div>
  )
}

export default UseState_useEffect