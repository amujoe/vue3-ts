<template lang="pug">
.error
  .left
    img(src="@/assets/default.png")
  .right
    .title 404
    .desc 哎呦! 页面走丢咯
    .btn-box
      a-button(type="primary" @click="goHome") 返回首页

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class Home extends Vue {
  // 去首页
  goHome(){
    this.$router.push({
      name: "/myapp"
    })
  }
}
</script>


<style lang="less" scoped>
@import "@/styles/theme-color.less";
.error{
  display: flex;
  width: 300px;
  margin: 100px auto 0;
  .left {
    img{
      width: 130px;
    }
  }
  .right{
    .title{
      margin-top: 25px;
      font-size: 100px;
      line-height: 1;
      color: @color-primary
    }
    .desc{
      font-size: 20px;
      color: @text-secondary
    }
    .btn-box{
      margin-top: 10px;
    }
  }
}

#icon{
  font-size: 14px;
}
  
</style>
