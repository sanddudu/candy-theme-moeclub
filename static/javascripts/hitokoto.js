$(document).ready(function () {
	function hitokoto () {
		function getcat () {
			var cat;
			var d = new Date();
			var day = d.getDate();
			if (day % 2 == 0) {
				cat = "a";
			} else if (day % 3 == 0) {
				cat = "b";
			} else if (day % 4 == 0) {
				cat = "c";
			} else {
				cat = "d";
			}
			return cat;
		}
		$.ajax({
			type : "get",
			async: false,
			url : "http://api.hitokoto.us/rand?encode=jsc&length=20&cat=" + getcat(),
			dataType : "jsonp",
			jsonp: "fun",
			jsonpCallback:"hitokoto",
			success : function(json){
				var html = json.hitokoto;
					html += "<span class='desc'>";
					html += "——" + " " + "《" + json.source + "》";
					html += "</span>";
					$("#hitokoto").html(html);
				},
			error : function (e) {
				console.log("Get Hitokoto Faied!");
			}
		});
	}
	hitokoto();
});