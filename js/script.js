(function() {
    'use strict'
    let cardContainer = document.getElementById('linea')
    console.log(cardContainer);
    let boton = document.getElementById('boton');


    boton.addEventListener('click', function() {
        let marcaUsuario = document.getElementById('marca').value;
        let anioUsuario = document.getElementById('anio').value;
        let transmisionUsuario = document.getElementById('transmision').value;
        var budget = document.getElementById('presupuesto').value
        budget = parseInt(budget);


        let cardContainer = document.getElementById('linea').innerHTML = "";
        for (var i = 0; i < autos.length; i++) {
            // console.log(autos[i].price);
            // console.log(autos[i].year);
            var aGastar = autos[i].price * 0.2;
            if (autos[i].year == traductorAnio(anioUsuario) && autos[i].make == traductorMarca(marcaUsuario) &&
                aGastar <= budget && autos[i].transmision == traductorTransmision(transmisionUsuario)) {
                cardContainer = document.getElementById('linea');
                let carta = document.createElement('div')
                carta.classList.add('col-xl-3')
                carta.classList.add('col-lg-4')
                carta.classList.add('col-md-6')
                carta.classList.add('justify-content-between')
                    // carta.setAttribute('id', elementos.id)
                carta.innerHTML = `<div class="card borde my-4">
                                    <figure class="borde fondo-imagen">
                                    <img src="img/fog-of-war-3440x1440jpg.jpg" alt="">
                                    </figure>
                                    <div class="card-body">
                                        <p>${autos[i].model}</p>
                                        <p>${autos[i].make}</p>
                                        <p>${autos[i].year}</p>
                                        <p>${autos[i].colors}</p>
                                        <p><span class="icono" ><i class="fas fa-dollar-sign"></i> </span> ${autos[i].price}</p>
                                    </div>
                                </div>`

                cardContainer.appendChild(carta);

            } else {}

        }

    });


    function traductorMarca(valor) {

        if (valor == 1) {
            return "Chevrolet";
        } else if (valor == 2) {
            return "Ford";
        } else {
            return "Nissan";
        }

    }

    function traductorAnio(valor) {
        if (valor == 1) {
            return 2019;
        } else
            return 2020;
    }

    function traductorTransmision(valor) {
        if (valor == 1) {
            return "manual"
        } else
            return "auto";
    }
    // Obtener la informacion del cotizador


    // Buscar opciones en la base de datos



    
// PARA PAGINA NOSOTROS

var Nosotros = document.getElementById('Nosotros-link')
Nosotros.addEventListener('click', function(){
    window.open.innerHTML('container-nosotros')
}







})();