<template>
  <b-form @submit.prevent="onSubmit" class="contactForm">
    <b-alert
      :show="alert !== '' || success"
      :variant="success ? 'success' : 'danger'"
      dissmissable
      @dissmissed="
        alert = '';
        success = false;
      "
    >
      {{
        success
          ? "Merci pour votre message, nous le traîterons dès que possible."
          : alert
      }}
    </b-alert>
    <b-alert
      :show="alert != ''"
      variant="danger"
      dissmissable
      @dissmissed="alert = ''"
    >
      {{ alert }}
    </b-alert>
    <b-row>
      <b-col cols="6">
        <b-form-group
          label="Nom* :"
          label-for="contact-name"
          label-class="sr-only"
        >
          <b-form-input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Nom*"
            required
          >
          </b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group
          label="Adresse :"
          label-for="contact-address"
          label-class="sr-only"
        >
          <b-form-input
            id="contact-adress"
            name="address"
            type="text"
            placeholder="Adresse"
          >
          </b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6">
        <b-form-group
          label="Telephone :"
          label-for="contact-telephone"
          label-class="sr-only"
        >
          <b-form-input
            id="contact-telephone"
            name="tel"
            type="tel"
            placeholder="Tél"
          >
          </b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group
          label="Adresse email* :"
          label-for="contact-email"
          label-class="sr-only"
        >
          <b-form-input
            id="contact-email"
            name="email"
            type="email"
            placeholder="Adresse email*"
            required
          >
          </b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <b-form-group
          label="Message* :"
          label-for="contact-message"
          label-class="sr-only"
        >
          <b-form-textarea
            id="contact-message"
            name="message"
            placeholder="Message*"
            rows="3"
            max-rows="10"
            required
          >
          </b-form-textarea>
        </b-form-group>
      </b-col>
    </b-row>
    <b-button block type="submit" variant="primary" :disabled="disabled"
      >Envoyer</b-button
    >
  </b-form>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      alert: "",
      success: false,
      serviceID: process.env.VUE_APP_MAIL_SERVICE_ID,
      templateID: process.env.VUE_APP_MAIL_TEMPLATE_ID,
      userID: process.env.VUE_APP_MAIL_USER_ID,
      disabled: false,
    };
  },
  methods: {
    onSubmit(ev) {
      this.disabled = true;
      emailjs
        .sendForm(this.serviceID, this.templateID, ev.target, this.userID)
        .then((res) => {
          console.log(res);
          this.success = true;
          this.disabled = false;
        })
        .catch((e) => {
          console.error(e);
          this.error = e;
        });
    },
  },
};
</script>

<style>
.contactForm {
  margin-bottom: 1rem;
}
</style>
