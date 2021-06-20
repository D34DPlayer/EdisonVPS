<template>
  <b-carousel controls id="main-carousel" indicators>
    <b-carousel-slide
      class="slide"
      v-for="photo in photos"
      :key="photo"
      :img-src="photo"
    >
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  computed: {
    photos() {
      let ctx = require.context("@/assets/photos", false, /.+_STAR\.jpg/);
      return ctx
        .keys()
        .reverse()
        .map((x) => ctx(x));
    },
  },
};
</script>

<style>
.slide {
  object-fit: cover;
  object-position: left bottom;
  max-height: 66vh;
}
</style>
