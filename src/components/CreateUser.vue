<template>
    <div>
        <div class="user-list container" v-if="userList">
            <div class="row mb-3">
                <h2 class="col">User List</h2>
                <div class="col  d-flex justify-content-end ">

                    <button class="btn btn-primary" v-on:click="addUser()">+ Add User</button>
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
                    <tr v-for="(item, index) in newArray" :key="item">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ item.name }}</td>
                        <td>{{ item.age }}</td>
                        <td>{{ item.gender }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.address }}</td>
                        <td>
                            <button v-on:click="addUser(item)"><i class="bi bi-pencil"></i></button>
                            <button v-on:click="userDelete(index)" class="ms-3"><i class="bi bi-trash"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="container" v-else-if="addUserForm">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card bg-light">
                        <div class="card-Header">
                            <h2 class="card-title text-center" v-if="editUserForm">Edit User Information</h2>
                            <h2 class="card-title text-center" v-else>User Information</h2>
                        </div>
                        <div class="card-body">

                            <form v-on:submit.prevent="submitForm">
                                <div class="mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="name" v-model="form.name"
                                        placeholder="Enter your name">
                                </div>
                                <div class="mb-3">
                                    <label for="age" class="form-label">Age</label>
                                    <input type="number" class="form-control" id="age" v-model="form.age"
                                        placeholder="Enter your age">
                                </div>
                                <div class="mb-3">
                                    <label for="gender" class="form-label">Gender</label>
                                    <select class="form-select" id="gender" v-model="form.gender">
                                        <option selected>Select gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" v-model="form.email"
                                        placeholder="Enter your email">
                                </div>
                                <div class="mb-3">
                                    <label for="address" class="form-label">Address</label>
                                    <textarea class="form-control" id="address" rows="3" v-model="form.address"
                                        placeholder="Enter your address"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                                <button type="reset" class="btn btn-secondary ms-2">Reset</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: "",
                age: "",
                gender: "",
                email: "",
                address: ""
            },
            addUserForm: false,
            userList: true,
            newArray: [],
            newId: 0,
            editUserForm: false
        }
    },
    methods: {
        addUser(item) {
            this.form = {};
            this.editUserForm = false;
            if (item) {
                console.log(item);
                this.userList = false;
                this.addUserForm = true;
                const userDetail = item
                this.form.id = item.id
                this.form.name = userDetail.name;
                this.form.age = userDetail.age;
                this.form.gender = userDetail.gender;
                this.form.email = userDetail.email;
                this.form.address = userDetail.address;
                this.editUserForm = true;

            }
            this.userList = false;
            this.addUserForm = true;
        },
        generateId() {
            this.newId++;
            return this.newId;
        },
        submitForm() {
            if (this.editUserForm) {
                console.log(" this.form", this.form);
                let updateItem = this.newArray.find((element) => element.id === this.form.id)
                if (updateItem) {
                    updateItem.name = this.form.name;
                    updateItem.age = this.form.age;
                    updateItem.gender = this.form.gender;
                    updateItem.email = this.form.email;
                    updateItem.address = this.form.address;
                }

            } else {
                const id = this.generateId();
                const newData = {
                    ...this.form, id: id,
                }
                this.newArray.push(newData);
                console.log(this.newArray, "newArraynewArray");
            }
            this.userList = true

        },
        userDelete(index) {
            // this.newArray = this.newArray.filter((item) => item.id !== userId);
            this.newArray.splice(index, 1)
            // this.newArray.forEach((ele, index) => {
            //     console.log("ele", ele);
            //     if (ele.id === userId) {
            //         this.newArray.splice(index, 1)
            //     }
            // })
        }
    }
}
</script>

