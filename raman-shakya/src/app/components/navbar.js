import React from 'react'
import styles from "./styles/navbar.module.css"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <div className={ styles.wrapper }>
        <div className={ styles.heading }>
            Raman Shakya
        </div>
        {/* <h1><FontAwesomeIcon icon={faBars} /></h1> */}
        <div className={ styles.nav_buttons} >
            <Link href="#">About Me</Link>
            <Link href="#">My Projects</Link>
            <Link href="#">Contact Me</Link>
        </div>
    </div>
  )
}

export default NavBar