# Clima App

Aplicación web de clima desarrollada con React + Vite y Tailwind CSS.

## Descripción

Buscador de clima que consume la API de [OpenWeather](https://openweathermap.org) para mostrar información meteorológica de cualquier ciudad del mundo.

### Características

- Búsqueda de clima por nombre de ciudad
- Muestra temperatura actual, máxima y mínima
- Muestra humedad, hora de amanecer y atardecer
- Iconos dinámicos según el tipo de clima
- Diseño responsive (móvil y escritorio)
- Estilos con Tailwind CSS v4

## Tecnologías

- React 18
- Vite
- Tailwind CSS v4
- React Icons
- OpenWeather API

## Cómo usar

1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Crear archivo `.env` con las variables:
   ```
   VITE_API_URL=https://api.openweathermap.org/data/2.5/weather
   VITE_API_KEY=tu-api-key
   ```
4. Ejecutar en desarrollo: `npm run dev`
5. Construir para producción: `npm run build`

## Demo

[Ver aplicación](https://react-weather-pf.vercel.app/)
