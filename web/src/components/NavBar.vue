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
  font-family: Nature, fantasy;
  font-size: 5rem;
}

.navbar-brand.logo {
  width: calc(100% -5rem);
  font-size: clamp(2.2rem, calc(26vw - 5rem), 5rem);
  height: clamp(2rem, 14vw, 5.6rem);
}

@media screen and (min-width: 992px) {
  .navbar-brand.logo {
    margin-right: 1rem;
    width: auto;
  }
}
</style>
