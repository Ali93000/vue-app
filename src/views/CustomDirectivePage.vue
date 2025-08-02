<template>
  <div class="container" v-containerWidth="50">
    <h1>Custom Directive Page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi at.
      Quam quasi id culpa doloremque ab iusto vero expedita ea, vitae fuga quas
      quod sit molestias reiciendis accusamus eligendi!
    </p>
  </div>
</template>

<script>
export default {
  name: "CustomDirectivePage",
  directives: {
    containerWidth(el, binding) {
      el.style.maxWidth = binding.value.width + "px";
      el.style.height = binding.value.height + "px";
      el.style.border = "1px solid #ccc";
      el.style.color = "red";
      el.style.padding = "20px";
      el.style.margin = "20px auto";
      el.style.backgroundColor = "#f9f9f9";
    },
  },
};
</script>
