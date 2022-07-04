import { modal_menu, modal_menu_container, modal_menu_title} from "../node.js";

const templateMenuComplete = (name, price) =>{
    return `
    <div class="modal__menu__container-plate">
        <p>${name}</p>
        <p>$${price}</p>
    </div> 
    `
};

const openModalMenu = (place, array) =>{
    const targetCard = array.find(element => element[0] = place);

    modal_menu_container.innerHTML = "";
    let template = "";
    modal_menu.id = "";
    modal_menu_title.textContent = targetCard[0];

    array[1][1].forEach(element => {
        template += templateMenuComplete(element.name, element.price);
    });

    modal_menu_container.innerHTML = template;
};

const closeModal = () =>{
    modal_menu.id = "hidden";
};

export { openModalMenu, closeModal };