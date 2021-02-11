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

interface TMenuItem {
  menu_name: string,
  focused: boolean,
}

interface TCategory {
  id: number;
  category_name: string,
}

interface TCategoriesResponse {
  categories: Array<TCategory>
  isLoading: boolean;
  isError: boolean;
}

interface TConfig {
  API_URL: string;
}

export { 
  TPost, 
  TPostResponse, 
  TPostsResponse, 
  TCategory,
  TCategoriesResponse,
  TMenuItem, 
  TConfig,
}
