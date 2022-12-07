import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import { SearchAtom } from '@/store'

import {
  Spinner,
  Grid,
  Card
} from '@/components'
import { searchRecipe } from '@/lib/api/api.endpoints'

const Search = () => {
  const [search] = useAtom(SearchAtom)
  const { data, isLoading, isFetching } = useQuery<any>(
    ['search', search],
    async () => {
      const result = await searchRecipe({ item: search })
      const response = await result.data

      return response
    },
    {
      enabled: !!search
    }
  )

  const renderContent = () => {
    if (!data) {
      return (
        <p>Resep akan muncul disini..</p>
      )
    } 
    
    return (
      <>
        <p className='font-semi italic'>Menemukan <strong>{data?.results?.length}</strong> resep dengan kata kunci <strong className='text-yellow-500'>`{search}`</strong></p>
        <Grid>
          {data?.results?.map((item: Recipe) => (
            <Card {...{ ...item, recipeKey: item.key }} key={item.key} />
          ))}
        </Grid>
      </>
    )
  }

  if (isLoading && isFetching) {
    return <Spinner />
  }

  return (
    <div className='container max-w-sm py-6 mx-auto'>
      {renderContent()}
    </div>
  )
}

export default Search
