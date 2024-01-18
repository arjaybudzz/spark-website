'use client'

import React from 'react'
import { CircularProgress } from '@mui/material'
import { useFormStatus } from 'react-dom'

const SubmitButton = () => {
    const {pending} = useFormStatus();
  return (
    <button
        type='submit' 
        className='w-full h-[50px] bg-black rounded-md text-white font-bold hover:bg-opacity-70 hover:duration-200'
        disabled={pending? true : false}>
        {pending? <CircularProgress sx={{color: "white", scale: "0.70"}}/> : "SUBMIT"}
    </button>
  )
}

export default SubmitButton