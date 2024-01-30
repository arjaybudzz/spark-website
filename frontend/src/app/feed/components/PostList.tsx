import React from 'react'
import Post from './Post'
import getPosts from '@/app/api/post/getPosts'
import getUser from '@/app/api/user/getUser';

const PostList = async() => {
  const data = await getPosts();

  return (
    <div className='flex flex-1 bg-gray-300 flex-col justify-start items-center p-4 border-2 h-auto absolute top-14 left-1/3 right-1/3 border-black gap-8'>
      {
        data.map((element: {[key: string]: any}, index: number) => {
          return <Post key={index} content={element.content} userId={element.user_id}/>
        })
      }
    </div>
  )
}

export default PostList