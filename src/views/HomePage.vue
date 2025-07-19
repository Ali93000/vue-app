<template>
  <div class="home-page">
    <h1>Home Page</h1>
    <my-content :data="data"></my-content>
    <life-cycle></life-cycle>
  </div>
</template>

<script>
import MyContent from "@/components/MyContent.vue";
import LifeCycle from "@/components/LifeCycle.vue";

export default {
  components: {
    MyContent,
    LifeCycle,
  },
  data() {
    return {
      data: [
        { name: "John Doe", age: 20, degree: "Computer Science" },
        { name: "Jane Smith", age: 22, degree: "Mathematics" },
        { name: "Alice Johnson", age: 21, degree: "Physics" },
      ],
    };
  },
};
</script>
