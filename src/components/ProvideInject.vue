<template>
  <div class="provide">
    <h1>Provide Inject Component</h1>
    <p>Logo From Parent:- {{ logo }}</p>
    <div class="inejct">
      <ul>
        <li v-for="item in myFunc" :key="item.id">
          <p>Id: {{ item.id }}</p>
          <p>Name: {{ item.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProvideInject",
  data() {
    return {};
  },
  inject: ["logo", "myFunc"],
};
</script>
