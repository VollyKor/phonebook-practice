import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from 'redux/auth';

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    isFetching: false,
  },
  extraReducers: {
    // Register
    // ============================================
    [authOperations.register.pending](state, _) {
      state.isLoading = true;
    },
    [authOperations.register.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = payload.user;
      state.token = payload.token;
    },
    [authOperations.register.rejected](_, { payload }) {
      console.log('error', payload);
    },

    // Login
    // =======================================
    [authOperations.login.pending](state, _) {
      state.isLoading = true;
    },
    [authOperations.login.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.rejected](_, payload) {
      console.log('error', payload);
    },

    // Logout
    // ================================================
    [authOperations.logout.pending]({ isLoading }, _) {
      isLoading = true;
    },
    [authOperations.logout.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoading = false;
      state.isLoggedIn = false;
    },
    [authOperations.logout.rejected](_, payload) {
      console.log('error', payload);
    },

    // Refresh / getUser
    // =======================================================

    [authOperations.getUser.pending](state, _) {
      state.isFetching = true;
      state.isLoading = true;
    },

    [authOperations.getUser.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.isFetching = false;
      if (payload !== undefined) {
        state.user = payload;
      }
      state.isLoggedIn = true;
    },
    [authOperations.getUser.rejected](state, { payload }) {
      state.isFetching = false;
      state.isLoading = false;
      console.log('error', payload);
    },
  },
});

export default authReducer.reducer;
