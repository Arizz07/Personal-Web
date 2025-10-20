'use client'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaRegEnvelope, FaWhatsapp } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Contact() {
    const [form, setForm] = useState({
        mail: '',
        name: '',
        message: ''
    })
    const [submissions, setSubmissions] = useState([])

    useEffect(() => {
        //check if localStorage is already set
        const existingData = localStorage.getItem('contactForm');

        if (existingData) {
            setSubmissions(JSON.parse(existingData));
            //if data exists, set the form state with the first entry

        }
    }, []);


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //save the details in local storage
        if (!form.mail || !form.name || !form.message) {
            toast.info('Please fill all the fields');
            return;
        }
        if (!form.mail.includes('@')) {
            toast.info('Please enter a valid email address');
            return;
        }
        const newSubmission = [...submissions, form];
        localStorage.setItem('contactForm', JSON.stringify(newSubmission));
        setSubmissions(newSubmission);
        //clear the form
        //reset the form
        setForm({
            mail: '',
            name: '',
            message: ''
        });
        toast.success('Form submitted successfully!');
    }

    return (
        <>
        <ToastContainer />
        <div className="contact-form flex flex-col justify-center items-center min-h-screen  " id="contact">

            <h5 className="text-neutral-300 text-sm">Get In Touch</h5>
            <h2 className="font-dm font-semibold text-2xl">Contact me</h2>
            <div className="contact w-full flex flex-col md:flex-row justify-around gap-4 mt-10">
                <div className="form md:w-1/2  p-0.5 mx-2 md:ml-10 bg-neutral-700 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500">
                    <span className="relative rounded-lg  flex flex-col  px-6 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900">
                        <form onSubmit={handleSubmit}>
                            <div className="input flex flex-col gap-2 my-2">
                                <label className='px-2' htmlFor="phone">Enter Email</label>
                                <input className='w-full border outline-none rounded-xl px-2 py-1 hover:border-fuchsia-600' type="email" name="mail" value={form.mail} onChange={handleChange} id="mail" placeholder='yourinfo@example.com....' />
                            </div>
                            <div className="input flex flex-col gap-2 my-3">
                                <label className='px-2' htmlFor="phonr">Enter Name</label>
                                <input className='w-full border outline-none rounded-xl px-2 py-1 hover:border-fuchsia-600' type="text" name="name" value={form.name} onChange={handleChange} id="name" placeholder='John' />
                            </div>
                            <div className="input flex flex-col gap-2 my-2">
                                <label className='px-2' htmlFor="phonr">Your Message</label>
                                <textarea className='w-full border outline-none rounded-xl px-2 py-1 hover:border-fuchsia-600' type="text" name="message" value={form.message} onChange={handleChange} id="message" placeholder='tell me something' rows={4}></textarea>
                            </div>
                            <div className="btn flex justify-end items-center mt-4">
                                <button type='submit' className='btn px-4 py-1 bg-black outline-1 hover:outline-2 hover:outline-fuchsia-600 hover:text-fuchsia-600  hover:font-bold rounded-lg'>Submit</button>
                            </div>
                        </form>
                    </span>
                </div>
                <div className="social md:w-1/2   ">
                    <div className='flex  md:flex-row flex-col justify-center md:items-center mx-2 gap-8 '>
                        <div className=" rounded-md   bg-neutral-700 p-0.5 group bg-gradient-to-br from-purple-500 to-pink-500 ">
                            <span className="relative  flex flex-col items-center gap-4 px-14 py-6  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md ">
                                <span><FaRegEnvelope size={30} /></span>
                                <div className=" hover:cursor-pointer  hover:bg-fuchsia-600 rounded-lg flex flex-col justify-center items-center px-4 py-1">

                                {/* <span>Mail</span> */}
                                <Link href={'https://mail.google.com/mail/?view=cm&fs=1&to=arisachi7201@gmail.com'} target='_blank'>Email</Link>
                                </div>
                            </span>
                        </div>
                        <div className=" rounded-md   bg-neutral-700 p-0.5 group bg-gradient-to-br from-purple-500 to-pink-500">
                            <span className="relative  flex flex-col items-center gap-4 px-12 py-6  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md ">
                                <span><FaWhatsapp size={30} /></span>
                            <div className="hover:cursor-pointer hover:bg-fuchsia-600 shadow-md rounded-lg flex flex-col justify-center items-center px-4 py-1">
                                {/* <span>WhatsApp</span> */}
                                <Link href={'https://wa.me/917994061577?text=hi%20there!!'} target='_blank'>Text Me</Link>
                            </div>
                            </span>
                        </div>
                    </div>

                    <div className="links mt-16 flex justify-center items-center gap-12 ">
                        <div className=" rounded-lg w-10 h-10   bg-neutral-700 p-0.5 group bg-gradient-to-br from-purple-500 to-pink-500 ">
                            <span className="relative flex justify-center items-center  gap-2 py-2  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-lg ">
                                <Link href={'https://instagram.com/ariizz07'} className='text-center'><FaInstagram size={20} /></Link>
                            </span>
                        </div>
                        <div className=" rounded-lg w-10 h-10   bg-neutral-700 p-0.5 group bg-gradient-to-br from-purple-500 to-pink-500 ">
                            <span className="relative flex justify-center items-center  gap-2 py-2  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-lg ">
                                <Link href={'https://facebook.com/ariizz07'} className='text-center'><FaFacebook size={20} /></Link>
                            </span>
                        </div>
                        <div className=" rounded-lg w-10 h-10   bg-neutral-700 p-0.5 group bg-gradient-to-br from-purple-500 to-pink-500 ">
                            <span className="relative flex justify-center items-center  gap-2 py-2  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-lg ">
                                <Link href={'https://www.linkedin.com/in/mahammad-arish-8a1280384'} className='text-center'><FaLinkedinIn size={20} /></Link>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact