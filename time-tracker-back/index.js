const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/user', require('./routes/user.js'))

app.listen(PORT, () => console.log('server started al port' + PORT))


module.exports = app