<template>
  <div>
    <div class="row mt-3">
      <div class="col-md-12 col-lg-12">
        <div class="card">
          <div class="card-body">
            <img class="mx-auto d-block" src="../assets/icon.png" >
            <form @submit.prevent="onSubmit">
              <div class="form-group">
                <label for="email">邮箱</label>
                <input type="email" class="form-control" v-model="email">
              </div>
              <div class="form-group">
                <label for="password">密码</label>
                <input type="password" class="form-control" v-model="password">
              </div>
              <button type="submit" class="btn btn-block btn-success">登录</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    name:"Login",
    data () {
      return {
        email:"",
        password:""
      }
    },
    beforeRouteEnter: (to, from, next) => {
      //组件内的守卫
      next(vm => vm.$store.dispatch("setUser",null))
    },
    methods:{
      onSubmit(){
        axios.get("/users.json").then((response)=>{
         let data = response.data
         let users = []
         for(let key in data){
           let user = data[key]
          //  console.log(user)
           users.push(user)
          }
          //实现过滤
          let result = users.filter((user)=>{
            return user.email === this.email && user.password === this.password
          })
          // console.log(result)
          //登录成功
          if(result !=null && result.length >0){
            this.$store.dispatch("setUser",result[0].email)
            this.$router.push({name:"Home"})
          }else{
            alert("账号或密码错误,请重新输入")
            this.$store.dispatch("setUser",null)
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>