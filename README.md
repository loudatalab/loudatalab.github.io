# Lou DataLab

Portfolio de análisis de datos aplicados al fútbol, publicado con GitHub Pages en https://loudatalab.github.io

## Estructura
- `index.html`: página principal con las secciones Inicio, Proyectos y Contacto.
- `styles.css`: diseño y colores del sitio.
- `project.css`: estilos de las páginas de detalle de los proyectos.
- `script.js`: menú móvil y filtros de proyectos.
- `assets/`: logo e imágenes de los proyectos.
- `projects/`: una página por proyecto.

## Proyectos
1. [week_to_week_team_analysis](https://github.com/loudatalab/week_to_week_team_analysis): rendimiento jornada a jornada.
2. [RealZaragozaSummerSetup](https://github.com/loudatalab/RealZaragozaSummerSetup): propuesta de mercado de verano.
3. [FM_Data_Analysis](https://github.com/loudatalab/FM_Data_Analysis): scouting con datos de Football Manager.

## Añadir un proyecto
1. Duplica una página de `projects/` y cambia su contenido.
2. Añade un `<article class="project-row">` en la sección de proyectos de `index.html`. El atributo `data-tools` admite varias categorías separadas por comas, que deben coincidir con los botones de filtro.
3. Haz commit y push a `main`: GitHub Pages publica los cambios en uno o dos minutos.
