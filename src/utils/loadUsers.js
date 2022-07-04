import { userPlace } from "../node.js";

const templateUsers = (person) =>{
    const epochData = `${new Date(person.birthday)}`;
    const splitData = epochData.split(' ');

    return `
    <article class="users__info">

        <img src="${person.img}" alt="" class="users__info__img">
        
        <div class="users__info__text">
            <p class="name">${person.name}</p>
            <p class="type-user">${person.roles[0]}</p>
            <p class="birthday">Cumpleaños ${splitData[1]} ${splitData[2]} de ${splitData[3]}</p>
            <p class="gmail green">${person.email}</p>
            <p class="number green">${person.phone}</p>
        </div>

    </article>
    `
};

const printUsers = (people) =>{
    userPlace.innerHTML = ""; 
    let template = '';
    
    console.log(people);

    people.forEach(person => {
        template += templateUsers(person)
    });

    userPlace.innerHTML = template
};

export { printUsers };