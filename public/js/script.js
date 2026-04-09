const socket = io();

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      socket.emit("userLocation", { latitude, longitude });
    },
    (err) => {
      console.log(err);
    },
    { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 },
  );
}

const map = L.map("map").setView([0, 0], 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "srnale",
}).addTo(map);
const markers = {};

socket.on("userLocation", (data) => {
  console.log(data);
  map.setView([data.latitude, data.longitude], 16);
  if (markers[data.id]) {
    markers[data.id].setLatLng([data.latitude, data.longitude]);
  } else {
    markers[data.id] = L.marker([data.latitude, data.longitude]).addTo(map);
  }
});

socket.on("user-disconnected", (id) => {
  if (markers[id]) {
    map.removeLayer(markers[id]);
    delete markers[id];
  }
});
