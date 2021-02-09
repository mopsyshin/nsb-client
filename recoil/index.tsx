import config from '@/config/config'
import { TPost, TPostsResponse } from '@/types'
import { fetcher } from '@/utils'
import {
  atom,
  useRecoilState,
} from 'recoil'
import useSWR from 'swr'

const initState = atom({
  key: 'init',
  default: false,
})

const loadingState = atom({
  key: 'isLoading',
  default: false,
})

const currentTabState = atom({
  key: 'currentTab',
  default: 'Popular Posts',
})

const postsState = atom({
  key: 'posts',
  default: undefined
})

const menuItemsState = atom({
  key: 'menuItems',
  default: ['Popular Posts', 'Category', 'About']
})

const useStore = () => {
  const [ init, setInit ] = useRecoilState(initState)
  const [ isLoading, setIsLoading ] = useRecoilState(loadingState)
  const [ posts, setPosts ] = useRecoilState(postsState)
  const [ currentTab, setCurrentTab ] = useRecoilState(currentTabState)
  const [ menuItems, setMenuItems ] = useRecoilState(menuItemsState)

  return {
    init, setInit,
    isLoading, setIsLoading,
    posts, setPosts,
    currentTab, setCurrentTab,
    menuItems, setMenuItems
  }
}

export default useStore
