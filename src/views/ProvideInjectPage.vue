<template>
  <div class="provide-page">
    <h1>Provide Inject Page</h1>
    <ProvideInj />
  </div>
</template>

<script>
import ProvideInj from "@/components/ProvideInject.vue";

export default {
  name: "ProvideInjectPage",
  components: {
    ProvideInj,
  },
  data() {
    return {
      myLogo: "Logo",
      students: [],
      std: [
        {
          id: 1,
          name: "Ali",
        },
        {
          id: 2,
          name: "Mahmoud",
        },
      ],
    };
  },
  methods: {
    async GetStudents() {
      await fetch("https://course-backend.onrender.com/")
        .then((res) => res.json())
        .then((data) => {
          this.students = data;
          console.log(data);
          console.log("---- students");
          console.log(this.students);
        });
    },
  },
  async mounted() {
    await this.GetStudents();
  },
  provide() {
    return {
      logo: this.myLogo,
      myFunc: this.std,
    };
  },
};
</script>
