import { currentOrders } from '../node.js'

const createParragraft = (element) =>{
    return`
    <p>id: ${element.product} - quantity: ${element.quantity}</p>

    `
};

const templateOrders = (prop) =>{
    const epochData = new Date(prop.created_at);
    return `
    <div class="order">
        <div class="orders__current-user">
            <img src="./imgs/Avatar.png" alt="avatar">
            <p class="name">Dua Lipa</p>
            <p class="date">${epochData.getUTCMonth()} ${epochData.getUTCDay()},${epochData.getUTCFullYear()}</p>
            <p class="hour">${epochData.getUTCHours()}AM</p>
            <p class="id">ID:${prop.id}</p>
        </div>

        <div class="orders__current-table">
            <h3 class="table">Mesa ${prop.table}</h3>

            <div class="products">
                ${prop.order.map(element => createParragraft(element)).join('')}
            </div>
        </div>

        <button class="button" type="button">
            Marcar como entregado <span><img src="./assets/Vector.png" alt="Arrow"></span>
        </button>
    </div>
    `
}

const printOrders = (array) =>{
    currentOrders.innerHTML = "";
    let template = '';
    array.forEach(element => {
        template += templateOrders(element);
    });
    currentOrders.innerHTML += template;
};

export{
    printOrders
}