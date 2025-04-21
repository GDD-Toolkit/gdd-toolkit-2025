const express = require('express');
const app = express();
const PORT = 4040;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
