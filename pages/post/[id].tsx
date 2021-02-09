import { TPost } from '@/types'
import config from '@/config/config'
import { fetcher } from '@/utils'
import Layout from '@/layout'
import PostDetail from '@/components/post-detail'
import { GetServerSideProps } from 'next'
import service from '@/service'

const Post: React.FC<{data?: TPost, id: string}> = props => {
  const { post } = service.post.usePost(props.id)
  const initialData: TPost = post ? post : props.data

  return (
    <Layout>
      <PostDetail {...initialData}/>
    </Layout>
  )
}

export const  getServerSideProps: GetServerSideProps = async context => {
  const { id }: any = context.params
  const data: TPost = await fetcher(`${config.API_URL}/posts/${id}`, {})
    return {
      props: { data, id },
    }
}

export default Post
