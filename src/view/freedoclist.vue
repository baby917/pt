<template>
  <div id="freedoclist">
    <div class="header">
      <!--<div class="left">-->
        <!--<span class="active">医院</span>&emsp;<img src="../assets/icon_zixun_yiyuan@2x.png" alt="down">-->
      <!--</div>-->
      <!--<div class="right">-->
        <!--<span>科室</span>&emsp;<img src="../assets/icon_zixun_keshi@2x.png" alt="down">-->
      <!--</div>-->
      <div class="filterdept">
        筛选科室
        <img src="../assets/icon_zixun_keshi@2x.png" alt="down">
      </div>
    </div>
    <div class="doc-box">
      <div class="doc-list">
        <a class="doc-item">
          <div class="doc-img">
            <img src="../assets/icon_yizhu@2x.png">
          </div>
          <div class="doc-info">
            <p>
              <span class="doc-name">杨岗</span>
              <span class="tag-one">副主任医师</span>
            </p>
            <p>四川大学华西医院  小儿外科</p>
            <p class="good-at">擅长：小儿普外、新生儿外科、小儿普</p>
            <p>
              <i>顶级专家</i> <i>回复快</i>
            </p>
            <div class="freebtn">
              <img src="../assets/tag_mianfeizixun.png" alt="">
            </div>
          </div>
        </a>
      </div>
      <div class="doc-list">
        <a class="doc-item">
          <div class="doc-img">
            <img src="../assets/icon_yizhu@2x.png">
          </div>
          <div class="doc-info">
            <p>
              <span class="doc-name">杨岗</span>
              <span class="tag-one">副主任医师</span>
            </p>
            <p>四川大学华西医院  小儿外科</p>
            <p class="good-at">擅长：小儿普外、新生儿外科、小儿普</p>
            <p>
              <i>顶级专家</i> <i>回复快</i>
            </p>
            <div class="freebtn">
              <img src="../assets/tag_mianfeizixun.png" alt="">
            </div>
          </div>
        </a>
      </div>
      <div class="doc-list">
        <a class="doc-item">
          <div class="doc-img">
            <img src="../assets/icon_yizhu@2x.png">
          </div>
          <div class="doc-info">
            <p>
              <span class="doc-name">杨岗</span>
              <span class="tag-one">副主任医师</span>
            </p>
            <p>四川大学华西医院  小儿外科</p>
            <p class="good-at">擅长：小儿普外、新生儿外科、小儿普</p>
            <p>
              <i>顶级专家</i> <i>回复快</i>
            </p>
            <div class="freebtn">
              <img src="../assets/tag_mianfeizixun.png" alt="">
            </div>
          </div>
        </a>
      </div>
      <div class="doc-list">
        <a class="doc-item">
          <div class="doc-img">
            <img src="../assets/icon_yizhu@2x.png">
          </div>
          <div class="doc-info">
            <p>
              <span class="doc-name">杨岗</span>
              <span class="tag-one">副主任医师</span>
            </p>
            <p>四川大学华西医院  小儿外科</p>
            <p class="good-at">擅长：小儿普外、新生儿外科、小儿普</p>
            <p>
              <i>顶级专家</i> <i>回复快</i>
            </p>
            <div class="freebtn">
              <img src="../assets/tag_mianfeizixun.png" alt="">
            </div>
          </div>
        </a>
      </div>
      <div class="doc-list">
        <a class="doc-item">
          <div class="doc-img">
            <img src="../assets/icon_yizhu@2x.png">
          </div>
          <div class="doc-info">
            <p>
              <span class="doc-name">杨岗</span>
              <span class="tag-one">副主任医师</span>
            </p>
            <p>四川大学华西医院  小儿外科</p>
            <p class="good-at">擅长：小儿普外、新生儿外科、小儿普</p>
            <p>
              <i>顶级专家</i> <i>回复快</i>
            </p>
            <div class="freebtn">
              <img src="../assets/tag_mianfeizixun.png" alt="">
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="content dept-list-box">
      <div class="left-box">
        <a href="javascript:;" class="active">内科</a>
        <a href="javascript:;">儿科</a>
        <a href="javascript:;">外科</a>
        <a href="javascript:;">耳鼻咽喉科</a>
      </div>
      <div class="right-box">
        <a>内科</a>
        <a>消化内科</a>
        <a>心脏内科</a>
        <a>神经内科</a>
        <a>内分泌代谢内科</a>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style lang="less">
  #freedoclist{
    font-size: 12px;width: 100%;
    .header{border-bottom:1px solid #E9E9E9;padding:.13rem;height:.45rem;box-sizing: border-box}
    .header div{font-size: .14rem;color:#999;}
    .header div img{float: right;margin-top: .06rem;}
    .header div span.active{color: #00A560;}
    .header img{width: .14rem; vertical-align: middle; margin-left: .05rem; opacity: 0.6;}
    .left{border-right: 1px solid #E9E9E9;}
    .doc-box{height: auto;position: relative;padding-left: .1rem;}
    .doc-list .doc-item{padding-left: 0.12rem;height: 1.09rem;display: flex;padding-top: 0.12rem;box-sizing: border-box;}
    .doc-list .doc-item .doc-img{width: 0.55rem;position: relative;margin-right: 0.12rem;overflow: hidden;margin-top:.05rem;}
    .doc-list .doc-item img{width: 0.48rem;height: 0.48rem;border-radius: 50%}
    .doc-list .doc-img span{position: absolute;top:0.45rem;background:#6bd1a1;color:#fff;font-size: 0.12rem; border-radius: 40%;z-index: 99;padding: 0.01rem 0.02rem;left: 0.13rem;}
    .doc-item .doc-info{flex: 1;border-bottom:1px solid #e9e9e9;position: relative}
    .doc-item .doc-info p{color:#666;line-height: 0.22rem;}
    .doc-item .doc-info p:last-child{margin-top: 0.05rem;}
    .doc-item .doc-info .doc-name{color:#333;font-size: 0.14rem;margin-right: 0.05rem;}
    .doc-item .tag-one{font-size: 12px;color: #999999;border-radius: 0.02rem;padding:0.01rem 0.02rem;margin:0 0.05rem;}
    .doc-item .doc-info .good-at{color:#999;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;height: 0.2rem;width: 2.8rem;margin-bottom: .04rem;}
    .doc-item .doc-info i{font-size: 0.12rem;height: 0.16rem;border: 1px solid #6bd1a1;color: #6bd1a1;display: inline-block;text-align: center;line-height: 0.16rem;border-radius: 0.02rem;margin-right: 0.05rem;padding: 0 .03rem;}
    .doc-item .doc-info .freebtn{position: absolute;bottom: .05rem;right: .1rem;}
    .doc-item .doc-info .freebtn img{width: .54rem;height: .18rem;border-radius: 0}
    .content{background: #fff;font-size: .16rem;height: 100%;position: fixed;width: 100%;max-width: 750px;opacity: 0;visibility:hidden;transition: all .2s ease;}
    .content.show{opacity: 1;visibility:visible;}
    .content>div{float: left; height: 100%; overflow-x: hidden; overflow-y: auto;}
    .left-box{width: 40%}
    .left-box a{display:block;height: .4rem;text-align: center;color: #666666;width: 100%;border-right: 1px solid rgba(1,1,1,.1);
      line-height: .4rem;border-bottom: 1px solid rgba(1,1,1,.1);background-color: rgba(1,1,1,.03)}
    .left-box a.active{background: #fff;border-right-color: transparent;}
    .right-box{width: 56%;position: absolute;right: 0}
    .right-box a{display: block;width: 100%;height: .4rem;line-height: .4rem;color: #666666;border-bottom: 1px solid rgba(1,1,1,.1)}
  }
</style>
