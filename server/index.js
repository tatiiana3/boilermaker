const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path')
const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, '../public/index.html')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api', require('./apiRoutes.js'));


app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  })

app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
})