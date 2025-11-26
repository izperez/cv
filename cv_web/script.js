// Función para descargar PDF
document.getElementById('descargar-pdf').addEventListener('click', function() {
    alert('Funcionalidad de descarga PDF. En una implementación real, usarías una librería como html2pdf.js');
    // En una implementación real, podrías usar:
    // html2pdf().from(document.querySelector('main')).save('cv-nombre-apellido.pdf');
});

// Función para manejar el envío del formulario de contacto
document.getElementById('contacto-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener los valores del formulario
    const nombre = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const mensaje = this.querySelector('textarea').value;
    
    // Aquí iría la lógica para enviar el formulario (por ejemplo, a un servidor)
    console.log('Formulario enviado:', { nombre, email, mensaje });
    
    // Mostrar mensaje de confirmación
    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
    
    // Reiniciar el formulario
    this.reset();
});

// Función para suavizar el desplazamiento al hacer clic en los enlaces de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 80, // Ajustar para el header fijo
            behavior: 'smooth'
        });
    });
});

// Función para cambiar el estilo del header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        header.style.padding = '0.5rem 0';
    } else {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        header.style.padding = '1rem';
    }
});

// Función para mostrar animaciones al hacer scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('section');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Añadir estilos iniciales para la animación
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Añadir listener para la animación al hacer scroll
window.addEventListener('scroll', animateOnScroll);

// Ejecutar la animación al cargar la página
window.addEventListener('load', animateOnScroll);