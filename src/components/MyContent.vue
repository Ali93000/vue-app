<template>
  <div class="my-content">
    <table class="students-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Degree</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.degree }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "MyContent",
  props: ["data"],
};
</script>

<style scoped>
.students-table {
  width: 60%;
  margin: 24px auto;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
}
.students-table th,
.students-table td {
  border: 1px solid #ddd;
  padding: 12px 16px;
  text-align: left;
}
.students-table th {
  background-color: #f5f5f5;
  color: #333;
  font-weight: bold;
}
.students-table tr:nth-child(even) {
  background-color: #fafafa;
}
.students-table tr:hover {
  background-color: #f0f8ff;
}
</style>
