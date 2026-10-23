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
- No cambies textos, nombres ni imágenes de los juegos sin que lo pida el grupo.
- Comentarios claros en español: el código lo leen compañeros que están aprendiendo.

## Decisiones tomadas por el grupo
Respétalas. Si algo de esto cambia, lo decide el jefe de grupo y se actualiza aquí.

- **Juegos reales detrás de los nombres de Figma** (de ahí salen los enlaces de tienda y los vídeos):
  | Nombre en la web | Juego real | Steam | Epic Games |
  |---|---|---|---|
  | Beast Acquirer Savage | Monster Hunter Wilds | https://store.steampowered.com/app/2246340/ | No está |
  | Nefarious Pedestrian 4 | Resident Evil 4 (remake de 2023) | https://store.steampowered.com/app/2050650/ | No está |
  | Alert of Rainfall | Risk of Rain 2 | https://store.steampowered.com/app/632360/ | https://store.epicgames.com/es-ES/p/risk-of-rain-2 |
- **Enlaces de tienda**: solo enlaces comprobados, con `target="_blank" rel="noopener"` y el texto oculto
  `<span class="visualmente-oculto"> (se abre en una pestaña nueva)</span>`.
- **Si un juego no está en una tienda** (Steam o Epic): NO te inventes el enlace. Se quita ese botón
  (decidido el 23/10/2026). No debe quedar ningún `href="#"` en la web.
- **Redes del estudio**: de momento enlazan a la portada de cada red (https://x.com, https://www.instagram.com,
  https://www.facebook.com) con `target="_blank" rel="noopener"`. Los iconos son `<svg class="icono icono--16 ...">`
  dentro del enlace, en «Texto principal» y acento en hover y foco, como en la guía (no hay blanco en la paleta).
- **Iconos y logo**: siempre `<svg>` escrito en el HTML (clase `icono icono--<tamaño> icono--<nombre>`, y
  `icono--relleno` en Steam y Epic), copiado de componentes.html. Nada de `mask-image` ni imágenes de fondo:
  no se ven al abrir la página con doble clic (file://).
- **Enlace desactivado** (p. ej. «← Entradas anteriores» mientras no haya más entradas): sin `href` y con
  `aria-disabled="true"`; se ve como el Disabled de los botones.
- **Vídeos de YouTube** (`IDS_YOUTUBE` en js/trailer.js): solo del canal oficial del juego o de su editora
  (por ejemplo «Monster Hunter» o Capcom). Si no se puede comprobar, el ID se queda vacío ("") con su TODO
  y el reproductor enseña «Vídeo no disponible». NO te inventes IDs. Las resubidas de medios (IGN, GameTrailers)
  no cuentan como oficiales salvo que el grupo lo decida. Los vídeos sin ID siguen en «Más vídeos»: en el
  reproductor enseñan la portada con el velo y el aviso, sin play ni controles.
- **Banner de Inicio**: img/juegos/banner-inicio.jpg es la imagen de Steam de Hollow Knight: Silksong
  (library_hero, 1920 × 620 px), porque la de Figma solo medía 850 px y se veía borrosa.
- **Imágenes**: JPG o WebP de 500 KB como máximo, con `width`/`height` y `loading="lazy"` (menos la principal de cada página).
- **Etiqueta de género**: fondo «Fondo página» para llegar a 5,08:1 (en la guía, «Caja de imagen» daba 4,13:1).
- **Erratas de Figma**: se corrigen en la web (ya está hecho). Los textos entre corchetes ya se han cambiado por
  datos inventados (fecha y precio —19,99 €— de la ficha, duraciones y descripciones de los vídeos, `data-tamano` de las demos).
- **Lista de pendientes**: TAREAS.md. Cuando se cierre algo, se marca con [x] allí.

## Git
- Cada persona trabaja en su rama (pagina-inicio, pagina-juegos, pagina-noticias, pagina-contacto). Nunca en main.
- Commits pequeños con mensajes "Página: qué se ha hecho". Se une a main por Pull Request; la acepta el jefe de grupo.
- No hagas commit, push ni merge sin que la persona lo pida.
- Sin firmas de IA: no añadas la línea «Co-Authored-By» en los commits ni «🤖 Generated with Claude Code»
  (ni nada parecido) en las Pull Requests.
