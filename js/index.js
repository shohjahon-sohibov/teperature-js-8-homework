// CALL FORM ELEMENTS FROM HTML
var elForm = document.querySelector('.form');
var  elCelsius= elForm.querySelector('.celsius');
var  elFahrenheit= elForm.querySelector('.fahrenheit');

// CALL OUTPUT ELEMENT FROM HTML
var elOutput = document.querySelector('.output');

// FROM CELSIUS TO FAHRENHEIT

elCelsius.addEventListener('input', function(){
  var Celcius  = parseFloat(elCelsius.value.trim(), 10);
  var toFahrenheit = (1.8 * Celcius) + 32;
  elOutput.textContent = toFahrenheit.toFixed(2);
});

elFahrenheit.addEventListener("input", function(){
  var Fahrenheit  = parseFloat(elFahrenheit.value.trim(), 10);
  var toCelcius = (Fahrenheit - 32) / 1.8;
  elOutput.textContent = toCelcius.toFixed(2);
});





























// elForm.addEventListener('submit', function(evt) {
//   evt.preventDefault();
  
//   var celsiusTemperature = ((parseFloat(elCelsius.value.trim(), 10) * 1.8) + 32).toFixed(2);

//   elOutput.textContent = celsiusTemperature;
// })


//   // FROM FAHRENHEIT TO CELSIUS
// elForm.addEventListener('submit', function(evt) {
//   evt.preventDefault();

//   var fahrenheitTemperature = ((parseFloat(elFahrenheit.value.trim(), 10) - 32) / 1.8).toFixed(2);
//   elOutput.textContent = fahrenheitTemperature;
// })
