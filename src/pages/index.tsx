import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import Root from './Root'
import Home from './Home'
import RecipeDetail from './RecipeDetail'
import Error from './Error'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />} path='/' errorElement={<Error />}>
      <Route element={<Home />} path='/' />
      <Route element={<RecipeDetail />} path='/recipe-detail/:key' />
    </Route>
  )
)

export default routes
