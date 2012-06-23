var youku = "v.youku.com";
var five6 = "www.56.com";
var tudou = "www.tudou.com";
var ku6 = "v.ku6.com";
var ifeng = "v.ifeng.com";
var bilibili = "www.bilibili.tv";

function vsparser(url){
	var v_type = url.split("/")[2];
	if(v_type == youku){
		var v_id = url.split("/")[4].slice(3,16);
		return "http://player.youku.com/player.php/sid/" + v_id + "/v.swf";
	}else if(v_type == five6){
		var v_id = url.split("/")[4].slice(2,13);
		return "http://player.56.com/v_" + v_id + ".swf";
	}else if(v_type == tudou){
		var v_id = url.split("/")[5].slice(0,11);
		return "http://www.tudou.com/v/" + v_id + "/v.swf";
	}else if(v_type == ku6){
		if(url.split("/")[3] !== "special"){
			var v_id = url.split("/")[4].slice(0,24);
			return "http://player.ku6.com/refer/" + v_id + "/v.swf";	
		}else{
			var v_id = url.split("/")[5].slice(0,24);
			return "http://player.ku6.com/refer/" + v_id + "/v.swf";
		}
	}else if(v_type == ifeng){
		var v_id = url.split("/")[6].slice(0,36);
		return "http://v.ifeng.com/include/exterior.swf?AutoPlay=false&guid=" + v_id;
	}else if(v_type == bilibili){
		var v_id = url.split("/")[4].slice(2,8);
		return "http://static.loli.my/miniloader.swf?aid=" + v_id + "&page=1";
	}
}

exports.vsparser = vsparser;