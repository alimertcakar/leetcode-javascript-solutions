const express = require('express');
const cors = require('cors');
const app = express();
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
})
app.use(express.static('src'))
app.use(cors);
app.listen(80, () => { console.log('sunucu başladı.=> localhost:80') })