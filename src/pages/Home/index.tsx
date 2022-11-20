import React, { useState, useEffect } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

import CategoryList from '@/components/CategoryList'
import Card from '@/components/Card/'
import { Grid } from './styled'

import networkHandler from '@/lib/api/api.instance'
import endpoint from '@/lib/api/api.endpoints'

export const HomeLoader = async (page?: number = 0) => {
  try {
    const result = await networkHandler.get(`${endpoint.recipes}/${page}`)
    const response = await result.data.results;

    return response
  } catch (err) {
    console.error(err)
  }
}

function Home() {
  const [pageParam, setPageParam] = useState(1)
  const { ref, inView } = useInView()

  const { data, error, isLoading, fetchNextPage } = useInfiniteQuery(
    ['recipes'],
    async () => {
      const result = await networkHandler.get(`${endpoint.recipes}/${pageParam}`)
      const response = await result.data

      return { ...response, page: pageParam }
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      getPreviousPageParam: (firstPage) => firstPage.previousId ?? undefined,
      getNextPageParam: (lastPage) => {
        return lastPage.page
      },
    }
  )

  const renderContent = () => {
    return (
      <Grid>
        {data?.pages?.map((page, key) => (
          <React.Fragment key={key}>
            {page?.results?.map((item: Recipe) => (
              <Card {...{ ...item, recipeKey: item.key }} key={item.key} />
            ))}
          </React.Fragment>
        ))}
      </Grid>
    )
  }


  useEffect(() => {
    if (inView) {
      setPageParam(pageParam + 1)
      fetchNextPage()
    }
  }, [inView])

  if (error) return null;

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

        {!isLoading && <button ref={ref}>Load More</button>}
      </section>
    </div>
  )
}

export default Home
