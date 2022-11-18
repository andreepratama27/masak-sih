type Recipe = {
  key: string;
  recipeKey: string;
  title: string;
  difficulty: string;
  serving: string;
  thumb: string;
  times: string;
}

type Category = {
  category: string;
  key: string;
  url: string;
}

type AuthorProps = {
  user: string;
  datePublished: string;
}

type NeedItemProps = {
  item_name: string;
  thumb_item: string;
}

interface RecipeDetails {
  author: AuthorProps;
  desc: string;
  difficulty: string;
  ingredient: string[];
  needItem: NeedItemProps[];
  servings: string;
  step: string[];
  thumb: string;
  times: string;
  title: string;
}

interface APIResponse<T> {
  method: string;
  status: boolean;
  results: T;
}