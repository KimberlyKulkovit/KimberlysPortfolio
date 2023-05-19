	// Function to change the language to Spanish
    function translateToSpanish() {
        // Update the content of specific HTML elements with their Spanish translations
        document.getElementById('intro').innerText = 'Hola! Soy Kimberly, su proxima ingeniera de software, registrese para una cita hoy';
        document.getElementById('aboutMe').innerText = 'Sobre mi';
        document.getElementById('p1').innerText = 'Anteriormente, fui defensor y educador en conservación del agua, pero mi pasión por la escritura de código me ha llevado a crear y desarrollar proyectos para pequeñas empresas. En mi tiempo libre, me encontrarás cultivando un jardín, escribiendo cuentos cortos y jugando videojuegos acogedores. Si hay un problema que no se pueda resolver, buscaré una solución alternativa. Me apasiona el medio ambiente, impulsar a mis pequeñas empresas locales y promover una comunidad inclusiva y neurodiversa en el espacio tecnológico'
        document.getElementById('myServices').innerText = 'Mis Servicios';
        document.getElementById('consultation').innerText = 'Consultoría: Comenzaremos con una conversación rápida para discutir tu visión y el proyecto que deseas.'
        document.getElementById('proposal').innerText = 'Propuesta: Se presentará una propuesta detallada del proyecto con un plan de acción completo basado en tu presupuesto.'
        document.getElementById('development').innerText = 'Desarrollo: Todos los clientes recibirán actualizaciones regulares los miércoles y viernes sobre el estado del proyecto para mostrar total transparencia.'
        document.getElementById('launch').innerText = 'Lanzamiento y Soporte: El proyecto se completa y se proporcionará soporte adicional si así lo deseas.'
        document.getElementById('recentWork').innerText = 'Trabajos Recientes'
        document.getElementById('hairSalon').innerText = 'Salón de Peluquería'
        document.getElementById('p2').innerText = 'Uno de mis primeros proyectos. Este sitio web representa un sitio web profesional para un negocio de salón de peluquería.'
        document.getElementById('inTouch').innerText = '¡Contáctanos | ¡Haz una cita!'
        document.getElementById('p3').innerText = 'Actualmente estoy aceptando nuevos clientes freelance y oportunidades interesantes de proyectos.'

        // Add more translations for other elements as needed
        
        // Optionally, you can also update the language attribute of the HTML tag
        document.documentElement.lang = 'es';
      }