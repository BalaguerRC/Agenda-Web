const formulario = document.getElementById('formulario');
const nombre= document.getElementById('nombre');
const apellido= document.getElementById('apellido');
const telefono= document.getElementById('telefono');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
     
    /*no funciona
    var formData= new FormData(this);
    console.log(formData);
    console.log(JSON.stringify(formData));
    */

    const datanew= {nombre: nombre.value, apellido: apellido.value, telefono: telefono.value};

    //http://www.raydelto.org/agenda.php
    fetch('http://www.raydelto.org/agenda.php', {
        method: 'POST',
        //body: formData
        body: JSON.stringify(datanew)
    }).then(res => res.json())
    .then(text => console.log(text))
})


fetch('http://www.raydelto.org/agenda.php')
.then(response => response.json())
.then(data => mostrarData(data))
.catch(error => console.log(error))

const mostrarData = (data)=> {
    console.log(data)
    let body = ''
    for (let i = 0; i < data.length; i++) {
        body+= `<tr><td>${data[i].nombre}</td><td>${data[i].apellido}</td><td>${data[i].telefono}</td></tr>`
    }

    document.getElementById('data').innerHTML = body
}

