import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import Root from './Root'
import Home from './Home'
import RecipeCategory, { RecipeCategoryLoader } from './RecipeCategory'
import RecipeDetail, { RecipeDetailLoader } from './RecipeDetail'
import Error from './Error'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />} path='/' errorElement={<Error />}>
      <Route element={<Home />} path='/' />
      <Route element={<RecipeDetail />} loader={RecipeDetailLoader} path='/recipe-detail/:key' />
      <Route element={<RecipeCategory />} loader={RecipeCategoryLoader} path='/recipe-category/:key' />
    </Route>
  )
)

export default routes
