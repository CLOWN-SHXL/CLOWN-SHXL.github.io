/*
获取元素
*/
// 通过ID获取
function getId(id) {
	return document.getElementById(id)
}
//通过tagName
function getTag(tag, obj) {
	/*
	var sel = ''
	if(obj){
		sel = obj;
	}else{  //如果没有传第二个参数
		sel = document;
	}
	*/
	//var obj;  隐式存在
	if (!obj) {
		obj = document
	}

	//obj = obj ? obj : document

	return obj.getElementsByTagName(tag)
}
//通过tagName 获取第一个值
function getTagFirst(tag, obj) {
	/*
	var sel = ''
	if(obj){
		sel = obj;
	}else{  //如果没有传第二个参数
		sel = document;
	}
	*/
	if (!obj) {
		obj = document
	}
	return obj.getElementsByTagName(tag)[0]
}
// 通过className获取元素
function getCls(cls,obj) {
	obj = obj || document;
	//1. 检测浏览器是否支持getElementsByClassName
	if (obj.getElementsByClassName) { //支持方法的浏览器,走if
		return obj.getElementsByClassName(cls)
	} else { //IE8-	不支持方法, 走这儿
		var eles = obj.getElementsByTagName('*') //* 通配符, 就是所有元素
		var result = [] //接受满足条件的ele
			//对所有元素进行遍历, 然后找每一个元素的className中是不是包含cls这个class
		for (var i = 0; i < eles.length; i++) {
			var ele = eles[i]; //当前遍历到的元素
			//用空格 将className分割为数组,
			var clsArr = ele.className.split(' ')
				//遍历clsArr,如果其中有一个元素与我传入的参数相等, 就是我要的东西
			for (var j = 0; j < clsArr.length; j++) {
				if (clsArr[j] === cls) {
					result.push(ele);
					break; //跳出当前这个循环
				}
			}
		}
	}
	return result;
}
//获取元素的第一个子节点, 兼容
function getFirst(obj){
	return obj.firstElementChild || obj.firstChild
}
//获取元素的最后一个子节点
function getLast(obj){
	return obj.lastElementChild || obj.lastChild
}
//获取元素的下一个兄弟节点节点
function getNext(obj){
	return obj.nextElementSibling || obj.nextSibling
}
//获取元素的下一个兄弟节点节点
function getPrev(obj){
	return obj.previousElementSibling || obj.previousSibling
}
//获取元素的css属性值
function getStyle(obj,key){
	if(obj.currentStyle){
		return obj.currentStyle[key]
	}else{
		return getComputedStyle(obj)[key]
	}
}
//添加事件监听
function addEvt(obj,eventName,fn){
	//监测是否支持标准方法
	if(obj.addEventListener){
		return obj.addEventListener(eventName,fn,false)
	}else{
		return obj.attachEvent('on'+eventName,fn)
	}
}

//移除事件监听
function removeEvt(obj,eventName,fn){
	//监测是否支持标准方法
	if(obj.removeEventListener){
		return obj.removeEventListener(eventName,fn,false)
	}else{
		return obj.removeEvent('on'+eventName,fn)
	}
}

//设置cookie
function setCookie(key,value,time){
	var date = new Date();
	date.setDate(date.getDate() + time)
	console.log(date)
	document.cookie = key + "=" + value + ";expires=" + date
}
//获取cookie
function getCookie(key){
	var str = document.cookie
	var arr = str.split(';');
	for(var i=0;i<arr.length;i++){
		var _str = arr[i].trim()
		var _arr = _str.split('=')
		
		for(var j=0;j<_arr.length;j++){
			if(key === _arr[0]){
				return _arr[1]
			}
		}
	}
}
//移除cookie
function removeCookie(key){
	setCookie(key,'1',-1)
}
var timer = null;
// 缓冲动画
function move(obj, json, speed, time, k, callback) {
	var current = 0;
	speed = speed || 10;
	time = time || 17;
	k = k || 7.5;

	clearInterval(timer)
	timer = setInterval(function () {
		var isOver = true;
		for (attr in json) {
			var target = json[attr];
			if (attr === "opacity") {
				current = getStyle(obj, attr) * 100; //0.5 -> 50 
			} else {
				current = parseInt(getStyle(obj, attr));
			}
			speed = (target - current) / k;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			current += speed;
			if (current !== target) {
				isOver = false;
				if (attr === "opacity") {
					obj.style[attr] = current / 100;
				} else {
					obj.style[attr] = current + 'px';
				}
			}
		}
		if (isOver) {
			current = target;
			clearInterval(timer)
			callback && 　callback()
		}
	}, time)
}