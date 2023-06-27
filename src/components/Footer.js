import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-[#edf2f7] w-full px-4 py-6 flex justify-around mt-[4rem]" >
      <div>
      2023 Resume Gen. Designed By <span className="font-semibold">Pappu Deva Satya karthik
        </span>
      </div>
      <div className="flex gap-x-6">
        <Link to="https://www.instagram.com/___karthik79___/?igshid=NGExMmI2YTkyZg%3D%3D" ><FaInstagram className="text-2xl"></FaInstagram></Link>
        <Link to="https://github.com/devakarthik22?tab=repositories" target="_blank"><FaGithub className="text-2xl"></FaGithub></Link>
        <Link to="https://www.linkedin.com/in/p-deva-satya-karthik-537407192/" target="_blank"><FaLinkedin className="text-2xl"></FaLinkedin></Link>
       

      </div>
    </div>
  )
}

export default Footer