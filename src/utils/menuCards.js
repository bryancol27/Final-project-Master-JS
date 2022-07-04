function sayHello(){
    alert('hello')
}

const foodPlate = (props) =>{
    const card = `
        <div class="menu__type__food-description-plates-plate">
            <p class="price">$${props.price}</p>
            <h3>${props.name}</h3>
            <p>${props.description}</p>
        </div>
    `

    return card
};

const only3cards = (props) =>{
    let plates = '';
    
    for (let i = 0; i < 3; i++) {
        if(props[i]){
            plates += foodPlate(props[i])
        }else break
    }
    return plates
};

const cardMenu = (props) =>{
    return`
    <article class="menu__type__food">

        <div class="menu__type__food-kink">
            <h2>${props[0]}</h2>
            <p>This is a section of your menu. give your section a brief description</p>
        </div>

        <div class="menu__type__food-description">
            <img src="${props[1][0].img}" alt="Imagen Plato" class="menu__type__food-description-img">

            <div class="menu__type__food-description-plates">

                ${only3cards(props[1])};

                <button type="button" class="buttonMenu ${props[0]}" data-id="${[props[0]]}">Ver más</button>
            </div>
        </div>
    </article>
    `
};

export {
    cardMenu
};