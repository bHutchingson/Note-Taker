const express = require('express');

const app = express();

//setting initial port
const PORT = process.env.PORT || 3000;

//data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


require('./routes/noteRoutes')(app);

//starts server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });