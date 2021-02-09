import useStore from '@/store'
import classNames from 'classnames/bind'
import styles from './TabMenu.module.scss'

const cx = classNames.bind(styles)

const TabMenu: React.FC = () => {
  const { menuItems, currentTab, setCurrentTab } = useStore()
  return (
    <div className={cx('tab-menu')}>
      {menuItems.map((item: string) => (
        <div className={cx('menu-item', item === currentTab ? 'focused' : '')} onClick={() => {setCurrentTab(item)}} key={item}>
          {item}
        </div>
      )
    )}
    </div>
  )
}

export default TabMenu
