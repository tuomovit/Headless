<template>
  <div>
    <div>
      <form
        accept-charset="UTF-8"
        v-on:submit.prevent="onSubmit()"
        method="POST"
      >
        <div>
          <label>Email address</label>
          <input
            type="email"
            v-model="email"
            class="form-control"
            placeholder="Email"
          >
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            v-model="name"
            class="form-control"
            placeholder="Name"
            required="required"
          >
        </div>
        <div>
          <label>Message</label>
          <textarea
            type="text"
            v-model="message"
            class="form-control"
            placeholder="Message"
            required="required"
          ></textarea>
        </div>
        <hr>
        <div class="success" v-if="isSuccess">We received your submission, thank you!</div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Contact",
  props: {
    msg: String
  },
  data() {
    return {
      loading: true,
      name: "",
      email: "",
      message: "",
      isSuccess: false
    };
  },
  methods: {
    onSubmit() {
      let data = {
        name: this.name,
        email: this.email,
        message: this.message
      };
      axios
        .post("https://getform.io/f/3194324e-ff58-4274-b975-65e8565c5420}", data, {
          headers: {
            Accept: "application/json"
          }
        })
        .then(
          response => {
            this.isSuccess = response.data.success ? true : false;
          },
          response => {
            // Error
          }
        );
    }
  }
};
</script>