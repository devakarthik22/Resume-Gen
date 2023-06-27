import React, { useContext,useState } from 'react'
import { AppContext } from '../AppContext'

function Projects() {
  const {projects, setProjects,projectitem,setProjectitem}=useContext(AppContext);
  const [indx,setIndx]=useState(2);
  const [isActive,setIsActive]=useState(true);

  function deleteHandler(id){
    setProjects(projects.filter((item)=>(item.id!==id)));

  }


  function chandleHandler(e,id){
    const {name,value}=e.target;
    
    const newItem=projects.map((p)=>{
      return p.id===id ?Object.assign(p,{[name]:value}):p
    })
    setProjects(newItem);

  }



  function addmore(){
    setProjectitem((prev)=>{
      return {...prev,id:indx};
    });
    setIndx((prev)=>(prev+1));

    
    setProjects([...projects, projectitem]);

  }





  return (
    <div>
      {
        projects.map((project,index)=>{
          return (
            <div key={index}
            className="w-[100%] mx-auto p-6 pb-0 border-b-slate-200 border-b-2"
            >
              <div
              className="flex justify-between p-2 pl-0 cursor-pointer"
                
                onClick={()=>{
                setIsActive(!isActive)
                }}
              >
                <div className="text-md font-[600]">Position</div>
                <div className="mr-1">{isActive?("-"):("+")}</div>

              </div>
              {
                isActive && 
                <div>
                          <div>
                <input
                type="text"
                placeholder="Project name"
                name="name"
                value={project.name}
                onChange={(e)=>chandleHandler(e,project.id)}
                className="px-4 py-2 bg-[#edf2f7] rounded-xl border-blue-500 w-full mt-2"


                ></input>

              </div>
              <div>
                <input
                type="text"
                placeholder="Project url"
                name="url"
                value={project.url}
                onChange={(e)=>chandleHandler(e,project.id)}
                className="px-4 py-2 bg-[#edf2f7] rounded-xl border-blue-500 w-full mt-2"
                >
                </input>

              </div>
              <div>
                <textarea
                type="text"
                placeholder="Project Description"
                name="description"
                value={project.description}
                onChange={(e)=>chandleHandler(e,project.id)}
                className="px-4 py-2 bg-[#edf2f7] rounded-xl border-blue-500 w-full mt-2 h-[40%]"
                >
                </textarea>

              </div>
              <div>
                <button onClick={()=>deleteHandler(project.id)} className="bg-[#fc3003] text-white px-4 py-2 rounded-lg mb-5 mt-4">delete</button>

              </div>


                </div>
              }   
              
            </div>
          )
        })
      }
      {
        projects.length<4 && (
          <button onClick={()=>addmore()} className="ml-6 px-4 py-2 bg-[#805ad5] text-white rounded-md mt-4 mb-4">Add More</button>
        )
      }

    </div>
  )
}

export default Projects