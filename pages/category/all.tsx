import { TPost, TPostsResponse } from '@/types'
import config from '@/config/config'
import CategoryPane from "@/components/pane/category-pane/CategoryPane"
import Layout from "@/layout/default"
import { fetcher } from '@/utils'
import service from '@/service'

const AllPost: React.FC<{data: Array<TPost>}> = props => {
  const { posts }: TPostsResponse = service.post.usePosts('?_sort=published_at:DESC')
  const data: Array<TPost> | undefined = props.data ? props.data : posts

  return (
    <Layout>
      <CategoryPane posts={data} category_name="전체"/>
    </Layout>
  )
}

export async function getServerSideProps() {
  const data = await fetcher(`${config.API_URL}/posts?_sort=published_at:DESC`, {})
  return {
    props: { data },
  }
}

export default AllPost