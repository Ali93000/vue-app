<template>
  <div class="slot-page">
    <h3>Calling Slot from Slot Page</h3>
    <slot-example>
      <p>This is the content passed to the slot by way one.</p>
    </slot-example>
    <p>the second way to call slot</p>
    <hr />
    <slot-example-two>
      <template #way-two>
        <p>This is second way for slot.</p>
      </template>
      <template #way-two-content>
        <p>This is second way for slot content.</p>
      </template>
    </slot-example-two>
  </div>
</template>

<script>
import SlotExample from "@/components/SlotExample.vue";
import SlotExampleTwo from "@/components/SlotExample.vue";

export default {
  components: {
    SlotExample,
    SlotExampleTwo,
  },
};
</script>
