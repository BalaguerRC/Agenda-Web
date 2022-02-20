const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
            
    var formData= new FormData(this);
    console.log(formData);
    console.log(JSON.stringify(formData));

    fetch('http://www.raydelto.org/agenda.php', {
        method: 'POST',
        body: formData
    }).then(res => res.json()).then(text => console.log(text))
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

