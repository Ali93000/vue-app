<template>
  <nav class="my-nav">
    <div class="icon">Icon</div>
    <div class="logo">{{ logo }}</div>
    <div class="links">
      <ul>
        <li v-for="item in links" :key="item">{{ item }}</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      logo: "My Logo",
      links: ["Home", "About", "Contact Us"],
    };
  },
};
</script>

<style lang="scss" scoped>
.my-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

ul {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
</style>
