import{formulario} from './selectores.js';
import{BuscarClima} from './funciones.js';

window.addEventListener('load',()=>{
    formulario.addEventListener('submit', BuscarClima);
});
