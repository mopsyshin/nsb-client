import { TPost } from '@/types'
import config from '@/config/config'
import useSWR from 'swr'
import { fetcher } from '@/utils'
import Layout from '@/layout'
import PostDetail from '@/components/post-detail'
import { GetServerSideProps } from 'next'

const Post: React.FC<{data: TPost}> = props => {
  const initialData: TPost = props.data
  const { data } = useSWR(`${config.API_URL}/posts/${initialData.id}`, fetcher, { initialData })

  return (
    <Layout>
      <PostDetail {...data}/>
    </Layout>
  )
}

export const  getServerSideProps: GetServerSideProps = async context => {
  const { id }: any = context.params
  const data: TPost = await fetcher(`${config.API_URL}/posts/${id}`, {})
  return {
    props: { data },
  }
}

export default Post
