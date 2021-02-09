import { TPost } from '@/types'
import config from '@/config/config'
import { fetcher } from '@/utils'
import Layout from '@/layout'
import MainPane from '@/components/main-pane'
import useStore from '@/store'

const Home: React.FC<{data: Array<TPost>}> = props => {
  const { posts } = useStore()
  const initialData: Array<TPost> | undefined = posts ? posts : props.data

  return (
    <Layout>
      <MainPane posts={initialData}/>
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
