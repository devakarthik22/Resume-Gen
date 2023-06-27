import React, { useContext } from 'react'
import { AppContext } from './AppContext'
import About from './Pages/About';
import Education from './Pages/Education';
import Skills from './Pages/Skills';
import Work from './Pages/Work';
import Projects from './Pages/Projects';

function Editer() {
  const {page,setPage}=useContext(AppContext);
  console.log(page);
  return (
    <div className="w-[45%] flex flex-col shadow-2xl h-[fit-content]" >
        <div className="flex justify-between items-center mt-4 mx-4 border-b-[0.2px] border-[rgba(0,0,0,0.4)]">
            <button className="bg-white px-3 py-3"
            onClick={()=>{
              setPage("about");
            }}
            >About</button>
            <button className="bg-white px-3 py-3"
             onClick={()=>{
              setPage("education");
            }}
            >Education</button>
            <button className="bg-white px-3 py-3"
             onClick={()=>{
              setPage("skills");
            }}
            >Skills</button>
            <button className="bg-white px-3 py-3"
              onClick={()=>{
                setPage("work");
              }}
            >Work</button>
            <button className="bg-[white] px-3 py-3"
              onClick={()=>{
                setPage("projects");
              }}
            >Projects</button>
        </div>
        <div className="">
          {  
             
             page==="about" && <About></About>
          }
          {
            page==="education" && <Education></Education>
          }
          {
            page==="skills" && <Skills></Skills>
          }
          {
            page==="work" && <Work></Work>
          }
          {
            page==="projects" && <Projects></Projects>
          }

        </div>

    </div>
  )
}

export default Editer