import { resultado } from './selectores.js';
export function BuscarClima(e){
    e.preventDefault();

    // validar formulario
    const ciudad = document.querySelector('#ciudad').value;
    const pais   = document.querySelector('#pais').value;

    if (ciudad === ''|| pais ==='') {
        //Error
        mostrarAlerta('todos los campos son obligatorio');
        return;
    }
    //consultar a la API
    consultarAPI(ciudad, pais);
 
}

function mostrarAlerta(mensaje) {
  const alerta = document.querySelector('.bg-red-100');
  if (!alerta) {
      
          //crear un alerta
          const divAlerta = document.createElement('div');
          divAlerta.classList.add('bg-red-100','border-red-400','text-red-700','px-5','mt-4','rounded',
          'max-w-md', 'mx-auto','mt-6','text-center');
          divAlerta.textContent= mensaje
         document.querySelector('.mostrarAlerta').appendChild(divAlerta)
      
          setTimeout( ()=>{
              divAlerta.remove()
          },3000);
  }
}

function consultarAPI(ciudad, pais) {
   
    const keyAPI = '61d8a379e63301ab8c640e3fb8fb695a';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${keyAPI}`;
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
             //limpiar html
                limpiarHTML();

            if (datos.cod === "404") {
                mostrarAlerta('Ciudad no encontrada');
                return;
            }
            // imprimir html
            mostrarHtml(datos);
        })
}
function mostrarHtml(datos) {
    const {main:{temp}}= datos;
    const centigrados = kelvinCentigrados(temp);
    const tempActual = document.createElement('p');
    tempActual.innerHTML = `${centigrados} &#8451`;
    tempActual.classList.add('font-bold','text-6xl');

    const tempDiv = document.createElement('div');
    tempDiv.classList.add('text-center', 'text-white');
    tempDiv.appendChild(tempActual);

    resultado.appendChild(tempDiv);
    
}
const  kelvinCentigrados = grado => parseInt(grado -273.15);

const limpiarHTML = () =>{
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}