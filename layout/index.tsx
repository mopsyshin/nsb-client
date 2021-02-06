import classNames from 'classnames/bind'
import styles from '@/styles/Page.module.scss'

const cx = classNames.bind(styles)

const Layout: React.FC = ({ children }) => (
  <div className={cx('container')}>
    <div className={cx('content-pane')}>
      {children}
    </div>
    <div className={cx('side-pane')}>
      
    </div>
  </div>
)

export default Layout
