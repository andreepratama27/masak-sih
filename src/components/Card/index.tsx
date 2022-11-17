import React from 'react'
import { Card as CardWrapper, CardImage, CardOverlay, CardText } from './styled'
import { BookmarkIcon } from '@heroicons/react/24/outline'

const Card: React.FC<Recipe> = (props) => {
  console.log(props)
  
  return (
    <CardWrapper role="button">
      <div className='absolute top-2 right-2 bg-black p-2 hover:cursor-pointer rounded w-10 h-10'>
        <BookmarkIcon className='w-full h-full text-white' />
      </div>
        
      <CardImage src={props.thumb} alt={props.title} />
      <CardOverlay />

      <CardText key={props.recipeKey} to={`/recipe-detail/${props.recipeKey}`}>
        <p className='text-white text-lg font-semi'>{props.title}</p>
      </CardText>
    </CardWrapper>
  )
}

export default Card
