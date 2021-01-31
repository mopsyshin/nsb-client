import classNames from 'classnames/bind'
import styles from '@/styles/Page.module.scss'
import PostItem from '@/components/post-item'
import { TPost } from '@/types'

const cx = classNames.bind(styles)

const Home = () => {

  const dummyPost: TPost = {
    title: 'test-title',
    body: 'test-body',
    tags: [],
    published_date: 'test-date'
  }

  return (
    <div className={cx('container')}>
      <div className={cx('content-pane')}>
        <PostItem {...dummyPost}/>
      </div>
      <div className={cx('side-pane')}>
        
      </div>
    </div>
  )
}

export default Home
