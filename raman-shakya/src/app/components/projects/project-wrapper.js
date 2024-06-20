'use client';

import React, { useEffect, useState } from 'react'

import styles from "./project_wrapper.module.css"
import ProjectCard from './project'
import axios from 'axios';
import TechStack from '../tech-stack';
import Preloader from '../preloader/preloader';

const ProjectWrapper = () => {
    const [projects, setProjects] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        axios.get('https://api.github.com/users/Raman-Shakya/repos')
            .then(response => {
                // console.log(response.data.sort((a,b) => a.created_at < b.created_at ? -1 : 1))
                setProjects(response.data.filter(a=>a.fork===false).sort((a,b) => a.created_at > b.created_at ? -1 : 1));
                setLoading(false);
            })
            .catch(err => {
                console.error(err)
                setLoading(false);
            });
        
        // document.addEventListener('scroll', scrollEvent);
        // return () => {
        //     document.removeEventListener('scroll', scrollEvent);
        // }
    }, []);

    // const scrollEvent = (e) => {
    //     // console.dir(e.target.scrollingElement.scrollTop);
    //     setScrollTop(e.target.scrollingElement.scrollTop);
    // }

    if (loading) return <Preloader />

    return (
        <div className={ styles.wrapper }>
            <div className={ styles.container }>
                <h1 className={ styles.heading }>My <span>Projects</span></h1>
                
                <TechStack data={projects} onLanguageChange={(languages) => setLanguages(languages)}/>
                
                <div className={ styles.project_wrapper }>
                    { projects && projects.map((project, index) => 
                        languages.includes(project.language) &&
                        <ProjectCard data={project} key={index} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectWrapper