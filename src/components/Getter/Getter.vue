<template>
    <div class="getter">
        <div class="card mt-3">
            <div class="card-body">
                Name: {{getName}}
            </div>
            <div class="card-body">
                Email: {{getEmail}}
            </div>
            <div class="card-body">
                Address: {{getAddress}}
            </div>
            <div class="card-body">
                User Data: {{getUserData}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Getter",
    computed: {
        getName() {
            return this.$store.getters.getName
        },
        getEmail() {
            return this.$store.getters.getEmail
        },
        getAddress() {
            return this.$store.getters.getAddress
        },
        getUserData() {
            return this.$store.getters.getUserData
        }
    },
}
</script>