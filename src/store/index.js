import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid';
export default createStore({
  state: {
    users: []
  },
  getters: {
    getUsers(state) {
      return state.users;
    }
  },
  mutations: {
    set_users(state, users) {
      state.users = users;
    },
    add_user(state, user) {
      state.users.push(user);
    },
    edit_user(state,userId){
      let editedUser = state.users.find(ele => ele.id  === userId)
      if (editedUser) {
        editedUser = { ...state.users}
      }

    },
    remove_user(state,userId){
      const index = state.users.findIndex(user => user.id === userId);
      console.log("indexindex",index);
      if (index !== -1) {
        state.users.splice(index, 1);
      }
    }
  },
  actions: {
    add_user_action({ commit }, user) {
      const newUser =  {...user,id:uuidv4()}
      commit('add_user', newUser);
    },
    edit_user_action({ commit }, userId){
      commit('edit_user', userId);
    },
    remove_user_action({ commit }, userId){
      commit('remove_user', userId);
    }
  },
  modules: {
  }
})
