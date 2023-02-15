import { tarjetaProyecto } from "./creacion-tarjetas.js"
import { proyectos, habilidades } from "./proyectos-habilidades.js"

const lista_proyectos = document.querySelector('.tarjetas-proyectos')

proyectos.forEach(proyecto => {
    const tarjeta = tarjetaProyecto(proyecto)
    lista_proyectos.appendChild(tarjeta)
})