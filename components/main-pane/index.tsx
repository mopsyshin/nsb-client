import classNames from 'classnames/bind'
import styles from './Main.module.scss'
import PostItem from '@/components/post-item'
import ProfileCard from '@/components/profile-card'
import { TPost } from '@/types'
import Post from '@/pages/post/[id]'
import PostList from '../post-list'

const cx = classNames.bind(styles)

const MainPane: React.FC<{posts?: Array<TPost>}> = props => {
  const { posts } = props;
  return (
    <>
      <section className={cx('highlight-post', 'section')}>
        <PostList posts={posts?.slice(0, 1)} type="hero"/>
      </section>
      <div className="div-h-16"></div>
      <section className={cx('section')}>
        <ProfileCard/>
      </section>
      <div className="div-h-16"></div>
      <section className={cx('recent-post', 'section')}>
        <div className={cx('section-title')}>
          Recent Posts
        </div>
        <PostList posts={posts?.slice(1)} type="normal"/>
      </section>
    </>
  )
}

export default MainPane
