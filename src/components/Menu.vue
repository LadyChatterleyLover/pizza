<template>
  <div class="row">

    <!-- 菜单开始 -->
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <th>尺寸</th>
          <th>价格</th>
          <th>加入</th>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>
              <strong>{{item.name}}</strong>
            </td>
          </tr>
          <tr v-for="option in item.options" :key="option.size">
            <td>{{option.size}}寸</td>
            <td>{{option.price}}RMB</td>
            <td>
              <button class="btn btn-sm btn-outline-success" @click="add(item,option)">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 菜单结束 -->

    <!-- 购物车开始 -->
    <div class="col-md-4 col-sm-12">
      <div v-if="baskets.length > 0">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>数量</th>
              <th>品种</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody v-for="item in baskets" :key="item.name">
            <tr>
              <td>
                <button class="btn btn-sm" @click="decQua(item)">-</button>
                <span>{{item.quantity}}</span>
                <button class="btn btn-sm" @click="addQua(item)">+</button>
              </td>
              <td>{{item.name}}{{item.size}}寸</td>
              <td>{{item.price * item.quantity}}RMB</td>
            </tr>
          </tbody>
        </table>
      <p>总价:{{total}}RMB</p>
      <button class="btn btn-success btn-block">提交</button>
      </div>
      <div v-else>
        {{basketsText}}
      </div>
    </div>
    <!-- 购物车结束 -->
  </div>
</template>

<script>
  export default {
    name:"Menu",
    data () {
      return {
        // getMenuItems:{},
        baskets:[],//购物车
        basketsText:"购物车没有任何商品"
      }
    },
    computed:{
      total(){
        let totalCost = 0
        for(let index in this.baskets){
          let item = this.baskets[index]
          totalCost += item.quantity * item.price
        }
        return totalCost
      },
      getMenuItems(){
        //在vuex中获取数据
        // return this.$store.state.menuItem
        return this.$store.getters.getMenuItems
      }
    },
    mounted(){
      this.getData()
    },
    methods:{
      add(item,option){
        let basket = {
          name:item.name,
          size:option.size,
          price:option.price,
          quantity:1
        }
        if(this.baskets.length>0){
          //过滤
          let result = this.baskets.filter((basket)=>{
            return basket.name === item.name && basket.price ===option.price && basket.size ===option.size
          })
          if(result.length >0 && result !=null){
            result[0].quantity ++
          }else{
            this.baskets.push(basket)
          }
        }else{
          this.baskets.push(basket)
        }
        
      },
      decQua(item){
        item.quantity --
        if(item.quantity <= 0){
          this.remove(item)
        }
      },
      addQua(item){
        item.quantity ++
      },
      remove(item){
        this.baskets.splice(this.baskets.indexOf(item),1)
      },
      getData(){
        this.http.get("menu.json").then((response)=>{
          let res = response.data
          this.$store.commit("setMenuItems",res)
        })
      }
    }
  }
</script>

<style scoped>

</style>