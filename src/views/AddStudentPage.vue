<template>
  <div class="students">
    <h1>Students Page</h1>
    <add-student-form></add-student-form>
  </div>
</template>

<script>
import AddStudentForm from "@/components/AddStudentForm.vue";
export default {
  name: "AddStudentPage",
  components: {
    AddStudentForm,
  },
};
</script>
