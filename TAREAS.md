# Tareas pendientes · modem-web

Lista de lo que queda por decidir o hacer en grupo antes (o después) de entregar.
Cuando terminéis una tarea, marcadla con `[x]`.

Estado a 23 de octubre de 2026 (rama `pulido-final`): **las 8 páginas están terminadas** y funcionan, sin errores en la consola, sin enlaces rotos, sin `href="#"` y sin desbordes a 1440, 1024, 768 y 375 px. Se pueden recorrer enteras con el teclado y el foco siempre se ve.

---

## 1. Enlaces reales

- [x] **Steam** de los 3 juegos y **Epic Games** de Alert of Rainfall (Risk of Rain 2), en `juegos.html`, `ficha-juego.html` y `trailer.html`.
- [x] **Epic Games de Beast Acquirer Savage y Nefarious Pedestrian 4**: quitados, porque esos juegos no están en Epic Games Store (comprobado el 21/10/2026).
- [x] **Redes del estudio** (X, Instagram y Facebook), en el header y el footer de las 8 páginas y en «Datos de contacto»: de momento llevan a la portada de cada red, en una pestaña nueva.
- [x] **Compartir la noticia** en `noticia.html` (`js/noticia.js`): X y Facebook con su enlace de compartir y la dirección de la página; en el móvil, el menú de compartir del sistema. Instagram no tiene enlace para compartir desde la web, así que en el ordenador copia la dirección y avisa.
- [x] **«← Entradas anteriores»** en `noticias.html`: desactivado (sin `href` y con `aria-disabled="true"`) hasta que haya más entradas.
- [ ] Cuando el estudio tenga perfiles propios en las redes, cambiar las portadas (`https://x.com`…) por los perfiles.

## 2. Vídeos de YouTube

En `js/trailer.js`, objeto `IDS_YOUTUBE`:

- [x] Tráiler principal: `a_wNFT4j6qI` («Monster Hunter Wilds - Launch Trailer», canal oficial «Monster Hunter»).
- [x] Los vídeos sin ID siguen en «Más vídeos». En el reproductor enseñan su portada con el aviso «Vídeo no disponible» y no tienen botón de play, así que no se carga nada.

No hay vídeo oficial (canal «Monster Hunter» o Capcom) de estos tres. Buscado el 22/10/2026; los detalles están en el TODO de cada uno.

- [ ] «¡NUEVA BESTIA! ¡Enfrentaos a Kezu!»: solo hay vídeos de fans.
- [ ] «¡Nueva dificultad! Adquirid monstruos aún más peligrosos»: solo hay resubidas de IGN y GameTrailers. Decidid si usáis una.
- [ ] «Resumen de la actualización (Ver.1.042.00.01 / Demo Version 1.0.1)»: solo hay vídeos de fans.

## 3. Textos

- [x] Erratas corregidas: «Intel®», «(VRAM 6 GB)», «pondrán a prueba», «monstruos», «¡» de apertura, «Kezu», «Cooperativo en línea» y la puntuación de las descripciones de Juegos.
- [x] Textos de relleno entre corchetes sustituidos por datos inventados: fecha de lanzamiento y precio (ficha), duraciones y descripciones de los vídeos (tráiler) y tamaño de cada demo (`data-tamano` en los botones «Descargar demo»).
- [ ] Solo hay ficha y tráiler de **Beast Acquirer Savage**: los botones «Ver ficha» y «Ver tráiler» de los otros dos juegos llevan a esas mismas páginas.

## 4. Diseño y accesibilidad

- [x] **Contraste de las etiquetas de género**: fondo «Fondo página» (#1d2d3e) en vez de «Caja de imagen». Acento sobre ese fondo: 5,08:1 (antes 4,13:1). **Hay que pasarlo a la guía de Figma.**
- [x] **Iconos de redes** en SVG dentro del enlace, con el color de la guía («Texto principal» y acento en hover y con el foco).
- [x] **Estados que no estaban en la guía** (decididos el 23/10/2026; **hay que pasarlos a Figma**): «Vídeo no disponible» del reproductor, enlace de texto desactivado (como el Disabled de los botones) y el aviso «Enlace copiado» de Compartir.
- [x] **Imagen del banner de Inicio**: cambiada por la de Steam de Silksong (1920 px, 233 KB). Ya no se ve borrosa.
- [x] Las 3 imágenes de más de 500 KB pasan a WebP (`beast-acquirer-savage`, `beast-galeria-2` y `beast-galeria-4`, todas por debajo de 400 KB). Todas las imágenes llevan `width`/`height` y, menos la principal de cada página, `loading="lazy"`.
- [x] En «Datos de contacto», el teléfono enlaza con `tel:+34666666666`.

## 5. Limpieza

- [x] Quitados los comentarios de instrucciones de `index.html`, `juegos.html`, `noticias.html` y `contacto.html` (y de sus CSS y JS). Quedan solo comentarios que explican cada bloque.
- [ ] Opcional: en `js/contacto.js` las variables `nome` y `mensaxe` están en gallego; la norma dice español (`nombre`, `mensaje`).
- [ ] Opcional: el «Paso 5» de `js/contacto.js` (quitar el error mientras se escribe) no está hecho.

## 6. Para entregar (jefe de grupo)

- [ ] Revisar la rama `pulido-final` y unirla a `main` con una Pull Request.
- [ ] En GitHub, **proteger `main`** (Settings → Branches → exigir Pull Request con aprobación), para que nadie suba directamente ni acepte sus propias PR.
- [ ] **Activar GitHub Pages** (Settings → Pages → rama `main`, carpeta `/ (root)`). La web quedará en <https://a26migueltv.github.io/modem-web/>. Ojo: los botones de compartir sin JavaScript llevan esa dirección.
- [ ] Último repaso en el navegador de cada uno: consola sin errores, móvil y teclado.
