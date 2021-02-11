import classNames from 'classnames/bind'
import styles from './CategoryPane.module.scss'
import PostList from '@/components/post-list/PostList'
import { TPost } from '@/types'

const cx = classNames.bind(styles)

const CategoryPane: React.FC<{posts: Array<TPost>}> = ({ posts }) => {
  return (
    <section className={cx('section')}>
      <PostList posts={posts} type="normal"/>
    </section>
  )
}

export default CategoryPane