import User from '../../../types'
import { loginUrl, userUrl } from '../baseUrl'
import axios from 'axios'

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

export const getUsers = async(): Promise<{[key: string]: string}[]> => {
    let data: {[key: string]: string}[] = [{}];
    
    await axios.get(userUrl).then((response) => {
        data = response.data;
    }).catch((errors) => {
        console.log(errors);
    })

    return data;
}