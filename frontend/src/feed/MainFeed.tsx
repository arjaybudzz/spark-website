import { getCookie } from 'typescript-cookie';
import PostPage from './create_post/PostPage';
import { useState } from 'react';
import { Typography } from '@mui/material';
import NavBar from './components/NavBar';

const MainFeed = () => {
    const userToken = getCookie("userToken");
    const [isPostCreate, setIsPostCreate] = useState<boolean>(false);

  return (
    <div className='flex flex-col w-screen h-screen bg-gray-300 items-center'>
      <NavBar />
        <div>
          
        </div>
    </div>
  )
}

export default MainFeed