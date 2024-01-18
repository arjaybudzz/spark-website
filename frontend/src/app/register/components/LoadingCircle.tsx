import React from 'react'
import { CircularProgress } from '@mui/material'

const LoadingCircle = () => {
  return (
    <div className='flex w-full h-full justify-center items-center'>
        <CircularProgress sx={{color: "black"}}/>
    </div>
  )
}

export default LoadingCircle