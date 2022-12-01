const db = require('../db');

class CartController {
  async createCart(req, res) {
    const {userid} = req.body;
    console.log(userid);
    const newCart = await db.query(`INSERT INTO cart (userid) VALUES ($1) RETURNING *`, [userid]);
    res.json('cart Created'); 
  }

  async getOneCart(req, res) {
    const id = req.params.id;
    const cart = await db.query(`SELECT * FROM cart WHERE id = ${id}`);
    res.json(cart.rows[0]);
  }

  async getCarts(req, res) {
    const carts = await db.query(`SELECT * FROM cart`);
    res.json(carts.rows); 
  }

  async updateCart(req, res) {
    const {userId} = req.body;
    const updateCart =  await db.query(`UPDATE cart set userId = $1 RETURNING *`, [userId]);
    res.json(updateCart.rows[0]);
  }

  async deleteCart(req, res) {
    const id = req.params.id;
    const cart = await db.query(`DELETE FROM cart where id = $1`, [id]);
    res.json(cart.rows[0]);
  }
}

module.exports = new CartController();