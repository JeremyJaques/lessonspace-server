const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Lessonspace webhook server running!');
});

app.post('/webhook/user-joined', (req, res) => {
  console.log("🎉 Tutee joined:", req.body);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
}); 