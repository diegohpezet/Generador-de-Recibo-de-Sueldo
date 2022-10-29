//Reseteo del formulario
document.getElementById('formMinuto').reset();

const arrayCategorias = []
//Petición a JSON local para traer info de categorías. Esto reemplaza a la construcción del objeto anterior y el array de objetos

fetch('./data/data.json')
  .then(response => response.json())
  .then( (data) => {
    for (var i = 0; i < data.length; i++) 
            {
                arrayCategorias.push(data[i])
            }
})

menuPrincipal = document.getElementById('seleccionArea');
menuPrincipal.addEventListener("change", areas);

let objetoUsuario = new Object();
objetoUsuario.cantFaltas = 0;

// Función para crear las categorías según la primer elección del AREA de trabajo. Uso de eventos.
function areas(){
    switch (menuPrincipal.value)
    {
        case "Administración IT, Soporte, Operaciones y Planificación":
            objetoUsuario.area = menuPrincipal.value
            crearOpcion = document.getElementById("categorias");
            crearOpcion.innerHTML = '';
            //Crear opción deshabilitada para clarificar que se debe elegir una categoría
            const optionDefA = document.createElement("option");
            const nodoTextoDefA = document.createTextNode("Seleccionar categoría");
            optionDefA.selected = true
            optionDefA.disabled = true            
            optionDefA.appendChild(nodoTextoDefA);
            crearOpcion.appendChild(optionDefA);
            
            for (var i = 0; i < arrayCategorias.length; i++) 
            {
                if(arrayCategorias[i].codigo.startsWith("A"))
                {
                    //objetoUsuario.codigo = arrayCategorias[i].codigo
                    const option = document.createElement("option");
                    const nodoTexto = document.createTextNode(arrayCategorias[i].nombre);
                    option.appendChild(nodoTexto);
                    crearOpcion.appendChild(option);
                }
            }
            break;         

        case "Investigación y Desarrollo":
            objetoUsuario.area = menuPrincipal.value
            crearOpcion = document.getElementById("categorias");
            crearOpcion.innerHTML = '';
            //Crear opción deshabilitada para clarificar que se debe elegir una categoría
            const optionDefB = document.createElement("option");
            const nodoTextoDefB = document.createTextNode("Seleccionar categoría");
            optionDefB.selected = true
            optionDefB.disabled = true 
            optionDefB.appendChild(nodoTextoDefB);
            crearOpcion.appendChild(optionDefB);
            for (var i = 0; i < arrayCategorias.length; i++) 
            {
                if(arrayCategorias[i].codigo.startsWith("B"))
                {
                    //objetoUsuario.codigo = arrayCategorias[i].codigo
                    const option = document.createElement("option");
                    const nodoTexto = document.createTextNode(arrayCategorias[i].nombre);
                    option.appendChild(nodoTexto);
                    crearOpcion.appendChild(option);
                }
            }
            break;               

        case "Comercial":
            objetoUsuario.area = menuPrincipal.value
            crearOpcion = document.getElementById("categorias");
            crearOpcion.innerHTML = '';
            //Crear opción deshabilitada para clarificar que se debe elegir una categoría
            const optionDefC = document.createElement("option");
            const nodoTextoDefC = document.createTextNode("Seleccionar categoría");
            optionDefC.selected = true
            optionDefC.disabled = true 
            optionDefC.appendChild(nodoTextoDefC);
            crearOpcion.appendChild(optionDefC);
            for (var i = 0; i < arrayCategorias.length; i++) 
            {
                if(arrayCategorias[i].codigo.startsWith("C"))
                {
                    //objetoUsuario.codigo = arrayCategorias[i].codigo
                    const option = document.createElement("option");
                    const nodoTexto = document.createTextNode(arrayCategorias[i].nombre);
                    option.appendChild(nodoTexto);
                    crearOpcion.appendChild(option);
                }
            }
            break;               

        case "Administrativo":
            objetoUsuario.area = menuPrincipal.value
            crearOpcion = document.getElementById("categorias");
            crearOpcion.innerHTML = '';
            //Crear opción deshabilitada para clarificar que se debe elegir una categoría
            const optionDefD = document.createElement("option");
            const nodoTextoDefD = document.createTextNode("Seleccionar categoría");
            optionDefD.selected = true
            optionDefD.disabled = true 
            optionDefD.appendChild(nodoTextoDefD);
            crearOpcion.appendChild(optionDefD);
            for (var i = 0; i < arrayCategorias.length; i++) 
            {                
                if(arrayCategorias[i].codigo.startsWith("D"))
                {
                    //objetoUsuario.codigo = arrayCategorias[i].codigo
                    const option = document.createElement("option");
                    const nodoTexto = document.createTextNode(arrayCategorias[i].nombre);
                    option.appendChild(nodoTexto);                    
                    crearOpcion.appendChild(option);
                }
            }
            break;    

        case "Personal Ejecutivo":
            objetoUsuario.area = menuPrincipal.value
            crearOpcion = document.getElementById("categorias");
            crearOpcion.innerHTML = '';
            //Crear opción deshabilitada para clarificar que se debe elegir una categoría
            const optionDefE = document.createElement("option");
            const nodoTextoDefE = document.createTextNode("Seleccionar categoría");
            optionDefE.selected = true
            optionDefE.disabled = true 
            optionDefE.appendChild(nodoTextoDefE);
            crearOpcion.appendChild(optionDefE);
            for (var i = 0; i < arrayCategorias.length; i++) 
            {                
                if(arrayCategorias[i].codigo.startsWith("E"))
                {
                    //objetoUsuario.codigo = arrayCategorias[i].codigo
                    const option = document.createElement("option");
                    const nodoTexto = document.createTextNode(arrayCategorias[i].nombre);
                    option.appendChild(nodoTexto);
                    crearOpcion.appendChild(option);
                }
            }
            break;    
    }
}

//Funcion para mostrar u ocultar inputs
function yesnoCheck() {
    if (document.getElementById('yesCheck').checked) {
        document.getElementById('ifYes').style.visibility = 'visible';
    }
    else document.getElementById('ifYes').style.visibility = 'hidden';

}

// Obtener datos de los demás campos
let nombre = document.getElementById('nombre')
nombre.onchange = () => {objetoUsuario.nombre = nombre.value}

let cuil = document.getElementById('cuil')
cuil.onchange = () => {objetoUsuario.cuil = cuil.value}

let empresa = document.getElementById('empresa')
empresa.onchange = () => {objetoUsuario.empresa = empresa.value}

let anioIngreso = document.getElementById('anioingreso')
anioIngreso.onchange = () => {objetoUsuario.ingreso = parseInt(anioIngreso.value)}

let mesIngreso = document.getElementById('mesingreso')
mesIngreso.oninput = () => {objetoUsuario.mes = parseInt(mesIngreso.value)}

objetoUsuario.horasTrabajo = 176;

let horasCincuenta = document.getElementById('extraCincuenta')
objetoUsuario.horasCincuenta = 0
horasCincuenta.onchange = () => {
    objetoUsuario.horasCincuenta = parseInt(horasCincuenta.value)
    objetoUsuario.horasTrabajo += objetoUsuario.horasCincuenta
}


let horasCien = document.getElementById('extraCien')
objetoUsuario.horasCien = 0
horasCien.onchange = () => {
    objetoUsuario.horasCien = parseInt(horasCien.value)
    objetoUsuario.horasTrabajo += objetoUsuario.horasCien
}

let cantFeriados = document.getElementById('cantferiados')
objetoUsuario.cantFeriados = 0
cantFeriados.oninput = () => {
    objetoUsuario.cantFeriados = parseInt(cantFeriados.value)
    objetoUsuario.horasTrabajo -= (objetoUsuario.cantFeriados * 8)
}

objetoUsuario.porcentajePresentismo = 25
objetoUsuario.cantFaltas = 0

let cantFaltas = document.getElementById('cantfaltas')
objetoUsuario.cantFaltas = 0
cantFaltas.onchange = () => {
    objetoUsuario.cantFaltas += parseInt(cantFaltas.value)
    objetoUsuario.porcentajePresentismo -= (objetoUsuario.cantFaltas * 5);
    objetoUsuario.horasTrabajo -= (objetoUsuario.cantFaltas * 8);
}

let cantFaltasSabado = document.getElementById('cantfaltasSabado')
objetoUsuario.cantFaltasSabado = 0
cantFaltasSabado.onchange = () => {
    objetoUsuario.cantFaltasSabado += parseInt(cantFaltasSabado.value)
    objetoUsuario.porcentajePresentismo -= (objetoUsuario.cantFaltasSabado * 5);
    objetoUsuario.horasTrabajo -= (objetoUsuario.cantFaltasSabado * 4);
}

let diasLicencia = document.getElementById('licenciaDuracion')
objetoUsuario.diasLicencia = 0
diasLicencia.onchange = () => {
    objetoUsuario.diasLicencia += parseInt(diasLicencia.value)
    objetoUsuario.horasTrabajo -= (objetoUsuario.diasLicencia * 8)
    objetoUsuario.porcentajePresentismo -= objetoUsuario.diasLicencia * 5;
}


let diasLicenciaSab = document.getElementById('licenciaDuracionSab')
objetoUsuario.diasLicenciaSab = 0
diasLicenciaSab.onchange = () => {
    objetoUsuario.diasLicenciaSab += parseInt(diasLicenciaSab.value)
    objetoUsuario.horasTrabajo -= (objetoUsuario.diasLicenciaSab * 4)
    objetoUsuario.porcentajePresentismo -= objetoUsuario.diasLicenciaSab * 5;
}


let categoriaUsuario = document.getElementById('categorias')
categoriaUsuario.oninput = () => {
                                    objetoUsuario.categoria = categoriaUsuario.value
                                    for (let x in arrayCategorias) 
                                    {                
                                        if(arrayCategorias[x].nombre == objetoUsuario.categoria)
                                        {
                                            objetoUsuario.codigo = arrayCategorias[x].codigo
                                        }
                                    } 
                                }

let senioritiUsuario = document.getElementById('senioriti')
senioritiUsuario.oninput = () => {
                                    objetoUsuario.senioriti = senioritiUsuario.value
                                    for (let clave in arrayCategorias)
                                    {
                                        if(arrayCategorias[clave].codigo == objetoUsuario.codigo)
                                        {
                                            switch (objetoUsuario.senioriti)
                                            {
                                                case "Junior":
                                                    objetoUsuario.salarioConvenio = arrayCategorias[clave].salarioJr                                                    
                                                    break;
                                                
                                                case "Semi-Senior":
                                                    objetoUsuario.salarioConvenio = arrayCategorias[clave].salarioSmSr                                                    
                                                    break;

                                                case "Senior":
                                                    objetoUsuario.salarioConvenio = arrayCategorias[clave].salarioSr                                                    
                                                    break;
                                            }
                                        }
                                    }                                    
                                 }            

let aguinaldoChk = document.getElementById("aguinaldoCheck")
let vacacionesChk = document.getElementById("vacacionesCheck")

//Funcion para mostrar los datos ingresados, los cálculos del salario y crear un PDF con el recibo
function renderRecibo()
{
    //Validación de campos y notificación vía librería toastify
    if(!objetoUsuario.nombre)
    {
        Toastify({text: "Tenés que completar tu nombre!", duration: 3000}).showToast();   
    }
    if(!objetoUsuario.empresa)
    {
        Toastify({text: "Tenés que completar el campo empresa!", duration: 3000}).showToast();   
    }
    if(!objetoUsuario.ingreso)
    {
        Toastify({text: "Te falta completar el campo del año de ingreso!", duration: 3000}).showToast();   
    }
    if(!objetoUsuario.mes)
    {
        Toastify({text: "No seleccionaste el mes de ingreso!", duration: 3000}).showToast();   
    }
    if(!objetoUsuario.area)
    {
        Toastify({text: "No seleccionaste el area en el que te desempeñás", duration: 3000}).showToast();   
    }
    if(!objetoUsuario.categoria)
    {
        Toastify({text: "No seleccionaste la categoría laboral", duration: 3000}).showToast();   
    }
    if(!objetoUsuario.senioriti)
    {
        Toastify({text: "No seleccionaste tu seniority", duration: 3000}).showToast();   
    }

    //Desestructuración de objeto con los datos del usuario
    const {area, nombre, cuil, empresa, ingreso, mes, cantFaltas, cantFaltasSabado, cantFeriados, diasLicencia, diasLicenciaSab, horasTrabajo, horasCincuenta, horasCien, porcentajePresentismo, categoria, codigo, senioriti, salarioConvenio, afiliacion} = objetoUsuario; 

    //Fecha actual para recibo
    let hoy = new Date(); 
    let fechaRecibo = hoy.getFullYear()+'-'+(hoy.getMonth()+1)+'-'+hoy.getDate();

    //Cálculo de años de antiguedad
    fechaActual = new Date().getFullYear();
    antiguedad = fechaActual - ingreso;

    if(antiguedad > 1 && antiguedad < 5)
        {
            vacaciones = 14;
        }
        else if (antiguedad >= 5 && antiguedad < 10)
        {
            vacaciones = 21;
        }
        else if (antiguedad >= 10 && antiguedad < 20)
        {
            vacaciones = 28;
        }
        else if (antiguedad >= 20)
        {
            vacaciones = 35;
        }

        pagoDia = salarioConvenio/22;
        pagoVacaciones = (pagoDia + pagoDia * 0.1 + pagoDia * 0.25) * vacaciones


    //Horas trabajadas
    //Valor hora
    valorHora = salarioConvenio / 176

    //Calculo de horas extra al 50%
    pagoCincuenta = horasCincuenta * (valorHora / 2)

    //Cálculo de horas extra al 100%
    pagoCien = horasCien * valorHora

    //Cálculo del pago de los días feriado
    pagoFeriados = cantFeriados * (valorHora * 8)

    //Reducción del salario por faltas
    reduccionFaltas = 0
    reduccionFaltas = cantFaltas * (valorHora * 8)
    reduccionFaltas += cantFaltasSabado * (valorHora * 4)

    //Calculo de faltas
    cantFaltasTotal = cantFaltas + cantFaltasSabado

    //Cálculo de la licencia
    licencia = diasLicencia * (valorHora * 8) + diasLicenciaSab * (valorHora * 4)

    //Cálculo plus por aniguedad según convenio
    plusAntiguedad = salarioConvenio * (antiguedad * 0.01);

    //Cálculo aporte sindical
    afiliacion == "SI" ? aporteSindicato = salarioConvenio * 0.02 : aporteSindicato = 0

    //Cálculo de productividad
    productividad = salarioConvenio * 0.10;

    //Cálculo plus por presentimos
    plusPresentismo = salarioConvenio * (porcentajePresentismo/100);

    //Cálculo de salario bruto
    salarioBruto = salarioConvenio + plusAntiguedad + plusPresentismo + productividad + pagoCien + pagoCincuenta

    //Cálculo de aguinaldo
    aguinaldo = (salarioConvenio + plusPresentismo + productividad + pagoCien + pagoCincuenta)/2

    //Cálculo de aporte jubilatorio del empleado
    aporteJubilacion = salarioBruto * 0.11;

    //Cálculo de aporte de INNSJPJ
    aporteInstituto = salarioBruto * 0.03;

    //Cálculo de aporte a obra social
    aporteObraSocial = salarioBruto * 0.03;

    //Cálculo de retenciones totales
    totalRetenciones = aporteJubilacion + aporteInstituto + aporteObraSocial + aporteSindicato + reduccionFaltas; 
    
    //Cálculo de salario neto, en mano
    salarioNeto = salarioBruto - totalRetenciones;


    //Uso de librería PDFmake para crear archivo de recibo de sueldo
    var docDefinition = {
        watermark: { text: 'CONFIDENCIAL', color: 'grey', opacity: 0.1, bold: true, italics: false},
        content: [
            { 
                alignment: 'center',
                text: empresa,
                style: 'header',
                fontSize: 18,
                bold: true,
                margin: [0, 10],
            },
            { 
                alignment: 'center',
                text: 'FECHA: ' + fechaRecibo,
                fontSize: 14,
                bold: true,
                margin: [0, 10],
            },
            {
                margin: [0, 0, 0, 10],
                layout: {
                    fillColor: function (rowIndex, node, columnIndex) {
                        return (rowIndex % 2 === 0) ? '#42CBF5' : '#f5f5f5';
                    }
                },
                table: {
                    widths: ['100%'],
                    heights: [20,10],
                    body: [
                        [
                            { 
                                text: 'NOMBRE: ' + nombre+ '        CUIL: ' +cuil,
                                fontSize: 11,
                                bold: true,
                            },

                        ],
                        [
                            { 
                                text: 'Antiguedad: ' + antiguedad,
                                fontSize: 11,
                                bold: true,
                            }
                        ],
                        [
                            { 
                                text: 'AREA: ' + area,
                                fontSize: 11,
                                bold: true,
                            }
                        ],
                        [
                            { 
                                text: 'CATEGORÍA: ' + categoria,
                                fontSize: 11,
                                bold: true
                            }
                        ],
                        [
                            { 
                                text: 'SENIORITY: ' + senioriti,
                                fontSize: 11,
                                bold: true
                            }
                        ],
                        [
                            { 
                                text: 'FALTAS: ' + cantFaltas +'        HS LICENCIA: '+diasLicencia * 8+'        HS TRABAJADAS: '+ horasTrabajo +'', //Faltas Justificadas
                                fontSize: 11,
                                bold: true
                            }
                        ],
                    ],
                }
            },
            {
                style: 'tableExample',
                layout: {
                    fillColor: function (rowIndex, node, columnIndex) {
                        return (rowIndex === 0) ? '#42CBF5' : null;
                    }
                },
                table: {
                    widths: ['50%', '25%', '25%'],
                    //heights: [20,10,10,10,30,10,25],
                    headerRows: 1,
                    body: [
                        [
                            { 
                                text: 'Conceptos / Descripción',
                                alignment: 'center',
                                bold: true,
                                fontSize: 9
                            }, 
                            { 
                                text: 'Haberes',
                                alignment: 'center',
                                fontSize: 9,
                                bold: true
                            },
                            {
                                text: 'Retenciones',
                                alignment: 'center',
                                fontSize: 9,
                                bold: true
                            }
                        ],
                        [
                            {
                                text: 'Salario Básico',
                                fontSize: 9,
                                bold: true
                            }, 
                            { 
                                text: salarioConvenio.toFixed(2),
                                alignment: 'center',
                                fontSize: 9,
                                bold: true
                            },
                            { 
                            }
                        ],     
                        [
                            {
                                text: 'Productividad (10%)',
                                fontSize: 9,
                                bold: true
                            }, 
                            { 
                                text: productividad.toFixed(2),
                                alignment: 'center',
                                fontSize: 9,
                                bold: true
                            },
                            { 
                            }
                        ], 
                        [
                            {
                                text: 'Plus por Antigüedad (1% por año trabajado)',
                                fontSize: 9,
                                bold: true
                            }, 
                            { 
                                text: plusAntiguedad.toFixed(2),
                                alignment: 'center',
                                fontSize: 9,
                                bold: true
                            },
                            { 
                    
                            }
                            
                        ],     
                        [
                            {
                                text: 'Plus por Presentismo ('+porcentajePresentismo+'%)',
                                fontSize: 9,
                                bold: true
                            }, 
                            { 
                                text: plusPresentismo.toFixed(2),
                                alignment: 'center',
                                fontSize: 9,
                                bold: true
                            },
                            { 
                    
                            }
                            
                        ],   
                        [
                            {
                                text: 'Horas Extra 50% ('+horasCincuenta+')',
                                fontSize: 9,
                                bold: true
                            }, 
                            { 
                                text: pagoCincuenta.toFixed(2),
                                alignment: 'center',
                                fontSize: 9,
                                bold: true
                            },
                            { 
                    
                            }
                            
                        ],
                        [
                            {
                                text: 'Horas Extra 100% ('+horasCien+')',
                                fontSize: 9,
                                bold: true
                            }, 
                            { 
                                text: pagoCien.toFixed(2),
                                alignment: 'center',
                                fontSize: 9,
                                bold: true
                            },
                            { 
                    
                            }                            
                        ],   
                        [
                            {
                                text: 'Feriados ('+cantFeriados+')',
                                fontSize: 9,
                                bold: true
                            }, 
                            { 
                                text: pagoFeriados.toFixed(2),
                                alignment: 'center',
                                fontSize: 9,
                                bold: true
                            },
                            { 
                            }
                        ], 
                        [
                            {
                                text: 'Licencia ('+diasLicencia+')',
                                fontSize: 9,
                                bold: true
                            }, 
                            { 
                                text: licencia.toFixed(2),
                                alignment: 'center',
                                fontSize: 9,
                                bold: true
                            },
                            { 
                    
                            }
                            
                        ],
                        [
                            {
                                text: 'Faltas Injustificadas ('+cantFaltasTotal+')',
                                fontSize: 9,
                                bold: true
                            }, 
                            { 
                    
                            },
                            { 
                                text: reduccionFaltas.toFixed(2),
                                alignment: 'center',
                                fontSize: 9,
                                bold: true
                            }
                        ],         
                        [
                            {
                                text: 'Aporte SIPA (11%)',
                                fontSize: 9,
                                bold: true
                            }, 
                            { 
                    
                            },
                            { 
                                text: aporteJubilacion.toFixed(2),
                                alignment: 'center',
                                fontSize: 9,
                                bold: true
                            }                        
                            
                        ],
                        [
                            {
                                text: 'Aporte INSSJP (3%)',
                                fontSize: 9,
                                bold: true
                            }, 
                            { 
                    
                            },
                            { 
                                text: aporteInstituto.toFixed(2),
                                alignment: 'center',
                                fontSize: 9,
                                bold: true
                            }                        
                            
                        ],
                        [
                            {
                                text: 'Obra Social (3%)',
                                fontSize: 9,
                                bold: true
                            }, 
                            { 
                    
                            },
                            { 
                                text: aporteObraSocial.toFixed(2),
                                alignment: 'center',
                                fontSize: 9,
                                bold: true
                            }                        
                            
                        ],                 
                    ]
                }
            },
            {
                style: 'tableExample',
                layout: {
                    fillColor: function (rowIndex, node, columnIndex) {
                        return (rowIndex === 0 || rowIndex > 0) ? '#42CBF5' : null;
                    }
                },
                table: {
                    widths: ['100%'],
                    //heights: [20,10,10,10,30,10,25],
                    body: [
                        [
                            {
                                text: 'Salario Bruto: ' + salarioBruto.toFixed(2),
                                alignment: 'right',
                                fontSize: 11,
                                bold: true                                
                            }
                        ],                                                
                        [
                            {
                                text: 'Total Deducciones: ' + totalRetenciones.toFixed(2),
                                alignment: 'right',
                                fontSize: 11,
                                bold: true                                
                            }
                        ],                                                
                        [
                            {
                                text: 'Salario Neto: ' + salarioNeto.toFixed(2),
                                alignment: 'right',
                                fontSize: 11,
                                bold: true                                
                            }
                        ],
                        /*
                        aguinaldoChk.value !== "false" ? [
                            {
                                text: 'Aguinaldo: ' + aguinaldo.toFixed(2),
                                alignment: 'right',
                                fontSize: 11,
                                bold: true                                
                            }
                        ] : ""
                        */                                               
                    ]
                }
            },
            { 
                alignment: 'center',
                text: 'Otras percepciones (Si corresponden) ',
                fontSize: 12,
                bold: true,
                margin: [0, 10],
            },
            { 
                alignment: 'right',
                text: vacacionesChk.value !== "false" ? 'VACACIONES: $' + pagoVacaciones.toFixed(2) : "",
                fontSize: 12,
                bold: true,
                margin: [0, 10],
            },
        ],
    };
    pdfMake.createPdf(docDefinition).open();
    window.location.reload()
}

function calcularAguinaldo() {
    if (!objetoUsuario.salarioConvenio) {
        Toastify({text: "No seleccionaste tu área, función o seniority", duration: 3000}).showToast();
    } else {
        //Desestructuración de objeto con los datos del usuario
        const {salarioConvenio, porcentajePresentismo, horasCincuenta, horasCien} = objetoUsuario; 

            
        //-----------Datos necesarios-------------//
        //Presentismo
        plusPresentismo = salarioConvenio * (porcentajePresentismo/100);
        //Cálculo de productividad
        productividad = salarioConvenio * 0.10;
        //Valor hora
        valorHora = salarioConvenio / 176
        //Calculo de horas extra al 50%
        pagoCincuenta = horasCincuenta * (valorHora / 2)
        //Cálculo de horas extra al 100%
        pagoCien = horasCien * valorHora

        //Cálculo de aguinaldo
        aguinaldo = (salarioConvenio + plusPresentismo + productividad + pagoCien + pagoCincuenta)/2
        Swal.fire(
            'Te corresponden percibir $' + aguinaldo.toFixed(2) +' por aguinaldo',
            '',
            'info'
        )
    }  
}

function calcularVacaciones() {
    if(!objetoUsuario.ingreso)
    {
        Toastify({text: "Te falta completar el campo del año de ingreso!", duration: 3000}).showToast();   
    }
    else if(!objetoUsuario.mes)
    {
        Toastify({text: "No seleccionaste el mes de ingreso!", duration: 3000}).showToast();   
    } else if (!objetoUsuario.salarioConvenio) {
        Toastify({text: "No seleccionaste tu área, función o seniority", duration: 3000}).showToast();
    }
    else
    {
        //Desestructuración de objeto con los datos del usuario
        const {ingreso, mes,salarioConvenio} = objetoUsuario; 
        //Fecha actual para recibo
        let hoy = new Date(); 
        let fechaRecibo = hoy.getFullYear()+'-'+(hoy.getMonth()+1)+'-'+hoy.getDate();

        //Cálculo de años de antiguedad
        fechaActual = new Date().getFullYear();
        antiguedad = fechaActual - ingreso;

        //Cálculo de días de vacaciones según ley
        if(antiguedad > 1 && antiguedad < 5)
        {
            vacaciones = 14;
        }
        else if (antiguedad >= 5 && antiguedad < 10)
        {
            vacaciones = 21;
        }
        else if (antiguedad >= 10 && antiguedad < 20)
        {
            vacaciones = 28;
        }
        else if (antiguedad >= 20)
        {
            vacaciones = 35;
        }
        // En caso que la antiguedad sea menor a 1 año hay que desdoblar el cálculo según la ley de contrato de trabajo indica en su artículo N°151
        else if(antiguedad == 0)
        {
            mesActual = new Date().getMonth() + 1;
            tiempo = mesActual - mes
            if(tiempo < 6) {
                vacaciones = tiempo
            } else {
                vacaciones = 14;
            }
        }
        else {
            vacaciones = "No es posible calcularlas."
        }
        pagoDia = salarioConvenio/22;
        pagoVacaciones = (pagoDia + pagoDia * 0.1 + pagoDia * 0.25) * vacaciones
        Swal.fire(
            'Te corresponden ' + vacaciones + ' días de vacaciones por ley $' + pagoVacaciones.toFixed(2),
            '',
            'info'
        )
    }
}