const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched.'
    })
});

router.post('/', (req, res, next) => {
    order = {
        produxtId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: 'Order was created',
        createdOrder: order
    })
});

router.get('/:orderId', (req, res,next) => {
    res.status(200).json({
        message: 'Order details',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req, res,next) => {
    res.status(200).json({
        message: 'Order deleted'
    });
});

module.exports = router;