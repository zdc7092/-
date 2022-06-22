window.onload = function() {
	var div = document.getElementById("md");
	var anniu = document.getElementById("anniu");
	var yincang1 = document.getElementById("yincang1");
	var yincang2 = document.getElementById("yincang2");
	var yincang3 = document.getElementById("yincang3");
	var yincang4 = document.getElementById("yincang4");
	anniu.onclick = function() {
		// 显示内容
		md.style.display = "block";
		// 显示关闭键
		yincang1.style.display = "block";
		// 隐藏菜单键
		anniu.style.display = "none";
		// 隐藏初始导航栏
		yincang2.style.display = "none";
		yincang3.style.display = "none";
		yincang4.style.display = "none";
	}
	yincang1.onclick = function() {
		// 隐藏内容
		md.style.display = "none";
		// 隐藏关闭键
		yincang1.style.display = "none";
		// 显示菜单键
		anniu.style.display = "block";
		// 显示初始导航栏
		yincang2.style.display = "block";
		yincang3.style.display = "block";
		yincang4.style.display = "block";
	}
}
