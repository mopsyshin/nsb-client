import classNames from 'classnames/bind'
import styles from '../Pane.module.scss'
import PostList from '@/components/post-list/PostList'
import { TPost } from '@/types'

const cx = classNames.bind(styles)

const CategoryPane: React.FC<{posts: Array<TPost>, category_name: string}> = ({ posts, category_name = "" }) => {
  return (
    <section className={cx('section')}>
      <h3 className={cx('section-title')}>{category_name} 카테고리</h3>
      <PostList posts={posts} type="normal"/>
    </section>
  )
}

export default CategoryPane
