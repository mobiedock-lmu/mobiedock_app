const SHARED_VEHICLE_API_URL = 'https://api.coord.co/v1/sv';
const COORD_API_KEY = 'H2SVL8RRcp7MWbC4qUtaEO0NexspUpXAVO5TO7VGE7w';
const LOCATION = {lat: 33.968091, lon: -118.421362}; // TODO: Grab from map render of user's actual location
const SEARCH_RADIUS_KM = 10; // TODO: Allow this to be changed in settings

function getRequest(url) {
  return fetch(url).then(response => {
    return response.json();
  });
}

export default function renderVehicles() {
  let availableVehicles = [];
  let url = SHARED_VEHICLE_API_URL + '/location?access_key=' + COORD_API_KEY + '&latitude='
    + LOCATION.lat + '&longitude=' + LOCATION.lon + '&radius_km=' + SEARCH_RADIUS_KM;
  return getRequest(url).then(vehicles => {
    if(!vehicles.features) {
      return;
    }

    vehicles.features.forEach(vehicle => {
      if (vehicle.properties.is_renting && vehicle.properties.num_bikes_available > 0) {
        let marker = {
          position: {latitude: vehicle.properties.lat, longitude: vehicle.properties.lon},
          type: vehicle.properties.system_id,
        }
        availableVehicles.push(marker);
      }
    });
    return availableVehicles;
  });
}
