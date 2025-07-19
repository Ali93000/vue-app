<template>
  <div class="contact-form">
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" />
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" />
    <label for="message">Message:</label>
    <textarea id="message" v-model="message"></textarea>
    <label for="isActive">Active Status:</label>
    <hr />
    <input type="checkbox" id="isActive" v-model="isActive" />
    <button @click="submitForm">Submit</button>
    <button @click="ChangeAcitiveStatus()">Change Active Status</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Aliiiii",
      email: "wekaaaaaaaaaaa",
      message: "Hello, this is a test message from component!",
      isActive: false,
    };
  },
  methods: {
    submitForm() {
      alert(
        `Name: ${this.name}, Email: ${this.email}, Message: ${this.message}`
      );
      // Here you can add logic to send the form data to a server or API
    },
    ChangeAcitiveStatus() {
      this.isActive = !this.isActive;
      this.$emit("changeActivity", !this.isActive);
    },
  },
};
</script>
