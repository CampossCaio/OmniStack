const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const BookingControler = require('./controllers/BookingController');
const DashboardController = require('./controllers/DashboardController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

// Fazendo upload de imagem
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/spots', SpotController.index);

routes.post('/spots/:spot_id/bookings', BookingControler.store);

routes.get('/dashboard', DashboardController.show);
 

module.exports = routes;