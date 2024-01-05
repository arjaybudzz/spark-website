import { getUsers } from '../../api/user/userActions'
import { Typography } from '@mui/material';

const UserList = async () => {
    const data = await getUsers();
    return (
    <>
        {
            data.map((user: {[key: string]: any}, index: number) => {
                return <Typography key={index}>
                    {user.attributes.username}
                </Typography>
            })
        }
    </>
  )
}

export default UserList