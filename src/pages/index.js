import Image from 'next/image'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Project from '@/components/Project'
import Contract from '@/components/Contract'


export default function Home() {
  return (
    <div className="">
     <title>Portfolio Theeraphat</title>
     <meta name="desrciption" content="NextJs Port"/>
     <link rel="icon" href='/../public/assets/logobell.png'/>
     <Main />
     <About />
     <Skills/>
     <Project/>
     <Contract/>
    </div>
    
  )
}
