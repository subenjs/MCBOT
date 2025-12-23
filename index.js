const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('7/24 aktif sunucu tutucu calisiyor!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`${PORT} portunda sunucu calisiyor.`);
});
