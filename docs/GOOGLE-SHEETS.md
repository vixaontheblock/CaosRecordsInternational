# Lanzamientos con Google Sheets

El sitio incluye un panel en `/admin`, páginas públicas en `/lanzamientos/nombre-del-lanzamiento` y el catálogo `/lanzamientos`. Sin conectar Google, el catálogo está vacío y el panel ofrece un editor de prueba en memoria. Ese modo no publica ni conserva cambios al recargar.

## Crear la hoja

Importa `CAOS-plantilla-lanzamientos.xlsx` en Google Sheets y conviértela a formato de Google Sheets. Mantén la pestaña `Lanzamientos` y los encabezados de la fila 1 sin modificar. La pestaña Guía explica los campos; no interviene en la web. No publiques la hoja en Internet. No es necesario rellenar filas manualmente: el panel las creará.

## Conectar el servidor

En tu proyecto de Google Cloud, habilita Google Sheets API, crea una cuenta de servicio y una clave JSON para esa cuenta. No hace falta dar roles generales de propietario/editor del proyecto a la cuenta de servicio. Comparte únicamente esta hoja con el `client_email` de la cuenta, con permiso de editor. No concedas acceso público.

Configura en Vercel (y en `.env.local` para desarrollo):

- `GOOGLE_SHEETS_ID`: el identificador entre `/d/` y `/edit` del enlace de tu hoja.
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`: `client_email` del JSON.
- `GOOGLE_PRIVATE_KEY`: `private_key` del JSON. Se admiten saltos reales o `\n`.
- `ADMIN_PASSWORD`: una contraseña única de al menos 16 caracteres.
- `ADMIN_SESSION_SECRET`: un secreto aleatorio de al menos 32 caracteres. Puedes generarlo localmente con `openssl rand -hex 32`.
- `NEXT_PUBLIC_SITE_URL`: el dominio oficial.

Guarda las credenciales en variables privadas del servidor, nunca con prefijo NEXT_PUBLIC, en la hoja ni en mensajes. No incluyas el JSON en el repositorio. Después vuelve a desplegar. Prueba primero en un despliegue de vista previa con una hoja de prueba privada.

## Uso del panel

Entra en `/admin` con la contraseña configurada. Crea un lanzamiento, elige artista, título y dirección corta. Añade la portada y los enlaces. La portada debe ser una URL HTTPS pública y directa a un archivo JPG, PNG o WebP. Un enlace del visor de Google Drive no sirve. Puedes añadir la portada a `public/portadas` del proyecto y utilizar su URL pública después de desplegarla. Este panel todavía no sube archivos.

“Vista previa” muestra el diseño antes de guardar. “Guardar borrador” conserva un registro no visible públicamente. “Publicar” o “Actualizar publicación” lo hace visible en su enlace y en el catálogo. “Retirar y guardar borrador” deja de mostrarlo en el sitio. No hay publicación programada. Los reproductores de las plataformas no se incrustan: los botones abren sus sitios oficiales.

La dirección de una ficha guardada se mantiene para no romper enlaces. Puedes modificar título, descripción, portada y plataformas. Se admiten Spotify, Apple Music, YouTube, YouTube Music, Deezer, Amazon Music, Tidal y SoundCloud. El servidor valida los dominios, sin aceptar enlaces acortados desconocidos.

## Límites de esta primera versión

Un acceso compartido para el equipo, sesión de 8 horas, sin gestión individual de usuarios. El cierre borra la cookie del navegador; cambiar ADMIN_SESSION_SECRET invalida todas las sesiones. El límite de intentos de contraseña es por instancia: configura además rate limiting para `/api/admin/session` en Vercel Firewall antes de exponer el panel a mucho tráfico.

Usa un solo editor a la vez. Google Sheets no proporciona una transacción de comparación y escritura en esta integración. Se detectan versiones antiguas y direcciones duplicadas durante la lectura, pero dos escrituras simultáneas todavía podrían competir. No ordenar o editar la hoja mientras alguien guarda desde el panel. Para un equipo con ediciones simultáneas, migrar a una base de datos transaccional.

No añadas filas incompletas a mano: los registros inválidos se omiten. Conserva el historial de versiones de Google Sheets para recuperar cambios. Los datos se escriben como RAW para evitar interpretar títulos o descripciones como fórmulas. Una portada ya pública o una vista previa compartida por una plataforma puede seguir en caché al retirar un estreno.

La conexión real queda pendiente hasta que exista la hoja y se configuren las variables. Las pruebas locales usan Google simulado y no escriben en tu cuenta.

Referencias: https://developers.google.com/workspace/sheets/api/samples/writing y https://developers.google.com/identity/protocols/oauth2/service-account
