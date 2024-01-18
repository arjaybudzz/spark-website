'use server'

import axios from 'axios'
import { loginUrl } from '../baseUrl'
import { cookies } from 'next/headers'
import { User } from '../../../../types'


const loginUser = async(userData: Partial<User>, url: string = loginUrl): Promise<void> => {
  await axios.post(`${url}?user[username]=${userData.username}&user[password]=${userData.password}`).then((response) => {
    cookies().set("userToken", response.data.token);
    cookies().set("userId", response.data.id);
  }).catch((errors) => {
    console.log(errors); 
  })
}

export default loginUser