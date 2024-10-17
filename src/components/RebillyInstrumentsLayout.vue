<script setup></script>

<template>
  <main>
    <section id="form">
      <slot name="pre-form"></slot>
      <div class="rebilly-instruments"></div>
      <slot name="post-form"></slot>
    </section>
    <section id="summary">
      <slot name="pre-summary"></slot>
      <div class="rebilly-instruments-summary"></div>
      <slot name="post-summary"></slot>
    </section>
  </main>
</template>

<style lang="css" scoped>
main {
  display: flex;
}

section {
  flex: 0 1 55%;
  box-sizing: border-box;
  height: 100vh;
  background: #ffffff;
  padding: 1em;
}

section + section {
  flex: 0 1 45%;
  background: #f9fafb;
  border-left: 1px solid #e1e1e1;
}
</style>