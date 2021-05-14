const express = require('express');
const app = express();
const noteRoutes = require('./routes/noteRoutes');

//setting initial port
const PORT = process.env.PORT || 3000;

//data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(noteRoutes);

//starts server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});