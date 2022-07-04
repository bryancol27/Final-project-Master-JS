//Event Import
import './router/hashChangue.js';

//imports Fetchs API
import { getMenu } from './utils/getMenu.js'
import { getTokens, alertForm }from './utils/getTokens.js';
import { getUsers } from './utils/getUsers.js'
import { getOrders, makeOrder} from './utils/getOrders.js'
import { getTables } from './utils/getTables.js'

//imports functions and variables
import { saveCredentials, checkCredential, getCredentialsData } from './utils/localStorage.js';
import { cardMenu } from './utils/menuCards.js'
import { printOrders} from './utils/loadOrders.js'
import { valueOrders, loadOptions, selectedTable} from './utils/logicOrders.js';
import { printUsers } from './utils/loadUsers.js';
import { openModalMenu } from './utils/openCompleteMenu.js';

//import de variables de los inputs
import { inputName, inputPassword, alertError, menuPlace, optionsTables, optionsMenu} from './node.js';
import { changueHash } from './router/index.js';

export const baseAPI = 'https://maf2qxs1f6.execute-api.us-east-1.amazonaws.com/prod';


async function alwaysLoad(){
    const namePlate = [];
    const data = Object.entries (await getMenu());
    const arrayNamePlate = data.map(plate => plate[1]);

    for(let i = 0; i < arrayNamePlate.length; i++){
        arrayNamePlate[i].forEach(element => namePlate.push(element.name))
    }

    loadOptions(namePlate, optionsMenu)

    data.forEach(element => {
        const template = cardMenu(element);
        menuPlace.innerHTML += template
    });

    const btnsMenu = document.querySelectorAll('button.buttonMenu')
    btnsMenu.forEach(element => {
        element.addEventListener('click', (event) => openModalMenu(event.target.dataset.id, data))
    });
};

export async function loadOrders(){
    if(checkCredential()){
        const {access_token, token_type} = getCredentialsData();

        const arrayTables = await getTables(access_token, token_type);
        loadOptions(arrayTables, optionsTables);

        const arrayOrders = await getOrders(access_token, token_type);
        printOrders(arrayOrders);
        
        return 
    }
    changueHash('menu');
};

export const makingOrder = async() => {
    const {access_token, token_type, infoUser} = getCredentialsData();
    
    makeOrder(access_token, token_type, infoUser, {
        orders: valueOrders(),
        table: selectedTable(),
    });
};

export async function loadUsers(){

    if(checkCredential()){
        const { infoUser } = getCredentialsData() ?? false;
        
        if(infoUser["roles"].includes('admin')){
            
            const {access_token, token_type} = getCredentialsData();
            
            const arrayUsers = await getUsers(access_token, token_type);
    
            printUsers(arrayUsers);

            return 
        }
    };

    changueHash('menu');
};

export async function logInAction(){
    if(inputName.value && inputPassword.value){
        const {access_token, token_type} = await getTokens(inputName.value, inputPassword.value);
        const infoUser = JSON.parse(atob(access_token.split('.')[1]));
        if(access_token && token_type) saveCredentials(access_token, token_type, infoUser);
        else return 

        changueHash('orders')
        return true

    }else{
        alertForm(alertError)
    }
};

alwaysLoad()