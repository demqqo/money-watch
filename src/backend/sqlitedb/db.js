const Database = require('better-sqlite3')

const db = new Database('mydb.sqlite')

db.prepare(`
    CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    value REAL
  )
    `).run();

    module.exports =db