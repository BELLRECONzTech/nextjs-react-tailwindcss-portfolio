import React from 'react'
import {FaLinkedin , FaGithub} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiOutlineMail , AiFillYoutube} from 'react-icons/ai'
import Link from 'next/link'

const Main = () => {
  return (
    <div id='home' className=' w-full h-screen text-center'>
        <div className='max-w-[1240px] w-f
         h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER </p>
                <h1 className='py-4 text-gray-700'>HI, I'm <span className='text-[#5651e5]'>Bell Theraphat</span></h1>
                <h1 className='py-4 text-gray-700'>A Front-End Web Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                Learning is something I enjoy very much, and so are mistakes.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <Link href='https://www.facebook.com/bell.theeraphat/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaFacebookSquare size ={20} />
                    </div>
                    </Link>
                    <Link href='https://github.com/BELLRECONzTech'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub size ={20} />
                    </div>
                    </Link>
                    <Link href='https://outlook.live.com/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail  size ={20} />
                    </div>
                    </Link>
                    <Link href='https://www.youtube.com/channel/UCSokYLRIiF5E3SVBfNy1nqw'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiFillYoutube size ={20} />
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main