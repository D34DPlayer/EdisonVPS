<template>
  <div class="_carousel">
    <b-carousel controls id="main-carousel" indicators>
      <b-carousel-slide
        class="slide"
        v-for="photo in photos"
        :key="photo"
        :img-src="photo"
      >
      </b-carousel-slide>
    </b-carousel>
    <div class="_carouselBlock">
      Intéressé ?
      <b-button variant="primary" block to="/contact"> Nous contacter</b-button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    photos() {
      let ctx = require.context("@/assets/photos", false, /.+_STAR\.webp/);
      return ctx
        .keys()
        .reverse()
        .map((x) => ctx(x));
    },
  },
};
</script>

<style lang="scss">
.slide {
  max-height: 85vh;
}
._carousel {
  position: relative;
}
._carouselBlock {
  font-size: 1.5em;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;

  color: white;
  background: #000000a2;
  padding: 1rem;
  border-radius: 0.5rem;
  transform: translate(-50%, -50%);

  .btn {
    margin-top: 1rem;
  }
}
</style>
