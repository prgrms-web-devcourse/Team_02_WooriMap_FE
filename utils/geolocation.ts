function getCurrentCoordinates(onSuccess: PositionCallback) {
  if (!navigator.geolocation) return;

  navigator.geolocation.getCurrentPosition(onSuccess);
}

export default getCurrentCoordinates;
