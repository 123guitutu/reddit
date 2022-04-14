import Share from '@/components/icon/share';
import { ArrowDownOutlined, ArrowsAltOutlined, ArrowUpOutlined, CloseOutlined, DatabaseOutlined } from '@ant-design/icons';
import { BackTop, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import router from 'umi/router';
import Comment from '@/components/icon/comment'

import styles from './index.less'
import avatar from '../../assets/avatar.png'
import { fetchListDetail } from '../list/service';
import { DataModel } from '../list/data';


interface DetailProps {
  id: number
}

const Detail: React.FC<DetailProps> = props => {
  const { id } = props

  const [detailInfo, setDetailInfo] = useState<DataModel>()
  const [scrollTop, setScrollTop] = useState<number>(0)

  const loadDetail = async () => {
    const res = await fetchListDetail({ id })
    setDetailInfo(res)
  }

  useEffect(() => {
    loadDetail()
  }, [id])

  const scroll = e => {
    setScrollTop(e.target.scrollTop)
  }

  const close = () => {
    router.replace('/list')
    document.body.style.overflowY = 'auto'
  }

  const goToTop = () => {
    if (document && document.getElementById('detail')) {
      const detail = document.getElementById('detail')
      detail.scrollTop = 0
    }
  }

  return (
    <div className={styles.detail} id="detail" onScroll={scroll} style={id ? { overflowY: 'auto' } : {}}>
      <div className={styles.detailBody}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.part}>
              <ArrowUpOutlined style={{ fontSize: '18px', color: '#d7dadc', marginLeft: '6px', cursor: 'pointer' }} />
              <div className={styles.num}>
                {
                  detailInfo?.numRecommend
                }
              </div>
              <ArrowDownOutlined style={{ fontSize: '18px', color: '#d7dadc', marginRight: '6px', cursor: 'pointer' }} />
            </div>
            <div className={styles.headerTitle}>
              <DatabaseOutlined style={{ fontSize: '16px', color: '#d7dadc', marginRight: '10px' }} />
              <span>{detailInfo?.title}</span>
            </div>
          </div>

          <div className={styles.headerRight} onClick={close}>
            <CloseOutlined style={{ fontSize: '16px', color: '#d7dadc' }} />
            <span>
              close
            </span>
          </div>
        </div>
        <div className={styles.bodyWrap}>
          <div className={styles.body}>
            <Row>
              <Col span={16}>
                <div className={styles.leftBody}>
                  <div className={styles.left}>
                    <div className={styles.upArrow}>
                      <ArrowUpOutlined style={{ fontSize: '20px', color: '#999' }} />
                    </div>
                    <div className={styles.recommend}>
                      {detailInfo?.numRecommend}
                    </div>
                    <div className={styles.downArrow}>
                      <ArrowDownOutlined style={{ fontSize: '20px', color: '#999' }} />
                    </div>
                  </div>
                  <div className={styles.right}>
                    <div className={styles.line1}>
                      <div className={styles.item1}>
                        <img src={avatar} className={styles.avatar} alt="" />
                        <span>
                          r/DotA2
                        </span>
                      </div>
                      <div className={styles.item2}>
                        Posted by <span className={styles.info}>{detailInfo?.authorFullname}</span>
                        <span className={styles.info}>{detailInfo?.created} hours ago</span>
                      </div>
                    </div>
                    <div className={styles.line2}>
                      {detailInfo?.title}
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      A distinctio quos ut optio molestias atque, ea accusamus
                      deserunt nesciunt ad quam adipisci quibusdam praesentium iusto incidunt.
                      Eligendi, dolore molestiae. Expedita?
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.line3}>
                      Nigma performance in the past few years has been very
                      disheartening. Now they reached Division 2. There will be a
                      different roster now most probably. We can all finally move on now.
                    </div>
                    <div className={styles.btns}>
                      <div className={styles.btnItem}>
                        <Comment color="#878A8C" width="16px" height="16px" />
                        <div className={styles.btnTxt}>
                          {detailInfo?.numComments} comments
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
              </Col>
              <Col span={8}>
              </Col>
            </Row>
          </div>
          {
            scrollTop >= 600 && <div className={styles.backBtn} onClick={goToTop}>
              Back to Top
            </div>
          }

        </div>
      </div>
    </div>
  )
};

export default Detail;
