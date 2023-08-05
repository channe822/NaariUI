import React from 'react'
import "./blogs.css"
import Navbar from "../../components/Navbar"
import Footer from '../../components/Footer'
export default function Blogs() {


    return (
        <>
            <Navbar />


            <div className='bg-gradient-to-br from-[#2d0043] from-30% via-[#6d317a] via-70% to-[#2d0043] to-90% transition-all duration-0  ease-linear  h-full w-full pt-16'>
                <div><h1 className='font-black text-4xl text-center  py-5 text-white'>EmpowerHER: Stories, Strides, and Strengths of Inspiring Women</h1></div>
                
                <div className=' grid grid-cols-3 gap-4 p-5 max-[760px]:flex max-[760px]:flex-col '>
                    <div className='bg-gray-50 h-96 w-66 rounded-md '>


                        <div className=' flex items-center justify-center pt-1 p-4'>
                            <img src="https://www.svgrepo.com/show/382099/female-avatar-girl-face-woman-user-2.svg" className=' h-32' /></div>
                            <div className='px-4'>
                        <p className='text-base   text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div><div className='flex justify-center items-center'>
                        <button className=' bg-[#2d0043] text-white rounded-lg p-2 align-middle'>Read Full Blog</button>
                        </div>
                        <h4 className='text-center py-2 '>Client 1</h4>


                    </div>

                    <div className='bg-gray-50 h-96 w-66'> <div className=' flex items-center justify-center pt-1'>
                            <img src="https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg" className=' h-32' /></div>
                            <div className='px-4'>
                        <p className='text-base   text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div><div className='flex justify-center items-center'>
                        <button className=' bg-[#2d0043] text-white rounded-lg p-2 align-middle'>Read Full Blog</button>
                        </div>
                        <h4 className='text-center py-2 '>Client2</h4></div>



                    <div className='bg-gray-50 h-96 w-66'> <div className=' flex items-center justify-center pt-1'>
                            <img src="https://www.svgrepo.com/show/382110/female-avatar-girl-face-woman-user-3.svg" className=' h-32' /></div>
                           <div>
                           <div className='px-4'>
                        <p className='text-base   text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div></div>
                           <div className='flex justify-center items-center'>
                        <button className=' bg-[#2d0043] text-white rounded-lg p-2 align-middle'>Read Full Blog</button>
                        </div>
                        <h4 className='text-center py-2 '>Client 1</h4></div>

                </div> 
                <Footer/>
            </div>




        </>


    )
}