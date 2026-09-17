# Weather App (React)

Aplicación del clima construida en React, versión mejorada del proyecto original en JavaScript vanilla.

## Descripción

Permite buscar el clima actual de cualquier ciudad, con autocompletado de ciudades mientras escribes y navegación por teclado en los resultados. Los usuarios pueden guardar ciudades como favoritas, con persistencia de datos en `localStorage`.

## Funcionalidades

- Búsqueda de ciudades con autocompletado (Geo API).
- Navegación por teclado en la lista de sugerencias.
- Consulta del clima actual (OpenWeatherMap API).
- Guardado de ciudades favoritas, persistente en `localStorage`.

## Tecnologías

- React
- JavaScript (ES6+)
- OpenWeatherMap API
- Geo API

## Cómo ejecutarlo localmente

```bash
git clone https://github.com/amuroqa/weather-app-react.git
cd weather-app-react
npm install
npm run dev
```

> Nota: necesitas una API key propia de OpenWeatherMap para que las consultas funcionen. Colócala en el archivo de variables de entorno correspondiente.

## Autor

Alejandro Muro — [GitHub](https://github.com/amuroqa)