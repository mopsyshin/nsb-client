import classNames from 'classnames/bind'
import styles from './PostPane.module.scss'
import { TPost } from '@/types'
import ReactMarkdown from 'react-markdown'
import dayjs from 'dayjs'

const cx = classNames.bind(styles)

const PostDetail: React.FC<TPost> = props => {
  const { post_title, post_body, post_image, published_at } = props
  return (
    <div className={cx('post-detail')}>
      
      <div className={cx('top')}>
        <div className={cx('post-image')} style={{backgroundImage : `url(${post_image})`}}></div>
        <div className="div-h-24"></div>
        <div className={cx('post-title')}>
          <h1>
            { post_title }
          </h1>
        </div>
      </div>

      <div className="div-h-32"></div>

      <div className={cx('post-body')}>
        <ReactMarkdown source={post_body}/>
      </div>

      <div className="date">
        { dayjs(published_at).format('YYYY-MM-DD HH:mm:ss') }
      </div>

    </div>
  )
}

export default PostDetail
