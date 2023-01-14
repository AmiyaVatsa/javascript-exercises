const convertToCelsius = function(faeh) {
  const cel = Math.round(((faeh - 32) / 1.8)*10)/10;
  return cel;
};

const convertToFahrenheit = function(cel) {
  const faeh = Math.round((cel*1.8 + 32) * 10)/10;
  return faeh;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
