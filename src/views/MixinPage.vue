<template>
  <div class="mixin">
    <h1>Mixin Page</h1>
    <ul>
      <li v-for="item in students" :key="item.id">
        <p>Id: {{ item.id }}</p>
        <p>Name: {{ item.name }}</p>
        <p>Age: {{ item.age }}</p>
        <p>Grade: {{ item.grade }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import stMixin from "@/mixins/stMixin.js";

export default {
  name: "MixinPage",
  mixins: [stMixin],
};
</script>
