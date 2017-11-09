/**
 * https://api.douban.com/v2/movie/subject/1764796?start=0&count=10&callback=fn
 *url:  请求的地址   https://api.douban.com/v2/movie/subject/1764796
 * data:  请求的参数   url?start=0&count=10&callback=fn
 *      {start:0,count:10}
 * callback:  回调函数
 */
angular.module('JSONP',[])
    .service('HttpService',function ($window,$document) {
        this.jsonp = function (url,data,callback) {
            let queryString = url.includes('?') ? "&" : "?";
            for(let key in data){
                queryString += key+"=" + data[key] + "&"
            }
            queryString += "callback=fn"
            $window['fn'] = callback
            var scriptEle = $document[0].createElement('script')
            scriptEle.src = url + queryString
            $document[0].body.appendChild(scriptEle)
        }
    })