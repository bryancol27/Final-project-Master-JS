import { baseAPI } from '../index.js'

//Metodo exclusivo para administradores.
export const getUsers = async (token, type) => {
    const res = await fetch(`${baseAPI}/api/users`,
    {
        method: 'GET',
        headers: {
            "content-type": 'application/json',
            "Authorization": `${type} ${token}`
        }
    });
    const data = await res.json()
    return data
}