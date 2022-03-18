

function crearTablaAmigos(){
    

    var tabla = document.createElement ("table");
    tabla.id = "tabla";
    tabla.className="tabla";
    var tabla2 = document.getElementById("tabla");
    document.body.appendChild(tabla);

    for (let i = 0; i < amigos.length; i++) {
        var row = document.createElement("tr");
        var celda = document.createElement("td");
        celda.innerHTML = amigos[i].nombre
        row.appendChild(celda);
        var celda = document.createElement("td");
        celda.innerHTML = amigos[i].apellido
        row.appendChild(celda);

        tabla.appendChild(row);
                
            
    }



}