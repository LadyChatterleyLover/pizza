<template>
  <div id="app">
    <div class="container">
    <nav-header></nav-header>
    <router-view/>
    </div>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="OrderinGuide"></router-view>
        </div>
 
        <div class="col-sm-12 col-md-4">
          <router-view name="Delivery"></router-view>
        </div>
   
        <div class="col-sm-12 col-md-4">
          <router-view name="History"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavHeader from "./components/NavHeader"
export default {
  name: 'App',
  components:{
    NavHeader
  }
}
</script>

<style>

</style>
