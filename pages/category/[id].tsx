import { TPost } from '@/types'
import config from '@/config/config'
import { fetcher } from '@/utils'
import Layout from '@/layout/default'
import { GetServerSideProps } from 'next'
import service from '@/service'
import qs from 'qs'
import CategoryPane from '@/components/pane/category-pane/CategoryPane'

const Category: React.FC<{data?: Array<TPost>, id: string, params: string}> = props => {
  const { posts } = service.post.usePosts(`?${props.params}`)
  const initialData: Array<TPost> = posts ? posts : props.data

  return (
    <Layout>
      <CategoryPane posts={initialData}/>
    </Layout>
  )
}

export const  getServerSideProps: GetServerSideProps = async context => {
  const { id }: any = context.params
  const params: string = qs.stringify({
    _where: [{ categories: id }]
  })
  const data: TPost = await fetcher(`${config.API_URL}/posts?${params}`, {})
    return {
      props: { data, id, params }
    }
}

export default Category
