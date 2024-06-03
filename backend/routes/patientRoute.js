const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Routes for CRUD operations
router.put('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);
router.get('/', customerController.getCustomers); // Updated route path
router.get('/search', customerController.queryCustomerByName);
router.post('/', customerController.createCustomer);

module.exports = router;
