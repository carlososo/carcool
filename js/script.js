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




        // Obtener la informacion del cotizador

        // Marca MAKE
    var manufacturedBy = " "
    var company = document.getElementById(marca).value
    if (company == "0"){
        manufacturedBy= "Chevrolet"
    } else if (company == "1"){
        manufacturedBy = "Ford"
    } else { manufacturedBy = "Nissan"}

    // Obtener el resto de la informacion del cotizador y procesarla
    var modelo = document.getElementById(anio).value
    var engranaje = document.getElementById(transmision)
    var budget = document.getElementById(presupuesto).value 

    // Buscar opciones en la base de datos
    for(var i=0; i<=autos.length; i++){
        var aGastar = autos[i].price * 0.2
        if (autos[i].year == modelo && autos[i].make == manufacturedBy 
            && aGastar <= budget && autos[i].transmision == engranaje) {
                let cardContainer = document.getElementById('card')
                let carta = document.createElement('div')
                carta.classList.add('col-xl-3')
                carta.classList.add('col-lg-4')
                carta.classList.add('col-md-6')
                carta.classList.add('justify-content-between')
                carta.setAttribute('id',elementos.id)
                carta.innerHTML = '<div class="card borde my-4">
                                <figure class="borde fondo-imagen">
                                <img src=""></img>
                                </figure>
                                <div class="card-body">
                                    <p>${autos[i].make}</p>
                                    <p>${autos[i].year}</p>
                                    <p>${autos[i].colors}</p>
                                    <p>${autos[i].price}</p>
                                </div>
                            </div>'

            } else {}
        
    }                                                                                                                                                








})();