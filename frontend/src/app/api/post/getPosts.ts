'use server'

import axios from 'axios'
import { postUrl } from '../baseUrl'

const getPosts = async(url = postUrl): Promise<{[key: string]: any}[]> => {
    let data: {[key: string]: any}[] = [{}];
    await axios.get(url).then((response) => {
        console.log(response.data);
        data = response.data;
    }).catch((errors) => console.log(errors))

    return data;
}

export default getPosts