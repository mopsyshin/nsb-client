import styles from './LoadingBar.module.scss'
import classNames from 'classnames/bind'
import { useState, useEffect } from 'react';
import { loadingState } from '@/store';
import { useRecoilValue } from 'recoil';

const cx = classNames.bind(styles)

const LoadingBar: React.FC = () => {
  const isLoading = useRecoilValue(loadingState)
  const [ mounted, setMounted ] = useState(false)
  const [ completed, setCompleted ] = useState(false)

  useEffect(() => {
    if (isLoading) {
      setMounted(true);
    } else {
      setCompleted(true);
      setTimeout(() => {
        setMounted(false);
        setCompleted(false);
      }, 600);
    }
  }, [isLoading]);
  return (
    <div className={cx('loading-bar')}>
      <div className={cx('bar', completed ? 'completed' : '', mounted ? 'loading' : '')}></div>
    </div>
  )
}

export default LoadingBar
