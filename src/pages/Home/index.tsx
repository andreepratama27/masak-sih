import { getRecipes } from '@/services/recipes'
import Navbar from '@/components/Navbar'
import CategoryList from '@/components/CategoryList'
import Card from '@/components/Card/'

import { Grid } from './styled'

function Home() {
  const { data, isLoading } = getRecipes();

  const renderContent = () => {
    if (isLoading) {
      return (
        <p>Mengambil Resep...</p>
      )
    }

    return (
      <Grid>
        {
          data?.results?.map((item: Recipe) => (
            <Card {...item} key={item.key} />
          ))
        }
      </Grid>
    )
  }

  return (
    <div className="App">
      <Navbar />

      <section className="container max-w-sm mx-auto py-8">
        <div className='title-container w-1/2'>
          <p className='text-2xl font-bold'>Temukan Resep Terbaik untuk Hari Ini</p>
        </div>

        <div className="search-container py-4 flex gap-8">
          <input placeholder="Cari Resep" className="w-full bg-gray-200 p-4 rounded" />
          <div className="toggle p-4 bg-gray-800 rounded">
            <i className='text-white'>Icon</i>
          </div>
        </div>

        <CategoryList />

        {renderContent()}
      </section>
    </div>
  )
}

export default Home
