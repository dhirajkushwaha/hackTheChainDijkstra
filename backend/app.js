// backend/app.js
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true })); // Allow credentials
app.use(express.json());
app.use(cookieParser()); // Enable cookie parsing

// Routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB
connectDB();

module.exports = app;