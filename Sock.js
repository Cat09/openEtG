var userutil = require("./userutil");
var socket = eio({hostname: location.hostname, port: 13602});
exports.et = socket;
exports.user = undefined;
exports.userEmit = function(x, data) {
	if (!data) data = {};
	data.x = x;
	data.u = exports.user.name;
	data.a = exports.user.auth;
	socket.send(JSON.stringify(data));
}
exports.emit = function(x, data){
	if (!data) data = {};
	data.x = x;
	socket.send(JSON.stringify(data));
}
exports.userExec = function(x, data){
	if (!data) data = {};
	exports.userEmit(x, data);
	userutil[x](data, exports.user);
}