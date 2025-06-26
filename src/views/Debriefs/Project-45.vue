<script setup>
import Debrief from "../../components/Debrief.vue";
import DebriefItem from "../../components/DebriefItem.vue";
</script>

<template>
    <Debrief
        title="Project 45: Expanding Resources"
        :team="['Andrew Lepekha', 'Matthew Sanford']"
    >
        <template #made-you-smile>
            <p>Once custom fields were created, using them in the condition for the email was clear and straight forward.</p>
        </template>
        <template #find-confusing>
            <debrief-item confusion>
                It was not initially clear that we needed custom fields. Investigated using tags but determined that it would not work.

                Recomm does not mention that we can extend the resource with custom fields.
            </debrief-item>
            <debrief-item bug>
                We are unable to remove a custom field that was created.
            </debrief-item>
            <debrief-item bug>
                We are unable to rename a custom field that was created.
            </debrief-item>
            <debrief-item bug>
                We received an unexpected toast error when editing a custom field.

                ![](/p45/unable-to-find-information.png)
            </debrief-item>
            <debrief-item bug>
                Customer custom field is marked as required but when creating a new customer there was no message or error indicating that it was required.

                ![](/p45/customer-custom-field-schema.png)
                ![](/p45/customer-no-error.gif)
            </debrief-item>
            <debrief-item bug>
                Subscription custom field default value set to true but in form it was not checked.

                ![](/p45/subscription-custom-field-schema.png)
                ![](/p45/subscription-custom-field-no-default.png)
            </debrief-item>
            <debrief-item suggestion>
                Custom field labels should not be rendered in the form as kebab-case.
                Also the custom field description should be rendered has help text in the form.

                ### Before
                ![](/p45/custom-field-before.png)

                ### After
                ![](/p45/custom-field-after.png)
            </debrief-item>
            <debrief-item suggestion>
                In the email template editor, we are not able to remove BCC or CC inputs after adding them.

                ![](/p45/unable-to-remove-email-fields.png)
            </debrief-item>
            <debrief-item confusion>
                When using the `order-created` event. The conditions do not have any values for `one-time-sale` orders.

                ![](/p45/order-created-contions.png)
            </debrief-item>

            <debrief-item>
                When creating an order with a shippable product and the customer has no shipping address. We get an error but the solution is not clear or solveable within the current view and we should direct the merchant to update the customer.

                ![](/p45/shippable-error.png)

                > **Note:** the toast message references the country field which is not available in this form.
            </debrief-item>
        </template>
    </Debrief>
</template>
