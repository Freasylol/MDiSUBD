const db = require('../db');

class CartDeviceController {
  async createCartDevice(req, res) {
    const {deviceId, cartId} = req.body;
    console.log(deviceId, cartId);
    const newCart = await db.query(`INSERT INTO cartDevice (deviceId, cartId) VALUES ($1, $2) RETURNING *`, [deviceId, cartId]);
    res.json('cartDevice Created'); 
  }

  async getOneCartDevice(req, res) {
    const id = req.params.id;
    const cart = await db.query(`SELECT * FROM cartDevice WHERE id = ${id}`);
    res.json(cart.rows[0]);
  }

  async getCartDevices(req, res) {
    const carts = await db.query(`SELECT * FROM cartDevice`);
    res.json(carts.rows); 
  }

  async updateCartDevice(req, res) {
    const {deviceId, cartId} = req.body;
    const updateCart =  await db.query(`UPDATE cartDevice set deviceId = $1, cartId = $2  RETURNING *`, [deviceId, cartId]);
    res.json(updateCart.rows[0]);
  }

  async deleteCartDevice(req, res) {
    const id = req.params.id;
    const cart = await db.query(`DELETE FROM cartDevice where id = $1`, [id]);
    res.json(cart.rows[0]);
  }
}

module.exports = new CartDeviceController();