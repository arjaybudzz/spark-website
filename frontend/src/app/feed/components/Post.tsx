import getUser from '@/app/api/user/getUser'
import React from 'react'
import { IconButton } from '@mui/material';
import { VerifiedUser } from '@mui/icons-material';

const Post = async(props: {[key: string]: any}) => {
  const user = await getUser(props.userId);
  return (
    <div className='w-full h-auto flex flex-col border-2 bg-white p-2 rounded-xl gap-5'>
        <div className='flex w-full h-[80px] bg-gray-300 rounded-lg flex-row'>
          <div className='flex flex-col justify-center items-center w-1/4 h-full'>
              <IconButton>
                <VerifiedUser />
              </IconButton>
          </div>
          <div className='flex flex-col w-3/4 h-full bg-white p-3'>
              <h1 className='text-xl font-bold'>{user.username}</h1>
              <div>
                <h1 className='text-sm'>{props.creationDate}</h1>
              </div>
          </div>
        </div>
        <div className='flex w-full h-auto min-h-28 p-3 border-2 border-gray-300 rounded-lg'>
            <h1>{props.content}</h1>
        </div>
    </div>
  )
}

export default Post