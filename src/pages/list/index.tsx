import React, { useEffect, useState } from 'react';
import { BackTop, Col, Row, Spin, Tabs } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import router from 'umi/router';
import { LoadingOutlined } from '@ant-design/icons';

import Header from '@/components/header'
import UserInfo from '@/components/userInfo'
import Nav from '@/components/nav'
import ListItem from '@/components/listItem';
import Detail from '../detail'

import styles from './index.less'
import { fetchList } from './service';
import { DataModel, DataModelWrap } from './data';
// import Detail from '../detail';

const { TabPane } = Tabs;

interface ListProps {
  location: any
}

const List: React.FC<ListProps> = props => {
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [list, setList] = useState<DataModelWrap[]>([]);
  // const [tempParams, setTempParams] = useState<{ current: number, total: number }>({
  //   current: 1,
  //   total: -1,
  // });
  const [loading, setLoading] = useState<boolean>(true);
  const [currentNav, setCurrentNav] = useState<string>('Hot');
  const [isShowDetail, setIsShowDetail] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);
  const [after, setAfter] = useState<string>('');

  const callback = () => { }

  const loadScrollList = async (page: number, tempCurrentNav: string) => {
    console.log(tempCurrentNav, currentNav)
    let sorter = ''
    let nav = ''
    const obj: any = {}
    if (!tempCurrentNav) {
      nav = currentNav
      obj.after = after
    } else {
      nav = tempCurrentNav
    }
    if (nav === 'New') {
      sorter = 'new'
    } else if (nav === 'Top') {
      sorter = 'top'
    } else {
      sorter = 'hot'
    }

    if (after === null) {
      setHasMore(false)
    } else {
      const res = await fetchList({
        q: 'cat',
        limit: 10,
        ...obj,
        sort: sorter,
      });
      setLoading(false)
      if (res) {
        console.log(res)
        if (res.data) {
          if (tempCurrentNav) {
            setList(res.data.children)
          } else {
          setList(list.concat(res.data.children))
          }
        }
        setAfter(res.data.after)
      }
    }
  }

  function beforeunload() {
    localStorage.setItem('isUpdate', 'true')
  }

  useEffect(() => {
    // 拦截判断是否离开当前页面
    window.addEventListener('beforeunload', beforeunload);
    return () => window.removeEventListener('beforeunload', beforeunload)
  }, [])

  useEffect(() => {
    const isUpdate = localStorage.getItem('isUpdate')
    if (isUpdate === 'true') {
      setLoading(true)
      loadScrollList(0, 'Hot')
      localStorage.setItem('isUpdate', 'false')
    }
    if (props.location.pathname === '/list/detail') {
      setId(props.location.query.id)
      setIsShowDetail(true)
      document.body.style.overflowY = 'hidden'
    } else if (props.location.pathname === '/list') {
      setIsShowDetail(false)
      document.body.style.overflowY = 'auto'
    } else {
      router.push('/404')
    }
  }, [props])


  const handleSelectedNav = (name: string) => {
    setLoading(true)
    setHasMore(true)
    setAfter('')
    setCurrentNav(name)
    loadScrollList(0, name)
  }

  const jumpToDetail = (item: DataModel) => {
    router.push(`/list/detail?id=${item.key}`)
    setIsShowDetail(true)
    setId(item.key)
    document.body.style.overflowY = 'hidden'
  }

  return (
    <div className={styles.list}>
      <Header isShowDetail={isShowDetail} />
      <div className={styles.banner}>
        <div className={styles.title}>
          DOTA2
        </div>
      </div>
      <UserInfo />
      <Tabs defaultActiveKey="1" onChange={callback} className={styles.tabs}>
        <TabPane tab="Posts" key="1">
          <div className={styles.posts}>
            <Row>
              <Col span={18}>
                <div style={{ marginBottom: '16px' }}>
                  <Nav returnSelectedNav={handleSelectedNav} />
                </div>
                {
                  loading && <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Spin spinning={loading}>
                    </Spin>
                  </div>
                }
                {
                  !loading && <InfiniteScroll
                    pageStart={0} // 首页为1，可根据自己的具体需求
                    loadMore={loadScrollList}
                    loader={
                      <div className="loader" key={0}>
                        <LoadingOutlined style={{ marginRight: '10px' }} />加载中
                      </div>
                    }
                    useWindow // ****将滚动侦听器添加到窗口，或者添加组件的parentNode****
                    hasMore={hasMore}
                    className="infiniteScroll"
                    initialLoad={false}
                  >
                    {
                      list.map(item => <div key={item.data.id} onClick={() => jumpToDetail(item)}>
                        <ListItem

                          title={item.data.title}
                          authorFullname={item.data.author_fullname}
                          created={item.data.created}
                          numComments={item.data.num_comments}
                          numCrossposts={item.data.num_crossposts }
                        />
                      </div>)
                    }
                  </InfiniteScroll>
                }

              </Col>
              <Col span={6}>
              </Col>
            </Row>

          </div>
        </TabPane>
        <TabPane tab="Predictions" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="New to Dota 2" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
      {
        isShowDetail && <Detail id={id} />
      }

      <BackTop visibilityHeight={800}>
        <div className={styles.backBtn}>Back to Top</div>
      </BackTop>
    </div>
  )
}


export default List
