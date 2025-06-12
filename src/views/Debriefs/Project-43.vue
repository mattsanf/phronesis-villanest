<script setup>
import Debrief from "../../components/Debrief.vue";
import DebriefItem from "../../components/DebriefItem.vue";
</script>

<template>
    <Debrief
        title="Project 43: Cancellations"
        :team="['Andrew Lepekha', 'Matthew Sanford']"
    >
        <template #made-you-smile>
            <p>Communicated well as a team!</p>
        </template>
        <template #find-confusing>
            <debrief-item suggestion>
                Checkbox label for using pro rata should be related closer or more visually separate from the radio options.

                ![](/p43/cancel-subscription-modal.png)
            </debrief-item>
            <debrief-item question>
                Pay invoice for an invoice that has a negative amount is confusing. What will happen if I pay it? Will I get a refund?
            </debrief-item>
            <debrief-item question>
                Expected option to automatically create a credit memo for the negative amount invoice. But there was none.
            </debrief-item>
            <debrief-item suggestion>
                When manually creating a credit memo, we are able to select an invoice but the list of invoices are not in order.

                ![](/p43/invoice-information-list.png)

                Should be ordered by the invoice number.
            </debrief-item>
            <debrief-item bug>
                When creating a credit memo, if we create from an existing invoice we must still provide additional details for line items.

                ![](/p43/credit-memo-item.png)
            </debrief-item>
            <debrief-item bug>
                Docs says we can apply a credit memo on the invoice  view but we do not have that option.

                ![](/p43/docs.png)
                ![](/p43/unpaid-invoice.png)
            </debrief-item>
            <debrief-item bug>
                We were unable to apply a credit memo to an invoice. We would get a message saying the customer does not have any unpaid invoices, even when it does.

                ![](/p43/apply-credit.png)
                ![](/p43/customer-unpaid-invoices.png)
            </debrief-item>
            <debrief-item suggestion>
                Order form should filter out invalid plans. For example, for one-time order we should not be able to select plans that are subscriptions.

                ![](/p43/order-type-plans.png)
            </debrief-item>
        </template>
    </Debrief>
</template>
