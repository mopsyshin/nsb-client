import config from "@/config/config"
import { TCategoriesResponse, TCategoryResponse } from "@/types"
import { fetcher } from "@/utils"
import useSWR from "swr"

const category = {
  useCategories: (params: string = ""): TCategoriesResponse => {
    const { data, error } = useSWR(`${config.API_URL}/categories${params}`, fetcher)
    return {
      categories: data,
      isLoading: !error && !data,
      isError: error
    }
  },
  useCategory: (id: string = ""): TCategoryResponse => {
    const { data, error } = useSWR(`${config.API_URL}/categories/${id}`, fetcher)
    return {
      category: data,
      isLoading: !error && !data,
      isError: error
    }
  }
}

export default category
