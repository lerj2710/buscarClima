
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
        .then(rulstado => console.log(rulstado))
}