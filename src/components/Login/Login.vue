<template lang="pug">
.login
  .title 登陆
  .input-box
    a-input(addon-before="账号" v-model:value="account")
    a-input(addon-before="密码" v-model:value="password")
  .btn-box
    a-button(@click="login" type="primary") 登陆
    a-button(@click="login") 注册
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class Home extends Vue {
  private account = "";
  private password = "";

  // 登陆
  login() {
    console.log("account", this.account);
    console.log("password", this.password);
    
    this.$router.push({
      name: "myapp"
    })
  }

  mounted() {
    console.log('mounted', this);
  }
}
</script>

<style lang="less" scoped>
.login{
  width: 400px;
  padding: 20px;
  margin: 200px auto 0;
  border: 1px solid #eee;
  border-radius: 5px;
  .title{
    font-size: 14px;
  }
  .input-box {
    /deep/ .ant-input-group-wrapper {
      margin-top: 20px;
    }
  }
  .btn-box{
    margin-top: 20px;
    .ant-btn{
      margin-right: 10px;
    }
  }
}
</style>
