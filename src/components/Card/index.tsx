import React from 'react'
import { Card as CardWrapper, CardImage, CardOverlay, CardText } from './styled'

const Card: React.FC<Recipe> = (props) => {
  return (
    <CardWrapper role="button">
      <CardImage src={props.thumb} alt={props.title} />
      <CardOverlay />

      <CardText key={props.recipeKey} to={`/recipe-detail/${props.recipeKey}`}>
        <p className='text-white text-lg font-semi'>{props.title}</p>
      </CardText>
    </CardWrapper>
  )
}

export default Card
