// -----------------------------------------------------------------------------
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
// -----------------------------------------------------------------------------
import ToastUtils from '@/utils/Toast';
import FeedService from "@/services/FeedService";
// -----------------------------------------------------------------------------
import FeedItem from "./FeedItem"
// -----------------------------------------------------------------------------
import styles from "./Feed.module.css";

// -----------------------------------------------------------------------------
function Feed({userModel})
{
  // ---------------------------------------------------------------------------
  const [ state, setState ] = useState({
    moodboards: [],
    currentPage: 0,
    totalItems:  0,
    totalPages:  0,
  });

  // ---------------------------------------------------------------------------
  useEffect(()=>{
    fetchMoreData();
  }, [userModel])

  // ---------------------------------------------------------------------------
  const fetchMoreData = async () => {
    if(!userModel) {
      return;
    }

    if(state.totalPages != 0 && state.currentPage == state.totalPages) {
      return;
    }

    const result = await FeedService.GetFeedForUserWithId(userModel._id, state.currentPage);
    if(!result.IsValid()) {
      ToastUtils.ResultError(result);
      return;
    }

    const value = result.value;
    setState({
      moodboards: state.moodboards.concat(value.moodboards),
      currentPage: value.currentPage,
      totalItems:  value.totalItems,
      totalPages:  value.totalPages,
    });
  };

  // ---------------------------------------------------------------------------
  return (<>
    <div className={styles.feedContainer}>
      <InfiniteScroll
        className={styles.infiniteScroll}
        dataLength={state.moodboards.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {state.moodboards.map((moodboard, index) => (
          <FeedItem key={index} moodboardModel={moodboard}/>
        ))}
      </InfiniteScroll>
    </div>
  </>);
}

// -----------------------------------------------------------------------------
export default Feed;