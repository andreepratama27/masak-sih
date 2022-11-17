import { styled } from '@stitches/react'

const Grid = styled('div', {
  marginTop: 40,
  display: 'grid',
  gap: 20,
  //gridTemplateColumns: 'repeat(auto-fill, minmax(125px, 1fr))',
  gridTemplateColumns: '1fr',
})

export {
  Grid
}
