'use client';

import React, { useEffect, useState } from 'react'

import styles from "./project_wrapper.module.css"
import ProjectCard from './project'
import axios from 'axios';
import TechStack from '../tech-stack';

const ProjectWrapper = () => {
    const [projects, setProjects] = useState([]);
    const [languages, setLanguages] = useState([]);
    
    useEffect(() => {
        axios.get('https://api.github.com/users/Raman-Shakya/repos')
            .then(response => {
                setProjects(response.data.filter(a=>a.fork===false));
            })
            .catch(err => console.error(err));
    }, []);

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