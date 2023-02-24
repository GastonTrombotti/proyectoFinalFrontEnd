var image = document.createElement("img");
//Obtiene datos personales de random user
async function consulta() {
    let respuesta = await fetch("https://randomuser.me/api/")
                            .then(response => response.json())
                            .then(data => data)
    document.getElementById("name").innerHTML = "Nombre: " + respuesta.results[0].name.last + ", " + respuesta.results[0].name.first;
    document.getElementById("genre").innerHTML = "Genero: " + respuesta.results[0].gender;
    document.getElementById("country").innerHTML = "País: " + respuesta.results[0].location.country;
    document.getElementById("city").innerHTML = "Ciudad: " + respuesta.results[0].location.city + ", " + respuesta.results[0].location.state;
    document.getElementById("address").innerHTML = "Dirección: " + respuesta.results[0].location.street.name + " " + respuesta.results[0].location.street.number + " (" + respuesta.results[0].location.postcode + ')';
    document.getElementById("mail").innerHTML = "E-Mail: " + respuesta.results[0].email;
    document.getElementById("cell").innerHTML = "Celular: " + respuesta.results[0].cell;
    document.getElementById("fix").innerHTML = "Telefono: " + respuesta.results[0].phone;
    document.getElementById("image").appendChild(image);
    image.src=respuesta.results[0].picture.large;

}
//muestra u oculta los datos de contacto de experiencia profecional
//el valor de y indica la id del elemento que lo llama
function hide(y){
        
        if(y===0){
            var x = document.getElementById("smb");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }
        else{
            var x = document.getElementById("nt");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }
    }

consulta();