<template>
  <b-container>
    <h1>Nous contacter</h1>
    <p class="sous-titre">rendez-vous, question ou devis</p>
    <p></p>

    <p>
      Vous pouvez nous joindre au <em>010 60 70 03</em> ou au
      <em>0483 36 06 15</em>. Un formulaire de contact est également mis à votre
      disposition sur notre site.
    </p>

    <ContactForm />
  </b-container>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
export default {
  components: {
    ContactForm,
  },
};
</script>

<style></style>
