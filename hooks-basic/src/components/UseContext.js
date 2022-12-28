import React, { useContext } from 'react'
import { Theme } from '../App'
import UseStateUseEffect from './UseState_useEffect'


function Aryan() {

    const para = 'Und mand phund sund lund'

    const changeTheme = useContext(Theme)

    const themeDecoration = {
        backgroundColor: changeTheme? "black": "orchid",
        color: changeTheme? "orchid": "black",
    }

  return (
    <div style={themeDecoration}>
        <UseStateUseEffect para = {para} />
    </div>
  ) 
}

export default Aryan