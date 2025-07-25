function convertToCelsius(Fahrenheit) {
  return ((Fahrenheit - 32) * 5) / 9;
}

function describeTemperature(Fahrenheit) {
  const Celsius = ((Fahrenheit - 32) * 5) / 9;

  let describe = "";

  if (Fahrenheit < 0) {
    describe = "very cold";
  } else if (Celsius < 20) {
    describe = "cold";
  } else if (Celsius < 30) {
    describe = "warm";
  } else if (Celsius < 40) {
    describe = "hot";
  } else {
    describe = "very hot";
  }

  return `${Fahrenheit}F is ${Celsius}C. That is ${describe}.`;
}

const Fahrenheit = prompt("Enter a temperature in Fahrenheit");
const description = describeTemperature(Fahrenheit);
alert(description);
