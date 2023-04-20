import React from 'react'
import Image from 'next/image'
import htmlLogo from '/public/assets/htmllogo.png'
import cssLogo from '/public/assets/csslogo.png'
import javasciptLogo from '/public/assets/javasciptlogo.png'
import csstailwindLogo from '/public/assets/tailwindcss.png'
import reactLogo from '/public/assets/react.png'
import nextjsLogo from '/public/assets/Next.js.png'
import graphicLogo from '/public/assets/adob.png'
import githubLogo from '/public/assets/githublogo.png'


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
                            src={htmlLogo} 
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
                            src={cssLogo}
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
                            src={javasciptLogo} 
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
                            src={csstailwindLogo} 
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
                            src={reactLogo}
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
                            src={nextjsLogo} 
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
                            src={graphicLogo}
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
                            src={githubLogo}
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