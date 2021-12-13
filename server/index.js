const express = require('express')
const cors = require('cors')
const PORT = 3005;
const app = express()

const router = require('./router')
const db = require('./models')

app.use(cors());
app.use(express.json());
app.use(router);

(async function() {
  try {
    await db;
    app.listen(PORT, () => {
      console.log('server is running on port 3005')
    })
  } catch (error) {
    console.log(error)
  }
})();
