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

## Galería, agenda, música y dossiers
- `/gallery`: fotografías reales, filtros y ampliación. Las fotos proceden de `data/artists.ts`.
- `/agenda`: solo fechas confirmadas de `data/events.ts`. Las fechas pasadas se ocultan; `startsAt` requiere zona horaria. `ticketUrl` debe ser el enlace oficial. No hay eventos de demostración publicados.
- Las fichas cargan YouTube únicamente al pulsar reproducir. Si un video no permite inserción, está disponible el enlace a YouTube.
- Los dossiers están en `public/dossiers`, en HTML autónomo imprimible y ZIP con las fotos originales. Para regenerarlos tras cambiar biografías/fotos: `node scripts/generate-dossiers.cjs` (necesita la utilidad `zip`, disponible en macOS/Linux). Los archivos generados se incluyen en el proyecto; Vercel no necesita ejecutar el generador.

## Solicitudes de contratación
Sin servicio de correo configurado, el formulario prepara la propuesta para correo o WhatsApp y exige que el visitante la envíe desde su aplicación. No muestra confirmaciones de recepción falsas.
Para activar el envío directo opcional, configura `RESEND_API_KEY` y `BOOKING_FROM_EMAIL` en el servidor/Vercel. El remitente debe estar verificado en Resend. El destinatario siempre es el correo oficial de `lib/site.ts`. Nunca uses variables NEXT_PUBLIC para la clave. Requiere un nuevo despliegue si cambias variables en Vercel.
La API valida origen, campos y extensión; incluye campo trampa, límite por instancia e idempotencia. El límite en memoria no es compartido entre instancias; para mayor tráfico debe sustituirse por almacenamiento compartido o reglas del proveedor. No se ha enviado ningún correo real durante las pruebas. No se garantiza recepción en bandeja de entrada solo por la aceptación del proveedor.

## Actualización visual y privacidad — 26 septiembre 2026

Portada editorial con logo GLB, mesa de mezcla con tres áreas interactivas y preguntas prácticas. Se mantienen los artistas exclusivamente en su apartado, las animaciones de objetos musicales y la firma existente.

Documentos: /legal, /terms, /privacy y /cookies. Titular comunicado por el cliente: CAOS Records; representantes Rodolfo Martinez y Angel Monterrey. Datos proporcionados por el titular e incorporados en aviso legal y privacidad: nombre registrado CAOS Records; RUC 8-1028-2462, DV 31; dirección comercial Ciudad del Saber; correo de contacto y privacidad info.caosrecords@gmail.com. No se ha realizado verificación registral independiente. Estos textos requieren revisión jurídica y validación de las prácticas reales del negocio; no garantizan ausencia de reclamaciones. Revisar especialmente conservación efectiva de mensajes, proveedores y derechos de las fotos/materiales.

La preferencia multimedia usa localStorage (caos-privacy-v1), versión y caducidad de 180 días. YouTube e imágenes remotas no se insertan hasta autorización; retirar permiso desmonta reproductores. No hay analítica ni píxeles publicitarios. Cambiar PRIVACY_VERSION en lib/privacy.ts si cambia el alcance. No añadir nuevos proveedores sin actualizar documentos y controles. El servidor de alojamiento puede generar registros técnicos propios.

El formulario requiere autorización informada, también validada por el endpoint si se configura envío directo. Actualmente se continúa por correo o WhatsApp. No envía campañas. La versión de autorización acompaña la propuesta; el endpoint directo añade fecha de recepción. Respetar las solicitudes de derechos y mantener un procedimiento interno de eliminación y conservación.

Fuentes de referencia: Ley 81 de 2019 y su reglamentación en https://www.antai.gob.pa/ ; privacidad mejorada de YouTube: https://support.google.com/youtube/answer/171780?hl=es .

Validación: npm run build; node scripts/test-booking.cjs; node scripts/test-privacy.cjs. Los tests de correo usan proveedor simulado y no envían mensajes.

## Contratación directa y ajustes móviles

Cada artista incluye WhatsApp con su nombre y campos de evento, llamada y formulario. No se envía ningún mensaje automáticamente ni se confirma una reserva. Las fotografías de los perfiles y miniaturas de galería utilizan next/image con tamaños adaptativos; los originales siguen en el dossier. Se amplían objetivos táctiles y campos de formulario, se adaptan títulos estrechos y áreas seguras, se limita la resolución del render 3D en móvil y se cierra el menú al pasar al diseño de escritorio.

Verificación: build de producción y scripts/test-artist-booking.cjs, test-booking.cjs, test-privacy.cjs. Revisión visual móvil pendiente: la herramienta de navegador no pudo verificar la política de seguridad del administrador. Revisar en iPhone y Android el menú, retratos, navegación, desplazamiento sobre el logo, galería, panel de privacidad y apertura de WhatsApp antes de dar por terminada esa revisión.

## Sobre de prensa y lanzamientos

Sobre animado en cada perfil, con controles de teclado y descarga de los dossiers existentes. `/admin` permite editar fichas con enlaces a plataformas, vista previa, borrador y publicación; Google Sheets es el almacenamiento. Guía de conexión y límites en `docs/GOOGLE-SHEETS.md`. La integración no está conectada hasta configurar las variables de `.env.example`. No se han inventado lanzamientos. Plantilla incluida en `docs/CAOS-plantilla-lanzamientos.xlsx`.
