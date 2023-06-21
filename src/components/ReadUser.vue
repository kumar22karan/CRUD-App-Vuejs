<template>
    <div>
        <div class="user-list container">
            <div class="row mb-3">
                <h2 class="col">User List</h2>
                <div class="col  d-flex justify-content-end ">

                    <button class="btn btn-primary" v-on:click="addUserButton">+ Add User</button>
                </div>
            </div>
            <table class="table table-bordered bg-light">
                <thead>
                    <tr>
                        <th scope="col">Sr No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in addedNewUser" :key="user">
                        <th scope="row">1</th>
                        <td>{{ user.name }}</td>
                        <td>{{ user.age }}</td>
                        <td>{{ user.gender }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.address }}</td>
                        <td>
                            <button><i class="bi bi-pencil" v-on:click="editUser(user.id)"></i></button>
                            <button class="ms-3" v-on:click="removeUser(user.id)"><i class="bi bi-trash"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
export default {

    data(){
        return{
            addedNewUser:[]
        }
    },
    computed: {
        ...mapGetters(['getUsers']),
    },
    created() {
        this.addedNewUser = this.getUsers;
        console.log("addedNewUser", this.addedNewUser);
    },
    methods: {
        ...mapActions(['remove_user_action']),
        addUserButton() {
            this.$router.push('/read/new')
        },
        editUser(userId){
            this.$router.push(`/edit/${userId}`)
        },
        removeUser(userId){
            this.remove_user_action(userId);
        }

    }

}

</script>