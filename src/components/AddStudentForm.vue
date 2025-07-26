<template>
  <div class="add-student-page">
    <form action="#" @submit.prevent="AddStudent">
      <h1>Add Student</h1>
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="student.firstName" />
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model="student.lastName" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="student.phone" />
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input type="text" id="phone" v-model="student.email" />
      </div>
      <div>
        <label for="gender">Gender: </label>
        <label for="male">Male</label>
        <input type="radio" id="male" value="male" v-model="student.gender" />
        <label for="female">Female</label>
        <input
          type="radio"
          id="female"
          value="female"
          v-model="student.gender"
        />
      </div>
      <div>
        <lable for="sports">Sports:</lable>
        <label for="football">Football</label>
        <input
          type="checkbox"
          id="football"
          value="football"
          v-model="student.sports.football"
        />
        <label for="basketball">Basketball</label>
        <input
          type="checkbox"
          id="basketball"
          value="basketball"
          v-model="student.sports.basketball"
        />
        <label for="tennis">Tennis</label>
        <input
          type="checkbox"
          id="tennis"
          value="tennis"
          v-model="student.sports.tennis"
        />
      </div>

      <div>
        <label for="degree">Degree:</label>
        <select id="degree" v-model="student.degree">
          <option value="computer-science">Computer Science</option>
          <option value="mathematics">Mathematics</option>
          <option value="physics">Physics</option>
          <option value="chemistry">Chemistry</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Add Student" />
      </div>
    </form>
    <div>
      <ul>
        <li v-for="(item, index) in students" :key="index">
          <p>Name: {{ item.firstName }} {{ item.lastName }}</p>
          <p>Email: {{ item.email }}</p>
          <p>Phone: {{ item.phone }}</p>
          <p>Gender: {{ item.gender }}</p>
          <strong>
            Sports:
            <span v-for="(sp, key, i) in item.sports" :key="i">
              <span v-if="sp">{{ key }}</span>
            </span>
          </strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddStudentForm",
  data() {
    return {
      student: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "",
        sports: {
          football: false,
          basketball: false,
          tennis: false,
        },
        degree: "",
      },
      students: [],
    };
  },
  methods: {
    AddStudent() {
      this.students.push(this.student);
      this.student = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "",
        sports: {
          football: false,
          basketball: false,
          tennis: false,
        },
        degree: "",
      };
    },
  },
};
</script>
