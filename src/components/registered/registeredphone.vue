<template>
  <div>
  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12 col-md-offset-4">
    <div class="information-form">
      <form action="">
         <div class="form-group row">
    <label for="inputEmail3" class="col-sm-3 col-form-label" style="line-height: 34px;" >电话号码</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="phonevalue" placeholder="请输入电话号码">
    </div>
  </div>
      </form>
      <form action="">
         <div class="form-group row">
    <label  for="txt" class="col-sm-3 col-form-label" style="line-height: 34px;" >验证码</label>
    <div class="col-sm-6">
      <input type="email" class="form-control" id="txt" placeholder="点击发送短信验证">
    </div>
  </div>  
      </form>
      <form action="">
         <div class="form-group row">
    <label for="inputEmail3" class="col-sm-3 col-form-label" style="line-height: 34px;">短信验证码</label>
    <div class="col-sm-6">
      <input type="email" class="form-control" id="inputEmail3" placeholder="请输入短信验证码">
    </div>
  </div>
 
      </form>
      <form action="">
         <div class="form-group row">
    <label for="inputEmail3" class="col-sm-3 col-form-label" style="line-height: 34px;">登录密码</label>
    <div class="col-sm-6">
      <input type="password" class="form-control" id="passworda" placeholder="请输入6位以上的密码" v-on:click="passwordaa">
    </div>
  </div>
      </form>
     
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-lg-offset-3 col-md-offset-3">
       <button type="button" class="btn btn-primary btn-lg btn-block" id="zhuc" v-on="btnzc">注册</button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
data(){
  return{
  }
  },

  methods:{
   passwordaa:function(){
     var phonenumber =  document.getElementById('passworda').value
     console.log(phonenumber)

     var patt = /^\S{6,10}$/
     console.log(patt.test(phonenumber))
     if(patt.test(phonenumber)== "ture"){
       console.log("成功")
     }else if(phonenumber == '')
     {
      console.log()
     }else{
       alert('输入6位及以上的密码');
     }
     return{
       shuju:[]
     }
   },
 btnzc(){
   this.$axios.get("")
   .then(res =>{
     console.log(res.data)
     
   })
 }
  },

}

</script>

<style>

</style>