import { formOrder, tableValue, alertError2} from "../node.js";

import { alertForm } from "./getTokens.js";

const templateInputOrder = () =>{
    return `
    <div class="inputContainer">
        <input list="productName" type="text" name="order" id="orderProduct" placeholder="Producto">
        <input type="text" name="order" id="orderQuantity" placeholder="Cantidad">
    </div>
    `
} ;

export const createInputOrder = () =>{
    formOrder.innerHTML += templateInputOrder()
};

export const valueOrders = () =>{
    let orderArray = [];

    const containOrderValue = [...document.querySelectorAll('.inputContainer')];
    
    containOrderValue.forEach(node => {
        const product =  node.children[0].value;
        const quantity = node.children[1].value;
        
        if(product && quantity){
            orderArray.push({
                product,
                quantity,
            });
        };
    });
    return orderArray
};

export const selectedTable = () =>{
    const tblValue = tableValue.value
    if(tblValue) return tblValue 
    alertForm(alertError2);
};

export const loadOptions = (tables, place) =>{
    place.innerHTML = "";
    const options = []
    tables.forEach(table =>{
        const option = document.createElement('option');
        option.value = table;
        options.push(option);
    });
    place.append(...options)
};