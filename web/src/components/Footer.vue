<template>
  <footer>
    <b-container>
      <b-row align-v="center">
        <b-col cols="12" md="4" class="footerCol">
          <h1>Contactez-nous</h1>
          <b-row class="contactRow">
            <b-icon-telephone-fill />
            <div>
              <div>Tél : 010 60 70 03</div>
              <div>Gsm : 0483 36 06 15</div>
            </div>
          </b-row>
          <b-row class="contactRow">
            <b-icon-envelope-fill />
            <div>
              <b-link href="mailto:contact@jardinsedison.be"
                >contact@jardinsedison.be</b-link
              >
              <div>N° TVA : BE 0766.664.145</div>
            </div>
          </b-row>
        </b-col>
        <b-col cols="12" md="8" class="footerCol">
          <div class="logo">Les Jardins d'Edison</div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import { BIconTelephoneFill, BIconEnvelopeFill } from "bootstrap-vue";

export default {
  components: {
    BIconTelephoneFill,
    BIconEnvelopeFill,
  },
};
</script>

<style lang="scss">
footer {
  background-color: #000;
  color: #fff;

  h1 {
    font-size: 2.5rem !important;
  }
  .logo {
    height: auto;
  }
  .b-icon {
    border: 0.1rem solid rgba(255, 255, 255, 0.13);
    border-radius: 0.25rem;
    padding: 0.3rem;
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
  }
  .footerCol {
    padding: 1rem;
    .contactRow {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0.3rem;
    }
  }
}
</style>
