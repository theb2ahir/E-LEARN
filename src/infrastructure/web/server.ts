import express from 'express';
import { json } from 'body-parser';
require('dotenv').config;

export const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(json());



module.exports = { app }