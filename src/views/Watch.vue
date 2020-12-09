<template>
  <div id="watch"></div>
</template>

<script>
  export default {
    name: 'Watch',
    methods: {
      test() {
        this.$Progress.start();
      }
    },
    created() {
      this.test();
    }
  }

</script>

<style>

</style>
