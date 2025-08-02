<template>
  <div class="dynamic">
    <h1>Dynamic Param Page</h1>
    <p>userid : {{ $route.params.userid }}</p>
    <p>userName : {{ $route.params.username }}</p>
    <p>Age: {{ $route.query.age }}</p>
    <p>Grade: {{ $route.query.grade }}</p>
    <p>Sports:- {{ $route.query.sports }}</p>
  </div>
</template>

<script>
export default {
  name: "DynamicParamPage",
  mounted() {
    console.log("route ------- :", this.$route);
  },
};
</script>
