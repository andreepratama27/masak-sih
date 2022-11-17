import React from 'react'

interface TagProps {
  text: string;
}

const Tag: React.FC<TagProps> = ({ text }) => {
  return (
    <div className='p-1 px-2 text-center bg-green-500 rounded whitespace-nowrap'>
      <p className='text-sm text-white'>{text}</p>
    </div>
  )
}

export default Tag
