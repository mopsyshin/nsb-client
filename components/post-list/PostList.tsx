import classnames from 'classnames/bind'
import PostItemPlaceholder from '@/components/post-item/PostItemPlaceholder'
import { TPost } from '@/types'
import PostItem from '@/components/post-item/PostItem'
import styles from './PostList.module.scss'

const cx = classnames.bind(styles)

const PostList: React.FC<{ posts?: Array<TPost>, type: string }> = ({ posts, type = "normal"}) => {
  return (
    <div className={cx('post-list', type ? type : '')}>
      {posts ? posts?.map(post => <PostItem {...post} key={post.id} type={type}/>) : (
        <>
          <PostItemPlaceholder type={type}/>
          <PostItemPlaceholder type={type}/>
          <PostItemPlaceholder type={type}/>
        </>
      )}
    </div>
  )
}

export default PostList
