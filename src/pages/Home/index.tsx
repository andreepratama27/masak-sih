import React, { useState, useEffect } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'

import {
  Card,
  Spinner,
  SearchWidget,
  CategoryList
} from '@/components'
import { Grid } from './styled'

import networkHandler from '@/lib/api/api.instance'
import endpoint from '@/lib/api/api.endpoints'

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
    if (isLoading) return <Spinner ref={ref} />

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

        <SearchWidget />
        
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
