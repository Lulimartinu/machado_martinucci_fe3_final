import React, { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'


const Footer = () => {
  const{state} = useContext(ContextGlobal);

  const {theme} = state;
  const themeClass = theme === "light" ? "light" : "dark";



  return (
    <footer className={themeClass}>
        <p>Powered by</p>
        <img src="./img/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
