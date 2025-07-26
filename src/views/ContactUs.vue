<template>
  <div>
    <h1>Contact Us</h1>
    <p>Active Status</p>
    <input type="checkbox" v-model="isActive" />
    <props-test :propsData="Data" :name="name"></props-test>
    <hr />
    <contact-form @changeActivity="changeActivity()"></contact-form>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import PropsTest from "@/components/PropsTest.vue";

export default {
  data() {
    return {
      Data: ["Item 1", "Item 2", "Item 3"],
      name: "Ali Wekaaaaaa",
      isActive: true,
    };
  },
  components: {
    ContactForm,
    PropsTest,
  },
  methods: {
    changeActivity() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
