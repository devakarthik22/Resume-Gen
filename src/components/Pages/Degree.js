import React, { useState,useContext } from 'react'
import { AppContext } from '../AppContext';

function Degree({index,item}) {
    const [isActive,setIsActive]=useState(true);
    const {educationList, setEducationList}=useContext(AppContext);
    function changeHandler(e,index){
        const {name,value}=e.target
        const newList=educationList.map((item,idx)=>{
            return (index===idx)?(Object.assign(item,{[name]:value})):(item);
        })
        setEducationList(newList);

    }
  return (
    <div className="w-[98%] p-6 pb-0 mx-auto mb-4">
        <div
        onClick={()=>{
            setIsActive(!isActive)
        }}

        className="w-[100%] flex justify-between mb-4 cursor-pointer"
        >
            <div className="text-lg text-black font-semibold">Degree</div>
            <div className="mr-4">{isActive?("-"):("+")}</div>
        </div>
        <div>
            {
                isActive && 
                <div>
                    <input
                    type="text"
                    placeholder="Degree"
                    name="degree"
                   // value={educationList.degree}
                    onChange={(e)=>changeHandler(e,index)}
                    className="px-4 py-2 bg-[#edf2f7] rounded-xl border-blue-500 w-full"
                    

                    ></input>
                    <br></br>
                    <input
                    type="text"
                    placeholder="School"
                    name="school"
                    onChange={(e)=>changeHandler(e,index)}
                    className="px-4 py-2 bg-[#edf2f7] rounded-xl border-blue-500 w-full mt-4"
                    ></input>
                    <div className='flex justify-between mt-4'>
                        <div>
                            <label htmlfor="start"
                             className="text-lg text-black ml-1"
                            >Start</label><br></br>

                            <input
                            id="start"
                            type="text"
                            placeholder="Start Year"
                            name="startYr"
                            onChange={(e)=>changeHandler(e,index)}
                            className="px-4 py-2 bg-[#edf2f7] rounded-xl border-blue-500 w-[90%]"
                            ></input>
                        </div>
                        <div className="">
                            <label htmlfor="end"
                             className="text-lg text-black ml-1"
                            >End</label><br></br>
                            <input
                            id="end"
                            type="text"
                            placeholder="End Year"
                            name="endYr"
                            onChange={(e)=>changeHandler(e,index)}
                            className="px-4 py-2 bg-[#edf2f7] rounded-xl border-blue-500 w-[90%]"
                            ></input>

                        </div>
                        <div>
                            <label htmlfor="grade"
                             className="text-lg text-black ml-1"
                            >Grade</label><br></br>
                            <input
                            id="grade"
                            type="text"
                            placeholder="Grade"
                            name="grade"
                            onChange={(e)=>changeHandler(e,index)}
                            className="px-4 py-2 bg-[#edf2f7] rounded-xl border-blue-500 w-[90%]"
                            ></input>
                            </div>

                    </div>

                </div>
                

            }
            


        </div>
    </div>
  )
}

export default Degree