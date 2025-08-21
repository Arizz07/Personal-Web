import Image from "next/image";
import Link from "next/link";
import { FaChalkboardUser, FaListCheck } from "react-icons/fa6";
import Contact from "./components/Contact";
import Project from "./components/Project";

export default function Home() {
  return (
  <>
  <div className="container m-auto pt-26 min-h-[80vh] " id="home">
    <div className="prdetails text-center  ">
      <h4 className="font-pop text-xs">Heyy I&apos;m </h4>
      <h1 className="font-dm text-4xl pt-2 font-bold ">Mahammad Arish</h1>
      <h4 className="font-pop text-gray-300 pt-2">FullStack Developer</h4>
      <div className="buttons flex justify-center items-center gap-4 mt-8">
       <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent font-semibold">
            <Link href={'http://github.com/Arizz07'}>GitHub</Link>
        </span>
        </button>
       <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent font-semibold">
            Let&apos;s Talk!
        </span>
        </button>
      </div>
    </div>
  </div>

  <div className="about flex flex-col justify-center items-center min-h-screen mx-8 " id="about">
        <h5 className="text-neutral-300 text-sm">Get To Know</h5>
        <h2 className="font-dm font-semibold text-xl">About me</h2>

        <div className="info flex flex-col md:flex-row  justify-center mt-10  gap-2 py-8">
          <div className="img mx-8 md:w-2/5">
            <Image className="h-80 w-100 object-cover rounded-xl" height={100} width={80} src={'/LOGO.jpg'} alt="Logo illustrations"/>
          </div>
          <div className="aboutinfo   md:w-3/5 ">
            <span className="text-neutral-200 text-md font-pop text-justify">Heloo, I am Mahammad Arish full stack developer,I am from Mangalore, Karnataka. My educational background in computer science. I am a Fresher now, 
              Aspiring software developer with skills in web development, looking to grow through real-world projects</span>
              <div className="flex gap-8 md:mt-12 mt-2 min-h-32 min-w-40">
                <div className=" rounded-md w-40  bg-neutral-700 p-0.5 group bg-gradient-to-br from-purple-500 to-pink-500 ">
                    <span className="relative  flex flex-col items-center gap-2 px-6 py-6  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md ">
                       <span><FaListCheck size={25}/></span>
                        <div className="head flex flex-col items-center">
                      <span>Projects</span>
                    <span>10+ completed</span>
                    </div>
                    </span>
                
                </div>

                <div className=" rounded-md w-40  bg-neutral-700 p-0.5 group bg-gradient-to-br from-purple-500 to-pink-500 ">
                    <span className="relative  flex flex-col items-center gap-2 px-6 py-6  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md ">
                       <span><FaChalkboardUser size={25}/></span>
                  <div className="head flex flex-col items-center">
                    <span>Experience</span>
                    <span>Fresher</span>
                  </div>
                    </span>
                </div>
              </div>
              
          </div>

        </div>
      </div> 

    {/* My Projects Showcase */}

    <div className="min-h-screen" id="projects">
    <Project/>
    </div> 


    {/* Contact Form to User  */}
    
       <Contact/>

    
   
  </>
  );
}
