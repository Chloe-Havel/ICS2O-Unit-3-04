// Copyright (c) 2020 Chloe Havel All rights reserved
//
// Created by: Chloe Havel
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-3-04/sw.js", {
    scope: "/ICS2O-Unit-3-04/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  document.getElementById("hello-world").innerHTML = "<p>Hello, World!</p>"
}
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate() {
  // input
  const fahrenheit = parseInt(
    document.getElementById("fahrenheit-to-celsius").value
  )
  // process
  const celsius = ((fahrenheit - 32) * 5) / 9

  // output
  document.getElementById("celsius").innerHTML = "celsius: " + celsius + " ° "
}
