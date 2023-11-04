import React, { useState } from "react";

const Section = () => {
  const [selectedSection, setSelectedSection] = useState("Languages");

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const borderClass = "border-l-2"; // Define a constant border width

  const outerBorder = `${borderClass} transition duration-300 ease-in-out`

  return (
    <div className="flex">
      <div className="flex flex-col">
       <div className={`${outerBorder} ${
         selectedSection === "Languages"
           ? `border-teal-600 dark:border-teal-400`
           : `text-slate-800 dark:text-gray-400 border-slate-800 dark:border-gray-400`
       }`}>
         <div
           className={`text-[15px] font-semibold px-5 pb-2 pt-1 cursor-pointer ${
             selectedSection === "Languages"
               ? `${borderClass} border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 bg-neutral-800`
               : `${borderClass} text-slate-800 dark:text-gray-400 border-transparent hover:bg-neutral-800`
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
               ? `${borderClass} border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 bg-neutral-800`
               : `${borderClass} text-slate-800 dark:text-gray-400 border-transparent hover:bg-neutral-800`
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
               ? `${borderClass} border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 bg-neutral-800`
               : `${borderClass} text-slate-800 dark:text-gray-400 border-transparent hover-bg-neutral-800`
           } transition duration-300 ease-in-out`}
           onClick={() => handleSectionClick("Tools")}
         >
           Tools
         </div>
       </div>
      </div>
    </div>
  );
};

export default Section;