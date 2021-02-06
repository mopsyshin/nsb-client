import classNames from 'classnames/bind'
import styles from '@/styles/Page.module.scss'
import PostItem from '@/components/post-item'
import ProfileCard from '@/components/profile-card'
import { TPost } from '@/types'
import config from '@/config/config'
import useSWR from 'swr'
import { fetcher } from '@/utils'
import Layout from '@/layout'


const cx = classNames.bind(styles)

const Home: React.FC<{data: Array<TPost>}> = props => {
  const initialData = props.data
  const { data } = useSWR(`${config.API_URL}/posts?_sort=published_at:DESC`, fetcher, { initialData })

  return (
    <Layout>
      <div className={cx('highlight-post')}>
        { data.slice(0, 1).map((post: TPost) => <PostItem {...post} key={post.id} type="hero"/>) }
      </div>
      <div className="div-h-16"></div>
      <ProfileCard/>
      <div className="div-h-16"></div>
      <div className={cx('recent-post')}>
        <div className={cx('section-title')}>
          Recent Posts
        </div>
        { data.slice(1).map((post: TPost) => <PostItem {...post} key={post.id}/>) }
      </div>
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
