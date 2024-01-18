"use client"

import React, { Suspense, useState } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import SubmitButton from '@/app/components/SubmitButton'
import { TextField } from '@mui/material'
import { User } from '../../../../types'
import loginUser from '@/app/api/user/loginUser'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import LoadingCircle from '@/app/register/components/LoadingCircle'

const LoginForm = () => {
    const router = useRouter();

    const [loginError, setLoginError] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false);
    const [user, setUser] = useState<Partial<User>>({
        username: "",
        password: ""
    })
    
    const validation = yup.object().shape({
        username: yup.string().required("Please enter your username"),
        password: yup.string().required("Please enter your password")
                        .min(8, "A password must be at least 8 characters")
                        .max(20, "A password must not be greater than 20 characters")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validation)
    })

    const login = async(userData: Partial<User>): Promise<void> => {
        await loginUser(userData).then((response) => {
            if (isError === true) setIsError(!isError);
            router.push("/feed");
        }).catch((errors) => {
            setIsError(!isError);
            setLoginError("Invalid username or password.");
        });
    } 
  return (
    <form
        method='POST'
        onSubmit={handleSubmit(login)}
        className='flex flex-col w-1/3 h-3/4 bg-white shadow-lg rounded-xl p-6 justify-around gap-6 items-center'>
        <Suspense fallback={<LoadingCircle />}>
        {isError && <span className='text-sm text-red-500'>{loginError}</span>}
        <h1 className='text-3xl font-bold'>Sign in to spark</h1>
        <div className='flex flex-col w-full h-auto gap-5'>
            <TextField 
                type='text'
                {...register("username")}
                value={user.username} 
                label='Username' 
                error={errors.username? true : false}
                helperText={errors.username?.message} 
                onChange={(e) => setUser({...user, username: e.target.value})}/>
            <TextField 
                type='password'
                {...register("password")}
                value={user.password} 
                label='Password'
                error={errors.password? true : false}
                helperText={errors.password?.message} 
                onChange={(e) => setUser({...user, password: e.target.value})}/>
        </div>
        <SubmitButton />
        <p className='text-sm'>Don't have an account? Register <Link href="/register" className='text-blue-500'>here.</Link></p>
        </Suspense>
    </form>
  )
}

export default LoginForm