//levanto las var.
const valorTicket = 200;

let descEstudiante = 80;
let descTrainee = 50;
let descJunior = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria = document.getElementById("categoria");

const emailValido = mail => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test (mail); // exprecion regular. 
}

function quitarClaseError(){
    let x = document.querySelectorAll(".form-control, form-select"); //querySelectorAll es un metodo que devuelve un array de elemento, este caso los q tiene form-control y form-select
    let i;
    //como es un array con un for recorro el array por todo el total del array (length) y a cada uno de los elemntos le removemos is-invalid
    for (i=0; i < x.length; i++){
        x[i].classList.remove('is-invalid')
    }
}
function resetTotalAPpagar(){
    quitarClaseError();
    totalPago.innerHTML = "";
}

function totalAPagar() {
    quitarClaseError();
}

//validaciones
//valida nombre
if (nombre.value === ""){  
    alert ("Por favor, escribí tu nombre.");
    nombre.classList.add ("is-ivalid");
    nombre.focus();
    return;
}

//valida apellidos
if (apellido.value === ""){
    alert ("Por favor, escribí tu apellido.");
    apellido.classList.add ("is-invalid");
    apellido.focus();
    return;
}

//valida mail
if (mail.value === ""){
    alert ("Por favor, escribí tu email.");
    mail.classList.add ("is-invalid");
    mail.focus();
    return;
}

// valida si el mail ingresado no es valido 
if (!emailValido(mail.value)){
    alert("Por favor, escribí un correo electronico valido,");
    mail.classList.add ("is-invalid");
    mail.focus();
    return;
}

//valida si selecciono cantidad de tickets
if ( (cantidadTickets.value == 0) || (isNaN(cantidadTickets.value)) ) {
    alert ("Por favor, ingresá correctamente cantidad de tickets.");
    cantidadTickets.classList.add ("is-invalid");
    cantidadTickets.focus();
    return;
}

//valida si selecciono cat.
if (categoria.value == ""){
    alert ("Por favor, selecioná una categoría.");
    categoria.classList.add ("is-invalid");
    categoria.focus();
    return
}

//logica
let totalValorTickets = (cantidadTickets.value) * valorTicket;
//switch o anidado de if 

switch (totalValorTickets) {
    case 1: 
        (categoria.value == 0)(totalValorTickets * totalValorTickets)
    break
    case 2: 
        (categoria.value == 1)(totalValorTickets* totalValorTickets - (descEstudiante / 100 * totalValorTickets))
    break
    case 3:
        (categoria.value == 2)(totalValorTickets * totalValorTickets - (descTrainee / 100 * totalValorTickets))
    break
    case 4:
        (categoria.value == 3) (totalValorTickets * totalValorTickets - (descJunior / 100 * totalValorTickets))
    break
    default:
}

totalPago.innerHTML = totalValorTickets //innerHTML es una propiedad q permite insertar un valor en el id que indico 

btnResumen.addEventListener('click', totalAPagar);
btnBorrar.addEventListener('click', resetTotalAPpagar);
