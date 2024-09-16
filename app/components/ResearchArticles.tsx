import React from 'react'
import Image from 'next/image'

interface ResearchArticlePropTypes{
    imgSrc: string,
    title: string,
    description: string
}
const ResearchArticles:React.FC<ResearchArticlePropTypes> = ({imgSrc, title, description}) => {
  return (
    <div className='flex flex-col justify-center items-start gap-3 font-DM w-[28rem] rounded-xl border border-primary p-10'>
      <Image src={imgSrc} width={200} height={200} alt='' className='w-full h-full object-cover rounded-xl'/>
      <h3 className='text-black text-3xl  font-medium'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  )
}

export default ResearchArticles
