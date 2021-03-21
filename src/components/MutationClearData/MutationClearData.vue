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
            this.$store.commit("clearName")
        },
        clearEmail() {
            this.$store.commit("clearEmail")
        },
        clearAddress() {
            this.$store.commit("clearAddress")
        },
        clearUserData() {
            this.$store.commit("clearUserData")
        },
    }
}
</script>