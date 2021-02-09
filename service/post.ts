import config from "@/config/config"
import { fetcher } from "@/utils"
import useSWR from "swr"

const post = {
  usePosts: (params: string = "") => {
    const { data, error } = useSWR(`${config.API_URL}/posts${params}`, fetcher)
  
    return {
      posts: data,
      isLoading: !error && !data,
      isError: error
    }
  },
  usePost: (id: string) => {
    const { data, error } = useSWR(`${config.API_URL}/posts/${id}`, fetcher)
  
    return {
      post: data,
      isLoading: !error && !data,
      isError: error
    }
  },
}

export default post
