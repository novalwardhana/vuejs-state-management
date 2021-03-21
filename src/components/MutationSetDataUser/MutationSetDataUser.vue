<template>
    <div class="mutation-set-data-user">
        <div class="card mt-3">
            <div class="card-body">
                <form v-on:submit="setUserData" class="text-left">
                    <div class="form-group row">
                        <label class="col-md-2 col-form-label text-right">Email</label>
                        <div class="col-md-10">
                            <input v-model="email" type="text" class="form-control" placeholder="Email">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-2 col-form-label text-right">Password</label>
                        <div class="col-md-10">
                            <input v-model="password" type="password" class="form-control" placeholder="Password">
                        </div>
                    </div>
                     <div class="form-group row">
                        <label class="col-md-2 col-form-label text-right">&nbsp;</label>
                        <div class="col-md-10">
                            <button type="submit" class="btn btn-success">Set User Data</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: "MutationSetDataUser",
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        setUserData(e) {
            let data = {
                email: this.email,
                password: this.password,
                remember_me: false
            }
            let url = process.env.VUE_APP_API
            axios.post(url, data).then(response => {
                this.$store.commit("setUserData", response.data.data)
                this.email = ""
                this.password = ""
            }).catch(error => {
                console.log("Ada error", error)
            })
            e.preventDefault();
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