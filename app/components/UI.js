"use client"
import React from 'react'
import Link from 'next/link'
import { FaBarsProgress, FaCircleInfo, FaHome, FaHouse, FaInstagram } from 'react-icons/fa6'
import { FaUser } from 'react-icons/fa'

function UI() {
  return (
    <div className="bg-transparent fixed top-110 w-full  flex  justify-center items-center">
   <div className="ui   flex   text-white bg-neutral-700  rounded-2xl px-2 py-2 shadow-lg shadow-neutral-900/50 backdrop-blur-md">
    <div className="flex gap-10 mx-2 my-1 group ">
    <Link href={'#home'}><FaHouse size={20}/></Link>
    <Link href={'#projects'}><FaBarsProgress size={20}/></Link>
    <Link href={'#about'}><FaCircleInfo size={20}/></Link>
    <Link href={'#contact'}><FaUser size={20}/></Link>

   
    </div>
    
   </div>
   </div>
  )
}

export default UI