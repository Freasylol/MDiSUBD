const db = require('../db');

class BrandController {
  async createBrand(req, res) {
    const {name} = req.body;
    console.log(name);
    const newBrand = await db.query(`INSERT INTO brand (name) VALUES ($1) RETURNING *`, [name]);
    res.json('brand Created'); 
  }

  async getOneBrand(req, res) {
    const id = req.params.id;
    const brand = await db.query(`SELECT * FROM brand WHERE id = ${id}`);
    res.json(brand.rows[0]);
  }

  async getBrands(req, res) {
    const brands = await db.query(`SELECT * FROM brand`);
    res.json(brands.rows); 
  }

  async updateBrand(req, res) {
    const {name} = req.body;
    const updateBrand =  await db.query(`UPDATE brand set name = $1 RETURNING *`, [name]);
    res.json(updateBrand.rows[0]);
  }

  async deleteBrand(req, res) {
    const id = req.params.id;
    const brand = await db.query(`DELETE FROM brand where id = $1`, [id]);
    res.json(brand.rows[0]);
  }

  async innerJoinDevice(req, res) {
    const brand = await db.query(`SELECT brand.name, device.name, device.price FROM brand JOIN device ON brand.id = device.brandId`);
    res.json(brand.rows);
  }

  async leftJoinDevice(req, res) {
    const brand = await db.query(`SELECT brand.name, device.name, device.price FROM brand LEFT JOIN device ON brand.id = device.brandId`);
    res.json(brand.rows);
  }

  async rightJoinDevice(req, res) {
    const brand = await db.query(`SELECT brand.name, device.name, device.price FROM brand RIGHT JOIN device ON brand.id = device.brandId`);
    res.json(brand.rows);
  }

  async fullJoinDevice(req, res) {
    const brand = await db.query(`SELECT * FROM brand FULL OUTER JOIN device ON brand.id=device.brandId`);
    res.json(brand.rows);
  }

  async crossJoinDevice(req, res) {
    const brand = await db.query(`SELECT * FROM brand CROSS JOIN device`);
    res.json(brand.rows);
  }

  // async selfJoinDevice(req, res) {
  //   const brand = await db.query(`SELECT * FROM device WHERE device.rate > 2`);
  //   res.json(brand.rows);
  // }

  async selfJoinDevice(req, res) {
    const brand = await db.query(`SELECT * FROM device JOIN device ON brand.name=deviceInfo.name`);
    res.json(brand.rows);
  }

  // async countDevice(req, res) {
  //   const brand = await db.query(`SELECT COUNT(device.id), device.rate FROM device GROUP BY device.rate HAVING COUNT(device.id) > 0`);
  //   res.json(brand.rows);
  // }

  async countDevice(req, res) {
    const brand = await db.query(`SELECT COUNT(*) FROM device WHERE device.price > 100`);
    res.json(brand.rows);
  }

  async unionDevice(req, res) {
    const brand = await db.query(`SELECT device.name FROM device 
                                  UNION
                                  SELECT brand.name FROM brand`);
    res.json(brand.rows);
  }

  async unionDevice(req, res) {
    const brand = await db.query(`SELECT device.name FROM device 
                                  UNION
                                  SELECT brand.name FROM brand`);
    res.json(brand.rows);
  }

  async caseDevice(req, res) {
    const brand = await db.query(`SELECT DISTINCT device.price, 
                                    CASE 
                                      WHEN device.price IS NULL THEN 0
                                      ELSE device.price
                                    END
                                  FROM device`);
    res.json(brand.rows);
  }

  async explainDevice(req, res) {
    const brand = await db.query(`EXPLAIN SELECT * FROM brand`);
    res.json(brand.rows);
  }

  async existDevice(req, res) {
    const brand = await db.query(`SELECT *
                                  FROM device
                                  WHERE EXISTS (SELECT * FROM brand 
                                  WHERE brand.id = device.brandId)`);
    res.json(brand.rows);
  }

  async 
}

module.exports = new BrandController();