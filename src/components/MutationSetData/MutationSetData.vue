<template>
    <div class="mutation-set-data">
        <div class="card mt-3">

            <div class="card-body">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Name
                        </div>
                    </div>
                    <input type="text" v-model="name" placeholder="Set name..." class="form-control">
                    <div class="input-group-append">
                        <button v-on:click="setName()" type="button" class="btn btn-success ml-1">Set</button>
                    </div>
                </div>
            </div><!-- set state name -->

            <div class="card-body">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Email
                        </div>
                    </div>
                    <input type="text" v-model="email" placeholder="Set email..." class="form-control">
                    <div class="input-group-append">
                        <button v-on:click="setEmail" type="button" class="btn btn-success ml-1">Set</button>
                    </div>
                </div>
            </div><!-- set state email -->

             <div class="card-body">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Address
                        </div>
                    </div>
                    <input type="text" v-model="address" placeholder="Set address..." class="form-control">
                    <div class="input-group-append">
                        <button v-on:click="setAddress" type="button" class="btn btn-success ml-1">Set</button>
                    </div>
                </div>
            </div><!-- set state address -->

        </div>
    </div>
</template>

<script>
export default {
    name: "MutationSetData",
    data() {
        return {
            name: "",
            email: "",
            address: "",
        }
    },
    methods: {
        setName() {
            console.log(this.name)
            this.$store.dispatch("setName", this.name)
        },
        setEmail() {
            console.log(this.email)
            this.$store.dispatch("setEmail", this.email)
        },
        setAddress() {
            console.log(this.address)
            this.$store.dispatch("setAddress", this.address)
        }
    }
}
</script>

<style scoped>
.input-group-prepend {
  width : 15%; /*adjust as needed*/
}
.input-group-text {
    width: 100%;
    margin-right: 5px;
}
.input-group-prepend label {
  width: 100%;
  overflow: hidden;
}
.input-group-append {
  width : 8%; /*adjust as needed*/
}
.input-group-append label {
  width: 100%;
  overflow: hidden;
}
</style>