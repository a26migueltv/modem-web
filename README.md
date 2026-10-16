# modem · web del estudio

Web del estudio de videojuegos independiente **modem**. Es el proyecto de grupo de **DIW (UD2)**, grupo 2, del IES San Clemente.

La web está diseñada en Figma (archivo «DIW Grupo 2 · Guía de estilo») y el profe ya dio el visto bueno. Aquí la pasamos a código **solo con HTML, CSS y JavaScript**: sin frameworks ni librerías (lo único externo son las fuentes de Google).

- Figma: <https://www.figma.com/design/JBCWAqYXO3YtL32SiMftgg>
- Repositorio: <https://github.com/a26migueltv/modem-web>
- Web publicada (cuando activemos GitHub Pages): <https://a26migueltv.github.io/modem-web/>

---

## Índice

1. [Cómo abrir el proyecto](#1-cómo-abrir-el-proyecto)
2. [Estructura de carpetas](#2-estructura-de-carpetas)
3. [Reparto del trabajo](#3-reparto-del-trabajo)
4. [Cómo montar tu página, paso a paso](#4-cómo-montar-tu-página-paso-a-paso)
5. [Git desde cero](#5-git-desde-cero)
6. [Normas del código](#6-normas-del-código)

---

## 1. Cómo abrir el proyecto

Necesitas **Visual Studio Code** y su extensión **Live Server**.

1. Instala VS Code: <https://code.visualstudio.com/>
2. Abre VS Code → icono de extensiones (los cuatro cuadraditos de la izquierda) → busca **Live Server** (de Ritwick Dey) → **Install**.
3. Descarga el proyecto con Git (lo explicamos en el [apartado 5](#5-git-desde-cero)).
4. En VS Code: **File → Open Folder…** y elige la carpeta `modem-web`.
5. Abre cualquier `.html` y pulsa **Go Live** (abajo a la derecha). Se abre la web en el navegador y se recarga sola cada vez que guardas.

> ¿Por qué Live Server y no abrir el archivo con doble clic? Con doble clic algunas cosas (como las fuentes o los iconos) pueden fallar. Con Live Server la web funciona como si estuviera en internet.

---

## 2. Estructura de carpetas

```
modem-web/
├── index.html            ← Inicio            (para el grupo)
├── juegos.html           ← Juegos            (para el grupo)
├── noticias.html         ← Noticias          (para el grupo)
├── contacto.html         ← Contacto          (para el grupo)
├── ficha-juego.html      ← Ficha de juego    (ya hecha)
├── trailer.html          ← Tráiler           (ya hecha)
├── noticia.html          ← Noticia abierta   (ya hecha)
├── componentes.html      ← CATÁLOGO de componentes: tu herramienta principal
│
├── css/
│   ├── base.css                 ← variables (colores, fuentes, espacios), reset y tipografía
│   ├── components.css           ← TODOS los componentes de la guía de estilo
│   ├── componentes-catalogo.css ← solo para componentes.html
│   └── pages/                   ← un CSS por página, solo con su maquetación
│       ├── inicio.css  juegos.css  noticias.css  contacto.css   (para el grupo)
│       └── ficha-juego.css  trailer.css  noticia.css            (ya hechos)
│
├── js/
│   ├── main.js          ← común a todas: menú hamburguesa y página activa
│   ├── modal-demo.js    ← modal «Descargar demo» (sirve para cualquier página)
│   ├── noticias.js      ← filtro de noticias        (para el grupo: pasos explicados)
│   ├── contacto.js      ← validación del formulario (para el grupo: pasos explicados)
│   ├── ficha-juego.js   ← galería de la ficha       (ya hecho)
│   ├── trailer.js       ← vídeos del tráiler        (ya hecho)
│   └── catalogo.js      ← solo para componentes.html
│
├── img/
│   ├── iconos/     ← iconos SVG (redes, tiendas, reproductor...)
│   ├── logo/       ← icono del logo de modem
│   ├── juegos/     ← imágenes de los juegos
│   └── noticias/   ← imágenes de las noticias
│
├── README.md       ← este archivo
└── CLAUDE.md       ← normas para la IA (si usáis Claude u otra IA, que lo lea)
```

---

## 3. Reparto del trabajo

Cada uno monta **una página principal**. Rellenad la columna «Responsable».

| Página | Archivos que tocas (y solo estos) | Lleva JavaScript | Responsable |
|---|---|---|---|
| Inicio | `index.html` · `css/pages/inicio.css` | No (el botón de la demo ya funciona con `data-demo`) | |
| Juegos | `juegos.html` · `css/pages/juegos.css` | No (los botones de la demo ya funcionan con `data-demo`) | |
| Noticias | `noticias.html` · `css/pages/noticias.css` · `js/noticias.js` | Sí: filtrar por categoría | |
| Contacto | `contacto.html` · `css/pages/contacto.css` · `js/contacto.js` | Sí: validar el formulario | |

### Lo que ya está hecho (la base)

- **Base y componentes**: variables sacadas de Figma (colores, fuentes, tamaños, espaciados, bordes), reset, tipografía y **todos** los componentes de la guía con sus estados (`css/base.css` y `css/components.css`).
- **Catálogo** (`componentes.html`): cada componente con un ejemplo y su código para copiar.
- **Header y footer** en todas las páginas, con menú hamburguesa en móvil y la página actual marcada sola.
- **Páginas de detalle completas**: ficha de juego (con galería), tráiler (con «Más vídeos» y vídeo de YouTube) y noticia abierta.
- **Modal «Descargar demo»**: funciona en cualquier página con poner `data-demo="Nombre del juego"` en el botón.
- **Esqueletos de vuestras páginas**: el `<head>` completo, el header y el footer, y una sección vacía por cada bloque de Figma con un comentario que explica qué va, qué componentes usar, qué clases y todos los textos e imágenes.
- **Responsive**: los componentes ya se adaptan a tablet (hasta 1023 px) y móvil (hasta 767 px).

---

## 4. Cómo montar tu página, paso a paso

1. **Prepara Git** (apartado 5): `git checkout main`, `git pull` y crea tu rama.
2. **Abre tu HTML** en VS Code y lánzalo con Live Server. Verás el header, el footer y nada en medio: es normal.
3. **Lee los comentarios** de tu HTML. Cada `<section>` vacía tiene encima un comentario con:
   - qué va en ese bloque,
   - qué componentes usar,
   - qué etiquetas y clases poner,
   - los textos, las imágenes (con su `alt`) y los enlaces exactos,
   - y una estructura propuesta.
4. **Mira tu pantalla en Figma** («01 · Pantallas» → `<Tu página> · Escritorio`). Usa el modo **Dev** (arriba a la derecha) para ver medidas y separaciones.
5. **Abre `componentes.html`** en el navegador, busca el componente, pulsa **«Copiar código»** y pégalo dentro de tu `<section>`. Cambia textos, imágenes y enlaces. **No cambies las clases**.
6. **Haz tu CSS** en `css/pages/<tu-pagina>.css`. Allí tienes explicado qué maquetar y con qué propiedades. Solo la colocación de los bloques: los componentes ya tienen su estilo.
7. **Haz tu JS** (solo Noticias y Contacto) siguiendo los pasos de `js/<tu-pagina>.js`.
8. **Comprueba**:
   - En escritorio, tablet y móvil: F12 → icono del móvil (arriba a la izquierda de las herramientas) → prueba anchos de 1440, 800 y 375.
   - Que no haya barra de desplazamiento horizontal.
   - La consola (F12 → **Consola**): ningún error rojo.
   - Con el teclado: recorre la página con **Tab** y comprueba que siempre se ve dónde estás.
9. **Guarda y sube** (apartado 5): `git add`, `git commit`, `git push` y abre la **Pull Request**.

---

## 5. Git desde cero

Git guarda el historial de los cambios del proyecto y nos deja trabajar a la vez sin pisarnos. **GitHub** es la web donde está el proyecto en internet.

Idea clave: **cada uno trabaja en su propia «rama»** (una copia paralela del proyecto). Cuando su página está lista, pide que se una a la rama principal (`main`) con una **Pull Request**. El jefe de grupo la revisa y la acepta.

```
main           ●────────●─────────────●──────  (la versión buena, la que se publica)
                \                    /
pagina-noticias  ●───●───●───●──────●          (tu rama: aquí trabajas tú)
```

### 5.1 Antes de empezar (solo una vez)

1. **Cuenta de GitHub**: créala en <https://github.com> si no la tienes y pásale tu usuario al jefe de grupo.
2. **Acepta la invitación** al repositorio: te llega un email de GitHub (o mira en <https://github.com/notifications>). Sin aceptarla no podrás subir nada.
3. **Instala Git**:
   - Windows: <https://git-scm.com/download/win> (deja todas las opciones por defecto).
   - Mac: abre la Terminal y escribe `git --version`; si no lo tienes, te ofrecerá instalarlo.
   - Comprueba que funciona: `git --version` tiene que mostrar un número de versión.
4. **Dile a Git quién eres** (con el mismo email de tu cuenta de GitHub):
   ```bash
   git config --global user.name "Tu Nombre"
   git config --global user.email "tu-email@ejemplo.com"
   ```
5. **Inicia sesión**: la primera vez que hagas `git push`, Git te pedirá entrar en GitHub (se abre el navegador). Si te pide una contraseña en la terminal, no vale la de tu cuenta: crea un *token* en GitHub → Settings → Developer settings → Personal access tokens, o usa GitHub Desktop, que lo hace solo.

> **Alternativa con botones: GitHub Desktop.** Si la terminal te da miedo, instala <https://desktop.github.com/> e inicia sesión con tu cuenta. Al final de este apartado tienes las mismas operaciones con GitHub Desktop.

Los comandos de abajo se escriben en una **terminal**. En VS Code: menú **Terminal → New Terminal** (se abre ya en la carpeta del proyecto).

### 5.2 La primera vez: descargar el proyecto (`git clone`)

Ve a la carpeta donde quieras guardar el proyecto y escribe:

```bash
git clone https://github.com/a26migueltv/modem-web.git
```

- **Qué hace:** descarga el proyecto entero, con todo su historial, en una carpeta nueva llamada `modem-web`.
- Después ábrela en VS Code (**File → Open Folder… → modem-web**).

### 5.3 Cada vez que te pongas a trabajar

```bash
git checkout main
git pull
```

- `git checkout main` → te cambia a la rama principal.
- `git pull` → descarga los últimos cambios de GitHub (lo que han subido los demás y lo que ya se ha aceptado).

**La primera vez**, crea tu rama (una por página):

```bash
git checkout -b pagina-noticias
```

- `-b` significa «crea una rama nueva y cámbiate a ella».
- Nombres: `pagina-inicio`, `pagina-juegos`, `pagina-noticias`, `pagina-contacto`.

**Las siguientes veces**, cámbiate a tu rama y tráete lo nuevo de `main`:

```bash
git checkout pagina-noticias
git merge main
```

- `git checkout pagina-noticias` → vuelves a tu rama (sin `-b`, porque ya existe).
- `git merge main` → mete en tu rama lo último de `main` (que acabas de bajar con `git pull`).

Para saber en qué rama estás: `git branch` (la tuya tiene un `*` delante).

### 5.4 Guardar y subir tu trabajo

```bash
git status
```

- **Qué hace:** te dice qué archivos has cambiado. Úsalo mucho: no rompe nada.
- Comprueba que **solo salen tus archivos**. Si sale otro, no lo subas (pregunta).

```bash
git add noticias.html css/pages/noticias.css js/noticias.js
```

- **Qué hace:** prepara esos archivos para guardarlos («los mete en la caja»).
- Pon tus archivos uno a uno. Evita `git add .`, que añade todo lo que hayas tocado, aunque sea sin querer.

```bash
git commit -m "Noticias: añadir barra de filtros y las 4 entradas"
```

- **Qué hace:** guarda una «foto» de esos cambios en tu ordenador, con un mensaje que explica qué has hecho.
- **Buenos mensajes** (dicen qué y dónde):
  - `Noticias: añadir barra de filtros y las 4 entradas`
  - `Contacto: validar email y mostrar errores`
  - `Juegos: maquetar las 3 tarjetas en móvil`
  - `Inicio: banner del juego destacado`
- **Malos mensajes:** `cambios`, `asdf`, `ya funciona`, `arreglos`.

```bash
git push
```

- **Qué hace:** sube tus commits a GitHub.
- **La primera vez** en tu rama, Git te dirá que la rama no existe en GitHub. Usa:
  ```bash
  git push -u origin pagina-noticias
  ```
  `-u` deja la rama «conectada», y las siguientes veces vale con `git push`.

### 5.5 Pedir que se una al proyecto: la Pull Request (PR)

Cuando tu página esté terminada (o quieras que el jefe la revise):

1. Haz `git push` de tus últimos cambios.
2. Entra en <https://github.com/a26migueltv/modem-web>. Arriba saldrá un aviso amarillo **«pagina-noticias had recent pushes»** → pulsa **Compare & pull request**.
   (Si no sale: pestaña **Pull requests → New pull request**, y elige `base: main` ← `compare: pagina-noticias`.)
3. Comprueba que pone **base: main** ← **compare: tu rama**.
4. **Título**: qué página es. Ejemplo: `Página de Noticias`.
5. **Descripción**: qué has hecho, qué falta y cómo probarlo. Puedes añadir una captura.
6. Pulsa **Create pull request**.
7. Espera la revisión. Si el jefe te pide cambios, hazlos en **tu misma rama**, con `add`, `commit` y `push`: la PR se actualiza sola.

### 5.6 Después de que el jefe acepte tu PR

```bash
git checkout main
git pull
```

Así tienes en tu ordenador la versión buena con tu página ya dentro. Si vas a seguir trabajando, vuelve a tu rama y haz `git merge main` (apartado 5.3).

### 5.7 Si algo sale mal

**«rejected» al hacer `git push`** (`! [rejected] ... (fetch first)` o `non-fast-forward`)
Significa que en GitHub hay cambios en tu rama que tú no tienes. Bájalos primero y vuelve a subir:
```bash
git pull
git push
```

**«CONFLICT» al hacer `git pull` o `git merge main`**
Dos personas han cambiado las mismas líneas y Git no sabe con cuál quedarse. Si cada uno toca **solo sus archivos**, no debería pasar.
1. `git status` te dice qué archivos tienen conflicto («both modified»).
2. Ábrelos en VS Code. Verás bloques así:
   ```
   <<<<<<< HEAD
   lo que tenías tú
   =======
   lo que venía de la otra rama
   >>>>>>> main
   ```
3. VS Code te ofrece botones encima de cada bloque: **Accept Current** (lo tuyo), **Accept Incoming** (lo que viene), **Accept Both** (las dos cosas). Elige, y comprueba que no queda ninguna línea `<<<<<<<`, `=======` ni `>>>>>>>`.
4. Guarda y termina:
   ```bash
   git add archivo-arreglado.html
   git commit -m "Resolver conflicto en archivo-arreglado.html"
   ```
5. Si no lo tienes claro, **para y pregunta** al jefe de grupo antes de seguir. Para cancelar un merge a medias: `git merge --abort`.

**«Your local changes would be overwritten»** al cambiar de rama o hacer pull
Tienes cambios sin guardar. Haz un commit primero (`git add` + `git commit`) o, si no quieres guardarlos aún, apártalos con `git stash` y recupéralos después con `git stash pop`.

**He trabajado en `main` sin darme cuenta** (y aún no he hecho commit)
Crea tu rama ahora: los cambios se vienen contigo.
```bash
git checkout -b pagina-noticias
```

**«Permission denied» o «403»**
No has aceptado la invitación al repositorio o no has iniciado sesión. Revisa el apartado 5.1.

### 5.8 Reglas de oro

1. **Nunca trabajes en `main`.** Siempre en tu rama (`git branch` para comprobarlo).
2. **`git pull` antes de empezar** cada día (estando en `main`).
3. **Toca solo tus archivos.** Si necesitas cambiar algo común (`base.css`, `components.css`, `main.js`, el header o el footer), díselo al jefe de grupo.
4. **Commits pequeños y a menudo**, con mensajes claros. Mejor 6 commits de una cosa cada uno que uno gigante al final.
5. **`git status` antes de `git add`**, para ver qué vas a subir.
6. Si algo da miedo, **para y pregunta** antes de escribir comandos que no entiendes.

### 5.9 Sección para el jefe de grupo

**Revisar una PR**
1. En GitHub → **Pull requests** → abre la PR.
2. Pestaña **Files changed**: comprueba que **solo** cambia los archivos de su página.
3. Pruébala en tu ordenador:
   ```bash
   git fetch
   git checkout pagina-noticias
   ```
   Ábrela con Live Server, mira la consola y prueba móvil y teclado. Después vuelve con `git checkout main`.
4. Si hay que cambiar algo: en **Files changed** pulsa el **+** de una línea para comentar, o usa **Review changes → Request changes**.
5. Si está bien: **Review changes → Approve**.

**Aceptar la PR (merge)**
1. En la PR, abajo: **Merge pull request → Confirm merge**.
2. Pulsa **Delete branch** si ya no se va a usar (se puede recuperar).
3. En tu ordenador: `git checkout main` y `git pull`.
4. Avisa a los demás de que hagan `git pull` en `main` y `git merge main` en su rama.

**Resolver conflictos de una PR**
Si GitHub dice **«This branch has conflicts that must be resolved»**:
- Si es sencillo, pulsa **Resolve conflicts**, edita en la web (quitando las marcas `<<<<<<<`, `=======` y `>>>>>>>`) y pulsa **Mark as resolved → Commit merge**.
- Si es complicado, pide al autor que haga en su rama `git checkout main`, `git pull`, `git checkout su-rama`, `git merge main`, que resuelva en VS Code (apartado 5.7) y que haga `push`. La PR se actualiza sola.

**Publicar la web con GitHub Pages**
1. En el repositorio: **Settings → Pages**.
2. En **Build and deployment → Source**: **Deploy from a branch**.
3. **Branch**: `main` y carpeta `/ (root)` → **Save**.
4. En uno o dos minutos la web estará en <https://a26migueltv.github.io/modem-web/>. Cada merge en `main` la actualiza sola.

### 5.10 Lo mismo con GitHub Desktop

| Operación | Terminal | GitHub Desktop |
|---|---|---|
| Descargar el proyecto | `git clone ...` | **File → Clone repository** → pestaña **GitHub.com** → `a26migueltv/modem-web` → **Clone** |
| Ir a `main` | `git checkout main` | Arriba, **Current branch** → `main` |
| Bajar cambios | `git pull` | Botón **Fetch origin** y después **Pull origin** |
| Crear tu rama | `git checkout -b pagina-noticias` | **Current branch → New branch** → `pagina-noticias` → **Create branch** |
| Cambiar a tu rama | `git checkout pagina-noticias` | **Current branch** → `pagina-noticias` |
| Traer lo nuevo de `main` | `git merge main` | **Branch → Update from main** (o **Merge into current branch… → main**) |
| Ver qué has cambiado | `git status` | Pestaña **Changes** (a la izquierda) |
| Elegir qué guardar | `git add archivo` | Marca solo las casillas de tus archivos |
| Guardar (commit) | `git commit -m "..."` | Escribe el mensaje en **Summary** (abajo a la izquierda) → **Commit to pagina-noticias** |
| Subir | `git push` | **Push origin** (la primera vez: **Publish branch**) |
| Abrir la PR | En la web de GitHub | **Branch → Create pull request** (abre la web) |
| Conflicto | Editar en VS Code | Te avisa y te ofrece **Open in Visual Studio Code**; resuélvelo allí y vuelve para hacer commit |

> En GitHub Desktop comprueba **siempre** arriba, en **Current branch**, que no estás en `main` antes de hacer commit.

---

## 6. Normas del código

Estas normas hacen que las 8 páginas parezcan hechas por la misma persona.

### General
- **Solo HTML, CSS y JavaScript**. Nada de Bootstrap, jQuery, Tailwind ni ninguna otra librería.
- **Toca solo tus archivos** (tabla del apartado 3). `base.css`, `components.css`, `main.js`, `modal-demo.js`, el header y el footer **no se tocan**: si hace falta algo, se habla con el jefe de grupo.
- Todo en **español**: clases, ids, variables, funciones y comentarios.
- **Comenta** lo que no sea evidente. Lo van a leer los compañeros.

### HTML
- **Usa los componentes de `componentes.html`.** No inventes un botón o una tarjeta nuevos si ya existen.
- **HTML semántico**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, listas `<ul>` para grupos de cosas, `<button>` para acciones y `<a>` para ir a otra página.
- **Títulos en orden**: un solo `<h1>` por página, luego `<h2>` y luego `<h3>`. Si un título tiene que *verse* de otro tamaño, usa las clases `titulo-h1`, `titulo-h2` o `titulo-h3`.
- **Todas las imágenes con `alt`**, que describa la imagen. Si es decorativa (no aporta información), `alt=""`.
- **Nada de estilos en línea** (`style="..."`). Todo el estilo va en el CSS. (Única excepción: el ancho de la barra de progreso, que lo cambia el JavaScript.)
- Los enlaces que aún no existen (Steam, Epic, redes) llevan `href="#"` y encima `<!-- TODO (grupo): ... -->`.

### CSS
- **Usa siempre las variables** de `base.css`: `var(--color-acento)`, `var(--espacio-24)`, `var(--tamano-h2)`... **Nunca un color suelto** (`#00a3f9`).
- **Paleta cerrada**: no se añade ni se cambia ningún color sin el OK del grupo.
- En tu `css/pages/<pagina>.css` va **solo la maquetación** de tu página (colocar bloques: flex, grid, márgenes). No vuelvas a estilar los componentes.
- **Nombres de clases (BEM en español)**:
  - `.bloque` → `.tarjeta-juego`
  - `.bloque__elemento` → `.tarjeta-juego__titulo`
  - `.bloque--modificador` → `.boton--secundario`
  - Las clases de tu página empiezan por su bloque: `.banner`, `.quienes`, `.juegos__lista`, `.noticias`, `.contacto__columnas`...
  - En minúsculas, con guiones y **sin tildes ni ñ** (`tamano`, no `tamaño`).
- **Responsive**: escribe primero escritorio y al final añade `@media (max-width: 1023px)` (tablet) y `@media (max-width: 767px)` (móvil).
- **Nunca** quites el contorno del foco (`outline: none`) sin poner otro.

### JavaScript
- `const` y `let` (nunca `var`), funciones con nombres que digan lo que hacen (`mostrarError`, `filtrarNoticias`).
- Busca los elementos con `document.querySelector` / `getElementById` y usa `addEventListener` (nunca `onclick="..."` en el HTML).
- Lee los datos de los atributos `data-*` con `elemento.dataset`.
- Para mostrar u ocultar, usa el atributo `hidden` (`elemento.hidden = true`).
- Antes de subir: **consola sin errores rojos**.

### Accesibilidad (mínimo)
- Contraste de texto mínimo de 4,5:1. Ojo: la etiqueta de género (acento sobre «Caja de imagen») se queda en 4,13:1, como indica la guía; pendiente de decidir en grupo.
- Todo se tiene que poder usar con el **teclado** (Tab, Enter, Escape) y se tiene que ver siempre dónde está el foco.
- Los botones que solo tienen un icono llevan `aria-label` (mira las redes sociales en `componentes.html`).
