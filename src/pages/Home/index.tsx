import CategoryList from '@/components/CategoryList'
import Card from '@/components/Card/'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

import { Grid } from './styled'
import { Await, defer, useLoaderData } from 'react-router-dom'

import networkHandler from '@/lib/api/api.instance'
import endpoint from '@/lib/api/api.endpoints'
import { Suspense } from 'react'

export const HomeLoader = async () => {
  const result = await networkHandler.get(endpoint.recipes)
  const response = await result.data;

  return {
    ...response
  }
}

function Home() {
  const { results } = useLoaderData() as APIResponse<Recipe[]>;

  const renderContent = () => {
    return (
      <Grid>
        {
          results?.map((item: Recipe) => (
            <Card {...{ ...item, recipeKey: item.key }} key={item.key} />
          ))
        }
      </Grid>
    )
  }

  return (
    <div className="App">
      <section className="container max-w-sm py-8 mx-auto">
        <div className='w-1/2 title-container'>
          <p className='text-2xl font-bold'>Temukan Resep Terbaik untuk Hari Ini</p>
        </div>

        <div className="flex gap-8 py-4 search-container">
          <input placeholder="Cari Resep" className="w-full p-4 bg-gray-200 rounded" />
          <div className="flex items-center p-4 bg-gray-800 rounded toggle" role="button">
            <AdjustmentsHorizontalIcon className='w-4 h-4 text-white' />
          </div>
        </div>

        <CategoryList />

        {renderContent()}
      </section>
    </div>
  )
}

export default Home