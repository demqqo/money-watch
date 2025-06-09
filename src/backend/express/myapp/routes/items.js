var express = require('express')
var router = express.Router()
const db = require('../../../sqlitedb/db');


router.post('/', (req, res) => {
    const {name, value} = req.body;
    const stmt = db.prepare('INSERT INTO items (name, value) VALUES (?, ?)');
    const info = stmt.run(name, value);
    res.send({ id: info.lastInsertRowid, name, value })
})

router.get('/', (req, res) => {
    const items = db.prepare('SELECT * FROM items').all();
    res.send(items);
  });
  
module.exports = router