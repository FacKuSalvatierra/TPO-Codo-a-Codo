const nombre = document.getElementById("name");
const apellido = document.getElementById("apellido");

form.addEventListener ("submit", user=> {
    if(nombre.value.length < 1 ){
        alert("Escriba un nombre")
    }
    if(apellido.value.length < 1){
        alert("Escriba un apellido")
    }
})
