<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card bg-light">
                    <div class="card-Header">
                        <!-- <h2 class="card-title text-center" >Edit User Information</h2> -->
                        <h2 class="card-title text-center">Edit User Information</h2>
                    </div>
                    <div class="card-body">

                        <form v-on:submit.prevent="editUserForm">
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" id="name" v-model="editUserData.name" placeholder="Enter your name">
                            </div>
                            <div class="mb-3">
                                <label for="age" class="form-label">Age</label>
                                <input type="number" class="form-control" id="age" v-model="editUserData.age" placeholder="Enter your age">
                            </div>
                            <div class="mb-3">
                                <label for="gender" class="form-label">Gender</label>
                                <select class="form-select" id="gender" v-model="editUserData.gender">
                                    <option selected>Select gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" v-model="editUserData.email" placeholder="Enter your email">
                            </div>
                            <div class="mb-3">
                                <label for="address" class="form-label">Address</label>
                                <textarea class="form-control" id="address" rows="3"
                                v-model="editUserData.address" placeholder="Enter your address"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                            <button type="reset" class="btn btn-secondary ms-2">Reset</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    data() {
        return {
            editUserData:{},
            editUserId:""
        }
    },
    methods:{
        ... mapActions(['edit_user_action']),
        editUserForm(){
            this.edit_user_action(this.editUserId);
            this.$router.push('/read')
        }
    },
    created() {
        this.editUserId = this.$route.params.id
        console.log("editUserId === ",this.editUserId,);
        this.$store.state.users.forEach(element => {
            this.editUserData = element
        });
    }
}
</script>