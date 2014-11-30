var express = require('express');

var router1 = express.Router();
router1.get('/v1/post/:id', function(req, res, next) {
    res.send('hello!');
});

module.exports = {
    cwd: './test',
    handler: [{
        match: 'find.qq.com/index.html',
        action: './dist/'
    }, {
        match: 's.url.cn/qqfind/cdn/',
        action: './dist/'
    }],
    mocker: [{
        match: 'cgi.find.qq.com',
        action: router1
    }],
    router: [{
        match: 'find.qq.com/cgi-bin/',
        action: '-'
    }, {
        match: 'find.qq.com/',
        action: '10.12.23.156:8080'
    }],
    extender: [{
        match: 'find.qq.com/cgi-bin/',
        action: {
            func: 'delay',
            args: 5
        }
    }, {
        match: 'find.qq.com/',
        action: {
            func: 'addResponseHeader',
            args: ['powered', 'alloyteam']
        }
    }]
};
