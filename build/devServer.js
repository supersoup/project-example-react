/**
 * Created by Administrator on 2018/10/15.
 */
const express = require('express');
const Mock = require('mockjs');
const app = express();
const port = 9022;

var server = app.listen(port, function () {
	var port = server.address().port;
	console.log('测试服务器开启！端口号：', port);
});