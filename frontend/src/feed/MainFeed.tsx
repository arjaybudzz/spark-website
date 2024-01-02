import React, { useEffect, useState } from 'react'
import { getUsers } from '../api/user/userActions'
import { Typography } from '@mui/material';

const MainFeed = () => {
    const [username, setUsername] = useState<string[]>([]);

    useEffect(() => {
        const data = getUsers();
        data.then((response) => {
            response.map((usernames) => {
                setUsername(username => [...username, usernames.username])
            })
        })
    }, [])

  return (
    <div className='flex flex-col w-screen h-screen bg-gray-300 justify-center items-center'>
        {
            username.map((user, index: number) => {
                return <Typography key={index}>
                    {user}
                </Typography>
            })
        }
    </div>
  )
}

export default MainFeed