interface TPost {
  id: number;
  post_title: string;
  post_body: string;
  post_image: string;
  published_at: string;
  views?: number;
  type?: string;
}

interface TPostResponse {
  post: TPost,
  isLoading: boolean,
  isError: boolean
}

interface TPostsResponse {
  posts: Array<TPost>,
  isLoading: boolean,
  isError: boolean
}

interface TCategory {
  id: number;
  category_name: string,
}

interface TCategoryResponse {
  category: TCategory
  isLoading: boolean;
  isError: boolean;
}

interface TCategoriesResponse {
  categories: Array<TCategory>
  isLoading: boolean;
  isError: boolean;
}

interface TConfig {
  API_URL: string;
}

interface TMenuItem {
  menu_name: string,
  focused: boolean,
}

export { 
  TPost, 
  TPostResponse, 
  TPostsResponse, 
  TCategory,
  TCategoryResponse,
  TCategoriesResponse,
  TMenuItem, 
  TConfig,
}
