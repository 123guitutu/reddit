import React, { useState } from 'react';
import styles from './index.less';

import New from '@/components/icon/new'
import Hot from '@/components/icon/hot'
import Top from '@/components/icon/top'

interface NavProps {
  returnSelectedNav: (name: string) => void
}

const Nav: React.FC<NavProps> = props => {
  const { returnSelectedNav } = props

  const [currentNav, setCurrentNav] = useState<string>('Hot')

  const navList = [{
    name: 'Hot',
  }, {
    name: 'New',
  }, {
    name: 'Top',
  }]

  const select = (item: { name: string }) => {
    setCurrentNav(item.name)
    returnSelectedNav(item.name)
  }

  return (
    <div className={styles.nav}>
      {
        navList.map(item => <div key={item.name} className={item.name === currentNav ? `${styles.item} ${styles.active}` : styles.item} onClick={() => select(item)}>
          {
            item.name === 'Hot' && <Hot color={item.name === currentNav ? '#8ab4c8' : '#878A8C'} width="28px" height="20px" />
          }
          {
            item.name === 'New' && <New color={item.name === currentNav ? '#8ab4c8' : '#878A8C'} width="28px" height="20px" />
          }
          {
            item.name === 'Top' && <Top color={item.name === currentNav ? '#8ab4c8' : '#878A8C'} width="28px" height="20px" />
          }
          <div className={styles.title}>
            {item.name}
          </div>
        </div>)
      }
    </div>
  )
}


export default Nav
