<template>
  <div class="nested">
    <h1>Nested Routes</h1>
    <hr />

    <div>
      <ul
        style="
          justify-content: center;
          display: flex;
          list-style: none;
          gap: 20px;
        "
      >
        <li>
          <router-link :to="{ name: 'learning' }">Ny Learning</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'wishlist' }">Ny Wishlist</router-link>
        </li>
      </ul>
      <hr />
      <router-view />
    </div>
  </div>
</template>
