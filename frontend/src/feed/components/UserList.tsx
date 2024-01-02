import React, { useEffect, useState } from 'react'
import { getUsers } from '../../api/user/userActions'
import { Typography } from '@mui/material';

const UserList = async () => {
    const [username, setUsername] = useState<string[]>([]);

    useEffect(() => {
        const data = getUsers();
        data.then((response) => {
            response.map((usernames) => {
                setUsername([...username, usernames.username])
            })
        })
    }, [])
  
    return (
    <>
        {
            username.map((user, index: number) => {
                return <Typography key={index}>
                    {user}
                </Typography>
            })
        }
    </>
  )
}

export default UserList