import React, { useState, useEffect } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'

import {
  Card,
  Spinner,
  CategoryList
} from '@/components'
import { Grid } from './styled'

import { getRecipes } from '@/lib/api/api.endpoints'

function Home() {
  const [pageParam, setPageParam] = useState(1)
  const { ref, inView } = useInView()

  const { data, error, isLoading, fetchNextPage } = useInfiniteQuery(
    ['recipes'],
    async () => {
      const result = await getRecipes({
        pageParam,
      })
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

  const onBookmarked = (item: Recipe) => {
    console.log('fff', item)
  }

  const renderContent = () => {
    if (isLoading) return <Spinner ref={ref} />

    return (
      <Grid>
        {data?.pages?.map((page, key) => (
          <React.Fragment key={key}>
            {page?.results?.map((item: Recipe) => (
              <Card {...{ ...item, recipeKey: item.key }} key={item.key} onBookmarked={onBookmarked} />
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
          <p className='text-2xl font-bold'>Temukan Resep Terbaik untuk Hari Ini.</p>
          <div className='w-24 h-2 bg-yellow-300' />
        </div>

        <CategoryList />
        {renderContent()}
        {
          !isLoading && (
            <Spinner ref={ref} />
          )
        }
      </section>
    </div>
  )
}

export default Home
