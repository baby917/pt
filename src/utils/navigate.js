var bowserAgent = function () {
  var ua = navigator.userAgent.toLocaleLowerCase();
  //微信浏览器
  if(ua.indexOf('micromessenger') >= 0 ){
    return 'wechat'
  }
  //和生活
  if(ua.indexOf('heshenghuo') >=0){
    return 'heshenghuo'
  }
  return 'other'
}
module.exports = bowserAgent;
