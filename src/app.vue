<template>
  <div class="container" v-bind:style="gradient">
    <appHeader></appHeader>
    <button v-on:click='toggleLock("lock1")' class="btn btn--lock"><i class= 'fa' v-bind:class="{ 'fa-unlock-alt': !lock1, 'fa-lock': lock1 }"></button>
    <button v-on:click='generateGradient' class="btn btn--hit">Hit Me</button>
    <button v-on:click='toggleLock("lock2")' class="btn btn--lock"><i class= 'fa' v-bind:class="{ 'fa-unlock-alt': !lock2, 'fa-lock': lock2 }"></i></button>
    <appFooter></appFooter>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hex1: 'eeeeee',
      hex2: 'aaaaaa',
      lock1: false,
      lock2: false,
    }
  },
  computed: {
    gradient: function () {
      return {
        background: '-webkit-linear-gradient(left, #' + this.hex1 + ', #' + this.hex2 +')',
        background: '-moz-linear-gradient(left, #' + this.hex1 + ', #' + this.hex2 +')',
        background: 'linear-gradient(to right, #' + this.hex1 + ', #' + this.hex2 +')'
      }
    },
  },
  methods: {
    generateGradient: function() {
      var charset = "abcdef0123456789";

      if (this.lock1 !== true) {
        this.hex1 = '';
        for (var i = 0; i < 6; i++) {
          this.hex1 += charset.charAt(Math.floor(Math.random() * charset.length));
        }
      }
      if (this.lock2 !== true) {
        this.hex2 = '';
        for (var i = 0; i < 6; i++) {
          this.hex2 += charset.charAt(Math.floor(Math.random() * charset.length));
        }
      }

    },
    toggleLock: function(lock) {
      this[lock] = !this[lock]
    }
  }
}
</script>

<style>

.btn--hit {
  margin-top: calc(50vh - 78px - 35px);
  margin-left: 3rem;
  margin-right: 3rem;
  padding: 1rem 2rem;
}
.btn--lock {
  padding: 1rem 2rem;
}

</style>


