/**
 * Created by xiewl on 2017/6/30.
 */
import api from '../server'
export default function (Vue,next) {
    (function regWxConfig(reset) {
        api.getWxConfig({
            url : window.location.href.split('#')[0],
            reset : reset
        }).then(function (res) {
            if(res.code === '000'){
                const data = res.data;
                Vue.wechat.config({
                    debug: false,
                    appId: data.appId,
                    timestamp: data.timestamp,
                    nonceStr: data.noncestr,
                    signature: data.signature,
                    jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']
                });
                Vue.wechat.ready(function(){
                  Vue.wechat.hideMenuItems({
                    menuList : ['menuItem:share:qq','menuItem:share:weiboApp','menuItem:favorite','menuItem:share:facebook','menuItem:share:QZone','menuItem:openWithSafari','menuItem:share:email']
                  });
                  Vue.wechat.onMenuShareTimeline({
                    title:document.title,
                    imgUrl:'http://img.leley.com/images/leleyun_p/lelyun_logo.png',
                    link:location.href
                  });
                  Vue.wechat.onMenuShareAppMessage({
                    title:document.title,
                    imgUrl:'http://img.leley.com/images/leleyun_p/lelyun_logo.png',
                    link:location.href,
                  });
                  next();
                });
                Vue.wechat.error(function(){
                  if(reset == 0) regWxConfig(1);
                });

            }
        });

    })(0);
}
