<template>
  <div id="app">
    <NavBar :fixed="home" />
    <Carousel v-if="home" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Carousel from "@/components/Carousel.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: { NavBar, Carousel, Footer },
  computed: {
    home() {
      return this.$route.name === "Home" ? "top" : false;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Roboto;
  min-height: 100vh;
}
h1 {
  text-align: center;
  color: var(--primary);
  font-size: 4rem !important;
  font-weight: 300 !important;
}
.container {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.sous-titre {
  text-align: center;
  font-weight: 100;
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
}
em {
  font-style: normal;
  color: var(--primary);
}
</style>
