'use client';

import React, { useEffect, useState } from 'react'
import styles from "./styles/tech_stack.module.css";
import Image from 'next/image';

const TechStack = ({data, onLanguageChange}) => {
  const [allLanguages, setAllLanguages] = useState(new Set());
  const [selectedLanguages, setSelectedLanguages] = useState(new Set());

  useEffect(() => {
    const tempSet = new Set(allLanguages);
    for (let project of data) {
      if (project.language)
        tempSet.add(project.language);
    }
    setAllLanguages(tempSet);
    setSelectedLanguages(new Set(tempSet));
    onLanguageChange(Array.from(tempSet));
  }, [data]);

  const toggleLanguage = (e, language) => {
    e.preventDefault();
    if (selectedLanguages.has(language)) selectedLanguages.delete(language);
    else selectedLanguages.add(language);
    onLanguageChange(Array.from(selectedLanguages));
    setSelectedLanguages(new Set(selectedLanguages));
  }

  return (
    <div className={ styles.wrapper }>
      <div className={ styles.container }>
        { Array.from(allLanguages).map((language, index) => {
          const languageParsed = language === "HTML" ? "html5" : language === "C++" ? "cplusplus" : language.toLowerCase();

          return <Image
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${languageParsed}/${languageParsed}-original.svg`}
            className={ selectedLanguages.has(language) && styles.selected }
            key={index}
            width={100}
            height={100}
            alt='programming-language'
            onClick={ (e) => toggleLanguage(e, language) }
          />
        }
        )}
          {/* <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div> */}
      </div>
    </div>
  )
}

export default TechStack