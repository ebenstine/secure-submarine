const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, (req, res) => {
  // what is the value of req.user????
  console.log('req.user:', req.user);

  let queryText, queryParams;
  if (req.user.clearance_level >= 10) {
    queryText = `SELECT * FROM "secret"`;
    queryParams = [];
  }
  else {
    queryText = `
    SELECT * FROM "secret"
    WHERE user_id = $1
    `;
    queryParams = [req.user.id]
  }

  pool
    .query(queryText, queryParams)
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('Error making SELECT for secrets:', error);
      res.sendStatus(500);
    });
});

module.exports = router;
