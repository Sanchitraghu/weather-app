# Weather App Documentation

## Project Overview

A simple weather app that allows users to search for cities and view current weather and forecasts.

## Tech Stack

- Frontend: React, TypeScript, React Router, Redux
- API: OpenWeatherMap API
- Libraries: Axios for API calls, TailwindCss for css

## Features

- Search for city weather.
- View current weather data.
- View 5-day weather forecast.
- Mobile-responsive UI.

## Installation

1. Clone the repository.
2. Go to cloned directory `cd weather-app`
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the app locally.

- Deployed URL : https://sanchit-weather-app.netlify.app/

## Important Note

This project uses the OpenWeather API, and the API credentials are stored in the `.env` file included in the repository.

⚠️ **Please note:** Including the `.env` file in version control is **not recommended** as a best practice due to security concerns. It is included here only for simplicity and demonstration purposes. In a real-world application, sensitive information should be excluded from Git using a `.gitignore` file and managed securely.
