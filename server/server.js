const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api', (req, res) => {
  res.json({ user: ['userOne', 'userTwo', 'userThree', 'userFour'] });
});

app.listen(8000, () => {
  console.log('Server started on port 8000');
});
