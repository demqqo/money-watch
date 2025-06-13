const Database = require('better-sqlite3')

const db = new Database('mydb.sqlite')

db.prepare(`
    CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    value REAL
  )
    `).run();

    db.prepare(`CREATE TABLE IF NOT EXISTS expenses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        value REAL)`
    ).run()

    db.prepare(`CREATE TABLE IF NOT EXISTS incomes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        value REAL)`
    ).run()

    db.prepare(`DELETE FROM incomes WHERE id = ?`)

    db.prepare(`DELETE FROM expenses WHERE id = ?`)

    db.prepare(`UPDATE incomes SET value = ? WHERE name = ?`)

    db.prepare(`UPDATE expenses SET value = ? WHERE name = ?`)


    module.exports =db