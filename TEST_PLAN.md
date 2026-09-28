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






  
