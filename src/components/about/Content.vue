<template>
  <div>
    <div class="card text-dark bg-light mb-3">
      <div class="card-header">联系我们</div>
      <div class="card-body">
        <h4 class="card-title">联系我们</h4>
        <p>285258675@qq.com</p>
        <router-link :to="{name:'Phone'}">电话</router-link>
        <router-link :to="{name:'Person'}">联系人</router-link>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"Content"
  }
</script>

<style scoped>

</style>