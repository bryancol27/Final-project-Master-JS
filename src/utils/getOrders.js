import { baseAPI } from '../index.js'
import { reloadAnimations } from '../router/layoutChanguer.js';
import { aproveOrderSend, formOrder } from '../node.js';

export const getOrders = async(token, type) => {
    const res = await fetch(`${baseAPI}/api/orders`,
    {
        method: 'GET',
        headers: {
            "content-type": 'application/json',
            "Authorization": `${type} ${token}`
        }
    });
    const data = await res.json()
    return data
};

export const makeOrder = async (token, type, infoUser, dataOrder) =>{
    const currentDate = new Date();
    const dateArray = [currentDate.getDate(), currentDate.getMonth() + 1, currentDate.getFullYear()]
    let newDate = new Date( dateArray[2], dateArray[1] - 1, dateArray[0]);

    const res = await fetch(`${baseAPI}/api/orders`,
    {
        method: 'PUT',
        headers:{
            "Content-type": 'application/json',
            "Authorization": `${type} ${token}`
        },
        body: JSON.stringify({
            created_at: newDate,
            id: 1,
            table: Number(dataOrder.table),
            waiter: Number(infoUser.id),
            order: dataOrder.orders,
        })
    });
    
    const data = await res.json();
    if(data.message){
        reloadAnimations(aproveOrderSend);
        formOrder.reset();
    }
};