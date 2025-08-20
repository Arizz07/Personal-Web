import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Project() {
  return (
   <div className="about flex flex-col justify-center items-center min-h-screen mx-8 " id="about">
        <h5 className="text-neutral-300 text-sm">My recent Work</h5>
        <h2 className="font-dm font-semibold text-xl">Projects</h2>

        <div className="section flex-col md:flex md:flex-row flex-wrap  justify-between mt-10  gap-8 py-8">
           <div className=" rounded-md  mt-1 bg-neutral-700 p-0.5 group bg-gradient-to-br from-purple-500 to-pink-500 ">
                <span className="relative  w-[300px] h-[250px] flex flex-col items-center transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md ">
                    <div className="img h-40 w-60 py-2 rounded-xl">
                    <Image className=" h-full w-full object-cover rounded-xl" height={200} width={200} src={'/Simple Home-React.png'} alt="ReactChatUI illustrations"/>
                    </div>
                    <span className='text-center'>ReactChat UI</span>
                    <span className='text-center'>Simple WhatsApp Chat UI- React</span>
                      <div className="flex gap-4 my-2 buttons">
                          <button className='bg-white px-2 py-0.5 text-black rounded-lg font-dm text-sm'>
                              <Link href={'http://github.com/Arizz07/'} className='text-center'>GitHub</Link>
                          </button>
                          <button className='bg-white px-2 py-0.5 text-black rounded-lg font-dm text-sm'>
                              <Link href={'http://github.com/Arizz07/'} className='text-center'>View Demo</Link>
                          </button>
                      </div>
                </span>
            </div>

           <div className=" rounded-md  mt-1 bg-neutral-700 p-0.5 group bg-gradient-to-br from-purple-500 to-pink-500 ">
                <span className="relative w-[300px] h-[250px] flex flex-col items-center  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md ">
                    <div className="img h-40 w-60 py-2  rounded-xl">
                    <Image className="h-full w-full object-cover rounded-xl" height={200} width={200} src={'/Brdy Ui.png'} alt="ReactChatUI illustrations"/>
                    </div>
                    <span className='text-center'>Brdy Special </span>
                    <span className='text-center'>Simple Birthday Wish - React</span>
                    <div className="flex gap-4 my-2 buttons">
                          <button className='bg-white px-2 py-0.5 text-black rounded-lg font-dm text-sm'>
                              <Link href={'http://github.com/Arizz07/'} className='text-center'>GitHub</Link>
                          </button>
                          <button className='bg-white px-2 py-0.5 text-black rounded-lg font-dm text-sm'>
                              <Link href={'http://github.com/Arizz07/'} className='text-center'>View Demo</Link>
                          </button>
                      </div>
                </span>
            </div>

            <div className=" rounded-md  mt-1 bg-neutral-700 p-0.5 group bg-gradient-to-br from-purple-500 to-pink-500 ">
                <span className="relative h-[250px] w-[300px] flex flex-col items-center transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md ">
                    <div className="img h-40 w-60 py-2  rounded-xl">
                    <Image className="h-full w-full object-cover rounded-xl" height={200} width={200} src={'/PassOP-ReactJS.png'} alt="ReactChatUI illustrations"/>
                    </div>
                    <span className='text-center'>Password Manager</span>
                    <span className='text-center'>Custom Password Manager - React</span>
                    <div className="flex gap-4 my-2 buttons">
                          <button className='bg-white px-2 py-0.5 text-black rounded-lg font-dm text-sm'>
                              <Link href={'http://github.com/Arizz07/'} className='text-center'>GitHub</Link>
                          </button>
                          <button className='bg-white px-2 py-0.5 text-black rounded-lg font-dm text-sm'>
                              <Link href={'http://github.com/Arizz07/'} className='text-center'>View Demo</Link>
                          </button>
                      </div>
                </span>
            </div>
            <div className=" rounded-md  mt-1 bg-neutral-700 p-0.5 group bg-gradient-to-br from-purple-500 to-pink-500 ">
                <span className="relative h-[250px] w-[300px] flex flex-col items-center transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md ">
                    <div className="img h-40 w-60  py-2  rounded-xl">
                    <Image className="h-full w-full object-cover rounded-xl" height={200} width={200} src={'/Spotify Feature.png'} alt="ReactChatUI illustrations"/>
                    </div>
                    <span className='text-center'>Feature Spotify UI</span>
                    <span className='text-center'>Custom Spotify UI - React</span>
                    <div className="flex gap-4 my-2 buttons">
                          <button className='bg-white px-2 py-0.5 text-black rounded-lg font-dm text-sm'>
                              <Link href={'http://github.com/Arizz07/'} className='text-center'>GitHub</Link>
                          </button>
                          <button className='bg-white px-2 py-0.5 text-black rounded-lg font-dm text-sm'>
                              <Link href={'http://github.com/Arizz07/'} className='text-center'>View Demo</Link>
                          </button>
                      </div>
                </span>
            </div>

         </div>
      </div> 

  )
}

export default Project