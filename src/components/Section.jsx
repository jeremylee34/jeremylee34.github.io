import React, { useState } from "react";
import Skills from "./Skills";
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

import { animateChips } from "../helper";


const Section = () => {
  const [selectedSection, setSelectedSection] = useState("Languages");

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    animateChips(section)
  };

  const borderClass = "border-l-2"; // Define a constant border width

  const outerBorder = `${borderClass} transition duration-300 ease-in-out`

  return (
    <div className="flex gap-5 mt-5 mb-2 sm:max-w-[35vw]">
      <div className="flex flex-col">
       <div className={`${outerBorder} ${
         selectedSection === "Languages"
           ? `border-teal-600 dark:border-teal-400`
           : `text-slate-800 dark:text-gray-400 border-slate-800 dark:border-gray-400`
       }`}>
         <div
           className={`text-[15px] font-semibold px-5 pb-2 pt-1 cursor-pointer ${
             selectedSection === "Languages"
               ? `${borderClass} border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 bg-white dark:bg-neutral-800`
               : `${borderClass} text-slate-800 dark:text-gray-400 border-transparent dark:hover:bg-neutral-800 hover:bg-white`
           } transition duration-300 ease-in-out`}
           onClick={() => handleSectionClick("Languages")}
         >
           Languages
         </div>
       </div>
       <div className={`${outerBorder} ${
         selectedSection === "Frameworks"
           ? `border-teal-600 dark:border-teal-400`
           : `text-slate-800 dark:text-gray-400 border-slate-800 dark:border-gray-400`
       }`}>
         <div
           className={`text-[15px] font-semibold px-5 pb-2 pt-1 cursor-pointer ${
             selectedSection === "Frameworks"
               ? `${borderClass} border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 bg-white dark:bg-neutral-800`
               : `${borderClass} text-slate-800 dark:text-gray-400 border-transparent dark:hover:bg-neutral-800 hover:bg-white`
           } transition duration-300 ease-in-out`}
           onClick={() => handleSectionClick("Frameworks")}
         >
           Frameworks
         </div>
       </div>
       <div className={`${outerBorder} ${
         selectedSection === "Tools"
           ? `border-teal-600 dark:border-teal-400`
           : `text-slate-800 dark:text-gray-400 border-slate-800 dark:border-gray-400`
       }`}>
         <div
           className={`text-[15px] font-semibold px-5 pb-2 pt-1 cursor-pointer ${
             selectedSection === "Tools"
               ? `${borderClass} border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 bg-white dark:bg-neutral-800`
               : `${borderClass} text-slate-800 dark:text-gray-400 border-transparent dark:hover:bg-neutral-800 hover:bg-white`
           } transition duration-300 ease-in-out`}
           onClick={() => handleSectionClick("Tools")}
         >
           Tools
         </div>
       </div>
      </div>
      <div className='chip-container'>

        <div className={`${selectedSection === 'Languages' ? 'flex' : 'hidden'} chip-container`}>
          <Chip img={tsIcon} text='TypeScript'/>
          <Chip img={jsIcon} text='JavaScript'/>
          <Chip img={htmlncssIcon} text='HTML/CSS'/>
          <Chip img={pythonIcon} text='Python'/>
          <Chip img={postgresqlIcon} text='PostgreSQL'/>
        </div>

        <div className={`${selectedSection === 'Frameworks' ? 'flex' : 'hidden'} chip-container`}>
          <Chip img={reactIcon} text='React'/>
          <Chip img={tailwindIcon} text='TailwindCSS'/>
          <Chip img={muiIcon} text='MaterialUI'/>
        </div>

        <div className={`${selectedSection === 'Tools' ? 'flex' : 'hidden'} chip-container`}>
          <Chip img={gitIcon} text='Git'/>
          <Chip img={figmaIcon} text='Figma'/>
          <Chip img={dockerIcon} text='Docker'/>
          <Chip img={jiraIcon} text='Jira'/>
          <Chip img={confluenceIcon} text='Confluence'/>
        </div>
      </div>
    </div>
  );
};

export default Section;