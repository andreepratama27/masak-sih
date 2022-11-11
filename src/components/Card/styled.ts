import { styled } from '@stitches/react'

const Card = styled('div', {
  width: '100%',
  height: '24rem',
  position: 'relative',
  borderRadius: '0.25rem',
});

const CardImage = styled('img', {
  width: '100%',
  height: '100%',
  borderRadius: '0.25rem',
  objectFit: 'cover',
})

const CardText = styled('div', {
  position: 'absolute',
  bottom: '1rem',
  left: '1rem',
  padding: '0.5rem'
})

const CardOverlay = styled('div', {
  width: '100%',
  height: '100%',
  backgroundColor: '#000',
  position: 'absolute',
  top: 0,
  left: 0,
  borderRadius: '0.25rem',
  opacity: 0.7
})

export {
  Card,
  CardText,
  CardImage,
  CardOverlay,
}
