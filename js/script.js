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


        for (var i = 0; i < autos.length; i++) {
            // console.log(autos[i].price);
            var aGastar = autos[i].price * 0.2;
            console.log(autos[i].year);
            if (autos[i].year == traductorAnio(anioUsuario) && autos[i].make == traductorMarca(marcaUsuario) &&
                aGastar <= budget && autos[i].transmision == traductorTransmision(transmisionUsuario)) {
                let cardContainer = document.getElementById('linea')
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

        // console.log(traductorMarca(marcaUsuario));
        // console.log(traductorAnio(anioUsuario));
        // console.log(traductorTransmision(transmisionUsuario));
        // console.log(budget);

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










})();




// let año = [];
// let marca = [];
// let modelo = [];
// let tipo = []
// let precio = []
// let colores = []
// let transmision = []
// for (let i = 0; i < autos.length; i++) {
//     año.push(autos[i].year);
//     marca.push(autos[i].make);
//     modelo.push(autos[i].model);
//     tipo.push(autos[i].body_styles);
//     precio.push(autos[i].price);
//     colores.push(autos[i].colors);
//     transmision.push(autos[i].transmision);

// var manufacturedBy = " "
// var company = document.getElementById(marca).value
// if (company == "0") {
//     manufacturedBy = "Chevrolet"
// } else if (company == "1") {
//     manufacturedBy = "Ford"
// } else { manufacturedBy = "Nissan" }

// Marca MAKE


// Obtener el resto de la informacion del cotizador y procesarla
// var modelo = document.getElementById('anio').value
// var engranaje = document.getElementById('transmision')