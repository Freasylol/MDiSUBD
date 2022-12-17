const db = require('../db');

class OrdersController {
  async createOrder(req, res) {
    const {userId, cardNum, orderIdList} = req.body;
    console.log(userId, cardNum, orderIdList);
    const newCart = await db.query(`INSERT INTO orders (userId, cardNum, orderIdList) VALUES ($1, $2, $3) RETURNING *`, [userId, cardNum, orderIdList]);
    res.json('brand Created'); 
  }

  async getOneOrder(req, res) {
    const id = req.params.id;
    const cart = await db.query(`SELECT * FROM orders WHERE id = ${id}`);
    res.json(cart.rows[0]);
  }

  async getOrders(req, res) {
    const carts = await db.query(`SELECT * FROM orders`);
    res.json(carts.rows); 
  }

  async updateOrder(req, res) {
    const {userId, cardNum, orderIdList} = req.body;
    const updateCart =  await db.query(`UPDATE orders set userId = $1, cardNum = $2, orderIdList = $3 RETURNING *`, [userId, cardNum, orderIdList]);
    res.json(updateCart.rows[0]);
  }

  async deleteOrder(req, res) {
    const id = req.params.id;
    const cart = await db.query(`DELETE FROM orders where id = $1`, [id]);
    res.json(cart.rows[0]);
  }
}

module.exports = new OrdersController();