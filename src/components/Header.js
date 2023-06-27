import React from 'react'

function Header() {
  return (
    <div className="flex justify-between w-[100%] px-[3.5rem] py-[1.5rem] flex-wrap">
      <div>
        <h1 className="text-[#805ad5] text-3xl " style={{ fontFamily: "Pacifico"}}>Resumegen</h1>
      </div>
      <div className="flex gap-x-10 justify-center items-center flex-wrap" >
        <p className="text-lg cursor-pointer">Home</p>
        <p className="text-lg cursor-pointer">Templates</p>
        <p className="text-lg cursor-pointer">About</p>
        <button className="text-lg text-center px-4 py-1 bg-[#805ad5] rounded-lg text-white cursor-pointer">Contact</button>
      </div>
    </div>
  )
}

export default Header