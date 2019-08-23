<template>
  <section class="container">
    <div class="card">
      <div class="header-img"></div>
      <div class="content">
        <h1>Thank you!</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.header-img {
  background-image: url('~assets/img/thanks.jpg');
  background-size: 175%;
  background-position: 75% center;
}
/* transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
