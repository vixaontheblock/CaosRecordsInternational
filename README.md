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
- `components/Logo3D.tsx`: logo extruido con Three.js, materiales, iluminación y controles.
- `public/logo-shape.json`: contornos del logo original, con huecos.
- `scripts/trace-logo.py`: regeneración de contornos (Python + Pillow, ejecutar desde la raíz del proyecto).
- `components/Experience.tsx`: aparición de secciones al hacer scroll.
- `data/artists.ts`: roster. Está vacío hasta incorporar artistas reales; los perfiles se generan desde aquí.
- `lib/site.ts`: correo, Instagram y fundadores.
- `public/logo-white.png` y `public/logo-black.png`: logos originales.

## Booking

El formulario valida los campos obligatorios y prepara un correo mediante `mailto:`. No hay envío desde servidor ni base de datos; el visitante debe enviar la solicitud desde su aplicación de correo. Para envío directo será necesario conectar un proveedor de email y configurar credenciales en el servidor.

## Antes de publicar

Configura el dominio real en `app/layout.tsx`, `app/robots.ts` y `app/sitemap.ts`. Revisa los datos de marca e incorpora artistas, fotos y lanzamientos cuando estén confirmados. Las fuentes de Google se descargan durante la compilación y se sirven localmente después. El sitio no reproduce audio ni presenta material discográfico ficticio.

## Logo 3D

La geometría tiene volumen real (caras frontales, reverso, laterales y biseles). Se genera a partir del canal alfa del logo original. Three.js se carga de forma diferida; si WebGL no está disponible se muestra el logo original. El dibujo se detiene fuera de pantalla y con la pestaña oculta. La preferencia de movimiento reducido muestra una vista estática. Los controles permiten arrastrar, pausar y restablecer el ángulo.

La portada contiene información de booking, management, sello y contacto. La historia, el origen y los fundadores permanecen en `/about`. No se muestran artistas ni lanzamientos ficticios.
# CaosRecordsInternational
