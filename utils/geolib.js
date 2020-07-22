const geolib = require('geolib');

const latNorth = 52.2332;
const latSouth = 50.78653;
const longWest = -1.2802;
const longEast = 1.044016;

geolib.isPointWithinRadius(
  { latitude: latNorth, longitude: longWest },
  { latitude: latSouth, longitude: longEast },
  5000
);
