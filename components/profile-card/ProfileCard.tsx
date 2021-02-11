import classnames from 'classnames/bind'
import styles from './ProfileCard.module.scss'

const cx = classnames.bind(styles)

const ProfileCard: React.FC = () => {
  return (
    <div className={cx("profile-card")}>
      <div className={cx("profile-image")}>
        <img src="/assets/profile.jpg" alt="profile image"/>
      </div>
      <div className="div-w-24"></div>
      <div className={cx("info")}>
        <div className={cx("top")}>
          <div className={cx('user-name')}>
            Mopsyshin
          </div>
          <div className={cx('social')}>
            <div className={cx('social-item', 'fb')}></div>
            <div className={cx('social-item', 'insta')}></div>
            <div className={cx('social-item', 'github')}></div>
          </div>
        </div>
        <div className="div-h-16"></div>
        <div className={cx('description')}>
          서비스 만드는 걸 좋아합니다.
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
