import { currentTabState } from '@/store'
import classNames from 'classnames/bind'
import styles from '../Pane.module.scss'
import PostList from '@/components/post-list/PostList'
import { TCategoriesResponse, TPostsResponse } from '@/types'
import service from '@/service'
import TabMenu from './tab-menu/TabMenu'
import CategoryList from '@/components/category-list/CategoryList'
import { useRecoilValue } from 'recoil'

const cx = classNames.bind(styles)

const SidePane:React.FC = () => {
  const currentTab = useRecoilValue(currentTabState)
  const { posts }: TPostsResponse = service.post.usePosts('?_sort=published_at:DESC')
  const { categories }: TCategoriesResponse = service.category.useCategories('?_sort=published_at:DESC')

  const SideContent: React.FC = () => {
    switch (currentTab) {
      case 'Popular Posts':
        return (
          <>
            <h2>Popular post</h2>
            <PostList posts={posts} type="small"/>
          </>
        )
      case 'Category':
        return (
          <>
            <h2>Category</h2>
            <CategoryList categories={categories}/>
          </>
        )
      case 'About':
        return (
          <>
            <h2>About</h2>
            <div className={cx('about')}>

            </div>
          </>
        )
      default:
        return <>default</>
    }
  }

  return (
    <div className={cx('side-pane')}>
      <TabMenu/>
      <div className={cx('side-content')}>
        <SideContent/>
      </div>
    </div>
  )
}

export default SidePane
