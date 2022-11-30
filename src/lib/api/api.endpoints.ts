import handler from '@/lib/api/api.instance'

const endpoints = {
  recipes: '/api/recipes',
  recipeDetail: '/api/recipe',
  recipesCategory: '/api/category/recipes',
};

export const getRecipes = ({ pageParam }: { pageParam: number }) =>
  handler.get(endpoints.recipes + `/${pageParam}`)

export const getRecipeCategories = () =>
  handler.get(endpoints.recipesCategory)

export const getRecipeDetail = (key: string) =>
  handler.get(endpoints.recipeDetail + `/${key}`)

export default endpoints
