<template>
  <nav>
    <ul>
      <li><router-link :to="{ name: 'subscribe' }">Subscribe</router-link></li>
      <li><router-link :to="{ name: 'rent' }">Rent</router-link></li>
      <li><router-link :to="{ name: 'invoices' }">Invoices</router-link></li>
      <li><router-link :to="{ name: 'casino' }">Casino</router-link></li>
      <li><router-link :to="{ name: 'debriefs' }">Debriefs</router-link></li>
    </ul>
  </nav>
  <router-view />
</template>

<style lang="css" scoped>
nav {
  padding: 1rem;
  border-bottom: 1px solid #e1e1e1;
}

nav ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
}
</style>