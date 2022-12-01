const db = require('../db');

class DeviceController {
  async createDevice(req, res) {
    const {name, price, rate, image, deviceInfoId, categoryId, brandId} = req.body;
    console.log(name, price, rate, image, deviceInfoId, categoryId, brandId);
    const newCart = await db.query(`INSERT INTO device (name, price, rate, image, deviceInfoId, categoryId, brandId) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [name, price, rate, image, deviceInfoId, categoryId, brandId]);
    res.json('device Created'); 
  }

  async getOneDevice(req, res) {
    const id = req.params.id;
    const cart = await db.query(`SELECT * FROM device WHERE id = ${id}`);
    res.json(cart.rows[0]);
  }

  async getDevices(req, res) {
    const carts = await db.query(`SELECT * FROM device`);
    res.json(carts.rows); 
  }

  async updateDevice(req, res) {
    const {name} = req.body;
    const updateCart =  await db.query(`UPDATE device set name = $1, price = $2, rate = $3, image = $4, deviceInfoId = $5, categoryId = $6, brandIdname = $7 RETURNING *`, [name, price, rate, image, deviceInfoId, categoryId, brandId]);
    res.json(updateCart.rows[0]);
  }

  async deleteDevice(req, res) {
    const id = req.params.id;
    const cart = await db.query(`DELETE FROM device where id = $1`, [id]);
    res.json(cart.rows[0]);
  }
}

module.exports = new DeviceController();