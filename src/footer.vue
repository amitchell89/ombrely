<template>
  <footer>
    <div class="modal" v-show="modal">
      <privacy></privacy>
      <a href="" v-on:click='toggleModal'>Close</a>
    </div>
    <p>&copy; {{ date }} Ombrely &bull; All Rights Reserved &bull; <a href="" v-on:click='toggleModal'>Privacy Policy</a></p>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      modal: false
    }
  },
  computed: {
    date: function() {
      return new Date().getFullYear()
    }
  },
  methods: {
    toggleModal: function(e) {
      e.preventDefault()
      this.modal = !this.modal
    }
  }
}
</script>

<style>
  footer {
    border-top: 3px solid #ffffff;
    color: #ffffff;
    font-size: 0.875rem;
    padding-top: 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  a {
    color: #ffffff;
  }
  .modal {
    position: fixed;
    z-index: 5;
    background: rgba(0,0,0,0.8);
    border-radius: 25px;
    top: 2rem;
    left: 2rem;
    right: 2rem;
    padding: 1rem 2rem 2rem;
    line-height: 1.5;
  }
</style>


