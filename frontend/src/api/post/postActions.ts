import axios from 'axios'
import { postUrl } from '../baseUrl'
import { getCookie } from 'typescript-cookie'

export const createPost = async(data: string, url: string = postUrl): Promise<void> => {
    await axios.post(url, {
        content: data,
    }, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${getCookie("userToken")}`
        }
    }).then((response) => {
        console.log(response);
    }).catch((errors) => console.log(errors))
}

export const getPosts = async(url: string = postUrl) => {
    await axios.get(url).then((response) => {
        console.log(response);
    })
}

export const editPost = async(id: string, data: string, url: string = postUrl): Promise<void> => {
    await axios.patch(`${url}/${id}`, {
        content: data
    }, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": getCookie("userToken")
        }
    }).then((response) => console.log(response)).catch((errors) => console.log(errors))
}

export const deletePost = async(id: string, url: string = postUrl): Promise<void> => {
    await axios.delete(`${url}/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": getCookie("userToken")
        }
    }).then((response) => console.log(response)).catch((errors) => console.log(errors))
}