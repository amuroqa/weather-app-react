# TEST PLAN — Weather App React

## TC-01: Buscar ciudad válida
**Pasos:**
1. Ingresa a https://amuroqa.github.io/weather-app-react/
2. Escribe "Madrid" en el input
3. Haz clic en "Buscar"

**Resultado esperado:**
- Aparece la tarjeta con datos de Madrid
- Temperatura muestra un número
- Descripción del clima se visualiza
**Estado:** 🔴 Pendiente (falta validación de error en código)

## TC-02: Buscar ciudad no válida  
**Pasos:**
1. Ingresa a https://amuroqa.github.io/weather-app-react/
2. Escribe "Caracs" en el input
3. Haz clic en "Buscar"
**Resultado esperado:**
- Aparece un mensaje de error: "Ciudad no encontrada"
- La tarjeta del clima desaparece
- El input se limpia

## TC-03: Agregar favoritos
1. Ingresa a https://amuroqa.github.io/weather-app-react/
2. Escribe "Madrid" en el input
3. Haz clic en "Buscar"
4. Haz clic en botón "Favoritos"
**Resultado esperado:**
- Aparece la tarjeta con datos de Madrid
- "Madrid" aparece en la sección "❤️Favoritos" debajo
- El botón muestra que ya fue agregado (sin duplicados)

## TC-04: Ver favoritos
1. Ingresa a https://amuroqa.github.io/weather-app-react/
2. (Asume que "Madrid" ya fue agregado a favoritos en TC-03)
3. Busca una ciudad diferente, ej: "Barcelona"
4. Desplázate hacia abajo a la sección "Favoritos"   
**Resultado esperado:**
- Se visualiza la sección "Favoritos" con "Madrid" en la lista
- Se visualiza "Barcelona" también si fue agregada
- Los favoritos se muestran sin duplicados

## TC-05: Eliminar favoritos
1. Ingresa a https://amuroqa.github.io/weather-app-react/
2. (Asume que "Madrid" ya fue agregado a favoritos en TC-03)
3. haz clic en en el botón X al lado de "Madrid"
**Resultado esperado:**
- "Madrid" desaparece de la lista de favoritos
- La sección "Favoritos" se actualiza inmediatamente
- Si no hay más favoritos, la sección desaparece

## TC-06: Ver pronostico de 5 dias
**Pasos:**
1. Ingresa a https://amuroqa.github.io/weather-app-react/
2. Escribe "Madrid" en el input
3. Haz clic en "Buscar"

**Resultado esperado:**
- Aparece la tarjeta con datos actuales de Madrid
- Se visualiza sección "Pronóstico 5 días" debajo
- Muestra 5 registros con fecha y temperatura
- Las temperaturas son números válidos

## TC-07: navegar sugerencias con flechas
**Pasos:**
1. Ingresa a https://amuroqa.github.io/weather-app-react/
2. Escribe "Mad" en el input (3 caracteres)
3. Aparece lista de sugerencias
4. Presiona flecha abajo (↓) para navegar entre opciones
5. Presiona Enter para seleccionar la ciudad resaltada

**Resultado esperado:**
- Se visualiza lista de sugerencias (Madrid, Madeira, etc)
- Cada flecha destaca una sugerencia diferente (color azul)
- Al presionar Enter:
  - El input se llena con el nombre completo de la ciudad
  - Se ejecuta automáticamente la búsqueda
  - Aparecen los datos del clima de esa ciudad
  - Desaparecen las sugerencias

## TC-08: Autocomplete miestra sugerencias al escribir
**Pasos:**
1. Ingresa a https://amuroqa.github.io/weather-app-react/
2. Escribe "Bar" en el input (3 caracteres)

**Resultado esperado:**
- Se visualiza lista de sugerencias con "Bar" en el nombre
- (Ejemplo: Barcelona, Barranquilla, Baracoa, etc)
- Las sugerencias se actualizan según lo que escribes
- Si borras caracteres (menos de 3), la lista desaparece

## TC-09: Cargar favoritos al iniciar
**Pasos:**
1. Ingresa a https://amuroqa.github.io/weather-app-react/
2. Escribe "Madrid" en el input
3. Haz clic en "Buscar"
4. Haz clic en botón "❤️ Favorito"
5. Recarga la página (F5)
6. Verifica la sección "Favoritos"

**Resultado esperado:**
- "Madrid" persiste en la sección "Favoritos" después de recargar
- Los datos previos del clima NO aparecen (solo favoritos se cargan)
- La sección "Favoritos" se visualiza correctamente
- Sin duplicados al recargar

## TC-10: Pronostico se carga desde el localstorage al iniciar

**Pasos:**
1. Ingresa a https://amuroqa.github.io/weather-app-react/
2. Escribe "Madrid" en el input
3. Haz clic en "Buscar"
4. Abre DevTools (F12) → Application → Local Storage
5. Verifica que existe la clave "pronostico"
6. Recarga la página (F5)
7. Verifica que los datos del pronóstico siguen en localStorage

**Resultado esperado:**
- Después de buscar Madrid, "pronostico" contiene datos
- Después de recargar, "pronostico" sigue guardado
- El pronóstico no se reinicia a []

## TC-11: Busqueda sin conexion muestra error
**Pasos:**
1. Ingresa a https://amuroqa.github.io/weather-app-react/
2. Desconecta el WiFi
3. Escribe "Madrid" en el input
4. Haz clic en "Buscar"

**Resultado esperado:**
- Aparece un mensaje de error: "Error de conexión - Verifica tu internet"
- No aparece tarjeta del clima
- El input mantiene el texto "Madrid"
  **Estado:** 🔴 Pendiente (falta manejo de errores de conexión)

## TC-12: Api inaccesible muestra mensaje
**Pasos:**
1. Ingresa a https://amuroqa.github.io/weather-app-react/
2. Abre DevTools (F12) → Network
3. Pon modo "Offline"
4. Escribe "Madrid" en el input
5. Haz clic en "Buscar"

**Resultado esperado:**
- No aparece tarjeta del clima
- Aparece mensaje: "Error al conectar con la API"
- El usuario entiende que hay problema con el servidor
**Estado:** 🔴 Pendiente (falta try-catch para errores de API)

## TC-13: Ciudad no encontrada muestra alerta

**Pasos:**
1. Ingresa a https://amuroqa.github.io/weather-app-react/
2. Escribe "xyzabc123" (ciudad inexistente) en el input
3. Haz clic en "Buscar"

**Resultado esperado:**
- No aparece tarjeta del clima
- Aparece un mensaje de alerta: "Ciudad no encontrada"
- El input mantiene el texto "xyzabc123"
- El usuario sabe que debe escribir otra ciudad

**Estado:** 🔴 Pendiente (falta validación de respuesta vacía)

## TC-14: Interfaz se adapta a móvil (<768px)

**Pasos:**
1. Ingresa a https://amuroqa.github.io/weather-app-react/
2. Escribe "Madrid" en el input
3. Haz clic en "Buscar"
4. Abre DevTools (F12)
5. Haz clic en "Toggle device toolbar" (Ctrl+Shift+M)
6. Selecciona un dispositivo móvil (<768px)

**Resultado esperado:**
- La tarjeta se ajusta al ancho de la pantalla móvil
- El input y botón están bien espaciados
- Texto legible sin necesidad de zoom
- Favoritos y pronóstico se muestran en una columna

## TC-15: Interfaz se adapta a tablet (768px - 1024px)

**Pasos:**
1. Ingresa a https://amuroqa.github.io/weather-app-react/
2. Escribe "Madrid" en el input
3. Haz clic en "Buscar"
4. Abre DevTools (F12) → Toggle device toolbar
5. Selecciona un dispositivo tablet (768px - 1024px)

**Resultado esperado:**
- La tarjeta se adapta al tamaño tablet
- Elementos bien distribuidos
- Toda la información visible sin scroll horizontal

## TC-16: Interfaz se adapta a desktop (>1024px)

**Pasos:**
1. Ingresa a https://amuroqa.github.io/weather-app-react/
2. Escribe "Madrid" en el input
3. Haz clic en "Buscar"
4. Abre DevTools (F12) → Toggle device toolbar
5. Selecciona resolución desktop (>1024px)

**Resultado esperado:**
- La tarjeta se muestra en su tamaño óptimo
- Espaciado adecuado entre elementos
- Favoritos y pronóstico visibles sin scroll
- Layout completo sin deformaciones
