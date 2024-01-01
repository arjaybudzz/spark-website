import SubmitButton from '@/app/_components/SubmitButton'
import { createUser } from '@/app/actions/user/userActions'
import { Typography, TextField } from '@mui/material'
import React from 'react'
import { z } from "zod"

const RegisterForm = () => {
    const schema = z.object({
        username: z.string({
            required_error: "Please enter a name"
        }),
        password: z.string({
            required_error: "Password is required"
        }).min(8, {
            message: "Password must be at least 8 characters"
        }).max(20, {
            message: "Password must be at most 20 characters"
        }),
        passwordConfirmation: z.string({
            required_error: "Please confirm your password"
        }).min(8, {
            message: "Password must be at least 8 characters"
        }).max(20, {
            message: "Password must be at most 20 characters"
        })
    }).required().strict().superRefine((val, ctx) => {
        if (val.password !== val.passwordConfirmation) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Passwords do not match"
            })
        }
    })
    
  return (
    <form
        method='POST'
        action={createUser}
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
                }}
                name="username-input"/>

            <TextField 
                label="Password"
                type="password"
                required
                sx={{
                    width: "100%"
                }}
                name="password-input"/>

            <TextField 
                label="Password Confirmation"
                type="password"
                required
                sx={{
                    width: "100%"
                }}
                name="password-confirmation-input"/>
        </div>

        <SubmitButton />
    </form>
  )
}

export default RegisterForm