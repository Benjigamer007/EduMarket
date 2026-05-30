const cursos = {
    1: {
        titulo: "Programación desde cero: HTML, CSS y JavaScript",
        descripcion: "Aprende a programar desde cero con HTML, CSS y JavaScript. Crea tus propios sitios web interactivos.",
        imagen: "https://images.pexels.com/photos/36571389/pexels-photo-36571389.jpeg",
        profesor: "Ana García",
        profesorImagen: "https://i.pinimg.com/1200x/da/84/d0/da84d096cbf0fb0c707d7d67483995ef.jpg",
        valoracion: "4.8 (3,421 valoraciones)",
        estudiantes: "8,920",
        precio: "$45.00"
    },
    2: {
        titulo: "React y TypeScript: Desarrollo Web Moderno",
        descripcion: "Domina React con TypeScript y construye aplicaciones web profesionales y escalables.",
        imagen: "https://images.pexels.com/photos/6424585/pexels-photo-6424585.jpeg",
        profesor: "Jose Peralta",
        profesorImagen: "https://i.pinimg.com/736x/6e/63/9f/6e639f47ecb930baeb9caa6c16fbbc93.jpg",
        valoracion: "4.9 (2,185 valoraciones)",
        estudiantes: "15,300",
        precio: "$70.00"
    },
    3: {
        titulo: "Python para Data Science y Machine Learning",
        descripcion: "Aprende análisis de datos y machine learning con Python. Desde pandas hasta modelos predictivos.",
        imagen: "https://i.pinimg.com/1200x/3d/4f/4b/3d4f4b7519fda9598a04dab9ea9b2450.jpg",
        profesor: "Agustin López",
        profesorImagen: "https://i.pinimg.com/1200x/4d/54/ec/4d54ec2ec2f1b7569520b58a57b0c9c4.jpg",
        valoracion: "4.7 (1,842 valoraciones)",
        estudiantes: "6,780",
        precio: "$60.00"
    },
    4: {
        titulo: "Diseño UX/UI: De Principiante a Profesional",
        descripcion: "Domina el diseño de interfaces y experiencias de usuario. Aprende Figma y metodologías UX.",
        imagen: "https://i.pinimg.com/1200x/c3/b8/82/c3b882d08c3b09751526b7587b11f857.jpg",
        profesor: "Hernan Rodriguez",
        profesorImagen: "https://i.pinimg.com/736x/a3/e3/6c/a3e36c27c8cd4931c4bec4c499fe90fa.jpg",
        valoracion: "4.6 (987 valoraciones)",
        estudiantes: "21,640",
        precio: "$20.00"
    },
    5: {
        titulo: "Node.js y Express: Backend con JavaScript",
        descripcion: "Construí APIs REST con Node.js y Express. Aprende backend desde cero.",
        imagen: "https://i.pinimg.com/1200x/0f/b6/c0/0fb6c0ba204db5947155007d4e4b9f15.jpg",
        profesor: "Joaquin Martínez",
        profesorImagen: "https://i.pinimg.com/736x/12/5b/6d/125b6d2998fe9bd52032a70a3ccceabc.jpg",
        valoracion: "4.9 (4,120 valoraciones)",
        estudiantes: "4,215",
        precio: "$30.00"
    },
    6: {
        titulo: "SQL y Bases de Datos desde Cero",
        descripcion: "Aprende SQL y diseño de bases de datos relacionales. PostgreSQL y MySQL incluidos.",
        imagen: "https://i.pinimg.com/736x/2f/00/e8/2f00e8df27343b70a7cda1d72e598f59.jpg",
        profesor: "Carlos Fernández",
        profesorImagen: "https://i.pinimg.com/736x/92/a7/04/92a704758c9f32611c82a55243b1f4b7.jpg",
        valoracion: "4.5 (756 valoraciones)",
        estudiantes: "10,870",
        precio: "$70.00"
    },
    7: {
        titulo: "Marketing Digital: Estrategias Completas 2026",
        descripcion: "Estrategias de marketing digital que funcionan en 2026. SEO, SEM, redes sociales y más.",
        imagen: "https://i.pinimg.com/736x/b9/71/50/b97150a4142f095f1723c4a118ab3363.jpg",
        profesor: "Maria Gonzalez",
        profesorImagen: "https://i.pinimg.com/1200x/04/d4/eb/04d4ebb097bcaf6b25252dc28da4a678.jpg",
        valoracion: "4.8 (1,309 valoraciones)",
        estudiantes: "3,950",
        precio: "$80.00"
    },
    8: {
        titulo: "Java Avanzado: Arquitectura y Microservicios",
        descripcion: "Dominá arquitecturas complejas con Java. Microservicios, patrones de diseño y más.",
        imagen: "https://i.pinimg.com/736x/f4/86/44/f486444ccba15c8956837af4c28155e1.jpg",
        profesor: "Esteban Ramirez",
        profesorImagen: "https://i.pinimg.com/736x/23/49/3a/23493ad5162d21c0b0bec4876bb75f44.jpg",
        valoracion: "3.9 (421 valoraciones)",
        estudiantes: "13,400",
        precio: "$75.00"
    }
}
function abrirPopup(id){
    const curso = cursos[id]
    document.getElementById('popup').classList.remove('hidden')
}

function cerrarPopup(){
    document.getElementById('popup').classList.add('hidden')
}


const popup = document.getElementById('popup')

function abrirPopup(){
    popup.classList.remove('hidden')

}

const popupCompra = document.getElementById('popup-compra')

function abrirPopupCompra(){
    popupCompra.classList.remove('hidden') 
    popup.classList.add('hidden')
}

function cerrarPopupCompra(){
    popupCompra.classList.add('hidden')
}

    

const buscador = document.getElementById('buscador')

buscador.addEventListener('input', function() {
    const texto = buscador.value.toLowerCase()
    
    const cards = document.querySelectorAll('main a')
    
    cards.forEach(function(card) {
        const titulo = card.querySelector('h3').textContent.toLowerCase()
        
        if (titulo.includes(texto)) {
            card.classList.remove('hidden')
        } else {
            card.classList.add('hidden')
        }
    })
})