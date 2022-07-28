const express = require('express');

const app = express();

const mongoose = require('mongoose');

const userRoutes = require('./routes/user');

const stuffRoutes = require('./routes/stuff');

const Thing = require('./models/thing');

mongoose.connect('mongodb+srv://Doppler123:pDfisWmfNbGtILXW@cluster0.o9nitgb.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//      

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use('/api/stuff', stuffRoutes);
  
  app.use('/api/auth', userRoutes);

  app.use('/api/stuff', stuffRoutes);

module.exports = app;