'use client';

import React, { useEffect, useState } from 'react'
import styles from "./project.module.css";
import Image from 'next/image';

const ProjectCard = ({ data }) => {
    const [language, setLanguage] = useState();

    useEffect(() => {
        if (!data.language) return;
        if (data.language.toLowerCase() === 'c++') setLanguage('cplusplus');
        else if (data.language.toLowerCase() === 'html') setLanguage('html5');
        else setLanguage(data.language.toLowerCase());
    }, [data]);

    return (
        <div className={ styles.container }>
            <div className={ styles.image_container }>
                {/* <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'/> */}
                <Image
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${language}/${language}-original.svg`}
                    className={ [styles.thumbnail, language==='javascript' ? styles.smaller: null].join(' ') }
                    width={100}
                    height={100}
                    alt='programming-language'
                />
                <div className={ styles.information_container} >
                    <div>
                        <h1 className={ styles.title }>{data.name}</h1>
                        {data.language}
                    </div>
                    <div>
                        {data.html_url && <a href={ data.html_url } target='blank'>Code</a> }
                        {data.demo && <a href={ data.demo } target='blank'>Demo</a> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard