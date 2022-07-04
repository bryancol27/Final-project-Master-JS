import { baseAPI } from '../index.js'

export const getMenu = async() => {
    const res = await fetch(`${baseAPI}/api/menus`);
    const data = await res.json();
    return data
};