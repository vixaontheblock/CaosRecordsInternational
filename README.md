# CAOS Records — Rediseño

Web Next.js con identidad en blanco y negro, logo original con geometría 3D, iluminación, giro por arrastre y transiciones al hacer scroll. Historia original conservada exclusivamente en Nosotros. Interfaz en español, menú móvil accesible y respeto por la preferencia de movimiento reducido.

## Ejecutar

Requiere Node.js 20 o posterior y npm.

```sh
npm ci
npm run dev
```

Abre http://localhost:3000. Para producción: `npm run build` y `npm start`.

## Contenido

- `app/page.tsx`: portada.
- `app/globals.css`: diseño, breakpoints y animaciones.
- `components/Logo3D.tsx`: visor GLB con Three.js, materiales originales, iluminación y controles.
- `public/CAOSRECORDS.glb`: modelo proporcionado por el usuario, conservado sin modificaciones.
- `components/RecordSleeve.tsx`: funda y vinilo interactivos con ratón, teclado y pantalla táctil.
- `components/Experience.tsx`: aparición de secciones al hacer scroll.
- `data/artists.ts`: artistas. Está vacío hasta incorporar artistas reales; los perfiles se generan desde aquí.
- `lib/site.ts`: correo, Instagram y fundadores.
- `public/logo-white.png` y `public/logo-black.png`: logos originales.

## Contratación

El formulario valida los campos obligatorios y prepara un correo mediante `mailto:`. No hay envío desde servidor ni base de datos; el visitante debe enviar la solicitud desde su aplicación de correo. Para envío directo será necesario conectar un proveedor de correo y configurar credenciales en el servidor.

## Antes de publicar

Configura el dominio real en `app/layout.tsx`, `app/robots.ts` y `app/sitemap.ts`. Revisa los datos de marca e incorpora artistas, fotos y lanzamientos cuando estén confirmados. Las fuentes de Google se descargan durante la compilación y se sirven localmente después. El sitio no reproduce audio ni presenta material discográfico ficticio.

## Logo 3D

El visor carga el archivo `CAOSRECORDS.glb` del usuario, conservando su geometría y sus materiales. Se centra y escala para encajarlo en la portada. Three.js se carga de forma diferida; si WebGL no está disponible se muestra el logo original. El dibujo se detiene fuera de pantalla y con la pestaña oculta. La preferencia de movimiento reducido muestra una vista estática. Los controles permiten arrastrar, pausar y restablecer el ángulo.

La portada contiene información de contratación, representación, sello y contacto. La historia, el origen y los fundadores permanecen en `/about`. No se muestran artistas ni lanzamientos ficticios.

El pie incluye el crédito solicitado: `develop by RuptaStudios`, enlazado a https://ruptastudios.com. Es la única frase en inglés de la interfaz; los nombres de marca se conservan.
