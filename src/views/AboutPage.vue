<template>
  <div class="about-page">
    <h1>About Page</h1>
    <my-content :data="students"></my-content>
    <button @click="$router.push({ name: RouteNamesEnums.Contact })">
      Navigate To Contact Us PAge
    </button>
  </div>
</template>

<script>
import MyContent from "@/components/MyContent.vue";
import RouteNamesEnums from "@/Enums/RoutingNamesEnum";
export default {
  components: {
    MyContent,
  },
  data() {
    return {
      RouteNamesEnums,
      students: [
        { name: "John Doe 7", age: 20.77, degree: "Computer Science 777" },
        { name: "Jane Smith 7", age: 22.77, degree: "Mathematics 777" },
        { name: "Alice Johnson 7", age: 21.77, degree: "Physics 777" },
        { name: "John Doe 7", age: 20.77, degree: "Computer Science 777" },
      ],
    };
  },
  mounted() {
    console.log(this.$router);
  },
};
</script>
