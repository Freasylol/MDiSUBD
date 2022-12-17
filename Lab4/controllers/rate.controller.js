const db = require('../db');

class RateController {
  async createRate(req, res) {
    const {userId, deviceId, rate} = req.body;
    console.log(userId, deviceId, rate);
    const newRate = await db.query(`INSERT INTO rate (userId, deviceId, rate) VALUES ($1, $2, $3) RETURNING *`, [userId, deviceId, rate]);
    res.json('rate Created'); 
  }

  async getOneRate(req, res) {
    const id = req.params.id;
    const rate = await db.query(`SELECT * FROM rate WHERE id = ${id}`);
    res.json(rate.rows[0]);
  }

  async getRates(req, res) {
    const rates = await db.query(`SELECT * FROM rate`);
    res.json(rates.rows); 
  }

  async updateRate(req, res) {
    const {userId, deviceId, rate} = req.body;
    const updateRate = await db.query(`UPDATE rate set userId = $1, deviceId = $2, rate = $3 RETURNING *`, [userId, deviceId, rate]);
    res.json(updateRate.rows[0]);
  }

  async deleteRate(req, res) {
    const id = req.params.id;
    const rate = await db.query(`DELETE FROM rate where id = $1`, [id]);
    res.json(rate.rows[0]);
  }

  async getGoodRates(req, res) {
    const rates = await db.query(`SELECT * FROM rate WHERE rate BETWEEN 4 AND 5`);
    res.json(rates.rows);
  }

  async ifStatement(req, res) {

    // const rates = await db.query
    // (`DO $$ DECLARE 
    // user_age INT := 25;
    // BEGIN
    // IF user_age > 18 THEN
    // RAISE NOTICE 'Access Granted';
    // END IF;
    // IF user_age < 18 THEN
    // RETURN QUERY SELECT * FROM rate WHERE rate BETWEEN 4 AND 5;
    // END IF;
    // END $$;`)
    const rates = await db.query
    (`CREATE OR REPLACE FUNCTION get_rate (a INT) 
      RETURNS TABLE (
        rateRet INT
      ) 
      AS $$
      BEGIN
          IF a > 1 THEN
          RETURN QUERY SELECT
            rate
          FROM
            rate
          WHERE
            rate BETWEEN 4 AND 5;
          END IF;
      END; $$ 
      LANGUAGE 'plpgsql';
      SELECT * FROM get_rate(2);`)
    res.json(rates[1].rows);
  }
}

module.exports = new RateController();