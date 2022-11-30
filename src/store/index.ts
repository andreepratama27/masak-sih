import { atom } from 'jotai'

const CategoryAtom = atom('All')
const SearchAtom = atom<string>('')

export {
  CategoryAtom,
  SearchAtom,
}
