import React from 'react'
import Tag from '@/components/Tag'
import { Card as CardWrapper, CardImage, CardOverlay, CardText } from './styled'
import { BookmarkIcon, ClockIcon, CircleStackIcon } from '@heroicons/react/24/outline'

const Card: React.FC<Recipe> = (props) => {
  return (
    <CardWrapper role="button">
      <div className='absolute top-2 right-2 bg-black hover:bg-white p-2 hover:cursor-pointer rounded w-10 h-10 z-10'>
        <BookmarkIcon className='w-full h-full text-white hover:text-gray-800' />
      </div>

      <CardImage src={props.thumb} alt={props.title} />
      <CardOverlay />

      <CardText key={props.recipeKey} to={`/recipe-detail/${props.recipeKey}`}>
        <p className='text-white text-lg font-semi'>{props.title}</p>

        <div className="flex gap-2 pt-2">
          <Tag text={props.times} icon={<ClockIcon className='w-4 h-4 text-white' />} />
          <Tag text={props.serving} icon={<CircleStackIcon className='w-4 h-4 text-white' />} />
        </div>
      </CardText>

    </CardWrapper>
  )
}

export default Card
