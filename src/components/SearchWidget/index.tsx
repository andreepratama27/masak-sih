import { useAtom } from 'jotai'
import { SearchAtom } from '@/store'

import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const SearchWidget = () => {
  const [, setSearch] = useAtom(SearchAtom)

  const onSearch = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      setSearch(evt.currentTarget.value)
    }
  }

  return (
    <div className="relative flex items-center gap-8 py-4 search-container">
      <input placeholder="Cari Resep" className="w-full p-4 bg-gray-200 rounded" onKeyDown={onSearch} />
      <MagnifyingGlassIcon className='absolute w-5 h-5 right-4 text-gray-500' />

      {/* <div className="flex items-center p-4 bg-gray-800 rounded toggle" role="button"> */}
      {/*   <AdjustmentsHorizontalIcon className='w-4 h-4 text-white' /> */}
      {/* </div> */}
    </div>
  )
}

export default SearchWidget
