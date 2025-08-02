<template>
  <div class="crud-student">
    <h1>HTTP CRUD OPERATIONS STUDENT</h1>
    <div class="student">
      <form action="" @submit.prevent="AddStudnet()">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="student.name" />
        </div>
        <div>
          <label for="age">Age:</label>
          <input type="number" id="age" v-model="student.age" />
        </div>
        <div>
          <label for="grade">Grade:</label>
          <select id="grade" v-model="student.grade">
            <option value="FirstGrade">FirstGrade</option>
            <option value="SecondGrade">SecondGrade</option>
            <option value="ThirdGrade">ThirdGrade</option>
          </select>
        </div>
        <div>
          <label for="gender">Gender:- </label>
          <label for="male">Male</label>
          <input
            type="radio"
            id="male"
            name="male"
            value="male"
            v-model="student.gender"
          />
          <label for="female">Female</label>
          <input
            type="radio"
            id="female"
            name="female"
            value="female"
            v-model="student.gender"
          />
        </div>
        <div>
          <label for="favouriteSports">Favourite Sports:</label>
          <input
            type="text"
            id="favouriteSports"
            v-model="sport"
            placeholder="Enter sports separated by commas"
          />
          <input type="button" value="Add" @click="AddSport()" />
          <p v-for="(item, i) in student.favouriteSports" :key="i">
            {{ item }}
          </p>
        </div>
        <div>
          <input type="submit" value="Add" />
        </div>
        <div>
          <button @click="$router.push({ name: RouteNamesEnums.AddStudent })">
            Add Student Page
          </button>
        </div>
      </form>
    </div>
  </div>
  <hr />
  <div class="student-data">
    <ul>
      <li v-for="item in students" :key="item.id">
        <p>Id:- {{ item.id }}</p>
        <p>Name:- {{ item.name }}</p>
        <p>Age:- {{ item.age }}</p>
        <p>Grade:- {{ item.grade }}</p>
        <p>
          Sports:-
          <strong v-for="(sp, index) in item.favouritSports" :key="index">
            {{ sp }}
          </strong>
        </p>
        <button
          @click="
            ViewProfile('dynamic', item.id, item.name, item.age, item.grade, sp)
          "
        >
          View Profile
        </button>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
import RouteNamesEnums from "@/Enums/RoutingNamesEnum";

export default {
  name: "CrudStudents",
  data() {
    return {
      RouteNamesEnums,
      sport: "",
      students: [],
      student: {
        name: "",
        age: "",
        grade: "",
        gender: "",
        favouriteSports: [],
      },
    };
  },
  methods: {
    AddSport() {
      this.student.favouriteSports.push(this.sport);
    },
    async GetStudents() {
      await fetch("https://course-backend.onrender.com/")
        .then((res) => res.json())
        .then((data) => {
          this.students = data;
        });
    },
    async AddStudnet() {
      var requestData = {
        Headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(this.student),
      };
      await fetch(
        "https://course-backend.onrender.com/add-student",
        requestData
      )
        .then((res) => res.json())
        .then((data) => {
          this.students = data;
        });
    },
    ViewProfile(view, id, name, age, grade, sports) {
      this.$router.push({
        name: view,
        params: { userid: id, username: name },
        query: { age: age, grade: grade, sport: sports },
      });
    },
  },
  async mounted() {
    await this.GetStudents();
  },
};
</script>
