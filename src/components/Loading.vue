<template>
    <div id="loading">
        <div class="mask"></div>
        <div class="content">
            <div class="img-loading"></div>
        </div>
    </div>
</template>
<script>
export default{

}
</script>
<style lang="less">
    #loading{
        .mask{position: fixed;top:0;left:0;width: 100%;height: 100%;background: rgba(255,255,255,1);z-index: 999}
        .content{position: absolute;top:0;left: 0;width: 100%;height:100%;z-index: 1000;display: flex;align-items: center;justify-content: center}
        .content .img-loading{width: 0.42rem;height: 0.42rem;background: url("../assets/loading_icon_logo@2x.png");background-size: cover;animation:move .5s steps(6) infinite;
            animation-timing-function : step-start;}
    @keyframes move {
        0%{
            background-position : 0;
        }
        16.66%{
            background-position : -.42rem;
        }
        33.33%{
            background-position : -.84rem;
        }
        50%{
            background-position : -1.26rem;
        }
        66.66%{
            background-position : -1.68rem;
        }
        83.33%{
            background-position : -2.1rem;
        }
    }
    }
</style>