"use server"

import axios from 'axios'
import { userUrl } from '../baseUrl'


const getUser = async (id: string, url = userUrl): Promise<{[key: string]: any}> => {
    let data = {};
    
    await axios.get(`${url}/${id}`).then((response) => {
        data = response.data.data.attributes;
        console.log(data);
    }).catch((errors) => console.log(errors))

    return data;
}

export default getUser