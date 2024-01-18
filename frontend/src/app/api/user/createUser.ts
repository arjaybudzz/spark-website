"use server"

import axios from "axios"
import { userUrl } from "../baseUrl"
import { revalidateTag } from "next/cache"
import { User } from "../../../../types"

export const createUser = async(userData: User, url = userUrl) => {
    await axios.post(url, {
        username: userData.username,
        password: userData.password,
        passwordConfirmation: userData.passwordConfirmation
    }).then((response) => {
        console.log(response);
        revalidateTag("users");
    }).catch((errors) => {
        console.log(errors);
    })
}