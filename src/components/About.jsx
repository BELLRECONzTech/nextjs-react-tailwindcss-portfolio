import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import profileImg from '/public/assets/pro.JPG'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
            <h2 className='py-4'>Theeraphat Uamduang</h2>
            <p className='py-2 text-gray-600'>// Call me Bell </p>
            <p className='py-2 text-gray-600'>      I have been living with computers for a long time and enjoy using them for anything related to technology, whether it's graphics, web design, video editing, or other related fields. I love it so much that when it came time to choose a career path, I had to decide between both sides, whether it be graphics or coding. However, the high monetary return is what I ultimately chose as my priority.</p>
            <p className='py-2 text-gray-600'>"That is where I had to start my career in this field, starting as a passionate and enthusiastic newcomer in front-end development, ready to explode with my own projects.</p>
            <Link href='https://github.com/BELLRECONzTech'>
            <p className='underline cursor-pointer'>Check out Some of my last project</p>
            </Link>
            </div>
            <div className='w-full m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' 
                src={profileImg}
                alt="logo" 
                width='800'
                height='800'  />
            </div>
        </div>
    </div>
  )
}

export default About