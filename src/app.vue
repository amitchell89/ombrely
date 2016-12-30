
<template>
  <div class="container" v-bind:style="gradient">
    <appHeader></appHeader>
    <div class="buttons">
      <div>
        <button v-on:click='toggleLock("lock1")' class="btn btn--lock"><i class= 'fa' v-bind:class="{ 'fa-unlock-alt': !lock1, 'fa-lock': lock1 }"></i></button>
        <button v-on:click='generateGradient' class="btn btn--hit">Hit Me</button>
        <button v-on:click='toggleLock("lock2")' class="btn btn--lock"><i class= 'fa' v-bind:class="{ 'fa-unlock-alt': !lock2, 'fa-lock': lock2 }"></i></button>
      </div>
      <button v-on:click='toggleModal' class="btn btn--css">{{ modal ? 'Close CSS' : 'View CSS' }}</button>
      <button class="btn btn--copy" v-clipboard="clipCSS">Copy To Clipboard</button>
    </div>
    <div v-if="modal" class="modal">
      <p class="modal__css">
      {{ line1 }}<br />
      {{ line2 }}<br />
      {{ line3 }}
      </p>
      <button v-on:click='toggleModal' class="btn btn--close"><i class= 'fa fa-times'></i></button>
     </div>
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
      modal: false
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
    line1: function () {
      return 'background: -webkit-linear-gradient(left, #' + this.hex1 + ', #' + this.hex2 +');'
    },
    line2: function () {
      return 'background: -moz-linear-gradient(left, #' + this.hex1 + ', #' + this.hex2 +');'
    },
    line3: function () {
      return 'background: linear-gradient(left, #' + this.hex1 + ', #' + this.hex2 +');'
    },
    clipCSS: function () {
      return 'background: -webkit-linear-gradient(left, #' + this.hex1 + ', #' + this.hex2 +');\n' + 'background: -moz-linear-gradient(left, #' + this.hex1 + ', #' + this.hex2 +');\n' + 'background: linear-gradient(left, #' + this.hex1 + ', #' + this.hex2 +');'
    }
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
    },
    toggleModal: function() {
      this.modal = !this.modal
    }
  }
}
</script>

<style>

.buttons {
  margin-top: calc(50vh - 163px);
  padding: 0 1rem;
}
.btn {
  padding: 1rem 1.5rem;
  font-size: 1.75rem;
}
.btn--hit {
  margin-left: 1rem;
  margin-right: 1rem;
  width: calc(219px - 3rem);
}
.btn--css {
  font-size: 1rem;
  margin-top: 1rem;
  width: 150px;
  margin-right: 0.5rem;
}
.btn--copy {
  font-size: 1rem;
  margin-left: 0.5rem;
}
.btn--close {
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
}
.modal {
  background: rgba(0,0,0,0.8);
  border-bottom: 3px solid #ffffff;
  color: #ffffff;
  z-index: 10;
  padding: 1rem 2rem;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.modal__css {
  line-height: 1.5;
}

@media (max-width: 570px) {
  .btn--close {
    position: static;
  }
}
@media (max-width: 414px) {
  .btn--hit {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    width: auto;
  }
  .btn--hit, .btn--lock {
    font-size: 1.25rem;
  }
  .btn--css, .btn--copy {
    width: 270px;
    margin-bottom: 1rem;
    margin-left: 0;
    margin-right: 0;
  }
}

</style>


