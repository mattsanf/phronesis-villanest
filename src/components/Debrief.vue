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

<style lang="css" scoped>
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

p {
  margin-bottom: 1rem;
}
</style>