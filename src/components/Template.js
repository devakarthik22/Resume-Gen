import React, { useContext } from 'react'
import { AppContext } from './AppContext'
import { MdMail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Template() {


  const {about, educationList, skills,
    workList, projects}=useContext(AppContext);

    

  return (
    <div className="w-[100%]  h-[900px] shadow-2xl Actual-Resume">
      <div className="w-[100%] p-4">
        <div className="text-xl font-bold">{about.name ? about.name : "Jhon Doe"}</div>
        <div className="opacity-[0.8]">{about.role ? about.role : "Full Stack Web Developer"}</div>

      </div>
      <div className="flex justify-between pl-4 pr-4 bg-[#805ad5] py-4 text-white">
        <div className="flex gap-x-1">
          <MdMail className="mt-[6px]"></MdMail>
          {about.email ? about.email : "jhondoe@gmail.com"}

        </div>
        <div className="flex gap-x-1">
          <MdLocalPhone className="mt-[6px]"></MdLocalPhone>
          {about.phone ? about.phone : "+918559584846"}
        </div>
        <div className="flex gap-x-1">
          <MdLocationPin className="mt-[6px]"></MdLocationPin>
          {about.address ? about.address : "Pune, MH"}
        </div>
        <div className="flex gap-x-1">
          <RiLinkedinBoxFill className="mt-[6px]"></RiLinkedinBoxFill>
          <Link to="">Linkedin</Link>
          
        </div>

      </div>
      <div className=" flex px-4 py-6">
      <div className="w-[200%]">
        <div className="w-[100%]">
          <h1 className="text-xl font-semibold mb-3">EDUCATION</h1>
          <div className="w-[100%]">
          {
            educationList.map((item,index)=>{
              const { degree, school, startYr, endYr, grade } = item;
              return (
                <div key={index} className="mb-4">
                  <div className="text-md font-semibold"> 
                    
                    {degree ? degree : "B.Tech Computer Engineering"}
                  

                  </div>
                  <div className="text-sm">
                  {school ? school : "College of Engineering Pune"}

                  </div>
                  <div className="text-sm flex gap-x-2">
                    <div className="text-sm">
                    {startYr ? startYr : 2014} - {endYr ? endYr : 2018}

                    </div>
                    <div
                    className="text-sm"
                    >
                    {grade ? grade : "8.7 CGPA"}

                    </div>
                  </div>

                </div>
              )
            })
          }

          </div>
          

        </div>
        
        <div>
          <h1 className="text-xl font-semibold mb-3">WORK EXPERIENCE</h1>
          <div>
          {
            workList.map((item,index)=>{
              const {
                position,
               
                company,
                startDate,
                endDate,
                description,
              } = item;
              return (
                <div key={index} className="mb-6">

                  <div className="text-md mb-[2px] font-semibold">
                  {position ? position : "Full Stack Developer"}

                  </div>
                  <div className="text-sm mb-[1px]">
                  {company ? company : "XYZ Infotech Services"}

                  </div>
                  <div className="text-sm">
                  {startDate ? startDate : "2018-03"} -{" "}
                        {endDate ? endDate : "2021-12"}

                  </div>
                  <div className="textmd leading-6">
                  {description
                          ? description
                          : "Fixed bugs from existing websites and implemented enhancements that significantly improved web functionality and speed."}

                  </div>

                </div>
              )
            })
          }


          </div>
          
        </div>

      </div>
      <div className="">
        <div>
           <h1 className="text-xl font-semibold mb-3">SKILLS</h1>
           <div className="flex flex-wrap gap-x-2 ">
              {
                  skills.map((item,index)=>{
                    return (
                        <div key={index} className="bg-[#805ad5] rounded-xl w-[max-content] text-white font-xs px-2 py-1 mt-2">
                          {item.name}
                        </div>
                  )
             
                  })
              }

           </div>
           
        </div>
        <div className="mt-5">
          <h1 className="text-xl font-semibold mb-3">PROJECTS</h1>
          <div>
            {
              projects.map((item,index)=>{
                const { name, url, description } = item;
                return (
                  <div key={index} className="mb-4">
                    <div className="flex gap-x-2 font-semibold">
                      <div>
                      {name ? name : "Project Name"}{" "}

                      </div>
                      <div className="mt-1">
                         <Link to={url}><BiLinkExternal /></Link>
                      </div>

                    </div>
                    <div>
                    {description
                              ? description
                              : "Lorem ipsum dolor sit amet consectetur adipisicing."}

                    </div>

                  </div>
                  
                )
              })
            }
          </div>

        </div>
      </div>

      </div>
      
        
    </div>
  )
}

export default Template