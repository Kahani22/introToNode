const express = require('express');
const hbs = require('hbs');
const path = require('path');
const sql = require('./utils/sql');

const port = process.env.PORT || 3000; // this is a node convention


const app = express();

app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views',path.join(__dirname + "/views"));

app.get('/', (req, res) => {
  res.render('home', { homemessage: "hey there!", bio: "some bio info"});
})

app.get('/users', (req,res) => {

})

sql.getConnection((err, connection) => {
  if (err) {
    return console.log(err.message);
  }
  
  let query = "SELECT * FROM tbl_card"

  sql.query(query, (err, rows) => {
    // were done with our DB connection, so let someone else
    connection.release();

    //if something broke, quit and hsow an erroe message
    if (err) { return console.log(err.message); }

    //show me the data!
    console.log(rows);

    //res.render('user', rows[0]);
  })
})

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
