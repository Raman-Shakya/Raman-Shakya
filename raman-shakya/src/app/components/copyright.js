import React from 'react'
import styles from './styles/copyright.module.css'

const Copyright = () => {
  return (
    <div className={styles.container}>©Raman Shakya {new Date().getFullYear()}</div>
  )
}

export default Copyright