# CLAUDE.md — web de modem (DIW UD2, grupo 2)

Instrucciones para cualquier IA que trabaje en este repositorio. Léelas antes de tocar nada.

## Qué es
Web del estudio indie "modem", pasada a código desde Figma
(https://www.figma.com/design/JBCWAqYXO3YtL32SiMftgg, páginas "Guía de estilo" y "01 · Pantallas").
Solo HTML, CSS y JavaScript vanilla. Prohibido usar frameworks o librerías (solo Google Fonts: Press Start 2P e Inter).

## Reparto: toca SOLO los archivos de la página de la persona que te lo pide
| Página | Archivos permitidos |
|---|---|
| Inicio | index.html, css/pages/inicio.css |
| Juegos | juegos.html, css/pages/juegos.css |
| Noticias | noticias.html, css/pages/noticias.css, js/noticias.js |
| Contacto | contacto.html, css/pages/contacto.css, js/contacto.js |

NO modifiques nunca (son la base común; si hace falta un cambio, proponlo y que lo decida el jefe de grupo):
css/base.css, css/components.css, css/componentes-catalogo.css, js/main.js, js/modal-demo.js,
js/catalogo.js, componentes.html, ficha-juego.html, trailer.html, noticia.html (y sus CSS/JS),
el <head>, el header y el footer de cualquier página, img/, README.md y este archivo.

## Normas del código
- Usa los componentes de componentes.html con sus clases tal cual. No crees componentes nuevos si ya existe uno.
- Colores, fuentes, tamaños y espaciados SIEMPRE con las variables de css/base.css. Nunca colores sueltos. Paleta cerrada: no añadas colores.
- En css/pages/<pagina>.css solo maquetación (layout) de esa página; no reestiles componentes.
- Nada de estilos en línea (style="...") salvo el ancho de .barra-progreso__relleno desde JS.
- BEM en español, minúsculas, con guiones, sin tildes ni ñ. Clases de página con prefijo del bloque (.banner, .juegos__lista, .noticias, .contacto__columnas).
- HTML semántico, un solo h1 por página, alt en todas las imágenes, botones para acciones y enlaces para navegar.
- Foco visible siempre (no quites outline). Contraste mínimo 4,5:1.
- Responsive con @media (max-width: 1023px) y (max-width: 767px).
- JS: const/let, addEventListener, dataset, atributo hidden. Sin errores en consola.
- "Descargar demo": basta con data-demo="Nombre" (+ data-plataformas opcional); js/modal-demo.js hace el resto.
- No cambies textos, nombres ni imágenes de los juegos sin que lo pida el grupo. Los textos entre corchetes son relleno.
- Comentarios claros en español: el código lo leen compañeros que están aprendiendo.

## Git
- Cada persona trabaja en su rama (pagina-inicio, pagina-juegos, pagina-noticias, pagina-contacto). Nunca en main.
- Commits pequeños con mensajes "Página: qué se ha hecho". Se une a main por Pull Request; la acepta el jefe de grupo.
- No hagas commit, push ni merge sin que la persona lo pida.
