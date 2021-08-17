const router = require('express').Router();

const Product = require('../models/product');

router.get('/', async (req, res) => {
  const products = await Product.find({}).sort('sorting');
  res.render('index', { products });
});


router.post('/add-product', async (req, res) => {
  const product = new Product(req.body);
  const count = await Product.count();
  product.sorting = count;
  await product.save();
  res.redirect('/');
});

router.post('/products/ordering', async(req, res) => {
  const ids = req.body['id[]'];
  console.log(ids);
  for(let i = 0; i < ids.length; i++) {
    let id = ids[i];
    const product = await Product.findById(id);
    product.sorting = i;
    await product.save();
  }
  res.json('ordered');
});

module.exports = router;