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
              <div class="form-group">
                <label for="repass">确认密码</label>
                <input type="password" class="form-control" v-model="repass">
              </div>
              <button type="submit" class="btn btn-block btn-success">注册</button>
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
    name:"Register",
    data () {
      return {
        email:"",
        password:"",
        repass:""
      }
    },
    methods:{
      onSubmit(){
        if(this.repass === this.password){
          const formData = {
            email:this.email,
            password:this.password,
            repass:this.repass
          }
          axios.post("/users.json",formData).then((response)=>{
              this.$router.push({name:"Login"})
          })
        }else{
          alert("两次密码不一致,请重新输入")
        }
      }
    }
  }
</script>

<style scoped>

</style>