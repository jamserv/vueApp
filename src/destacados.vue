<template>
  <h2>{{msg}} {{id}}</h2>
</template>

<script>
export default {
  name: 'featured',
  mounted() {
    this.id = this.$route.params.id;
  },
  data () {
    return {
      msg: 'Featured Restaurant',
      id: null
    }
  }
}
</script>
