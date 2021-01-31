import React from 'react'
import classnames from 'classnames/bind'
import styles from './PostItem.module.scss'
import { TPost } from '@/types'

const cx = classnames.bind(styles)

const PostItem: React.FC<TPost> = props => {
  const { title, body, published_date } = props
  return (
    <div className={cx("post-item")}>
      <div>{title}</div>
      <div>{body}</div>
      <div>{published_date}</div>
    </div>
  )
}

export default PostItem
