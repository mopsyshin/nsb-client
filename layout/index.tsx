import useStore from '@/store'
import classNames from 'classnames/bind'
import { useEffect } from 'react'
import styles from './Layout.module.scss'
import Router from 'next/router'
import PostList from '@/components/post-list'
import { TPostsResponse } from '@/types'
import service from '@/service'
import { LinkWrapper } from '@/components'
import TabMenu from '@/components/tab-menu/TabMenu'

const cx = classNames.bind(styles)

const Layout: React.FC = ({children}) => {
  const { init, setInit, menuItems, setIsLoading, currentTab, setCurrentTab } = useStore()
  const { posts }: TPostsResponse = service.post.usePosts('?_sort=published_at:DESC')

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
      case 'Popular Posts':
        return (
          <>
            <h2>Popular post</h2>
            <PostList posts={posts} type="small"/>
          </>
        )
      case 'Category':
        return (
          <>category</>
        )
      case 'About':
        return (
          <>about</>
        )
      default:
        return <>default</>
    }
  }

  

  return (
    <div className={cx('container')}>
      <div className={cx('logo')}>
        <LinkWrapper href="/">
          <img src="/assets/ic_home.svg"/>
        </LinkWrapper>
      </div>
      <div className={cx('content-pane')}>
        {children}
      </div>
      <div className={cx('side-pane')}>
        <TabMenu/>
        <div className={cx('side-content')}>
          <SideContent/>
        </div>
      </div>
    </div>
  )
}

export default Layout
