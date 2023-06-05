const isValidStation = (station) => {
  return (
    station[1] >= 20 &&
    (station[2] === "school" || station[2] === "community centre")
  );
};

const chooseStations = (stations) => {
  let goodStations = [];
  for (let station of stations) {
    if (isValidStation(station)) {
      goodStations.push(station[0]);
    }
  }
  return goodStations;
};
