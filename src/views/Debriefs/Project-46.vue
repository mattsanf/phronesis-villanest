<script setup>
import Debrief from "../../components/Debrief.vue";
import DebriefItem from "../../components/DebriefItem.vue";
</script>

<template>
    <Debrief
        title="Project 46: Revenue Recognition"
        :team="['Andrew Lepekha', 'Matthew Sanford']"
    >
        <template #made-you-smile>
            <p>Teamwork!</p>
        </template>
        <template #find-confusing>
            <debrief-item confusion>
                We did not properly complete the project as we were confused about the difference between journal accounts and journal entries. And how to properly test that the revenue recognition was working.
            </debrief-item>
            <debrief-item bug>
                After creating a journal account nothing showed up in the data tables until after a transaction occurred.
            </debrief-item>
            <debrief-item>
                Seems odd that the journal could not be for a plan. If we have two "books" we can't have separate journals for each book.
            </debrief-item>
            <debrief-item suggestion>
                When looking at the journal record there was no link back to the invoice that the record was for.

                ![](/p46/journal-record.png)
            </debrief-item>
            <debrief-item suggestion>
                When looking at the journal entries there was a randomly generated ID and not the human readable name we gave to the journal account.

                ![](/p46/journal-entries-data-table.png)

                ![](/p46/journal-entries-data-table-columns.png)
            </debrief-item>
            <debrief-item suggestion>
                The journal entries should have copy explaining that the revenue recognition is not immediate and that it is done by a cron job at the beginning of the month.
            </debrief-item>
            <debrief-item suggestion>
                Would be nice to have docs that help explain the difference and the use case of the journal accounts and journal entries. Generally we did not understand the use case or what the expected behavior should be.
            </debrief-item>
        </template>

        <details style="margin-top: 1rem;">
            <summary><strong>AI notes</strong></summary>
            <p>Matthew Sanford and Andrew Lepekha discussed setting up journal accounts and associating products with them to recognize revenue. They identified that they needed three journals and that one-time sales would likely be the easiest to manage, as revenue is recognized immediately. Andrew Lepekha searched for how to automate journal entries and found that products should be associated with journal accounts, while Matthew Sanford suggested setting up the "Blackjack Master Session" as a product if it wasn't already. Andrew Lepekha also mentioned difficulty finding revenue recognition when editing a product, and Matthew Sanford suggested checking user permissions to view the journal.</p>
            <p>Matthew Sanford and Andrew Lepekha discussed an issue where Andrew Lepekha was unable to see user information, which was resolved after Andrew Lepekha refreshed the page, clearing the cache. Matthew Sanford noted this as an issue to investigate further. They then discussed setting up two products, "Roulette and Blend Checkbooks" and "Blackjack Masterclass Session", where "Roulette" is a subscription product and "Blackjack Masterclass Session" is a one-time sale product, with "unearned revenue" designated as the recognition debit account for both.</p>
            <p>Andrew Lepekha and Matthew Sanford discussed the creation of journal entries and noted the presence of two entries that appear to be for a debit and a credit, respectively. Andrew Lepekha highlighted that the journal entries have different periods but the same last updated time, and raised concerns about differing amounts, while Matthew Sanford found the existence of two entries for a single payment confusing and questioned why the amounts differed and why the entries were split. Andrew Lepekha also mentioned that the AI assistant was not helpful in explaining backend issues.</p>
            <p>Andrew Lepekha and Matthew Sanford discussed an issue where a $10 transaction was split into two entries, one for $9.35 and another for $0.65, instead of being a single entry. Matthew Sanford questioned why there were multiple entries and different periods for the same subscription, suspecting it might be related to how payments are recognized, with one entry for the order creation and another for payment recognition. They also observed that a debit account entry was not being created or resolved as expected, leading them to believe something was broken on the backend.</p>
            <p>Matthew Sanford clarified that the "limit one" feature is used to retrieve the number of items in different segments and that the backend sends the total number of records in the headers. Andrew Lepekha discussed refunding previous invoices and noted that nothing seemed to happen, which Matthew Sanford found surprising, as they expected a refund to be reflected in the revenue recognition. Matthew Sanford also mentioned that the system is supposed to be automated, but Andrew Lepekha observed that a newly created subscription order did not work, leading them to question whether to report this experimental feature.</p>
            <p>Andrew Lepekha highlighted that the journal entries list was not functioning, and Matthew Sanford observed that it was not changing. Andrew Lepekha suggested that the issue might be a bug in the system's functionality, as it didn't seem to be customer-specific. Matthew Sanford suggested that the recognition might be delayed, possibly by a cron job, which Andrew Lepekha confirmed could be the case and suggested checking if the "recognize invoice revenue" job runs on the first day of the month.</p>
            <p>Andrew Lepekha and Matthew Sanford discussed the recognition of revenue, with Matthew Sanford stating that revenue for subscription orders is recognized over the subscription service period, while revenue for one-time sales is recognized on the invoice date. Andrew Lepekha attempted to run a command in a sandbox environment to test the recognition, but the project was disabled. They both noted that the current revenue recognition figures seemed incorrect, as the full $10 amount was not recognized and there was a second journal entry for $9.35 that seemed unusual.</p>
            <p>Andrew Lepekha and Matthew Sanford discussed a problem with understanding the distinction between "account" and "entries" within the system, with Matthew Sanford noting that they appear to have a one-to-one relationship. Andrew Lepekha suggested that entries are accounting transactions showing funding movement between accounts, but both agreed that the system's current implementation and documentation lack sufficient context, making it confusing. They decided to suggest adding more context to the documentation and providing better explanations, including screenshots of the entries, during their debrief.</p>
        </details>
    </Debrief>
</template>
