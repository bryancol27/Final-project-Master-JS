const saveCredentials = (access_token, token_type, infoUser) =>{
    let credentials = JSON.stringify({
        access_token,
        token_type,
        infoUser
    });
    localStorage.setItem("currentTokens", credentials);
};

const checkCredential = () =>{
    const credentials = localStorage.getItem("currentTokens");
    return (credentials) ? true : false;
};

const deleteCredentials = () =>{
    localStorage.removeItem("currentTokens");
};

const getCredentialsData = () =>{
    return JSON.parse(localStorage.getItem("currentTokens"));
};

export{
    saveCredentials,
    checkCredential,
    deleteCredentials,
    getCredentialsData
}