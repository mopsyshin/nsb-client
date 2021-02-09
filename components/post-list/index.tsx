import PostItemPlaceholder from '@/components/post-item/PostItemPlaceholder'
import { TPost } from '@/types'
import PostItem from '@/components/post-item'

const PostList: React.FC<{ posts?: Array<TPost>, type: string }> = ({ posts, type = "normal"}) => {
  return (
    <>
      {posts ? posts?.map(post => <PostItem {...post} key={post.id} type={type}/>) : (
        <>
          <PostItemPlaceholder type={type}/>
          <PostItemPlaceholder type={type}/>
          <PostItemPlaceholder type={type}/>
        </>
      )}
    </>
  )
}

export default PostList
