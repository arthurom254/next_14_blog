import React from 'react'
import AtomImg from '@/app/atom.svg'
import Image from 'next/image'
export default function Banner() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mx-3 md:mx-20 border p-4 rounded-xl  border-gray-400/30 my-3  '>
        <div className="flex text-center items-center md:order-2 flex-col ">
            <h3>Empowering Minds Through Code & Technology</h3>
            <p>Dive into the world of programming, computer science, and cutting-edge technology. Explore expert insights, tutorials, and the latest trends that drive innovation. Whether you're a beginner or an expert, this is your gateway to mastering the digital realm.</p>
        </div>
        <div className="flex text-center items-center md:order-1 md:-translate-x-10 md:translate-y-0 translate-y-10 relative">
            <div className="absolute inset-1 bg-blue-400/20 blur-3xl filter -z-10 "></div>
            <div className="absolute inset-1 bg-transparent "></div>
            <Image  src={AtomImg} alt="" className='rounded m-0 prose w-full' />
        </div>
    </div>
  )
}
