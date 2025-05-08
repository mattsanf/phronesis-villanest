<script setup>
import Debrief from "../../components/Debrief.vue";
import DebriefItem from "../../components/DebriefItem.vue";
</script>

<template>
  <Debrief
    title="Project 38: Paypal"
    :team="['Andrew Lepekha', 'Matthew Sanford']"
  >
    <template #made-you-smile>
      <p>meeting new teammates</p>
    </template>
    <template #find-confusing>
      <debrief-item bug>
        When directly accessing a organization you do not have permissions for
        we only see a blank page.
      </debrief-item>
      <debrief-item bug>
        Clicking resume onboard within gateway form will take us to a
        secure-payments page with unhelpful faq. After some time were were
        redirected to paypal properly.
      </debrief-item>
      <debrief-item question>
        Paypal provides a client ID and a secret key why can't we use these in
        the gateway settings?
      </debrief-item>
      <debrief-item bug>
        We were unable to complete the transaction, when we tried we would have
        odd behavior within the hosted payment form. 
        
        ![](/p38/flow.gif)

        Reloading the page would only show paypal as a method and would throw a 409 error

        ![](/p38/only-paypal.png)
        
        ![](/p38/409.png)

        The transaction within Recomm shows that the transaction was completed

        ![](/p38/waiting-gateway.png)
        
        ![](/p38/paypal-transaction.png)
      </debrief-item>
    </template>
  </Debrief>
</template>
