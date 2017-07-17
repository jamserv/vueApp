<template>
      <table class="table table-responsive">
          <thead>
              <tr>
                  <td>#</td>
                  <td>Name</td>
                  <td>direccion</td>
                  <td>descripcion</td>
                  <td>precio</td>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(product, index) in restaurants">
                  <td>{{product.id}}</td>
                  <td>{{product.nombre}}</td>
                  <td>{{product.direccion}}</td>
                  <td>{{product.descripcion}}</td>
                  <td>{{product.precio}}</td>
              </tr>
          </tbody>
      </table>
</template>

<script>
import axios from 'axios';
export default {
  name: 'restaurants',
  mounted() {
    this.getRestaurants();
  },
  data () {
    return {
      msg: 'Featured Restaurant',
      id: null,
      restaurants: null
    }
  },
  methods: {
    getRestaurants() {
       axios.get('http://localhost:9984/allRestaurant')
            .then((response) => {
                this.restaurants = response.data;
            });
    }
  }
}
</script>
