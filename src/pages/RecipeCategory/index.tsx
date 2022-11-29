import { useLoaderData } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { regenerateSlug } from '@/lib/utils'
import networkHandler from '@/lib/api/api.instance'
import endpoint from '@/lib/api/api.endpoints'

import {
  Card,
  Grid,
  Spinner,
} from '@/components'

export const RecipeCategoryLoader = async ({ params }: LoaderFunctionArgs) => {
  try {
    const result = await networkHandler.get(`${endpoint.recipesCategory}/${params.key}`)
    const response = await result.data

    return response
  } catch (error) {
    throw error
  }
}

const RecipeCategory = () => {
  const {results} = useLoaderData() as APIResponse<any>;
  const params = useParams()

  const renderContent = () => {
    return (
      <Grid>
        {results?.map((item) => (
            <Card {...{ ...item, recipeKey: item.key }} key={item.key} />
        ))}
      </Grid>
    )
  }

  return (
    <div className='max-w-sm py-8 mx-auto'>
      <p className='text-lg font-bold capitalize'>Kategori: {regenerateSlug(params.key as string)}</p>
      <div className='w-28 h-1  bg-yellow-400' />

      {renderContent()}
    </div>
  )
}

export default RecipeCategory
