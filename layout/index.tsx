import useStore from '@/store'
import classNames from 'classnames/bind'
import config from '@/config/config'
import useSWR from 'swr'
import { fetcher } from '@/utils'
import { useEffect } from 'react'
import styles from './Layout.module.scss'
import Router from 'next/router'
import PostList from '@/components/post-list'

const cx = classNames.bind(styles)

const Layout: React.FC = ({children}) => {
  const { init, setInit, menuItems, setPosts, setIsLoading, currentTab, setCurrentTab } = useStore()
  const { data } = useSWR(`${config.API_URL}/posts?_sort=published_at:DESC`, fetcher)

  useEffect(() => {
    setPosts(data)
  }, [data])

  useEffect(() => {
    if (!init) {
      Router.events.on('routeChangeStart', () => {
        setIsLoading(true)
      })

      Router.events.on('routeChangeComplete', () => {
        setIsLoading(false)
      })

      Router.events.on('routeChangeError', () => {
        setIsLoading(false)
      })
    }
    setInit(true)
  }, [])

  const SideContent: React.FC = () => {
    switch (currentTab) {
      case 'popularPosts':
        return (
          <>
            <h2>Popular post</h2>
            <PostList posts={data} type="small"/>
          </>
        )
      case 'category':
        return (
          <>category</>
        )
      case 'about':
        return (
          <>about</>
        )
      default:
        return <>default</>
    }
  }

  

  return (
    <div className={cx('container')}>
      <div className={cx('content-pane')}>
        {children}
      </div>
      <div className={cx('side-pane')}>
        <div className={cx('tab-menu')}>
          {menuItems.map((item: string) => (
            <div className={cx('menu-item', item === currentTab ? 'focused' : '')} onClick={() => {setCurrentTab(item)}} key={item}>
              {item}
            </div>
          )
        )}
        </div>
        <div className={cx('side-content')}>
          <SideContent/>
        </div>
      </div>
    </div>
  )
}

export default Layout
