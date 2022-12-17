const db = require('../db');

class LogController {
  async createLog(req, res) {
    const {userid, logType, logMsg} = req.body;
    console.log(userid, logType, logMsg);
    const newCart = await db.query(`INSERT INTO log (userid, logType, logMsg) VALUES ($1, $2, $3) RETURNING *`, [userid, logType, logMsg]);
    res.json('log Created'); 
  }

  async getOneLog(req, res) {
    const id = req.params.id;
    const cart = await db.query(`SELECT * FROM log WHERE id = ${id}`);
    res.json(cart.rows[0]);
  }

  async getLogs(req, res) {
    const carts = await db.query(`SELECT * FROM log`);
    res.json(carts.rows); 
  }

  async updateLog(req, res) {
    const {userid, logType, logMsg} = req.body;
    const updateCart =  await db.query(`UPDATE log set userid = $1, logType = $2, logMsg = $3 RETURNING *`, [userid, logType, logMsg]);
    res.json(updateCart.rows[0]);
  }

  async deleteLog(req, res) {
    const id = req.params.id;
    const cart = await db.query(`DELETE FROM log where id = $1`, [id]);
    res.json(cart.rows[0]);
  }
}

module.exports = new LogController();