# Tareas pendientes · modem-web

Lista de lo que queda por decidir o hacer en grupo antes (o después) de entregar.
Cuando terminéis una tarea, marcadla con `[x]`.

Estado a 21 de octubre de 2026: **las 8 páginas están terminadas** y funcionan, sin errores en la consola, sin enlaces rotos y sin desbordes en escritorio, tablet (1024 y 768 px) ni móvil.

---

## 1. Enlaces reales (decisión del grupo)

Ahora llevan `href="#"` con un comentario `TODO (grupo)` encima. Buscad «TODO» en VS Code (Ctrl/Cmd + Shift + F) para encontrarlos todos.

- [ ] **Steam y Epic Games** de los 3 juegos. Están en `juegos.html` (3 tarjetas), `ficha-juego.html` y `trailer.html`.
- [ ] **Redes del estudio** (X, Instagram y Facebook). Están en el header y el footer de las 8 páginas y en «Datos de contacto» de `contacto.html`.
- [ ] **Compartir la noticia** (X, Instagram, Facebook) en `noticia.html`.
- [ ] **«← Entradas anteriores»** en `noticias.html`. Todavía no hay entradas anteriores: se puede quitar el enlace o dejarlo.

## 2. Vídeos de YouTube (decisión del grupo)

En `js/trailer.js`, objeto `IDS_YOUTUBE`:

- [x] Tráiler principal: `a_wNFT4j6qI` («Monster Hunter Wilds - Launch Trailer», canal oficial «Monster Hunter»).
- [ ] «NUEVA BESTIA! Enfrentaos a kezu!»: sin ID (sale «Vídeo no disponible»).
- [ ] «Nueva dificultad! Adquirid mounstruos aún más peligrosos»: sin ID.
- [ ] «Resumen de la actualización (Ver.1.042.00.01 / Demo Version 1.0.1)»: sin ID.

## 3. Textos que vienen así de Figma (decidid si se corrigen)

No se han tocado porque son contenido de los juegos.

- [ ] Erratas: «**ntel**® Core™ i5-12400» (requisitos recomendados de la ficha), «nuevos escenarios y encuentros que **podrán** a prueba» (noticia abierta) y «**mounstruos**» (título de un vídeo del tráiler).
- [ ] Textos de relleno entre corchetes: fecha de lanzamiento `[8 de marzo de 2022]` y precio `[39,99 €]` (ficha), duraciones de los vídeos `[2:12]`…, tamaño de la demo `[000 MB]` (modal) y la descripción `[Descripción del vídeo]` de los vídeos de «Más vídeos».
- [ ] Solo hay ficha y tráiler de **Beast Acquirer Savage**: los botones «Ver ficha» y «Ver tráiler» de los otros dos juegos llevan a esas mismas páginas.

## 4. Diseño (para hablar en grupo)

- [ ] **Contraste de las etiquetas de género** (texto de acento sobre «Caja de imagen»): 4,13:1, por debajo del 4,5:1 de la norma. Así está en la guía de Figma.
- [ ] **Imagen del banner de Inicio**: en Figma mide 850 px de ancho y a pantalla completa se ve algo borrosa. Si encontráis una más grande, cambiad `img/juegos/banner-inicio.jpg`.
- [ ] Opcional: 3 imágenes pasan un poco de 500 KB (`beast-galeria-2.jpg`, `beast-galeria-4.jpg`, `beast-acquirer-savage.jpg`).
- [ ] Opcional: en «Datos de contacto», el teléfono se podría enlazar con `tel:666666666`, como el email con `mailto:`.

## 5. Limpieza (opcional, cada uno en su página)

- [ ] Los comentarios largos de instrucciones de `index.html`, `juegos.html`, `noticias.html` y `contacto.html` («PÁGINA PARA MONTAR POR…», textos de Figma, estructura propuesta) ya no hacen falta. Se pueden borrar o resumir. En tres de ellos sigue el hueco del nombre sin rellenar.

## 6. Para entregar (jefe de grupo)

- [ ] En GitHub, **proteger `main`** (Settings → Branches → exigir Pull Request con aprobación), para que nadie suba directamente ni se acepte sus propias PR.
- [ ] **Activar GitHub Pages** (Settings → Pages → rama `main`, carpeta `/ (root)`). La web quedará en <https://a26migueltv.github.io/modem-web/>.
- [ ] Último repaso en el navegador de cada uno: consola sin errores, móvil y teclado.
