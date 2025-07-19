<template>
  <div class="props-test">
    <h2>Props Test Component</h2>
    <p>Received Name: {{ name }}</p>
    <ul>
      <li v-for="(item, index) in propsData" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PropsTest",
  props: {
    propsData: {
      type: Array,
      required: true,
      default: () => [],
    },
    name: {
      type: String,
      default: "Default Name",
    },
  },
};
</script>
