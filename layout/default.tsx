import { initState, loadingState } from '@/store'
import classNames from 'classnames/bind'
import { useEffect } from 'react'
import styles from './Layout.module.scss'
import Router from 'next/router'
import { LinkWrapper } from '@/components'
import SidePane from '@/components/pane/side-pane/SidePane'
import { useRecoilState, useSetRecoilState } from 'recoil'

const cx = classNames.bind(styles)

const Layout: React.FC = ({children}) => {
  const [ init, setInit ] = useRecoilState(initState)
  const setIsLoading = useSetRecoilState(loadingState)

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
      <SidePane/>
    </div>
  )
}

export default Layout
