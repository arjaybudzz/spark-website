import React from 'react'
import User from '../../../types'
import { loginUrl, userUrl } from '../baseUrl'
import axios from 'axios'

export const loginUser = async (data: Partial<User>, url: string = loginUrl): Promise<void> => {
    await axios.post(url, {
        username: data.username,
        password: data.password
    }).then((response) => {
        console.log(response);
    }).catch((errors) => {
        console.log(errors);
    })
}

export const createUser = async(data: Partial<User>, url: string = userUrl): Promise<void> => {
    await axios.post(url, {
        username: data.username,
        password: data.password,
        password_confirmation: data.passwordConfirmation
    }).then((response) => {
        console.log(response);
    }).catch((errors) => {
        console.log(errors);
    })
}
