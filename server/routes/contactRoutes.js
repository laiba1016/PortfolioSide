const express = require('express');
const { handleContactForm } = require('../controllers/contactController');
const router = express.Router();

router.post('/contact', handleContactForm);
router.get('/', (req, res) => {
    res.status(200).json({ message: "API is working!" });
});

module.exports = router;
