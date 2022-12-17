const db = require('../db');

class UsersController {
  async createUser(req, res) {
    const {name, lastname, email, password, userRole} = req.body;
    console.log(name, lastname, email, password, userRole);
    const newUser = await db.query(`INSERT INTO users (name, lastname, email, password, userRole) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [name, lastname, email, password, userRole]);
    res.json('ok'); 
  }

  async getOneUser(req, res) {
    const id = req.params.id;
    const user = await db.query(`SELECT * FROM users WHERE id = ${id}`);
    res.json(user.rows[0]);
  }

  async getUsers(req, res) {
    const users = await db.query(`SELECT * FROM users`);
    res.json(users.rows); 
  }

  async updateUser(req, res) {
    const {id, name, lastname, email, userRole} = req.body;
    const user = await db.query(`UPDATE users set name = $1, lastname = $2, email = $3, userRole = $4 RETURNING *`, [name, lastname, email, userRole]);
    res.json(user.rows[0]);
  }

  async deleteUser(req, res) {
    const id = req.params.id;
    const user = await db.query(`DELETE FROM users where id = $1`, [id]);
    res.json(user.rows[0]);
  }

  async getCorrectEmail(req, res) {
    const user = await db.query(`SELECT email FROM users WHERE email LIKE '%@%'`);
    res.json(user.rows);
  }

  async offsetUser(req, res) {
    const user = await db.query(`SELECT * FROM users ORDER BY name OFFSET 1`);
    res.json(user.rows);
  }
}

module.exports = new UsersController();