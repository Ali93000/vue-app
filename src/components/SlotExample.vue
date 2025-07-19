<template>
  <div class="slot-example">
    <h2>Here we are in the Component that will have a slot</h2>
    <p>This is the first way to use slot.</p>
    <slot></slot>

    <p>This is the second way to use slot.</p>
    <slot name="way-two"></slot>
    <slot name="way-two-content"></slot>
  </div>
</template>
