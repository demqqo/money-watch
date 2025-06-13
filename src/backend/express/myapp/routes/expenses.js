var express = require('express')
var router = express.Router()
const db = require('../../../sqlitedb/db');


router.post('/', (req, res) => {
    const {name, value} = req.body;
    const stmt = db.prepare('INSERT INTO expenses (name, value) VALUES (?, ?)');
    const info = stmt.run(name, value);
    res.send({ id: info.lastInsertRowid, name, value })
})

router.get('/', (req, res) => {
    const expenses = db.prepare('SELECT * FROM expenses').all();
    res.send(expenses);
  });
  
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const stmt = db.prepare(`DELETE FROM expenses WHERE id = ?`)
    const info = stmt.run(id);
    res.send({ message: 'Deleted successfully', id });
  })

  
  router.put('/:id', (req, res) =>{    
    const { id } = req.params;
    const { value } = req.body;
    const stmt = db.prepare(`UPDATE expenses SET value = ? WHERE id = ?`);
    const info = stmt.run(value, id);
    if (info.changes > 0) {
        res.status(200).send({ success: true, id, value });
      } else {
        res.status(404).send({ success: false, message: 'Item not found' });
      }
  })
module.exports = router