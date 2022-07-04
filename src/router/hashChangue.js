//nodos
import { backgrounds, loader, menu, logIn, users, orders} from '../node.js'

//utils
import { reloadAnimations, changueHeader, switchVisible, switchHidden} from './layoutChanguer.js'
import { loadOrders, loadUsers } from '../index.js';

window.addEventListener('DOMContentLoaded', () => changuePlace());

window.addEventListener('hashchange', () => changuePlace());

function changuePlace(){
    const location = window.location.hash.split('#')[1] || 'menu';

    reloadAnimations(loader);

    headerSwitch(location)

    mainSwitch(location)
};  

function headerSwitch(hash){

    switch (hash) {
        case 'menu':
            changueHeader({
                background: backgrounds[0],
                title: "Menú",
                subtitle: "Conoce nuestra variada carta",
                schedule: true,
            });
            break;

        case 'logIn':
            changueHeader({
                background: backgrounds[1],
                title: "Iniciar Sesión",
                subtitle: "",
                schedule: false,
            });
            break;

        case 'orders':
            changueHeader({
                background: backgrounds[2],
                title: "Pedidos",
                subtitle: "",
                schedule: false,
            });
            break;

        case 'users':
            changueHeader({
                background: backgrounds[3],
                title: "Usuarios",
                subtitle: "",
                schedule: false,
            });
            break;
    
        default:
            break;
    }
};

function mainSwitch(hash){

    switch (hash) {
        case 'menu':
            switchVisible(menu);
            switchHidden(logIn);
            switchHidden(users);
            switchHidden(orders);
            break;

        case 'logIn':
            switchVisible(logIn);
            switchHidden(menu);
            switchHidden(users);
            switchHidden(orders);
            break;

        case 'orders':
            switchVisible(orders);
            switchHidden(logIn);
            switchHidden(users);
            switchHidden(menu);
            loadOrders();
            break;

        case 'users':
            switchVisible(users);
            switchHidden(logIn);
            switchHidden(menu);
            switchHidden(orders);
            loadUsers();
            break;

        default:
            break;
    }
}