(function() {
    'use strict'
    let boton = document.getElementById('boton');


    boton.addEventListener('click', function() {
        let marcaUsuario = document.getElementById('marca').value;
        let anioUsuario = document.getElementById('anio').value;
        let transmisionUsuario = document.getElementById('transmision').value;
        var budget = document.getElementById('presupuesto').value
        budget = parseInt(budget);


        let cardContainer = document.getElementById('linea').innerHTML = "";
        for (var i = 0; i < autos.length; i++) {
            console.log(autos[i].colors);
            var aGastar = autos[i].price * 0.2;
            if (autos[i].year == traductorAnio(anioUsuario) && autos[i].make == traductorMarca(marcaUsuario) &&
                aGastar <= budget && autos[i].transmision == traductorTransmision(transmisionUsuario)) {
                cardContainer = document.getElementById('linea');
                let carta = document.createElement('div');
                carta.classList.add('col-xl-3', 'col-lg-4', 'justify-content-between');
                let card = document.createElement('div');
                card.classList.add('card', 'borde', 'my-4');
                let figura = document.createElement('figure');
                figura.classList.add('borde', 'fondo-imagen');
                let imagen = document.createElement('img');
                imagen.setAttribute('src', 'img/fog-of-war-3440x1440jpg.jpg');
                let seccionInfo = document.createElement('div');
                seccionInfo.classList.add('card-body');
                seccionInfo.innerHTML = ` <p>${autos[i].model}</p>
                                        <p>${autos[i].make}</p>
                                        <p>${autos[i].year}</p>
                                        <p>${autos[i].colors}</p>
                                        <p><span class="icono" ><i class="fas fa-dollar-sign"></i> </span> ${autos[i].price}</p>`
                cardContainer.appendChild(carta);
                carta.appendChild(figura);
                figura.appendChild(imagen);
                carta.appendChild(seccionInfo);

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













})();