const app = require('express')();
const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000;

const publicPath = path.resolve(__dirname, 'public'); //path.join(__dirname, 'public');

app.use(express.static(publicPath));


app.listen(port, function(){
  console.log(`listening on *:${port}`);
});