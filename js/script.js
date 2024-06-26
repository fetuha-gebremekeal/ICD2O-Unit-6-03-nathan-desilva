// Copyright (c) 2024 Nathan De Silva All rights reserved
//
// Created by: Nathan De Silva
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-6-03-nathan-desilva/sw.js", {
    scope: "/ICD2O-Unit-6-03-nathan-desilva/sw.js",
  })
}

/**
 * Get API info.
 */
// code from: https://www.youtube.com/watch?v=670f71LTWpM

const getWeather = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData)
    // Get weather and convert from kelvin to celsius
    const weather = Math.round(jsonData.main.temp - 273.15)
    document.getElementById("api-weather").innerHTML = "<p>Temperature: " + weather + "°C</p>"
    // Get weather icon
    const icon = jsonData.weather[0].icon
    const iconURL = "http://openweathermap.org/img/w/" + icon + ".png"
    document.getElementById("api-icon").innerHTML = "<img src='" + iconURL + "' class='donut'></img>"
  } catch (err) {
    console.log(err)
  }
}

getWeather(
  "https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5"
)
