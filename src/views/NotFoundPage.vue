<template>
  <div class="not-found">
    <h1>Page Not Found</h1>
    <button>
      <router-link :to="{ name: 'HomePage' }">Back To Home Page</router-link>
    </button>
  </div>
</template>
