const db = require('../db');

class DeviceInfoController {
  async createDeviceInfo(req, res) {
    const {title, description} = req.body;
    console.log(title, description);
    const newDeviceInfo = await db.query(`INSERT INTO deviceInfo (title, description) VALUES ($1, $2) RETURNING *`, [title, description]);
    res.json('deviceInfo Created'); 
  }

  async getOneDeviceInfo(req, res) {
    const id = req.params.id;
    const cart = await db.query(`SELECT * FROM deviceInfo WHERE id = ${id}`);
    res.json(cart.rows[0]);
  }

  async getDeviceInfos(req, res) {
    const carts = await db.query(`SELECT * FROM deviceInfo`);
    res.json(carts.rows); 
  }

  async updateDeviceInfo(req, res) {
    const {userId} = req.body;
    const updateCart =  await db.query(`UPDATE deviceInfo set title = $1, description = $2 RETURNING *`, [userId, description]);
    res.json(updateCart.rows[0]);
  }

  async deleteDeviceInfo(req, res) {
    const id = req.params.id;
    const cart = await db.query(`DELETE FROM deviceInfo where id = $1`, [id]);
    res.json(cart.rows[0]);
  }
}

module.exports = new DeviceInfoController();