var src1 = [{
  src:"img/album1/1.jpg",
  name:"家庭相册",
  time:"2019-4-30"
},
{
  src:"img/album1/2.jpg",
  name:"家庭相册",
  time:"2019-4-30"
},
{
  src:"img/album1/3.jpg",
  name:"家庭相册",
  time:"2019-4-30"
},
{
  src:"img/album1/4.jpg",
  name:"家庭相册",
  time:"2019-4-30"
},
{
  src:"img/album1/5.jpg",
  name:"家庭相册",
  time:"2019-4-30"
}]
var src2 = [{
  src:"img/album2/1.jpg",
  name:"比飞却似关睢鸟，并蒂常开边理枝",
  time:"2019-4-30"
},
{
  src:"img/album2/2.jpg",
  name:"杯交玉液飞鹦鹉，乐奏瑶池舞凤凰",
  time:"2019-4-30"
},
{
  src:"img/album2/3.jpg",
  name:"百年恩爱双心结，千里姻缘一线牵",
  time:"2019-4-30"
},
{
  src:"img/album2/4.jpg",
  name:"琴韵谱成同梦语，灯花笑对含羞人",
  time:"2019-4-30"
},
{
  src:"img/album2/5.jpg",
  name:"白首齐眉鸳鸯比翼 青阳启瑞桃李同心",
  time:"2019-4-30"
}]
var src3 = [{
  src:"img/album3/1.jpg",
  name:"亲朋好友",
  time:"2019-4-30"
},
{
  src:"img/album3/2.jpg",
  name:"亲朋好友",
  time:"2019-4-30"
},
{
  src:"img/album3/3.jpg",
  name:"亲朋好友",
  time:"2019-4-30"
},
{
  src:"img/album3/4.jpg",
  name:" 无比幸福,更无比难忘",
  time:"2019-4-30"
},
{
  src:"img/album3/5.jpg",
  name:"亲朋好友",
  time:"2019-5-4"
},
{
  src:"img/album3/6.jpg",
  name:"亲朋好友",
  time:"2019-5-4"
},
{
  src:"img/album3/7.jpg",
  name:"亲朋好友",
  time:"2019-5-4"
},
{
  src:"img/album3/8.jpg",
  name:"亲朋好友",
  time:"2019-5-4"
},
{
  src:"img/album3/9.jpg",
  name:"亲朋好友",
  time:"2019-5-4"
}]
var url=JSON.parse(GetRequest().list)+1
var src = eval("src"+url)
var lists = document.getElementsByClassName("list")
var index = 0;
for(idx in src){
  var i = getMinHeightLi(lists)
  var stc = $(lists).eq(i).html();
  stc += `<div class="listbox"><img class="list_img" src="${src[idx].src}"/> <p class="albumtext">${src[idx].name}</p> <p class="time">${src[idx].time}</p> </div>`;
  $(lists).eq(i).html(stc)
}


//获取最小高度li
function getMinHeightLi(lists) {
  var minHeight = lists[index].offsetHeight;
  //console.log(minHeight)
  for(var i = 0; i < lists.length; i++) {
    if(minHeight > lists[i].offsetHeight) {
      minHeight = lists[i].offsetHeight
      index = i
    }
  }
  return index;
}

//获取url中"?"符后的字串
function GetRequest() {   
   var url = location.search; 
   var theRequest = new Object();   
   if (url.indexOf("?") != -1) {   
      var str = url.substr(1);   
      strs = str.split("&");   
      for(var i = 0; i < strs.length; i ++) {   
         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
      }   
   }   
   return theRequest;   
}