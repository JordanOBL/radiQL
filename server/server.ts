// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser')
// const port = 3000; 
// const router = require('./router'); 
import express, {Request, Response, NextFunction} from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import router from './router'
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production')
  app.use(express.static(path.resolve(__dirname, '../dist')));
else app.use(express.static(path.resolve(__dirname, '../client')));


app.use('/', router); 


app.use((err, req: Request, res: Response, next: NextFunction) => {
const defaultErr = {
  log: 'Express error handler caught unknown middleware error',
  status: 500,
  message: { err: 'An error occurred' },
};
	const errorObj = Object.assign({}, defaultErr, err);
	console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(port, () => {
	console.log('listening on port', port);
});