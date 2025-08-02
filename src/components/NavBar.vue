<template>
  <nav class="nav-bar">
    <div class="logo">
      <img src="@/assets/my-logo3.jpg" alt="Logo" />
    </div>

    <div class="links">
      <ul>
        <li v-for="link in myRoutes" :key="link.name">
          <router-link
            v-if="link.name == 'dynamic'"
            :to="{
              name: link.name,
              params: { userid: 123, username: 'Ali Wekaa' },
              query: { age: 32, grade: 'male', sports: 'football' },
            }"
            >{{ link.meta.title }}</router-link
          >

          <router-link v-else :to="{ name: link.name }">{{
            link.meta.title
          }}</router-link>
        </li>
      </ul>
    </div>
    <div class="btns">
      <button style="margin-right: 10px">Login</button>
      <button>Sign Up</button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      myRoutes: [],
    };
  },
  mounted() {
    var routes = this.$router.options.routes;
    this.myRoutes = routes.filter((c) => c.meta.isActive);
  },
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #d4d4d4;
  box-shadow: 0px 0px 9px -3px black;
}

ul {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  list-style: none;
}
img {
  width: 100px;
  height: 60px;
}
button {
  background-color: rgb(17, 131, 104);
  color: white;
  padding: 5px 10px;
}
</style>
