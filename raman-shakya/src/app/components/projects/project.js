'use client';

import React, { useEffect, useState } from 'react'
import styles from "./project.module.css";
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProjectCard = ({ data }) => {
    const [language, setLanguage] = useState();

    useEffect(() => {
        if (!data.language) return;
        if (data.language.toLowerCase() === 'c++') setLanguage('cplusplus');
        else if (data.language.toLowerCase() === 'html') setLanguage('html5');
        else setLanguage(data.language.toLowerCase());
    }, [data]);

    function getParsedDeltaTime(deltaTime) {
        function getDeltaTime(deltaTime) {
            const deltaYears = Math.floor(deltaTime / (1000*60*60*24*365))
            const deltaMonths = Math.floor(deltaTime / (1000*60*60*24*30))
            const deltaDays = Math.floor(deltaTime / (1000*60*60*24));
            const deltaHours = Math.floor(deltaTime / (1000*60*60));
            const deltaMinutes = Math.floor(deltaTime / (1000*60));
            const deltaSeconds = Math.floor(deltaTime / (1000));
            
            if (deltaYears!==0) return [deltaYears, "y"]
            if (deltaMonths!==0) return [deltaMonths, "mo"]
            if (deltaDays!==0) return [deltaDays, "d"]
            if (deltaHours!==0) return [deltaHours,"h"]
            if (deltaMinutes!==0) return [deltaMinutes, "m"]
            return [deltaSeconds, "s"]
        }
        let [delta, label] = getDeltaTime(new Date() - new Date(deltaTime));
        return delta + " " + label;
        // if (delta===1) return delta + " " + label + " ago"
        // return delta + " " + label + "s ago"
    }

    return (
        <motion.div
            initial= {{ opacity: 0.6, scale: 0.8 }}
            whileInView={ {
                opacity: 1, scale: 1,
            } }
            viewport={{
                margin: "300% 0px 0px 0px",
            }}
            transition={{ type: "spring", stiffness: 50, damping: 9 }}
            className={ styles.container }
        >
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
                        <div className={ styles.date }>
                            { getParsedDeltaTime(data.created_at) }
                        </div>
                        {data.language}
                    </div>
                    <div>
                        {data.html_url && <a href={ data.html_url } target='blank'>Code</a> }
                        {data.homepage && <a href={ data.homepage } target='blank'>Demo</a> }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard