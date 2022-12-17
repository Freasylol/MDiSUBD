const db = require('../db');

class CategoryController {
  async createCategory(req, res) {
    const {name} = req.body;
    console.log(name);
    const newCart = await db.query(`INSERT INTO category (name) VALUES ($1) RETURNING *`, [name]);
    res.json('category Created'); 
  }

  async getOneCategory(req, res) {
    const id = req.params.id;
    const cart = await db.query(`SELECT * FROM category WHERE id = ${id}`);
    res.json(cart.rows[0]);
  }

  async getCategories(req, res) {
    const carts = await db.query(`SELECT * FROM category`);
    res.json(carts.rows); 
  }

  async updateCategory(req, res) {
    const {name} = req.body;
    const updateCart =  await db.query(`UPDATE category set name = $1 RETURNING *`, [name]);
    res.json(updateCart.rows[0]);
  }

  async deleteCategory(req, res) {
    const id = req.params.id;
    const cart = await db.query(`DELETE FROM category where id = $1`, [id]);
    res.json(cart.rows[0]);
  }
  // like, offset, between,
}

module.exports = new CategoryController();