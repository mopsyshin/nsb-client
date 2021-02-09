import classnames from 'classnames/bind'
import styles from './PostItem.module.scss'

const cx = classnames.bind(styles)

const PostPlaceholder: React.FC<{type: string}> = ({type = "normal"}) => {
  return (
    <div className={cx('post-item', 'placeholder', type)}>
      <div className={cx('post-image')}></div>
      <div className={cx('post-info')}>
        <div className={cx('content')}>
          <div className={cx('post-title')}>

          </div>
          <div className={cx('post-body')}>
            <div className={cx('body-line')}></div>
            <div className={cx('body-line')}></div>
            <div className={cx('body-line')}></div>
          </div>
        </div>
        <div className={cx('date')}></div>
      </div>
    </div>
  )
}

export default PostPlaceholder
