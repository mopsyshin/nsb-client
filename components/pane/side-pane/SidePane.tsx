import useStore from '@/store'
import classNames from 'classnames/bind'
import styles from './SidePane.module.scss'
import PostList from '@/components/post-list/PostList'
import { TCategoriesResponse, TPostsResponse } from '@/types'
import service from '@/service'
import TabMenu from './tab-menu/TabMenu'
import CategoryList from '@/components/category-list/CategoryList'

const cx = classNames.bind(styles)

const SidePane:React.FC = () => {
  const { currentTab } = useStore()
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
          <>about</>
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
