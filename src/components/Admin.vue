<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- new pizza -->
      <new-pizza></new-pizza>
    </div>

    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItem" :key="item.id">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import NewPizza from "./NewPizza"
  export default {
    name:"Admin",
    data () {
      return {
        //getMenuItem:[]  
      }
    },
    components:{
      NewPizza
    },
    computed:{
      getMenuItem:{
        get(){
          return this.$store.state.menuItem
        },
        set(){

        }
      }
    },
    mounted(){
      this.getMenuInfo()
    },
    methods:{
      getMenuInfo(){
        this.http.get("/menu.json").then((response)=>{
           let res = response.data
           let menuArr = []
           for(let key in res){
             //console.log(res[key])
             res[key].id = key
             menuArr.push(res[key])
           } 
           //数据同步
           this.$store.commit("setMenuItems",menuArr)
          //  this.getMenuItem = menuArr

        })
      },
      deleteData(item){
        this.http.delete("menu/" + item.id + "/.json").then((response)=>{
          this.$store.commit("removeItem",item)
        })
      }
    }
    // beforeRouteLeave(to,from,next){
    //   if(confirm("确定离开吗?")===true){
    //     next()
    //   }else{
    //     next(false)
    //   }
    // }
}
</script>

<style scoped>

</style>