<template>
    <div>
        <div class="user-list container">
            <div class="row mb-3">
                <div class="col-4">
                    <h2>User List</h2>

                </div>
                <div class="col-4 d-flex justify-content-center ">


                    <input class="form-control" type="search" @input="searchUser" name="" id="" v-model="search"
                        placeholder="Search by name">
                    <!-- <button class="btn btn-outline-secondary" type="button" @click="searchUser">
                        <i class="bi bi-search"></i>
                    </button> -->

                </div>
                <div class="col-4  d-flex justify-content-end ">

                    <button class="btn btn-primary" v-on:click="addUserButton">+ Add User</button>
                </div>
            </div>
            <table class="table table-bordered">
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
                <tbody >
                    <tr v-for="(user, index) in addedNewUser" :key="user">
                        <th scope="row">{{ index + 1 }}</th>
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
                    <tr class="text-center w-100" v-if="!addedNewUser.length">
                        <td colspan="7">No Data Found</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { debounce } from 'lodash';

export default {

    data() {
        return {
            addedNewUser: [],
            search: ""
        }
    },
    computed: {
        ...mapGetters(['getUsers']),
    },
    created() {
        this.addedNewUser = this.getUsers;
    },
    methods: {
        ...mapActions(['remove_user_action']),
        addUserButton() {
            this.$router.push('/read/new')
        },
        editUser(userId) {
            this.$router.push(`/edit/${userId}`)
        },
        removeUser(userId) {
            this.$swal({
                title: 'Are you sure?',
                text: 'You can\'t revert your action',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Delete',
                cancelButtonText: 'Cancel',
                showCloseButton: true,
                showLoaderOnConfirm: true
            }).then((result) => {
                if (result.value) {
                    this.remove_user_action(userId);
                    this.$swal({
                        icon: 'success',
                        title: 'Deleted',
                        text: 'You have successfully deleted the user',
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                    });
                } else {
                    this.$swal({
                        icon: 'info',
                        title: 'Cancelled',
                        text: 'The user was not deleted',
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                    });
                }
            })
        },
        searchUserDebounced: debounce(function () {
            if (this.search.trim() !== '') {
                this.addedNewUser = this.getUsers.filter(user => user.name.toLowerCase().includes(this.search.toLowerCase()));
            } else {
                this.addedNewUser = this.getUsers
            }
        }, 1000),

        searchUser() {
            this.searchUserDebounced();
        }
    },


}



</script>