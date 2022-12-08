
const regexEmail =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

const regexPassword = /^(?=\w*\d)(?=\w*[A-Z0-9])(?=\w*[a-z0-9])\S{8,16}$/;

export function validation(userData){
    let errors={};

    if(!regexEmail.test(userData.username)) errors.username = 'El usuario debe ser un email';
    else if(!userData.username) errors.username = 'El usuario no puede estar vacío';
    else if(userData.username.length > 35) errors.username = 'El usuario no puede contener mas de 35 caracteres';
    if(!regexPassword.test(userData.password)) errors.password = 'La password debe contener al menos un número';
    else if(userData.password.length < 4 && userData.password.length > 11 ) errors.password = 'La contraseña debe tener una longitud de entre 6 y 10 caracteres';
    return errors;
}