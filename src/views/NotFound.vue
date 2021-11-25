<template>
  <section class="main-app not-found">
    <div class="content-error">
      <h1>Eror</h1>
      <h2>Page not found!</h2>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.not-found {
  position: relative;
  .content-error {
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
    position: absolute;
    h1 {
        font-size: 2rem;
      color: red;
    }
  }
}
</style>