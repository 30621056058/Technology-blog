<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
     <nav class="navbar navbar-default">
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
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
