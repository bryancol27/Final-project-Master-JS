import { baseAPI } from '../index.js';

export const getTables = async (token, type) => {
    const res = await fetch(`${baseAPI}/api/tables`,
    {
        method: 'GET',
        headers: {
            "content-type": 'application/json',
            "Authorization": `${type} ${token}`
        }
    });
    const data = await res.json();
    const availableTables = data.filter(table => table.available).map(table => table.id);
    return availableTables
};