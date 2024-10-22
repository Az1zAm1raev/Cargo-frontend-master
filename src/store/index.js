import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      credentials: {
        token: sessionStorage.getItem('token') || '',
        username: sessionStorage.getItem('username') || '',
        fio: sessionStorage.getItem('fio') || '',
        address: sessionStorage.getItem('address') || '',
        phone: sessionStorage.getItem('phone') || '',
        role: sessionStorage.getItem('role') || '',
        id: sessionStorage.getItem('id') || '',
      },
    }
  },
  mutations: {
    setCredentials(state, payload) {
      state.credentials.token = payload.token
      state.credentials.username = payload.username
      state.credentials.fio = payload.fio
      state.credentials.address = payload.address
      state.credentials.phone = payload.phone
      state.credentials.role = payload.role
      state.credentials.id = payload.id
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getToken: state => state.credentials.token,
    getUsername: state => state.credentials.username,
    getFio: state => state.credentials.fio,
    getAddress: state => state.credentials.address,
    getPhone: state => state.credentials.phone,
    getRole: state => state.credentials.role,
    getId: state => state.credentials.id,
  }
});