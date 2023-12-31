import SubmitButton from '@/app/_components/SubmitButton'
import { Typography, TextField } from '@mui/material'
import React from 'react'
import { z } from "zod"

const RegisterForm = () => {
  return (
    <form
        className="flex flex-col justify-around items-center w-1/3 h-3/4 bg-white shadow-xl rounded-xl px-8">
        <Typography 
            variant='h4' 
            component="h1"
            sx={{
                fontWeight: "bold"
            }}>
            Register to spark
        </Typography>

        <div className='flex flex-col w-full h-auto gap-4'>
            <TextField 
                label="Username"
                type="text"
                required
                sx={{
                    width: "100%"
                }}/>

            <TextField 
                label="Password"
                type="password"
                required
                sx={{
                    width: "100%"
                }}/>

            <TextField 
                label="Password Confirmation"
                type="password"
                required
                sx={{
                    width: "100%"
                }}/>
        </div>

        <SubmitButton />
    </form>
  )
}

export default RegisterForm