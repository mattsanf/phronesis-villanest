<script setup>
import Debrief from "../../components/Debrief.vue";
import DebriefItem from "../../components/DebriefItem.vue";
</script>

<template>
  <Debrief
    title="Project 33: Coupons"
    :team="['Francis Dortort', 'Matthew Sanford']"
  >
    <template #made-you-smile>
      <p>Creating the coupons was very clear and staight forward. The examples and description within the app were very helpful</p>
    </template>
    <template #find-confusing>
      <debrief-item bug>
        The coupon input within the **Hosted Payment Form** was misaligned

        ![](/p33/coupon-apply-misaligned.png)
      </debrief-item>
      <debrief-item question>
        It wasn't clear what happened when we applied the coupon. We expected changes the the invoice we were currently viewing.

        ![](/p33/coupon-redeemed-no-effect-1.png)
        ![](/p33/coupon-redeemed-no-effect-2.png)
      </debrief-item>
      <debrief-item bug>
        Future invoices where getting multiple coupons applied without adding them to the order creation.

        ![](/p33/coupon-aplied-to-other-invoices.png)
      </debrief-item>
    </template>
  </Debrief>
</template>
