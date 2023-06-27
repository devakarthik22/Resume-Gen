import React, { useContext ,useState} from 'react'
//import AppContext from "../AppContext"
import { AppContext } from '../AppContext';



function Work() {
  const {workList, setWorkList,workitem,setWorkitem}=useContext(AppContext);
  const [indx,setIndx]=useState(2);
  const [isActive,setIsActive]=useState(true);
  //console.log(workitem)
  function changeHandler(e,id){
    const {name,value}=e.target;
   // console.log(name,id);
   
    let newList=workList.map((x)=>(
      
       x.id===id ?Object.assign(x, {[name]: value }):x)
    );
   // console.log(newList);
    setWorkList(newList);


  }
  function deleteHandler(id){
    setWorkList(workList.filter((elem) => elem.id !== id));
    console.log(workList)

  }
  function addmore(){
    setWorkitem((prev)=>{
      return {...prev,id:indx};
    });
    setIndx((prev)=>(prev+1));

    
    setWorkList([...workList, workitem]);
    console.log(workList);

  }

  return (
    <div className="w-[98%] mx-auto">
          {
      
              workList.map((item)=>{
                if (!item) {
                  // Handle case where item is undefined or null
                  return null;
                }
                  return (
                    <div className="w-[100%] mx-auto p-6 pb-0 border-b-slate-200 border-b-2">
                      <div className="flex justify-between p-2 pl-0 cursor-pointer"
                      onClick={()=>{
                        setIsActive(!isActive)
                    }}
                      >
                        <div className="text-lg font-[600]">Position</div>
                        <div className="mr-1">{isActive?("-"):("+")}
                      </div>
                     

                      </div>
                      {
                         isActive && 
                         <div className="w-[100%]">
                           <div className=''>
                       
                       <input
                       type="text"
                       placeholder="position"
                       name="position"
                       onChange={(e)=>changeHandler(e,item.id)}
                       value={item.position}
                       className="px-4 py-2 bg-[#edf2f7] rounded-xl border-blue-500 w-full"

                       
                       
                       ></input>
                       <br></br>
                       <input
                       type="text"
                       placeholder="company"
                       name="company"
                       onChange={(e)=>changeHandler(e,item.id)}
                       value={item.company}
                       className="px-4 py-2 bg-[#edf2f7] rounded-xl border-blue-500 w-full mt-2"
                       
                       ></input>
                          </div>
                     <div className="w-[100%] flex gap-x-2 mt-4">
                       <div className="">
                       <label htmlFor='startdate'>Start Date</label><br></br>
                       <input
                         id="startdate"
                         type="date"
                         placeholder="Start Date"
                         name="startDate"
                         onChange={(e)=>changeHandler(e,item.id)}
                         value={item.startDate}
                         className="px-4 py-2 bg-[#edf2f7] rounded-xl border-blue-500 w-full mt-2"
                       
                       ></input>

                       </div>
                       <div>
                       <label htmlFor='enddate'>End Date</label><br></br>
                       <input
                         id="enddate"
                         type="date"
                         placeholder="End Date"
                         name="endDate"
                         onChange={(e)=>changeHandler(e,item.id)}
                         value={item.endDate}
                         className="px-4 py-2 bg-[#edf2f7] rounded-xl border-blue-500 w-full mt-2"
                       
                       ></input>

                       </div>
                       
                       

                     </div>
                     <div className="mt-4">
                       <label htmlFor='description' className="text-md">Description</label><br></br>
                       <textarea
                       type="text"

                       id="description"
                       placeholder='Enter you description'
                       name="description"
                       onChange={(e)=>changeHandler(e,item.id)}
                       value={item.description}
                      className="px-4 py-2 bg-[#edf2f7] rounded-sm border-blue-500 w-full mt-2 h-[50%]"


                       ></textarea>

                     </div>
                     <div>
                       <button onClick={()=>(deleteHandler(item.id))} className="bg-[#fc3003] text-white px-4 py-2 rounded-lg mb-5 mt-4">Delete</button>
                     </div>

                          
                         </div>
                      }
                     
                    </div>
                  
                  )
              })

      
          }
          {
            workList.length<3 && (
                    <button onClick={()=>addmore()} className="ml-6 px-4 py-2 bg-[#805ad5] text-white rounded-md mt-4 mb-4">Add More</button>
            )
          }
    </div>
    

  )
}

export default Work