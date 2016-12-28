<template>
  <div class="container" v-bind:style="gradient">
    <div class="message">{{ msg }}</div>
    <button v-on:click='generateGradient' class="btn">Hit Me</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Ombrely',
      hex1: 'eeeeee',
      hex2: 'aaaaaa'
    }
  },
  computed: {
    gradient: function () {
      return {
        background: '-webkit-linear-gradient(left, #' + this.hex1 + ', #' + this.hex2 +')',
        background: '-moz-linear-gradient(left, #' + this.hex1 + ', #' + this.hex2 +')',
        background: 'linear-gradient(to right, #' + this.hex1 + ', #' + this.hex2 +')'
      }
    }
  },
  methods: {
    generateGradient: function() {
      this.hex1 = '';
      this.hex2 = '';
      var charset = "abcdef0123456789";

      for (var i = 0; i < 6; i++) {
        this.hex1 += charset.charAt(Math.floor(Math.random() * charset.length));
        this.hex2 += charset.charAt(Math.floor(Math.random() * charset.length));
      }
    }
  }
}
</script>

<style>
.message {
  color: white;
  padding-bottom: 2rem;
}
</style>


