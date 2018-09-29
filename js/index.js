window.onload = function(){

	let f = document.querySelectorAll(".logo ul li .conten");
	let top = document.querySelector(".t-t");
	let yu = document.querySelectorAll(".yuy .yu");

	window.onscroll = function(){
		let hi = document.body.scrollTop||document.documentElement.scrollTop;
		// 顶部导航栏
		if(hi>=100){
			top.style.background = "#fff";
			for(let i=0;i<f.length;i++){
				f[i].style.color = "#000";
			}
		}
		if(hi<100){
			top.style.background = "";
			for(let i=0;i<f.length;i++){
				f[i].style.color = "#fff";
			}
		}
		
		// 左右两边同时移入页面
		if(hi>986){
			animate(yu[0],{left: 20});
			animate(yu[1],{left: 560});
		}
		if(hi>1386) {
			animate(yu[2],{left: 20});
			animate(yu[3],{left: 560});
		}
		if(hi>1436) {
			animate(yu[4],{left: 20});
			animate(yu[5],{left: 560});
		}
		
	}
	for(let i=0;i<f.length;i++){
		
			f[i].onmouseover = function(){
				this.style.color = "#16b0dc";
			}
			f[i].onmouseout = function(){
				let scr = document.body.scrollTop||document.documentElement.scrollTop;
				if(scr>=100){
					this.style.color = "#000";
				}
				if(scr<100){
					this.style.color = "#fff";
				}
			}
		}
	


	let banner = document.querySelector(".banner");
	let imgs = document.querySelectorAll(".banner ul li");
	let dot = document.querySelectorAll(".banner .btn div");
	let lefts = document.querySelector(".banner .t-left");
	let rights = document.querySelector(".banner .t-right");
	ban(banner,imgs,lefts,rights,2,dot,"active");


	
	// 函数形参：
	// 	1.鼠标移入的box，
	// 	2.图片长度imgs，
	//	5.左箭头lefts，
	// 	6.右箭头rights
	//  7.时间间隔函数的时间
	//  3.轮播点长度dots，
	// 	4.要添加/移除的类名clsname，
	function ban(box,imgs,lefts,rights,time,dots,clsname){
		let w = parseInt(getComputedStyle(box,null).width);
		let t = setInterval(move,1000*time);
		let now = 0;
		let next = 0;
		imgs[0].style.left = 0;
		dots[0].classList.add(clsname);
		//自动轮播    
		function move(){
			next++;
			if(next==imgs.length){
				next=0;
			}
			imgs[now].style.left = 0;
			imgs[next].style.left = w+"px";
			animate(imgs[now],{left: -w},function(){
				dots[now].classList.remove(clsname);
			});
			animate(imgs[next],{left: 0},function(){
				for(let i=0;i<dots.length;i++){
					dots[i].classList.remove(clsname);
				}
				dots[next].classList.add(clsname);
			});
			now = next;
		}
		//轮播点轮播     
		for(let i=0;i<imgs.length;i++){
			dots[i].onmouseover = function(){
				for(let j=0;j<imgs.length;j++){
					imgs[j].style.left = -w + "px";
					dots[j].classList.remove(clsname);
				}
				imgs[i].style.left = 0;
				dots[i].classList.add(clsname);
				clearInterval(t);
			}
			dots[i].onmouseout = function(){
				t = setInterval(move,2000);
			}
		}
		//鼠标移入banner停止时间间隔
		box.onmouseover = function(){
			clearInterval(t);
		}
		//鼠标移出banner开始时间间隔
		box.onmouseout = function(){
			t = setInterval(move,2000);
		}
		//箭头    
		rights.onclick = function(){
			move();
		}
		lefts.onclick = function(){
			next--;
			if(next<0){
				next=imgs.length-1;
			}
			imgs[now].style.left = 0;
			imgs[next].style.left = -w+"px";
			animate(imgs[now],{left: w},function(){
				dots[now].classList.remove(clsname);
			});
			animate(imgs[next],{left: 0},function(){
				for(let i=0;i<dots.length;i++){
					dots[i].classList.remove(clsname);
				}
				dots[next].classList.add(clsname);
			});
			now = next;
		}
	}
	
	//平移||轮播
	
	
}