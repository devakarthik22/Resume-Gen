import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import Degree from './Degree';


function Education() {
    const {educationList, setEducationList,educationItem}=useContext(AppContext);
    function AddMore(){
      setEducationList((prev)=>{
        return [...prev,educationItem];
      })
    }
  return (
    <div>
        {
            educationList.map((item,index)=>{
                return (
                  <Degree index={index} item={item}></Degree>
                
                )
            })
        }
        {
          educationList.length<2 && (
            <button onClick={()=>AddMore()} className="ml-6 px-4 py-2 bg-[#805ad5] text-white rounded-md mt-4 mb-4">Add more</button>
          )
        }
    </div>
  )
}

export default Education