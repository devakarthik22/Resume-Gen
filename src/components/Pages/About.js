import React, { useContext } from 'react'
import { AppContext } from '../AppContext'

function About() {

    const {about,setAbout}=useContext(AppContext);
    function ChangeHandler(e){
        setAbout((prev)=>{
            return {...prev,[e.target.name]:e.target.value}
        })
    }

  return (
    <div className="flex w-[100%] mx-auto justify-between mt-[1rem] mb-[1rem] p-5">
        
        <div className="w-[48%] space-y-2">
            <div>
            <label htmlFor='fullname' className="text-lg text-black">Full Name</label><br></br>
            <input
            placeholder='fullname'
            id="fullname"
            type="text"
            name="name"
            value={about.name}
            onChange={(e)=>ChangeHandler(e)}

            className="px-4 py-2 bg-[#edf2f7] rounded-xl border-blue-500 w-full"


            ></input>

            </div>
            
            <div>
            <label htmlFor='email' className="text-lg text-black">Email</label><br></br>
            <input
            placeholder='email'
            id="email"
            type="email"
            name="email"
            value={about.email}
            onChange={(e)=>ChangeHandler(e)}
            className="px-4 py-2 bg-[#edf2f7] rounded-xl border-blue-500 w-full"

            ></input>
                
            </div>

            
           <div>
           <label htmlFor='address' className="text-lg text-black">Address</label><br></br>
            <input
            placeholder='address'
            id="address"
            type="text"
            name="address"
            value={about.address}
            onChange={(e)=>ChangeHandler(e)}
            className="px-4 py-2 bg-[#edf2f7] rounded-xl border-blue-500 w-full"

            ></input>

           </div>
           
           

        </div>
        <div className="w-[48%] space-y-2">
            <div>
            <label htmlFor='role' className="text-lg text-black">Role</label><br></br>
            <input
            id="role"
            placeholder='role'
            type="text"
            name="role"
            value={about.role}
            onChange={(e)=>ChangeHandler(e)}
            className="px-4 py-2 bg-[#edf2f7] rounded-xl border-blue-500 w-full"

            ></input>

            </div>
            <div>
            <label htmlFor='phone' className="text-lg text-black">Phone</label><br></br>
            <input
            id="phone"
            placeholder='phone number'
            type="text"
            name="phone"
            value={about.phone}
            onChange={(e)=>ChangeHandler(e)}
            className="px-4 py-2 bg-[#edf2f7] rounded-xl border-blue-500 w-full"

            ></input>

            </div>
            <div>
            <label htmlFor='linkedin' className="text-lg text-black">Linkedin</label><br></br>
            <input
            id="linkedin"
            placeholder='linkedin'
            type="text"
            name="linkedin"
            value={about.linkedin}
            onChange={(e)=>ChangeHandler(e)}
            className="px-4 py-2 bg-[#edf2f7] rounded-xl border-blue-500 w-full"

            ></input>

            </div>
        </div>
    </div>
  )
}

export default About