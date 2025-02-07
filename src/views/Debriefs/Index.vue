<script setup>
import { reactive } from 'vue';
const debriefs = import.meta.glob("./Project-*.vue");

const state = reactive({
  debriefs: Object.keys(debriefs)
    .map(filename => filename.replace(/(\.\/|\.vue)/g, '')).reverse()
});
</script>

<template>
  <main>
    <h1>Debrief</h1>
    <router-view />
    <nav>
      <hr style="margin-bottom: 1em"/>
      <ul>
        <li v-for="debrief in state.debriefs">
          <router-link :to="{ name: `debriefs/${debrief.toLowerCase()}` }">{{ debrief }}</router-link>
        </li>
      </ul>
    </nav>
  </main>
</template>

<style lang="css" scoped>
main {
  padding: 2rem;
}

h1 {
  font-weight: bold;
  font-size: 3rem;
}

nav {
  margin-top: 2rem;
}
</style>