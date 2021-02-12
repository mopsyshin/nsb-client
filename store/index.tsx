import { atom } from 'recoil'

export const initState = atom({
  key: 'init',
  default: false,
})

export const loadingState = atom({
  key: 'isLoading',
  default: false,
})

export const currentTabState = atom({
  key: 'currentTab',
  default: 'Popular Posts',
})

export const postsState = atom({
  key: 'posts',
  default: undefined
})

export const menuItemsState = atom({
  key: 'menuItems',
  default: ['Popular Posts', 'Category', 'About']
})
