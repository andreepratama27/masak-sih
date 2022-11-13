import { useQuery, UseQueryResult } from '@tanstack/react-query'
import endpoint from '@/lib/api/api.endpoints'
import networkHandler from '@/lib/api/api.instance'

const getRecipes = () => {
  const fetcher = useQuery({
    networkMode: 'offlineFirst',
    refetchOnWindowFocus: false,
    queryKey: ["recipes"],
    queryFn: () => networkHandler
      .get(endpoint.recipes)
      .then(res => res.data)
  })

  return fetcher
};

const getRecipeDetail = (key: string) => {
  const fetcher = useQuery({
    refetchOnWindowFocus: false,
    queryKey: ["recipes"],
    queryFn: () => networkHandler
      .get(`${endpoint.recipeDetail}/${key}`)
      .then(res => res.data)
  })

  return fetcher
}

const getRecipesCategory = () => {
  const fetcher = useQuery({
    refetchOnWindowFocus: false,
    queryKey: ["categories"],
    queryFn: () => networkHandler
      .get(endpoint.recipesCategory)
      .then(res => res.data)
  })

  return fetcher
}

export {
  getRecipes,
  getRecipeDetail,
  getRecipesCategory,
}
