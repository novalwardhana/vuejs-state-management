<template>
    <div class="mutation-clear-data">
        <div class="card mt-3">
            <div class="card-body">
                <button v-on:click="clearName()" type="button" class="btn btn-warning mr-2">Clear Name</button>
                <button v-on:click="clearEmail()" type="button" class="btn btn-warning mr-2">Clear Email</button>
                <button v-on:click="clearAddress()" type="button" class="btn btn-warning mr-2">Clear Address</button>
                <button v-on:click="clearUserData()" type="button" class="btn btn-warning mr-2">Clear User Data</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MutationClearData",
    methods: {
        clearName() {
            this.$store.dispatch("clearName")
        },
        clearEmail() {
            this.$store.dispatch("clearEmail")
        },
        clearAddress() {
            this.$store.dispatch("clearAddress")
        },
        clearUserData() {
            this.$store.dispatch("clearUserData")
        },
    }
}
</script>