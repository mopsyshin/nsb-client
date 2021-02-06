import React, { useMemo } from 'react'
import classnames from 'classnames/bind'
import styles from './style.module.scss'
import { TPost } from '@/types'
import removeMarkdown from 'remove-markdown'
import dayjs from 'dayjs'

const cx = classnames.bind(styles)

const PostItem: React.FC<TPost> = props => {
  const { post_title, post_body, post_image, published_at, type = 'normal' } = props

  const bodyString = useMemo(() => removeMarkdown(post_body), [])
  const maxString = useMemo(() => type === 'hero' ? 250 : 120, [])

  return (
    <div className={cx('post-item', type)}>
      <div className={cx('post-image')} style={{backgroundImage: `url(${post_image})`}}>
      </div>
      <div className={cx('post-info')}>
        <div className={cx('content')}>
          <div className={cx('post-title')}>
            {post_title}
          </div>
          <div className={cx('post-body')}>
            {bodyString.length < 100 ? bodyString : `${bodyString.slice(0, maxString)}...`}
          </div>
        </div>
        <div className={cx('date')}>{dayjs(published_at).format('YYYY-MM-DD HH:mm:ss')}</div>
      </div>
    </div>
  )
}

export default PostItem
