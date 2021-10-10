<template>
  <div>
    <div class="container">
      <div class="col-md-4 col-md-offset-4" id="tab-top">
        <!-- registered-tab -->
        <div class="registered-tab">
          <div class="registered-tab-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-phone"
              viewBox="0 0 16 16"
            >
              <path
                d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
              />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            <p style="margin: 0">
              <router-link :to="{ name: 'registeredphone' }">
                手机号注册</router-link
              >
            </p>
          </div>
          <div class="registered-tab-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-phone"
              viewBox="0 0 16 16"
            >
              <path
                d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
              />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            <p style="margin: 0"><router-link :to="{name:'registeredemali'}"> 邮箱注册</router-link></p>
          </div>
        </div>

        <!-- registered-tab -->
      </div>
    
    </div>
      <div><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  data(){
    return{}
  },
    methods:{
onsubmit(){
if(this.password === this.qdpassword){
   axios({
       method:'GET',
       url:'http://localhost:8080/../../static/a.json'//这是我自己搞的文件
   }).then(res => res =>this.$router.push({name:"login"})//注册完跳转到登录
     
   )
}else{
    console.log("失败")
}
}
    }
// ————————————————
// 版权声明：本文为CSDN博主「坎坷的程序员」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/weixin_49527298/article/details/118858670
// ————————————————/
// 版权声明：本文为CSDN博主「坎坷的程序员」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/weixin_49527298/article/details/118858670/
  },
};
</script>

<style>
/* @import "../assets/css/registered.css"; */
/* @import '../style/zhucc.css'; */
/* @import "../assets/css/a.css"; */
</style>