import React, { useContext, useState } from 'react'
//import { v4 as uuidv4 } from 'uuid';
import { AppContext } from '../AppContext';
import {RxCross2} from "react-icons/rx"

function Skills() {
  const {skills,setSkills}=useContext(AppContext);
  const [count,setCount]=useState(18);

  const [skillitem,setSkillitem]=useState(" ");

  function changeHandler(e){
    const {value}=e.target;
    setSkillitem(value);

  }
  function submitHandler(e){
    e.preventDefault();
    if(!skillitem || skillitem===" "){
      return;
    }
    const newitem={
      id:count,
      name:skillitem,
    }
    setCount((prev)=>(prev+1));
    setSkills((prev)=>{
      return [...prev,newitem];
    });
    setSkillitem(" ");




  }
  function deleteHandler(skill){
    setSkills(skills.filter((item)=>(item.id!==skill.id)))

  }
  return (
    <div className="w-[98%] mx-auto p-4">
      <div className="">
        <h1 className="text-lg font-semibold">Add Skills</h1>
        <form className="mt-4 ">
          <div className="flex gap-x-2">
          <input
          type="text"
          placeholder="Enter you skills here"
          name="skill"
          value={skillitem}
          onChange={(e)=>changeHandler(e)}
          className="px-4 py-2 bg-[#edf2f7] rounded-md border-blue-500 w-[90%]"


          ></input>
          <button type="submit" onClick={(e)=>submitHandler(e)}
          className="px-3 py-[2px] bg-[#805ad5] text-white rounded-md"
          >Add</button>

          </div>
          

        </form>
      </div>
      <div className=" border-[0.2px] shadow-md mt-5 flex flex-wrap gap-x-3 p-2">
        {
          (skills.length>0)?
            (
              skills.map((skill,index)=>{
                return (
                <div className="flex gap-x-2 bg-[#805ad5] rounded-xl w-[max-content] text-white font-xs px-2 py-1 mt-2">
                  <div>{skill.name}</div>
                  <div  className=" flex justify-center items-center cursor-pointer text-center pt-1"
                  

                  >
                  <RxCross2
                   onClick={()=>{
                    deleteHandler(skill)
                  }}
                  //className="text-center"

                  >
                  </RxCross2>
                    
                  </div>
                  
                 

                </div>)

              })
            )
            

          :
          (
            "No item Added"
          )
        }

      </div>
    </div>
   
  )
}

export default Skills