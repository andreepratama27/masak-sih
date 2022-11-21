import React from 'react'
import Lottie from 'lottie-react'
import FoodLoading from '../food-loading.json'

interface SpinnerProps {
  ref: React.RefObject<HTMLInputElement>
}

const Spinner = React.forwardRef<HTMLInputElement, SpinnerProps>((props, ref) => (
  <div ref={ref} className='w-full flex flex-col items-center justify-center'>
    <Lottie animationData={FoodLoading} style={{ height: 120, width: 120 }} loop />

    <p className='-mt-4'>Mengambil resep...</p>
  </div>
))

export default Spinner
