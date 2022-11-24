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

  return (
    <nav className='sticky top-0 z-20 w-full p-4 bg-blue-500 border-0'>
      <div className='relative flex items-center justify-center max-w-sm mx-auto navbar-container'>
        {isRoot ? (
          <p className='text-lg font-bold text-white'>Masak Sih?</p>
        ) : (
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
