<script setup>
import Debrief from "../../components/Debrief.vue";
</script>

<template>
  <Debrief
    title="Project 16: Casino payout form"
    :team="['Samuel Lafrenaye', 'Matthew Sanford']"
  >
    <template #made-you-smile>
      <p>Learning some new Javascript</p>
    </template>
    <template #find-confusing>
      <ul>
        <li>Went to hosted payout form and was unknown how to make a payout request</li>
        <li>search recomm ofr "payout" settings</li>
        <li>Searching in the API definitions did not bring up developer docs, hard to switch contexts</li>
        <li>would be nice if api docs would link to dev docs (and vice versa)</li>
        <li>Doc's did not explain that gateway configurations were needed for payout settings</li>
        <li>Question: should we reuse exisiting gateways or create new ones for different flows. What are the best practices? No guidence.</li>
        <li>Redirect link at the end of payout request takes you off site. Is it configurable?</li>
        <li>Not sure you needed to Allocate funds, docs does not explain the expected flow clearly</li>
        <li>No way to batch close "pending" or test payout requests. Do these request expire?</li>
        <li>Not sure what "exposure" means in the allocate view</li>
      </ul>
    </template>
  </Debrief>
</template>