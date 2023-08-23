
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const fakeApiRegister = (userData) =>
  new Promise((resolve) => setTimeout(() => resolve(userData), 1000));

export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {
  const response = await fakeApiRegister(userData);
  return response;
});

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default authSlice.reducer;
