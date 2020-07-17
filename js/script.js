(function() {
    'use strict'


    let boton = document.getElementById('boton');
    boton.addEventListener('click', function() {
        let marcaUsuario = document.getElementById('marca').value;
        let anioUsuario = document.getElementById('anio').value;
        let transmisionUsuario = document.getElementById('transmision').value;
        console.log(traductorMarca(marcaUsuario));
        console.log(traductorAnio(anioUsuario));
        console.log(traductorTransmision(transmisionUsuario));

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



    let año = [];
    let marca = [];
    let modelo = [];
    let tipo = []
    let precio = []
    let colores = []
    let transmision = []
    for (let i = 0; i < autos.length; i++) {
        año.push(autos[i].year);
        marca.push(autos[i].make);
        modelo.push(autos[i].model);
        tipo.push(autos[i].body_styles);
        precio.push(autos[i].price);
        colores.push(autos[i].colors);
        transmision.push(autos[i].transmision);
    }
    // console.log(año);
    // console.log(marca);
    // console.log(modelo);
    // console.log(tipo);
    // console.log(precio);
    // console.log(colores);
    // console.log(transmision);



})();