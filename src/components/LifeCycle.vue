<template>
  <div class="" life>
    <h1>Life Cycle Component</h1>
    <p>age is {{ age }}</p>
    <button @click="age++">Increase Age</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 20,
    };
  },
  beforeCreate() {
    alert("beforeCreate");
  },
  created() {
    alert("created");
  },
  beforeMount() {
    alert("beforeMount");
  },
  mounted() {
    alert("mounted");
  },
  beforeUpdate() {
    alert("beforeUpdate");
  },
  updated() {
    alert("updated");
  },
  beforeunmount() {
    alert("beforeUnmount");
  },
  unmounted() {
    alert("unmounted");
  },
};
</script>
