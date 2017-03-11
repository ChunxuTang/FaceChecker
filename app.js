
const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(app.get('port'), () => {
  console.log(`App is running at http://localhost:${app.get('port')} `);
});
