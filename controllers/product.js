const Product = require('../models/product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    res.status(400).send({ message: 'Error fetching products', error });
  }
};

exports.createProduct = async (req, res) => {
  const { name, price, description, image, madein, yearSX, size,numberSL } = req.body;
  try {
    const product = new Product({ name, price, description,image, madein, yearSX, size,numberSL});
    await product.save();
    res.send({ message: 'Product created successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error creating product', error });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const product = await Product.findByIdAndUpdate(id, updates, { new: true });
    res.send(product);
  } catch (error) {
    res.status(400).send({ message: 'Error updating product', error });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.send({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error deleting product', error });
  }
};
