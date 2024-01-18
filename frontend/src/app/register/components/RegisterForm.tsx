'use client'

import React from 'react'
import * as yup from 'yup'
import { TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import SubmitButton from '@/app/components/SubmitButton'
import { createUser } from '@/app/api/user/createUser'
import { useState, Suspense } from 'react'
import { User } from '../../../../types'
import { useRouter } from 'next/navigation'
import LoadingCircle from './LoadingCircle'
import Link from 'next/link'

const RegisterForm = () => {
    const router = useRouter();
    const [registerError, setRegisterError] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false);

    const [user, setUser] = useState<User>({
        username: "",
        password: "",
        passwordConfirmation: ""
    })

    const validation = yup.object().shape({
        username: yup.string().required("Please enter your username"),
        password: yup.string().required("Please enter your password").min(8, "A password must have at least 8 characters").max(20, "Password must not exceed 20 characters"),
        passwordConfirmation: yup.string().required("Please confirm your password.").min(8, "A password must have at least 8 characters").max(20, "Password must not exceed 20 characters").oneOf([yup.ref("password")], "Passwords do not match.")
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(validation)
    })

    const makeUser = async(userData: User) => {
        await createUser(userData).then((response) => {
            if (isError === true) setIsError(!isError);
            router.push("/login")
        }).catch((errors) => {
            setIsError(!isError);
            setRegisterError("Failed to register. Please try again.");
        });
    }

  return (
    <form
        onSubmit={handleSubmit(makeUser)}
        method='POST' 
        className='flex flex-col w-1/3 h-3/4 bg-white shadow-lg rounded-xl p-6 justify-around gap-6 items-center'>
        <Suspense fallback={<LoadingCircle />}>
        {isError && <span className='text-sm text-red-500'>{registerError}</span>}
        <h1 className='text-3xl font-bold'>Sign up to spark</h1>
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
                <TextField 
                    type='password'
                    {...register("passwordConfirmation")}
                    value={user.passwordConfirmation} 
                    label='Confirm Password'
                    error={errors.passwordConfirmation? true : false}
                    helperText={errors.passwordConfirmation?.message} 
                    onChange={(e) => setUser({...user, passwordConfirmation: e.target.value})}/>
            </div> 

            <SubmitButton />
            </Suspense>
            <p className='text-sm'>Already have an account? Consider <Link href="/login" className='text-blue-500'>Signing in.</Link></p>
    </form>
  )
}

export default RegisterForm