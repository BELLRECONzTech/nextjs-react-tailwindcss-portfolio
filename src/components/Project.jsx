import React from 'react'
import Image from 'next/image'
import propertyImg from '/public/propertyImg.png'
import Link from 'next/link'
import ProjectsItem from './ProjectsItem'
import property2Img from '/public/property2Img.png'
import burgurreact from '/public/burgurreact.png'
import firstreactredux from '/public/firstreactredux.png'

const Project = () => {
  return (
    <div id='project' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className=' py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                    <ProjectsItem 
                    title='Private Fantasy Travel Website' 
                    backgroundImg={propertyImg} 
                    projectUrl='/property'/>
                    <ProjectsItem 
                    title='Portfolio Website' 
                    backgroundImg={property2Img} 
                    projectUrl='/property2'/>
                    <ProjectsItem 
                    title='The Best Food Delivery Web App' 
                    backgroundImg={burgurreact} 
                    projectUrl='/property3'/>
                    <ProjectsItem 
                    title='Redux Movie Website OMDb api' 
                    backgroundImg={firstreactredux} 
                    projectUrl='/property4'/>

                </div>
        </div>
    </div>
  )
}

export default Project