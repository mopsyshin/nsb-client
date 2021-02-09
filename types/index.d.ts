interface TPost {
  id: number;
  post_title: string;
  post_body: string;
  post_image: string;
  published_at: string;
  views?: number;
  type?: string;
}

interface TMenuItem {
  menu_name: string,
  focused: boolean,
}

export { TPost, TMenuItem }
