const express = require('express');
const path = require('path');
const db = require('./server/Persistence.js');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api', function(req, res){
  console.log('/api');
  db.connect().create('content',{
    'title':'My First Content',
    'description':'Description'
  }, function(p){
    console.log(p);
    res.send(JSON.stringify(p));
  });
})

const PORT = 10001;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});