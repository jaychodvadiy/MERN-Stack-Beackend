const Order = require('../models/orderModel');

exports.createOrder = async (req, res) => {
  const { user, products, totalAmount } = req.body;

  try {
    const newOrder = new Order({
      user,
      products,
      totalAmount,
      paymentStatus: 'Pending',
    });

    await newOrder.save();
    res.status(200).json({ msg: 'Order placed successfully', order: newOrder });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};
