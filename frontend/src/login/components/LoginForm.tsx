import { TextField, Typography } from '@mui/material'
import SubmitButton from '../../components/SubmitButton'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import User from '../../../types'
import { useState } from 'react'
import axios from 'axios'
import { loginUrl } from '../../api/baseUrl'
import { useNavigate } from 'react-router-dom'


const LoginForm = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState<Partial<User>>({
        username: "",
        password: ""
    })

    const [loading, setLoading] = useState<boolean>(false);

    const validation = yup.object().shape({
        username: yup.string().required("Please enter your username"),
        password: yup.string().required("Please enter your password")
    })

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(validation)
    })
    
    const loginUser = async (url: string = loginUrl(user.username, user.password)): Promise<void> => {
        setLoading(!loading);

        await axios.post(url).then((response) => {
            console.log(response);
            navigate("/feed");
            
        }).catch((errors) => {
            console.log(errors);
            setLoading(loading);
        })
    }

  return (
    <form
        method="POST"
        onSubmit={handleSubmit(() => loginUser())} 
        className='flex flex-col justify-around items-center bg-white w-1/3 h-3/4 rounded-xl p-6 shadow-xl'>
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

                <SubmitButton pending={loading}/>
        </div>     
    </form>
  )
}

export default LoginForm