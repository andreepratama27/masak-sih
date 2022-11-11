import React from 'react'
import { Card as CardWrapper, CardImage, CardOverlay, CardText } from './styled'

const Card: React.FC<Recipe> = (props) => {
  return (
    <CardWrapper>
      <CardImage src={props.thumb} alt={props.key} />
      <CardOverlay />

      <CardText>
        <p className='text-white text-lg font-semi'>{props.title}</p>
      </CardText>
    </CardWrapper>
  )
}

export default Card
