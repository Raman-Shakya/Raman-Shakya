"use client"

import React, { useState } from 'react'
import styles from "./styles/navbar.module.css"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useMotionValueEvent, motion, useScroll, useTransform } from 'framer-motion'

const NavBar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState();

  useMotionValueEvent(scrollY, "change", () => {
    setScrolled(scrollY.current)
  });

  

  return (
    <motion.div 
      className={ [styles.wrapper, scrolled ? styles.scrolled : ""].join(" ") }
      style={{
        backdropFilter: `blur(${Math.min(scrolled * 20 / 400, 20)}px)`,
      }}
    >
        <div className={ styles.heading }>
            Raman Shakya
        </div>
        {/* <h1><FontAwesomeIcon icon={faBars} /></h1> */}
        <div className={ styles.nav_buttons} >
            <Link href="#">About Me</Link>
            <Link href="#">My Projects</Link>
            <Link href="#">Contact Me</Link>
        </div>
    </motion.div>
  )
}

export default NavBar