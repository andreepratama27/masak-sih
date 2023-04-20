import React from 'react'

interface TagProps {
  text: string;
  icon?: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ text, icon: Icon }) => {
  const renderIcon = () => {
    if (!Icon) return;

    return Icon;
  }

  return (
    <div className='p-1 px-2 flex items-center gap-2 text-center border border-black bg-green-500 whitespace-nowrap'>
      {renderIcon()}
      <p className='text-sm text-white'>{text}</p>
    </div>
  )
}

export default Tag
