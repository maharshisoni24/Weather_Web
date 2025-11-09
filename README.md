Here’s a **sample README.md** for your **Weather App** (like the one shown in the image):

---

# 🌦️ Weather App

A simple and elegant weather application built using **HTML, CSS, and JavaScript** that displays real-time weather information for any city using the **OpenWeatherMap API**.

## 🚀 Features

* Search weather by city name
* Displays:

  * Current temperature
  * Max and Min temperature
  * Humidity
  * Weather description and “feels like” temperature
* Dynamic background images based on weather
* Responsive and clean UI

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript (Fetch API)**
* **OpenWeatherMap API**

## 📋 Prerequisites

You’ll need an **OpenWeatherMap API key** to fetch live weather data.
Get it for free from: [https://openweathermap.org/api](https://openweathermap.org/api)

## ⚙️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. Open the `script.js` file and replace the API key line with your own:

   ```javascript
   const API_KEY = "your_api_key_here";
   ```

3. Run the app locally:

   * Simply open `index.html` in your browser
     *(No server setup needed)*

## 🖥️ Usage

1. Enter a city name (e.g., *Delhi*, *London*, *Tokyo*)
2. Click **Search**
3. The app will display:

   * City name
   * Temperature details
   * Weather condition (e.g., haze, clear, rain)
   * Dynamic background image based on weather

## 📸 Example

| ![Weather App Screenshot](./screenshot.png) |
| :-----------------------------------------: |
|      *Weather data displayed for Delhi*     |

## 🧩 Folder Structure

```
weather-app/
│
├── index.html
├── style.css
├── script.js
└── screenshot.png
```

## 🌍 API Reference

**Endpoint:**

```
https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_KEY}&units=metric
```

**Response Includes:**

* Temperature
* Min/Max Temp
* Humidity
* Weather description

## 💡 Future Enhancements

* 5-day weather forecast
* Dark/light theme toggle
* Auto-detect location weather
* Animated icons for different conditions

## 🤝 Contributing

1. Fork this repo
2. Create your feature branch:

   ```bash
   git checkout -b feature-name
   ```
3. Commit and push your changes
4. Create a Pull Request

---
