const express = require('express');
const app = express();
const path = require('path');
const firebase = require('firebase/app'); // Import only the core Firebase module

// Set the view engine to use EJS
app.set('view engine', 'ejs');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4OhjaWlmF_yITpPavraCmC2c6dtS4xgg",
    authDomain: "authenticanjs.firebaseapp.com",
    projectId: "authenticanjs",
    storageBucket: "authenticanjs.appspot.com",
    messagingSenderId: "761198518909",
    appId: "1:761198518909:web:69b5fc5beada95dc2d0714",
    measurementId: "G-4BL7GPGMDR"
  };
  firebase.initializeApp(firebaseConfig);

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/service', (req, res) => {
  res.render('service');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
