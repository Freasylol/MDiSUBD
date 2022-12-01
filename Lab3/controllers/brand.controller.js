const db = require('../db');

class BrandController {
  async createBrand(req, res) {
    const {name} = req.body;
    console.log(name);
    const newCart = await db.query(`INSERT INTO brand (name) VALUES ($1) RETURNING *`, [name]);
    res.json('brand Created'); 
  }

  async getOneBrand(req, res) {
    const id = req.params.id;
    const cart = await db.query(`SELECT * FROM brand WHERE id = ${id}`);
    res.json(cart.rows[0]);
  }

  async getBrands(req, res) {
    const carts = await db.query(`SELECT * FROM brand`);
    res.json(carts.rows); 
  }

  async updateBrand(req, res) {
    const {name} = req.body;
    const updateCart =  await db.query(`UPDATE brand set name = $1 RETURNING *`, [name]);
    res.json(updateCart.rows[0]);
  }

  async deleteBrand(req, res) {
    const id = req.params.id;
    const cart = await db.query(`DELETE FROM brand where id = $1`, [id]);
    res.json(cart.rows[0]);
  }
}

module.exports = new BrandController();