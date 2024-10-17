<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const state = reactive({
    type: 'one-time',
    amount: null,
});
const router = useRouter();

function donate() {
    router.push({
        name: 'donate',
        query: {
            type: state.type,
            amount: state.amount,
        }
    })
}
</script>

<template>
    <section class="donate">
        <h3>Support our developer</h3>
        <form @submit.prevent="donate">
            <div class="form-field-group">
                <div class="form-field">
                    <input id="one-time" name="type" type="radio" class="form-field-radio"
                        :checked="state.type === 'one-time'" @change="state.type = 'one-time'" />
                    <label class="form-field-label" for="one-time">One Time</label>
                </div>
                <div class="form-field">
                    <input id="recurring" name="type" type="radio" class="form-field-radio"
                        :checked="state.type === 'recurring'" @change="state.type = 'recurring'" />
                    <label class="form-field-label" for="recurring">Recurring</label>
                </div>
            </div>

            <div class="form-field">
                <label class="form-field-label" for="amount">Amount</label>
                <input id="amount" type="number" step="0.01" class="form-field-input" placeholder="20.00"
                    v-model="state.amount" required />
            </div>

            <button type="submit" class="rebilly-instruments-button" style="margin-top: 1rem">
                Donate
            </button>
        </form>
    </section>
</template>

<style lang="css" scoped>
.donate {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
}

h3 {
    font-size: 1.5rem;
    text-align: center;
}
</style>