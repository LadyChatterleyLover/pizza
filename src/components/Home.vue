<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝Pizza</h1>
        <h2>这里有你想要的</h2>
        <button @click="goToMeun" class="btn btn-success">Let's Order</button>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name:"Home",
    components:{},
    methods:{
      goToMeun(){
        //跳转到上一次浏览的页面
        // this.$router.go(-1)

        //跳转到指定的地址
        // this.$router.replace("/menu")
        // this.$router.replace({name:"Menu"})

        //通过push精心跳转
        this.$router.push("/menu")
      }
    }
  }
</script>

<style scoped>
#home{
  background: url("../assets/pizza.jpg");
  height: 85vh;
  padding: 10%;
}
h1,h2{
  margin: 6%;
}
.background{
  background: #eee;
  opacity: 0.8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}
</style>