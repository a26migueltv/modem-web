# Tareas pendientes · modem-web

Lista de lo que queda por decidir o hacer en grupo antes (o después) de entregar.
Cuando terminéis una tarea, marcadla con `[x]`.

Estado a 22 de octubre de 2026: **las 8 páginas están terminadas** y funcionan, sin errores en la consola, sin enlaces rotos y sin desbordes a 1440, 1024, 768 y 375 px.

---

## 1. Enlaces reales (decisión del grupo)

Ahora llevan `href="#"` con un comentario `TODO (grupo)` encima. Buscad «TODO» en VS Code (Ctrl/Cmd + Shift + F) para encontrarlos todos.

- [x] **Steam** de los 3 juegos y **Epic Games** de Alert of Rainfall (Risk of Rain 2), en `juegos.html`, `ficha-juego.html` y `trailer.html`.
- [ ] **Epic Games de Beast Acquirer Savage (Monster Hunter Wilds) y Nefarious Pedestrian 4 (Resident Evil 4)**: esos juegos no están en Epic Games Store (comprobado el 21/10/2026). Decidid si se quitan esos botones o se dejan sin enlace.
- [ ] **Redes del estudio** (X, Instagram y Facebook). Están en el header y el footer de las 8 páginas y en «Datos de contacto» de `contacto.html`.
- [ ] **Compartir la noticia** (X, Instagram, Facebook) en `noticia.html`.
- [ ] **«← Entradas anteriores»** en `noticias.html`. Todavía no hay entradas anteriores: se puede quitar el enlace o dejarlo.

## 2. Vídeos de YouTube (decisión del grupo)

En `js/trailer.js`, objeto `IDS_YOUTUBE`:

- [x] Tráiler principal: `a_wNFT4j6qI` («Monster Hunter Wilds - Launch Trailer», canal oficial «Monster Hunter»).
No hay vídeo oficial (canal «Monster Hunter» o Capcom) de estos tres, así que siguen sin ID y sale «Vídeo no disponible». Buscado el 22/10/2026; los detalles están en el TODO de cada uno.

- [ ] «¡NUEVA BESTIA! ¡Enfrentaos a Kezu!»: solo hay vídeos de fans.
- [ ] «¡Nueva dificultad! Adquirid monstruos aún más peligrosos»: solo hay resubidas de IGN y GameTrailers. Decidid si usáis una.
- [ ] «Resumen de la actualización (Ver.1.042.00.01 / Demo Version 1.0.1)»: solo hay vídeos de fans.

## 3. Textos que vienen así de Figma

- [x] Erratas corregidas: «Intel®», «(VRAM 6 GB)», «pondrán a prueba», «monstruos», «¡» de apertura, «Kezu», «Cooperativo en línea» y la puntuación de las descripciones de Juegos.
- [ ] Textos de relleno entre corchetes: fecha de lanzamiento `[8 de marzo de 2022]` y precio `[39,99 €]` (ficha), duraciones de los vídeos `[2:12]`…, tamaño de la demo `[000 MB]` (modal) y la descripción `[Descripción del vídeo]` de los vídeos de «Más vídeos».
- [ ] Solo hay ficha y tráiler de **Beast Acquirer Savage**: los botones «Ver ficha» y «Ver tráiler» de los otros dos juegos llevan a esas mismas páginas.

## 4. Diseño (para hablar en grupo)

- [ ] **Contraste de las etiquetas de género** (texto de acento sobre «Caja de imagen»): 4,13:1, por debajo del 4,5:1 de la norma. Así está en la guía de Figma.
- [x] **Imagen del banner de Inicio**: cambiada por la de Steam de Silksong (1920 px, 233 KB). Ya no se ve borrosa.
- [ ] Opcional: 3 imágenes pasan un poco de 500 KB (`beast-galeria-2.jpg`, `beast-galeria-4.jpg`, `beast-acquirer-savage.jpg`).
- [ ] Opcional: en «Datos de contacto», el teléfono se podría enlazar con `tel:666666666`, como el email con `mailto:`.

## 5. Limpieza (opcional, cada uno en su página)

- [ ] Los comentarios largos de instrucciones de `index.html`, `juegos.html`, `noticias.html` y `contacto.html` («PÁGINA PARA MONTAR POR…», textos de Figma, estructura propuesta) ya no hacen falta. Se pueden borrar o resumir. En tres de ellos sigue el hueco del nombre sin rellenar.

## 6. Para entregar (jefe de grupo)

- [ ] En GitHub, **proteger `main`** (Settings → Branches → exigir Pull Request con aprobación), para que nadie suba directamente ni se acepte sus propias PR.
- [ ] **Activar GitHub Pages** (Settings → Pages → rama `main`, carpeta `/ (root)`). La web quedará en <https://a26migueltv.github.io/modem-web/>.
- [ ] Último repaso en el navegador de cada uno: consola sin errores, móvil y teclado.
