import { getCookie } from 'typescript-cookie';
import PostPage from './create_post/PostPage';

const MainFeed = () => {
    const userToken = getCookie("userToken");

  return (
    <div className='flex flex-col w-screen h-screen bg-gray-300 justify-center items-center'>
        <h1>User token: {userToken}</h1>
        <PostPage />
    </div>
  )
}

export default MainFeed