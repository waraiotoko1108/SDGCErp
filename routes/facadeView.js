var express = require('express');
var router = express.Router();

/* 所有页面请求的地址 */
router.get('/', function(req, res, next) {
    var viewPath = req.originalUrl.substr(1).replace('.html','')
    res.render(viewPath, { title: 'Express' });
});

module.exports = router;
