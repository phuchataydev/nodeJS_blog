const express = require('express');
const newsController = require('../app/controllers/NewsController');
const router = express.Router();

router.use('/:slug', newsController.show);

//tuyến đường "/" đặt ở cuối vì nó sẽ match với các tuyến đường
// ở trên trước, nếu không có tuyến đường nào hợp lệ thì no sẽ chạy tới tuyến "/"
//nếu nó match thì sẽ chạy các tuyến ở trên
router.use('/', newsController.index);

module.exports = router;
