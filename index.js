const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let timers = {}; // Store running timers

app.get('/', (req, res) => {
  res.send('Lessonspace webhook server running!');
});

app.post('/webhook/user-joined', (req, res) => {
  const { userId, spaceId } = req.body;

  if (!userId || !spaceId) {
    console.log('⚠️ Missing userId or spaceId.');
    return res.sendStatus(400);
  }

  console.log(`🎉 User joined: ${userId} in space: ${spaceId}`);

  timers[userId] = Date.now();

  console.log(`⏱️ Timer started for user ${userId} at ${new Date(timers[userId]).toLocaleTimeString()}`);

  res.sendStatus(200);
});

app.get('/timers', (req, res) => {
  res.json(timers);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});