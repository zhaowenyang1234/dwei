var express = require('express');
var router = express.Router();

//首页服务数据
router.get('/service', function (req, res) {
    const data = require('../data/service.json');
    res.send(data)
});
//服务商数据
router.get('/servicepro', function (req, res) {
    const data = require('../data/servicepro.json');
    res.send(data)
});
//评价数据
router.get('/comment', function (req, res) {
    const data = require('../data/comment.json');
    res.send(data)
});
//商家描述
router.get('/detail', function (req, res) {
    const data = require('../data/detail.json');
    res.send(data)
});


//新增评价数据接口
router.get('/comments',function (req, res) {
    var page = req.query.page/1;
    var data = require('../data/comments.json');
    var comments = data.slice(page*10,10*(page+1));
    res.send(comments)
});

module.exports = router;

