import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import classNames from "classnames";
import { getRecipesCategory } from "@/services/recipes";
import { generateSlug } from "@/lib/utils";

import { CategoryAtom } from "@/store";
import { getRecipeCategories } from "@/lib/api/api.endpoints";

interface CategoryListProps {}

const CategoryList: React.FC<CategoryListProps> = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useAtom(CategoryAtom);

  const { data, isLoading } = useQuery(["categories"], async () => {
    const result = await getRecipeCategories();
    const response = await result.data;

    return response;
  });

  const onCategoryClick = (item: string) => {
    navigate(`/recipe-category/${generateSlug(item)}`);
  };

  if (isLoading) {
    return (
      <div className="mt-4 flex gap-4">
        {Array(3)
          .fill("")
          .map((_, key: number) => (
            <div
              className="w-full p-4 rounded bg-gray-200 animate-pulse"
              key={key}
            />
          ))}
      </div>
    );
  }

  return (
    <div className="mt-4 overflow-y-auto categories-container">
      <ul className="flex gap-4">
        {/* <li className='whitespace-nowrap'> */}
        {/*   <div className={classNames('p-2 px-4 rounded hover:cursor-pointer', { 'bg-blue-500': category === 'All', 'bg-gray-200': category !== 'All' })} role="button" onClick={() => setCategory('All')}> */}
        {/*     <p className={classNames({ 'text-white': category === 'All', 'text-gray-800': category !== 'All' })}>Semua Kategori</p> */}
        {/*   </div> */}
        {/* </li> */}

        {data?.results?.map((item: Category, key: string) => (
          <li
            className="whitespace-nowrap"
            key={key}
            role="button"
            onClick={() => onCategoryClick(item.category)}
          >
            <div className="border border-black hover:shadow-[3px_3px_rgba(0,0,0,1)] p-2 px-4 bg-white">
              <p>{item.category}</p>
            </div>
            {/* <div className={classNames('p-2 px-4 rounded hover:cursor-pointer', { 'bg-blue-500': item.category === category, 'bg-gray-200': item.category !== category })} role="button" onClick={() => setCategory(item.category)}> */}
            {/*   <p className={classNames({ 'text-white': item.category === category, 'text-gray-800': item.category !== category })}>{item.category}</p> */}
            {/* </div> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
