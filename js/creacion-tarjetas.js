
// Recibe un parametro de tipo objeto con los detalles del proyecto y crea la tarjeta en base a eso
export function tarjetaProyecto(proyecto) {
    const tarjeta_pro = document.createElement('div')
    tarjeta_pro.classList.add('tarjeta-pro')

    const titulo_pro = document.createElement('h1')
    titulo_pro.classList.add('titulo-pro')
    titulo_pro.innerHTML = proyecto.titulo

    tarjeta_pro.appendChild(titulo_pro)
    
    const imagen_pro = document.createElement('img')
    const src = proyecto.imagen.src
    const alt = proyecto.imagen.alt
    imagen_pro.setAttribute('src', src)
    imagen_pro.setAttribute('alt', alt)
    
    tarjeta_pro.appendChild(imagen_pro)
    
    const desc_pro = document.createElement('p')
    desc_pro.classList.add('desc-pro')
    desc_pro.innerHTML = proyecto.descripcion
    
    tarjeta_pro.appendChild(desc_pro)
    
    const linea = document.createElement('hr')
    
    tarjeta_pro.appendChild(linea)
    
    const tec_used = document.createElement('div')
    tec_used.classList.add('tec-used')
    proyecto.tecnologias.forEach(tec => {
        const tecno = document.createElement('span')
        tecno.classList.add(tec)
        
        tec_used.appendChild(tecno)
    })
    
    tarjeta_pro.appendChild(tec_used)
    
    const linea2 = document.createElement('hr')
    
    tarjeta_pro.appendChild(linea2)
    
    const enlaces_pro = document.createElement('nav')
    enlaces_pro.classList.add('enlaces-pro')
    const enlaces = [proyecto.enlaces.repositorio, proyecto.enlaces.despliegue]
    enlaces.forEach(enlace => {
        const btn_enlace = document.createElement('a')
        btn_enlace.classList.add('btn')
        btn_enlace.setAttribute('target', '_blank')
        btn_enlace.setAttribute('href', enlace)
        btn_enlace.innerHTML = "enlace"
        
        enlaces_pro.appendChild(btn_enlace)
    })
    
    tarjeta_pro.appendChild(enlaces_pro)

    return tarjeta_pro
}

