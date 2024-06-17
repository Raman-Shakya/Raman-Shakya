import React from 'react'
import styles from './styles/landing.module.css';
import Image from 'next/image';

import ProfilePic from "../../assets/profile/photo.jpg";

const Landing = () => {
  return (
    <div className={ styles.wrapper }>
        <div className={ styles.container } >
            <div>
                <p>Hello There!</p>
                <h1 className={ styles.heading }><span>Raman</span> here</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.</p>
            </div>
            <div>
                <div className={ styles.profile_container }>
                    <Image 
                        src={ProfilePic}
                        alt='profile-picture'
                        className={ styles.profile_picture }
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing