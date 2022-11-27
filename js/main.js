//levanto las var.
const valorTicket   =   200;


let descEstudiante  =   80;
let descTrainee     =   50;
let descJunior      =   15;


let nombre          =   document.getElementById("nombre");
let apellido        =   document.getElementById("apellido");
let mail            =   document.getElementById("mail");
let cantidadTickets =   document.getElementById("cantidadTickets");
let categoria       =   document.getElementById("categoria");


const emailValido   =  mail => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test (mail); // exprecion regular. 
}

function quitarClaseError(){
    let x = document.querySelectorAll(".form-control, .form-select"); //querySelectorAll es un metodo que devuelve un array de elemento, este caso los q tiene form-control y form-select
    let i;
    //como es un array con un for recorro el array por todo el total del array (length) y a cada uno de los elemntos le removemos is-invalid
    for (i = 0 ; i < x.length; i++){
        x[i].classList.remove('is-invalid');
    }
}

function resetTotalAPpagar(){
    quitarClaseError();
    totalPago.innerHTML = "";
}

function totalAPagar() {
    quitarClaseError();
//validaciones
//valida nombre
if (nombre.value === ""){  
    nombre.classList.add ("is-invalid");
    nombre.focus();
    alert ("Por favor, escribí tu nombre.");
    return;
}
//valida apellidos
if (apellido.value === ""){
    apellido.classList.add ("is-invalid");
    apellido.focus();
    alert ("Por favor, escribí tu apellido.");
    return;
}
//valida mail
if (mail.value === ""){
    mail.classList.add ("is-invalid");
    mail.focus();
    alert ("Por favor, escribí tu email.");
    return;
}
// valida si el mail ingresado no es valido 
if (!emailValido(mail.value)){
    mail.classList.add ("is-invalid");
    mail.focus();
    alert("Por favor, escribí un correo electronico valido,");
    return;
}
//valida si selecciono cantidad de tickets
if ( (cantidadTickets.value == 0) || (isNaN(cantidadTickets.value)) ) {
    cantidadTickets.classList.add ("is-invalid");
    cantidadTickets.focus();
    alert ("Por favor, ingresá correctamente cantidad de tickets.");
    return;
}
//valida si selecciono cat.
if (categoria.value == ""){
    categoria.classList.add ("is-invalid");
    categoria.focus();
    alert ("Por favor, selecioná una categoría.");
    return;      
}
//logica
let totalValorTickets = (cantidadTickets.value) * valorTicket;
//switch o anidado de if 

switch (categoria.value) 
{ 
    case "0":
    totalPago.innerHTML = (totalValorTickets = totalValorTickets);
    break;
      
    case"1":
    totalPago.innerHTML = (totalValorTickets = (totalValorTickets - ((descEstudiante/100) * totalValorTickets)))
    break

    case"2":
    totalPago.innerHTML = (totalValorTickets = (totalValorTickets-((descTrainee/100) *totalValorTickets)))
    break;
    
    case"3":
    totalPago.innerHTML = (totalValorTickets =(totalValorTickets-((descJunior/100) *totalValorTickets)))
    break;

    default:
    break;
 }    
}

btnResumen.addEventListener('click',totalAPagar);

btnBorrar.addEventListener('click',resetTotalAPagar);