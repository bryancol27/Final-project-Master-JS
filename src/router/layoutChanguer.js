import {   
    background,
    title,
    subtitle,
    schedule,
    hashBtnLogIn,
    hashBtnLogOut, 
    hashesButton} from '../node.js'

import { checkCredential, getCredentialsData } from '../utils/localStorage.js'

//cambiar animaciones para su visbilidad
const reloadAnimations = (node) =>{
    const className = node.dataset.class;

    node.id = "";
    node.classList.add(className);

    setTimeout(() =>{
        node.classList.remove(className);
        node.id = 'hidden'
    }, 3000)
};

const switchVisible = (node) =>{
    node.id = "";
};

const switchHidden = (node) =>{
    node.id = "hidden";
};

const changueHeader = (config) =>{
    background.style.background = `url(${config.background})`;
    title.textContent = config.title;
    subtitle.textContent = config.subtitle;
    (config.schedule) ? schedule.id = "" : schedule.id = "hidden";

    const stateCredential = checkCredential();

    if(stateCredential){
        const { infoUser } = getCredentialsData();
        switchHidden(hashBtnLogIn);
        switchVisible(hashBtnLogOut);
        
        if(infoUser.roles.includes('admin')){
            hashesButton.forEach(element => switchVisible(element));
        }
        else if(infoUser.roles.includes('user')){
            switchVisible(hashesButton[0]);
            switchHidden(hashesButton[1]);
        }
    }else{
        switchVisible(hashBtnLogIn);
        switchHidden(hashBtnLogOut);
        hashesButton.forEach(element =>{
            switchHidden(element);
        })
    }
};

export {
    reloadAnimations,
    changueHeader,
    switchVisible,
    switchHidden
}