<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Markdown from "@/components/Markdown.vue";

const markdown = ref("");

const {params: {slug}} = useRoute();

onMounted(async () => {
    document.title = `Debrief: ${slug}`;
    const response = await fetch(`/src/views/Debriefs/${slug}.md`);
    markdown.value = await response.text();
})
</script>

<template>
    <Markdown  v-if="markdown" :source="markdown" />
    <div v-else>
        <h2>Debrief <mark>{{ slug }}</mark> not found</h2>
    </div>
</template>