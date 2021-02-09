import { TPost, TPostsResponse } from '@/types'
import config from '@/config/config'
import { fetcher } from '@/utils'
import Layout from '@/layout'
import MainPane from '@/components/main-pane'
import service from '@/service'

const Home: React.FC<{data: Array<TPost>}> = props => {
  const { posts, isLoading, isError }: TPostsResponse = service.post.usePosts('?_sort=published_at:DESC')
  const data: Array<TPost> | undefined = props.data ? props.data : posts

  return (
    <Layout>
      <MainPane posts={data}/>
    </Layout>
  )
}

export async function getServerSideProps() {
  const data = await fetcher(`${config.API_URL}/posts?_sort=published_at:DESC`, {})
  return {
    props: { data },
  }
}

export default Home
