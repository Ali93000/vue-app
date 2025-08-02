<template>
  <div class="watch">
    <h1>Watcher</h1>
    <h3>Watch Property</h3>
    <input type="text" v-model="userName" />
    <button @click="isActive = !isActive">Change Status</button>
    <p>User Name is:- {{ userName }}</p>
    <hr />
    <h1>Watch Property in Object && Watch All Object</h1>
    <input type="text" v-model="student.firstName" />
    <input type="text" v-model="student.lastName" />
    <hr />
    <h1>Watch Array</h1>
    <button @click="myArr.push('new Data')">Add To Array</button>
  </div>
</template>

<script>
export default {
  name: "WatchPage",
  data() {
    return {
      userName: "",
      isActive: false,
      student: {
        firstName: "Ali",
        lastName: "Moustafa",
      },
      myArr: [],
    };
  },
  watch: {
    userName(newVal, oldVal) {
      console.log("new Val", newVal);
      console.log("old Val", oldVal);
    },
    "student.firstName"(newVal, oldVal) {
      console.log("new Val", newVal);
      console.log("old Val", oldVal);
    },
    "student.lastName"(newVal, oldVal) {
      console.log("new Val", newVal);
      console.log("old Val", oldVal);
    },
    student: {
      handler(newVal, oldVal) {
        console.log("new Val obj", newVal);
        console.log("old Val obj", oldVal);
      },
      deep: true,
    },
    myArr: {
      handler(newVal, oldVal) {
        console.log("new Val", newVal);
        console.log("old Val", oldVal);
      },
      deep: true,
    },
  },
};
</script>
