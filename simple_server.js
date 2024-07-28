const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

console.log(`Attempting to start server on port ${PORT}`);
console.log(`Environment Variables:`, process.env);