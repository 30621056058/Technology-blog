<template>
  <div>
    <!-- <nav class="navbar navbar-default">
      <div class="container-fluid" style="width: 82%">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"
            ><img class="glyphicon glyphicon-magnet navbar-left" alt="" src="" />全智成</a
          >
        </div>
        <div class="navbar-form navbar-left navbar-text">账号注册</div>
        <div class="nav navbar-nav navbar-right navbar-text" style="margin-right: 0px">
          中文简体
        </div>
      </div>
    </nav> -->
    <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="col-md-10 col-sm-10 col-xs-10 col-md-offset-1">
        <div id="try-login" class="navbar-right" style="margin-right: 0px">
          已有账号?<a href="">马上登录</a>
        </div>
      </div>
      <div class="col-md-10 col-sm-10 col-xs-10 col-md-offset-1">
        <div class="content-login">
          <div
            id="content-login-center"
            class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3"
          >
            <div
              id="content-login-center-inside"
              class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3"
            >
              <div id="content-login-center-inside-header">
                <span class="tab-choose"
                  ><i class="glyphicon glyphicon-fire"></i
                  ><a href="">手机号注册</a> </span
                ><span id="yx"
                  ><i class="glyphicon glyphicon-fire"></i> <router-link :to="{name:'youxiang'}">邮箱注册</router-link> 
                </span>
              </div>
            </div>
            <div class="information col-md-8 col-sm-10 col-xs-10 col-md-offset-1">
              <form class="form-horizontal">
                <div class="form-group">
                  <label
                    for="inputEmail3"
                    class="col-sm-3 control-label"
                    style="text-align: left"
                    >手机号码</label
                  >
                  <div class="col-sm-9">
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail3"
                      placeholder="请输入手机号码"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label
                    for="inputEmail3"
                    class="col-sm-3 control-label"
                    style="text-align: left"
                    >验证码</label
                  >
                  <div class="col-sm-9">
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail3"
                      placeholder="点击验证"
                    />
                  </div>
                </div>
                <form class="form-inline">
                 
                  <div class="form-group" id="try-com">
                    <label id="email-try" for="exampleInputEmail2">短信验证</label>
                    <input
                      id="control-try"
                      type="email"
                      class="form-control"
                      placeholder="输入短信验证码"
                    />
                  </div>
                  <button id="btn-try" type="submit" class="btn btn-default">
                    Send invitation
                  </button>
                </form>
                 <div class="form-group" style="margin-top:15px">
                  <label
                    for="inputEmail3"
                    class="col-sm-3 control-label"
                    style="text-align: left"
                    >登录密码</label
                  >
                  <div class="col-sm-9">
                    <input
                      type="password"
                      class="form-control"
                      id="inputEmail3"
                      placeholder="请输入密码"
                    />
                  </div>
                </div>
                <div class="agreement">
                  <div class="agreement-inside">
                     <van-checkbox v-model="checked">复选框</van-checkbox>
                     <span>同意并遵守<a href="">《服务条款》</a>和<a href="">《隐私条款》</a></span>
                  </div>
                 <van-button type="primary" size="large">注册</van-button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div><router-view></router-view></div>
     
  </div>
</template>

<script>
// import '../assets/css/login.css'
import '../assets/js/a'
export default {
    data() {
    return {
      checked: true,
    };
  },
};
</script>

<style>
/* @import "../assets/css/login.css"; */
</style>
