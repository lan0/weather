module.exports = function(app) {
  var express = require('express');
  var weatherRouter = express.Router();

  weatherRouter.get('/', function(req, res) {
    res.send({
      "coord": {
        "lon": 16.37,
        "lat": 48.21
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "Sky is Clear",
        "icon": "01d"
      }],
      "base": "stations",
      "main": {
        "temp": 31.97,
        "pressure": 1017,
        "humidity": 29,
        "temp_min": 30.7,
        "temp_max": 34
      },
      "visibility": 10000,
      "wind": {
        "speed": 5.1,
        "deg": 150
      },
      "clouds": {
        "all": 0
      },
      "dt": 1439055869,
      "sys": {
        "type": 1,
        "id": 5934,
        "message": 0.0195,
        "country": "AT",
        "sunrise": 1439005178,
        "sunset": 1439057980
      },
      "id": 2761369,
      "name": "Vienna",
      "cod": 200
    });
  });

  app.use('/api/weather', weatherRouter);
};
