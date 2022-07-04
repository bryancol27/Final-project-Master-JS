import { baseAPI } from '../index.js'

import { alertError } from '../node.js';

export const alertForm = (place) =>{
    place.textContent = 'Hubo un error por favor intenta de nuevo';
    place.id = place.dataset.id;

    setTimeout(() => place.id = 'hidden' ,4500)
};

export async function getTokens(id, secret){
    try {
        const res = await fetch(`${baseAPI}/oauth/token`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                "client_id": id,
                "client_secret": secret,
                "audience": "https://escalab.academy",
                "grant_type": "client_credentials"
               })
        });
        const data = await res.json();
        if(data.error) throw('Hola');
        return data

    } catch (error) {
        alertForm(alertError)
    }
}

