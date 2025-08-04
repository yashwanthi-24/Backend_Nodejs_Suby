const express = require('express')
const firmController = require('../controllers/firmController');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();
router.post('/add-firm',verifyToken,firmController.addFirm);

router.get('/uploads/:imageName',(req,res)=>{
    const imageName = req.params.imageName;
    res.headersSent('Content-type','image/jpeg');
    res.sendFile(path.join(__dirname,'..','uploades',imageName));
});
router.delete('/:firmId',firmController.deleteFirmById); 

module.exports = router;