"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import {FaBars} from 'react-icons/fa'

function Navbar() {
  const [show, setShow] = useState(false)
  return (
 <>
 <nav className='bg-neutral-900 text-white px-2 py-2 flex justify-between items-center'>
    <Link className='text-xl font-bold ml-20 tracking-widest font-dm ' href={'/'}>Ariizz</Link>
        <div className="relative mr-4">
        <button onClick={()=>setShow(!show)} onBlur={()=>{setTimeout(()=>{
          setShow(false)
        },300)}} className="relative mt-1 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden  text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 group ">
        <span className="relative px-2 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            <FaBars size={20}/>
        </span>
        </button>
       {show && <div className="absolute rounded-md  top-11 right-0 mt-1 bg-neutral-700 p-0.5 group bg-gradient-to-br from-purple-500 to-pink-500 ">
        <span className="relative  flex flex-col  px-6 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md ">

          <span className='pr-6 py-1 rounded-lg hover:text-blue-300 ' ><Link href={'#about'}>About</Link></span>
          <span className='pr-6 py-1 rounded-lg hover:text-blue-300'><Link href={'#projects'}>Projects</Link></span>
          <span className='pr-6 py-1 rounded-lg hover:text-blue-300'><Link href={'#contact'}>Contact</Link></span>
       </span> </div>
}
</div>
    
 </nav>
 </>
  )
}

export default Navbar