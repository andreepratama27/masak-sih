import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import Root from './Root'
import Home, { HomeLoader } from './Home'
import RecipeDetail, { RecipeDetailLoader } from './RecipeDetail'
import Error from './Error'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />} path='/' errorElement={<Error />}>
      <Route element={<Home />} loader={HomeLoader} path='/' />
      <Route element={<RecipeDetail />} loader={RecipeDetailLoader} path='/recipe-detail/:key' />
    </Route>
  )
)

export default routes
