import { TextField, Typography } from '@mui/material'
import SubmitButton from '../../components/SubmitButton'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import User from '../../../types'
import { useState } from 'react'
import { createUser } from '../../api/user/userActions'


const RegisterForm = () => {
    const [user, setUser] = useState<Partial<User>>({
        username: "",
        password: "",
        passwordConfirmation: ""
    })

    const validation = yup.object().shape({
        username: yup.string().required("Please enter your username"),
        password: yup.string().required("Please enter your password")
                              .min(8, "A password must have a minimum of 8 characters")
                              .max(20, "A password must have a maximum of 20 characters"),
        passwordConfirmation: yup.string()
                                 .required("Please confirm your password")
                                 .oneOf([yup.ref("password")], "Passwords do not match")
                                 .min(8, "A password must have a minimum of 8 characters")
                                 .max(20, "A password must have a maximum of 20 characters")
    })

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(validation)
    })

  return (
    <form
        method="POST"
        onSubmit={handleSubmit(() => createUser(user))} 
        className='flex flex-col justify-around items-center bg-white w-1/3 h-3/4 rounded-xl p-6'>
        <Typography 
            variant='h4' 
            component='h2'
            sx={{
                fontWeight: "bold"
            }}>
            Sign in to Spark
        </Typography>

        <div className='flex flex-col justify-center items-center gap-4 w-full h-auto'>
            <TextField 
                type="text"
                {...register("username")}
                label="Username"
                error={errors.username? true : false}
                helperText={errors.username?.message}
                sx={{
                    width: "100%"
                }}
                value={user.username}
                onChange={(e) => {
                    setUser({...user, username: e.target.value});
                }}/>
            <TextField 
                type="password"
                {...register("password")}
                label="Password"
                error={errors.password? true : false}
                helperText={errors.password?.message}
                sx={{
                    width: "100%"
                }}
                value={user.password}
                onChange={(e) => {
                    setUser({...user, password: e.target.value});
                }}/>
            <TextField 
                type="password"
                {...register("passwordConfirmation")}
                label="Confirm Password"
                error={errors.passwordConfirmation? true : false}
                helperText={errors.passwordConfirmation?.message}
                sx={{
                    width: "100%"
                }}
                value={user.passwordConfirmation}
                onChange={(e) => {
                    setUser({...user, passwordConfirmation: e.target.value});
                }}/>
        </div>

        <SubmitButton />
        
    </form>
  )
}

export default RegisterForm