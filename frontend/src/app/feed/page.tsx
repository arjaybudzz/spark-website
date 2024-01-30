import React from 'react'
import PostList from './components/PostList'

const MainFeed = () => {
  return (
    <div className='flex flex-row w-full h-full'>
      <div className='flex flex-1'></div>
      <PostList />
      <div className='flex flex-1'></div>
    </div>
  )
}

export default MainFeed