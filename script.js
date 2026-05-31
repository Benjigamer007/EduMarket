const cursos = {
    1: {
        titulo: "Programación desde cero: HTML, CSS y JavaScript",
        descripcion: "Aprende a programar desde cero con HTML, CSS y JavaScript. Crea tus propios sitios web interactivos.",
        imagen: "https://images.pexels.com/photos/36571389/pexels-photo-36571389.jpeg",
        profesor: "Alonso Fernandez",
        profesorImagen: "https://i.pinimg.com/1200x/da/84/d0/da84d096cbf0fb0c707d7d67483995ef.jpg",
        valoracion: "4.8 (3,421 valoraciones)",
        estudiantes: "8,920",
        precio: "$45.00",
        aprendizajes: [
        "Fundamentos de HTML5 y estructura de páginas web",
        "Estilos avanzados con CSS3 y Flexbox/Grid",
        "JavaScript desde cero hasta nivel intermedio",
        "Crear proyectos reales y funcionales",
        "Buenas prácticas de desarrollo web",
        "Responsive design para móviles y tablets"
    ]
    },
    2: {
        titulo: "React y TypeScript: Desarrollo Web Moderno",
        descripcion: "Domina React con TypeScript y construye aplicaciones web profesionales y escalables.",
        imagen: "https://images.pexels.com/photos/6424585/pexels-photo-6424585.jpeg",
        profesor: "Jose Peralta",
        profesorImagen: "https://i.pinimg.com/736x/6e/63/9f/6e639f47ecb930baeb9caa6c16fbbc93.jpg",
        valoracion: "4.9 (2,185 valoraciones)",
        estudiantes: "15,300",
        precio: "$70.00",
        aprendizajes: [
        "React 18 con hooks y componentes funcionales",
        "TypeScript para código más seguro y mantenible",
        "State management con Context API y Zustand",
        "React Router para navegación",
        "Testing con Jest y React Testing Library",
        "Optimización de performance",
    ]
    },
    3: {
        titulo: "Python para Data Science y Machine Learning",
        descripcion: "Aprende análisis de datos y machine learning con Python. Desde pandas hasta modelos predictivos.",
        imagen: "https://i.pinimg.com/1200x/3d/4f/4b/3d4f4b7519fda9598a04dab9ea9b2450.jpg",
        profesor: "Bruno Camors",
        profesorImagen: "https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/685520387_1281564000755667_1883001310884950148_n.jpg?ccb=11-4&oh=01_Q5Aa4gEiC61Or2alSdkFZkUxfMfYHiN90bWzW9SSh2LA09gmtQ&oe=6A2353C0&_nc_sid=5e03e0&_nc_cat=101",
        valoracion: "4.7 (1,842 valoraciones)",
        estudiantes: "6,780",
        precio: "$60.00",
         aprendizajes: [
        "Python para análisis de datos",
        "Pandas, NumPy y Matplotlib",
        "Análisis estadístico avanzado",
        "Machine Learning con scikit-learn",
        "Visualización de datos",
        "Proyectos reales de ML",
    ]
    },
    4: {
        titulo: "Diseño UX/UI: De Principiante a Profesional",
        descripcion: "Domina el diseño de interfaces y experiencias de usuario. Aprende Figma y metodologías UX.",
        imagen: "https://i.pinimg.com/1200x/c3/b8/82/c3b882d08c3b09751526b7587b11f857.jpg",
        profesor: "Hernan Rodriguez",
        profesorImagen: "https://i.pinimg.com/736x/a3/e3/6c/a3e36c27c8cd4931c4bec4c499fe90fa.jpg",
        valoracion: "4.6 (987 valoraciones)",
        estudiantes: "21,640",
        precio: "$20.00",
         aprendizajes: [
        "Fundamentos de UX y UI",
        "Figma desde cero",
        "Research y testing de usuarios",
        "Design systems",
        "Prototipado interactivo",
        "Portfolio profesional",
    ]
    },
    5: {
        titulo: "Node.js y Express: Backend con JavaScript",
        descripcion: "Construí APIs REST con Node.js y Express. Aprende backend desde cero.",
        imagen: "https://i.pinimg.com/1200x/0f/b6/c0/0fb6c0ba204db5947155007d4e4b9f15.jpg",
        profesor: "Joaquin Martínez",
        profesorImagen: "https://i.pinimg.com/736x/12/5b/6d/125b6d2998fe9bd52032a70a3ccceabc.jpg",
        valoracion: "4.9 (4,120 valoraciones)",
        estudiantes: "4,215",
        precio: "$30.00",
        aprendizajes: [
        "Node.js y JavaScript del lado del servidor",
        "APIs REST con Express",
        "MongoDB y Mongoose",
        "Autenticación JWT",
        "Seguridad y mejores prácticas",
        "Deploy en producción",
    ]
    },
    6: {
        titulo: "SQL y Bases de Datos desde Cero",
        descripcion: "Aprende SQL y diseño de bases de datos relacionales. PostgreSQL y MySQL incluidos.",
        imagen: "https://i.pinimg.com/736x/2f/00/e8/2f00e8df27343b70a7cda1d72e598f59.jpg",
        profesor: "Carlos Fernández",
        profesorImagen: "https://i.pinimg.com/736x/92/a7/04/92a704758c9f32611c82a55243b1f4b7.jpg",
        valoracion: "4.5 (756 valoraciones)",
        estudiantes: "10,870",
        precio: "$70.00",
         aprendizajes: [
        "SQL desde cero",
        "Queries básicas y avanzadas",
        "Diseño de bases de datos",
        "Joins y subqueries",
        "Índices y optimización",
        "PostgreSQL y MySQL",
    ]
    },
    7: {
        titulo: "Marketing Digital: Estrategias Completas 2026",
        descripcion: "Estrategias de marketing digital que funcionan en 2026. SEO, SEM, redes sociales y más.",
        imagen: "https://i.pinimg.com/736x/b9/71/50/b97150a4142f095f1723c4a118ab3363.jpg",
        profesor: "Mario Gonzalez",
        profesorImagen: "https://i.pinimg.com/1200x/04/d4/eb/04d4ebb097bcaf6b25252dc28da4a678.jpg",
        valoracion: "4.8 (1,309 valoraciones)",
        estudiantes: "3,950",
        precio: "$80.00",
         aprendizajes: [
        "Estrategia digital completa",
        "SEO y SEM actualizados",
        "Social media marketing",
        "Email marketing efectivo",
        "Analytics y métricas",
        "Campañas publicitarias rentables",
    ]
    },
    8: {
        titulo: "Java Avanzado: Arquitectura y Microservicios",
        descripcion: "Dominá arquitecturas complejas con Java. Microservicios, patrones de diseño y más.",
        imagen: "https://i.pinimg.com/736x/f4/86/44/f486444ccba15c8956837af4c28155e1.jpg",
        profesor: "Esteban Ramirez",
        profesorImagen: "https://i.pinimg.com/736x/23/49/3a/23493ad5162d21c0b0bec4876bb75f44.jpg",
        valoracion: "3.9 (421 valoraciones)",
        estudiantes: "13,400",
        precio: "$75.00",
         aprendizajes: [
        "Spring Boot avanzado",
        "Arquitectura de microservicios",
        "Patrones de diseño enterprise",
        "Docker y Kubernetes",
        "Mensajería con Kafka",
        "Testing y CI/CD",
    ]
    }
}


function abrirPopup(id){
    const curso = cursos[id]
    document.getElementById('popup-imagen').src = curso.imagen
    document.getElementById('popup-titulo').innerText = curso.titulo
    document.getElementById('popup-descripcion').innerText = curso.descripcion
    document.getElementById('popup-profesor-imagen').src = curso.profesorImagen
    document.getElementById('popup-profesor').innerText = curso.profesor
    document.getElementById('popup-valoracion').innerText = '⭐ ' + curso.valoracion
    document.getElementById('popup-estudiantes').innerText = '👥  ' + curso.estudiantes 
    document.getElementById('popup-precio').innerText = 'Comprar ahora — ' + curso.precio
    const lista = document.getElementById('popup-lista')
    lista.innerHTML= ''
    curso.aprendizajes.forEach(aprendizajes => {
        lista.innerHTML += 
        `<li>✔ ${aprendizajes}</li>`
        
    })
    document.getElementById('popup').classList.remove('hidden')
}

function cerrarPopup(){
    document.getElementById('popup').classList.add('hidden')
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

buscador.addEventListener('input', function() { //escucha lo que el usuario escribe en el buscador
    const texto = buscador.value.toLowerCase() //convierte el texto a minusculas para que no haya problemas con mayusculas o minusculas al buscar
    
    const cards = document.querySelectorAll('main a') //selecciona todas las cards de los cursos, que son los enlaces dentro del main
    
    cards.forEach(function(card) { //recorre cada card para ver si el titulo del curso coincide con el texto buscado
        const titulo = card.querySelector('h3').textContent.toLowerCase() //selecciona el titulo de cada card, lo convierte a minusculas y lo guarda en la variable titulo
        
        if (titulo.includes(texto)) { //si el titulo de la card incluye el texto buscado, entonces se muestra la card, si no, se oculta
            card.classList.remove('hidden') 
        } else { 
            card.classList.add('hidden')
        }
    })
})

function confirmarCompra(){
    alert("Compra confirmada! Gracias por tu compra.")
    cerrarPopupCompra()
}