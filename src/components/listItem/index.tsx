import React, { useState } from 'react';
import { ArrowDownOutlined, ArrowsAltOutlined, ArrowUpOutlined } from '@ant-design/icons'
import styles from './index.less';

import Comment from '@/components/icon/comment'
import Share from '../icon/share';
import { millisecondToDHMS } from '@/utils/utils';


interface ListItemProps {
  title: string;
  authorFullname: string;
  created: number;
  numComments: number;
  numCrossposts: number;
}

const ListItem: React.FC<ListItemProps> = props => {
  const { title, authorFullname, created, numComments, numCrossposts } = props

  return (
    <div className={styles.listItem}>
      <div className={styles.left}>
        <div className={styles.upArrow}>
          <ArrowUpOutlined style={{ fontSize: '20px', color: '#999' }} />
        </div>
        <div className={styles.recommend}>
          {numCrossposts}
        </div>
        <div className={styles.downArrow}>
          <ArrowDownOutlined style={{ fontSize: '20px', color: '#999' }} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.from}>
          Posted by <span>{authorFullname}</span> <span>{millisecondToDHMS(created)} hours ago</span>
        </div>
        <div className={styles.btns}>
          <div className={styles.btnItem}>
            <ArrowsAltOutlined style={{ fontSize: '16px' }} />
          </div>
          <div className={styles.btnItem}>
            <Comment color="#878A8C" width="16px" height="16px" />
            <div className={styles.btnTxt}>
              {numComments} comments
            </div>
          </div>
          <div className={styles.btnItem}>
            <Share color="#878A8C" width="16px" height="16px" />
            <div className={styles.btnTxt}>
              Share
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ListItem
