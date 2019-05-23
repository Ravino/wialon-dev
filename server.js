"use strict";


const parser = require ("./wialon/wialon.js");


const fs = require ("fs");


const app = require ("express") ();
const router = require ("router") ();
const longPoll = require ("express-longpoll") (router);


app. use (router);
app. listen (3000);




const data = fs. readFileSync ("./data.txt", "utf-8");




longPoll. create ("/get");

setInterval (() => {

  const struct = parser. get (data);


  longPoll. publish ("/get", struct);

}, 2000);
