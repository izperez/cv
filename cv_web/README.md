# Mi CV Web

Este es un currículum vitae interactivo y responsive construido con HTML, CSS y JavaScript. Incluye todas las secciones esenciales de un CV tradicional con funcionalidades modernas.

## Características

- **Diseño responsive**: Se adapta a dispositivos móviles, tablets y desktop
- **Navegación suave**: Desplazamiento suave entre secciones
- **Animaciones al hacer scroll**: Efectos visuales al desplazarse por la página
- **Formulario de contacto**: Con validación de campos
- **Botón para descargar PDF**: (Funcionalidad preparada para integrar con html2pdf.js)
- **Diseño moderno**: Uso de variables CSS y estilos contemporáneos

## Estructura del proyecto

```
cv_web/
├── index.html          # Página principal con la estructura del CV
├── styles.css          # Hoja de estilos con diseño responsive
├── script.js           # Funcionalidades JavaScript
└── README.md           # Documentación del proyecto
```

## Personalización

Para personalizar este CV con tu información:

1. **index.html**: Reemplaza el contenido de ejemplo con tu información personal
2. **styles.css**: Ajusta colores, tipografía y estilos según tu preferencia
3. **script.js**: Modifica funcionalidades o añade nuevas características

## Secciones del CV

- Inicio: Nombre, puesto y descripción breve
- Sobre Mí: Perfil profesional detallado
- Experiencia Laboral: Historial de trabajos
- Educación: Formación académica
- Habilidades: Competencias técnicas y blandas
- Proyectos: Trabajos o proyectos relevantes
- Contacto: Formulario para contactarte

## Implementación de PDF

Para habilitar la funcionalidad de descarga PDF real:

1. Añade la librería html2pdf.js en el HTML:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
```

2. Descomenta y ajusta la línea en script.js:
```javascript
// html2pdf().from(document.querySelector('main')).save('cv-nombre-apellido.pdf');
```

## Despliegue

Puedes alojar este CV web en servicios como:

- GitHub Pages
- Netlify
- Vercel
- Cualquier servidor web estático

## Licencia

Este proyecto es de código abierto y puede ser utilizado y modificado libremente.