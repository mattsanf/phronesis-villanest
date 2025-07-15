<script setup lang="ts">
import { reactive } from 'vue';
import yaml from 'js-yaml';
import MarkdownIt from "markdown-it";
import MarkdownItContainer from "markdown-it-container";
import MarkdownItFrontMatter from "markdown-it-front-matter";

import { useFormatters } from "@/components/Formaters.js";

const metadata = reactive({});
const { capitalize } = useFormatters();

const md = new MarkdownIt();
const markdown = md
    .use(MarkdownItFrontMatter, (raw) => {
        const parsed = yaml.load(raw);
        Object.assign(metadata, parsed);
    })
    .use(MarkdownItContainer, 'legend', {
        validate: function(params) {
            return params.trim().match(/^legend\s+(.*)$/);
        },
        render: function (tokens, idx) {
            var m = tokens[idx].info.trim().match(/^legend\s+(.*)$/);

            if (tokens[idx].nesting === 1) {
            return '<fieldset class="' + m[1] + '">\n<legend>' + md.utils.escapeHtml(capitalize(m[1] ?? 'comment')) + '</legend>\n';

            } else {
            return '</fieldset>\n';
            }
        }
    });

defineProps({
    source: {
        type: String,
        default: ""
    }
});
</script>

<template>
    <h2>{{ metadata.title }}</h2>

    <h3>Which teammates executed the project?</h3>
    <ul style="margin-bottom: 1.25rem;">
        <li v-for="author in metadata.authors">{{ author }}</li>
    </ul>

    <div v-html="markdown.render(source)"></div>
</template>