import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { regenerateSlug } from '@/lib/utils'

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { key: keyParams } = useParams()
  const isRoot = location.pathname === '/'

  const navigateBack = () => {
    navigate('/')
  }

  const renderRoot = () => {
    return (
      <div className='w-full flex justify-center'>
        <p className='text-lg font-bold text-white text-white'>Masak Sih?</p>
        {/* <input className='w-full rounded p-2 px-4' placeholder="Cari Menu" /> */}
      </div>
    )
  }

  return (
    <nav className='sticky top-0 z-20 w-full p-4 bg-blue-500 shadow border-0'>
      <div className='relative w-full flex items-center justify-center max-w-sm mx-auto navbar-container'>
        {isRoot ? renderRoot() : (
          <>
            <div className="absolute left-0 back-button" role="button" onClick={navigateBack}>
              <ArrowLeftIcon className='w-4 h-4 text-white' />
            </div>
            <p className='text-lg font-bold text-white capitalize'>{regenerateSlug(keyParams)}</p>
          </>
        )}

      </div>
    </nav>
  )
}

export default Navbar
