<template>
  <el-form
    :model="ruleForm2"
    :rules="rules2"
    ref="ruleForm2"
    label-position="left"
    label-width="0px"
    class="demo-ruleForm login-container"
  >
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button
        type="primary"
        style="width:100%;"
        @click.native.prevent="handleSubmit2"
        :loading="logining"
      >登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from "axios";
import router from "../router/index.js";
export default {
  data() {
    return {
      logining: false,
      ruleForm2: {
        account: "",
        checkPass: ""
      },
      rules2: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        checkPass: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      checked: false
    };
  },
  methods: {
    handleReset2() {
      this.$refs.ruleForm2.resetFields();
    },
    // 登陆确定按钮
    handleSubmit2(ev) {
      var _this = this;
      this.$refs.ruleForm2.validate(valid => {
        if (valid) {
          if (
            this.ruleForm2.account == "ytxd" &&
            this.ruleForm2.checkPass == "ytxd"
          ) {
            this.logining = true;
            this.$router.push({ path: "/price" });
            this.$message({
              showClose: true,
              message: "登录成功",
              type: "success"
            });
          } else {
            this.$message.error('错了哦，请重新输入');
          }

          // sessionStorage.setItem('user', JSON.stringify(userName));

          // var loginParams = { userName: this.ruleForm2.account, password: this.ruleForm2.checkPass };
          //   axios.onPost(loginParams).then(data => {
          //     this.logining = false;
          //     let { statusMessage, statusCode, userName } = data.data;
          //     if (statusCode !== 200) {
          //       this.$message({
          //         message: statusMessage,
          //         type: 'error'
          //       });
          //     } else {
          //       this.$message({
          //         message: statusMessage,
          //         type: 'success'
          //       });
          //       sessionStorage.setItem('user', JSON.stringify(userName));
          //       this.$router.push({ path: '/price' });
          //     }
          // });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
}
</style>