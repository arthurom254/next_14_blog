import Link from 'next/link'
import React from 'react'

export default function BlogCard({blog}) {
  const {content, blogger, preview, bio, image, url } = blog;
  return (
    <Link href={url} className="border bg-[#151b23]  rounded-lg border-stone-400/30 shadow-xl px-4 no-underline  ">
        <h3>{content}</h3>
        <p className=''>{preview}</p>
        {/* <div className="flex justify-between items-center">
            <div className="flex flex-col">
                <small className='font-bold'>{blogger}</small>
                <small className=''>{bio} <small className='text-red-900/50 '>{new Date().getTime()}</small> </small>
                
            </div>
            <img src={image} className='w-16 h-16  aspect-square rounded-3xl m-0' alt="" />
        </div> */}
    </Link>
  )
}
