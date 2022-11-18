import Tag from '@/components/Tag'
import Expander from '@/components/Expander'
import Panel from '@/components/Panel'

import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { UserIcon, ClockIcon, CircleStackIcon } from '@heroicons/react/24/outline'

import networkHandler from '@/lib/api/api.instance'
import endpoint from '@/lib/api/api.endpoints'

export const RecipeDetailLoader = async ({ params }: LoaderFunctionArgs) => {
  try {
    const result = await networkHandler.get(`${endpoint.recipeDetail}/${params.key}`)
    const response = await result.data

    return response
  } catch (error) {
    throw error
  }
}


const RecipeDetail = () => {
  const { results } = useLoaderData() as APIResponse<RecipeDetails>;

  const renderDescription = (desc: string) => {
    return (
      <Expander content={desc} />
    )
  }

  return (
    <div className="max-w-sm py-8 mx-auto">
      <section className="content">
        <div className="content-header">
          <img src={results?.thumb} className='object-cover w-full rounded h-90' />

          <p className="mt-2 text-lg font-bold">{results?.title}</p>

          <div className="flex justify-between py-2 author">
            <div className='flex gap-2'>
              <UserIcon className='w-4 h-4' />
              <p className='text-sm'>{results?.author?.user}</p>
            </div>
            <p className="text-sm">{results?.author?.datePublished}</p>
          </div>

          <div className="flex gap-2 level">
            <Tag text={results.times} icon={<ClockIcon className='w-4 h-4 text-white' />} />
            <Tag text={results.servings} icon={<CircleStackIcon className='w-4 h-4 text-white' />} />
          </div>
        </div>
      </section>

      <section className="py-4 content-menu ">
        <div className="content-menu_desc">
          <p className="tracking-wider align-middle text-md">
            {renderDescription(results?.desc)}
          </p>
        </div>

        <Panel title="Bahan - Bahan">
          <ul className="mt-4">
            {
              results?.ingredient
                ?.map((item: string, key: number) => (
                  <li className='mb-2' key={key}>
                    <div className="w-full rounded">
                      - {item}
                    </div>
                  </li>
                ))
            }
          </ul>
        </Panel>

        <Panel title="Bahan Wajib">
          <>

            {
              results?.needItem?.map((item, key: number) => (
                <div className='flex items-center gap-4 mt-4' key={key}>
                  <div className="w-20 h-20 rounded">
                    <img src={item.thumb_item} alt={item.item_name} className="object-contain w-full h-full" />
                  </div>
                  <p>{item.item_name}</p>
                </div>
              ))
            }
          </>
        </Panel>

        <Panel title="Cara Penyajian">
          <ul className="mt-4">
            {
              results?.step
                ?.map((item, key) => (
                  <li className='mb-2' key={key}>
                    <div className="flex items-center w-full gap-6 p-2 bg-gray-200 rounded">
                      <div className="flex items-center justify-center w-6 h-6 px-2 bg-gray-500 rounded number">
                        <p className="text-sm font-bold text-white">{key + 1}</p>
                      </div>
                      {item}
                    </div>
                  </li>
                ))
            }
          </ul>
        </Panel>

      </section>
    </div>
  )
}

export default RecipeDetail;
