<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Markdown from "@/components/Markdown.vue";

const markdown = ref("");
const {params: {slug}} = useRoute();
const markdownFiles = import.meta.glob('./*.md', { as: 'raw' });

onMounted(async () => {
    document.title = `Debrief: ${slug}`;
    const filePath = `./${slug}.md`;
    
    if (markdownFiles[filePath]) {
        markdown.value = await markdownFiles[filePath]();
    } else {
        markdown.value = null;
    }
})
</script>

<template>
    <Markdown  v-if="markdown" :source="markdown" />
    <div v-else>
        <h2>Debrief <mark>{{ slug }}</mark> not found</h2>
    </div>
</template>