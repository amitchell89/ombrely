<template>
  <div class="header">
    <img src="./images/logo.png" />
  </div>
</template>

<script>
</script>

<style>
  .header {
    padding-bottom: 0.1rem;
    border-bottom: 3px solid #ffffff;
  }
  .header:before, .header:after {
    background: #ffffff;
    content: "";
    position: absolute;
    width: calc(50vw - 100px);
    height: 78px;
  }
  .header:before {
    left: 0;
  }
  .header:after {
    right: 0;
  }
</style>

