import React, { useMemo } from 'react'
import classnames from 'classnames/bind'
import styles from './PostItem.module.scss'
import { TPost } from '@/types'
import removeMarkdown from 'remove-markdown'
import dayjs from 'dayjs'
import { LinkWrapper } from '@/components'

const cx = classnames.bind(styles)

const PostItem: React.FC<TPost> = props => {
  const { id, post_title, post_body, post_image, published_at, type = 'normal' } = props

  const bodyString = useMemo(() => removeMarkdown(post_body), [])
  const maxString = useMemo(() => {
    switch (type) {
      case 'hero':
        return 250
      case 'small':
        return 50
      default: 
        return 120
    }
  }, [])

  return (
    <LinkWrapper href="/post/[id]" as={`/post/${id}`}>
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
    </LinkWrapper>
  )
}

export default PostItem
