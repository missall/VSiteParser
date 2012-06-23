var http = require("http");
var vsp = require("vsiteparser");

var swf = vsp.vsparser("http://v.youku.com/v_show/id_XNDE2MjUyMDQ0.html");
http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.end(swf);
}).listen(8888);