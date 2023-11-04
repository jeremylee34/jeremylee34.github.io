import React from 'react'

import Chip from './Chip'

import confluenceIcon from '../assets/images/chips/confluence.png'
import dockerIcon from '../assets/images/chips/docker.png'
import figmaIcon from '../assets/images/chips/figma.png'
import gitIcon from '../assets/images/chips/git.png'
import htmlncssIcon from '../assets/images/chips/htmlncss.png'
import jiraIcon from '../assets/images/chips/jira.png'
import jsIcon from '../assets/images/chips/js.png'
import tsIcon from '../assets/images/chips/ts.png'
import muiIcon from '../assets/images/chips/mui.png'
import postgresqlIcon from '../assets/images/chips/postgresql.png'
import pythonIcon from '../assets/images/chips/python.png'
import reactIcon from '../assets/images/chips/react.png'
import tailwindIcon from '../assets/images/chips/tailwind.png'


const Skills = () => {
  return (
    <div className='flex'>
      
      <div className='chip-container'>
        <Chip img={reactIcon} text='React'/>
        <Chip img={tsIcon} text='TypeScript'/>
        <Chip img={jsIcon} text='JavaScript'/>
        <Chip img={tailwindIcon} text='TailwindCSS'/>
        <Chip img={muiIcon} text='MaterialUI'/>
        <Chip img={htmlncssIcon} text='HTML/CSS'/>
        <Chip img={pythonIcon} text='Python'/>
        <Chip img={gitIcon} text='Git'/>
        <Chip img={postgresqlIcon} text='PostgreSQL'/>
        <Chip img={figmaIcon} text='Figma'/>
        <Chip img={dockerIcon} text='Docker'/>
        <Chip img={jiraIcon} text='Jira'/>
        <Chip img={confluenceIcon} text='Confluence'/>
      </div>
    </div>
  )
}

export default Skills