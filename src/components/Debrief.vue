<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  team: {
    type: Array,
    default: () => [],
  }
});
</script>

<template>
  <article>
    <h2>{{ title }}</h2>

    <h3>Which teammates executed the project?</h3>
    <ul>
      <li v-for="member in team">{{ member }}</li>
    </ul>

    <template v-if="$slots['made-you-smile']">
      <h3>What made you smile?</h3>
      <slot name="made-you-smile"></slot>
    </template>

    <template v-if="$slots['find-confusing']">
      <h3>What did you find confusing? Did you encounter any issues?</h3>
      <slot name="find-confusing"></slot>
    </template>

    <template v-if="$slots.default">
      <h3>Additional Details</h3>
      <slot />
    </template>
  </article>
</template>

<style lang="css">
article {
  margin-top: 1rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  margin-top: 2rem;
  font-weight: bold;
}

p:not(:last-child) {
  margin-bottom: 1rem;
}

strong, b {
  font-weight: bold;
}

img {
  max-width: min(600px, 100%);
  border: 1px solid grey;
  display: block;
  margin: 1rem 0;
}
</style>