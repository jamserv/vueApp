<template>
  <div id="app">
    <!--<img src="./assets/logo.png">  -->
    <div class="container-fluid">
    <h1>{{ msg }}</h1>
    <div class="row">
    <div class="col-md-2">
    <div class="list-group">
        <a href="#" class="list-group-item active">
          Cras justo odio
        </a>
        <router-link to="/home" class="list-group-item">Home</router-link>
        <router-link to="/featured" class="list-group-item">Featured</router-link>
        <router-link to="/restaurants"class="list-group-item" >Restaurants</router-link>
        <!--<router-link :to="{ name: 'featured-id', params: {id: 16}}" class="list-group-item">Select</router-link>-->
        <router-link to="/contact" class="list-group-item">Contact</router-link>
    </div>
    </div>
      <div class="col-md-10">
        <div class="panel panel-default">
          <div class="panel-heading">Panel heading without title</div>
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
    <!--
    <home></home>
    <contact></contact>
    -->
</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome Restaurant App'
    }
  }
}
</script>
