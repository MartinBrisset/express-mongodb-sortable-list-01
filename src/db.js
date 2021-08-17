const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/order-list', {
  useNewUrlParser: true
})
  .then(db => console.log('db is connected'))
  .catch(err => console.log(err));