# 📍 Real-Time Location Tracker (Socket.IO + Leaflet)

A simple real-time location tracking application built using **Node.js, Express, Socket.IO, and Leaflet.js**. This project allows multiple users to share and view live locations on a map.

---

## 🚀 Features

* 📡 Real-time location sharing using WebSockets
* 🗺️ Interactive map powered by Leaflet.js
* 👥 Multiple users tracked simultaneously
* 🔄 Live updates without page refresh
* ❌ Automatic marker removal when a user disconnects

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express
* **WebSockets:** Socket.IO
* **Frontend:** EJS, JavaScript
* **Maps:** Leaflet.js
* **Geolocation API:** Browser Navigator API

---

## 📂 Project Structure

```
project-root/
│
├── public/
│   ├── js/
│   │   └── script.js
│   └── css/
│       └── style.css
│
├── views/
│   └── index.ejs
│
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the server

```bash
npx nodemon server.js
```

or

```bash
node server.js
```

### 4. Open in browser

```
http://localhost:3000
```

---

## 🧠 How It Works

### 📍 Client Side

* Uses `navigator.geolocation.watchPosition()` to track location
* Sends latitude & longitude to server via Socket.IO
* Receives location updates of all users
* Displays markers dynamically on the map

### 🔌 Server Side

* Listens for incoming socket connections
* Receives user location data
* Broadcasts location to all connected clients
* Handles user disconnection and removes markers

---

## 🔄 Real-Time Flow

1. User opens the app
2. Browser requests location permission
3. Location is continuously tracked
4. Coordinates sent to server via Socket.IO
5. Server broadcasts data to all clients
6. Map updates markers in real-time

---

## ⚠️ Requirements

* Browser with Geolocation support
* Internet connection (for map tiles)
* Node.js installed

---

## 💡 Future Improvements

* 🔐 Add authentication (user identity)
* 🧭 Show usernames instead of socket IDs
* 📱 Mobile UI optimization
* 🌍 Store location history
* 📊 Add clustering for many users

---

## 📸 Preview Idea

> Multiple users connected → each represented by a marker moving live on the map.

---

## 🧭 Learning Outcomes

This project helps you understand:

* WebSocket communication (Socket.IO)
* Real-time data synchronization
* Map integration with Leaflet
* Handling multiple clients
* Event-driven backend systems

---

## 🧑‍💻 Author

Swarnalee Ray

---

## ⭐ If you found this useful

Give it a star and build on top of it 🚀
