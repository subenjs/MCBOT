const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('7/24 aktif sunucu tutucu calisiyor!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`${PORT} portunda sunucu calisiyor.`);
});
