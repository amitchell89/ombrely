<template>
  <footer>
    <p>&copy; {{ date }} Ombrely &bull; All Rights Reserved</p>
  </footer>
</template>

<script>
export default {
  computed: {
    date: function() {
      return new Date().getFullYear()
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
</style>


