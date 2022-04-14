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
import { DataModel } from './data';
// import Detail from '../detail';

const { TabPane } = Tabs;

interface ListProps {
  location: any
}

const List: React.FC<ListProps> = props => {
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [list, setList] = useState<DataModel[]>([]);
  const [tempParams, setTempParams] = useState<{ current: number, total: number }>({
    current: 1,
    total: -1,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [currentNav, setCurrentNav] = useState<string>('');
  const [isShowDetail, setIsShowDetail] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);


  const callback = () => { }

  const loadScrollList = async (page: number, tempCurrentNav: string) => {
    let sorter = ''
    const nav = !tempCurrentNav ? currentNav : tempCurrentNav
    if (nav === 'New') {
      sorter = 'New'
    } else if (nav === 'Top') {
      sorter = 'Top'
    } else {
      sorter = 'Hot'
    }

    if (tempParams.total === 0 || (tempParams.total !== -1 &&
      page + 1 > Math.ceil(tempParams.total / 10))) {
      setHasMore(false)
      setTempParams({
        current: 1,
        total: -1,
      })
    } else {
      const res = await fetchList({
        pageSize: 10,
        current: page + 1,
        sorter,
      });
      setLoading(false)
      if (res) {
        if (res.data) {
          if (page === 0) {
            setList(res.data)
          } else {
            setList(list.concat(res.data))
          }
        }
        setTempParams({
          current: res.current ? res.current : 1,
          total: res.total ? res.total : -1,
        });
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
                      list.map(item => <div key={item.key} onClick={() => jumpToDetail(item)}>
                        <ListItem

                          title={item.title}
                          authorFullname={item.authorFullname}
                          created={item.created}
                          numComments={item.numComments}
                          numRecommend={item.numRecommend}
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
