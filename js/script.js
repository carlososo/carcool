(function() {
    'use strict'
    let año = [];
    let marca = [];
    let modelo = [];
    let tipo = []
    let precio = []
    let colores = []
    let transmision = []
    let presupuesto = []
    for (let i = 0; i < autos.length; i++) {
        año.push(autos[i].year);
        marca.push(autos[i].make);
        modelo.push(autos[i].model);
        tipo.push(autos[i].body_styles);
        precio.push(autos[i].price);
        colores.push(autos[i].colors);
        transmision.push(autos[i].transmision);
        // Calculo del valor maximo de enganche
        presupuesto.push(autos[i].price * 0.2)
    }
    console.log(año);
    console.log(marca);
    console.log(modelo);
    console.log(tipo);
    console.log(precio);
    console.log(colores);
    console.log(transmision);
    console.log(presupuesto)

    let card = []

    // funcion para busqueda de presupuesto
    buscar.addEventListener('click', function() {
        let busqueda = document.getElementById('busqueda').value;
        for (var i = 0; i < autos.length; i++) {
            var budget = Math.floor(autos[i].price * 0.2)
            if ( budget <= busqueda) {
                card.push(
                    autos[i].make
                    autos[i].model
                    autos[i].colors
                    autos[i].price
                )
                busquedaCar.push(car[p])
                insertarCar(car[p]);
            }
        }








})();