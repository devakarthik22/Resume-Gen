import React, { useContext } from 'react'
import her from "../images/hero.svg"
import { AppContext } from './AppContext'

function Main() {
  const {ref}=useContext(AppContext);
  function handlerClick(){
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="flex justify-between items-center mt-[4rem] w-[75%] mx-auto flex-wrap">
      <div className="lg:w-[47%] w-full">
        <div className="text-[#805ad5]">
          <h1 className="text-5xl font-bold leading-[4rem] gap-y-2" id="maintext">If You Want To Get Gaining, Get A Resume</h1>
        </div>
        <div className="mt-5">
          <p className=" text-lg  leading-[1.7] text-[#596d84]"> Resumegen is a tool that often constitutes an automated process in which you follow a template and 
            input your information. Ability to build, print, and download your resume for free in minutes.</p>
        </div>
        <button className="mt-4 bg-[#805ad5] px-4 text-white py-2 rounded-md font-semibold" onClick={handlerClick}> Build Resume</button>
      </div>
      <div className="imagediv">
        <img src={her} alt="" className=" h-[400px]"></img>
      </div>
      

    </div>
  )
}

export default Main