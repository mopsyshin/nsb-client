import { TCategory, TPost } from '@/types'
import config from '@/config/config'
import { fetcher } from '@/utils'
import Layout from '@/layout/default'
import { GetServerSideProps } from 'next'
import service from '@/service'
import qs from 'qs'
import CategoryPane from '@/components/pane/category-pane/CategoryPane'

const Category: React.FC<{data?: Array<TPost>, id: string, params: string}> = ({params, id, data}) => {
  const { posts } = service.post.usePosts(`?${params}`)
  const { category } = service.category.useCategory(id)
  const initialData: Array<TPost> = posts ? posts : data

  return (
    <Layout>
      <CategoryPane posts={initialData} category_name={category && category.category_name}/>
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
