import React, { useRef } from 'react'
import Editer from './Editer'
import Template from './Template'

import { useReactToPrint } from 'react-to-print';



function BuilderDashboard() {
 
  const componentPDF=useRef();

  const generatePDF=useReactToPrint({
    content:()=>componentPDF.current,
    documentTitle:"Resume",
    onAfterPrint:()=>alert("Data saved in PDF"),

  });
 
  


   
  return (
    <div className="w-[90%] mx-auto mt-[6rem] ">
      <div className="w-[100%] text-center"><p className="text-4xl">Builder Dashboard</p></div>
      <div className="flex justify-end items-center px-4 mt-[2rem]">
        {/* <div className="flex gap-x-3">
            <button className="w-[2.5rem] h-[2.5rem] rounded-[100%] bg-[#9f7aea]"></button>
            <button className="w-[2.5rem] h-[2.5rem] rounded-[100%] bg-[#48bb78]"></button>
            <button className="w-[2.5rem] h-[2.5rem] rounded-[100%] bg-[#0bc5ea]"></button>
            <button className="w-[2.5rem] h-[2.5rem] rounded-[100%] bg-[#a0aec0]"></button>
            <button className="w-[2.5rem] h-[2.5rem] rounded-[100%] bg-[#f56565]"></button>
            <button className="w-[2.5rem] h-[2.5rem] rounded-[100%] bg-[#ed8936]"></button>
            <button className="w-[2.5rem] h-[2.5rem] rounded-[100%] bg-[#f15ba6]"></button>
           
        </div>*/ }
        <div>
          <button 
          className="bg-[#805ad5] text-white px-5 py-2 rounded-md cursor-pointer"
          onClick={generatePDF}
          
          
          >Download</button>
        </div>
      </div>
      <div className="w-[100%] flex justify-between">
      
        <Editer></Editer>
        <div className="w-[53%]"  ref={componentPDF}>
                <Template></Template>

        </div>

        

      

      </div>
      
    </div>
  )
}

export default BuilderDashboard