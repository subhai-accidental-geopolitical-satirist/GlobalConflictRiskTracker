const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(require('cors')());

app.get('/', (req, res) => {
  res.json({ status: 'online', name: 'Global Conflict Risk Matrix API', ts: new Date().toISOString() });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
