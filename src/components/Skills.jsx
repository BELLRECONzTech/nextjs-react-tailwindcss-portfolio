import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>


                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 '>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className=' m-auto'>
                            <Image 
                            src='/public/assets/htmllogo.png'
                            alt='/'
                            width='100'
                            height='100'/>

                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 '>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className=' m-auto'>
                            <Image 
                            src='/public/assets/csslogo.png'
                            alt='/'
                            width='70'
                            height='100'/>

                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 '>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className=' m-auto'>
                            <Image 
                            src='/public/assets/javasciptlogo.png'
                            alt='/'
                            width='100'
                            height='100'/>

                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <h3>JAVASCRIPT</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 '>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className=' m-auto py-4'>
                            <Image 
                            src='/public/assets/tailwindcss.png'
                            alt='/'
                            width='100'
                            height='100'/>

                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <h3>TAILWIND CSS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 '>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className=' m-auto'>
                            <Image 
                            src='/public/assets/react.png'
                            alt='/'
                            width='100'
                            height='100'/>

                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <h3>REACT</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 '>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className=' m-auto py-4'>
                            <Image 
                            src= '/public/assets/Next.js.png' 
                            alt='/'
                            width='100'
                            height='100'/>

                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <h3>NEXT JS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 '>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center '>
                        <div className=' m-auto py-4'>
                            <Image 
                            src= '/public/assets/adob.png'
                            alt='/'
                            width='100'
                            height='100'/>

                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <h3>Graphic</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 '>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className=' m-auto'>
                            <Image 
                            src='/public/assets/githublogo.png'
                            alt='/'
                            width='100'
                            height='100'/>

                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <h3>GITHUB</h3>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Skills