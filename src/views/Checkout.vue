<script setup>
import { reactive, onMounted } from 'vue';
import RebillyInstrumentsLayout from '../components/RebillyInstrumentsLayout.vue';
import { useBaseConfig } from '@/components/RebillyInstruments';


onMounted(() => {
  const config = {
    ...useBaseConfig(),
    items: [
      {
        planId: "beginner",
        quantity: 1,
      },
    ],
  };

  RebillyInstruments.mount(config);
});

</script>

<template>
  <main>
    <RebillyInstrumentsLayout>
    </RebillyInstrumentsLayout>
  </main>
</template>