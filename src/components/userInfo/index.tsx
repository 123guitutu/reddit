import React, { useState } from 'react';
import styles from './index.less';
import avatar from '../../assets/avatar.png'

interface HeaderProps {

}

const UserInfo: React.FC<HeaderProps> = () => {
  // console.log(props)
  const [previewReady, setPreviewReady] = useState<boolean>(false);

  return (
    <div className={styles.userInfo}>
      <div className={styles.left}>
        <img src={avatar} className={styles.avatar} alt="" />
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            Dota 2 on Reddit
          </div>
          <div className={styles.topRight}>
            Join
          </div>
        </div>
        <div className={styles.bottom}>
          r/DotA2
        </div>
      </div>
    </div>
  )
}


export default UserInfo
