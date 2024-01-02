const baseUrl: string = "http://127.0.0.1:3001/api/v1"

export const loginUrl = (username: string | undefined, password: string | undefined) => {
    return `${baseUrl}/tokens?user[username]=${username}&user[password]=${password}`;
}

export const userUrl = `${baseUrl}/users`;