//import function for EventListeners
import { logInAction, makingOrder } from "./index.js";
import { changueHash } from "./router/index.js";
import { createInputOrder } from "./utils/logicOrders.js";
import { closeModal } from "./utils/openCompleteMenu.js";

//import localStorage removeItem for logOut Button
import { deleteCredentials } from './utils/localStorage.js'

//modal Components
const loader = document.querySelector('.loader');
const aproveOrderSend = document.querySelector('.advice');

//header Components
const background = document.querySelector('header');
const title = document.querySelector('.header__identifier__section h1');
const subtitle = document.querySelector('.header__identifier__section p');
const schedule = document.querySelector('.header__Schedule');
const logo = document.querySelector('#logo');

const hashesButton = document.querySelectorAll('.header__nav-hash');

//main sections 
const menu = document.querySelector('.menu');
const logIn = document.querySelector('.logIn');
const users = document.querySelector('.users');
const orders = document.querySelector('.orders');

//input Section logIn
const inputName = document.querySelector('#Name');
const inputPassword = document.querySelector('#password');
const btnLogIn = document.querySelector('#logIn');
const alertError = document.querySelector('.formStatus');

//orders section
const currentOrders = document.querySelector('.orders__current');
const buttonSubmitOrder = document.querySelector('#createOrderBtn');
const tableValue = document.querySelector('#orderTable')
const createInput = document.querySelector('#createInput');
const alertError2 = document.querySelector('.formStatus2');

const formOrder = document.querySelector('#orderPlace');

//dataoption input tables - menu
const optionsTables = document.querySelector('#tables');
const optionsMenu = document.querySelector('#productName')

//users section
const userPlace = document.querySelector('.users');

const backgrounds = [
    '../imgs/bgMenu.png',
    '../imgs/bgLogIn.png',
    '../imgs/bgOrders.png',
    '../imgs/bgUsers.png'
];

//botones header
const hashBtnLogIn = document.querySelector('.logInHash');
const hashBtnLogOut = document.querySelector('.logOutHash');

//main menu content
const menuPlace = document.querySelector('.menu');

const modal_menu =  document.querySelector('.modal__menu');
const modal_menu_container = document.querySelector('.modal__menu__container__plates');
const modal_menu_title = document.querySelector('.modal__menu__container-title');
const modal_menu_button = document.querySelector('.modal__menu__container-button');

//eventListeners
btnLogIn.addEventListener('click',logInAction );

hashBtnLogIn.addEventListener('click', () => changueHash('logIn'));

hashBtnLogOut.addEventListener('click', () => {
    deleteCredentials();
    window.location.reload();
});

logo.addEventListener('click', () => changueHash('menu'));

buttonSubmitOrder.addEventListener('click', () => makingOrder());
createInput.addEventListener('click', createInputOrder);

modal_menu_button.addEventListener('click', closeModal);

hashesButton[0].addEventListener('click', () => changueHash('orders'));
hashesButton[1].addEventListener('click', () => changueHash('users'));


export{
    backgrounds,
    loader,
    aproveOrderSend,
    background,
    title,
    subtitle,
    schedule,
    menu,
    logIn,
    users,
    orders,
    inputName,
    inputPassword,
    alertError,
    alertError2,
    hashBtnLogIn,
    hashBtnLogOut,
    menuPlace,
    currentOrders, 
    formOrder,
    optionsTables, 
    optionsMenu, 
    tableValue, 
    userPlace,
    modal_menu,
    modal_menu_container,
    modal_menu_title, 
    hashesButton
}