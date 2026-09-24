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
- `data/artists.ts`: artistas. Incluye a Forty2, sus enlaces oficiales y ocho publicaciones verificadas en su canal de YouTube.
- `lib/site.ts`: correo, Instagram y fundadores.
- `public/logo-white.png` y `public/logo-black.png`: logos originales.

## Contratación

El formulario valida los campos obligatorios y prepara un correo mediante `mailto:`. No hay envío desde servidor ni base de datos; el visitante debe enviar la solicitud desde su aplicación de correo. Para envío directo será necesario conectar un proveedor de correo y configurar credenciales en el servidor.

## Antes de publicar

Configura el dominio real en `app/layout.tsx`, `app/robots.ts` y `app/sitemap.ts`. Revisa los datos de marca e incorpora artistas, fotos y lanzamientos cuando estén confirmados. Las fuentes de Google se descargan durante la compilación y se sirven localmente después. El sitio no reproduce audio ni presenta material discográfico ficticio.

## Logo 3D

El visor carga el archivo `CAOSRECORDS.glb` del usuario, conservando su geometría y sus materiales. Se centra y escala para encajarlo en la portada. Three.js se carga de forma diferida; si WebGL no está disponible se muestra el logo original. El dibujo se detiene fuera de pantalla y con la pestaña oculta. La preferencia de movimiento reducido muestra una vista estática. El logo se anima sin instrucciones ni controles visibles y respeta la preferencia de movimiento reducido.

La portada contiene información de contratación, representación, sello y contacto. La historia, el origen y los fundadores permanecen en `/about`. No se muestran artistas ni lanzamientos ficticios. Consulta `data/forty2-sources.md` para fuentes y límites de la investigación.

El pie incluye el crédito solicitado: `develop by RuptaStudios`, enlazado a https://ruptastudios.com. Es la única frase en inglés de la interfaz; los nombres de marca se conservan.

La portada usa superficies curvas y composiciones superpuestas. `RecordStack.tsx` contiene una pila de cinco discos que responde al desplazamiento y permite separarlos al pulsar. `ArtistMusic.tsx` permite seleccionar temas y abrirlos en el canal oficial. `/booking?artist=forty2` preselecciona al artista sin enviar el formulario.

## Dominio y vista al compartir
Configura `NEXT_PUBLIC_SITE_URL` con el dominio público definitivo antes de compilar. Se usa en canonical, Open Graph, sitemap y datos estructurados. `/opengraph-image` genera una imagen PNG con el logo sobre fondo negro. La previsualización de WhatsApp y otras redes requiere una URL pública accesible; localhost no puede ser leído por sus rastreadores. Cada plataforma controla su caché y presentación.
