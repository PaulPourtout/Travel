const express = require('express');
const mongoose = require('mongoose');

const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));


// start the server
app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080 or http://127.0.0.1:8080');
});
