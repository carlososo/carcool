(function() {
    'use strict'
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
    console.log(año);
    console.log(marca);
    console.log(modelo);
    console.log(tipo);
    console.log(precio);
    console.log(colores);
    console.log(transmision);


        // Obtener la informacion del cotizador

        // Marca MAKE
    var company = document.getElementById(marca).value
    if (company == "0"){
        var manufacturedBy= "Chevrolet"
    } else if (company == "1"){
        var manufacturedBy = "Ford"
    } else { manufacturedBy = "Nissan"}






})();