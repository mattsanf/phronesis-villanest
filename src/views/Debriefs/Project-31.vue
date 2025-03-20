<script setup>
import Debrief from "../../components/Debrief.vue";
import DebriefItem from "../../components/DebriefItem.vue";
</script>

<template>
  <Debrief
    title="Project 31: Orders Early Access"
    :team="['Francis Dortort', 'Matthew Sanford']"
  >
    <template #made-you-smile>
      <p>Creating mixed plans orders was straight forward.</p>
    </template>
    <template #find-confusing>
      <debrief-item>
        On the upcoming invoice for the order with a Yearly and Monthly plan lead to a little confustion.

        Yearly plan was listed for $0.00 and wasn't clear that it was previously paid for.
      </debrief-item>
      <debrief-item>
        On the order details does not provide some details the API includes

        ![](/p31/API-data.png)
        ![](/p31/subscription-details.png)

        - recurringInterval (even though the order has a monthly subscription)
        - renewalDate is not displayed in the details view api

        Also the subscription details view seems like it's not needed as it's repeating the same information as the order details page, in the same format.
      </debrief-item>
      <debrief-item>
        Order details seems in complete. Repeating information on sub pages and sections on the same page repeats headers and doesn't provide new information of context.

        ![](/p31/order-repeated.png)
        ![](/p31/order-view-repeated.png)
      </debrief-item>
      <debrief-item bug>
        Would get different error toasts that seems unessicary.

        - Could not find upcoming invoice on a one time sale
        - Could not find order while still providing order details
        - Got 404 and 200 for the same order in back to back API calls

        ![](/p31/API-404.png)
        ![](/p31/order-not-found.png)
        ![](/p31/upcoiming-invoice-not-found.png)
      </debrief-item>
      <debrief-item>
        Sidebar details of customer orders had missing information.

        Also the details of the order would changed based on the ordering of the underlying order items.
        (For instance based on if the yearly plan or monthly plan was first the start time of the order would change)

        - Also many any product or plan information for all orders.

        ![](/p31/order-detail-summary.png)
      </debrief-item>
    </template>
  </Debrief>
</template>
