import React, { useState } from 'react'
import classNames from 'classnames'
import { getRecipesCategory } from '@/services/recipes'

interface CategoryListProps { }

const CategoryList: React.FC<CategoryListProps> = (props) => {
  const [category, setCategory] = useState('Dessert')
  const { data, isLoading } = getRecipesCategory();

  if (isLoading) {
    return (
      <div className='mt-4 flex gap-4'>
        {
          Array(3).fill('')
            .map(() => (
              <div className='w-full p-4 rounded bg-gray-200 animate-pulse' />
            ))
        }
      </div>
    )
  }

  return (
    <div className='mt-4 overflow-y-auto categories-container'>
      <ul className='flex gap-4'>
        {
          data?.results?.map((item: Category, key: string) => (
            <li className='whitespace-nowrap' key={key}>
              <div className={classNames('p-2 rounded hover:cursor-pointer', { 'bg-blue-500': item.category === category, 'bg-gray-200': item.category !== category })} role="button" onClick={() => setCategory(item.category)}>
                <p className={classNames({ 'text-white': item.category === category, 'text-gray-800': item.category !== category })}>{item.category}</p>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CategoryList;
