import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import {AiOutlineClose , AiOutlineMenu , AiOutlineMail , AiFillYoutube} from 'react-icons/ai'
import {FaFacebookSquare , FaGithub} from 'react-icons/fa'
import { useRouter } from 'next/router'
import logobell  from '/public/assets/logobell.png'



const Navbar = () => {
  const [nav , setNav] = useState(false)
  const [shadow , setShadow] = useState(false)
  const [navBg , setNavBg] = useState('#ecf0f3')
  const [linkColor , setLinkColor] = useState('#1f2937')
  const router = useRouter()

  useEffect(() => {
    if(
      router.asPath === '/property' ||
      router.asPath === '/property1' ||
      router.asPath === '/property2' ||
      router.asPath === '/property3' 
    )
    {
      setNavBg('transparent')
      setLinkColor('#ecf0f3')  
    } else {
      setNavBg('#ecf0f3')
      setLinkColor ('#1f2937')
    }
  },[router])

  const handleNav = () => {
    setNav (!nav)
  }
  useEffect (() => {
    const handleShadow = () => {
      if 
      (window.scrollY >= 90)
      {
        setShadow(true)
      } 
      else 
      {
        setShadow (false)
      }
    }
      window.addEventListener('scroll', handleShadow)
  }, [])

  return (

    <div style={{backgroundColor:`${navBg}`}} 
    className= {
      shadow 
    ? 'fixed w-full h-20 shadow-xl z-[100]' 
    : 'fixed w-full h-20  z-[100]'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'  >
        <Link href='/#home'>
          <Image className='' src={logobell}
          alt="logo" 
          width='200'
          height='50' 
          /> 
          </Link>
          <div>
            <ul style={{color:`${linkColor}`}} className='hidden md:flex'>
              <Link href='/'> 
                <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                </Link>
                <Link href='/#about'> 
                <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                </Link>
                <Link href='/#skills'> 
                <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                </Link>
                <Link href='/#project'> 
                <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                </Link>
                <Link href='/#contract'> 
                <li className='ml-10 text-sm uppercase hover:border-b'>Contract</li>
              </Link>
            </ul>
            <div onClick ={handleNav} className='md:hidden'>
              <AiOutlineMenu size={25} />
            </div>
          </div>
      </div>

        <div className={ nav ? 'fixed left-0 w-full h-screen bg-black/70 ' : ''}>
          <div className={nav ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
          : ' fixed left-[-100%] top-0  p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'> 
              <Image 
              src={logobell}  
              alt='/'
              width='200'
              height='50' 
              />
              </Link>
             

              <div onClick ={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose size = {25}/>
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Let's build something together</p>
            </div>
          </div>
          <div>
            <div className='py-4 flex flex-col'>
              <ul className='uppercase'>
                <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                </Link>
                <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
                </Link>
                <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
                </Link>
                <Link href='/#project'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
                </Link>
                <Link href='/#contract'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>contract</li>
                </Link>
              </ul>
              <div className='pt-40'>
                <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaFacebookSquare size={20} />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub  size={20} />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail size={20} />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiFillYoutube  size={20}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
    
  )
}

export default Navbar