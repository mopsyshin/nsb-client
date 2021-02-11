import classNames from 'classnames/bind'
import styles from './Main.module.scss'
import ProfileCard from '@/components/profile-card/ProfileCard'
import { TPost } from '@/types'
import PostList from '@/components/post-list/PostList'

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
