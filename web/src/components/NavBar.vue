<template>
  <b-navbar
    :sticky="!fixed"
    :fixed="fixed"
    toggleable="lg"
    type="dark"
    variant="navbar"
  >
    <b-navbar-brand to="/" class="logo"> Les Jardins d'Edison </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/" active-class="active-tab" exact right>
          Accueil
        </b-nav-item>
        <b-nav-item to="/photos" active-class="active-tab" right>
          Photos
        </b-nav-item>
        <b-nav-item to="/about" active-class="active-tab" right>
          À propos
        </b-nav-item>
        <b-nav-item to="/contact" active-class="active-tab" right>
          Contact
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
  props: ["fixed"],
};
</script>

<style lang="scss">
.active-tab {
  color: var(--primary) !important;
}
.logo {
  background: linear-gradient(46deg, #966419, #15a328);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-family: Nature;
  font-size: 5rem !important;
}

.navbar-brand.logo {
  white-space: normal;
  margin-right: 0;
  max-height: 14rem;
  width: 100%;
}

.navbar-toggler {
  width: 100%;
}

@media screen and (min-width: 600px) {
  .navbar-brand.logo {
    height: 5.6rem;
    margin-right: 1rem;
    width: auto;
  }
  .navbar-toggler {
    width: auto;
  }
}
</style>
