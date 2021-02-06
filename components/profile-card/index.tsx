import React from 'react'
import classnames from 'classnames/bind'
import styles from './style.module.scss'

const cx = classnames.bind(styles)

const ProfileCard: React.FC = () => {
  return (
    <div className={cx("profile-card")}>
      <div className={cx("profile-image")}>
        
      </div>
      <div className="div-w-16"></div>
      <div className={cx("info")}>
        <div className={cx("top")}>
          <div>
            Mopsyshin
          </div>
        </div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin odio mauris, sagittis eu vulputate a, accumsan ac erat. Aliquam nec mi tristique, convallis </div>
      </div>
    </div>
  )
}

export default ProfileCard
