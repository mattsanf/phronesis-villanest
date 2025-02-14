<script setup>
import { computed, useSlots } from "vue";
import MarkdownIt from "markdown-it";

const slots = useSlots();

const props = defineProps({
  suggestion: {
    type: Boolean,
  },
  bug: {
    type: Boolean,
  },
  improvement: {
    type: Boolean,
  },
  comment: {
    type: Boolean,
  },
  question: {
    type: Boolean,
  },
});
const legend = computed(() => {
  if (props.comment) {
    return "Comment";
  }
  if (props.suggestion) {
    return "Suggestion";
  }
  if (props.bug) {
    return "Bug";
  }
  if (props.improvement) {
    return "Improvement";
  }
  if (props.question) {
    return "Question ?";
  }
  return "Comment";
});
const slotData = computed(() => {
  let markdown = slots.default()[0].children;
  markdown = markdown.replace(/^[ \t]+/gm, "");
  if (markdown && markdown.length > 0) {
    return MarkdownIt().render(markdown);
  }
});

const computedClass = computed(() => {
  if (props.comment) {
    return "comment";
  }
  if (props.suggestion) {
    return "suggestion";
  }
  if (props.bug) {
    return "bug";
  }
  if (props.improvement) {
    return "improvement";
  }
  if (props.question) {
    return "question";
  }
  return "comment";
});
</script>

<template>
  <fieldset :class="computedClass">
    <legend>{{ legend }}</legend>
    <div class="markdown" v-html="slotData"></div>
    <code style="display: none"><slot></slot></code>
  </fieldset>
</template>

<style scoped>
fieldset {
  border-radius: 5px;
  border-width: 3px;
  border-style: solid;

  margin-top: 1rem;

  legend {
    font-weight: bold;
  }

  &.comment {
    border-color: cornflowerblue;
    legend {
      color: cornflowerblue;
    }
  }
  &.bug {
    border-color: tomato;
    legend {
      color: tomato;
    }
  }
  &.suggestion {
    border-color: slateblue;
    legend {
      color: slateblue;
    }
  }
  &.improvement {
    border-color: mediumseagreen;
    legend {
      color: mediumseagreen;
    }
  }
  &.question {
    border-color: orange;
    legend {
      color: orange;
    }
  }
}
</style>
