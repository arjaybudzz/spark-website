import getUser from '@/app/api/user/getUser'
import React from 'react'

const Post = async(props: {[key: string]: any}) => {
  const user = await getUser(props.userId);
  return (
    <div className='w-full h-auto flex flex-col border-2 bg-white p-2 rounded-xl gap-5'>
        <div className='flex w-full h-[80px] bg-gray-300 rounded-lg flex-row'>
          <div className='flex flex-col justify-center items-center'>
              
          </div>
          <div>
              <h1>{user.username}</h1>
          </div>
        </div>
        <div className='flex w-full h-auto min-h-28 p-3 border-2 border-gray-300 rounded-lg'>
            <h1>{props.content}</h1>
        </div>
    </div>
  )
}

export default Post