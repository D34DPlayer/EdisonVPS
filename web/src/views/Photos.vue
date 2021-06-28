<template>
  <b-container class="photos">
    <h1>Photos</h1>
    <b-row>
      <b-col
        class="photoCol"
        cols="12"
        lg="6"
        v-for="photo in photosSubset"
        :key="photo"
      >
        <b-img-lazy :src="photo" fluid></b-img-lazy>
      </b-col>
    </b-row>
    <b-pagination
      v-model="currentPage"
      :total-rows="totalPhotos"
      :per-page="perPage"
      align="center"
    ></b-pagination>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      perPage: 6,
    };
  },
  computed: {
    photos() {
      let ctx = require.context("@/assets/photos", false, /.+\.webp/);
      return ctx
        .keys()
        .reverse()
        .map((x) => ctx(x));
    },
    totalPhotos() {
      return this.photos.length;
    },
    photosSubset() {
      let start = (this.currentPage - 1) * this.perPage;
      return this.photos.slice(start, start + this.perPage);
    },
  },
};
</script>

<style>
.photoCol {
  padding: 0.5rem;
}
</style>
