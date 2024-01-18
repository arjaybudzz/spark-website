import { Search } from '@mui/icons-material'
import React from 'react'

const AppBar = () => {
  return (
    <div className='flex flex-row relative top-0 left-0 right-0 h-14 bg-gray-300 shadow-md px-6 py-3 justify-start items-center shrink'>
        <div className='flex flex-1'>
            <h1 className='text-2xl font-bold'>Spark</h1>
        </div>
        <div className='flex flex-1 flex-row justify-center items-center'>
            <div className='w-auto h-full p-1 bg-white border-gray-300 border-[1px]'>
                <Search />
            </div>
            <div className='w-3/4 h-full py-1'>
                <input className='h-[34px] w-full'/>
            </div>
        </div>
        <div className='flex flex-1'>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default AppBar