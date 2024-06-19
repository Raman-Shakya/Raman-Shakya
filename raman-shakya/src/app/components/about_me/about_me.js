import React from 'react'
import styles from "./about_me.module.css";

const AboutMe = () => {
  return (
    <div className={ styles.wrapper }>
        <h1 className={ styles.header }>About <span>Me</span></h1>
        <div className={ styles.container }>
            <div className={ styles.block }>
                <span>Name:</span><label>Raman Shakya</label>
            </div>
            <div className={ styles.block }>
                <span>Address:</span><label>Tikathali, Lalitpur</label>
            </div>
            <div className={ styles.block }>
                <span>Name:</span><label>Raman Shakya</label>
            </div>
        </div>
    </div>
  )
}

export default AboutMe