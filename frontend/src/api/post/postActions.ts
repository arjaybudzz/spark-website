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