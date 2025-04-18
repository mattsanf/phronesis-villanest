<script setup>
import Debrief from "../../components/Debrief.vue";
import DebriefItem from "../../components/DebriefItem.vue";
</script>

<template>
  <Debrief
    title="Project 34: Shipping Rates"
    :team="['Francis Dortort', 'Matthew Sanford']"
  >
    <template #made-you-smile>
      <p>Teamwork!</p>
    </template>
    <template #find-confusing>
      <debrief-item bug>
        Unable to create order as there were "no available shipping options"
        Even though we had shipping rates setup. THe conditions worked per country but anyother conditions would result in there being no shipping route.
        
        ![](/p35/shipping-not-available.png)
        ![](/p35/shipping-plan-ids.png)
      </debrief-item>
      <debrief-item bug>
        We are not able to provide free shipping for VIP's. Shipping rate would fallback to shipping rates for all of canada.
        ![](/p35/vip-shipping-rules.png)
      </debrief-item>
      <debrief-item comment>
        We were not able to get any order created besides a non vip candaian customer and were unable to complete the training.
       </debrief-item>
    </template>
  </Debrief>
</template>
