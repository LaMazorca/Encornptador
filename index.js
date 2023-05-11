//obtencion de los botones
const btnEncrypt = document.querySelector("#encrypt");
const btnDecrypt = document.querySelector("#decrypt");
const btnCopy = document.querySelector("#copy");
//Texto encima de los botones
const textBtn = document.querySelector("#textBtn");
//Div que contiene al botón para que se muestre
const divBtnCopy = document.querySelector("#divBtnCopy")
//obtencion del div que contiene la imagen y el h2
const hiddenDisplay = document.querySelector("#display-hidden");
//obtecion del p que cambiara con el texto cifrado
const textCrypt = document.querySelector("#text-crypt");
//obtencion de lo imagen y el h2 dentro del div
const changeImg = document.querySelector("#display-img")
const changeText = document.querySelector("h2");
//obtencion del texto ingresado en el textarea
const message = document.querySelector("#text");
//regex para el replace en encrypt
const regexA = /a/g;
const regexE = /e/g;
const regexI = /i/g;
const regexO = /o/g;
const regexU = /u/g;
//regex para el replace en decrypt
const regexAi = /ai/g;
const regexEnter = /enter/g;
const regexImes = /imes/g;
const regexOber = /ober/g;
const regexUfat = /ufat/g;

//validación de los datos ingresados
function start(){
    message.addEventListener("keyup",function(){
        this.value = this.value.toLowerCase();
    });
}

//funcionalidad del boton encriptar
function encrypt(){
    //Cifrado de las letras usando regex para que todo el texto se cambie
    let newText = message.value
    .replace(regexE,"enter")
    .replace(regexI,"imes")
    .replace(regexA,"ai")
    .replace(regexO,"ober")
    .replace(regexU,"ufat");
    //Esconde la imagen y el h2
    hiddenDisplay.style.display = 'none'
    //modificación del texto encriptado
    textCrypt.style.color = 'var(--ash)'
    textCrypt.style.fontFamily = 'var(--second-font)';
    textCrypt.style.fontSize = '1.8rem'
    textCrypt.style.textAlign = 'initial'
    textCrypt.style.margin = "1rem 2rem"
    //aparción de texto encriptado
    textCrypt.textContent = newText;
    //eliminacion del texto en el textarea
    message.value = "";
    //mostrar boton copiar
    divBtnCopy.style.display = 'block';
}

//Funcionalidad del boton desencriptar
function decrypt(){
    let newText = message.value
    .replace(regexEnter,"e")
    .replace(regexImes,"i")
    .replace(regexAi,"a")
    .replace(regexOber,"o")
    .replace(regexUfat,"u");

    hiddenDisplay.style.display = 'none'

    textCrypt.style.color = 'var(--ash)'
    textCrypt.style.fontFamily = 'var(--second-font)';
    textCrypt.style.fontSize = '1.6rem'
    textCrypt.style.textAlign = 'initial'
    
    textCrypt.textContent = newText;

    message.value = "";

    divBtnCopy.style.display = 'block';
}

//Funcionalidad del boton copy
function copy(){
    navigator.permissions.query({name: "clipboard-write"}).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
            navigator.clipboard.writeText(textCrypt.textContent);
            btnCopy.textContent = "Copiado";
        }
    });
}

//Llamadas de las funciones
window.addEventListener("load",start);
btnEncrypt.addEventListener("click", encrypt);
btnDecrypt.addEventListener("click", decrypt);
btnCopy.addEventListener("click", copy);
