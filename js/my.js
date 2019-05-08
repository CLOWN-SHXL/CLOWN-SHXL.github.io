var msg = "Sorry，This function is In development."
var showtime
var audio = document.getElementById('musicboxs')
var times = document.getElementsByClassName("times")[0]

$(".addalbum").on("click", function() {
  show(msg)
})
$(".addvoice").on("click", function() {
  show(msg)
})
$(".albumbox").on('click', function() {
window.location.href = "album.html?list="+$(this).index()
})
$(".playicon").on('click', function() {
   $('.playicon').attr('src',"icon/load.gif")
  var isplay = audio.paused
  if(isplay){
    audio.play()
    this.src = "icon/pause2.png"
  }else{
    audio.pause()
    this.src = "icon/play2.png"
  }

})
//加载完毕
 audio.addEventListener("loadeddata", function() {
    //监听audio是否加载完毕，如果加载完毕，则读取audio播放时间
//   $('.playicon').attr('src',"icon/play2.png")
    $('.times').show()
    var time = parsetime(Math.ceil(audio.duration))
    $('.endtime').html(time)
 });
 //播放完毕
 audio.addEventListener("ended", function() {
    //监听audio是否加载完毕，如果加载完毕，则读取audio播放时间
     $('.playicon').attr('src',"icon/play2.png")
     $('.starttime').html("00:00")
 });
 //播放中
 audio.addEventListener("timeupdate", function() {
//  console.log(Math.ceil(audio.currentTime))
    var times = parsetime(Math.ceil(audio.currentTime))
    $('.starttime').html(times)
 });
 //暂停
 audio.addEventListener("timeupdate", function() {
//  console.log(Math.ceil(audio.currentTime))
    var times = parsetime(Math.ceil(audio.currentTime))
    $('.starttime').html(times)
 });
  
  
//弹出封装
function show(msgs) {
  clearInterval(showtime);
  $(".layertext").text(msgs);
  $(".layerbox").show(0).css({
    opacity: 1
  })
  showtime = setTimeout(function() {
    $(".layerbox").css({
      opacity: 0
    }).delay(500).hide(0)
  }, 2000);
}

//音频时间转换

function parsetime(times) {
  var result = '00:00';
    var hour,minute,second
    if (times > 0) {
      hour = Math.floor(times / 3600);
      if (hour < 10) {
        hour = "0"+hour;
      }
      minute = Math.floor((times - 3600 * hour) / 60);
      if (minute < 10) {
        minute = "0"+minute;
      }

      second = Math.floor((times - 3600 * hour - 60 * minute) % 60);
      if (second < 10) {
        second = "0"+second;
      }
      result = minute+':'+second;
    }
    return result;
}