<template>
    <div id="archivesSuccess">
        <img src="../assets/icon_login_successed@2x.png" class="banner">
        <p class="status">加入成功</p>
        <p class="tips">您已完善资料，并成功加入随访计划</p>
        <!--<button class="enter" @click="enter">进入随访计划</button>-->
    </div>
</template>
<script>
    export default {
        data(){
            return{
                url:decodeURIComponent(this.$route.params.url)
            }
        },
        methods:{
            enter(){
                location.replace(this.url)
            }
        }
    }
</script>
<style lang="less">
    #archivesSuccess{
        font-size: 12px;
        padding-top: .4rem;
        .banner{
            display: block;margin: 0 auto;width: 60%;margin-bottom: .3rem;
        }
        .status{color: #333;font-size: .2rem;text-align: center;margin-bottom: .1rem}
        .tips{font-size: .14rem;color: #999;text-align: center;margin-bottom: .3rem}
        .enter{height: .44rem;width: 1.88rem;color: #01a7e1;font-size: .16rem;border: 1px solid #5dd0f8;border-radius: 35px;background-color: transparent;
            margin: 0 auto;display: block;outline: none;
        }
    }
</style>
